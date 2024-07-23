import React from "react";
import {
  Box,
  HStack,
  VStack,
  Heading,
  Text,
  FormControl,
  Input,
  InputGroup,
  InputRightElement,
  Button,
  Link,
  Highlight,
} from "@chakra-ui/react";

export default function Footer() {
  return (
    <Box as="footer" bg="black" h="3xs" m="1.5" borderRadius="lg">
      <HStack justifyContent="space-between" mx="6">
        <VStack alignItems="left">
          <Heading size="lg" mt={["4", "5", "5"]}>
            <Highlight
              query={"Live"}
              styles={{
                rounded: "full",
                bgGradient: "linear(to-r, white, green.100)",
                bgClip: "text",
              }}
            >
              Live
            </Highlight>
          </Heading>
          <Text maxW={350} mt="3" fontSize="sm" color="whiteAlpha.700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod quo,
            voluptatem quis et sint debitis.
          </Text>
          <Text color="whiteAlpha.900" fontSize="sm" mt="4.0625rem">
            ©2024 Live. All rights reserved.
          </Text>
        </VStack>
        <VStack alignItems="left" spacing="8" mt="6" color="whiteAlpha.900">
          <Link href="#">About Us</Link>
          <Link href="#" color="whiteAlpha.700">
            Blog
          </Link>
          <Link href="#" color="whiteAlpha.700">
            Career
          </Link>
        </VStack>
        <VStack alignItems="left" spacing="8" mt="6" color="whiteAlpha.900">
          <Link href="#">Support</Link>
          <Link href="#" color="whiteAlpha.700">
            Contact Us
          </Link>
          <Link href="#" color="whiteAlpha.700">
            FAQ
          </Link>
        </VStack>
        <VStack alignItems="left" spacing="9" mt="6">
          <Heading size="md" color="whiteAlpha.900">
            Get Updates
          </Heading>
          <FormControl mt="3">
            <InputGroup>
              <Input
                type="email"
                placeholder="Enter your email"
                color="whiteAlpha.800"
                height="3.5rem"
                fontSize="sm"
                width="21.875rem"
              ></Input>
              <InputRightElement width="fit-content" mr="2" my="2">
                <Button
                  fontSize="sm"
                  colorScheme="gray"
                  borderColor="whiteAlpha.800"
                >
                  Subscribe
                </Button>
              </InputRightElement>
            </InputGroup>
          </FormControl>
          <HStack color="whiteAlpha.900" fontSize="sm">
            <Text mr="3">Privacy Policy</Text>
            <Text>Terms of Service</Text>
          </HStack>
        </VStack>
      </HStack>
    </Box>
  );
}
