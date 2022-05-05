import styled from 'styled-components';
import { motion, useMotionValue, useTransform, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

/**
 * initial 원하는 Element의 초기 상태 입력
 * animate 원하는 Element의 끝 상태 및 transition
 */

// property 이름은 상관없음
const svg = {
  start: { pathLength: 0, fill: 'rgba(255, 255, 255, 0)' },
  end: { pathLength: 1, fill: 'rgba(255, 255, 255, 1)' },
};

const boxVariants = {
  initial: (custom: boolean) => ({
    x: custom ? -500 : 500,
    opacity: 0,
    scale: 0,
  }),
  animate: {
    x: 0,
    opacity: 1,
    scale: 1,
  },
  exit: (custom: boolean) => ({
    x: custom ? 500 : -500,
    opacity: 0,
    scale: 0,
    rotateZ: 360,
  }),
};

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
  const [visible, setVisible] = useState(1);
  const [back, setBack] = useState(false);
  const prevPlease = () => {
    setBack(true);
    setVisible((prev) => (prev === 1 ? 1 : prev - 1));
  };
  const nextPlease = () => {
    setBack(false);
    setVisible((prev) => (prev === 10 ? 10 : prev + 1));
  };

  return (
    <Wrapper style={{ background: gradient }}>
      <AnimatePresence exitBeforeEnter custom={back}>
        <Box custom={back} key={visible} variants={boxVariants} initial='initial' animate='animate' exit='exit'>
          {visible}
        </Box>
      </AnimatePresence>
      <div>
        <button onClick={prevPlease}>Prev</button>
        <button onClick={nextPlease}>Next</button>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const Box = styled(motion.div)`
  position: absolute;
  top: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 400px;
  height: 200px;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 15px;
  font-size: 30px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.5), 0 10px 20px rgba(0, 0, 0, 0.02);
`;

export default App;
