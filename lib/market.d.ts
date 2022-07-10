import { Depth, DepthArg, KLine, KLineArg, Monitor, SymbolArg, SymbolInfo, Ticker, TickerArg } from "./define";
export declare class Market {
    client: any;
    constructor(server: string);
    stop(): void;
    loadSymbol(args: SymbolArg): Promise<SymbolInfo | undefined>;
    listSymbol(args: SymbolArg): Promise<SymbolInfo[]>;
    listLatestTicker(args: TickerArg): Promise<Map<string, Ticker>>;
    loadLatestTicker(args: TickerArg): Promise<Ticker | undefined>;
    startCacheTicker(args: TickerArg): Promise<boolean>;
    stopCacheTicker(args: TickerArg): Promise<boolean>;
    monitorTicker(args: TickerArg, data: (ticker: Ticker, m: Monitor) => void, err?: (e: any) => void): Monitor;
    /** kline **/
    listKLine(args: KLineArg): Promise<KLine[]>;
    loadKLine(args: KLineArg): Promise<KLine | undefined>;
    startCacheKLine(args: KLineArg): Promise<boolean>;
    stopCacheKLine(args: KLineArg): Promise<boolean>;
    monitorKLine(args: KLineArg, data: (kline: KLine, m: Monitor) => void, err?: (e: any) => void): Monitor;
    /** detph **/
    loadLatestDepth(args: DepthArg): Promise<Depth | undefined>;
    startCacheDepth(args: DepthArg): Promise<boolean>;
    stopCacheDepth(args: DepthArg): Promise<boolean>;
    monitorDepth(args: DepthArg, data: (depth: Depth, m: Monitor) => void, err?: (e: any) => void): Monitor;
}
//# sourceMappingURL=market.d.ts.map