import React from "react";
import { Stack, Text } from "@chakra-ui/react";

const Information2 = () => {
  return (
    <>
      <Stack
        flexDirection={{ base: "column", md: "column", lg: "row" }}
        alignItems="baseline"
        spacing={3}
      >
        <Text
          textAlign={{ base: "center", md: "center", lg: "center" }}
          fontSize={{ base: "md", md: "xl", lg: "2xl" }}
          p={5}
        >
          <span style={{ fontWeight: "500" }}> Incluye: </span>Dermógrafo
          Shappire Pro de práctica, Pigmentos Js Pigments para tus prácticas con
          modelos reales, Inglés técnico, Colorimetría, pasantías coordinadas,
          material de estudio, elementos de prácticas, certificado y matrícula
          avalado por Academia Juana Sotelo Técnica Internacional en Maquillaje
          Permanente.
        </Text>
        <Text
          textAlign={{ base: "center", md: "center", lg: "center" }}
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
        <Text
          textAlign={{ base: "center", md: "center", lg: "center" }}
          fontSize={{ base: "md", md: "xl", lg: "2xl" }}
          p={5}
        >
          Con esta técnica, cada profesional se encargará de diseñar cejas,
          labios o párpados teniendo en cuenta las facciones del rostro, la
          geometría, fototipo de piel y el gusto de cada cliente. Además de ser
          tendencia, también es rentable, tiene alta demanda y gran aceptación
          en el mercado.
        </Text>
      </Stack>
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
