import styled from "styled-components";
import { Wrapper, Box } from "./styles/StyledComponents";
import { motion, useMotionValue, useTransform, useViewportScroll } from "framer-motion";
import { useEffect } from "react";

const Motionvalues = () => {
  const x = useMotionValue(0);
  // const scaleTransform = useTransform(x, [-800, 0, 800], [2, 1, 0.1]);
  const rotateZ = useTransform(x, [-800, 800], [-360, 360]);
  const gradientTransform = useTransform(
    x,
    [-800, 800],
    ["linear-gradient(135deg, #006bee, #0067ee)", "linear-gradient(135deg, #00eea7, #eed200)"]
  );
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 5]);
  // useEffect(() => {
  //드래그에따른 x값변화 출력 ==> 이렇게 하는이유는 움직일때마다 리렌더링하지않기 때문
  //   x.onChange(() => console.log(x.get()));
  // }, [x]);
  return (
    <Wrapper style={{ background: gradientTransform }}>
      <Box
        style={{ x, scale, rotateZ /*shortcut  rotateZ : rotateZ ==> rorateZ 이름같으면 생략가능*/ }}
        drag="x"
        dragSnapToOrigin
      ></Box>
    </Wrapper>
  );
  /* test할때는 wrapper의 height조절 후 진행!*/
};

export default Motionvalues;
