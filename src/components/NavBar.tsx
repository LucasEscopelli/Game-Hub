import { Button, HStack, Image, Text, useColorMode } from "@chakra-ui/react";
import logo from '../assets/logo.webp'

function NavBar() {
    const { colorMode, toggleColorMode } = useColorMode()

  return (
    <HStack>
      <Image src={logo} boxSize='60px'/>
      <Text>NavBar</Text>
      <Button onClick={toggleColorMode}>
        Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
      </Button>
    </HStack>
  );
}

export default NavBar;
