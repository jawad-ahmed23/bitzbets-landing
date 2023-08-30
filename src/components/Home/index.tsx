import React from "react";
import { Box, Image } from "@chakra-ui/react";
import { Footer, Hero, Nav, About, CallToAction } from "..";

export default function CHome() {
  return (
    <>
      <Nav />
      <Hero />
      <About />
      <CallToAction />

      <Footer />
    </>
  );
}
