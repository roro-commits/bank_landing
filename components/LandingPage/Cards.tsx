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



export function CardSectOne() {
  return (
    <VStack
      space={4}
      // width={{ base: 475, md: 1440 }}
      width={"100%"}
      bg={"#f4f5f7"}
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
            Why Chooose Easy Banking
          </Text>
          <Text>
            We Leverage Open Banking to turn your bank account into your
            financial hub. {"\n"}
            Control your finance like never before
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
            <Text fontSize={"4xl"} fontWeight={400} lineHeight={'xs'} textAlign={"center"}>
              Why Chooose{"\n"}Easybank ?
            </Text>
            <Text textAlign={"center"} fontSize={"lg"}>
              We Leverage Open Banking to turn your bank {"\n"}account into your
              financial hub. Control your {"\n"}finance like never before
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
              source={require("../Resources/icon-online.svg")}
              alt="Alternate Text"
              size="sm"
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
              source={require("../Resources/icon-budgeting.svg")}
              alt="Alternate Text"
              size="sm"
              resizeMode="contain"
            />
            <Text fontSize={"2xl"} fontWeight={400}>
              Simple Budgeting
            </Text>
            <Text>
              See excatly where your money goes each month.{"\n"}Receive
              notification when you're close to your {"\n"}hitting limit.
            </Text>
          </VStack>
          <VStack space={4}>
            <Image
              source={require("../Resources/icon-onboarding.svg")}
              alt="Alternate Text"
              size="sm"
              resizeMode="contain"
            />
            <Text fontSize={"2xl"} fontWeight={400}>
              Fast Onboarding
            </Text>
            <Text>
              We don't do branches. Open your account in {"\n"}minutes online
              and start taking control of your{"\n"}finance right away{" "}
            </Text>
          </VStack>
          <VStack space={4}>
            <Image
              source={require("../Resources/icon-api.svg")}
              alt="Alternate Text"
              size="sm"
              resizeMode="contain"
            />
            <Text fontSize={"2xl"} fontWeight={400}>
              Open API
            </Text>
            <Text>
              manage your savings, investments, pension, and{"\n"}much more from
              one account.Tracking your{"\n"}money has never been easier
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
              source={require("../Resources/icon-online.svg")}
              alt="Alternate Text"
              size="sm"
              resizeMode="contain"
            />
            <Text fontSize={"2xl"} fontWeight={400}>
              Online Banking
            </Text>
            <Text textAlign={"center"}>
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
              source={require("../Resources/icon-budgeting.svg")}
              alt="Alternate Text"
              size="sm"
              resizeMode="contain"
            />
            <Text fontSize={"2xl"} fontWeight={400}>
              Simple Budgeting
            </Text>
            <Text textAlign={"center"}>
              See excatly where your money goes each month.{"\n"}Receive
              notification when you're close to your {"\n"} hitting limit.
            </Text>
          </VStack>
          <VStack
            space={4}
            justifyContent={{ base: "center", sm: "center" }}
            alignItems={{ base: "center", sm: "center" }}
          >
            <Image
              source={require("../Resources/icon-onboarding.svg")}
              alt="Alternate Text"
              size="sm"
              resizeMode="contain"
            />
            <Text fontSize={"2xl"} fontWeight={400}>
              Fast Onboarding
            </Text>
            <Text textAlign={"center"}>
              We don't do branches. Open your account in {"\n"}minutes online
              and start taking control of your{"\n"}finance right away{" "}
            </Text>
          </VStack>
          <VStack
            space={4}
            justifyContent={{ base: "center", sm: "center" }}
            alignItems={{ base: "center", sm: "center" }}
          >
            <Image
              source={require("../Resources/icon-api.svg")}
              alt="Alternate Text"
              size="sm"
              resizeMode="contain"
            />
            <Text fontSize={"2xl"} fontWeight={400}>
              Open API
            </Text>
            <Text textAlign={"center"}>
              manage your savings, investments, pension, and{"\n"}much more from
              one account.Tracking your{"\n"}money has never been easier
            </Text>
          </VStack>
        </Stack>
      </Hidden>
    </VStack>
  );
}
