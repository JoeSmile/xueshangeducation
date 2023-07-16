import React from 'react';
import {
  VStack,
  HStack,
  Wrap,
  WrapItem,
  Text,
  Box,
  Card,
  Divider,
} from '@chakra-ui/react';


const modeList = [{
  type: '1+3/4',
  inner: '1',
  outer: '3-4',
  discription: [
    '适合一本线上学生',
    '冲刺世界前50名学校',
  ]
}, {
  type: '1+3/4',
  inner: '1',
  outer: '3-4',
  discription: [
    '适合一本线上学生',
    '冲刺世界前50名学校',
  ]
}, {
  type: '1+3/4',
  inner: '1',
  outer: '3-4',
  discription: [
    '适合一本线上学生',
    '冲刺世界前50名学校',
  ]
}, {
  type: '1+3/4',
  inner: '1',
  outer: '3-4',
  discription: [
    '适合一本线上学生',
    '冲刺世界前50名学校',
  ]
}]

function AbroadMode() {
  return (
    <VStack>
      <Box
        color='#FF5B0B'
        fontSize='40px'
        fontWeight='600'
      >
        留学模式
      </Box>
      <Wrap
        width='1100px'
        justifyContent='center'
      >
        {
          modeList.map((item, index) => 
            <WrapItem
              key={index}
              display='flex'
              flexDirection='column'
              // alignItems='center'
              height='200px'
              width='48%'
            >
              <Box margin='0 auto'>
                <Box
                  as='span'
                  bg='#FF5B0B'
                  color='#fff'
                  fontSize='20px'
                  fontWeight='600'
                  display='inline-block'
                  padding='2px 15px'
                  borderTopRadius='5px'
                >
                  {item.type}
                </Box>
                <Box
                    border='2px solid #FF5B0B'
                    padding='20px'
                    borderRadius='10px'
                    borderTopLeftRadius='0'
                    boxShadow='12px 12px 0 0 rgba(0,0,0,0.1)'
                >
                  <VStack
                    alignItems='unset'
                  >
                    <Box>
                      <Box
                        as='span'
                        color='#18006C'
                        fontWeight='600'
                        marginRight='20px'
                      >
                        {`国内${item.inner}年+国外${item.outer}年`}
                      </Box>
                      <Box
                        as='span'
                        color='#FF5B0B'
                      >
                        获得国外学士学位
                      </Box>
                    </Box>
                    <Divider bg='#FF5B0B' variant='dashed' />
                    {
                      item.discription.map((i, discriptionIndex) => (
                        <Box fontSize='12px' key={discriptionIndex} marginBottom='5px' display='flex' alignItems='center' color='#18006C'>
                        <Box bg='#18006C' h='5px' w='5px' display='inline-block' marginRight='5px' borderRadius='50%' />
                          {i}
                        </Box>
                      ))
                    }
                  </VStack>
                </Box>
              </Box>
            </WrapItem>
          )
        }
      </Wrap>
      <Box as='button' bg='#FF8A00' borderRadius='50px' color='#fff' px='4px' h='8' w='200px'>留学费用详解</Box>
    </VStack>
  )
}

export default AbroadMode;
