import React from "react";
import { Box, Heading, Flex, Text, Button } from "@chakra-ui/core";
import { useAuth0 } from "../react-auth0-spa";
import ColorModeToggle from '.././ColorModeToggle.js';
import {
  Link
} from "react-router-dom";

const MenuItems = props => (
  <Text mt={{ base: 4, md: 0 }} mr={6} display="block">
    <Link to={props.link}>{props.text}</Link>
  </Text>
);

const NavBar = props => {
  const [show, setShow] = React.useState(false);
  const handleToggle = () => setShow(!show);
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1.5rem"
      {...props}
    >
      <Flex align="center" mr={5}>
        <Heading as="h1" size="lg">
          FIGURE OUT NAME
        </Heading>
      </Flex>

      <Box display={{ sm: "block", md: "none" }} onClick={handleToggle}>
        <svg
          fill="white"
          width="12px"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </Box>

      <Box
        display={{ sm: show ? "block" : "none", md: "flex" }}
        width={{ sm: "full", md: "auto" }}
        alignItems="center"
        flexGrow={1}
      >
        <MenuItems link="/business" text="Businesses"></MenuItems>
        <MenuItems link="/business" text="Locations">Locations</MenuItems>
      </Box>

      <Box
        display={{ sm: show ? "block" : "none", md: "block" }}
        mt={{ base: 4, md: 0 }}
      >
        {!isAuthenticated && (
          <Button variant="solid" mr={6} onClick={() => loginWithRedirect({})}>Log in</Button>
        )}

        {isAuthenticated && <Button variant="solid" mr={6} onClick={() => logout()}>Log out</Button>}
        <ColorModeToggle>
      </ColorModeToggle>
      </Box>
     
    </Flex>
  );
};

export default NavBar;