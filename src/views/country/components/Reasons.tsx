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

type ReasonIconsType = {
  bgImage: string,
  icon: string,
  dividerColor: string
}

const ReasonIcons: ReasonIconsType[] = [{
  bgImage: '/coutry_reason/jzl_1.png',
  icon: '/coutry_reason/jzl_1_2.png',
  dividerColor: '#78bbff',
}, {
  bgImage: '/coutry_reason/jzl_2.png',
  icon: '/coutry_reason/jzl_2_2.png',
  dividerColor: '#fc9999',
}, {
  bgImage: '/coutry_reason/jzl_3.png',
  icon: '/coutry_reason/jzl_3_2.png',
  dividerColor: '#9ad99f',
}, {
  bgImage: '/coutry_reason/jzl_4.png',
  icon: '/coutry_reason/jzl_4_2.png',
  dividerColor: '#f4c494',
}]

export type ReasonItemType = {
  reason: string,
  description: string,
  btnName: string
}
const DefaultReasonItems: ReasonItemType[] = [{
  reason: '排名高且含金量高',
  description: '2023年QS世界大学排名前100中有27所美国院校上榜，世界百强名校占30%',
  btnName: '测试校录取可能性',
}, {

  reason: '奖学金丰厚',
  description: '美国院校的奖学金种类繁多，且各院校每年向国际生提供的奖学金也是非常丰厚，较容易申请',
  btnName: '高额奖学金申请计划',
}, {

  reason: '留学周期短',
  description: '完成必修课程和规定学分就可毕业并获得相应的学位，缩短留学时间节约留学成本',
  btnName: '如何脱颖而出',
}, {
  reason: '就业机会多',
  description: '每年12万个工作岗位给国际学生回报率高，新资可观',
  btnName: '什么专业薪资高',
}];

type ReasonsProps = {
  title: string,
  ReasonItems?: ReasonItemType[]
}

function Reasons({ReasonItems = DefaultReasonItems, title='为什么赴美留学的人的人数逐年增长'}: ReasonsProps) {
  return (
    <VStack paddingBottom='30px'>
      <Box color='#0D0E67' fontSize='20px' fontWeight='600' marginY='20px'>{title}</Box>
      <Flex width='100%' justifyContent='center' marginBottom={4}>
        <Wrap align='center' justify='center' width='100%'>
          {
            ReasonItems.map((item, index) => 
              <WrapItem key={item.reason}>
                <Box
                  display='flex'
                  flexDirection='column'
                  alignItems='center'
                  paddingX='40px'
                  paddingY='20px'
                  borderRadius='20px'
                  justifyContent='space-around'
                  bg={`url(${ReasonIcons[index].bgImage}) no-repeat center center`}
                >
                  <Image src={ReasonIcons[index].icon} objectFit='cover' alt='icon'/>
                  <Text fontSize='16px' fontWeight='600' marginY='0'>{item.reason}</Text>
                  <Divider variant='dashed' marginY='10px' opacity='1' borderColor={ReasonIcons[index].dividerColor} />
                  <Text width='200px' height='90px' fontSize='14px'>{item.description}</Text>
                  {
                    item.btnName && <Box
                    as='button'
                    fontSize='14px'
                    bg='transparent'
                    borderRadius='50px'
                    border='1px solid #00BB9B'
                    color='#00BB9B'
                    px={3} h={6} 
                  >
                    {item.btnName}
                  </Box>
                  }
                </Box>
              </WrapItem>
              )
          }
        </Wrap>
      </Flex>
    </VStack>
  );
}

export default Reasons;
