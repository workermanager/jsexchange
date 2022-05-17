// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var exchange_pb = require('./exchange_pb.js');

function serialize_exchange_AccountInfo(arg) {
  if (!(arg instanceof exchange_pb.AccountInfo)) {
    throw new Error('Expected argument of type exchange.AccountInfo');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_exchange_AccountInfo(buffer_arg) {
  return exchange_pb.AccountInfo.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_exchange_Balance(arg) {
  if (!(arg instanceof exchange_pb.Balance)) {
    throw new Error('Expected argument of type exchange.Balance');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_exchange_Balance(buffer_arg) {
  return exchange_pb.Balance.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_exchange_BalanceMap(arg) {
  if (!(arg instanceof exchange_pb.BalanceMap)) {
    throw new Error('Expected argument of type exchange.BalanceMap');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_exchange_BalanceMap(buffer_arg) {
  return exchange_pb.BalanceMap.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_exchange_CancelOrderArg(arg) {
  if (!(arg instanceof exchange_pb.CancelOrderArg)) {
    throw new Error('Expected argument of type exchange.CancelOrderArg');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_exchange_CancelOrderArg(buffer_arg) {
  return exchange_pb.CancelOrderArg.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_exchange_ClearBalanceArg(arg) {
  if (!(arg instanceof exchange_pb.ClearBalanceArg)) {
    throw new Error('Expected argument of type exchange.ClearBalanceArg');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_exchange_ClearBalanceArg(buffer_arg) {
  return exchange_pb.ClearBalanceArg.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_exchange_ClearHoldingArg(arg) {
  if (!(arg instanceof exchange_pb.ClearHoldingArg)) {
    throw new Error('Expected argument of type exchange.ClearHoldingArg');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_exchange_ClearHoldingArg(buffer_arg) {
  return exchange_pb.ClearHoldingArg.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_exchange_Depth(arg) {
  if (!(arg instanceof exchange_pb.Depth)) {
    throw new Error('Expected argument of type exchange.Depth');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_exchange_Depth(buffer_arg) {
  return exchange_pb.Depth.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_exchange_DepthArg(arg) {
  if (!(arg instanceof exchange_pb.DepthArg)) {
    throw new Error('Expected argument of type exchange.DepthArg');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_exchange_DepthArg(buffer_arg) {
  return exchange_pb.DepthArg.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_exchange_Holding(arg) {
  if (!(arg instanceof exchange_pb.Holding)) {
    throw new Error('Expected argument of type exchange.Holding');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_exchange_Holding(buffer_arg) {
  return exchange_pb.Holding.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_exchange_HoldingMap(arg) {
  if (!(arg instanceof exchange_pb.HoldingMap)) {
    throw new Error('Expected argument of type exchange.HoldingMap');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_exchange_HoldingMap(buffer_arg) {
  return exchange_pb.HoldingMap.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_exchange_KLine(arg) {
  if (!(arg instanceof exchange_pb.KLine)) {
    throw new Error('Expected argument of type exchange.KLine');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_exchange_KLine(buffer_arg) {
  return exchange_pb.KLine.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_exchange_KLineArg(arg) {
  if (!(arg instanceof exchange_pb.KLineArg)) {
    throw new Error('Expected argument of type exchange.KLineArg');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_exchange_KLineArg(buffer_arg) {
  return exchange_pb.KLineArg.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_exchange_KLineList(arg) {
  if (!(arg instanceof exchange_pb.KLineList)) {
    throw new Error('Expected argument of type exchange.KLineList');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_exchange_KLineList(buffer_arg) {
  return exchange_pb.KLineList.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_exchange_ListBalanceArg(arg) {
  if (!(arg instanceof exchange_pb.ListBalanceArg)) {
    throw new Error('Expected argument of type exchange.ListBalanceArg');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_exchange_ListBalanceArg(buffer_arg) {
  return exchange_pb.ListBalanceArg.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_exchange_ListHoldingArg(arg) {
  if (!(arg instanceof exchange_pb.ListHoldingArg)) {
    throw new Error('Expected argument of type exchange.ListHoldingArg');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_exchange_ListHoldingArg(buffer_arg) {
  return exchange_pb.ListHoldingArg.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_exchange_ListOrderArg(arg) {
  if (!(arg instanceof exchange_pb.ListOrderArg)) {
    throw new Error('Expected argument of type exchange.ListOrderArg');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_exchange_ListOrderArg(buffer_arg) {
  return exchange_pb.ListOrderArg.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_exchange_ListTransferArg(arg) {
  if (!(arg instanceof exchange_pb.ListTransferArg)) {
    throw new Error('Expected argument of type exchange.ListTransferArg');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_exchange_ListTransferArg(buffer_arg) {
  return exchange_pb.ListTransferArg.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_exchange_LoadAccountInfoArg(arg) {
  if (!(arg instanceof exchange_pb.LoadAccountInfoArg)) {
    throw new Error('Expected argument of type exchange.LoadAccountInfoArg');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_exchange_LoadAccountInfoArg(buffer_arg) {
  return exchange_pb.LoadAccountInfoArg.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_exchange_LoadBalanceArg(arg) {
  if (!(arg instanceof exchange_pb.LoadBalanceArg)) {
    throw new Error('Expected argument of type exchange.LoadBalanceArg');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_exchange_LoadBalanceArg(buffer_arg) {
  return exchange_pb.LoadBalanceArg.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_exchange_LoadHoldingArg(arg) {
  if (!(arg instanceof exchange_pb.LoadHoldingArg)) {
    throw new Error('Expected argument of type exchange.LoadHoldingArg');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_exchange_LoadHoldingArg(buffer_arg) {
  return exchange_pb.LoadHoldingArg.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_exchange_MonitorArg(arg) {
  if (!(arg instanceof exchange_pb.MonitorArg)) {
    throw new Error('Expected argument of type exchange.MonitorArg');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_exchange_MonitorArg(buffer_arg) {
  return exchange_pb.MonitorArg.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_exchange_NewWalletArg(arg) {
  if (!(arg instanceof exchange_pb.NewWalletArg)) {
    throw new Error('Expected argument of type exchange.NewWalletArg');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_exchange_NewWalletArg(buffer_arg) {
  return exchange_pb.NewWalletArg.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_exchange_Object(arg) {
  if (!(arg instanceof exchange_pb.Object)) {
    throw new Error('Expected argument of type exchange.Object');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_exchange_Object(buffer_arg) {
  return exchange_pb.Object.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_exchange_OrderRequest(arg) {
  if (!(arg instanceof exchange_pb.OrderRequest)) {
    throw new Error('Expected argument of type exchange.OrderRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_exchange_OrderRequest(buffer_arg) {
  return exchange_pb.OrderRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_exchange_OrderResponse(arg) {
  if (!(arg instanceof exchange_pb.OrderResponse)) {
    throw new Error('Expected argument of type exchange.OrderResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_exchange_OrderResponse(buffer_arg) {
  return exchange_pb.OrderResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_exchange_OrderResponseList(arg) {
  if (!(arg instanceof exchange_pb.OrderResponseList)) {
    throw new Error('Expected argument of type exchange.OrderResponseList');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_exchange_OrderResponseList(buffer_arg) {
  return exchange_pb.OrderResponseList.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_exchange_QueryOrderArg(arg) {
  if (!(arg instanceof exchange_pb.QueryOrderArg)) {
    throw new Error('Expected argument of type exchange.QueryOrderArg');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_exchange_QueryOrderArg(buffer_arg) {
  return exchange_pb.QueryOrderArg.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_exchange_SymbolArg(arg) {
  if (!(arg instanceof exchange_pb.SymbolArg)) {
    throw new Error('Expected argument of type exchange.SymbolArg');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_exchange_SymbolArg(buffer_arg) {
  return exchange_pb.SymbolArg.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_exchange_SymbolInfo(arg) {
  if (!(arg instanceof exchange_pb.SymbolInfo)) {
    throw new Error('Expected argument of type exchange.SymbolInfo');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_exchange_SymbolInfo(buffer_arg) {
  return exchange_pb.SymbolInfo.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_exchange_SymbolInfoList(arg) {
  if (!(arg instanceof exchange_pb.SymbolInfoList)) {
    throw new Error('Expected argument of type exchange.SymbolInfoList');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_exchange_SymbolInfoList(buffer_arg) {
  return exchange_pb.SymbolInfoList.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_exchange_Ticker(arg) {
  if (!(arg instanceof exchange_pb.Ticker)) {
    throw new Error('Expected argument of type exchange.Ticker');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_exchange_Ticker(buffer_arg) {
  return exchange_pb.Ticker.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_exchange_TickerArg(arg) {
  if (!(arg instanceof exchange_pb.TickerArg)) {
    throw new Error('Expected argument of type exchange.TickerArg');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_exchange_TickerArg(buffer_arg) {
  return exchange_pb.TickerArg.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_exchange_TickerMap(arg) {
  if (!(arg instanceof exchange_pb.TickerMap)) {
    throw new Error('Expected argument of type exchange.TickerMap');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_exchange_TickerMap(buffer_arg) {
  return exchange_pb.TickerMap.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_exchange_TransferList(arg) {
  if (!(arg instanceof exchange_pb.TransferList)) {
    throw new Error('Expected argument of type exchange.TransferList');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_exchange_TransferList(buffer_arg) {
  return exchange_pb.TransferList.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_exchange_Tx(arg) {
  if (!(arg instanceof exchange_pb.Tx)) {
    throw new Error('Expected argument of type exchange.Tx');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_exchange_Tx(buffer_arg) {
  return exchange_pb.Tx.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_exchange_Void(arg) {
  if (!(arg instanceof exchange_pb.Void)) {
    throw new Error('Expected argument of type exchange.Void');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_exchange_Void(buffer_arg) {
  return exchange_pb.Void.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_exchange_WalletEvent(arg) {
  if (!(arg instanceof exchange_pb.WalletEvent)) {
    throw new Error('Expected argument of type exchange.WalletEvent');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_exchange_WalletEvent(buffer_arg) {
  return exchange_pb.WalletEvent.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_exchange_WithdrawArg(arg) {
  if (!(arg instanceof exchange_pb.WithdrawArg)) {
    throw new Error('Expected argument of type exchange.WithdrawArg');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_exchange_WithdrawArg(buffer_arg) {
  return exchange_pb.WithdrawArg.deserializeBinary(new Uint8Array(buffer_arg));
}


var MarketService = exports.MarketService = {
  // symbol
loadSymbol: {
    path: '/exchange.Market/LoadSymbol',
    requestStream: false,
    responseStream: false,
    requestType: exchange_pb.SymbolArg,
    responseType: exchange_pb.SymbolInfo,
    requestSerialize: serialize_exchange_SymbolArg,
    requestDeserialize: deserialize_exchange_SymbolArg,
    responseSerialize: serialize_exchange_SymbolInfo,
    responseDeserialize: deserialize_exchange_SymbolInfo,
  },
  listSymbol: {
    path: '/exchange.Market/ListSymbol',
    requestStream: false,
    responseStream: false,
    requestType: exchange_pb.SymbolArg,
    responseType: exchange_pb.SymbolInfoList,
    requestSerialize: serialize_exchange_SymbolArg,
    requestDeserialize: deserialize_exchange_SymbolArg,
    responseSerialize: serialize_exchange_SymbolInfoList,
    responseDeserialize: deserialize_exchange_SymbolInfoList,
  },
  // ticker
listLatestTicker: {
    path: '/exchange.Market/ListLatestTicker',
    requestStream: false,
    responseStream: false,
    requestType: exchange_pb.TickerArg,
    responseType: exchange_pb.TickerMap,
    requestSerialize: serialize_exchange_TickerArg,
    requestDeserialize: deserialize_exchange_TickerArg,
    responseSerialize: serialize_exchange_TickerMap,
    responseDeserialize: deserialize_exchange_TickerMap,
  },
  loadLatestTicker: {
    path: '/exchange.Market/LoadLatestTicker',
    requestStream: false,
    responseStream: false,
    requestType: exchange_pb.TickerArg,
    responseType: exchange_pb.Ticker,
    requestSerialize: serialize_exchange_TickerArg,
    requestDeserialize: deserialize_exchange_TickerArg,
    responseSerialize: serialize_exchange_Ticker,
    responseDeserialize: deserialize_exchange_Ticker,
  },
  startCacheTicker: {
    path: '/exchange.Market/StartCacheTicker',
    requestStream: false,
    responseStream: false,
    requestType: exchange_pb.TickerArg,
    responseType: exchange_pb.Void,
    requestSerialize: serialize_exchange_TickerArg,
    requestDeserialize: deserialize_exchange_TickerArg,
    responseSerialize: serialize_exchange_Void,
    responseDeserialize: deserialize_exchange_Void,
  },
  stopCacheTicker: {
    path: '/exchange.Market/StopCacheTicker',
    requestStream: false,
    responseStream: false,
    requestType: exchange_pb.TickerArg,
    responseType: exchange_pb.Void,
    requestSerialize: serialize_exchange_TickerArg,
    requestDeserialize: deserialize_exchange_TickerArg,
    responseSerialize: serialize_exchange_Void,
    responseDeserialize: deserialize_exchange_Void,
  },
  monitorTicker: {
    path: '/exchange.Market/MonitorTicker',
    requestStream: false,
    responseStream: true,
    requestType: exchange_pb.TickerArg,
    responseType: exchange_pb.Ticker,
    requestSerialize: serialize_exchange_TickerArg,
    requestDeserialize: deserialize_exchange_TickerArg,
    responseSerialize: serialize_exchange_Ticker,
    responseDeserialize: deserialize_exchange_Ticker,
  },
  // kline
listKLine: {
    path: '/exchange.Market/ListKLine',
    requestStream: false,
    responseStream: false,
    requestType: exchange_pb.KLineArg,
    responseType: exchange_pb.KLineList,
    requestSerialize: serialize_exchange_KLineArg,
    requestDeserialize: deserialize_exchange_KLineArg,
    responseSerialize: serialize_exchange_KLineList,
    responseDeserialize: deserialize_exchange_KLineList,
  },
  loadKLine: {
    path: '/exchange.Market/LoadKLine',
    requestStream: false,
    responseStream: false,
    requestType: exchange_pb.KLineArg,
    responseType: exchange_pb.KLine,
    requestSerialize: serialize_exchange_KLineArg,
    requestDeserialize: deserialize_exchange_KLineArg,
    responseSerialize: serialize_exchange_KLine,
    responseDeserialize: deserialize_exchange_KLine,
  },
  startCacheKLine: {
    path: '/exchange.Market/StartCacheKLine',
    requestStream: false,
    responseStream: false,
    requestType: exchange_pb.KLineArg,
    responseType: exchange_pb.Void,
    requestSerialize: serialize_exchange_KLineArg,
    requestDeserialize: deserialize_exchange_KLineArg,
    responseSerialize: serialize_exchange_Void,
    responseDeserialize: deserialize_exchange_Void,
  },
  stopCacheKLine: {
    path: '/exchange.Market/StopCacheKLine',
    requestStream: false,
    responseStream: false,
    requestType: exchange_pb.KLineArg,
    responseType: exchange_pb.Void,
    requestSerialize: serialize_exchange_KLineArg,
    requestDeserialize: deserialize_exchange_KLineArg,
    responseSerialize: serialize_exchange_Void,
    responseDeserialize: deserialize_exchange_Void,
  },
  monitorKLine: {
    path: '/exchange.Market/MonitorKLine',
    requestStream: false,
    responseStream: true,
    requestType: exchange_pb.KLineArg,
    responseType: exchange_pb.KLine,
    requestSerialize: serialize_exchange_KLineArg,
    requestDeserialize: deserialize_exchange_KLineArg,
    responseSerialize: serialize_exchange_KLine,
    responseDeserialize: deserialize_exchange_KLine,
  },
  // depth
loadLatestDepth: {
    path: '/exchange.Market/LoadLatestDepth',
    requestStream: false,
    responseStream: false,
    requestType: exchange_pb.DepthArg,
    responseType: exchange_pb.Depth,
    requestSerialize: serialize_exchange_DepthArg,
    requestDeserialize: deserialize_exchange_DepthArg,
    responseSerialize: serialize_exchange_Depth,
    responseDeserialize: deserialize_exchange_Depth,
  },
  startCacheDepth: {
    path: '/exchange.Market/StartCacheDepth',
    requestStream: false,
    responseStream: false,
    requestType: exchange_pb.DepthArg,
    responseType: exchange_pb.Void,
    requestSerialize: serialize_exchange_DepthArg,
    requestDeserialize: deserialize_exchange_DepthArg,
    responseSerialize: serialize_exchange_Void,
    responseDeserialize: deserialize_exchange_Void,
  },
  stopCacheDepth: {
    path: '/exchange.Market/StopCacheDepth',
    requestStream: false,
    responseStream: false,
    requestType: exchange_pb.DepthArg,
    responseType: exchange_pb.Void,
    requestSerialize: serialize_exchange_DepthArg,
    requestDeserialize: deserialize_exchange_DepthArg,
    responseSerialize: serialize_exchange_Void,
    responseDeserialize: deserialize_exchange_Void,
  },
  monitorDepth: {
    path: '/exchange.Market/MonitorDepth',
    requestStream: false,
    responseStream: true,
    requestType: exchange_pb.DepthArg,
    responseType: exchange_pb.Depth,
    requestSerialize: serialize_exchange_DepthArg,
    requestDeserialize: deserialize_exchange_DepthArg,
    responseSerialize: serialize_exchange_Depth,
    responseDeserialize: deserialize_exchange_Depth,
  },
};

exports.MarketClient = grpc.makeGenericClientConstructor(MarketService);
var WalletService = exports.WalletService = {
  newWallet: {
    path: '/exchange.Wallet/NewWallet',
    requestStream: false,
    responseStream: false,
    requestType: exchange_pb.NewWalletArg,
    responseType: exchange_pb.Object,
    requestSerialize: serialize_exchange_NewWalletArg,
    requestDeserialize: deserialize_exchange_NewWalletArg,
    responseSerialize: serialize_exchange_Object,
    responseDeserialize: deserialize_exchange_Object,
  },
  loadAccountInfo: {
    path: '/exchange.Wallet/LoadAccountInfo',
    requestStream: false,
    responseStream: false,
    requestType: exchange_pb.LoadAccountInfoArg,
    responseType: exchange_pb.AccountInfo,
    requestSerialize: serialize_exchange_LoadAccountInfoArg,
    requestDeserialize: deserialize_exchange_LoadAccountInfoArg,
    responseSerialize: serialize_exchange_AccountInfo,
    responseDeserialize: deserialize_exchange_AccountInfo,
  },
  listBalance: {
    path: '/exchange.Wallet/ListBalance',
    requestStream: false,
    responseStream: false,
    requestType: exchange_pb.ListBalanceArg,
    responseType: exchange_pb.BalanceMap,
    requestSerialize: serialize_exchange_ListBalanceArg,
    requestDeserialize: deserialize_exchange_ListBalanceArg,
    responseSerialize: serialize_exchange_BalanceMap,
    responseDeserialize: deserialize_exchange_BalanceMap,
  },
  loadBalance: {
    path: '/exchange.Wallet/LoadBalance',
    requestStream: false,
    responseStream: false,
    requestType: exchange_pb.LoadBalanceArg,
    responseType: exchange_pb.Balance,
    requestSerialize: serialize_exchange_LoadBalanceArg,
    requestDeserialize: deserialize_exchange_LoadBalanceArg,
    responseSerialize: serialize_exchange_Balance,
    responseDeserialize: deserialize_exchange_Balance,
  },
  clearBalance: {
    path: '/exchange.Wallet/ClearBalance',
    requestStream: false,
    responseStream: false,
    requestType: exchange_pb.ClearBalanceArg,
    responseType: exchange_pb.Void,
    requestSerialize: serialize_exchange_ClearBalanceArg,
    requestDeserialize: deserialize_exchange_ClearBalanceArg,
    responseSerialize: serialize_exchange_Void,
    responseDeserialize: deserialize_exchange_Void,
  },
  listHolding: {
    path: '/exchange.Wallet/ListHolding',
    requestStream: false,
    responseStream: false,
    requestType: exchange_pb.ListHoldingArg,
    responseType: exchange_pb.HoldingMap,
    requestSerialize: serialize_exchange_ListHoldingArg,
    requestDeserialize: deserialize_exchange_ListHoldingArg,
    responseSerialize: serialize_exchange_HoldingMap,
    responseDeserialize: deserialize_exchange_HoldingMap,
  },
  loadHolding: {
    path: '/exchange.Wallet/LoadHolding',
    requestStream: false,
    responseStream: false,
    requestType: exchange_pb.LoadHoldingArg,
    responseType: exchange_pb.Holding,
    requestSerialize: serialize_exchange_LoadHoldingArg,
    requestDeserialize: deserialize_exchange_LoadHoldingArg,
    responseSerialize: serialize_exchange_Holding,
    responseDeserialize: deserialize_exchange_Holding,
  },
  clearHolding: {
    path: '/exchange.Wallet/ClearHolding',
    requestStream: false,
    responseStream: false,
    requestType: exchange_pb.ClearHoldingArg,
    responseType: exchange_pb.Void,
    requestSerialize: serialize_exchange_ClearHoldingArg,
    requestDeserialize: deserialize_exchange_ClearHoldingArg,
    responseSerialize: serialize_exchange_Void,
    responseDeserialize: deserialize_exchange_Void,
  },
  withdraw: {
    path: '/exchange.Wallet/Withdraw',
    requestStream: false,
    responseStream: false,
    requestType: exchange_pb.WithdrawArg,
    responseType: exchange_pb.Tx,
    requestSerialize: serialize_exchange_WithdrawArg,
    requestDeserialize: deserialize_exchange_WithdrawArg,
    responseSerialize: serialize_exchange_Tx,
    responseDeserialize: deserialize_exchange_Tx,
  },
  listTransfer: {
    path: '/exchange.Wallet/ListTransfer',
    requestStream: false,
    responseStream: false,
    requestType: exchange_pb.ListTransferArg,
    responseType: exchange_pb.TransferList,
    requestSerialize: serialize_exchange_ListTransferArg,
    requestDeserialize: deserialize_exchange_ListTransferArg,
    responseSerialize: serialize_exchange_TransferList,
    responseDeserialize: deserialize_exchange_TransferList,
  },
  placeOrder: {
    path: '/exchange.Wallet/PlaceOrder',
    requestStream: false,
    responseStream: false,
    requestType: exchange_pb.OrderRequest,
    responseType: exchange_pb.OrderResponse,
    requestSerialize: serialize_exchange_OrderRequest,
    requestDeserialize: deserialize_exchange_OrderRequest,
    responseSerialize: serialize_exchange_OrderResponse,
    responseDeserialize: deserialize_exchange_OrderResponse,
  },
  cancelOrder: {
    path: '/exchange.Wallet/CancelOrder',
    requestStream: false,
    responseStream: false,
    requestType: exchange_pb.CancelOrderArg,
    responseType: exchange_pb.OrderResponse,
    requestSerialize: serialize_exchange_CancelOrderArg,
    requestDeserialize: deserialize_exchange_CancelOrderArg,
    responseSerialize: serialize_exchange_OrderResponse,
    responseDeserialize: deserialize_exchange_OrderResponse,
  },
  queryOrder: {
    path: '/exchange.Wallet/QueryOrder',
    requestStream: false,
    responseStream: false,
    requestType: exchange_pb.QueryOrderArg,
    responseType: exchange_pb.OrderResponse,
    requestSerialize: serialize_exchange_QueryOrderArg,
    requestDeserialize: deserialize_exchange_QueryOrderArg,
    responseSerialize: serialize_exchange_OrderResponse,
    responseDeserialize: deserialize_exchange_OrderResponse,
  },
  listOrder: {
    path: '/exchange.Wallet/ListOrder',
    requestStream: false,
    responseStream: false,
    requestType: exchange_pb.ListOrderArg,
    responseType: exchange_pb.OrderResponseList,
    requestSerialize: serialize_exchange_ListOrderArg,
    requestDeserialize: deserialize_exchange_ListOrderArg,
    responseSerialize: serialize_exchange_OrderResponseList,
    responseDeserialize: deserialize_exchange_OrderResponseList,
  },
  monitor: {
    path: '/exchange.Wallet/Monitor',
    requestStream: false,
    responseStream: true,
    requestType: exchange_pb.MonitorArg,
    responseType: exchange_pb.WalletEvent,
    requestSerialize: serialize_exchange_MonitorArg,
    requestDeserialize: deserialize_exchange_MonitorArg,
    responseSerialize: serialize_exchange_WalletEvent,
    responseDeserialize: deserialize_exchange_WalletEvent,
  },
};

exports.WalletClient = grpc.makeGenericClientConstructor(WalletService);
