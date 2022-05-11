"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tx = exports.WithdrawArg = exports.NewWalletArg = exports.Monitor = exports.OrderStatuses = exports.OrderOffsets = exports.OrderSides = exports.OrderTypes = exports.WalletPositions = exports.WalletEvents = exports.WalletEvent = exports.ListOrderArg = exports.QueryOrderArg = exports.CancelOrderArg = exports.OrderResponse = exports.OrderRequest = exports.ClearHoldingArg = exports.ClearBalanceArg = exports.ListHoldingArg = exports.LoadHoldingArg = exports.ListBalanceArg = exports.LoadBalanceArg = exports.Holding = exports.Balance = exports.DepthArg = exports.KLineArg = exports.TickerArg = exports.SymbolArg = exports.Depth = exports.DepthItem = exports.KLine = exports.KLineIntervals = exports.Ticker = exports.SymbolInfo = void 0;
/**
 * 交易所Symbol信息
 */
class SymbolInfo {
    constructor(init) {
        Object.assign(this, init);
    }
}
exports.SymbolInfo = SymbolInfo;
/**
 * 交易所Ticker信息
 */
class Ticker {
    constructor(init) {
        Object.assign(this, init);
    }
}
exports.Ticker = Ticker;
/**
 * 交易所KLine时间
 */
var KLineIntervals;
(function (KLineIntervals) {
    KLineIntervals["v1min"] = "1min";
    KLineIntervals["v3min"] = "3min";
    KLineIntervals["v5min"] = "5min";
    KLineIntervals["v15min"] = "15min";
    KLineIntervals["v30min"] = "30min";
    KLineIntervals["v1hour"] = "1hour";
    KLineIntervals["v4hour"] = "4hour";
    KLineIntervals["v1day"] = "1day";
    KLineIntervals["v1week"] = "1week";
    KLineIntervals["v1mon"] = "1mon";
})(KLineIntervals = exports.KLineIntervals || (exports.KLineIntervals = {}));
/**
 * 交易所KLine信息
 */
class KLine {
    constructor(init) {
        Object.assign(this, init);
    }
}
exports.KLine = KLine;
/**
 * 交易所深度条目信息
 */
class DepthItem {
    constructor(init) {
        Object.assign(this, init);
    }
}
exports.DepthItem = DepthItem;
/**
 * 交易所深度信息
 */
class Depth {
    constructor(init) {
        Object.assign(this, init);
    }
}
exports.Depth = Depth;
/**
 * 列出交易对参数
 */
class SymbolArg {
    constructor(init) {
        Object.assign(this, init);
    }
}
exports.SymbolArg = SymbolArg;
/**
 * Ticker处理参数
 */
class TickerArg {
    constructor(init) {
        Object.assign(this, init);
    }
}
exports.TickerArg = TickerArg;
/**
 * KLine处理参数
 */
class KLineArg {
    constructor(init) {
        Object.assign(this, init);
    }
}
exports.KLineArg = KLineArg;
/**
 * 深度处理参数
 */
class DepthArg {
    constructor(init) {
        Object.assign(this, init);
    }
}
exports.DepthArg = DepthArg;
/**
 * 余额信息
 */
class Balance {
    constructor(init) {
        Object.assign(this, init);
    }
}
exports.Balance = Balance;
/**
 * 持仓信息
 */
class Holding {
    constructor(init) {
        Object.assign(this, init);
    }
}
exports.Holding = Holding;
/**
 * 获取钱包参数
 */
class LoadBalanceArg {
    constructor(init) {
        Object.assign(this, init);
    }
}
exports.LoadBalanceArg = LoadBalanceArg;
/**
 * 列出钱包参数
 */
class ListBalanceArg {
    constructor(init) {
        Object.assign(this, init);
    }
}
exports.ListBalanceArg = ListBalanceArg;
/**
 * 获取持仓参数
 */
class LoadHoldingArg {
    constructor(init) {
        Object.assign(this, init);
    }
}
exports.LoadHoldingArg = LoadHoldingArg;
/**
 * 列出持仓参数
 */
class ListHoldingArg {
    constructor(init) {
        Object.assign(this, init);
    }
}
exports.ListHoldingArg = ListHoldingArg;
/**
 * 清空钱包参数
 */
class ClearBalanceArg {
    constructor(init) {
        Object.assign(this, init);
    }
}
exports.ClearBalanceArg = ClearBalanceArg;
/**
 * 清空持仓参数
 */
class ClearHoldingArg {
    constructor(init) {
        Object.assign(this, init);
    }
}
exports.ClearHoldingArg = ClearHoldingArg;
/**
 * 下单参数
 */
class OrderRequest {
    constructor(init) {
        Object.assign(this, init);
    }
}
exports.OrderRequest = OrderRequest;
/**
 * 订单信息
 */
class OrderResponse {
    constructor(init) {
        Object.assign(this, init);
    }
}
exports.OrderResponse = OrderResponse;
/**
 * 取消订单参数
 */
class CancelOrderArg {
    constructor(init) {
        Object.assign(this, init);
    }
}
exports.CancelOrderArg = CancelOrderArg;
/**
 * 查询订单参数
 */
class QueryOrderArg {
    constructor(init) {
        Object.assign(this, init);
    }
}
exports.QueryOrderArg = QueryOrderArg;
/**
 * 列出订单参数
 */
class ListOrderArg {
    constructor(init) {
        Object.assign(this, init);
    }
}
exports.ListOrderArg = ListOrderArg;
/**
 * 钱包通知信息
 */
class WalletEvent {
    constructor(init) {
        Object.assign(this, init);
    }
}
exports.WalletEvent = WalletEvent;
/**
 * 钱包通知事件
 */
var WalletEvents;
(function (WalletEvents) {
    WalletEvents["OrderNew"] = "order_new";
    WalletEvents["OrderDone"] = "order_done";
    WalletEvents["OrderPartial"] = "order_partial";
    WalletEvents["OrderCanceled"] = "order_canceled";
    WalletEvents["BalanceUpdated"] = "balance_updated";
    WalletEvents["HoldingUpdated"] = "holding_updated";
})(WalletEvents = exports.WalletEvents || (exports.WalletEvents = {}));
/**
 * 钱包持仓类型
 */
var WalletPositions;
(function (WalletPositions) {
    WalletPositions["Long"] = "LONG";
    WalletPositions["Short"] = "SHORT";
    WalletPositions["BOTH"] = "BOTH";
})(WalletPositions = exports.WalletPositions || (exports.WalletPositions = {}));
/**
 * 订单类型
 */
var OrderTypes;
(function (OrderTypes) {
    OrderTypes["Market"] = "MARKET";
    OrderTypes["LimitGTC"] = "LIMIT.GTC";
    OrderTypes["LimitIOC"] = "LIMIT.IOC";
    OrderTypes["LimitFOK"] = "LIMIT.FOK";
    OrderTypes["LimitGTX"] = "LIMIT.GTX";
})(OrderTypes = exports.OrderTypes || (exports.OrderTypes = {}));
/**
 * 订单方向
 */
var OrderSides;
(function (OrderSides) {
    OrderSides["Buy"] = "Buy";
    OrderSides["Sell"] = "Sell";
})(OrderSides = exports.OrderSides || (exports.OrderSides = {}));
/**
 * 订单Offset
 */
var OrderOffsets;
(function (OrderOffsets) {
    OrderOffsets["Open"] = "OPEN";
    OrderOffsets["Close"] = "CLOSE";
    OrderOffsets["None"] = "NONE";
})(OrderOffsets = exports.OrderOffsets || (exports.OrderOffsets = {}));
/**
 * 订单状态
 */
var OrderStatuses;
(function (OrderStatuses) {
    OrderStatuses["None"] = "None";
    OrderStatuses["Peding"] = "Peding";
    OrderStatuses["Partial"] = "Partial";
    OrderStatuses["Canceled"] = "Canceled";
    OrderStatuses["DoneFull"] = "DoneFull";
    OrderStatuses["DonePart"] = "DonePart";
})(OrderStatuses = exports.OrderStatuses || (exports.OrderStatuses = {}));
class Monitor {
    constructor(raw) {
        this.raw = raw;
    }
    cancel() {
        this.raw.cancel();
    }
}
exports.Monitor = Monitor;
class NewWalletArg {
    constructor(init) {
        Object.assign(this, init);
    }
}
exports.NewWalletArg = NewWalletArg;
class WithdrawArg {
}
exports.WithdrawArg = WithdrawArg;
class Tx {
}
exports.Tx = Tx;
