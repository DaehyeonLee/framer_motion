import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Wrapper } from "./styles/StyledComponents";

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  background-color: rgba(255, 255, 25, 0.2);
  border-radius: 35px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const Circle = styled(motion.div)`
  height: 70px;
  width: 70px;
  place-self: center;
  background-color: white;
  border-radius: 35px;
  box-shadow: 0 2px 30x rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

// const myVars = {
//   start: { scale: 0 },
//   end: { scale: 1, rotateZ: 360, transition: { type: "spring", delay: 1, bounce: 0.5 } },
// };
const boxVariants = {
  start: {
    opacity: 0,
    scale: 0.5,
  },
  end: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      duration: 0.5,
      bounce: 0.5,
      delayChildren: 0.5,
      staggerChildren: 0.2,
    },
  },
};

const CircleVariants = {
  start: {
    opacity: 0,
    y: 10,
  },
  end: {
    opacity: 1,
    y: 0,
  },
};

function Variants() {
  return (
    <Wrapper>
      <Box
        variants={boxVariants}
        initial="start"
        animate="end"
        //variant를 이용 기초
        // variants={myVars}
        // initial="start"
        // animate="end"

        //기본적인 방법
        // transition={{ type: "spring", delay: 1, bounce: 0.5 }}
        // initial={{ scale: 0 }}
        // animate={{ scale: 1, rotateZ: 360 }}
      >
        <Circle variants={CircleVariants} />
        <Circle variants={CircleVariants} />
        <Circle variants={CircleVariants} />
        <Circle variants={CircleVariants} />
      </Box>
    </Wrapper>
  );
}

export default Variants;
