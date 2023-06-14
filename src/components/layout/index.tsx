import React from 'react';
import { Box, StackProps, VStack, Flex, BoxProps } from '@chakra-ui/react'
import Header from '../header';
import Footer from '../footer';

type LayoutProps = {
  children: React.ReactNode;
  containerStyle?: BoxProps;
} & StackProps

const Layout = (props: LayoutProps)=> {
  const {children, containerStyle, ...restProps} = props
  return (
    <VStack className='layout'
      margin='0 auto'
      minH='100%' {...restProps} spacing='0'
    >
      <Header />
      <Box width='100%' margin='0 auto'>
        {children}
      </Box>
      <Footer />
    </VStack>
  );
}

export default Layout;
