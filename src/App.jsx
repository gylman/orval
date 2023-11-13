import Rollup from './components/Rollup';
import Sequencer from './components/Sequencer';
import User from './components/User';
import L2 from './components/L2';
import styled from 'styled-components';
import './index.css';
import ActionMenu from './components/ActionMenu';

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

const MenuAndProcess = styled.div`
  display: flex;
  height: 100%;
  gap: 20px;
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

function App() {
  return (
    <Background>
      <Title>Sequencer Demo</Title>
      <MenuAndProcess>
        <ActionMenu />
        <Process>
          <User />
          <Sequencer />
          <Rollup />
          <L2 />
        </Process>
      </MenuAndProcess>
    </Background>
  );
}

export default App;
