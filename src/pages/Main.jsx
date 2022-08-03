import React from "react";
import { Container } from "react-bootstrap";
import Content from "../component/Content";
import Footer from "../component/Footer";
import Head from "../component/Head";

function Main() {
  return (
    <>
      <Head />
      <Container>
        <Content />
      </Container>
      <Footer />
    </>
  );
}

export default Main;
