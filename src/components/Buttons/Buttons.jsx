import React from "react";
import PropTypes from 'prop-types';
export const Buttons = ({ size, bg,label, ...passProps }) => {
  const style = { width: `${size}px`, backgroundColor: bg };
  return (
    <button style={style} {...passProps}>
      {label}
    </button>
  );
};

Buttons.prototype={
    size: PropTypes.number,
      /**
   * Size button is real px 
   */
    bg: PropTypes.string,
    label:PropTypes.string,
}
export default Buttons;
