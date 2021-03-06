// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class Approval extends ethereum.Event {
  get params(): Approval__Params {
    return new Approval__Params(this);
  }
}

export class Approval__Params {
  _event: Approval;

  constructor(event: Approval) {
    this._event = event;
  }

  get owner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get spender(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get value(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class MinTokensBeforeSwapUpdated extends ethereum.Event {
  get params(): MinTokensBeforeSwapUpdated__Params {
    return new MinTokensBeforeSwapUpdated__Params(this);
  }
}

export class MinTokensBeforeSwapUpdated__Params {
  _event: MinTokensBeforeSwapUpdated;

  constructor(event: MinTokensBeforeSwapUpdated) {
    this._event = event;
  }

  get minTokensBeforeSwap(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class OwnershipTransferred extends ethereum.Event {
  get params(): OwnershipTransferred__Params {
    return new OwnershipTransferred__Params(this);
  }
}

export class OwnershipTransferred__Params {
  _event: OwnershipTransferred;

  constructor(event: OwnershipTransferred) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class SwapAndLiquify extends ethereum.Event {
  get params(): SwapAndLiquify__Params {
    return new SwapAndLiquify__Params(this);
  }
}

export class SwapAndLiquify__Params {
  _event: SwapAndLiquify;

  constructor(event: SwapAndLiquify) {
    this._event = event;
  }

  get tokensSwapped(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get ethReceived(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get tokensIntoLiqudity(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class SwapAndLiquifyEnabledUpdated extends ethereum.Event {
  get params(): SwapAndLiquifyEnabledUpdated__Params {
    return new SwapAndLiquifyEnabledUpdated__Params(this);
  }
}

export class SwapAndLiquifyEnabledUpdated__Params {
  _event: SwapAndLiquifyEnabledUpdated;

  constructor(event: SwapAndLiquifyEnabledUpdated) {
    this._event = event;
  }

  get enabled(): boolean {
    return this._event.parameters[0].value.toBoolean();
  }
}

export class Transfer extends ethereum.Event {
  get params(): Transfer__Params {
    return new Transfer__Params(this);
  }
}

export class Transfer__Params {
  _event: Transfer;

  constructor(event: Transfer) {
    this._event = event;
  }

  get from(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get to(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get value(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class XXMOONToken extends ethereum.SmartContract {
  static bind(address: Address): XXMOONToken {
    return new XXMOONToken("XXMOONToken", address);
  }

  _liquidityFee(): BigInt {
    let result = super.call("_liquidityFee", "_liquidityFee():(uint256)", []);

    return result[0].toBigInt();
  }

  try__liquidityFee(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "_liquidityFee",
      "_liquidityFee():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  _maxTxAmount(): BigInt {
    let result = super.call("_maxTxAmount", "_maxTxAmount():(uint256)", []);

    return result[0].toBigInt();
  }

  try__maxTxAmount(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("_maxTxAmount", "_maxTxAmount():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  _taxFee(): BigInt {
    let result = super.call("_taxFee", "_taxFee():(uint256)", []);

    return result[0].toBigInt();
  }

  try__taxFee(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("_taxFee", "_taxFee():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  allowance(owner: Address, spender: Address): BigInt {
    let result = super.call(
      "allowance",
      "allowance(address,address):(uint256)",
      [ethereum.Value.fromAddress(owner), ethereum.Value.fromAddress(spender)]
    );

    return result[0].toBigInt();
  }

  try_allowance(owner: Address, spender: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "allowance",
      "allowance(address,address):(uint256)",
      [ethereum.Value.fromAddress(owner), ethereum.Value.fromAddress(spender)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  approve(spender: Address, amount: BigInt): boolean {
    let result = super.call("approve", "approve(address,uint256):(bool)", [
      ethereum.Value.fromAddress(spender),
      ethereum.Value.fromUnsignedBigInt(amount)
    ]);

    return result[0].toBoolean();
  }

  try_approve(spender: Address, amount: BigInt): ethereum.CallResult<boolean> {
    let result = super.tryCall("approve", "approve(address,uint256):(bool)", [
      ethereum.Value.fromAddress(spender),
      ethereum.Value.fromUnsignedBigInt(amount)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  balanceOf(account: Address): BigInt {
    let result = super.call("balanceOf", "balanceOf(address):(uint256)", [
      ethereum.Value.fromAddress(account)
    ]);

    return result[0].toBigInt();
  }

  try_balanceOf(account: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall("balanceOf", "balanceOf(address):(uint256)", [
      ethereum.Value.fromAddress(account)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  batchTransfer(
    addressList: Array<Address>,
    amountList: Array<BigInt>
  ): boolean {
    let result = super.call(
      "batchTransfer",
      "batchTransfer(address[],uint256[]):(bool)",
      [
        ethereum.Value.fromAddressArray(addressList),
        ethereum.Value.fromUnsignedBigIntArray(amountList)
      ]
    );

    return result[0].toBoolean();
  }

  try_batchTransfer(
    addressList: Array<Address>,
    amountList: Array<BigInt>
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "batchTransfer",
      "batchTransfer(address[],uint256[]):(bool)",
      [
        ethereum.Value.fromAddressArray(addressList),
        ethereum.Value.fromUnsignedBigIntArray(amountList)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  decimals(): i32 {
    let result = super.call("decimals", "decimals():(uint8)", []);

    return result[0].toI32();
  }

  try_decimals(): ethereum.CallResult<i32> {
    let result = super.tryCall("decimals", "decimals():(uint8)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toI32());
  }

  decreaseAllowance(spender: Address, subtractedValue: BigInt): boolean {
    let result = super.call(
      "decreaseAllowance",
      "decreaseAllowance(address,uint256):(bool)",
      [
        ethereum.Value.fromAddress(spender),
        ethereum.Value.fromUnsignedBigInt(subtractedValue)
      ]
    );

    return result[0].toBoolean();
  }

  try_decreaseAllowance(
    spender: Address,
    subtractedValue: BigInt
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "decreaseAllowance",
      "decreaseAllowance(address,uint256):(bool)",
      [
        ethereum.Value.fromAddress(spender),
        ethereum.Value.fromUnsignedBigInt(subtractedValue)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  geUnlockTime(): BigInt {
    let result = super.call("geUnlockTime", "geUnlockTime():(uint256)", []);

    return result[0].toBigInt();
  }

  try_geUnlockTime(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("geUnlockTime", "geUnlockTime():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  increaseAllowance(spender: Address, addedValue: BigInt): boolean {
    let result = super.call(
      "increaseAllowance",
      "increaseAllowance(address,uint256):(bool)",
      [
        ethereum.Value.fromAddress(spender),
        ethereum.Value.fromUnsignedBigInt(addedValue)
      ]
    );

    return result[0].toBoolean();
  }

  try_increaseAllowance(
    spender: Address,
    addedValue: BigInt
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "increaseAllowance",
      "increaseAllowance(address,uint256):(bool)",
      [
        ethereum.Value.fromAddress(spender),
        ethereum.Value.fromUnsignedBigInt(addedValue)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  isExcludedFromFee(account: Address): boolean {
    let result = super.call(
      "isExcludedFromFee",
      "isExcludedFromFee(address):(bool)",
      [ethereum.Value.fromAddress(account)]
    );

    return result[0].toBoolean();
  }

  try_isExcludedFromFee(account: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "isExcludedFromFee",
      "isExcludedFromFee(address):(bool)",
      [ethereum.Value.fromAddress(account)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  isExcludedFromReward(account: Address): boolean {
    let result = super.call(
      "isExcludedFromReward",
      "isExcludedFromReward(address):(bool)",
      [ethereum.Value.fromAddress(account)]
    );

    return result[0].toBoolean();
  }

  try_isExcludedFromReward(account: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "isExcludedFromReward",
      "isExcludedFromReward(address):(bool)",
      [ethereum.Value.fromAddress(account)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  name(): string {
    let result = super.call("name", "name():(string)", []);

    return result[0].toString();
  }

  try_name(): ethereum.CallResult<string> {
    let result = super.tryCall("name", "name():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  pancakeV2Pair(): Address {
    let result = super.call("pancakeV2Pair", "pancakeV2Pair():(address)", []);

    return result[0].toAddress();
  }

  try_pancakeV2Pair(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "pancakeV2Pair",
      "pancakeV2Pair():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  pancakeV2Router(): Address {
    let result = super.call(
      "pancakeV2Router",
      "pancakeV2Router():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_pancakeV2Router(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "pancakeV2Router",
      "pancakeV2Router():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  reflectionFromToken(tAmount: BigInt, deductTransferFee: boolean): BigInt {
    let result = super.call(
      "reflectionFromToken",
      "reflectionFromToken(uint256,bool):(uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(tAmount),
        ethereum.Value.fromBoolean(deductTransferFee)
      ]
    );

    return result[0].toBigInt();
  }

  try_reflectionFromToken(
    tAmount: BigInt,
    deductTransferFee: boolean
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "reflectionFromToken",
      "reflectionFromToken(uint256,bool):(uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(tAmount),
        ethereum.Value.fromBoolean(deductTransferFee)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  swapAndLiquifyEnabled(): boolean {
    let result = super.call(
      "swapAndLiquifyEnabled",
      "swapAndLiquifyEnabled():(bool)",
      []
    );

    return result[0].toBoolean();
  }

  try_swapAndLiquifyEnabled(): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "swapAndLiquifyEnabled",
      "swapAndLiquifyEnabled():(bool)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  symbol(): string {
    let result = super.call("symbol", "symbol():(string)", []);

    return result[0].toString();
  }

  try_symbol(): ethereum.CallResult<string> {
    let result = super.tryCall("symbol", "symbol():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  tokenFromReflection(rAmount: BigInt): BigInt {
    let result = super.call(
      "tokenFromReflection",
      "tokenFromReflection(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(rAmount)]
    );

    return result[0].toBigInt();
  }

  try_tokenFromReflection(rAmount: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "tokenFromReflection",
      "tokenFromReflection(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(rAmount)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  totalFees(): BigInt {
    let result = super.call("totalFees", "totalFees():(uint256)", []);

    return result[0].toBigInt();
  }

  try_totalFees(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("totalFees", "totalFees():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  totalSupply(): BigInt {
    let result = super.call("totalSupply", "totalSupply():(uint256)", []);

    return result[0].toBigInt();
  }

  try_totalSupply(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("totalSupply", "totalSupply():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  transfer(recipient: Address, amount: BigInt): boolean {
    let result = super.call("transfer", "transfer(address,uint256):(bool)", [
      ethereum.Value.fromAddress(recipient),
      ethereum.Value.fromUnsignedBigInt(amount)
    ]);

    return result[0].toBoolean();
  }

  try_transfer(
    recipient: Address,
    amount: BigInt
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall("transfer", "transfer(address,uint256):(bool)", [
      ethereum.Value.fromAddress(recipient),
      ethereum.Value.fromUnsignedBigInt(amount)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  transferFrom(sender: Address, recipient: Address, amount: BigInt): boolean {
    let result = super.call(
      "transferFrom",
      "transferFrom(address,address,uint256):(bool)",
      [
        ethereum.Value.fromAddress(sender),
        ethereum.Value.fromAddress(recipient),
        ethereum.Value.fromUnsignedBigInt(amount)
      ]
    );

    return result[0].toBoolean();
  }

  try_transferFrom(
    sender: Address,
    recipient: Address,
    amount: BigInt
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "transferFrom",
      "transferFrom(address,address,uint256):(bool)",
      [
        ethereum.Value.fromAddress(sender),
        ethereum.Value.fromAddress(recipient),
        ethereum.Value.fromUnsignedBigInt(amount)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class ApproveCall extends ethereum.Call {
  get inputs(): ApproveCall__Inputs {
    return new ApproveCall__Inputs(this);
  }

  get outputs(): ApproveCall__Outputs {
    return new ApproveCall__Outputs(this);
  }
}

export class ApproveCall__Inputs {
  _call: ApproveCall;

  constructor(call: ApproveCall) {
    this._call = call;
  }

  get spender(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get amount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class ApproveCall__Outputs {
  _call: ApproveCall;

  constructor(call: ApproveCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class BatchTransferCall extends ethereum.Call {
  get inputs(): BatchTransferCall__Inputs {
    return new BatchTransferCall__Inputs(this);
  }

  get outputs(): BatchTransferCall__Outputs {
    return new BatchTransferCall__Outputs(this);
  }
}

export class BatchTransferCall__Inputs {
  _call: BatchTransferCall;

  constructor(call: BatchTransferCall) {
    this._call = call;
  }

  get addressList(): Array<Address> {
    return this._call.inputValues[0].value.toAddressArray();
  }

  get amountList(): Array<BigInt> {
    return this._call.inputValues[1].value.toBigIntArray();
  }
}

export class BatchTransferCall__Outputs {
  _call: BatchTransferCall;

  constructor(call: BatchTransferCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class DecreaseAllowanceCall extends ethereum.Call {
  get inputs(): DecreaseAllowanceCall__Inputs {
    return new DecreaseAllowanceCall__Inputs(this);
  }

  get outputs(): DecreaseAllowanceCall__Outputs {
    return new DecreaseAllowanceCall__Outputs(this);
  }
}

export class DecreaseAllowanceCall__Inputs {
  _call: DecreaseAllowanceCall;

  constructor(call: DecreaseAllowanceCall) {
    this._call = call;
  }

  get spender(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get subtractedValue(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class DecreaseAllowanceCall__Outputs {
  _call: DecreaseAllowanceCall;

  constructor(call: DecreaseAllowanceCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class DeliverCall extends ethereum.Call {
  get inputs(): DeliverCall__Inputs {
    return new DeliverCall__Inputs(this);
  }

  get outputs(): DeliverCall__Outputs {
    return new DeliverCall__Outputs(this);
  }
}

export class DeliverCall__Inputs {
  _call: DeliverCall;

  constructor(call: DeliverCall) {
    this._call = call;
  }

  get tAmount(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class DeliverCall__Outputs {
  _call: DeliverCall;

  constructor(call: DeliverCall) {
    this._call = call;
  }
}

export class ExcludeFromFeeCall extends ethereum.Call {
  get inputs(): ExcludeFromFeeCall__Inputs {
    return new ExcludeFromFeeCall__Inputs(this);
  }

  get outputs(): ExcludeFromFeeCall__Outputs {
    return new ExcludeFromFeeCall__Outputs(this);
  }
}

export class ExcludeFromFeeCall__Inputs {
  _call: ExcludeFromFeeCall;

  constructor(call: ExcludeFromFeeCall) {
    this._call = call;
  }

  get account(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class ExcludeFromFeeCall__Outputs {
  _call: ExcludeFromFeeCall;

  constructor(call: ExcludeFromFeeCall) {
    this._call = call;
  }
}

export class ExcludeFromRewardCall extends ethereum.Call {
  get inputs(): ExcludeFromRewardCall__Inputs {
    return new ExcludeFromRewardCall__Inputs(this);
  }

  get outputs(): ExcludeFromRewardCall__Outputs {
    return new ExcludeFromRewardCall__Outputs(this);
  }
}

export class ExcludeFromRewardCall__Inputs {
  _call: ExcludeFromRewardCall;

  constructor(call: ExcludeFromRewardCall) {
    this._call = call;
  }

  get account(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class ExcludeFromRewardCall__Outputs {
  _call: ExcludeFromRewardCall;

  constructor(call: ExcludeFromRewardCall) {
    this._call = call;
  }
}

export class IncludeInFeeCall extends ethereum.Call {
  get inputs(): IncludeInFeeCall__Inputs {
    return new IncludeInFeeCall__Inputs(this);
  }

  get outputs(): IncludeInFeeCall__Outputs {
    return new IncludeInFeeCall__Outputs(this);
  }
}

export class IncludeInFeeCall__Inputs {
  _call: IncludeInFeeCall;

  constructor(call: IncludeInFeeCall) {
    this._call = call;
  }

  get account(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class IncludeInFeeCall__Outputs {
  _call: IncludeInFeeCall;

  constructor(call: IncludeInFeeCall) {
    this._call = call;
  }
}

export class IncludeInRewardCall extends ethereum.Call {
  get inputs(): IncludeInRewardCall__Inputs {
    return new IncludeInRewardCall__Inputs(this);
  }

  get outputs(): IncludeInRewardCall__Outputs {
    return new IncludeInRewardCall__Outputs(this);
  }
}

export class IncludeInRewardCall__Inputs {
  _call: IncludeInRewardCall;

  constructor(call: IncludeInRewardCall) {
    this._call = call;
  }

  get account(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class IncludeInRewardCall__Outputs {
  _call: IncludeInRewardCall;

  constructor(call: IncludeInRewardCall) {
    this._call = call;
  }
}

export class IncreaseAllowanceCall extends ethereum.Call {
  get inputs(): IncreaseAllowanceCall__Inputs {
    return new IncreaseAllowanceCall__Inputs(this);
  }

  get outputs(): IncreaseAllowanceCall__Outputs {
    return new IncreaseAllowanceCall__Outputs(this);
  }
}

export class IncreaseAllowanceCall__Inputs {
  _call: IncreaseAllowanceCall;

  constructor(call: IncreaseAllowanceCall) {
    this._call = call;
  }

  get spender(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get addedValue(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class IncreaseAllowanceCall__Outputs {
  _call: IncreaseAllowanceCall;

  constructor(call: IncreaseAllowanceCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class LockCall extends ethereum.Call {
  get inputs(): LockCall__Inputs {
    return new LockCall__Inputs(this);
  }

  get outputs(): LockCall__Outputs {
    return new LockCall__Outputs(this);
  }
}

export class LockCall__Inputs {
  _call: LockCall;

  constructor(call: LockCall) {
    this._call = call;
  }

  get time(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class LockCall__Outputs {
  _call: LockCall;

  constructor(call: LockCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall extends ethereum.Call {
  get inputs(): RenounceOwnershipCall__Inputs {
    return new RenounceOwnershipCall__Inputs(this);
  }

  get outputs(): RenounceOwnershipCall__Outputs {
    return new RenounceOwnershipCall__Outputs(this);
  }
}

export class RenounceOwnershipCall__Inputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall__Outputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class SetLiquidityFeePercentCall extends ethereum.Call {
  get inputs(): SetLiquidityFeePercentCall__Inputs {
    return new SetLiquidityFeePercentCall__Inputs(this);
  }

  get outputs(): SetLiquidityFeePercentCall__Outputs {
    return new SetLiquidityFeePercentCall__Outputs(this);
  }
}

export class SetLiquidityFeePercentCall__Inputs {
  _call: SetLiquidityFeePercentCall;

  constructor(call: SetLiquidityFeePercentCall) {
    this._call = call;
  }

  get liquidityFee(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class SetLiquidityFeePercentCall__Outputs {
  _call: SetLiquidityFeePercentCall;

  constructor(call: SetLiquidityFeePercentCall) {
    this._call = call;
  }
}

export class SetMaxTxPercentCall extends ethereum.Call {
  get inputs(): SetMaxTxPercentCall__Inputs {
    return new SetMaxTxPercentCall__Inputs(this);
  }

  get outputs(): SetMaxTxPercentCall__Outputs {
    return new SetMaxTxPercentCall__Outputs(this);
  }
}

export class SetMaxTxPercentCall__Inputs {
  _call: SetMaxTxPercentCall;

  constructor(call: SetMaxTxPercentCall) {
    this._call = call;
  }

  get maxTxPercent(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class SetMaxTxPercentCall__Outputs {
  _call: SetMaxTxPercentCall;

  constructor(call: SetMaxTxPercentCall) {
    this._call = call;
  }
}

export class SetSwapAndLiquifyEnabledCall extends ethereum.Call {
  get inputs(): SetSwapAndLiquifyEnabledCall__Inputs {
    return new SetSwapAndLiquifyEnabledCall__Inputs(this);
  }

  get outputs(): SetSwapAndLiquifyEnabledCall__Outputs {
    return new SetSwapAndLiquifyEnabledCall__Outputs(this);
  }
}

export class SetSwapAndLiquifyEnabledCall__Inputs {
  _call: SetSwapAndLiquifyEnabledCall;

  constructor(call: SetSwapAndLiquifyEnabledCall) {
    this._call = call;
  }

  get _enabled(): boolean {
    return this._call.inputValues[0].value.toBoolean();
  }
}

export class SetSwapAndLiquifyEnabledCall__Outputs {
  _call: SetSwapAndLiquifyEnabledCall;

  constructor(call: SetSwapAndLiquifyEnabledCall) {
    this._call = call;
  }
}

export class SetTaxFeePercentCall extends ethereum.Call {
  get inputs(): SetTaxFeePercentCall__Inputs {
    return new SetTaxFeePercentCall__Inputs(this);
  }

  get outputs(): SetTaxFeePercentCall__Outputs {
    return new SetTaxFeePercentCall__Outputs(this);
  }
}

export class SetTaxFeePercentCall__Inputs {
  _call: SetTaxFeePercentCall;

  constructor(call: SetTaxFeePercentCall) {
    this._call = call;
  }

  get taxFee(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class SetTaxFeePercentCall__Outputs {
  _call: SetTaxFeePercentCall;

  constructor(call: SetTaxFeePercentCall) {
    this._call = call;
  }
}

export class TransferCall extends ethereum.Call {
  get inputs(): TransferCall__Inputs {
    return new TransferCall__Inputs(this);
  }

  get outputs(): TransferCall__Outputs {
    return new TransferCall__Outputs(this);
  }
}

export class TransferCall__Inputs {
  _call: TransferCall;

  constructor(call: TransferCall) {
    this._call = call;
  }

  get recipient(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get amount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class TransferCall__Outputs {
  _call: TransferCall;

  constructor(call: TransferCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class TransferFromCall extends ethereum.Call {
  get inputs(): TransferFromCall__Inputs {
    return new TransferFromCall__Inputs(this);
  }

  get outputs(): TransferFromCall__Outputs {
    return new TransferFromCall__Outputs(this);
  }
}

export class TransferFromCall__Inputs {
  _call: TransferFromCall;

  constructor(call: TransferFromCall) {
    this._call = call;
  }

  get sender(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get recipient(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get amount(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class TransferFromCall__Outputs {
  _call: TransferFromCall;

  constructor(call: TransferFromCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class TransferOwnershipCall extends ethereum.Call {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}

export class UnlockCall extends ethereum.Call {
  get inputs(): UnlockCall__Inputs {
    return new UnlockCall__Inputs(this);
  }

  get outputs(): UnlockCall__Outputs {
    return new UnlockCall__Outputs(this);
  }
}

export class UnlockCall__Inputs {
  _call: UnlockCall;

  constructor(call: UnlockCall) {
    this._call = call;
  }
}

export class UnlockCall__Outputs {
  _call: UnlockCall;

  constructor(call: UnlockCall) {
    this._call = call;
  }
}
