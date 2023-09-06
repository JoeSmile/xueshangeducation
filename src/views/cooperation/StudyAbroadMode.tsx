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
  type: '4+0',
  inner: '国内4年',
  outer: '获国外学士学位',
  discription: [
    '无需出国',
    '享受国内外优质教育资源',
  ]
}, {
  type: '2+0',
  inner: '国内2年',
  outer: '获国外硕士学位',
  discription: [
    '无需出国',
    '免统考',
    '享国内外优质教育资源',
  ]
}, {
  type: '3+1/2',
  inner: '国内3年+国外1-2年',
  outer: '获国外学士/硕士',
  discription: [
    '国内时间长花费少',
    '基础相对薄弱学生',
  ]
}, {
  type: '2+2/3',
  inner: '国内2年+国外2-3年',
  outer: '获国外学士学位 ',
  discription: [
    '转学分直录世界前200名校',
  ]
}]

function AbroadMode() {
  return (
    <VStack padding='20px'>
      <Box
        color='#0D0E67'
        fontSize='40px'
        fontWeight='600'
      >
        留学模式
      </Box>
      <Wrap
        width='1100px'
        justify='space-between'
      >
        {
          modeList.map((item, index) => 
            <WrapItem
              key={index}
              display='flex'
              flexDirection='column'
              // alignItems='center'
              height='220px'
              width='530px'
              marginBottom='30px'
            >
              <VStack margin='0 auto' height='100%' width='100%' gap='0'>
                <Box
                  alignSelf='baseline'
                  as='span'
                  bg='#0D0E67'
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
                  flex='1'
                  width='100%'
                  border='2px solid #0D0E67'
                  padding='20px'
                  borderRadius='10px'
                  borderTopLeftRadius='0'
                  boxShadow='12px 12px 0 0 rgba(0,0,0,0.1)'
                  fontSize='18px'
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
                        {`${item.inner}+${item.outer}`}
                      </Box>
                      <Box
                        as='span'
                        color='#0D0E67'
                      >
                        获得国外学士学位
                      </Box>
                    </Box>
                    <Divider bg='#0D0E67' variant='dashed' />
                    {
                      item.discription.map((i, discriptionIndex) => (
                        <Box fontSize='16px' key={discriptionIndex} marginBottom='5px' display='flex' alignItems='center' color='#18006C'>
                        <Box bg='#18006C' h='5px' w='5px' display='inline-block' marginRight='5px' borderRadius='50%' />
                          {i}
                        </Box>
                      ))
                    }
                  </VStack>
                </Box>
              </VStack>
            </WrapItem>
          )
        }
      </Wrap>
      <Box as='button' bg='#FF8A00' borderRadius='50px' color='#fff' px='4px' h='8' w='200px'>留学费用详解</Box>
    </VStack>
  )
}

export default AbroadMode;
