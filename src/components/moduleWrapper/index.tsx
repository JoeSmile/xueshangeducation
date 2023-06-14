import { Box, BoxProps, Card, Text, CardProps } from '@chakra-ui/react';
import React from 'react';

export type ModuleWrapperProps = {
  title: string,
  children: React.ReactNode;
} & CardProps

function ModuleWrapper({title, children, ...props}: ModuleWrapperProps) {
  return (
    <Box width='100%' border='1px solid' p='20px'>
      <Box {...props}>
        <Text fontSize='24px' fontWeight='600'
          width='100%' textAlign='center' mb='30px'
          >{title}
        </Text>
        {children}
      </Box>
    </Box>
  );
}

export default ModuleWrapper;
