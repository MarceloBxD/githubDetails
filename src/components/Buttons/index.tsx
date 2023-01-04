import React, { useState } from "react";
import { Flex, Button, Text, Avatar } from "@chakra-ui/react";

export const Buttons = ({ ...props }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [buttonAppears, setButtonAppears] = useState(true);
  // puxar o usuario do context, que ainda será criado...

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
      {modalOpen && (
        <Flex
          flexDir="column"
          position="fixed"
          h="400px"
          borderRadius="10px"
          top="20%"
          bottom="0"
          w="300px"
          bgColor="#CCC"
        >
          <Flex h="30px" px="10px" align="center" w="100%" justify="flex-end">
            <Button
              onClick={() => {
                setModalOpen(false);
                setButtonAppears(true);
              }}
              variant="unstyled"
            >
              x
            </Button>
          </Flex>
          <Flex flexDir="column" align="center" mt="20px" w="100%">
            <Avatar size="md" />
            <Text fontWeight="400">Usuário</Text>
            <Text mt="30px" fontWeight="300">
              Dados
            </Text>
          </Flex>
        </Flex>
      )}
    </Flex>
  );
};
