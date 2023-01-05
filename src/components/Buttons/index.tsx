import React, { useState } from "react";
import { Flex, Button, Text, Avatar } from "@chakra-ui/react";
import { useApp } from "../../contexts/contextApi";
import { Card } from "../Card";
import { useToast } from "@chakra-ui/react";
import { motion } from "framer-motion";

export const Buttons = ({ ...props }) => {
  const toast = useToast();
  const {
    username,
    modalOpen,
    setModalOpen,
    buttonAppears,
    setButtonAppears,
    setUsername,
    githubApi,
  }: any = useApp();

  // const githubApi = async (username: string) => {
  //   const req = await fetch(`https://api.github.com/users/${username}`);
  //   const json = await req.json();
  //   console.log(json);
  //   setDataUser(json);
  // };

  return (
    <Flex flexDir="column">
      <Button
        onClick={() => {
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
        }}
        display={buttonAppears ? "block" : "none"}
        variant="ghost"
        bgColor="#fff"
        color="#000"
        {...props}
      >
        <Text align="center">Search</Text>
      </Button>
      {modalOpen && <Card />}
    </Flex>
  );
};
