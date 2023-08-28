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

const icons = [
  '/contry_problem/1.jpg',
  '/contry_problem/2.png',
  '/contry_problem/3.jpg',
  '/contry_problem/4.jpg',
  '/contry_problem/5.png',
  '/contry_problem/6.jpg',
  '/contry_problem/1.jpg',
  '/contry_problem/2.png',
  '/contry_problem/3.jpg',
  '/contry_problem/4.jpg',
  '/contry_problem/5.png',
  '/contry_problem/6.jpg',
]

const ProcessItem = [{
  title: '1-5月',
  description: '了解自身的专业,对博士申请专业产生一个明确的定位，立下一个有望于实现的心仪目标',
  bottomWord: '选目标专业',
}, {
  title: '6-8月',
  description: '多多了解未来的专业和院校信息，结合申请博士的时间规划确定你即将要报考的院校',
  bottomWord: '选择院校',
}, {
  title: '10月前',
  description: '不同的院校会设定不同门类的标化考试，务必要提前去院校官网了解相关的考试事宜。',
  bottomWord: '标化考试',
}, {
  title: '9-11月',
  description: '美国博士申请需要准备本科和研究生期间的成绩单，各类文书材料，套磁和语言成绩证明',
  bottomWord: '材料准备',
}, {
  title: '次年1-3月',
  description: '前期准备工作完成后，需要安排好时间与申请院校联系，准备面试，后期的套磁等一系列事宜。',
  bottomWord: '面试准备',
}, {
  title: '次年4-7月',
  description: '顺利拿到Offer，着手准备签证和各项入学事宜。',
  bottomWord: '办理签证',
}];

type ApplyProblemsProps = {
  applyItems?: TimeItem[],
  country: string,
  title?: string
}

function ApplyProblems({ applyItems = ProcessItem, country, title }: ApplyProblemsProps) {
  return (
    <VStack paddingBottom='30px'>
      <Box color='#0D0E67' fontSize='20px' fontWeight='600' marginY='20px'>{title ? title : `${country}留学各阶段申请难点 逐一攻克`}</Box>
      <Flex width='100%' justifyContent='center' marginBottom={4}>
        <Wrap align='center' justify='center' width='100%'>
          {
            applyItems.map((item, processIndex) => 
              <WrapItem key={item.title}>
                <HStack>
                  <VStack borderRadius='150px' alignItems='center' bg='#fff' paddingX='20px' paddingY='50px'>
                    <Image src={icons[processIndex]} objectFit='cover' height='56px' alt='icon'/>
                    <Text fontSize='24px' fontWeight='600' color='#00B287'>{item.title}</Text>
                    <Divider />
                    <Box
                      width='120px'
                      height='120px'
                      color='#333333'
                      textAlign='center'
                      fontSize='14px'
                    >
                      {item.description}
                    </Box>
                    {
                      item.bottomWord && <Box display='flex' alignItems='center' justifyContent='center' marginTop='10px'>
                      <Text color='#FF883B' fontSize='14px' marginRight='5px'>{item.bottomWord}</Text>
                      <Image src='/contry_problem/arrowRight.jpg' objectFit='cover' height='12px' alt='icon'/>
                    </Box>
                    }
                   
                  </VStack>
                  {processIndex !== applyItems.length - 1 && <Image src="/contry_problem/arrow.png" objectFit='cover' height='30px' alt='icon'/>}
                </HStack>
              </WrapItem>
              )
          }
        </Wrap>
      </Flex>
    </VStack>
  );
}

export default ApplyProblems;
