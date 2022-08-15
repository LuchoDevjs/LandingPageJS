import React from "react";
import {
  Image,
  List,
  ListItem,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";

const Payment = () => {
  return (
    <VStack mb={{ base: 14, md: 14, lg: 16 }} flexDirection="column">
      <Text fontSize={{ base: "3xl", md: "3xl", lg: "4xl" }} mb={6}>
        Métodos de pago
      </Text>
      <List>
        <SimpleGrid columns={{ base: 2, md: 5, lg: 5 }} alignItems="center">
          <ListItem
            ml={{ base: 5, md: 3, lg: 3 }}
            mb={{ base: 5, md: 5, lg: 5 }}
          >
            <Image
              w={{ base: 32, md: 36, lg: 36 }}
              src="../../assets/img/mp.webp"
              objectFit="cover"
            />
          </ListItem>
          <ListItem
            ml={{ base: 10, md: 8, lg: 8 }}
            mb={{ base: 5, md: 5, lg: 5 }}
          >
            <Image
              w={{ base: 16, md: 20, lg: 20 }}
              src="https://iconape.com/wp-content/png_logo_vector/pago-facil-2019-logo.png"
              objectFit="cover"
            />
          </ListItem>
          <ListItem
            ml={{ base: 6, md: 3, lg: 3 }}
            mb={{ base: 5, md: 0, lg: 0 }}
          >
            {" "}
            <Image
              w={{ base: 28, md: 32, lg: 32 }}
              src="https://iconape.com/wp-content/png_logo_vector/rapipago-logo.png"
              objectFit="cover"
            />
          </ListItem>
          <ListItem ml={{ base: 8, md: 5, lg: 5 }}>
            {" "}
            <Image
              w={{ base: 20, md: 24, lg: 24 }}
              src="../../assets/img/visa.png"
              objectFit="cover"
            />
          </ListItem>
          <ListItem ml={{ base: 8, md: 5, lg: 3 }}>
            {" "}
            <Image
              w={{ base: 20, md: 24, lg: 24 }}
              src="https://img.icons8.com/color/344/mastercard.png"
              objectFit="cover"
            />
          </ListItem>
        </SimpleGrid>
      </List>
    </VStack>
  );
};

export default Payment;
