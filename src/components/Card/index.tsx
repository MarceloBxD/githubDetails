import React from "react";
import { Flex, Text, Avatar, Button } from "@chakra-ui/react";
import { useApp } from "../../contexts/contextApi";
import backgroundCard from "../../assets/images/backgroundCard.jpg";

export const Card = () => {
  const { username, dataUser, setModalOpen, setButtonAppears }: any = useApp();

  return (
    <Flex
      style={{
        backgroundImage: `url(${backgroundCard})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      flexDir="column"
      position="fixed"
      h="500px"
      borderRadius="10px"
      top="20%"
      gap="10px"
      bottom="0"
      w="300px"
    >
      <Flex h="30px" px="10px" align="center" w="100%" justify="flex-end">
        <Button
          color="#fff"
          onClick={() => {
            setModalOpen(false);
            setButtonAppears(true);
          }}
          variant="unstyled"
        >
          x
        </Button>
      </Flex>
      <Flex color="#fff" flexDir="column" align="center" mt="20px" w="100%">
        <Avatar size="md" src={dataUser.avatar_url} />
        <Text fontWeight="400">{username}</Text>
        <Flex
          flexDir="column"
          flexWrap="wrap"
          w="100%"
          p="30px"
          fontSize="18px"
          fontWeight="300"
        >
          <Flex
            align="center"
            fontWeight="bold"
            w="100%"
            justify="space-between"
          >
            <Text>Following: {dataUser.following}</Text>
            <Text>Followers: {dataUser.followers}</Text>
          </Flex>
          <Flex flexDir="column">
            <Text
              textAlign="center"
              display={dataUser.company ? "block" : "none"}
            >
              Company: {dataUser.company}
            </Text>
            <Text align="center">{dataUser.location}</Text>
            <Text textAlign="center" letterSpacing="3px">
              {dataUser.bio}
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};
