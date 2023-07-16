import {
  VStack,
  Text,
  Box,
} from '@chakra-ui/react';
import React from 'react';


function Overview() {
  return (
    <VStack
      height='500px'
      width='100%'
      position='relative'
    >
      <Box
        backgroundImage='/logo.png'
        height='100%'
        width='100%'
        position='absolute'
        backgroundPosition='center'
        backgroundSize='cover'
        alignItems='center'
        justifyContent='center'
      />
      <Box
        position='absolute'
        width='100%'
        height='100%'
        backgroundColor='rgba(256, 256, 256, 0.5)'
        top='0'
        left='0'
        zIndex='1'
      />
      <Box
        zIndex='2'
        width='100%'
        height='100%'
      >
        <Box
          backgroundImage='/logo.png'
          height='60%'
          width='100%'
          backgroundPosition='center'
        backgroundSize='cover'
        alignItems='center'
        justifyContent='center'
        />
        <Text>中外合作办学通常是指外国教育机构同中国教育机构在中国境内合作举办的以中国公民为主要招生对象的教育机构，目前所称的中外合作办学一般是指国家鼓励的在高等教育，职业教育领域的中外合作办学。</Text>
      </Box>
    </VStack>
  )
}

export default Overview;
