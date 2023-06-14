import { Image, Flex, Box, VStack} from '@chakra-ui/react';
import Menu from '../menu';
import LogoArea from './logoArea';

function Header() {
  return (
    <Flex width='100%' justifyContent='center'>
      <VStack maxW='1440px' width='100%' justifyContent='center'>
        <LogoArea />
        <Menu />
      </VStack>
    </Flex>
  );
}

export default Header;
