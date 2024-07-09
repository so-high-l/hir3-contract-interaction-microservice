const {Web3} = require('web3');
require('dotenv').config();

const web3 = new Web3(new Web3.providers.HttpProvider(process.env.INFURA_URL));
// const signer = web3.eth.accounts.privateKeyToAccount(
//     process.env.SIGNER_PRIVATE_KEY,
//   );
const contractABI = require('./contractABI.json'); 
const contractAddress = process.env.CONTRACT_ADDRESS;

const contract = new web3.eth.Contract(contractABI, contractAddress);

module.exports = { web3, contract };
