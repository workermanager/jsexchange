package jsexchange

import (
	"fmt"
	"net"
	"os"
	"os/exec"
	"path/filepath"
	"testing"
	"time"

	"github.com/codingeasygo/util/xmap"
	"github.com/shopspring/decimal"
	"google.golang.org/grpc"
	"sxbastudio.com/blockchain/exchange"
	"sxbastudio.com/blockchain/exchange/proto/goexchange"
	"sxbastudio.com/blockchain/exchange/proto/goexchangeimpl"
)

type TestMockWallet struct {
	*exchange.EmptyWallet
	Balances  map[string]*exchange.Balance
	Holdings  map[string]*exchange.Holding
	ErrorCall func() error
}

func (m *TestMockWallet) Start(conf xmap.M) (err error) {
	err = m.ErrorCall()
	fmt.Println("-->", err)
	return
}

func (m *TestMockWallet) LoadAccountInfo() (info exchange.AccountInfo, err error) {
	err = m.ErrorCall()
	return
}

func (m *TestMockWallet) ListBalance(sync bool) (balances map[string]*exchange.Balance, err error) {
	balances = m.Balances
	err = m.ErrorCall()
	return
}
func (m *TestMockWallet) LoadBalance(asset string, sync bool) (balance *exchange.Balance) {
	balance = m.Balances[asset]
	return
}
func (m *TestMockWallet) ClearBalance(assets ...string) (err error) {
	err = m.ErrorCall()
	return
}

func (m *TestMockWallet) ListHolding(sync bool) (holdings map[string]*exchange.Holding, err error) {
	holdings = m.Holdings
	err = m.ErrorCall()
	return
}
func (m *TestMockWallet) LoadHolding(position string, symbol exchange.Symbol, sync bool) (holding *exchange.Holding) {
	holding = m.Holdings[position+"."+symbol.String()]
	return
}
func (m *TestMockWallet) ClearHolding(symbols ...exchange.Symbol) (err error) {
	err = m.ErrorCall()
	return
}

func (m *TestMockWallet) Withdraw(asset string, amount decimal.Decimal, method, password, code, to, tag string) (txid string, result xmap.M, err error) {
	err = m.ErrorCall()
	return
}
func (m *TestMockWallet) ListTransfer(side string, startTime time.Time, endTime time.Time) (transfers []*exchange.Transfer, err error) {
	transfers = append(transfers, &exchange.Transfer{})
	err = m.ErrorCall()
	return
}

func (m *TestMockWallet) PlaceOrder(request *exchange.OrderRequest) (response *exchange.OrderResponse, err error) {
	response = &exchange.OrderResponse{Status: exchange.OrderStatusDoneFull}
	err = m.ErrorCall()
	return
}
func (m *TestMockWallet) CancelOrder(symbol exchange.Symbol, clientOrderID, orderID string) (response *exchange.OrderResponse, err error) {
	response = &exchange.OrderResponse{Status: exchange.OrderStatusDoneFull}
	err = m.ErrorCall()
	return
}
func (m *TestMockWallet) QueryOrder(symbol exchange.Symbol, clientOrderID, orderID string, sync bool) (response *exchange.OrderResponse, err error) {
	response = &exchange.OrderResponse{Status: exchange.OrderStatusDoneFull}
	err = m.ErrorCall()
	return
}
func (m *TestMockWallet) ListOrder(symbol exchange.Symbol, openOnly bool, limit int) (response []*exchange.OrderResponse, err error) {
	response = []*exchange.OrderResponse{{Status: exchange.OrderStatusDoneFull}}
	err = m.ErrorCall()
	return
}

func (m *TestMockWallet) AddWalletMonitor(monitor exchange.WalletMonitor) {
	go func() {
		monitor.OnBalance("balance", "test")
		monitor.OnHolding("holding", "test", "test")
		monitor.OnOrder("order", "test", "test")
	}()
}

func (m *TestMockWallet) RemoveWalletMonitor(monitor exchange.WalletMonitor) {
}

func TestWallet(t *testing.T) {
	listener, _ := net.Listen("tcp", ":0")
	srv := grpc.NewServer()
	creator := exchange.NewWalletFactory()
	var testError error
	creator.AddCreator("test", func(owner exchange.Owner) (wallet exchange.Wallet, err error) {
		mock := &TestMockWallet{
			Balances:  map[string]*exchange.Balance{},
			Holdings:  map[string]*exchange.Holding{},
			ErrorCall: func() error { return testError },
		}
		mock.Balances["USDT"] = &exchange.Balance{
			Asset: "USDT",
			Free:  decimal.NewFromFloat(1000),
		}
		mock.Holdings[exchange.WalletPositionLong+".USDTETH"] = &exchange.Holding{
			Symbol:   "USDTETH",
			Amount:   decimal.NewFromFloat(10.10),
			Position: exchange.WalletPositionLong,
		}
		wallet = mock
		return
	})
	wallet := goexchangeimpl.NewWalletImpl(creator)
	goexchange.RegisterWalletServer(srv, wallet)
	go srv.Serve(listener)
	cmd := exec.Command("node", "wallet_test.mjs")
	cmd.Dir, _ = filepath.Abs("./test")
	cmd.Stderr = os.Stderr
	cmd.Stdout = os.Stdout
	cmd.Env = append(cmd.Env, fmt.Sprintf("WALLET_SERVER=%v", listener.Addr()))
	err := cmd.Run()
	if err != nil {
		t.Error(err)
		return
	}
}
