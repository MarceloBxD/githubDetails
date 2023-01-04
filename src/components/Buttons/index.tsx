import React, { useState } from "react";
import { Flex, Button, Text, Avatar } from "@chakra-ui/react";
import { useApp } from "../../contexts/contextApi";
import { Card } from "../Card";

export const Buttons = ({ ...props }) => {
  const {
    username,
    setDataUser,
    modalOpen,
    setModalOpen,
    buttonAppears,
    setButtonAppears,
  }: any = useApp();

  const githubApi = async (username: string) => {
    const req = await fetch(`https://api.github.com/users/${username}`);
    const json = await req.json();
    console.log(json);
    setDataUser(json);
  };

  // se nao tiver o usuário mostrar um toast falando para inserir algum usuário

  return (
    <Flex flexDir="column">
      <Button
        onClick={() => {
          githubApi(username)
            .then(() => {
              console.log("Usuário encontrado com sucesso!");
            })
            .catch((err) => {
              console.log(err);
            });
          setModalOpen(!modalOpen);
          setButtonAppears(false);
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
