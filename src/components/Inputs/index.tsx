import React, { useState } from "react";
import { Input } from "@chakra-ui/react";
import { useApp } from "../../contexts/contextApi";

export const Inputs = () => {
  const { user, setUser }: any = useApp();

  return (
    <Input
      p="20px"
      onChange={(e) => setUser(e.target.value)}
      value={user}
      placeholder="Usuário"
    />
  );
};
