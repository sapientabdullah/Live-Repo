import React from "react";
import { Box, Heading, Text, Stack, Button, Select } from "@chakra-ui/react";

export default function Middle() {
  return (
    <Box m="7" mb="10">
      <Heading mb="3" as="h1">
        Blog
      </Heading>
      <Text color="blackAlpha.700" mb="6">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla atque,
        veritatis voluptatibus animi culpa eius.
      </Text>
      <Stack direction="row" spacing="4" align="center">
        <Button colorScheme="gray" variant="solid">
          All
        </Button>
        <Button colorScheme="gray" variant="ghost">
          Destination
        </Button>
        <Button colorScheme="gray" variant="ghost">
          Culinary
        </Button>
        <Button colorScheme="gray" variant="ghost">
          Lifestyle
        </Button>
        <Button colorScheme="gray" variant="ghost" mr="auto">
          Tips & Hacks
        </Button>
        <Heading as="h2" color="blackAlpha.700" fontSize="m">
          Sort:
        </Heading>
        <Select placeholder="Newest" w="fit-content" fontWeight="bold"></Select>
      </Stack>
    </Box>
  );
}
