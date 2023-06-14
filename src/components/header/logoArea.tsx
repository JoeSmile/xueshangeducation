import { HStack, Image, Text } from '@chakra-ui/react';
import React from 'react';

function LogoArea() {
  return (
    <HStack justifyContent='space-between' width='100%'>
      <HStack  px='120px'>
        <Image src="logo.png" objectFit='cover' height='120px'/>
        <Text fontSize='24px' color='blue.500'>
              出国教育的灯塔 回国就业的桥梁
        </Text>
      </HStack>
    </HStack>
  );
}

export default LogoArea;
