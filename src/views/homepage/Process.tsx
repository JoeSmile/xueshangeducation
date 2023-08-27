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
import { useFormStore } from '@/store/formStore';

export type ProcessItem = {
  title: string,
  description: string[],
  icon?: string
}
export type ProcessItemsProps = {
  ProcessItems?: ProcessItem[],
  title?: string
}

const ProcessIcons = [
  '/homepage/process/fuIcon_1.jpg',
  '/contry_problem/1.jpg',
  '/contry_problem/2.png',
  '/contry_problem/3.jpg',
  '/contry_problem/4.jpg',
  '/contry_problem/5.png',
  '/contry_problem/6.jpg',
]
const DefaultProcessItem: ProcessItem[] = [{
  title: '前期咨询',
  description: [
    '了解留学需求',
    '掌握学生情况',
    '介绍服务理念',
  ],
}, {
  title: '留学方案',
  description: [
    '评估申请难度',
    '确定申请目标',
    '全程申请跟进',
  ],
}, {
  title: '选院校专业',
  description: [
    '了解学员意愿',
    '介绍院校情况',
    '评估录取概率',
  ],
}, {
  title: '材料指导',
  description: [
    '指导材料准备',
    '申请材料指导',
    '协助材料邮寄',
  ],
}, {
  title: '签证办理',
  description: [
    '指导签证材料',
    '探讨签证问题',
    '指导签证申请',
  ],
}, {
  title: '后续服务',
  description: [
    '留学行前指导',
    '指导出境事宜',
    '联络接机服务',
  ],
}, {
  title: '成功留学',
  description: [
    '顺利完成跨境',
    '成功注册入学',
    '开启留学生活',
  ],
}, ];

function Process({ProcessItems = DefaultProcessItem, title}: ProcessItemsProps) {
  const onOpen = useFormStore(s => s.onOpen);

  return (
    <VStack paddingBottom='30px'>
      <Box color='#0D0E67' fontSize='20px' fontWeight='600' textAlign='left'
        maxWidth='1200px' borderLeft='4px solid #122CBE' paddingLeft='10px' width='100%'>{title ? title : '在学尚，体验一站式留学服务'}</Box>
      <Divider borderColor='black' maxWidth='1200px'/>
      <Flex width='100%' justifyContent='center' marginBottom={4}>
        <Wrap align='center' justify='center' width='100%'>
          {
            ProcessItems.map((item, processIndex) => 
              <WrapItem key={item.title}>
                <HStack>
                  <VStack borderRadius='150px' alignItems='center' bg='#fff' paddingX='20px' paddingY='50px'>
                    <Image src={ProcessIcons[processIndex]} objectFit='cover' height='56px' alt='icon'/>
                    <Text fontSize='24px' fontWeight='600' color='#00B287'>{item.title}</Text>
                    <Divider />
                    <VStack>
                      {item.description.map((content, index) => (
                        <Text key={index} color='gray.600' fontSize='14px'>{content}</Text>
                      ))}
                    </VStack>
                  </VStack>
                  {processIndex !== ProcessItems.length - 1 && <Image src="/homepage/process/fuLine.png" objectFit='cover' height='30px' alt='icon'/>}
                </HStack>
              </WrapItem>
              )
          }
        </Wrap>
      </Flex>
      <Center>
        <Box as='button' bg='transparent' borderRadius='4px' border='1px solid #FF8A00' color='#FF8A00' px={4} h={8}
         onClick={() => onOpen()}
        >了解详细服务流程</Box>
      </Center>
    </VStack>
  );
}

export default Process;
