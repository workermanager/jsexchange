/**
 * 交易所Symbol信息
 */
export declare class SymbolInfo {
    symbol: string;
    base: string;
    quote: string;
    contractSize: string;
    constructor(init?: Partial<SymbolInfo>);
}
/**
 * 交易所Ticker信息
 */
export declare class Ticker {
    symbol: string;
    bidPrice: string;
    bidQty: string;
    askPrice: string;
    askQty: string;
    closePrice: string;
    createTime: number;
    constructor(init?: Partial<Ticker>);
}
/**
 * 交易所KLine时间
 */
export declare enum KLineIntervals {
    v1min = "1min",
    v3min = "3min",
    v5min = "5min",
    v15min = "15min",
    v30min = "30min",
    v1hour = "1hour",
    v4hour = "4hour",
    v1day = "1day",
    v1week = "1week",
    v1mon = "1mon"
}
/**
 * 交易所KLine信息
 */
export declare class KLine {
    symbol: string;
    interval: string;
    amount: string;
    count: number;
    open: string;
    close: string;
    low: string;
    high: string;
    volume: string;
    average: string;
    startTime: number;
    constructor(init?: Partial<KLine>);
}
/**
 * 交易所深度条目信息
 */
export declare class DepthItem {
    price: string;
    amount: string;
    constructor(init?: Partial<DepthItem>);
}
/**
 * 交易所深度信息
 */
export declare class Depth {
    symbol: string;
    bids: DepthItem[];
    asks: DepthItem[];
    constructor(init?: Partial<Depth>);
}
/**
 * 列出交易对参数
 */
export declare class SymbolArg {
    exchange?: string;
    symbol?: string;
    constructor(init?: Partial<SymbolArg>);
}
/**
 * Ticker处理参数
 */
export declare class TickerArg {
    symbol?: string;
    symbols?: string[];
    constructor(init?: Partial<TickerArg>);
}
/**
 * KLine处理参数
 */
export declare class KLineArg {
    symbol: string;
    interval: string;
    limit?: number;
    constructor(init?: Partial<KLineArg>);
}
/**
 * 深度处理参数
 */
export declare class DepthArg {
    symbol: string;
    constructor(init?: Partial<DepthArg>);
}
/**
 * 账户信息
 */
export declare class AccountInfo {
    totalValue: string;
    info: any;
    constructor(init?: Partial<AccountInfo>);
}
/**
 * 余额信息
 */
export declare class Balance {
    asset: string;
    free: string;
    locked: string;
    volume: string;
    raw: any;
    constructor(init?: Partial<Balance>);
}
/**
 * 持仓信息
 */
export declare class Holding {
    symbol: string;
    amount: string;
    position: string;
    avgPrice: string;
    lever: number;
    deposit: string;
    upl: string;
    raw: any;
    constructor(init?: Partial<Holding>);
}
/**
 * 获取钱包参数
 */
export declare class LoadBalanceArg {
    asset: string;
    sync?: boolean;
    constructor(init?: Partial<LoadBalanceArg>);
}
/**
 * 列出钱包参数
 */
export declare class ListBalanceArg {
    sync?: boolean;
    constructor(init?: Partial<ListBalanceArg>);
}
/**
 * 获取持仓参数
 */
export declare class LoadHoldingArg {
    position: string;
    symbol: string;
    sync?: boolean;
    constructor(init?: Partial<LoadHoldingArg>);
}
/**
 * 列出持仓参数
 */
export declare class ListHoldingArg {
    sync?: boolean;
    constructor(init?: Partial<ListHoldingArg>);
}
/**
 * 清空钱包参数
 */
export declare class ClearBalanceArg {
    assets: string[];
    constructor(init?: Partial<ClearBalanceArg>);
}
/**
 * 清空持仓参数
 */
export declare class ClearHoldingArg {
    symbols: string[];
    constructor(init?: Partial<ClearHoldingArg>);
}
/**
 * 下单参数
 */
export declare class OrderRequest {
    symbol: string;
    type: string;
    clientOrderID?: string;
    side: string;
    offset?: string;
    lever?: number;
    invest?: string;
    quantity?: string;
    price?: string;
    options?: string;
    constructor(init?: Partial<OrderRequest>);
}
/**
 * 订单信息
 */
export declare class OrderResponse {
    symbol: string;
    type: string;
    clientOrderID: string;
    side: string;
    offset: string;
    position: string;
    lever: number;
    quantity: string;
    price: string;
    orderID: string;
    executedQty: string;
    avgPrice: string;
    cumQuote: string;
    status: string;
    raw: any;
    constructor(init?: Partial<OrderResponse>);
}
/**
 * 取消订单参数
 */
export declare class CancelOrderArg {
    symbol?: string;
    clientOrderID?: string;
    orderID?: string;
    constructor(init?: Partial<CancelOrderArg>);
}
/**
 * 查询订单参数
 */
export declare class QueryOrderArg {
    symbol?: string;
    clientOrderID?: string;
    orderID?: string;
    sync?: boolean;
    constructor(init?: Partial<QueryOrderArg>);
}
/**
 * 列出订单参数
 */
export declare class ListOrderArg {
    symbol?: string;
    openOnly?: boolean;
    limit?: number;
    constructor(init?: Partial<ListOrderArg>);
}
/**
 * 钱包通知信息
 */
export declare class WalletEvent {
    event: string;
    clientOrderID: string;
    orderID: string;
    asset: string;
    position: string;
    symbol: string;
    constructor(init?: Partial<WalletEvent>);
}
/**
 * 钱包通知事件
 */
export declare enum WalletEvents {
    OrderNew = "order_new",
    OrderDone = "order_done",
    OrderPartial = "order_partial",
    OrderCanceled = "order_canceled",
    BalanceUpdated = "balance_updated",
    HoldingUpdated = "holding_updated"
}
/**
 * 钱包持仓类型
 */
export declare enum WalletPositions {
    Long = "LONG",
    Short = "SHORT",
    BOTH = "BOTH"
}
/**
 * 订单类型
 */
export declare enum OrderTypes {
    Market = "MARKET",
    LimitGTC = "LIMIT.GTC",
    LimitIOC = "LIMIT.IOC",
    LimitFOK = "LIMIT.FOK",
    LimitGTX = "LIMIT.GTX"
}
/**
 * 订单方向
 */
export declare enum OrderSides {
    Buy = "Buy",
    Sell = "Sell"
}
/**
 * 订单Offset
 */
export declare enum OrderOffsets {
    Open = "OPEN",
    Close = "CLOSE",
    None = "NONE"
}
/**
 * 订单状态
 */
export declare enum OrderStatuses {
    None = "None",
    Pending = "Pending",
    Partial = "Partial",
    Canceled = "Canceled",
    DoneFull = "DoneFull",
    DonePart = "DonePart"
}
export declare class Monitor {
    raw: any;
    constructor(raw: any);
    cancel(): void;
}
export declare class NewWalletArg {
    type: string;
    apikey?: string;
    apisec?: string;
    apipass?: string;
    prikey?: string;
    pubkey?: string;
    userid?: string;
    appid?: string;
    constructor(init?: Partial<NewWalletArg>);
}
export declare class WithdrawArg {
    asset: string;
    amount: string;
    method?: string;
    password?: string;
    code?: string;
    to: string;
}
export declare class Tx {
    txid: string;
    raw?: string;
}
export declare class ListTransferArg {
    side: string;
    startTime?: number;
    endTime?: number;
}
export declare enum TransferSides {
    Withdraw = "withdraw",
    Deposit = "deposit"
}
export declare enum TransferStatuses {
    Pending = "pending",
    Cancelled = "cancelled",
    Done = "done"
}
export declare class Transfer {
    id: string;
    side: string;
    asset: string;
    amount: string;
    fee: string;
    address: string;
    status: string;
    raw: any;
}
//# sourceMappingURL=define.d.ts.map