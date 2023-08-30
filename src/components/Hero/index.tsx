import React from "react";
import { Climate_Crisis } from "next/font/google";
import {
  Box,
  VStack,
  Text,
  Container,
  Button,
  Heading,
} from "@chakra-ui/react";

const Fade = require("react-reveal/Fade");

const climate_crisis = Climate_Crisis({
  weight: ["400"],
  subsets: ["latin"],
});

export default function Hero() {
  return (
    <Box h="90vh">
      <Container maxW="1160px" h="full">
        <VStack h="full" alignItems="center" justifyContent="center">
          <Fade top>
            <Heading
              style={climate_crisis.style}
              as="h1"
              textTransform="uppercase"
              fontSize={{
                base: "30px",
                sm: "50px",
                md: "80px",
                lg: "100px",
                xl: "120px",
                "2xl": "130px",
              }}
              color="primary"
              wordBreak="break-all"
            >
              BlitzBets
            </Heading>
          </Fade>
          <Fade bottom>
            <Text fontSize="20px" mb="5" textAlign="center">
              Where everything happens!!
            </Text>
          </Fade>
          <Fade bottom>
            <Button
              variant="primary-outline"
              rounded="full"
              size={{ base: "md", md: "lg" }}
            >
              Get Started
            </Button>
          </Fade>
        </VStack>
      </Container>
    </Box>
  );
}
