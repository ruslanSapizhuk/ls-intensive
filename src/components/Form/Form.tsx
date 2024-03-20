"use client";
import { FC, FormHTMLAttributes, useEffect, useMemo } from "react";
import { useForm, useWatch } from "react-hook-form";
import Button from "../Button";
import TextInput from "../TextInput";
import TextArea from "../TextArea";
import Link from "next/link";

interface Props extends FormHTMLAttributes<HTMLFormElement> {
  onSubmit: <T extends object>(data: T) => void;
}
const Form: FC<Props> = ({ onSubmit, ...props }) => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitSuccessful },
    reset,
  } = useForm({ mode: "onChange" });

  useEffect(() => {
    if (isSubmitSuccessful) reset();
  }, [reset, isSubmitSuccessful]);

  const firstName = useMemo(() => {
    const props = register("firstName");
    return {
      ...props,
      innerRef: props.ref,
    };
  }, [register]);

  const phoneNumber = useMemo(() => {
    const props = register("phoneNumber");
    return {
      ...props,
      innerRef: props.ref,
    };
  }, [register]);

  const massage = useMemo(() => {
    const props = register("massage");
    return {
      ...props,
      innerRef: props.ref,
    };
  }, [register]);

  return (
    <form {...props} onSubmit={handleSubmit(onSubmit)}>
      {/* <div>
        <TextInput placeholder="Ім'я" {...firstName} />
      </div> */}
      {/* <div>
        <TextInput placeholder="Номер телефону" {...phoneNumber} />
      </div>
      <div>
        <TextArea placeholder="Ваше питання" rows={3} {...massage} />
      </div> */}
      <Link href="https://t.me/lana_sapizhuk">
        <Button inverted className="w-full">
          Написати Лані в телеграм{""}
        </Button>
      </Link>
    </form>
  );
};

export { Form };
