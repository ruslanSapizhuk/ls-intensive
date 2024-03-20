import { TextareaHTMLAttributes, FC, RefCallback } from "react";
import { clsx } from "clsx";

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  innerRef?: RefCallback<any>;
}
const TextArea: FC<Props> = ({ className, innerRef, ...props }) => {
  return (
    <textarea
      {...props}
      ref={innerRef}
      className={clsx(
        "mb-5 border-b-2 border-black text-black text-sm focus:border-b-2 block w-full p-2.5 placeholder-black",
        className
      )}
    />
  );
};

export { TextArea };
