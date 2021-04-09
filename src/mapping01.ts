import { AddLiquidity, RemoveLiquidity, RemoveLiquidityImbalance, RemoveLiquidityOne, TokenExchange } from '../generated/BStablePool01/BStablePool'
import { Liquidity, Volume } from '../generated/schema'
import { ethereum, BigInt } from '@graphprotocol/graph-ts'

export function handleTokenExchange(event: TokenExchange): void {
    let volume = new Volume(event.transaction.hash.toHex() + "-" + event.logIndex.toString());
    volume.poolId = 0;
    volume.volume = event.params.tokens_bought;
    volume.timestamp = event.block.timestamp;
    volume.save();
}
export function handleAddLiquidity(event: AddLiquidity): void {
    let liqudity = new Liquidity(event.transaction.hash.toHex() + "-" + event.logIndex.toString());
    liqudity.poolId = 0;
    liqudity.liquidity = event.params.token_supply;
    liqudity.timestamp = event.block.timestamp;
    liqudity.save();
}
let lp = BigInt.fromI32(0);
export function handleRemoveLiquidity(event: RemoveLiquidity): void {
    let liqudity = new Liquidity(event.transaction.hash.toHex() + "-" + event.logIndex.toString());
    liqudity.poolId = 0;
    liqudity.liquidity = event.params.token_supply;
    liqudity.timestamp = event.block.timestamp;
    liqudity.save();
    lp = event.params.token_supply;
}
export function handleRemoveLiquidityOne(event: RemoveLiquidityOne): void {
    if (!lp.isZero()) {
        let liqudity = new Liquidity(event.transaction.hash.toHex() + "-" + event.logIndex.toString());
        liqudity.poolId = 0;
        liqudity.liquidity = lp.minus(event.params.token_amount);
        liqudity.timestamp = event.block.timestamp;
        liqudity.save();
    }
}
export function handleRemoveLiquidityImbalance(event: RemoveLiquidityImbalance): void {
    let liqudity = new Liquidity(event.transaction.hash.toHex() + "-" + event.logIndex.toString());
    liqudity.poolId = 0;
    liqudity.liquidity = event.params.token_supply;
    liqudity.timestamp = event.block.timestamp;
    liqudity.save();
    lp = event.params.token_supply;
}
