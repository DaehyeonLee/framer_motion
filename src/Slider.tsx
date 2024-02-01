import { AnimatePresence } from "framer-motion";
import { Wrapper, Box } from "./styles/StyledComponents";
import { useState } from "react";
import styled from "styled-components";

const Butt = styled.button`
  top: -100px;
`;

const box = {
  initial: { x: 500, scale: 0, opacity: 0 },
  animate: { x: 0, scale: 1, opacity: 1 },
  exit: { x: -500, scale: 0, opacity: 0 },
};

const Slider = () => {
  const [visible, setVisible] = useState(1);
  const nextPls = () => setVisible((prev) => (prev === 10 ? 10 : prev + 1));
  return (
    <Wrapper>
      <AnimatePresence>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) =>
          i === visible ? (
            <Box variants={box} initial="initail" animate="animate" exit="exit" key={i}>
              {i}
            </Box>
          ) : null
        )}
      </AnimatePresence>
      <Butt onClick={nextPls}> Click ME </Butt>
    </Wrapper>
  );
};

export default Slider;
