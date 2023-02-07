import { Container } from "@chakra-ui/react";
import React from "react";
import Counter from "./components/Counter";
import Title from "./components/Title";
import Sedes from "./components/Sedes";
import Information from "./components/Information";
import Payment from "./components/Payment";
import Information2 from "./components/Information2";
import Jobs from "./components/Jobs";
import Copyright from "./components/Copyright";
import Footer from "./components/Footer";
import Redes from "./components/Redes";

function App() {
  return (
    <>
      <div
        style={{
          fontFamily: "GT America, Helvetica Neue, Helvetica, sans-serif",
          fontWeight: "300",
        }}
      >
        <Container maxW="container.xl">
          <Title />
          <Information />
          <Jobs />
          <Sedes />
          <Information2 />
          <Payment />
          <Footer />
        </Container>
      </div>
      <Copyright />
      <Counter />
    </>
  );
}

export default App;
