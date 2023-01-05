import React, { useState } from "react";
import { Input } from "@chakra-ui/react";
import { useApp } from "../../contexts/contextApi";
import { useToast } from "@chakra-ui/react";

export const Inputs = () => {
  const {
    username,
    setUsername,
    modalOpen,
    setModalOpen,
    githubApi,
    setButtonAppears,
  }: any = useApp();
  const toast = useToast();

  return (
    <Input
      color="#fff"
      p="20px"
      onChange={(e) => setUsername(e.target.value)}
      value={username}
      placeholder="Usuário"
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          githubApi(username)
            .then(() => {
              console.log("Usuário encontrado com sucesso!");
            })
            .catch((err: any) => {
              console.log(err);
            });
          if (username === "") {
            toast({
              title: "Usuário não encontrado",
              description: "Insira um usuário válido",
              status: "error",
              duration: 2000,
              isClosable: true,
            });
          } else {
            toast({
              title: "Usuário encontrado com sucesso",
              description: "Usuário encontrado",
              status: "success",
              duration: 2000,
              isClosable: true,
            });
          }

          setModalOpen(!modalOpen);
          setButtonAppears(false);
          setUsername("");
        }
      }}
    />
  );
};
