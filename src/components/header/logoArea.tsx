import { HStack, Text } from '@chakra-ui/react';
import React from 'react';
import Image from 'next/image';

function LogoArea() {
  return (
    <HStack justifyContent='space-between' width='100%' px='120px' background='white'>
      <HStack background='white'>
        <Image src="/logo.png"    style={{
            objectFit: 'cover', // cover, contain, none
          }} height={120} width={120} alt='logo'/>
        <Text fontSize='32px' color='#0029BF' fontFamily='monospace'>
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
