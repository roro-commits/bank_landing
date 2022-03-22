import {
  Box,
  Button,
  Center,
  Stack,
  VStack,
  Text,
  ZStack,
  Image,
  Hidden,
  HStack,
} from "native-base";
import React from "react";

export function CardSectTwo() {
  return (
    <VStack
      space={4}
      // width={{ base: 475, md: 1440 }}
      width={"100%"}
      bg={"white"}
    >
      <Hidden till={"md"}>
        <VStack
          space={2}
          marginLeft={{ md: 200 }}
          marginTop={10}
          // justifyContent={{ base: "center", sm: "center" }}
          // alignItems={{ base: "center", sm: "center" }}
        >
          <Text fontSize={"4xl"} fontWeight={400}>
            latest Article
          </Text>
        </VStack>
      </Hidden>
      <Hidden from={"md"}>
        <VStack
          space={4}
          // marginLeft={{ md: 200 }}
          marginTop={10}
          justifyContent={{ base: "center", sm: "center" }}
          alignItems={{ base: "center", sm: "center" }}
        >
          <Center>
            <Text
              fontSize={"4xl"}
              fontWeight={400}
              lineHeight={"xs"}
              textAlign={"center"}
            >
              latest Article
            </Text>
          </Center>
        </VStack>
      </Hidden>

      <Hidden till={"md"}>
        <Stack
          marginTop={10}
          justifyContent={"space-between"}
          direction={{ md: "row", sm: "column" }}
          marginLeft={{ md: 200 }}
          marginRight={{ md: 150 }}
        >
          <VStack space={4}>
            <Image
              source={require("../Resources/image-currency.jpg")}
              alt="Alternate Text"
              size={300}
              resizeMode="contain"
            />
            <Text fontSize={"2xl"} fontWeight={400}>
              Online Banking
            </Text>
            <Text textAlign={"left"}>
              our modern web and mobile application allow{"\n"}you to keep track
              of your finances wherever you{"\n"}are in the world.
            </Text>
          </VStack>
          <VStack space={4}>
            <Image
              source={require("../Resources/image-restaurant.jpg")}
              alt="Alternate Text"
              size={300}
              resizeMode="contain"
            />
            <Text fontSize={"2xl"} fontWeight={400}>
              Online Banking
            </Text>
            <Text textAlign={"left"}>
              our modern web and mobile application allow{"\n"}you to keep track
              of your finances wherever you{"\n"}are in the world.
            </Text>
          </VStack>
          <VStack space={4}>
            <Image
              source={require("../Resources/image-plane.jpg")}
              alt="Alternate Text"
              size={300}
              resizeMode="contain"
            />
            <Text fontSize={"2xl"} fontWeight={400}>
              Online Banking
            </Text>
            <Text textAlign={"left"}>
              our modern web and mobile application allow{"\n"}you to keep track
              of your finances wherever you{"\n"}are in the world.
            </Text>
          </VStack>
          <VStack space={4}>
            <Image
              source={require("../Resources/image-confetti.jpg")}
              alt="Alternate Text"
              size={300}
              resizeMode="contain"
            />
            <Text fontSize={"2xl"} fontWeight={400}>
              Online Banking
            </Text>
            <Text textAlign={"left"}>
              our modern web and mobile application allow{"\n"}you to keep track
              of your finances wherever you{"\n"}are in the world.
            </Text>
          </VStack>
        </Stack>
      </Hidden>
      <Hidden from={"md"}>
        <Stack
          marginTop={10}
          justifyContent={"space-between"}
          direction={{ md: "row", sm: "column" }}
          marginLeft={{ md: 200 }}
          marginRight={{ md: 150 }}
          space={10}
        >
          <VStack
            space={4}
            justifyContent={{ base: "center", sm: "center" }}
            alignItems={{ base: "center", sm: "center" }}
          >
            <Image
              source={require("../Resources/image-currency.jpg")}
              alt="Alternate Text"
              size={300}
              resizeMode="contain"
            />
            <Text fontSize={"2xl"} fontWeight={400}>
              Online Banking
            </Text>
            <Text textAlign={"left"}>
              our modern web and mobile application allow{"\n"}you to keep track
              of your finances wherever you{"\n"}are in the world.
            </Text>
          </VStack>
          <VStack
            space={4}
            justifyContent={{ base: "center", sm: "center" }}
            alignItems={{ base: "center", sm: "center" }}
          >
            <Image
              source={require("../Resources/image-restaurant.jpg")}
              alt="Alternate Text"
              size={300}
              resizeMode="contain"
            />
            <Text fontSize={"2xl"} fontWeight={400}>
              Online Banking
            </Text>
            <Text textAlign={"left"}>
              our modern web and mobile application allow{"\n"}you to keep track
              of your finances wherever you{"\n"}are in the world.
            </Text>
          </VStack>
          <VStack
            space={4}
            justifyContent={{ base: "center", sm: "center" }}
            alignItems={{ base: "center", sm: "center" }}
          >
            <Image
              source={require("../Resources/image-plane.jpg")}
              alt="Alternate Text"
              size={300}
              resizeMode="contain"
            />
            <Text fontSize={"2xl"} fontWeight={400}>
              Online Banking
            </Text>
            <Text textAlign={"left"}>
              our modern web and mobile application allow{"\n"}you to keep track
              of your finances wherever you{"\n"}are in the world.
            </Text>
          </VStack>
          <VStack
            space={4}
            justifyContent={{ base: "center", sm: "center" }}
            alignItems={{ base: "center", sm: "center" }}
          >
            <Image
              source={require("../Resources/image-confetti.jpg")}
              alt="Alternate Text"
              size={300}
              resizeMode="contain"
            />
            <Text fontSize={"2xl"} fontWeight={400}>
              Online Banking
            </Text>
            <Text textAlign={"left"}>
              our modern web and mobile application allow{"\n"}you to keep track
              of your finances wherever you{"\n"}are in the world.
            </Text>
          </VStack>
        </Stack>
      </Hidden>
    </VStack>
  );
}
