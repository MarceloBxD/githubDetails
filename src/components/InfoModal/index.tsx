import React from "react";
import { Flex, Button, Text } from "@chakra-ui/react";
import { useApp } from "../../contexts/contextApi";

export const InfoModal = () => {
  const { openModal, setOpenModal }: any = useApp();

  return (
    <Flex
      flexDir="column"
      position="absolute"
      left="0"
      marginLeft="20px"
      zIndex="999"
      w="400px"
      h="600px"
      bgColor="rgba(0,0,0,0.7)"
      color="#fff"
      borderRadius="20px"
    >
      <Flex px="10px" m="10px" justify="space-between" align="flex-start">
        <Text textDecor="underline" color="#fff">
          Informations
        </Text>
        <Button
          onClick={() => setOpenModal(!openModal)}
          _hover={{ backgroundColor: "#fff", color: "#000" }}
          variant="unstyled"
        >
          X
        </Button>
      </Flex>
      <Text p="20px" fontSize="16px">
        Application created to query some profile information of any user who
        has an account created on Github! Changes may be made, such as inserting
        some observation about the profile and storing it in a database, or also
        making a rating
      </Text>
    </Flex>
  );
};
