import { HStack, Image, Text } from '@chakra-ui/react';
import React from 'react';

function LogoArea() {
  return (
    <HStack justifyContent='space-between' width='100%' px='120px' background='white'>
      <HStack background='white'>
        <Image src="/logo.png" objectFit='cover' height='120px' alt='logo'/>
        <Text fontSize='48px' color='#0029BF' fontFamily='monospace'>
          出国教育的灯塔 回国就业的桥梁
        </Text>
      </HStack>
      <Text>
      服务热线: 010-83008808
      </Text>
    </HStack>
  );
}

export default LogoArea;
