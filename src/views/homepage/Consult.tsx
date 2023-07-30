import {
  VStack,
  HStack,
  Box,
  InputGroup,
  InputLeftElement,
  Input,
} from '@chakra-ui/react';
import { PhoneIcon, SunIcon, CalendarIcon } from '@chakra-ui/icons'
import React from 'react';


function Consult() {
  return (
    <VStack paddingBottom='30px'>
      <Box color='#0D0E67' fontSize='20px' fontWeight='600' marginY='20px'>专业留学顾问限时1V1咨询</Box>
      <HStack>
        <InputGroup>
          <InputLeftElement pointerEvents='none'>
            <SunIcon color='#0D0E67' />
          </InputLeftElement>
          <Input type='tel' bg='#fff' placeholder='姓名' />
        </InputGroup>
        <InputGroup>
          <InputLeftElement pointerEvents='none'>
            <CalendarIcon color='#0D0E67' />
          </InputLeftElement>
          <Input type='tel' bg='#fff' placeholder='国家' />
        </InputGroup>
        <InputGroup>
          <InputLeftElement pointerEvents='none'>
            <PhoneIcon color='#0D0E67' />
          </InputLeftElement>
          <Input type='tel' bg='#fff' placeholder='手机号' />
        </InputGroup>
        <Box as='button' bg='#0D0E67' borderRadius='5px' color='#fff' px='4px' h='8' width='400px'>立即获得</Box>
      </HStack>
    </VStack>
  )
}

export default Consult;
