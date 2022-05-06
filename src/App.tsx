import styled from 'styled-components';
import { motion, useMotionValue, useTransform, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

/**
 * initial 원하는 Element의 초기 상태 입력
 * animate 원하는 Element의 끝 상태 및 transition
 */

// property 이름은 상관없음

function App() {
  const x = useMotionValue(-400);
  const gradient = useTransform(
    x,
    [-400, 0, 400],
    [
      'linear-gradient(135deg, rgba(108, 0, 240, 0.9), rgb(240, 0, 164))',
      'linear-gradient(135deg, rgb(238, 0, 153), rgb(221, 0, 238))',
      'linear-gradient(135deg, rgb(0, 84, 240), rgb(0, 164, 240))',
    ]
  );
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const clickHandler = (id: string) => {
    setSelectedId(id);
  };

  return (
    <Wrapper style={{ background: gradient }}>
      <Grid>
        {[1, 2, 3, 4].map((num) => (
          <Box onClick={() => clickHandler(String(num))} key={num} layoutId={String(num)} />
        ))}
      </Grid>
      <AnimatePresence>
        {selectedId ? (
          <Overlay
            onClick={() => setSelectedId(null)}
            initial={{ backgroundColor: 'rgba(0,0,0,0)' }} //
            animate={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
            exit={{ backgroundColor: 'rgba(0,0,0,0)' }}
          >
            <Box layoutId={selectedId} style={{ width: 300, height: 200 }} />
          </Overlay>
        ) : null}
      </AnimatePresence>
    </Wrapper>
  );
}

const Overlay = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 50vw;
  gap: 10px;
  div:first-child,
  div:last-child {
    grid-column: span 2;
  }
`;

const Box = styled(motion.div)`
  display: flex;
  height: 150px;
  background-color: rgba(255, 255, 255, 1);
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  font-size: 30px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.5), 0 10px 20px rgba(0, 0, 0, 0.02);
`;

export default App;
