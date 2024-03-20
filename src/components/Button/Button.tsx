import React, { FC, ButtonHTMLAttributes } from "react";
import { clsx } from "clsx";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  inverted?: boolean;
}

const Button: FC<Props> = ({ children, inverted, className, ...props }) => {
  return (
    <button
      {...props}
      className={clsx(
        "rounded-full border-0 px-8 py-3 cursor-pointer text-white",
        inverted ? "bg-default" : "bg-black",
        className
      )}
    >
      {children}
    </button>
  );
};

export { Button };
