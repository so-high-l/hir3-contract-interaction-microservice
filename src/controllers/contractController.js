const { createCertificate } = require('../services/contractService');

async function createCertificateHandler(req, res) {
  try {
    const { to, tokenURI } = req.body;

    if (!to || !tokenURI) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const receipt = await createCertificate(to, tokenURI);

    const receiptStringified = JSON.stringify(receipt, (key, value) =>
        typeof value === 'bigint' ? value.toString() : value
    );
  
    res.status(200).json(JSON.parse(receiptStringified));
  } catch (error) {
    console.error('Error minting NFT:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

module.exports = { createCertificateHandler };
