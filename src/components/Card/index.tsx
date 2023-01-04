import React from "react";
import { Flex, Text, Avatar, Button } from "@chakra-ui/react";
import { useApp } from "../../contexts/contextApi";

export const Card = () => {
  const { user, setModalOpen, setButtonAppears }: any = useApp();

  return (
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
        <Text fontWeight="400">{user}</Text>
        <Text mt="30px" fontWeight="300">
          Dados
        </Text>
      </Flex>
    </Flex>
  );
};
