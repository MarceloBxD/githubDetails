import React from "react";
import { Flex } from "@chakra-ui/react";
import { Inputs } from "../Inputs";
import { Buttons } from "../Buttons";

export const InsertData = () => {
  return (
    <Flex
      justify="center"
      flexDir="column"
      m="20px"
      gap="10px"
      w="300px"
      h="60px"
    >
      <Inputs />
      <Buttons />
    </Flex>
  );
};
