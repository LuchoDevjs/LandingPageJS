import React from "react";
import {
  HStack,
  Image,
  List,
  ListIcon,
  ListItem,
  SimpleGrid,
} from "@chakra-ui/react";
import { TimeIcon, CalendarIcon, EditIcon } from "@chakra-ui/icons";

const Information = () => {
  return (
    <>
      <HStack
        alignItems="start"
        fontSize={{ base: "md", md: "xl", lg: "2xl" }}
        justifyContent="end"
        mt={16}
        mb={16}
      >
        <SimpleGrid
          columns={{ base: 1, md: 2, lg: 2 }}
          alignItems="center"
          justifyItems="center"
        >
          <List ml={{ base: "3rem", md: "7rem", lg: "10rem" }}>
            <ListItem mb={8}>
              {" "}
              <ListIcon as={CalendarIcon} mr={3} />
              Inicio: Lunes 20 de Marzo de 10:00 a 12:00.
            </ListItem>
            <ListItem mb={8}>
              <ListIcon as={TimeIcon} mr={3} />
              Duración: 5 meses. La teoría la hacemos Online, en vivo a través
              de la plataforma zoom.
            </ListItem>
            <ListItem>
              <ListIcon as={EditIcon} mr={3} />
              La práctica es obligatoriamente presencial, podes elegir
              cualquiera de nuestras sedes.
            </ListItem>
          </List>
          <Image
            src="assets/img/alumnos.jpeg"
            alt="maquinaMicropigmentacion"
            borderRadius="15px"
            mt={{ base: "50px" }}
            w={{ base: "80%", md: "70%", lg: "70%" }}
            objectFit="cover"
          />
        </SimpleGrid>
      </HStack>
    </>
  );
};

export default Information;
