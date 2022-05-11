var messages = require('./exchange_pb');
var services = require('./exchange_grpc_pb');
var grpc = require('@grpc/grpc-js');

import { ListBalanceArg, ListHoldingArg } from ".";
import { Balance, NewWalletArg, LoadBalanceArg, Holding, LoadHoldingArg, OrderRequest, OrderResponse, CancelOrderArg, QueryOrderArg, ListOrderArg, WalletEvent, Monitor, WithdrawArg, Tx } from "./define";

export interface Wallet {
    listBalance(args?: ListBalanceArg): Promise<Map<string, Balance>>;
    loadBalance(args: LoadBalanceArg): Promise<Balance>;
    listHolding(args?: ListHoldingArg): Promise<Map<string, Holding>>;
    loadHolding(args: LoadHoldingArg): Promise<Holding>;
    placeOrder(args: OrderRequest): Promise<OrderResponse>;
    cancelOrder(args: CancelOrderArg): Promise<OrderResponse>;
    queryOrder(args: QueryOrderArg): Promise<OrderResponse>;
    listOrder(args: ListOrderArg): Promise<OrderResponse[]>;
    monitor(data: (event: WalletEvent, m: Monitor) => void, err?: (e: any) => void): Monitor;
}

function jsonValue(v: any): any {
    if (v) {
        return JSON.parse(v);
    } else {
        return null;
    }
}

export class WalletImpl {
    client: any;
    walletID: any
    constructor(client: any, walletID: any) {
        this.client = client;
        this.walletID = walletID;
    }

    async listBalance(args?: ListBalanceArg): Promise<Map<string, Balance>> {
        return new Promise<Map<string, Balance>>((resolve, reject) => {
            var arg = new messages.ListBalanceArg();
            arg.setWallet(this.walletID);
            if (args && args.sync) {
                arg.setSync(args.sync);
            }
            this.client.listBalance(arg, (err: any, res: any) => {
                if (err) {
                    reject(err);
                    return;
                }
                var balances = new Map<string, Balance>();
                res.getBalancesMap().forEach((v: any, k: string) => {
                    balances.set(k, {
                        asset: v.getAsset(),
                        free: v.getFree(),
                        locked: v.getLocked(),
                        volume: v.getVolume(),
                        raw: jsonValue(v.getRaw()),
                    })
                });
                resolve(balances);
            });
        });
    };

    async loadBalance(args: LoadBalanceArg): Promise<Balance> {
        return new Promise<Balance>((resolve, reject) => {
            var arg = new messages.LoadBalanceArg();
            arg.setWallet(this.walletID);
            arg.setAsset(args.asset);
            arg.setSync(args.sync);
            this.client.loadBalance(arg, (err: any, res: any) => {
                if (err) {
                    reject(err);
                    return;
                }
                resolve({
                    asset: res.getAsset(),
                    free: res.getFree(),
                    locked: res.getLocked(),
                    volume: res.getVolume(),
                    raw: jsonValue(res.getRaw()),
                });
            });
        });
    };

    async listHolding(args?: ListHoldingArg): Promise<Map<string, Holding>> {
        return new Promise<Map<string, Holding>>((resolve, reject) => {
            var arg = new messages.ListHoldingArg();
            arg.setWallet(this.walletID);
            if (args && args.sync) {
                arg.setSync(args.sync);
            }
            this.client.listHolding(arg, (err: any, res: any) => {
                if (err) {
                    reject(err);
                    return;
                }
                var holdings = new Map<string, Holding>();
                res.getHoldingsMap().forEach((v: any, k: string) => {
                    holdings.set(k, {
                        symbol: v.getSymbol(),
                        amount: v.getAmount(),
                        position: v.getPosition(),
                        avgPrice: v.getAvgprice(),
                        lever: v.getLever(),
                        deposit: v.getDeposit(),
                        upl: v.getUpl(),
                        raw: jsonValue(v.getRaw()),
                    });
                });
                resolve(holdings);
            });
        });
    };

    async loadHolding(args: LoadHoldingArg): Promise<Holding> {
        return new Promise<Holding>((resolve, reject) => {
            var arg = new messages.LoadHoldingArg();
            arg.setWallet(this.walletID);
            arg.setSymbol(args.symbol);
            arg.setPosition(args.position);
            arg.setSync(args.sync);
            this.client.loadHolding(arg, (err: any, res: any) => {
                if (err) {
                    reject(err);
                    return;
                }
                resolve({
                    symbol: res.getSymbol(),
                    amount: res.getAmount(),
                    position: res.getPosition(),
                    avgPrice: res.getAvgprice(),
                    lever: res.getLever(),
                    deposit: res.getDeposit(),
                    upl: res.getUpl(),
                    raw: jsonValue(res.getRaw()),
                });
            });
        });
    };

    async withdraw(args: WithdrawArg): Promise<Tx> {
        return new Promise<Tx>((resolve, reject) => {
            var arg = new messages.WithdrawArg();
            arg.setWallet(this.walletID);
            arg.setAsset(args.asset);
            if (args.amount) {
                arg.setAmount(args.amount);
            } else {
                arg.setAmount("0");
            }
            arg.setMethod(args.method);
            arg.setPassword(args.password);
            arg.setCode(args.code);
            arg.setTo(args.to);
            this.client.withdraw(arg, (err: any, res: any) => {
                if (err) {
                    reject(err);
                    return;
                }
                resolve({
                    txid: res.getTxid(),
                    raw: res.getRaw(),
                });
            });
        });
    }

    async placeOrder(args: OrderRequest): Promise<OrderResponse> {
        return new Promise<OrderResponse>((resolve, reject) => {
            var arg = new messages.OrderRequest();
            arg.setWallet(this.walletID);
            arg.setSymbol(args.symbol);
            arg.setType(args.type);
            arg.setClientorderid(args.clientOrderID);
            arg.setSide(args.side);
            arg.setOffset(args.offset);
            arg.setLever(args.lever);
            if (args.invest) {
                arg.setInvest(args.invest);
            } else {
                arg.setInvest("0");
            }
            if (args.quantity) {
                arg.setQuantity(args.quantity);
            } else {
                arg.setQuantity("0");
            }
            if (args.price) {
                arg.setPrice(args.price);
            } else {
                arg.setPrice("0");
            }
            arg.setOptions(args.options);
            this.client.placeOrder(arg, (err: any, res: any) => {
                if (err) {
                    reject(err);
                    return;
                }
                resolve({
                    symbol: res.getSymbol(),
                    type: res.getType(),
                    clientOrderID: res.getClientorderid(),
                    side: res.getSide(),
                    offset: res.getOffset(),
                    position: res.getPosition(),
                    lever: res.getLever(),
                    quantity: res.getQuantity(),
                    price: res.getPrice(),
                    orderID: res.getOrderid(),
                    executedQty: res.getExecutedqty(),
                    avgPrice: res.getAvgprice(),
                    cumQuote: res.getCumquote(),
                    status: res.getStatus(),
                    raw: jsonValue(res.getRaw()),
                });
            });
        });
    };

    async cancelOrder(args: CancelOrderArg): Promise<OrderResponse> {
        return new Promise<OrderResponse>((resolve, reject) => {
            var arg = new messages.CancelOrderArg();
            arg.setWallet(this.walletID);
            arg.setClientorderid(args.clientOrderID);
            arg.setOrderid(args.orderID);
            arg.setSymbol(args.symbol);
            this.client.cancelOrder(arg, (err: any, res: any) => {
                if (err) {
                    reject(err);
                    return;
                }
                resolve({
                    symbol: res.getSymbol(),
                    type: res.getType(),
                    clientOrderID: res.getClientorderid(),
                    side: res.getSide(),
                    offset: res.getOffset(),
                    position: res.getPosition(),
                    lever: res.getLever(),
                    quantity: res.getQuantity(),
                    price: res.getPrice(),
                    orderID: res.getOrderid(),
                    executedQty: res.getExecutedqty(),
                    avgPrice: res.getAvgprice(),
                    cumQuote: res.getCumquote(),
                    status: res.getStatus(),
                    raw: jsonValue(res.getRaw()),
                });
            });
        });
    };

    async queryOrder(args: QueryOrderArg): Promise<OrderResponse> {
        return new Promise<OrderResponse>((resolve, reject) => {
            var arg = new messages.QueryOrderArg();
            arg.setWallet(this.walletID);
            arg.setClientorderid(args.clientOrderID);
            arg.setOrderid(args.orderID);
            arg.setSymbol(args.symbol);
            arg.setSync(arg.sync);
            this.client.queryOrder(arg, (err: any, res: any) => {
                if (err) {
                    reject(err);
                    return;
                }
                resolve({
                    symbol: res.getSymbol(),
                    type: res.getType(),
                    clientOrderID: res.getClientorderid(),
                    side: res.getSide(),
                    offset: res.getOffset(),
                    position: res.getPosition(),
                    lever: res.getLever(),
                    quantity: res.getQuantity(),
                    price: res.getPrice(),
                    orderID: res.getOrderid(),
                    executedQty: res.getExecutedqty(),
                    avgPrice: res.getAvgprice(),
                    cumQuote: res.getCumquote(),
                    status: res.getStatus(),
                    raw: jsonValue(res.getRaw()),
                });
            });
        });
    };

    async listOrder(args: ListOrderArg): Promise<OrderResponse[]> {
        return new Promise<OrderResponse[]>((resolve, reject) => {
            var arg = new messages.ListOrderArg();
            arg.setWallet(this.walletID);
            arg.setSymbol(args.symbol);
            arg.setOpenonly(args.openOnly);
            arg.setLimit(arg.limit);
            this.client.listOrder(arg, (err: any, res: any) => {
                if (err) {
                    reject(err);
                    return;
                }
                var allOrders: OrderResponse[] = [];
                var rawOrders = res.getOrdersList();
                rawOrders.forEach((order: any) => {
                    allOrders.push({
                        symbol: order.getSymbol(),
                        type: order.getType(),
                        clientOrderID: order.getClientorderid(),
                        side: order.getSide(),
                        offset: order.getOffset(),
                        position: order.getPosition(),
                        lever: order.getLever(),
                        quantity: order.getQuantity(),
                        price: order.getPrice(),
                        orderID: order.getOrderid(),
                        executedQty: order.getExecutedqty(),
                        avgPrice: order.getAvgprice(),
                        cumQuote: order.getCumquote(),
                        status: order.getStatus(),
                        raw: jsonValue(order.getRaw()),
                    });
                });
                resolve(allOrders);
            });
        });
    }

    monitor(data: (event: WalletEvent, m: Monitor) => void, err?: (e: any) => void): Monitor {
        var arg = new messages.MonitorArg();
        arg.setWallet(this.walletID);
        var m = this.client.monitor(arg);
        m.on("data", (res: any) => {
            data({
                event: res.getEvent(),
                clientOrderID: res.getClientorderid(),
                orderID: res.getOrderid(),
                asset: res.getAsset(),
                position: res.getPosition(),
                symbol: res.getSymbol(),
            }, m);
        });
        if (err) {
            m.on("error", err);
        }
        return m;
    }

}

export class WalletManager {
    client: any;
    constructor(server: string) {
        this.client = new services.WalletClient(server, grpc.credentials.createInsecure());
    }
    stop() {
        grpc.closeClient(this.client);
    }
    async create(args: NewWalletArg): Promise<Wallet> {
        return new Promise<Wallet>((resolve, reject) => {
            var arg = new messages.NewWalletArg();
            arg.setType(args.type);
            arg.setApikey(args.apikey);
            arg.setApisec(args.apisec);
            arg.setApipass(args.apipass);
            arg.setPrikey(args.prikey);
            arg.setPubkey(args.pubkey);
            arg.setUserid(args.userid);
            arg.setAppid(args.appid);
            this.client.newWallet(arg, (err: any, res: any) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(new WalletImpl(this.client, res));
                }
            })
        });
    }
}
