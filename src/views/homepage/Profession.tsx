import { Card, Flex, VStack, Wrap, WrapItem, Text, Center, HStack, Box } from '@chakra-ui/react';
import React from 'react';

const subjectList = [{
  subject:'会计与金融学',
  imageUrl: '/homepage/subject/1.jpg'
}, {
  subject:'市场营销',
  imageUrl: '/homepage/subject/2.jpg'
}, {
  subject:'传媒',
  imageUrl: '/homepage/subject/3.jpg'
}, {
  subject:'计算机专业',
  imageUrl: '/homepage/subject/4.jpg'
}, {
  subject:'教育学',
  imageUrl: '/homepage/subject/5.jpg'
}, {
  subject:'管理学',
  imageUrl: '/homepage/subject/6.jpg'
}, {
  subject:'电气工程',
  imageUrl: '/homepage/subject/7.jpg'
}, {
  subject:'艺术专业',
  imageUrl: '/homepage/subject/8.jpg'
}]

const commonProblem = [

  '留学选专业前可以参考哪些院校专业排名榜单?',
  '如何迈过选专业的“坑”，选专业前需要先了解哪些问题 硕士留学选专业重点看中哪些方面?',
  '成绩没有优势的情况下，能转专业申请吗?',
  '毕业后想留在当地工作，应该怎么选择好的专业?',
]

function Profession() {
  return (
    <VStack paddingBottom='30px'>
      <Center marginY='10px'>
        <Text color='#0D0E67' fontSize='48px' fontWeight='600'>专业篇</Text>
      </Center>
      <Center>
        <Text color='#0D0E67' fontSize='20px' fontWeight='600'>专业太多不知道怎么选？要璀璨的未来，也要适合自己的</Text>
      </Center>
      <Flex width='100%' justifyContent='center'>
        <HStack display='flex' width='100%'>
          <Wrap justify='center' spacing='10px' flex='3' marginRight='5px'>
            {
              subjectList.map((item, index) => 
                <WrapItem
                  key={index}
                  backgroundImage={item.imageUrl}
                  height='100px'
                  width='22%'
                  backgroundPosition='center'
                  backgroundSize='cover'
                  backgroundRepeat='no-repeat'
                  alignItems='center'
                  justifyContent='center'
                >
                  <Text color='#0D0E67' fontWeight='600' fontSize='22px' padding='8px' height='100%'
                  width='100%' textAlign='center' lineHeight='85px'
                  backgroundColor='rgba(255, 255, 255, 0.5)'>{item.subject}</Text>
                </WrapItem>
              )
            }
          </Wrap>
          <VStack flex='2' alignItems='unset' spacing='14px' fontWeight='600' maxW='600px'>
            <Text>留学专业选择常见问题</Text>
            <Box>
              {
                commonProblem.map((item, index) => 
                  <Box fontSize='12px' key={index} marginBottom='5px' display='flex' alignItems='center'>
                    <Box bg='#FF8A00' h='5px' w='5px' display='inline-block' marginRight='5px' borderRadius='50%' />
                    {item}
                  </Box>
                )
              }
            </Box>
            <Box as='button' bg='#FF8A00' borderRadius='50px' color='#fff' px='4px' h='8' w='200px'>更多热门专业解析</Box>
          </VStack>
        </HStack>
      </Flex>
    </VStack>
    
  );
}

export default Profession;
