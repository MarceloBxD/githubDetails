import React, { useState } from "react";
import { Input } from "@chakra-ui/react";

export const Inputs = ({ ...props }) => {
  const [user, setUser] = useState("");

  return (
    <Input
      p="20px"
      onChange={(e) => setUser(e.target.value)}
      value={user}
      placeholder="Usuário"
      {...props}
    />
  );
};
