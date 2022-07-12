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
exports.Market = void 0;
const messages = require('./exchange_pb');
const services = require('./exchange_grpc_pb');
const grpc = require('@grpc/grpc-js');
class Market {
    constructor(server) {
        this.client = new services.MarketClient(server, grpc.credentials.createInsecure());
    }
    stop() {
        grpc.closeClient(this.client);
    }
    loadSymbol(args) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                var arg = new messages.SymbolArg();
                arg.setSymbol(args.symbol);
                this.client.loadSymbol(arg, (err, res) => {
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
                        base: res.getBase(),
                        quote: res.getQuote(),
                        contractSize: res.getContractsize(),
                    });
                });
            });
        });
    }
    listSymbol(args) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                var arg = new messages.SymbolArg();
                arg.setExchange(args.exchange);
                this.client.listSymbol(arg, (err, res) => {
                    if (err) {
                        reject(err);
                        return;
                    }
                    var symbols = [];
                    res.getSymbolsList().forEach((v) => {
                        symbols.push({
                            symbol: v.getSymbol(),
                            base: v.getBase(),
                            quote: v.getQuote(),
                            contractSize: v.getContractsize(),
                        });
                    });
                    resolve(symbols);
                });
            });
        });
    }
    listLatestTicker(args) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                var arg = new messages.TickerArg();
                arg.setSymbolsList(args.symbols);
                this.client.listLatestTicker(arg, (err, res) => {
                    if (err) {
                        reject(err);
                        return;
                    }
                    var tickers = new Map();
                    res.getTickersMap().forEach((v, k) => {
                        tickers.set(k, {
                            symbol: v.getSymbol(),
                            bidPrice: v.getBidprice(),
                            bidQty: v.getBidqty(),
                            askPrice: v.getAskprice(),
                            askQty: v.getAskqty(),
                            closePrice: v.getCloseprice(),
                            createTime: v.getCreatetime(),
                        });
                    });
                    resolve(tickers);
                });
            });
        });
    }
    loadLatestTicker(args) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                var arg = new messages.TickerArg();
                arg.setSymbol(args.symbol);
                this.client.loadLatestTicker(arg, (err, res) => {
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
                        bidPrice: res.getBidprice(),
                        bidQty: res.getBidqty(),
                        askPrice: res.getAskprice(),
                        askQty: res.getAskqty(),
                        closePrice: res.getCloseprice(),
                        createTime: res.getCreatetime(),
                    });
                });
            });
        });
    }
    startCacheTicker(args) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                var arg = new messages.TickerArg();
                if (args) {
                    arg.setSymbol(args.symbol);
                    arg.setSymbolsList(args.symbols);
                }
                this.client.startCacheTicker(arg, (err, res) => {
                    if (err) {
                        reject(err);
                        return;
                    }
                    resolve(res.getOk());
                });
            });
        });
    }
    stopCacheTicker(args) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                var arg = new messages.TickerArg();
                if (args) {
                    arg.setSymbol(args.symbol);
                    arg.setSymbolsList(args.symbols);
                }
                this.client.stopCacheTicker(arg, (err, res) => {
                    if (err) {
                        reject(err);
                        return;
                    }
                    resolve(res.getOk());
                });
            });
        });
    }
    monitorTicker(args, data, err) {
        var arg = new messages.TickerArg();
        if (args) {
            arg.setSymbol(args.symbol);
            arg.setSymbolsList(args.symbols);
        }
        var m = this.client.monitorTicker(arg);
        m.on("data", (res) => {
            data({
                symbol: res.getSymbol(),
                bidPrice: res.getBidprice(),
                bidQty: res.getBidqty(),
                askPrice: res.getAskprice(),
                askQty: res.getAskqty(),
                closePrice: res.getCloseprice(),
                createTime: res.getCreatetime(),
            }, m);
        });
        if (err) {
            m.on("error", err);
        }
        return m;
    }
    /** kline **/
    listKLine(args) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                var arg = new messages.KLineArg();
                arg.setSymbol(args.symbol);
                arg.setInterval(args.interval);
                arg.setLimit(args.limit);
                this.client.listKLine(arg, (err, res) => {
                    if (err) {
                        reject(err);
                        return;
                    }
                    var klines = [];
                    res.getKlinesList().forEach((v) => {
                        klines.push({
                            symbol: v.getSymbol(),
                            interval: v.getInterval(),
                            amount: v.getAmount(),
                            count: v.getCount(),
                            open: v.getOpen(),
                            close: v.getClose(),
                            low: v.getLow(),
                            high: v.getHigh(),
                            volume: v.getVolume(),
                            average: v.getAverage(),
                            startTime: v.getStarttime(),
                        });
                    });
                    resolve(klines);
                });
            });
        });
    }
    loadKLine(args) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                var arg = new messages.KLineArg();
                arg.setSymbol(args.symbol);
                arg.setInterval(args.interval);
                this.client.loadKLine(arg, (err, res) => {
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
                        interval: res.getInterval(),
                        amount: res.getAmount(),
                        count: res.getCount(),
                        open: res.getOpen(),
                        close: res.getClose(),
                        low: res.getLow(),
                        high: res.getHigh(),
                        volume: res.getVolume(),
                        average: res.getAverage(),
                        startTime: res.getStarttime(),
                    });
                });
            });
        });
    }
    startCacheKLine(args) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                var arg = new messages.KLineArg();
                if (args) {
                    arg.setSymbol(args.symbol);
                    arg.setInterval(args.interval);
                    arg.setLimit(args.limit);
                }
                this.client.startCacheKLine(arg, (err, res) => {
                    if (err) {
                        reject(err);
                        return;
                    }
                    resolve(res.getOk());
                });
            });
        });
    }
    stopCacheKLine(args) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                var arg = new messages.KLineArg();
                if (args) {
                    arg.setSymbol(args.symbol);
                    arg.setInterval(args.interval);
                    arg.setLimit(args.limit);
                }
                this.client.stopCacheKLine(arg, (err, res) => {
                    if (err) {
                        reject(err);
                        return;
                    }
                    resolve(res.getOk());
                });
            });
        });
    }
    monitorKLine(args, data, err) {
        var arg = new messages.KLineArg();
        if (args) {
            arg.setSymbol(args.symbol);
            arg.setInterval(args.interval);
            arg.setLimit(args.limit);
        }
        var m = this.client.monitorKLine(arg);
        m.on("data", (res) => {
            data({
                symbol: res.getSymbol(),
                interval: res.getInterval(),
                amount: res.getAmount(),
                count: res.getCount(),
                open: res.getOpen(),
                close: res.getClose(),
                low: res.getLow(),
                high: res.getHigh(),
                volume: res.getVolume(),
                average: res.getAverage(),
                startTime: res.getStarttime(),
            }, m);
        });
        if (err) {
            m.on("error", err);
        }
        return m;
    }
    /** detph **/
    loadLatestDepth(args) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                var arg = new messages.DepthArg();
                arg.setSymbol(args.symbol);
                this.client.loadLatestDepth(arg, (err, res) => {
                    if (err) {
                        reject(err);
                        return;
                    }
                    if (!res.getSymbol()) {
                        resolve(undefined);
                        return;
                    }
                    var depth = {
                        symbol: res.getSymbol(),
                        bids: [],
                        asks: [],
                    };
                    res.getBidsList().forEach((v) => {
                        depth.bids.push({
                            amount: v.getAmount(),
                            price: v.getPrice(),
                        });
                    });
                    res.getAsksList().forEach((v) => {
                        depth.asks.push({
                            amount: v.getAmount(),
                            price: v.getPrice(),
                        });
                    });
                    resolve(depth);
                });
            });
        });
    }
    startCacheDepth(args) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                var arg = new messages.DepthArg();
                if (args) {
                    arg.setSymbol(args.symbol);
                }
                this.client.startCacheDepth(arg, (err, res) => {
                    if (err) {
                        reject(err);
                        return;
                    }
                    resolve(res.getOk());
                });
            });
        });
    }
    stopCacheDepth(args) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                var arg = new messages.DepthArg();
                if (args) {
                    arg.setSymbol(args.symbol);
                }
                this.client.stopCacheDepth(arg, (err, res) => {
                    if (err) {
                        reject(err);
                        return;
                    }
                    resolve(res.getOk());
                });
            });
        });
    }
    monitorDepth(args, data, err) {
        var arg = new messages.DepthArg();
        if (args) {
            arg.setSymbol(args.symbol);
        }
        var m = this.client.monitorDepth(arg);
        m.on("data", (res) => {
            var depth = {
                symbol: res.getSymbol(),
                bids: [],
                asks: [],
            };
            res.getBidsList().forEach((v) => {
                depth.bids.push({
                    amount: v.getAmount(),
                    price: v.getPrice(),
                });
            });
            res.getAsksList().forEach((v) => {
                depth.asks.push({
                    amount: v.getAmount(),
                    price: v.getPrice(),
                });
            });
            data(depth, m);
        });
        if (err) {
            m.on("error", err);
        }
        return m;
    }
}
exports.Market = Market;
