import {
  VStack,
  Select,
  Box,
  Image,
  Text,
  Button,
} from '@chakra-ui/react';
import React from 'react';


function Overview() {
  return (
    <VStack
      height='500px'
      width='100%'
      backgroundImage='/logo.png'
      backgroundPosition='center'
      backgroundSize='cover'
      alignItems='unset'
    >
      <Box display='flex' alignItems='center' marginBottom='48px'>
        <Image src='/logo.png' width='60px' height='50px' marginRight='10px' alt='coutry flag' />
        <Select variant='unstyled' width='200px' defaultValue='american'>
          <option value='american'>美国留学频道</option>
          <option value='england'>英国留学频道</option>
          <option value='hongkong'>香港留学频道</option>
        </Select>
      </Box>
      <Box fontWeight='600' fontSize='36px' marginBottom='48px'>
        <Text>全面解析</Text>
        <Text>开启美国留学之旅</Text>
      </Box>
      <Box as='button' bg='#D40014' color='#fff' px='4px' h='8' w='200px'>立即咨询</Box>
    </VStack>
  )
}

export default Overview;
