package jsexchange

import (
	"fmt"
	"net"
	"os"
	"os/exec"
	"path/filepath"
	"testing"

	"github.com/codingeasygo/util/xsql"
	"github.com/shopspring/decimal"
	"google.golang.org/grpc"
	"sxbastudio.com/blockchain/exchange"
	"sxbastudio.com/blockchain/exchange/proto/goexchange"
	"sxbastudio.com/blockchain/exchange/proto/goexchangeimpl"
)

type TestLoader struct {
	Error error
}

func (t *TestLoader) ListSymbol(ex string) (symbols []exchange.SymbolInfo, err error) {
	symbols = append(symbols, &exchange.SymbolInfoImpl{Ex_: ex, Base_: "x", Quote_: "u"})
	err = t.Error
	return
}
func (t *TestLoader) LoadSymbol(symbol exchange.Symbol) (infoer exchange.SymbolInfo) {
	infoer = &exchange.SymbolInfoImpl{Ex_: symbol[0], Base_: "x", Quote_: "u"}
	return
}
func (t *TestLoader) ListKLine(symbol exchange.Symbol, interval exchange.Duration, limit int) (klines []*exchange.KLine, err error) {
	klines = append(klines, &exchange.KLine{Symbol: symbol, Interval: exchange.Duration(interval)})
	err = t.Error
	return
}
func (t *TestLoader) LoadKLine(symbol exchange.Symbol, interval exchange.Duration) (latest *exchange.KLine, err error) {
	latest = &exchange.KLine{Symbol: symbol, Interval: exchange.Duration(interval)}
	err = t.Error
	return
}
func (t *TestLoader) StartCacheKLine(symbol exchange.Symbol, interval exchange.Duration) (err error) {
	err = t.Error
	return
}
func (t *TestLoader) StopCacheKLine(symbol exchange.Symbol, interval exchange.Duration) (err error) {
	err = t.Error
	return
}
func (t *TestLoader) AddKLineMonitor(symbol exchange.Symbol, interval exchange.Duration, monitor exchange.KLineMonitor) (err error) {
	go func() {
		monitor.OnKLine(&exchange.KLine{Symbol: exchange.NewSymbol("test", "x-u")})
	}()
	err = t.Error
	return
}
func (t *TestLoader) RemoveKLineMonitor(symbol exchange.Symbol, interval exchange.Duration, monitor exchange.KLineMonitor) (err error) {
	err = t.Error
	return
}
func (t *TestLoader) LoadLatestDepth(symbol exchange.Symbol) (depth *exchange.Depth, err error) {
	depth = &exchange.Depth{Symbol: symbol, Asks: [][]decimal.Decimal{{decimal.NewFromFloat(10), decimal.NewFromFloat(1)}}, Bids: [][]decimal.Decimal{{decimal.NewFromFloat(10), decimal.NewFromFloat(1)}}}
	err = t.Error
	return
}
func (t *TestLoader) StartCacheDepth(symbol exchange.Symbol) (err error) {
	err = t.Error
	return
}
func (t *TestLoader) StopCacheDepth(symbol exchange.Symbol) (err error) {
	err = t.Error
	return
}
func (t *TestLoader) AddDepthMonitor(symbol exchange.Symbol, monitor exchange.DepthMonitor) (err error) {
	go func() {
		monitor.OnDepth(&exchange.Depth{Symbol: exchange.NewSymbol("test", "x-u")})
	}()
	err = t.Error
	return
}
func (t *TestLoader) RemoveDepthMonitor(symbol exchange.Symbol, monitor exchange.DepthMonitor) (err error) {
	err = t.Error
	return
}
func (t *TestLoader) ListLatestTicker(symbols ...exchange.Symbol) (tickers map[string]*exchange.Ticker, err error) {
	symbol := exchange.NewSymbol("test", "x-u")
	tickers = map[string]*exchange.Ticker{symbol.String(): {Symbol: symbol, CreateTime: xsql.TimeNow()}}
	err = t.Error
	return
}
func (t *TestLoader) LoadLatestTicker(symbol exchange.Symbol) (ticker *exchange.Ticker, err error) {
	if symbol.String() == "test.x-u" {
		ticker = &exchange.Ticker{Symbol: exchange.NewSymbol("test", "x-u"), CreateTime: xsql.TimeNow()}
	}
	err = t.Error
	return
}
func (t *TestLoader) StartCacheTicker(symbol exchange.Symbol) (err error) {
	err = t.Error
	return
}
func (t *TestLoader) StopCacheTicker(symbol exchange.Symbol) (err error) {
	err = t.Error
	return
}
func (t *TestLoader) AddTickerMonitor(symbol exchange.Symbol, monitor exchange.TickerMonitor) (err error) {
	go func() {
		monitor.OnTicker(&exchange.Ticker{Symbol: exchange.NewSymbol("test", "x-u")})
	}()
	err = t.Error
	return
}
func (t *TestLoader) RemoveTickerMonitor(symbol exchange.Symbol, monitor exchange.TickerMonitor) (err error) {
	err = t.Error
	return
}

func TestMarket(t *testing.T) {
	listener, _ := net.Listen("tcp", ":0")
	srv := grpc.NewServer()
	loader := &TestLoader{}
	market := goexchangeimpl.NewMarketImpl(loader)
	goexchange.RegisterMarketServer(srv, market)
	go srv.Serve(listener)
	cmd := exec.Command("node", "market_test.mjs")
	cmd.Dir, _ = filepath.Abs("./test")
	cmd.Stderr = os.Stderr
	cmd.Stdout = os.Stdout
	cmd.Env = append(cmd.Env, fmt.Sprintf("MARKET_SERVER=%v", listener.Addr()))
	err := cmd.Run()
	if err != nil {
		t.Error(err)
		return
	}
}
