import React from "react";
import { Box, HStack, VStack, Heading, Text } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Box
      as="footer"
      bg="black"
      h="3xs"
      m="1.5"
      color="whiteAlpha.900"
      borderRadius="lg"
    >
      <HStack justifyContent="space-evenly">
        <VStack mx="6" alignItems="left">
          <Heading
            as="md"
            size="lg"
            mt={["4", "3.5", "3.5"]}
            bgGradient="linear(to-r, white, green.100)"
            bgClip="text"
          >
            Live
          </Heading>
          <Text maxW={350} mt="3" fontSize="sm" color="whiteAlpha.800">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod quo,
            voluptatem quis et sint debitis.
          </Text>
          <Text color="whiteAlpha.900" fontSize="sm" mt="4.0625rem">
            ©2024 Live. All rights reserved.
          </Text>
        </VStack>
        <VStack>
          <Heading fontSize="m">Get Updates</Heading>
        </VStack>
      </HStack>
    </Box>
  );
}
