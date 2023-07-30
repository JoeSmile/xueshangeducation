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
  icon: '/homepage/process/fuIcon_1.jpg',
  title: '前期咨询',
  description: [
    '了解留学需求',
    '掌握学生情况',
    '介绍服务理念',
  ],
}, {
  icon: '/contry_problem/1.jpg',
  title: '留学方案',
  description: [
    '评估申请难度',
    '确定申请目标',
    '全程申请跟进',
  ],
}, {
  icon: '/contry_problem/2.png',
  title: '选院校专业',
  description: [
    '了解学员意愿',
    '介绍院校情况',
    '评估录取概率',
  ],
}, {
  icon: '/contry_problem/3.jpg',
  title: '材料指导',
  description: [
    '指导材料准备',
    '申请材料指导',
    '协助材料邮寄',
  ],
}, {
  icon: '/contry_problem/4.jpg',
  title: '签证办理',
  description: [
    '指导签证材料',
    '探讨签证问题',
    '指导签证申请',
  ],
}, {
  icon: '/contry_problem/5.png',
  title: '后续服务',
  description: [
    '留学行前指导',
    '指导出境事宜',
    '联络接机服务',
  ],
}, {
  icon: '/contry_problem/6.jpg',
  title: '成功留学',
  description: [
    '顺利完成跨境',
    '成功注册入学',
    '开启留学生活',
  ],
}, ];

function Process() {
  return (
    <VStack paddingBottom='30px'>
      <Box color='#0D0E67' fontSize='20px' fontWeight='600' marginY='20px'>在学尚，体验一站式留学服务</Box>
      <Flex width='100%' justifyContent='center' marginBottom={4}>
        <Wrap align='center' justify='center' width='100%'>
          {
            ProcessItem.map((item, processIndex) => 
              <WrapItem key={item.title}>
                <HStack>
                  <VStack borderRadius='150px' alignItems='center' bg='#fff' paddingX='20px' paddingY='50px'>
                    <Image src={item.icon} objectFit='cover' height='56px' alt='icon'/>
                    <Text fontSize='24px' fontWeight='600' color='#00B287'>{item.title}</Text>
                    <Divider />
                    <VStack>
                      {item.description.map((content, index) => (
                        <Text key={index} color='gray.600' fontSize='14px'>{content}</Text>
                      ))}
                    </VStack>
                  </VStack>
                  {processIndex !== ProcessItem.length - 1 && <Image src="/homepage/process/fuLine.png" objectFit='cover' height='30px' alt='icon'/>}
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

export default Process;
