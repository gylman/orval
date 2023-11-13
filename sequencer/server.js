import express from 'express';
import cors from 'cors';
const app = express();
app.use(cors());
const PORT = process.env.PORT || 3333;

app.post('/order', (req, res) => {
  console.log('I received the request');
  res.status(200).json({
    status: 'success',
    data: { encTxHash: 'order of your tx', order: 1 },
  });
});

app.post('/block', (req, res) => {
  res.status(200).json({ message: 'Hello', world: 'Bye' });
});

app.listen(PORT, () => {
  console.log('Sequencer is running on port: ', PORT);
});
