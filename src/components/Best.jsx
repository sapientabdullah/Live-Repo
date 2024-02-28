import React from "react";
import {
  Grid,
  GridItem,
  Box,
  Heading,
  HStack,
  Link,
  IconButton,
  Highlight,
} from "@chakra-ui/react";

import { ArrowForwardIcon } from "@chakra-ui/icons";
import { CgArrowTopRight } from "react-icons/cg";

export default function Best() {
  return (
    <Box m="7">
      <HStack mb="10" mt="10">
        <Heading as="h2" fontWeight="normal" fontSize="5xl" fontStyle="italic">
          Week's Top Picks
        </Heading>
        <Link fontStyle="italic" as="sub" mt="6">
          See all posts
          <ArrowForwardIcon />
        </Link>
      </HStack>
      <Grid
        as="div"
        h="lg"
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(5, 1fr)"
        gap={4}
        mt="3"
      >
        <GridItem
          rowSpan={3}
          colSpan={3}
          bgImage="url('https://images.unsplash.com/photo-1607035047920-b5092c72fdc1?q=80&w=2756&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
          bgSize="cover"
          bgPosition="center"
          borderRadius="lg"
          position="relative"
        >
          <Heading fontWeight="normal" fontSize="lg" my="7" mx="6">
            <Highlight
              query="Discovering Greece"
              styles={{
                px: "3",
                py: "1.5",
                rounded: "full",
                bgGradient: "linear(to-r, white, gray.100)",
              }}
            >
              Discovering Greece
            </Highlight>
          </Heading>
          <IconButton
            isRound={true}
            variant="solid"
            colorScheme="gray"
            aria-label="Link to post"
            fontSize="20px"
            icon={<CgArrowTopRight />}
            position="absolute"
            left="760px"
            top="450px"
            sx={{
              transition: "transform 0.3s ease",
              ":hover": {
                transform: "scale(1.2)",
              },
            }}
          />
        </GridItem>
        <GridItem
          rowSpan={3}
          colSpan={2}
          bgImage="url('https://images.unsplash.com/photo-1518556413634-af7db209865c?q=80&w=2624&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
          bgSize="cover"
          bgPosition="center"
          borderRadius="lg"
          position="relative"
        >
          <Heading fontWeight="normal" fontSize="lg" my="7" mx="6">
            <Highlight
              query="China's Enchanting Markets"
              styles={{
                px: "3",
                py: "1.5",
                rounded: "full",
                bgGradient: "linear(to-r, white, gray.100)",
              }}
            >
              China's Enchanting Markets
            </Highlight>
          </Heading>
          <IconButton
            isRound={true}
            variant="solid"
            colorScheme="gray"
            aria-label="Link to post"
            fontSize="20px"
            icon={<CgArrowTopRight />}
            position="absolute"
            left="475px"
            top="450px"
            sx={{
              transition: "transform 0.3s ease",
              ":hover": {
                transform: "scale(1.2)",
              },
            }}
          />
        </GridItem>
      </Grid>
    </Box>
  );
}
