import styled from 'styled-components';
import { motion, useMotionValue, useTransform, useViewportScroll } from 'framer-motion';
import { useEffect } from 'react';

/**
 * initial 원하는 Element의 초기 상태 입력
 * animate 원하는 Element의 끝 상태 및 transition
 */

// property 이름은 상관없음
const boxVariants = {
  dragging: { backgroundColor: 'rgb(46, 204, 113)' },
};

function App() {
  const x = useMotionValue(0);
  const rotateZ = useTransform(x, [-400, 400], [-360, 360]);
  const gradient = useTransform(
    x,
    [-400, 0, 400],
    [
      'linear-gradient(135deg, rgba(108, 0, 240, 0.9), rgb(240, 0, 164))',
      'linear-gradient(135deg, rgb(238, 0, 153), rgb(221, 0, 238))',
      'linear-gradient(135deg, rgb(0, 84, 240), rgb(0, 164, 240))',
    ]
  );
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 5]);

  return (
    <Wrapper style={{ background: gradient }}>
      <Box
        style={{ x, rotateZ, scale }} //
        drag='x'
        dragSnapToOrigin
        variants={boxVariants}
        whileDrag='dragging'
      />
    </Wrapper>
  );
}

const Wrapper = styled(motion.div)`
  height: 200vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled(motion.div)`
  display: grid;
  width: 150px;
  height: 150px;
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

export default App;
