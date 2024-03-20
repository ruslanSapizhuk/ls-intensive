import { InputHTMLAttributes, FC, RefCallback } from "react";
import { clsx } from "clsx";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  innerRef?: RefCallback<any>;
}
const TextInput: FC<Props> = ({ className, innerRef, ...props }) => {
  return (
    <input
      {...props}
      ref={innerRef}
      type="text"
      className={clsx(
        "mb-5 border-b-2 border-black text-black text-sm focus:border-b-2 block w-full p-2.5 placeholder-black",
        className
      )}
    />
  );
};

export { TextInput };
