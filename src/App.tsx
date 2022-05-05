import styled from 'styled-components';
import { motion } from 'framer-motion';

function App() {
  return (
    <Wrapper>
      <Box transition={{ duration: 2 }} animate={{ borderRadius: '100px' }} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: tomato;
  border-radius: 10px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

export default App;
