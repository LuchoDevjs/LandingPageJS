import React, { useEffect } from "react";
import { Text } from "@chakra-ui/react";
import { getTitle } from "../helpers/getApi";
//  to do conectar a un modelo

const Title = () => {
  useEffect(() => {
    getTitle();
  }, []);
  return (
    <Text
      fontSize={{ base: "2xl", md: "3xl", lg: "5xl" }}
      textAlign="center"
      mt={12}
      letterSpacing={2}
    >
      {getTitle().title}
    </Text>
  );
};

export default Title;
