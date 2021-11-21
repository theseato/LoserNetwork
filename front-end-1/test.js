// Import
import { ApiPromise, WsProvider } from '@polkadot/api';

// Construct
const wsProvider = new WsProvider('ws://101.6.96.206:42219');
const api = await ApiPromise.create({ provider: wsProvider });


// The amount required to create a new account
console.log(api.consts.balances.existentialDeposit.toNumber());

// The amount required per byte on an extrinsic
console.log(api.consts.transactionPayment.transactionByteFee.toNumber());

// Retrieve the last timestamp
const now = await api.query.timestamp.now();
console.log(now.toNumber());

const bestNumber = await api.derive.chain.bestNumber();
console.log(bestNumber.toNumber());

const bestNumberFinalized = await api.derive.chain.bestNumberFinalized();
console.log(bestNumberFinalized.toNumber());