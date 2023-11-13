import React from 'react';
import { styled } from 'styled-components';
import PlayPause from './PlayPause';
import axios from 'axios';

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
const Action = styled.div`
  background: #4661e6;
  border-radius: 3px;
  padding: 5px;
  align-items: center;
  display: flex;
  justify-content: space-between;
`;

const Text = styled.span`
  color: #fff;
`;
const Title = styled.p`
  color: #fff;
  font-size: 24px;
`;

const ActionMenu = () => {
  const sendTx = () => {};
  return (
    <Main>
      <Actions>
        <Title>User</Title>
        <Action>
          <Text>Send tx</Text> <PlayPause onClick={sendTx} isPlaying={false} />{' '}
        </Action>
        <Action>
          <Text>Claim</Text> <PlayPause isPlaying={false} />
        </Action>
      </Actions>
      <Actions>
        <Title>Sequencer</Title>
        <Action>
          <Text>Order tx</Text>
          <PlayPause isPlaying={false} />
        </Action>
        <Action>
          <Text>Sign</Text> <PlayPause isPlaying={false} />
        </Action>
        <Action>
          <Text>Send to user</Text> <PlayPause isPlaying={false} />
        </Action>
        <Action>
          <Text>Send hashes to L2</Text> <PlayPause isPlaying={false} />
        </Action>
        <Action>
          <Text>Send tx list to L2</Text> <PlayPause isPlaying={false} />
        </Action>
        <Action>
          <Text>Store hashes to L1</Text> <PlayPause isPlaying={false} />
        </Action>
      </Actions>
      <Actions>
        <Title>L2</Title>
        <Action>
          <Text>Request block</Text> <PlayPause isPlaying={false} />
        </Action>
        <Action>
          <Text>Sign hashchain</Text> <PlayPause isPlaying={false} />
        </Action>
        <Action>
          <Text>Send to sequencer</Text> <PlayPause isPlaying={false} />
        </Action>
      </Actions>
    </Main>
  );
};

export default ActionMenu;
