

import { WalletManager } from "jsexchange"

async function test() {
    console.log("test wallet is starting")
    var walletSrv = new WalletManager(process.env.WALLET_SERVER)

    var wallet = await walletSrv.create({
        type: "test",
    });

    console.log("load account info is ", await wallet.loadAccountInfo());

    var balances = await wallet.listBalance();
    console.log("list balance is ", balances);

    var balance = await wallet.loadBalance({ asset: "USDT" });
    console.log("load balance is ", balance);
    if (!balance) {
        throw "balance is nil";
    }
    if (await wallet.loadBalance({ asset: "NONE" })) {
        throw "balance is not nil";
    }

    var holdings = await wallet.listHolding();
    console.log("list holding is ", holdings);

    var holding = await wallet.loadHolding({ position: "BOTH", symbol: "test.USDTETH" });
    console.log("load holding is ", holding);
    if (!holding) {
        throw "holding is nil";
    }
    if (await wallet.loadHolding({ position: "BOTH", symbol: "test.NONE" })) {
        throw "holding is not nil";
    }

    console.log("withdraw result is ", await wallet.withdraw({ amount: "112" }));
    console.log("listTransfer result is ", await wallet.listTransfer({ side: "withdraw" }));

    console.log("place result is ", await wallet.placeOrder({}));
    console.log("cancel result is ", await wallet.cancelOrder({}));
    console.log("query result is ", await wallet.queryOrder({}));
    console.log("list result is ", await wallet.listOrder({}));

    wallet.monitor((evet, m) => {
        console.log(evet);
        m.cancel();
        // walletSrv.Stop();
    }).on("error", console.log);
}

test();