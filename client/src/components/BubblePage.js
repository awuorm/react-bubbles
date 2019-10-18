import React from "react";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = props => {
  const { bubbles, setBubbles } = props;
  return (
    <>
      <ColorList colors={bubbles} updateColors={setBubbles} />
      <Bubbles colors={bubbles} />
    </>
  );
};

export default BubblePage;
