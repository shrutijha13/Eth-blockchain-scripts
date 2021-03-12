const Web3 = require('web3');

//Fetching compiled contract
const MyContract = require('./bin/MyContract.json')

//Signing transaction with wallet
const HDWalletProvider = require('@truffle/hdwallet-provider');

//Random address and private key
const address = '0xd9ED426f3F1ca5351480006bC9aB86CA97eFeFA6';
const privateKey = '0xd7d113798a8f06669525813431ecc5972faec78b40f6b58df43275ccdcb5c1b9';

const init = async () => {
    const provider = new HDWalletProvider(privateKey, "https://ropsten.infura.io/v3/b08ecb4bb9e945beb2373643b4db9e9d");

    //Deploying contract
    const web3 = new Web3(provider);
    let contract = new web3.eth.Contract(MyContract.abi);

    contract = await contract.deploy({data: '0x' + MyContract.evm.bytecode.object}).send({from: address});

    await contract.methods.setData(10).send({from:address})
    const result = await contract.methods.getData().call();
    console.log(result);
    provider.engine.stop();
}

init();
