import React from "react";
import {
  Grid,
  GridItem,
  ListItem,
  Stack,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import "./styles/writingMode.css";

const Information2 = () => {
  return (
    <>
      <Grid
        alignItems="center"
        templateAreas={{
          base: `"Text3"
                "Text1"
                "Text2"`,
          md: `"Text1 Text3"
              "Text2 Text3"`,
          lg: `"Text1 Text3"
               "Text2 Text3"`,
        }}
      >
        <GridItem area={"Text1"}>
          <Stack
            flexDirection={{ base: "column", md: "column", lg: "row" }}
            alignItems="baseline"
            spacing={3}
          >
            <Text
              textAlign={{ base: "center", md: "left", lg: "left" }}
              fontSize={{ base: "md", md: "xl", lg: "2xl" }}
              p={5}
            >
              <span style={{ fontWeight: "500" }}>
                ¿Sabías que la micropigmentación volvió a ser tendencia en los
                últimos años y hoy es uno de los tratamientos de belleza más
                solicitados por el público femenino y masculino?
              </span>{" "}
              Esta profesión no solo permite extenderse nacional sino también
              internacionalmente.
            </Text>
          </Stack>
        </GridItem>
        <GridItem area={"Text2"}>
          <Stack
            flexDirection={{ base: "column", md: "column", lg: "row" }}
            alignItems="baseline"
            spacing={3}
          >
            <Text
              textAlign={{ base: "center", md: "left", lg: "left" }}
              fontSize={{ base: "md", md: "xl", lg: "2xl" }}
              p={5}
            >
              Con esta técnica, cada profesional se encargará de diseñar cejas,
              labios o párpados teniendo en cuenta las facciones del rostro, la
              geometría, fototipo de piel y el gusto de cada cliente. Además de
              ser tendencia, también es rentable, tiene alta demanda y gran
              aceptación en el mercado.
            </Text>
          </Stack>
        </GridItem>
        <GridItem area={"Text3"}>
          <Stack
            flexDirection="row"
            p={5}
            justifyContent="center"
            alignItems="center"
          >
            <Text
              textAlign={{ base: "center", md: "left", lg: "center" }}
              fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
              fontWeight="300"
              mr={{ base: 6, md: 8, lg: 8 }}
              className="rotate"
            >
              Incluye
            </Text>
            <UnorderedList fontSize={{ base: "md", md: "xl", lg: "3xl" }}>
              <ListItem>Dermógrafo Shappire Pro </ListItem>
              <ListItem>Pigmentología</ListItem>
              <ListItem>Migraciones</ListItem>
              <ListItem>Diseño paso a paso</ListItem>
              <ListItem>Técnica y maniobras por zona</ListItem>
              <ListItem>Prácticas Presenciales </ListItem>
              <ListItem>After Class</ListItem>
              <ListItem>Certificado y Matrícula</ListItem>
            </UnorderedList>
          </Stack>
        </GridItem>
      </Grid>
      <Text
        textAlign="center"
        mb={10}
        fontSize={{ base: "md", md: "xl", lg: "2xl" }}
        mt={10}
      >
        ¡Si queres crear o transformar tu negocio, animate a estudiar esta
        carrera no lo dudes más!
      </Text>
    </>
  );
};

export default Information2;
