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
        Aplicativo criado para consultar algumas informações do perfil de
        qualquer usuário que tenha uma conta criada no Github! Haverá formas de
        melhorar o aplicativo, como por exemplo, adicionar mais informações,
        como por exemplo, as informações de repositórios do usuário, e também,
        adicionar uma página de detalhes do usuário, ou até mesmo, uma página de
        detalhes do repositório. Poderá ser feito também um rating do usuário,
        com algumas observações dadas por quem está a visitar o perfil do
        usuário.
      </Text>
    </Flex>
  );
};
