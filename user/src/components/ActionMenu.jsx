import React, { useState } from 'react';
import { styled } from 'styled-components';
import axios from 'axios';
import Action from './Action';

const Main = styled.div`
  background: #f2f2f2;
  height: 100%;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
`;

const Actions = styled.div`
  background: #373f68;
  padding: 10px 10px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const Title = styled.p`
  color: #fff;
  font-size: 24px;
`;

const mockTx = {
  nonce: '0x0', // 9th transaction from the sender's address
  gasPrice: '0x4a817c800', // 20 Gwei
  gasLimit: '0x5208', // 21000 gas units, typical for a simple transfer
  to: '0x recipient address here', // recipient's Ethereum address
  value: '0xde0b6b3a7640000', // 1 ether in wei
  data: '0x', // no data is sent in a simple ether transfer
  // signature fields
  v: '0x1b', // chain ID and recovery ID
  r: '0xb850...', // part of the signature
  s: '0x42842...', // part of the signature
};

const ActionMenu = () => {
  const [tx, setTx] = useState(mockTx);
  const [isSendEncTxRunning, setIsSendEncTxRunning] = useState(false);

  const encryptTx = (tx) => {
    return tx;
  };

  const sendEncTx = () => {
    setIsSendEncTxRunning((prevState) => !prevState && true);
    const encTx = encryptTx(tx);
    console.log(encTx);
    axios
      .post('http://localhost:3333/order', encTx)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    setTx((prevTx) => ({
      ...prevTx,
      nonce: `0x${parseInt(parseInt(prevTx.nonce) + 1).toString(16)}`,
    }));
  };

  return (
    <Main>
      <Actions>
        <Title>User</Title>
        <Action handleAction={sendEncTx} isRunning={isSendEncTxRunning}>
          Send tx
        </Action>
        <Action isRunning={false}>Claim</Action>
      </Actions>
      <Actions>
        <Title>Sequencer</Title>
        <Action isRunning={false}>Order tx</Action>
        <Action isRunning={false}>Sign</Action>
        <Action isRunning={false}>Send to user</Action>
        <Action isRunning={false}>Send hashes to L2</Action>
        <Action isRunning={false}>Send tx list to L2</Action>
        <Action isRunning={false}>Store hashes to L1</Action>
      </Actions>
      <Actions>
        <Title>L2</Title>
        <Action isRunning={false}>Request block</Action>
        <Action isRunning={false}>Sign hashchain</Action>
        <Action isRunning={false}>Send to sequencer</Action>
      </Actions>
    </Main>
  );
};

export default ActionMenu;
