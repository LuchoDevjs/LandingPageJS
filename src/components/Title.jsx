import React, { useEffect } from "react";
import { Text } from "@chakra-ui/react";

const Title = () => {
  return (
    <Text
      fontSize={{ base: "2xl", md: "3xl", lg: "5xl" }}
      textAlign="center"
      mt={12}
      letterSpacing={2}
    >
      FORMACIÓN PROFESIONAL 2023 MICROPIGMENTACIÓN
    </Text>
  );
};

export default Title;
