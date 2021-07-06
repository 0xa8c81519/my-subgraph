import { Transfer } from '../generated/XXMOONTransferLog/XXMOONToken'
import { XXMoonTransferLog } from '../generated/schema'
import { ethereum, BigInt } from '@graphprotocol/graph-ts'

export function handleTransfer(event: Transfer): void {
	let data = new XXMoonTransferLog(event.block.number.toHex() + "-" + event.transaction.hash.toHex());
	data.sender = event.params.from;
	data.recipient = event.params.to;
	data.amount = event.params.value;
	data.save();
}
