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
} from "native-base";
import React from "react";
import { CardSectOne } from "./Cards";
function SectioOne() {
  return (
    <>
      <Stack
        justifyContent={"space-around"}
        alignItems="center"
        direction={{ md: "row", sm: "column" }}
        bg="white"
        space="0"
        // width={{ base: 475, md: 1440 }}
        width={"100%"}
      >
        <Hidden till={"md"}>
          <Box
            alignItems="right"
            justifyContent={"left"}
            width={{ md: "50%", sm: "100%", base: "100%" }}
            bg="white"
            // paddingLeft="64"
          >
            <VStack
              // paddingLeft={50}
              justifyContent={"left"}
              // alignItems="center"
              // marginRight={50}
              marginLeft={200}
              space={4}
            >
              <Text fontSize={"5xl"} fontWeight={400} fontFamily="mono">
                Next Generation Banking
                {"\n"} digital banking
              </Text>
              <Text alignItems="center" fontFamily="mono" fontSize={"lg"}>
                Take your finicial life online. Your Easybank account {"\n"}{" "}
                will be a one stop-shop for spending, saving, {"\n"} budgeting,
                investing, and much more.
              </Text>
              <Button
                colorScheme="primary"
                onPress={() => {
                  console.log("hello");
                }}
                rounded={"full"}
                width={150}
                height={50}
                marginRight={120}
                marginTop={4}
              >
                Request Invite
              </Button>
            </VStack>
          </Box>
        </Hidden>
        <Box
          overflow={"hidden"}
          width={{ md: "50%", sm: "100%", base: "100%" }}
          bg="white"
          p="12"
          height={400}
        >
          <ZStack
            width={"100%"}
            justifyContent={"center"}
            alignItems="center"
            height={300}
          >
            <Hidden till={"md"}>
              <Image
                source={require("../Resources/bg-intro-desktop.svg")}
                alt="Alternate Text"
                size={1000}
                resizeMode="contain"
              />
            </Hidden>
            <Hidden from={"md"}>
              <Image
                source={require("../Resources/bg-intro-mobile.png")}
                alt="Alternate Text"
                size={1000}
                resizeMode="contain"
              />
            </Hidden>

            <Image
              source={require("../Resources/image-mockups.png")}
              alt="Alternate Text"
              size={{ md: 600, base: 400 }}
              resizeMode="contain"
            />
          </ZStack>
        </Box>

        <Hidden from={"md"}>
          <Box
            width={{ md: "50%", sm: "100%", base: "100%" }}
            bg="gray.100"
            p="1"
          >
            <VStack justifyContent={"center"} alignItems="center" space={4}>
              <Text fontSize={"4xl"} fontWeight={400} fontFamily="mono">
                Next Generation Banking
                {"\n"} digital banking
              </Text>
              <Text alignItems="center" fontFamily="mono" fontSize={"lg"}>
                Take your finicial life online. Your Easybank account {"\n"}{" "}
                will be a one stop-shop for spending, saving, {"\n"} budgeting,
                investing, and much more.
              </Text>
              <Button
                colorScheme="primary"
                onPress={() => {
                  console.log("hello");
                }}
                rounded={"full"}
              >
                Request Invite
              </Button>
            </VStack>
          </Box>
        </Hidden>
      </Stack>
    </>
  );
}

function SectioTwo() {
  return (
    <Stack
      // width={{ base: 475, md: 1440 }}
      marginTop={10}
    >
      <Center>
        <CardSectOne />
      </Center>
    </Stack>
  );
}

export default function () {
  return (
    <VStack width={"100%"}>
      <SectioOne />
      <SectioTwo />
    </VStack>
  );
}
