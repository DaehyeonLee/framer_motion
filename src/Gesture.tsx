import React, { useRef } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { Wrapper, Box } from "./styles/StyledComponents";

const ConstraintsBox = styled.div`
  width: 600px;
  height: 600px;
  background-color: rgba(255, 255, 255, 0.4);
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;
const boxVariants = {
  hover: { scale: 1.5, rotateZ: 90 },
  click: { scale: 1, borderRadius: "100px" },
  //   drag: { backgroundColor: "rgb(46,204,113)", transition: { duration: 10 } },
};

const Gesture = () => {
  const constraintsBoxRef = useRef<HTMLDivElement>(null);
  return (
    <Wrapper>
      <ConstraintsBox ref={constraintsBoxRef}>
        <Box
          drag
          dragElastic={0.5} //탄성 0~1, default 0.5
          dragSnapToOrigin //드래그 끝나면 중앙으로
          dragConstraints={constraintsBoxRef}
          variants={boxVariants}
          whileHover="hover"
          whileTap="click"
          //   whileDrag="drag"
        />
      </ConstraintsBox>
    </Wrapper>
  );
};

export default Gesture;
