import Rollup from './components/Rollup';
import Sequencer from './components/Sequencer';
import User from './components/User';
import L2 from './components/L2';
import styled from 'styled-components';
import './index.css';

const Background = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background: #373f68;
  height: 90vh;
  align-items: center;
  flex-direction: column;
  padding: 50px;
`;

const Title = styled.span`
  color: #fff;
  font-weight: bold;
  font-size: 23px;
  margin-bottom: 50px;
`;

const Process = styled.div`
  display: flex;
  max-width: 1400px;
  padding: 10px;
  width: 100%;
  align-items: start;
  justify-content: center;
  background: #f2f2f2;
  width: 1400px;
  border-radius: 10px;
  height: 100%;
  gap: 200px;
`;

const Actions = styled.div`
  display: flex;
  flex-direction: column;
`;

const EntityAction = styled.div`
  display: flex;
  flex-direction: column;
`;

function App() {
  return (
    <Background>
      <Title>Sequencer Demo</Title>
      <Process>
        <User />
        <Sequencer />
        <Rollup />
        <L2 />
      </Process>
    </Background>
  );
}

export default App;
