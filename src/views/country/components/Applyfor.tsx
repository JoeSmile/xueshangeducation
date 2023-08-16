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
import { ApplyForItem } from './data';

const DefaultProcessItem: ApplyForItem = {
  title: '美国留学个阶段申请条件',
  applyItems: [{
    phase: '研究生',
    academic: [
      '1、申请时大四在读，到美国入学注册有学士学位；',
      '2、大学平均成绩75-85分；',
    ],
    language: [
      '1、TOEFL托福80或雅思6.5，部分院校要求托福100分或雅思7.0分以上。部分学校可以提供无语言或低语言双录取；',
      '2、商科及管理类专业需要GMAT成绩，其他专业需要GRE成绩(法律专业除外)',
    ],
    bottomWord: '评估我的录取率',
  }, {
    phase: '本科生',
    academic: [
      '1、高中在读学生或持有高中毕业证书的学生；',
      '2、高中平均成绩达GPA达到3.6；',
    ],
    language: [
      '1、TOEFL托福80或雅思6.5，部分院校要求托福100分或雅思7.0分以上。',
      '2、SAT达到1420以上，院校不同要求不同；',
    ],
    bottomWord: '美国低龄申请条件',
  }, {
    phase: '低龄',
    academic: [
      '高中：接受初三到高二学生的申请，年龄在13岁以上，18岁以下；',
      '初中：须是国内初三至高二的学生',
    ],
    language: [
      '高中：托福需要80+，雅思需要6.5+',
      '初中：接受SLEP、TOEFL、IELTS或SSAT成绩',
    ],
    bottomWord: '查看申请院校',
  }]
};

type ApplyforProps = {
  ProcessItem?: ApplyForItem
}


function Applyfor({ProcessItem = DefaultProcessItem}: ApplyforProps) {
  return (
    <VStack paddingBottom='30px'>
      <Box color='#0D0E67' fontSize='20px' fontWeight='600' marginY='20px'>{ProcessItem.title}</Box>
      <Flex width='100%' justifyContent='center' marginBottom={4}>
        <Wrap align='center' justify='center' width='100%'>
          {
            ProcessItem.applyItems.map(item => 
              <WrapItem
                key={item.phase}
                bg='#fff'
                borderRadius='20px'
                width='30%'
                flexDirection='column'
                
              >
                <Box
                  width='100%'
                  display='flex'
                  flexDirection='column'
                  alignItems='unset'
                  paddingX='40px'
                  paddingY='20px'
                  height='340px'
                  justifyContent='space-around'
                >
                  <Text fontSize='16px' fontWeight='600' textAlign='center'>{`${item.phase}申请条件`}</Text>
                  <Divider marginY='10px' opacity='1' borderColor='#4E4E4E' />
                  <Box display='flex' alignItems='center'>
                    <Text color='#0D0E67' fontSize='20px'>*</Text>
                    <Text>学历要求</Text>
                  </Box>
                  {
                    item.academic.map(i =>(
                      <Text key={i}>{i}</Text>
                    ))
                  }
                  <Box display='flex' alignItems='center'>
                    <Text color='#0D0E67' fontSize='20px'>*</Text>
                    <Text>语言要求</Text>
                  </Box>
                  {
                    item.language.map(i =>(
                      <Text key={i}>{i}</Text>
                    ))
                  }
                </Box>
                <Box
                  width='100%'
                  height='56px'
                  bg='#3d3b3a'
                  borderBottomRadius='20px'
                  display='flex'
                  alignItems='center'
                  justifyContent='center'
                  color='#fff'
                  fontWeight='600'
                >
                  {item.bottomWord}
                </Box>
              </WrapItem>
              )
          }
        </Wrap>
      </Flex>
    </VStack>
  );
}

export default Applyfor;
