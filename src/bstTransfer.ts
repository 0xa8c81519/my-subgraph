import { Transfer } from '../generated/BSTToken/BSTToken'
import { BSTTransfer } from '../generated/schema'
import { ethereum, BigInt } from '@graphprotocol/graph-ts'

export function handleBSTTransfer(event: Transfer): void {
    let data = new BSTTransfer(event.transaction.hash.toHex() + "-" + event.logIndex.toString());
    data.sender = event.params.from;
    data.recipient = event.params.to;
    data.amount = event.params.value;
    data.save();
}
