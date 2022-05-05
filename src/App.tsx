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
  initial: {
    opacity: 0,
    scale: 0,
  },
  animate: {
    opacity: 1,
    scale: 1,
    rotateZ: 360,
  },
  leaving: {
    opacity: 0,
    y: 20,
  },
};

function App() {
  const [showing, setShowing] = useState(false);
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

  const toggleShowing = () => {
    setShowing((show) => !show);
  };

  return (
    <Wrapper style={{ background: gradient }}>
      <AnimatePresence>
        {showing ? (
          <Box
            variants={boxVariants} //
            initial='initial'
            animate='animate'
            exit='leaving'
          />
        ) : null}
      </AnimatePresence>
      <CustomBtn onClick={toggleShowing}>Click</CustomBtn>
    </Wrapper>
  );
}

const Wrapper = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Box = styled(motion.div)`
  position: absolute;
  top: 200px;
  width: 500px;
  height: 300px;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 15px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.5), 0 10px 20px rgba(0, 0, 0, 0.02);
`;

const CustomBtn = styled.button`
  border: none;
  width: 100px;
  height: 50px;
  border-radius: 15px;
  font-size: 17px;
  font-weight: bold;
  margin-top: 100px;
  cursor: pointer;
  :active {
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.5), 0 10px 20px rgba(0, 0, 0, 0.02);
  }
`;

export default App;
