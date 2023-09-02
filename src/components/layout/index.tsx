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
      background='#F5F5F5'
      minH='100%' {...restProps} 
      spacing='0'
      minHeight='100vh'
    >
      <Header />
      <Box width='100%' margin='0 auto' flex='1' height='100%'>
        {children}
      </Box>
      <Footer />
    </VStack>
  );
}

export default Layout;
