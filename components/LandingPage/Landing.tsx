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

function SectioOne() {
  return (
    <>
      <Stack
        justifyContent={"center"}
        alignItems="center"
        direction={{ md: "row", sm: "column" }}
        bg="white"
        space="0"
        width={{ base: 475, md: 1440 }}
      >
        <Hidden till={"md"}>
          <Box
            alignItems="center"
            justifyContent={"left"}
            width={{ md: "50%", sm: "100%", base: "100%" }}
            bg="white"
            paddingLeft="64"
          >
            <VStack
              paddingLeft={50}
              justifyContent={"center"}
              alignItems="center"
              space={4}
            >
              <Text fontSize={25} fontWeight={400} fontFamily="mono">
                Next Generation Banking
                {"\n"} digital banking
              </Text>
              <Text alignItems="center" fontFamily="mono" fontSize={12}>
                Take your finicial life online. Your Easybank account {"\n"}{" "}
                will be a one stop-shop for spending, saving, {"\n"} budgeting,
                investing, and much more.
              </Text>
            </VStack>
            <Button
              colorScheme="primary"
              onPress={() => {
                console.log("hello");
              }}
              rounded={"full"}
              width={100}
              height={30}
              marginRight={120}
              marginTop={4}
            >
              Request Invite
            </Button>
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
              <Text fontSize={20} fontWeight={400} fontFamily="mono">
                Next Generation Banking
                {"\n"} digital banking
              </Text>
              <Text alignItems="center" fontFamily="mono" fontSize={10}>
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

export function SectioTwo()
 {

    <Stack  direction="column" space="3">
        <Center bg="primary.400" size="16"></Center>
        <Center bg="secondary.400" size="16"></Center>
        <Center bg="emerald.400" size="16"></Center>
    </Stack>
    



 }

export default function () {
  return <SectioOne />;
}
