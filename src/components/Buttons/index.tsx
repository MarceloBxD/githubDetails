import React, { useState } from "react";
import { Flex, Button, Text, Avatar } from "@chakra-ui/react";
import { useApp } from "../../contexts/contextApi";
import { Card } from "../Card";

export const Buttons = ({ ...props }) => {
  const {
    user,
    setUser,
    modalOpen,
    setModalOpen,
    buttonAppears,
    setButtonAppears,
  }: any = useApp();

  // se nao tiver o usuário mostrar um toast falando para inserir algum usuário

  return (
    <Flex flexDir="column">
      <Button
        onClick={() => {
          setModalOpen(!modalOpen);
          setButtonAppears(false);
        }}
        p="5px"
        display={buttonAppears ? "block" : "none"}
        variant="ghost"
        bgColor="#fff"
        color="#000"
        {...props}
      >
        Search
      </Button>
      {modalOpen && <Card />}
    </Flex>
  );
};
