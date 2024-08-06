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
          <List textAlign={{ base: "center" }}>
            <ListItem mb={8}>
              {" "}
              <ListIcon as={CalendarIcon} mr={3} />
              Inicio: Lunes 9 de Septiembre.
            </ListItem>
            <ListItem mb={8}>
              <ListIcon as={TimeIcon} mr={3} />5 meses. El primer mes es todo
              teoría online, tres veces por semana. El resto de los meses es 100
              % PRESENCIAL
            </ListItem>
            <ListItem>
              <ListIcon as={EditIcon} mr={3} />
              La práctica es obligatoriamente presencial, podes elegir
              cualquiera de nuestras sedes. Nuevo espacio: San Telmo, Capitál
              Federal. Provincia de Buenos Aires
            </ListItem>
          </List>
          <Image
            src="assets/img/newPhoto.jpeg"
            alt="maquinaMicropigmentacion"
            borderRadius="15px"
            mt={{ base: "50px" }}
            w={{ base: "90%", md: "90%", lg: "70%" }}
            objectFit="cover"
          />
        </SimpleGrid>
      </HStack>
    </>
  );
};

export default Information;
