import React, { useState } from "react";
import {
  Box,
  Center,
  HStack,
  Icon,
  IconButton,
  StatusBar,
  Text,
  Image,
  Hidden,
  Button,
  Modal,
  FormControl,
  Input,
  VStack,
} from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import CenterNavButton from "./center-nav-button";
import Landing from "../LandingPage/Landing";

function AppBar() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <StatusBar backgroundColor="#2ec697" barStyle="light-content" />
      <Box safeAreaTop bg="#6200ee" />
      <HStack
        bg="#ffffff"
        justifyContent="space-between"
        // width={{ base: 475, md: 1440 }}
        width={"100%"}
        alignItems="center"
        height={70}
        w={"100%"}
        // overflowY={"hidden"}
      >
        <HStack alignItems="center" paddingLeft={50}>
          <Hidden till={"md"}>
            <Image
              source={require("../Resources/logo.svg")}
              alt="Logo"
              size={200}
              resizeMode={"contain"}
            />
          </Hidden>
          <Hidden from={"md"}>
            <Image
              source={require("../Resources/logo.png")}
              alt="Android Logo"
              size={150}
              resizeMode={"contain"}
            />
          </Hidden>
        </HStack>

        <HStack m={15}>
          <Hidden till={"md"}>
            <CenterNavButton />
          </Hidden>
        </HStack>

        <HStack>
          <Hidden from={"md"}>
            <IconButton
              icon={
                <Icon
                  as={MaterialIcons}
                  name={showModal === false ? "menu" : "close"}
                  size="lg"
                  color="gray.400"
                />
              }
              onPress={() => setShowModal(true)}
              colorScheme="coolGray"
            />
          </Hidden>

          <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
            <Modal.Content
              bg="white"
              alignItems={"center"}
              maxWidth="100%"
              marginTop={79}
              marginBottom="auto"
            >
              <Modal.Body height={250}>
                <CenterNavButton />
              </Modal.Body>
            </Modal.Content>
          </Modal>

          <Hidden till={"md"}>
            <Button
              colorScheme="primary"
              onPress={() => {
                console.log("hello");
              }}
              margin={100}
              rounded={"full"}
            >
              Request Invite
            </Button>
          </Hidden>
        </HStack>
      </HStack>
    </>
  );
}

export default function Headers() {
  return (
    <VStack alignContent={"center"} space={0} alignItems="center">
      <AppBar />
      <Landing />
    </VStack>
  );
}
