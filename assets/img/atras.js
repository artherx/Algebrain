import React from "react";
import Svg, { Rect } from "react-native-svg";

const Atras = (props) => (
  <Svg
    width={55}
    height={69}
    fill="none"
    viewBox="0 0 70 70"
    {...props}
  >
    <Rect
      width={62.076}
      height={7.469}
      fill={props.fill}
      rx={3.734}
      transform="matrix(.8564 -.51632 .21461 .9767 .235 32.051)"
    />
    <Rect
      width={62.076}
      height={7.469}
      fill={props.fill}
      rx={3.734}
      transform="matrix(.8564 .51632 -.21461 .9767 1.603 29.654)"
    />
  </Svg>
)

export default Atras;
