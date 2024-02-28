import React from "react";
import {
  Box,
  Card,
  CardBody,
  Image,
  Text,
  Stack,
  Heading,
  Avatar,
  CardFooter,
  Divider,
} from "@chakra-ui/react";

export default function Blog() {
  return (
    <Box>
      <Stack direction={["row"]} m="7" spacing="10">
        <Card maxW="sm">
          <CardBody>
            <Box>
              <Box
                bg="blackAlpha.400"
                w="fit-content"
                borderRadius="full"
                px="3"
                py="1.5"
                mb="3"
                fontSize="xs"
                color="white"
                position="absolute"
                top="7"
                left="7"
              >
                Destination
              </Box>
              <Image
                src="https://images.unsplash.com/photo-1700377938664-ef98591ca729?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                borderRadius="lg"
              />
            </Box>
            <Stack>
              <Text mt="3" color="blackAlpha.700">
                27 Feb, 2024 • 10 mins read
              </Text>
              <Heading mt="3" fontSize="xl">
                Capturing Walton Lighthouse at Sunrise
              </Heading>
              <Text mt="3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
                unde deleniti accusamus nam atque, quas eaque alias harum
                consequuntur...
              </Text>
            </Stack>
          </CardBody>
          <CardFooter>
            <Avatar
              size="sm"
              name="Elena Donovan"
              src="https://images.unsplash.com/photo-1592621385612-4d7129426394?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              objectFit="cover"
            />
            <Text ml="3" mt="1" fontSize="sm">
              Elena Donovan
            </Text>
          </CardFooter>
        </Card>
        <Card maxW="sm">
          <CardBody>
            <Box>
              <Box
                bg="blackAlpha.400"
                w="fit-content"
                borderRadius="full"
                px="3"
                py="1.5"
                mb="3"
                fontSize="xs"
                color="white"
                position="absolute"
                top="7"
                left="7"
              >
                Lifestyle
              </Box>
              <Image
                src="https://images.unsplash.com/photo-1440778303588-435521a205bc?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                borderRadius="lg"
              />
            </Box>
            <Stack>
              <Text mt="3" color="blackAlpha.700">
                24 Feb, 2024 • 7 mins read
              </Text>
              <Heading mt="3" fontSize="xl">
                A Harmony of Books and Waves
              </Heading>
              <Text mt="3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
                unde deleniti accusamus nam atque, quas eaque alias harum
                consequuntur...
              </Text>
            </Stack>
          </CardBody>
          <CardFooter>
            <Avatar
              size="sm"
              name="Liam Bennett"
              src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              objectFit="cover"
            />
            <Text ml="3" mt="1" fontSize="sm">
              Liam Bennett
            </Text>
          </CardFooter>
        </Card>
        <Card maxW="sm">
          <CardBody>
            <Box>
              <Box
                bg="blackAlpha.400"
                w="fit-content"
                borderRadius="full"
                px="3"
                py="1.5"
                mb="3"
                fontSize="xs"
                color="white"
                position="absolute"
                top="7"
                left="7"
              >
                Destination
              </Box>
              <Image
                src="https://images.unsplash.com/photo-1546942976-1bdf94ffeb1f?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                borderRadius="lg"
              />
            </Box>
            <Stack>
              <Text mt="3" color="blackAlpha.700">
                22 Feb, 2024 • 6 mins read
              </Text>
              <Heading mt="3" fontSize="xl">
                Exploring San Francisco's Charms
              </Heading>
              <Text mt="3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
                unde deleniti accusamus nam atque, quas eaque alias harum
                consequuntur...
              </Text>
            </Stack>
          </CardBody>
          <CardFooter>
            <Avatar
              size="sm"
              name="Elijah Thompson"
              src="https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?q=80&w=2952&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              objectFit="cover"
            />
            <Text ml="3" mt="1" fontSize="sm">
              Elijah Thompson
            </Text>
          </CardFooter>
        </Card>
        <Card maxW="sm">
          <CardBody>
            <Box>
              <Box
                bg="blackAlpha.400"
                w="fit-content"
                borderRadius="full"
                px="3"
                py="1.5"
                mb="3"
                fontSize="xs"
                color="white"
                position="absolute"
                top="7"
                left="7"
              >
                Culinary
              </Box>
              <Image
                src="https://images.unsplash.com/photo-1617822205245-70fb4386616b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                borderRadius="lg"
              />
            </Box>
            <Stack>
              <Text mt="3" color="blackAlpha.700">
                20 Feb, 2024 • 10 mins read
              </Text>
              <Heading mt="3" fontSize="xl">
                A Culinary Journey into Japanese Delicacy
              </Heading>
              <Text mt="3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
                unde deleniti accusamus nam atque, quas eaque alias harum
                consequuntur...
              </Text>
            </Stack>
          </CardBody>
          <CardFooter>
            <Avatar
              size="sm"
              name="Michael Blake"
              src="https://images.unsplash.com/photo-1488161628813-04466f872be2?q=80&w=2864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              objectFit="cover"
            />
            <Text ml="3" mt="1" fontSize="sm">
              Michael Blake
            </Text>
          </CardFooter>
        </Card>
      </Stack>
      <Stack direction={["row"]} m="7" spacing="10">
        <Card maxW="sm">
          <CardBody>
            <Box>
              <Box
                bg="blackAlpha.400"
                w="fit-content"
                borderRadius="full"
                px="3"
                py="1.5"
                mb="3"
                fontSize="xs"
                color="white"
                position="absolute"
                top="7"
                left="7"
              >
                Tips & Hacks
              </Box>
              <Image
                src="https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                borderRadius="lg"
              />
            </Box>
            <Stack>
              <Text mt="3" color="blackAlpha.700">
                14 Feb, 2024 • 7 mins read
              </Text>
              <Heading mt="3" fontSize="xl">
                The Art of Journaling
              </Heading>
              <Text mt="3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
                unde deleniti accusamus nam atque, quas eaque alias harum
                consequuntur...
              </Text>
            </Stack>
          </CardBody>
          <CardFooter>
            <Avatar
              size="sm"
              name="Isabella Donovan"
              src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              objectFit="cover"
            />
            <Text ml="3" mt="1" fontSize="sm">
              Isabella Donovan
            </Text>
          </CardFooter>
        </Card>
        <Card maxW="sm">
          <CardBody>
            <Box>
              <Box
                bg="blackAlpha.400"
                w="fit-content"
                borderRadius="full"
                px="3"
                py="1.5"
                mb="3"
                fontSize="xs"
                color="white"
                position="absolute"
                top="7"
                left="7"
              >
                Destination
              </Box>
              <Image
                src="https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                borderRadius="lg"
              />
            </Box>
            <Stack>
              <Text mt="3" color="blackAlpha.700">
                10 Feb, 2024 • 8 mins read
              </Text>
              <Heading mt="3" fontSize="xl">
                Swiss Wonders
              </Heading>
              <Text mt="3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
                unde deleniti accusamus nam atque, quas eaque alias harum
                consequuntur...
              </Text>
            </Stack>
          </CardBody>
          <CardFooter>
            <Avatar
              size="sm"
              name="Elena Harper"
              src="https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              objectFit="cover"
            />
            <Text ml="3" mt="1" fontSize="sm">
              Elena Harper
            </Text>
          </CardFooter>
        </Card>
        <Card maxW="sm">
          <CardBody>
            <Box>
              <Box
                bg="blackAlpha.400"
                w="fit-content"
                borderRadius="full"
                px="3"
                py="1.5"
                mb="3"
                fontSize="xs"
                color="white"
                position="absolute"
                top="7"
                left="7"
              >
                Culinary
              </Box>
              <Image
                src="https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                borderRadius="lg"
              />
            </Box>
            <Stack>
              <Text mt="3" color="blackAlpha.700">
                26 Jan, 2024 • 7 mins read
              </Text>
              <Heading mt="3" fontSize="xl">
                The Essence of Italian Pizza
              </Heading>
              <Text mt="3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
                unde deleniti accusamus nam atque, quas eaque alias harum
                consequuntur...
              </Text>
            </Stack>
          </CardBody>
          <CardFooter>
            <Avatar
              size="sm"
              name="Johan Bender"
              src="https://images.unsplash.com/photo-1616507463730-6506dc4654f5?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              objectFit="cover"
            />
            <Text ml="3" mt="1" fontSize="sm">
              Johan Bender
            </Text>
          </CardFooter>
        </Card>
        <Card maxW="sm">
          <CardBody>
            <Box>
              <Box
                bg="blackAlpha.400"
                w="fit-content"
                borderRadius="full"
                px="3"
                py="1.5"
                mb="3"
                fontSize="xs"
                color="white"
                position="absolute"
                top="7"
                left="7"
              >
                Lifestyle
              </Box>
              <Image
                src="https://images.unsplash.com/photo-1609766857326-18a204c2cf31?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                borderRadius="lg"
              />
            </Box>
            <Stack>
              <Text mt="3" color="blackAlpha.700">
                20 Jan, 2024 • 11 mins read
              </Text>
              <Heading mt="3" fontSize="xl">
                High Life: Living in a New York Penthouse
              </Heading>
              <Text mt="3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
                unde deleniti accusamus nam atque, quas eaque alias harum
                consequuntur...
              </Text>
            </Stack>
          </CardBody>
          <CardFooter>
            <Avatar
              size="sm"
              name="John Doe"
              src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              objectFit="cover"
            />
            <Text ml="3" mt="1" fontSize="sm">
              John Doe
            </Text>
          </CardFooter>
        </Card>
      </Stack>
      <Divider mt="10" />
    </Box>
  );
}
