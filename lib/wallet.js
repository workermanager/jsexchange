"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WalletManager = exports.WalletImpl = void 0;
var messages = require('./exchange_pb');
var services = require('./exchange_grpc_pb');
var grpc = require('@grpc/grpc-js');
const define_1 = require("./define");
function jsonValue(v) {
    if (v) {
        return JSON.parse(v);
    }
    else {
        return null;
    }
}
class WalletImpl {
    constructor(client, walletID) {
        this.client = client;
        this.walletID = walletID;
    }
    loadAccountInfo() {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                var arg = new messages.LoadAccountInfoArg();
                arg.setWallet(this.walletID);
                this.client.loadAccountInfo(arg, (err, res) => {
                    if (err) {
                        reject(err);
                        return;
                    }
                    var info = new define_1.AccountInfo();
                    info.info = JSON.parse(res.getInfo());
                    if (info.info) {
                        info.totalValue = info.info.totalValue;
                    }
                    resolve(info);
                });
            });
        });
    }
    listBalance(args) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                var arg = new messages.ListBalanceArg();
                arg.setWallet(this.walletID);
                if (args && args.sync) {
                    arg.setSync(args.sync);
                }
                this.client.listBalance(arg, (err, res) => {
                    if (err) {
                        reject(err);
                        return;
                    }
                    var balances = new Map();
                    res.getBalancesMap().forEach((v, k) => {
                        balances.set(k, {
                            asset: v.getAsset(),
                            free: v.getFree(),
                            locked: v.getLocked(),
                            volume: v.getVolume(),
                            raw: jsonValue(v.getRaw()),
                        });
                    });
                    resolve(balances);
                });
            });
        });
    }
    ;
    loadBalance(args) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                var arg = new messages.LoadBalanceArg();
                arg.setWallet(this.walletID);
                arg.setAsset(args.asset);
                arg.setSync(args.sync);
                this.client.loadBalance(arg, (err, res) => {
                    if (err) {
                        reject(err);
                        return;
                    }
                    if (!res.getAsset()) {
                        resolve(undefined);
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
        });
    }
    ;
    listHolding(args) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                var arg = new messages.ListHoldingArg();
                arg.setWallet(this.walletID);
                if (args && args.sync) {
                    arg.setSync(args.sync);
                }
                this.client.listHolding(arg, (err, res) => {
                    if (err) {
                        reject(err);
                        return;
                    }
                    var holdings = new Map();
                    res.getHoldingsMap().forEach((v, k) => {
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
        });
    }
    ;
    loadHolding(args) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                var arg = new messages.LoadHoldingArg();
                arg.setWallet(this.walletID);
                arg.setSymbol(args.symbol);
                arg.setPosition(args.position);
                arg.setSync(args.sync);
                this.client.loadHolding(arg, (err, res) => {
                    if (err) {
                        reject(err);
                        return;
                    }
                    if (!res.getSymbol()) {
                        resolve(undefined);
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
        });
    }
    ;
    withdraw(args) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                var arg = new messages.WithdrawArg();
                arg.setWallet(this.walletID);
                arg.setAsset(args.asset);
                if (args.amount) {
                    arg.setAmount(args.amount);
                }
                else {
                    arg.setAmount("0");
                }
                arg.setMethod(args.method);
                arg.setPassword(args.password);
                arg.setCode(args.code);
                arg.setTo(args.to);
                arg.setTag(args.tag);
                this.client.withdraw(arg, (err, res) => {
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
        });
    }
    listTransfer(args) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                var arg = new messages.ListTransferArg();
                arg.setWallet(this.walletID);
                arg.setSide(args.side);
                if (args.startTime) {
                    arg.setStarttime(args.startTime);
                }
                if (args.endTime) {
                    arg.setEndtime(args.endTime);
                }
                this.client.listTransfer(arg, (err, res) => {
                    if (err) {
                        reject(err);
                        return;
                    }
                    var allTransfers = [];
                    var rawTransfers = res.getTransfersList();
                    rawTransfers.forEach((transfer) => {
                        allTransfers.push({
                            id: transfer.getId(),
                            side: transfer.getSide(),
                            asset: transfer.getAsset(),
                            amount: transfer.getAmount(),
                            fee: transfer.getFee(),
                            address: transfer.getAddress(),
                            status: transfer.getStatus(),
                            raw: jsonValue(transfer.getRaw()),
                        });
                    });
                    resolve(allTransfers);
                });
            });
        });
    }
    placeOrder(args) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
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
                }
                else {
                    arg.setInvest("0");
                }
                if (args.quantity) {
                    arg.setQuantity(args.quantity);
                }
                else {
                    arg.setQuantity("0");
                }
                if (args.price) {
                    arg.setPrice(args.price);
                }
                else {
                    arg.setPrice("0");
                }
                if (args.options) {
                    arg.setOptions(JSON.stringify(args.options));
                }
                this.client.placeOrder(arg, (err, res) => {
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
        });
    }
    ;
    cancelOrder(args) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                var arg = new messages.CancelOrderArg();
                arg.setWallet(this.walletID);
                arg.setClientorderid(args.clientOrderID);
                arg.setOrderid(args.orderID);
                arg.setSymbol(args.symbol);
                this.client.cancelOrder(arg, (err, res) => {
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
        });
    }
    ;
    queryOrder(args) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                var arg = new messages.QueryOrderArg();
                arg.setWallet(this.walletID);
                arg.setClientorderid(args.clientOrderID);
                arg.setOrderid(args.orderID);
                arg.setSymbol(args.symbol);
                arg.setSync(args.sync);
                this.client.queryOrder(arg, (err, res) => {
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
        });
    }
    ;
    listOrder(args) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                var arg = new messages.ListOrderArg();
                arg.setWallet(this.walletID);
                arg.setSymbol(args.symbol);
                arg.setOpenonly(args.openOnly);
                arg.setLimit(arg.limit);
                this.client.listOrder(arg, (err, res) => {
                    if (err) {
                        reject(err);
                        return;
                    }
                    var allOrders = [];
                    var rawOrders = res.getOrdersList();
                    rawOrders.forEach((order) => {
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
        });
    }
    monitor(data, err) {
        var arg = new messages.MonitorArg();
        arg.setWallet(this.walletID);
        var m = this.client.monitor(arg);
        m.on("data", (res) => {
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
exports.WalletImpl = WalletImpl;
class WalletManager {
    constructor(server) {
        this.client = new services.WalletClient(server, grpc.credentials.createInsecure());
    }
    stop() {
        grpc.closeClient(this.client);
    }
    create(args) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                var arg = new messages.NewWalletArg();
                arg.setType(args.type);
                arg.setApikey(args.apikey);
                arg.setApisec(args.apisec);
                arg.setApipass(args.apipass);
                arg.setPrikey(args.prikey);
                arg.setPubkey(args.pubkey);
                arg.setUserid(args.userid);
                arg.setAppid(args.appid);
                this.client.newWallet(arg, (err, res) => {
                    if (err) {
                        reject(err);
                    }
                    else {
                        resolve(new WalletImpl(this.client, res));
                    }
                });
            });
        });
    }
}
exports.WalletManager = WalletManager;
