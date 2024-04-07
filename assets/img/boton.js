import React from "react";
import Svg, { Rect } from "react-native-svg";

const Icon = (props) => {
  const {
    width,
    height,
    primaryColor,
    secondaryColor,
    textColor,
    fontSize,
    textContent,
  } = props;

  return (
    <Svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
      <Rect width="100%" height={height * 0.9} y="13" fill={primaryColor} rx="50" />
      <Rect width="100%" height={height * 0.9} fill={secondaryColor} rx="50" />
    </Svg>
  );
};
export default Icon;
