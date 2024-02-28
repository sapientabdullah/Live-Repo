import React from "react";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  HStack,
  Input,
  InputGroup,
  InputRightElement,
  Heading,
  Text,
  Button,
  ButtonGroup,
  Avatar,
  Stack,
  Icon,
  Highlight,
} from "@chakra-ui/react";

import { ChevronRightIcon, SearchIcon, InfoIcon } from "@chakra-ui/icons";

export default function Navbar() {
  return (
    <Box
      as="nav"
      bgImage="url('public/green.jpg')"
      bgPosition="center"
      bgRepeat="no-repeat"
      borderRadius="lg"
      h="2xl"
      bgSize="cover"
      m="1.5"
      color="whiteAlpha.900"
    >
      <HStack color="whiteAlpha.900" justify="space-between" mx="6">
        <Heading as="md" size="lg" mt={["4", "3.5", "3.5"]}>
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

        <Breadcrumb
          separator={<ChevronRightIcon color="green.100" />}
          fontWeight="small"
          fontSize={["sm", "md", "md"]}
          spacing={["5", "6", "6"]}
          mt={["4", "3.5", "3.5"]}
        >
          <BreadcrumbItem>
            <BreadcrumbLink href="#">All</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink href="#">Destination</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink href="#">Culinary</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink href="#">Lifestyle</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink href="#">Tips & Hacks</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>

        <InputGroup
          width="auto"
          variant="filled"
          mt={["4", "3.5", "3.5"]}
          ml="12"
          fontSize={["sm", "md", "md"]}
        >
          <Input placeholder="Search destination..." color="whiteAlpha.900" />
          <InputRightElement>
            <SearchIcon color="gray.500" />
          </InputRightElement>
        </InputGroup>

        <Button
          variant="outline"
          border="none"
          color="whiteAlpha.900"
          leftIcon={<InfoIcon />}
          mt={["4", "3.5", "3.5"]}
          fontWeight="small"
          _hover={{ color: "black", bg: "whiteAlpha.900" }}
          _active={{ color: "whiteAlpha.900", bg: "blackAlpha.50" }}
        >
          EN
        </Button>
        <ButtonGroup mt={["4", "3.5", "3.5"]} fontWeight="medium">
          <Button
            variant="ghost"
            color="whiteAlpha.900"
            _hover={{ color: "black", bg: "whiteAlpha.900" }}
            _active={{ color: "whiteAlpha.900", bg: "blackAlpha.50" }}
          >
            Log in
          </Button>
          <Button>Sign Up</Button>
        </ButtonGroup>
      </HStack>

      <Stack
        direction={["column", "row", "row"]}
        justify="space-between"
        mx="6"
        mt={["14rem", "23rem", "23rem"]}
      >
        <Box mt="10">
          <Box
            bg="whiteAlpha.500"
            w="fit-content"
            borderRadius="full"
            px="3"
            py="1.5"
            mb="3"
            fontSize="sm"
          >
            Destination
          </Box>
          <Heading>Exploring the Wonders of Hiking</Heading>
          <Text maxW={400} mt="3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit similique
            quaerat molestias itaque architecto ipsam.
          </Text>
          <HStack mt="3">
            <Icon viewBox="0 0 200 200" color="whiteAlpha.900" boxSize={3}>
              <path
                fill="currentColor"
                d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
              />
            </Icon>
            <Icon viewBox="0 0 200 200" color="whiteAlpha.900" boxSize={3}>
              <path
                fill="currentColor"
                d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
              />
            </Icon>
            <Icon viewBox="0 0 200 200" color="whiteAlpha.900" boxSize={3}>
              <path
                fill="currentColor"
                d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
              />
            </Icon>
          </HStack>
        </Box>
        <Stack direction="column" justify="center" mt={["4", "10", "10"]}>
          <HStack>
            <Avatar
              name="Dan Abrahmov"
              src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              objectFit="cover"
              mr="2"
            />
            <Text>Ethan Mitchell</Text>
          </HStack>
          <Text mt="3">27 Feb, 2024 • 10 mins read</Text>
        </Stack>
      </Stack>
    </Box>
  );
}
