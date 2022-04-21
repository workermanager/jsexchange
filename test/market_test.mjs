

import { Market } from "jsexchange"
import assert from 'assert';


async function test() {
    console.log("test market is starting")
    var marketSrv = new Market(process.env.MARKET_SERVER)

    console.log("load symbols is ", await marketSrv.loadSymbol({ symbol: "test.x-u" }));
    console.log("list symbols is ", await marketSrv.listSymbol({ exchange: "test" }));

    var tickers = await marketSrv.listLatestTicker({});
    tickers.forEach((ticker) => {
        assert.notEqual(ticker.symbol, "");
    });
    console.log("list latest ticker is ", tickers);

    var ticker = await marketSrv.loadLatestTicker({ symbol: "test.x-u" })
    assert.notEqual(ticker.symbol, "");
    console.log("load latest ticker is ", ticker);

    console.log("start cache ticker is ", await marketSrv.startCacheTicker({ symbol: "test.x-u" }));
    console.log("stop cache ticker is ", await marketSrv.stopCacheTicker({ symbol: "test.x-u" }));
    marketSrv.monitorTicker({ symbol: "test.x-u" }, (ticker, m) => {
        console.log(ticker);
        m.cancel();
    }, console.log);

    console.log("list kline is ", await marketSrv.listKLine({ symbol: "test.x-u", interval: "1min" }));
    console.log("load kline is ", await marketSrv.loadKLine({ symbol: "test.x-u", interval: "1min" }));
    console.log("start cache kline is ", await marketSrv.startCacheKLine({ symbol: "test.x-u", interval: "1min" }));
    console.log("stop cache kline is ", await marketSrv.stopCacheKLine({ symbol: "test.x-u", interval: "1min" }));
    marketSrv.monitorKLine({ symbol: "test.x-u", interval: "1min" }, (kline, m) => {
        console.log(kline);
        m.cancel();
    }, console.log);

    console.log("load latest depth is ", await marketSrv.loadLatestDepth({ symbol: "test.x-u" }));
    console.log("start cache depth is ", await marketSrv.startCacheDepth({ symbol: "test.x-u" }));
    console.log("stop cache depth is ", await marketSrv.stopCacheDepth({ symbol: "test.x-u" }));
    marketSrv.monitorDepth({ symbol: "test.x-u" }, (depth, m) => {
        console.log(depth);
        m.cancel();
    }, console.log);
}

test();