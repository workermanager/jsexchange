/**
 * 交易所Ticker信息
 */
export class Ticker {
    symbol: string;
    bidPrice: string;
    bidQty: string;
    askPrice: string;
    askQty: string;
    createTime: number;
    public constructor(init?: Partial<Ticker>) {
        Object.assign(this, init);
    }
}

/**
 * 交易所KLine时间
 */
export enum KLineIntervals {
    v1min = "1min",
    v3min = "3min",
    v5min = "5min",
    v15min = "15min",
    v30min = "30min",
    v1hour = "1hour",
    v4hour = "4hour",
    v1day = "1day",
    v1week = "1week",
    v1mon = "1mon",
}

/**
 * 交易所KLine信息
 */
export class KLine {
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
    public constructor(init?: Partial<KLine>) {
        Object.assign(this, init);
    }
}

/**
 * 交易所深度条目信息
 */
export class DepthItem {
    price: string;
    amount: string;
    public constructor(init?: Partial<DepthItem>) {
        Object.assign(this, init);
    }
}

/**
 * 交易所深度信息
 */
export class Depth {
    symbol: string
    bids: DepthItem[];
    asks: DepthItem[];
    public constructor(init?: Partial<Depth>) {
        Object.assign(this, init);
    }
}


/**
 * 列出交易对参数
 */
export class SymbolArg {
    exchange: string;
    public constructor(init?: Partial<SymbolArg>) {
        Object.assign(this, init);
    }
}

/**
 * Ticker处理参数
 */
export class TickerArg {
    symbol?: string;
    symbols?: string[];
    public constructor(init?: Partial<TickerArg>) {
        Object.assign(this, init);
    }
}

/**
 * KLine处理参数
 */
export class KLineArg {
    symbol: string;
    interval: string;
    limit?: number;
    public constructor(init?: Partial<KLineArg>) {
        Object.assign(this, init);
    }
}

/**
 * 深度处理参数
 */
export class DepthArg {
    symbol: string;
    public constructor(init?: Partial<DepthArg>) {
        Object.assign(this, init);
    }
}


/**
 * 余额信息
 */
export class Balance {
    asset: string;
    free: string;
    locked: string;
    volume: string;
    raw: any;
    public constructor(init?: Partial<Balance>) {
        Object.assign(this, init);
    }
}

/**
 * 持仓信息
 */
export class Holding {
    symbol: string;
    amount: string;
    position: string;
    avgPrice: string;
    lever: number;
    deposit: string;
    raw: any;
    public constructor(init?: Partial<Holding>) {
        Object.assign(this, init);
    }
}

/**
 * 获取钱包参数
 */
export class LoadBalanceArg {
    asset: string;
    sync?: boolean;
    public constructor(init?: Partial<LoadBalanceArg>) {
        Object.assign(this, init);
    }
}

/**
 * 列出钱包参数
 */
export class ListBalanceArg {
    sync?: boolean;
    public constructor(init?: Partial<ListBalanceArg>) {
        Object.assign(this, init);
    }
}

/**
 * 获取持仓参数
 */
export class LoadHoldingArg {
    position: string;
    symbol: string;
    sync?: boolean;
    public constructor(init?: Partial<LoadHoldingArg>) {
        Object.assign(this, init);
    }
}

/**
 * 列出持仓参数
 */
export class ListHoldingArg {
    sync?: boolean;
    public constructor(init?: Partial<ListHoldingArg>) {
        Object.assign(this, init);
    }
}

/**
 * 清空钱包参数
 */
export class ClearBalanceArg {
    assets: string[];
    public constructor(init?: Partial<ClearBalanceArg>) {
        Object.assign(this, init);
    }
}

/**
 * 清空持仓参数
 */
export class ClearHoldingArg {
    symbols: string[];
    public constructor(init?: Partial<ClearHoldingArg>) {
        Object.assign(this, init);
    }
}

/**
 * 下单参数
 */
export class OrderRequest {
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
    public constructor(init?: Partial<OrderRequest>) {
        Object.assign(this, init);
    }
}

/**
 * 订单信息
 */
export class OrderResponse {
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
    public constructor(init?: Partial<OrderResponse>) {
        Object.assign(this, init);
    }
}

/**
 * 取消订单参数
 */
export class CancelOrderArg {
    symbol?: string;
    clientOrderID?: string;
    orderID?: string;
    public constructor(init?: Partial<CancelOrderArg>) {
        Object.assign(this, init);
    }
}

/**
 * 查询订单参数
 */
export class QueryOrderArg {
    symbol?: string;
    clientOrderID?: string;
    orderID?: string;
    sync?: boolean;
    public constructor(init?: Partial<QueryOrderArg>) {
        Object.assign(this, init);
    }
}

/**
 * 列出订单参数
 */
export class ListOrderArg {
    symbol?: string;
    openOnly?: boolean;
    limit?: number;
    public constructor(init?: Partial<ListOrderArg>) {
        Object.assign(this, init);
    }
}

/**
 * 钱包通知信息
 */
export class WalletEvent {
    event: string;
    clientOrderID: string;
    orderID: string;
    asset: string;
    position: string;
    symbol: string;
    public constructor(init?: Partial<WalletEvent>) {
        Object.assign(this, init);
    }
}

/**
 * 钱包通知事件
 */
export enum WalletEvents {
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
export enum WalletPositions {
    Long = "LONG",
    Short = "SHORT",
    BOTH = "BOTH",
}

/**
 * 订单类型
 */
export enum OrderTypes {
    Market = "MARKET",
    LimitGTC = "LIMIT.GTC",
    LimitIOC = "LIMIT.IOC",
    LimitFOK = "LIMIT.FOK",
    LimitGTX = "LIMIT.GTX",
}

/**
 * 订单方向
 */
export enum OrderSides {
    Buy = "Buy",
    Sell = "Sell",
}

/**
 * 订单Offset
 */
export enum OrderOffsets {
    Open = "OPEN",
    Close = "CLOSE",
    None = "NONE",
}

/**
 * 订单状态
 */
export enum OrderStatuses {
    None = "None",
    Peding = "Peding",
    Partial = "Partial",
    Canceled = "Canceled",
    DoneFull = "DoneFull",
    DonePart = "DonePart",
}

export class Monitor {
    raw: any;
    public constructor(raw: any) {
        this.raw = raw;
    }
    public cancel() {
        this.raw.cancel();
    }
}

export class NewWalletArg {
    type: string;
    apikey: string;
    apisec: string;
    public constructor(init?: Partial<NewWalletArg>) {
        Object.assign(this, init);
    }
}