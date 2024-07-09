const { web3, contract } = require('../utils/web3');
const { fromWei, toWei } = web3.utils;

async function createCertificate(to, tokenURI) {
  const account = process.env.ACCOUNT_ADDRESS;
  const privateKey = Buffer.from(process.env.PRIVATE_KEY, 'hex');

  const tx = {
    from: account,
    to: contract.options.address,
    gas: 2000000,
    data: contract.methods.createCertificate(to, tokenURI).encodeABI(),
    maxPriorityFeePerGas: toWei("3", "gwei"),
    maxFeePerGas: toWei("3", "gwei"),
  };

  const signedTx = await web3.eth.accounts.signTransaction(tx, privateKey.toString('hex'));

  const receipt = await web3.eth.sendSignedTransaction(signedTx.rawTransaction);
  return receipt;
}

module.exports = { createCertificate };
