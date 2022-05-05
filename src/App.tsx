import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useRef } from 'react';

/**
 * initial 원하는 Element의 초기 상태 입력
 * animate 원하는 Element의 끝 상태 및 transition
 */

// property 이름은 상관없음
const boxVariants = {
  hover: { rotateZ: 90 },
  click: { borderRadius: '100px' },
  dragging: { backgroundColor: 'rgb(46, 204, 113)' },
};

function App() {
  const biggerBoxRef = useRef<HTMLDivElement>(null);
  return (
    <Wrapper>
      <BiggerBox ref={biggerBoxRef}>
        <Box
          drag
          dragConstraints={biggerBoxRef}
          dragSnapToOrigin
          dragElastic={0.5}
          variants={boxVariants}
          whileHover='hover' //
          whileTap='click'
          whileDrag='dragging'
        />
      </BiggerBox>
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

const BiggerBox = styled.div`
  width: 500px;
  height: 500px;
  border-radius: 40px;
  background-color: rgba(255, 255, 255, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const Box = styled(motion.div)`
  display: grid;
  width: 150px;
  height: 150px;
  background-color: tomato;
  border-radius: 15px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

export default App;
