const messages = require('./exchange_pb');
const services = require('./exchange_grpc_pb');
const grpc = require('@grpc/grpc-js');

import { Depth, DepthArg, KLine, KLineArg, Monitor, SymbolArg, Ticker, TickerArg } from "./define"

export class Market {
    client: any;
    constructor(server: string) {
        this.client = new services.MarketClient(server, grpc.credentials.createInsecure());
    }
    stop() {
        grpc.closeClient(this.client);
    }
    async listSymbol(args: SymbolArg): Promise<string[]> {
        return new Promise<string[]>((resolve, reject) => {
            var arg = new messages.SymbolArg();
            arg.setExchange(args.exchange);
            this.client.listSymbol(arg, (err: any, res: any) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(res.getSymbolsList());
                }
            });
        });
    }
    async listLatestTicker(args: TickerArg): Promise<Map<string, Ticker>> {
        return new Promise<Map<string, Ticker>>((resolve, reject) => {
            var arg = new messages.TickerArg();
            if (args) {
                arg.setSymbol(args.symbol);
                arg.setSymbolsList(args.symbols);
            }
            this.client.listLatestTicker(arg, (err: any, res: any) => {
                if (err) {
                    reject(err);
                    return;
                }
                var tickers = new Map<string, Ticker>();
                res.getTickersMap().forEach((v: any, k: string) => {
                    tickers.set(k, {
                        symbol: v.getSymbol(),
                        bidPrice: v.getBidprice(),
                        bidQty: v.getBidqty(),
                        askPrice: v.getAskprice(),
                        askQty: v.getAskqty(),
                        createTime: v.getCreatetime(),
                    });
                });
                resolve(tickers);
            });
        });
    }
    async loadLatestTicker(args: TickerArg): Promise<Ticker> {
        return new Promise<Ticker>((resolve, reject) => {
            var arg = new messages.TickerArg();
            if (args) {
                arg.setSymbol(args.symbol);
                arg.setSymbolsList(args.symbols);
            }
            this.client.loadLatestTicker(arg, (err: any, res: any) => {
                if (err) {
                    reject(err);
                    return;
                }
                resolve({
                    symbol: res.getSymbol(),
                    bidPrice: res.getBidprice(),
                    bidQty: res.getBidqty(),
                    askPrice: res.getAskprice(),
                    askQty: res.getAskqty(),
                    createTime: res.getCreatetime(),
                });
            });
        });
    }
    async startCacheTicker(args: TickerArg): Promise<boolean> {
        return new Promise<boolean>((resolve, reject) => {
            var arg = new messages.TickerArg();
            if (args) {
                arg.setSymbol(args.symbol);
                arg.setSymbolsList(args.symbols);
            }
            this.client.startCacheTicker(arg, (err: any) => {
                if (err) {
                    reject(err);
                    return;
                }
                resolve(true);
            });
        });
    }
    async stopCacheTicker(args: TickerArg): Promise<boolean> {
        return new Promise<boolean>((resolve, reject) => {
            var arg = new messages.TickerArg();
            if (args) {
                arg.setSymbol(args.symbol);
                arg.setSymbolsList(args.symbols);
            }
            this.client.stopCacheTicker(arg, (err: any) => {
                if (err) {
                    reject(err);
                    return;
                }
                resolve(true);
            });
        });
    }
    monitorTicker(args: TickerArg, data: (ticker: Ticker, m: Monitor) => void, err?: (e: any) => void): Monitor {
        var arg = new messages.TickerArg();
        if (args) {
            arg.setSymbol(args.symbol);
            arg.setSymbolsList(args.symbols);
        }
        var m = this.client.monitorTicker(arg);
        m.on("data", (res: any) => {
            data({
                symbol: res.getSymbol(),
                bidPrice: res.getBidprice(),
                bidQty: res.getBidqty(),
                askPrice: res.getAskprice(),
                askQty: res.getAskqty(),
                createTime: res.getCreatetime(),
            }, m);
        });
        if (err) {
            m.on("error", err);
        }
        return m;
    }

    /** kline **/

    async listKLine(args: KLineArg): Promise<KLine[]> {
        return new Promise<KLine[]>((resolve, reject) => {
            var arg = new messages.KLineArg();
            if (args) {
                arg.setSymbol(args.symbol);
                arg.setInterval(args.interval);
                arg.setLimit(args.limit);
            }
            this.client.listKLine(arg, (err: any, res: any) => {
                if (err) {
                    reject(err);
                    return;
                }
                var klines: KLine[] = [];
                res.getKlinesList().forEach((v: any) => {
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
    }
    async loadKLine(args: KLineArg): Promise<KLine> {
        return new Promise<KLine>((resolve, reject) => {
            var arg = new messages.KLineArg();
            if (args) {
                arg.setSymbol(args.symbol);
                arg.setInterval(args.interval);
                arg.setLimit(args.limit);
            }
            this.client.loadKLine(arg, (err: any, res: any) => {
                if (err) {
                    reject(err);
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
    }
    async startCacheKLine(args: KLineArg): Promise<boolean> {
        return new Promise<boolean>((resolve, reject) => {
            var arg = new messages.KLineArg();
            if (args) {
                arg.setSymbol(args.symbol);
                arg.setInterval(args.interval);
                arg.setLimit(args.limit);
            }
            this.client.startCacheKLine(arg, (err: any) => {
                if (err) {
                    reject(err);
                    return;
                }
                resolve(true);
            });
        });
    }
    async stopCacheKLine(args: KLineArg): Promise<boolean> {
        return new Promise<boolean>((resolve, reject) => {
            var arg = new messages.KLineArg();
            if (args) {
                arg.setSymbol(args.symbol);
                arg.setInterval(args.interval);
                arg.setLimit(args.limit);
            }
            this.client.stopCacheKLine(arg, (err: any) => {
                if (err) {
                    reject(err);
                    return;
                }
                resolve(true);
            });
        });
    }
    monitorKLine(args: KLineArg, data: (kline: KLine, m: Monitor) => void, err?: (e: any) => void): Monitor {
        var arg = new messages.KLineArg();
        if (args) {
            arg.setSymbol(args.symbol);
            arg.setInterval(args.interval);
            arg.setLimit(args.limit);
        }
        var m = this.client.monitorKLine(arg);
        m.on("data", (res: any) => {
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

    async loadLatestDepth(args: DepthArg): Promise<Depth> {
        return new Promise<Depth>((resolve, reject) => {
            var arg = new messages.DepthArg();
            if (args) {
                arg.setSymbol(args.symbol);
            }
            this.client.loadLatestDepth(arg, (err: any, res: any) => {
                if (err) {
                    reject(err);
                    return;
                }
                var depth: Depth = {
                    symbol: res.getSymbol(),
                    bids: [],
                    asks: [],
                };
                res.getBidsList().forEach((v: any) => {
                    depth.bids.push({
                        amount: v.getAmount(),
                        price: v.getPrice(),
                    });
                });
                res.getAsksList().forEach((v: any) => {
                    depth.asks.push({
                        amount: v.getAmount(),
                        price: v.getPrice(),
                    });
                });
                resolve(depth);
            });
        });
    }
    async startCacheDepth(args: DepthArg): Promise<boolean> {
        return new Promise<boolean>((resolve, reject) => {
            var arg = new messages.DepthArg();
            if (args) {
                arg.setSymbol(args.symbol);
            }
            this.client.startCacheDepth(arg, (err: any) => {
                if (err) {
                    reject(err);
                    return;
                }
                resolve(true);
            });
        });
    }
    async stopCacheDepth(args: DepthArg): Promise<boolean> {
        return new Promise((resolve, reject) => {
            var arg = new messages.DepthArg();
            if (args) {
                arg.setSymbol(args.symbol);
            }
            this.client.stopCacheDepth(arg, (err: any) => {
                if (err) {
                    reject(err);
                    return;
                }
                resolve(true);
            });
        });
    }
    monitorDepth(args: DepthArg, data: (depth: Depth, m: Monitor) => void, err?: (e: any) => void): Monitor {
        var arg = new messages.DepthArg();
        if (args) {
            arg.setSymbol(args.symbol);
        }
        var m = this.client.monitorDepth(arg);
        m.on("data", (res: any) => {
            var depth: Depth = {
                symbol: res.getSymbol(),
                bids: [],
                asks: [],
            };
            res.getBidsList().forEach((v: any) => {
                depth.bids.push({
                    amount: v.getAmount(),
                    price: v.getPrice(),
                });
            });
            res.getAsksList().forEach((v: any) => {
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