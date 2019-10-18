import React, { useState, useEffect } from "react";
import axios from "axios";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = (props) => {
console.log("props from app", props);
const {bubbles, setBubbles} = props;
  // const [colorList, setColorList] = useState([]);
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property

  return (
    <>
      <ColorList colors={bubbles} updateColors={setBubbles} />
      <Bubbles colors={bubbles} />
    </>
  );
};

export default BubblePage;
