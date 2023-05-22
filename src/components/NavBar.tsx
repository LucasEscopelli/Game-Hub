import { Button, HStack, Image, Text, useColorMode } from "@chakra-ui/react";
import logo from '../assets/logo.webp'
import ColorModeSwitch from "./ColorModeSwitch";

function NavBar() {
    const { colorMode, toggleColorMode } = useColorMode()

  return (
    <HStack justifyContent={'space-between'} padding='10px'>
      <Image src={logo} boxSize='60px'/>
      <ColorModeSwitch></ColorModeSwitch>
    </HStack>
  );
}

export default NavBar;
