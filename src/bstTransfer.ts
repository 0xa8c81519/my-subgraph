import { Transfer } from '../generated/BSTToken/BSTToken'
import { BSTTransfer } from '../generated/schema'
import { ethereum, BigInt } from '@graphprotocol/graph-ts'

export function handleBSTTransfer(event: Transfer): void {
    let data = new BSTTransfer(event.block.number.toHex() + "-" + event.transaction.hash.toHex());
    data.sender = event.params.from;
    data.recipient = event.params.to;
    data.amount = event.params.value;
    data.save();
}
