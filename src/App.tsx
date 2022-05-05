import styled from 'styled-components';
import { motion, useMotionValue, useTransform, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

/**
 * initial 원하는 Element의 초기 상태 입력
 * animate 원하는 Element의 끝 상태 및 transition
 */

// property 이름은 상관없음

function App() {
  const x = useMotionValue(0);
  const gradient = useTransform(
    x,
    [-400, 0, 400],
    [
      'linear-gradient(135deg, rgba(108, 0, 240, 0.9), rgb(240, 0, 164))',
      'linear-gradient(135deg, rgb(238, 0, 153), rgb(221, 0, 238))',
      'linear-gradient(135deg, rgb(0, 84, 240), rgb(0, 164, 240))',
    ]
  );
  const [isClick, setIsClick] = useState(false);
  const toggleClicked = () => setIsClick((prev) => !prev);

  return (
    <Wrapper onClick={toggleClicked} style={{ background: gradient }}>
      <Box>{!isClick ? <Circle layoutId='circle' style={{ borderRadius: '50px' }} /> : null}</Box>
      <Box>{isClick ? <Circle layoutId='circle' style={{ borderRadius: '15px' }} /> : null}</Box>
    </Wrapper>
  );
}

const Wrapper = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled(motion.div)`
  display: flex;
  width: 400px;
  height: 400px;
  background-color: rgba(255, 255, 255, 0.8);
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  margin-left: 10px;
  font-size: 30px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.5), 0 10px 20px rgba(0, 0, 0, 0.02);
`;

const Circle = styled(motion.div)`
  width: 100px;
  height: 100px;
  background-color: #00a5ff;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.5), 0 10px 20px rgba(0, 0, 0, 0.02);
`;

export default App;
