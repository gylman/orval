import React from 'react';
import { styled } from 'styled-components';

const Main = styled.div`
  background: #f2f2f2;
  height: 100%;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 20px;
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
  padding: 20px 10px;
`;

const Text = styled.span`
  color: #fff;
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
        <Action>
          <Text>Send tx</Text>
        </Action>
      </Actions>
      <Actions>
        <Title>Sequencer</Title>
        <Action>
          <Text>Order tx</Text>
        </Action>
        <Action>
          <Text>Make a signature</Text>
        </Action>
        <Action>
          <Text>Send to user</Text>
        </Action>
        <Action>
          <Text>Send hashchain to rollup</Text>
        </Action>
        <Action>
          <Text>Send tx list to rollup</Text>
        </Action>
        <Action>
          <Text>Store hashchain to L1</Text>
        </Action>
      </Actions>
      <Actions>
        <Title>Rollup</Title>
        <Action>
          <Text>Request block</Text>
        </Action>
        <Action>
          <Text>Sign hashchain</Text>
        </Action>
        <Action>
          <Text>Send hashchain to sequencer</Text>
        </Action>
      </Actions>
    </Main>
  );
};

export default ActionMenu;
