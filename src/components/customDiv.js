import React from 'react';

const CustomDiv = ({ width, height, display, position, textColor, backgroundColor, padding, margin }) => {
  const divStyle = {
    width,
    height,
    display,
    position,
    color: textColor,
    backgroundColor,
    padding,
    margin,
  };

  return <div style={divStyle}>Custom Content</div>;
};

export default CustomDiv;
