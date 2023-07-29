import React from 'react';
import {
  Box,
  Wrap,
  Flex,
  WrapItem,
  VStack,
  Card,
  Text,
  Center,
  Image,
  Divider,
  HStack,
} from '@chakra-ui/react'

const ProcessItem = [{
  icon: '/logo.png',
  title: '1-5月',
  description: '',
}, {
  icon: '/logo.png',
  title: '6-8月',
  description: '',
}, {
  icon: '/logo.png',
  title: '10月前',
  description: '',
}, {
  icon: '/logo.png',
  title: '9-11月',
  description: '',
}, {
  icon: '/logo.png',
  title: '次年1-3月',
  description: '',
}, {
  icon: '/logo.png',
  title: '次年4-7月',
  description: '',
}];

function ApplyProblems() {
  return (
    <VStack>
      <Box color='#0D0E67' fontSize='20px' fontWeight='600' marginY='20px'>美国留学各阶段申请难点 逐一攻克</Box>
      <Flex width='100%' justifyContent='center' marginBottom={4}>
        <Wrap align='center' justify='center' width='100%'>
          {
            ProcessItem.map((item, processIndex) => 
              <WrapItem key={item.title}>
                <HStack>
                  <VStack borderRadius='150px' alignItems='center' bg='#fff' paddingX='20px' paddingY='50px'>
                    <Image src="/logo.png" objectFit='cover' height='36px' alt='icon'/>
                    <Text fontSize='24px' fontWeight='600' color='#00B287'>{item.title}</Text>
                    <Divider />
                    <Box>{item.description}</Box>
                  </VStack>
                  {processIndex !== ProcessItem.length - 1 && <Image src="/logo.png" objectFit='cover' height='30px' alt='icon'/>}
                </HStack>
              </WrapItem>
              )
          }
        </Wrap>
      </Flex>
      <Center>
        <Box as='button' bg='transparent' borderRadius='4px' border='1px solid #FF8A00' color='#FF8A00' px={4} h={8}>了解详细服务流程</Box>
      </Center>
    </VStack>
  );
}

export default ApplyProblems;
