"use client";
import { FC, FormEvent } from "react";
import Form from "@/components/Form";

const ConnectedForm: FC = () => {
  const handleSubmit = <T extends object>(data: T) => {
    console.log(data);
  };
  return <Form onSubmit={handleSubmit} />;
};

export { ConnectedForm };
