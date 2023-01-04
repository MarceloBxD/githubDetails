import React, { useState } from "react";
import { Input } from "@chakra-ui/react";
import { useApp } from "../../contexts/contextApi";

export const Inputs = () => {
  const { username, setUsername }: any = useApp();

  return (
    <Input
      color="#fff"
      p="20px"
      onChange={(e) => setUsername(e.target.value)}
      value={username}
      placeholder="Usuário"
    />
  );
};
