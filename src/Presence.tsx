import { useState } from "react";
import { Wrapper, Box } from "./style/StyledComponents";
import { AnimatePresence } from "framer-motion";

const boxVarient = {
  initail: { opacity: 0, scale: 0 },
  animate: { opacity: 1, scale: 1, rotateZ: 360 },
  leaving: { opacity: 0, scale: 0, y: 50 },
};

const Presence = () => {
  const [showing, SetShowing] = useState(false);
  const toggleShowing = () => {
    SetShowing((prev) => !prev);
  };
  return (
    <Wrapper>
      <button onClick={toggleShowing}>click</button>
      <AnimatePresence>
        {showing ? <Box variants={boxVarient} initial="initail" animate="animate" exit="leaving" /> : null}
        {/*exit은 컴포넌트가 사라질때 애니메이션 지정*/}
      </AnimatePresence>
    </Wrapper>
  );
};

export default Presence;
