import React from "react";
import { List, Text } from "@chakra-ui/react";
import { AiOutlineCopyrightCircle } from "react-icons/ai";

const Copyright = () => {
  return (
    <>
      <List
        flexDirection="row"
        alignItems="center"
        display="flex"
        mb={{ base: "13rem", md: "12rem", lg: "5rem" }}
        marginLeft={2}
        justifyContent="center"
        color="whiteAlpha.800"
        fontSize={{ base: "xs", md: "sm", lg: "md" }}
      >
        <Text>
          <AiOutlineCopyrightCircle />
        </Text>
        <Text marginLeft={1} fontWeight="400">
          Copyright 2022 Luciano González
        </Text>
      </List>
    </>
  );
};

export default Copyright;
