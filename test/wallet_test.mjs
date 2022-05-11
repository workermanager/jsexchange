

import { WalletManager } from "jsexchange"

async function test() {
    console.log("test wallet is starting")
    var walletSrv = new WalletManager(process.env.WALLET_SERVER)

    var wallet = await walletSrv.create({
        type: "test",
    });

    var balances = await wallet.listBalance();
    console.log("list balance is ", balances);

    var balance = await wallet.loadBalance("USDT");
    console.log("load balance is ", balance);

    var holdings = await wallet.listHolding();
    console.log("list holding is ", holdings);

    var holding = await wallet.loadHolding("USDTETH", "LONG");
    console.log("load holding is ", holding);

    console.log("withdraw result is ", await wallet.withdraw({amount:"112"}));

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