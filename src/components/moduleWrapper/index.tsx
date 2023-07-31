import { Box, BoxProps, Card, Text, CardProps } from '@chakra-ui/react';
import React from 'react';

export type ModuleWrapperProps = {
  children: React.ReactNode;
} & CardProps

function ModuleWrapper({children, ...props}: ModuleWrapperProps) {
  return (
    <Box width='100%'>
      <Box  bg='#f8f8f8' {...props} >
        {/* <Text fontSize='36px' fontWeight='600' color='gray.600'
          width='100%' textAlign='center' mb='30px'
          >{title}
        </Text> */}
        {children}
      </Box>
    </Box>
  );
}

export default ModuleWrapper;
