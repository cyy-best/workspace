import React from 'react';

const Div = ({ width, height, display, position, textColor, backgroundColor, padding, margin,children }) => {
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

  return <div style={divStyle}>{children}</div>;
};

export default Div;
