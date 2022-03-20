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

interface ImageProps {
  icon?: any | 3;
  description?: String;
  title?: String;
}

export function CardSectOne(props: ImageProps) {
  return (
    <VStack
      space={4}
      // width={{ base: 475, md: 1440 }}
      width={"100%"}
      bg={"gray.100"}
      justifyContent={"left"}
    >
      <VStack space={2} marginLeft={{md:200}}>
        <Text fontSize={"4xl"} fontWeight={400}>
          Why Chooose Easy Banking
        </Text>
        <Text>
          We Leverage Open Banking to turn your bank account into your financial
          hub. {"\n"}
          Control your finance like never before
        </Text>
      </VStack>
      <Stack
        marginTop={10}
        justifyContent={"space-between"}
        direction={{ md: "row", sm: "column" }}
        marginLeft={{md:200}}
        marginRight={{md:150}}

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
          <Text>
            our modern web and mobile {"\n"}application allow you to keep
            {"\n"}track of your finances wherever you {"\n"}are in the world{" "}
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
            {props.title}
          </Text>
          <Text>{props.description}</Text>
        </VStack>
        <VStack space={4}>
          <Image
            source={require("../Resources/icon-onboarding.svg")}
            alt="Alternate Text"
            size="sm"
            resizeMode="contain"
          />
          <Text fontSize={"2xl"} fontWeight={400}>
            {props.title}
          </Text>
          <Text>{props.description}</Text>
        </VStack>
        <VStack space={4}>
          <Image
            source={require("../Resources/icon-api.svg")}
            alt="Alternate Text"
            size="sm"
            resizeMode="contain"
          />
          <Text fontSize={"2xl"} fontWeight={400}>
            {props.title}
          </Text>
          <Text>{props.description}</Text>
        </VStack>
      </Stack>
    </VStack>
  );
}
