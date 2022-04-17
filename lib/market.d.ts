import { Depth, DepthArg, KLine, KLineArg, Monitor, SymbolArg, Ticker, TickerArg } from "./define";
export declare class Market {
    client: any;
    constructor(server: string);
    stop(): void;
    listSymbol(args: SymbolArg): Promise<string[]>;
    listLatestTicker(args: TickerArg): Promise<Map<string, Ticker>>;
    loadLatestTicker(args: TickerArg): Promise<Ticker>;
    startCacheTicker(args: TickerArg): Promise<boolean>;
    stopCacheTicker(args: TickerArg): Promise<boolean>;
    monitorTicker(args: TickerArg, data: (ticker: Ticker, m: Monitor) => void, err?: (e: any) => void): Monitor;
    /** kline **/
    listKLine(args: KLineArg): Promise<KLine[]>;
    loadKLine(args: KLineArg): Promise<KLine>;
    startCacheKLine(args: KLineArg): Promise<boolean>;
    stopCacheKLine(args: KLineArg): Promise<boolean>;
    monitorKLine(args: KLineArg, data: (kline: KLine, m: Monitor) => void, err?: (e: any) => void): Monitor;
    /** detph **/
    loadLatestDepth(args: DepthArg): Promise<Depth>;
    startCacheDepth(args: DepthArg): Promise<boolean>;
    stopCacheDepth(args: DepthArg): Promise<boolean>;
    monitorDepth(args: DepthArg, data: (depth: Depth, m: Monitor) => void, err?: (e: any) => void): Monitor;
}
//# sourceMappingURL=market.d.ts.map