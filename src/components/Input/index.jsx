import React from "react";
import PropTypes from "prop-types";

const shapes = {
  round: "rounded-[33px]",
};
const variants = {
  fill: {
    white_A700: "bg-white-A700 text-gray-500",
  },
};
const sizes = {
  xs: "h-[66px] pl-5 pr-3 text-lg",
};

const Input = React.forwardRef(
  (
    {
      className = "",
      name = "",
      placeholder = "",
      type = "text",
      children,
      label = "",
      prefix,
      suffix,
      onChange,
      shape = "",
      variant = "fill",
      size = "xs",
      color = "white_A700",
      ...restProps
    },
    ref
  ) => {
    const handleChange = (e) => {
      if (onChange) onChange(e?.target?.value);
    };

    return (
      <div
        className={`${className} flex items-center justify-center text-gray-500 text-lg bg-white-A700 flex-1 rounded-[33px] md:flex-1 ${
          shapes[shape] || ""
        } ${variants[variant]?.[color] || variants[variant] || ""} ${
          sizes[size] || ""
        }`}
      >
        {!!label && label}
        {!!prefix && prefix}
        <input
          ref={ref}
          type={type}
          name={name}
          onChange={handleChange}
          placeholder={placeholder}
          {...restProps}
          className={`${className} flex items-center justify-center text-gray-500 text-lg ${
            sizes[size] || ""
          }`}
          style={{ height: "3rem", backgroundColor: "transparent" , border: "none", outline: "none", borderRadius : "none"}}
        />
        {!!suffix && suffix}
      </div>
    );
  }
);

Input.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string,
  prefix: PropTypes.node,
  suffix: PropTypes.node,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["xs"]),
  variant: PropTypes.oneOf(["fill"]),
  color: PropTypes.oneOf(["white_A700"]),
};

export { Input };