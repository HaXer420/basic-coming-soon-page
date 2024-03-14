import React from "react";
import PropTypes from "prop-types";

const shapes = {
  round: "rounded-[33px]",
  circle: "rounded-[50%]",
};
const variants = {
  gradient: {
    blue_700_blue_500_01: "bg-gradient text-white-A700",
  },
  fill: {
    white_A700: "bg-white-A700 shadow-xs",
  },
};
const sizes = {
  sm: "h-[66px] px-[35px] text-lg",
  xs: "h-[40px] px-2",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  variant = "fill",
  size = "xs",
  color = "white_A700",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex items-center justify-center text-center cursor-pointer ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  shape: PropTypes.oneOf(["round", "circle"]),
  size: PropTypes.oneOf(["sm", "xs"]),
  variant: PropTypes.oneOf(["gradient", "fill"]),
  color: PropTypes.oneOf(["blue_700_blue_500_01", "white_A700"]),
};

export { Button };
