import styled from 'styled-components';
import { motion } from 'framer-motion';

/**
 * initial 원하는 Element의 초기 상태 입력
 * animate 원하는 Element의 끝 상태 및 transition
 */

// property 이름은 상관없음
const boxVariants = {
  hover: { scale: 1.5, rotateZ: 90 },
  click: { scale: 1, borderRadius: '100px' },
};

function App() {
  return (
    <Wrapper>
      <Box
        variants={boxVariants}
        whileHover='hover' //
        whileTap='click'
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #2e2e2e;
`;

const Box = styled(motion.div)`
  display: grid;
  width: 200px;
  height: 200px;
  background-color: tomato;
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

export default App;
