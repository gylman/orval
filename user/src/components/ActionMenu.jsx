import React from 'react';
import { styled } from 'styled-components';
import PlayPause from './PlayPause';
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

const ActionMenu = () => {
  return (
    <Main>
      <Actions>
        <Title>User</Title>
        <Action>Send tx</Action>
        <Action>Claim</Action>
      </Actions>
      <Actions>
        <Title>Sequencer</Title>
        <Action>Order tx</Action>
        <Action>Sign</Action>
        <Action>Send to user</Action>
        <Action>Send hashes to L2</Action>
        <Action>Send tx list to L2</Action>
        <Action>Store hashes to L1</Action>
      </Actions>
      <Actions>
        <Title>L2</Title>
        <Action>Request block</Action>
        <Action>Sign hashchain</Action>
        <Action>Send to sequencer</Action>
      </Actions>
    </Main>
  );
};

export default ActionMenu;
