import express from 'express';
import crypto from 'crypto';
import dotenv from 'dotenv';
import cors from 'cors';
const app = express();
const PORT = process.env.PORT || 3333;

app.use(cors());
app.use(express.json());

const encTxBlock = [];
const encTxHashes = [];

const { privateKey, publicKey } = crypto.generateKeyPairSync('rsa', {
  modulusLength: 2048, // Length of your key in bits
});

dotenv.config();

const privateKeyPem = privateKey.export({ type: 'pkcs8', format: 'pem' });
const publicKeyPem = publicKey.export({ type: 'spki', format: 'pem' });

console.log(privateKeyPem, publicKeyPem);

function signData(data, privateKey) {
  const sign = crypto.createSign('SHA256');
  sign.update(data);
  sign.end();
  return sign.sign(privateKey, 'base64');
}

function hashSHA256(str) {
  return crypto.createHash('sha256').update(str).digest('hex');
}

app.post('/order', (req, res) => {
  const encTx = JSON.stringify(req.body);
  console.log('Sequencer received a transaction: ', encTx);
  encTxBlock.push(encTx);
  const encTxHash = hashSHA256(encTx);
  encTxHashes.push(encTxHash);
  const txOrder = encTxHashes.length - 1;
  const signature = signData(encTxHash);

  res.status(200).json({
    status: 'success',
    data: { encTxHash: encTxHash, order: txOrder },
  });
});

app.post('/block', (req, res) => {
  res.status(200).json({ message: 'Hello', world: 'Bye' });
});

app.listen(PORT, () => {
  console.log('Sequencer is running on port: ', PORT);
});
