import { ListBalanceArg, ListHoldingArg } from ".";
import { Balance, NewWalletArg, LoadBalanceArg, Holding, LoadHoldingArg, OrderRequest, OrderResponse, CancelOrderArg, QueryOrderArg, ListOrderArg, WalletEvent, Monitor, WithdrawArg, Tx, ListTransferArg, Transfer, AccountInfo } from "./define";
export interface Wallet {
    loadAccountInfo(): Promise<AccountInfo>;
    listBalance(args?: ListBalanceArg): Promise<Map<string, Balance>>;
    loadBalance(args: LoadBalanceArg): Promise<Balance | undefined>;
    listHolding(args?: ListHoldingArg): Promise<Map<string, Holding>>;
    loadHolding(args: LoadHoldingArg): Promise<Holding | undefined>;
    withdraw(args: WithdrawArg): Promise<Tx>;
    listTransfer(args: ListTransferArg): Promise<Transfer[]>;
    placeOrder(args: OrderRequest): Promise<OrderResponse>;
    cancelOrder(args: CancelOrderArg): Promise<OrderResponse>;
    queryOrder(args: QueryOrderArg): Promise<OrderResponse>;
    listOrder(args: ListOrderArg): Promise<OrderResponse[]>;
    monitor(data: (event: WalletEvent, m: Monitor) => void, err?: (e: any) => void): Monitor;
}
export declare class WalletImpl {
    client: any;
    walletID: any;
    constructor(client: any, walletID: any);
    loadAccountInfo(): Promise<AccountInfo>;
    listBalance(args?: ListBalanceArg): Promise<Map<string, Balance>>;
    loadBalance(args: LoadBalanceArg): Promise<Balance | undefined>;
    listHolding(args?: ListHoldingArg): Promise<Map<string, Holding>>;
    loadHolding(args: LoadHoldingArg): Promise<Holding | undefined>;
    withdraw(args: WithdrawArg): Promise<Tx>;
    listTransfer(args: ListTransferArg): Promise<Transfer[]>;
    placeOrder(args: OrderRequest): Promise<OrderResponse>;
    cancelOrder(args: CancelOrderArg): Promise<OrderResponse>;
    queryOrder(args: QueryOrderArg): Promise<OrderResponse>;
    listOrder(args: ListOrderArg): Promise<OrderResponse[]>;
    monitor(data: (event: WalletEvent, m: Monitor) => void, err?: (e: any) => void): Monitor;
}
export declare class WalletManager {
    client: any;
    constructor(server: string);
    stop(): void;
    create(args: NewWalletArg): Promise<Wallet>;
}
//# sourceMappingURL=wallet.d.ts.map