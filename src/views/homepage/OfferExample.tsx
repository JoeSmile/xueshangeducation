import { Card, Flex, VStack, Wrap, WrapItem, Text, Image, Box, HStack } from '@chakra-ui/react';
import React from 'react';

const offerList = [{
  logoUrl: '/logo.png',
  schoolName: '麻省理工学院硕士offer',
  name: 'L同学',
  graduateFrom: '美国就读',
  subject: '金融学/成绩3.9+',
  basicInfo: 'GRE329',
}, {
  logoUrl: '/logo.png',
  schoolName: '麻省理工学院硕士offer',
  name: 'L同学',
  graduateFrom: '美国就读',
  subject: '金融学/成绩3.9+',
  basicInfo: 'GRE329',
}, {
  logoUrl: '/logo.png',
  schoolName: '麻省理工学院硕士offer',
  name: 'L同学',
  graduateFrom: '美国就读',
  subject: '金融学/成绩3.9+',
  basicInfo: 'GRE329',
}, {
  logoUrl: '/logo.png',
  schoolName: '麻省理工学院硕士offer',
  name: 'L同学',
  graduateFrom: '美国就读',
  subject: '金融学/成绩3.9+',
  basicInfo: 'GRE329',
}, {
  logoUrl: '/logo.png',
  schoolName: '麻省理工学院硕士offer',
  name: 'L同学',
  graduateFrom: '美国就读',
  subject: '金融学/成绩3.9+',
  basicInfo: 'GRE329',
}, {
  logoUrl: '/logo.png',
  schoolName: '麻省理工学院硕士offer',
  name: 'L同学',
  graduateFrom: '美国就读',
  subject: '金融学/成绩3.9+',
  basicInfo: 'GRE329',
}]

function OfferExample() {
  return (
    <VStack paddingBottom='30px'>
      <Box color='#0D0E67' fontSize='20px' fontWeight='600' marginY='20px'>在学尚，体验一站式留学服务</Box>
      <Flex width='100%' justifyContent='center'>
        <Wrap spacing='30px' width='1000px'>
          {
            offerList.map(item => 
              <WrapItem key={item.name} width='30%' alignItems='unset'>
                <Card>
                  <VStack bg='#fff' padding='20px'>
                    <HStack>
                      <Image src={item.logoUrl} objectFit='cover' height='36px' alt='icon'/>
                      <Text fontWeight='600'>{item.schoolName}</Text>
                    </HStack>
                    <Box fontSize='12px'>
                      <Text>
                        学生姓名
                        <Box as='span' marginLeft='10px'>{item.name}</Box>
                      </Text>
                      <Text>
                        毕业学校
                        <Box as='span' marginLeft='10px'>{item.graduateFrom}</Box>
                      </Text>
                      <Text>
                        本科专业
                        <Box as='span' marginLeft='10px'>{item.subject}</Box>
                      </Text>
                      <Text>
                        基本背景
                        <Box as='span' marginLeft='10px'>{item.basicInfo}</Box>
                      </Text>
                    </Box>
                  </VStack>
                </Card>
              </WrapItem>
              )
          }
        </Wrap>
      </Flex>
      <Box as='button' margin='20px' bg='transparent' borderRadius='4px' border='1px solid #FF8A00' color='#FF8A00' px={4} h={8}>了解更多</Box>
    </VStack>
  );
}

export default OfferExample;
