import React from "react";

type ButtonProps<C extends React.ElementType = "button"> = {
  as?: C;
  variant?: "primary" | "secondary";
  size?: "small" | "medium" | "large";
} & React.ComponentPropsWithRef<C>;

const Button = React.forwardRef(
  <C extends React.ElementType = "button">(
    {
      as,
      children,
      variant = "primary",
      size = "medium",
      ...rest
    }: ButtonProps<C>,
    ref: React.Ref<Element>,
  ) => {
    const Component = as || "button";

    return (
      <Component ref={ref} {...rest}>
        {children}
      </Component>
    );
  },
);

export default Button;
