import { Card, Flex, VStack, Wrap, WrapItem, Text } from '@chakra-ui/react';
import React from 'react';

const advancedItems = [{
  name:'优势一',
  description: '隶属于恒坤教育集团，始创于04年，专注于教育行业18年之久，稳中求进，抗风险能力强。'
},{
  name:'优势二',
  description: '涵盖国际本科、中外合作办学、国际留学三大板块，满足多种需求群体。'
},{
  name:'优势三',
  description: '专业的咨询团队，资深考研规划师，熟悉各大院校招生信息，为学员精准匹配院校。'
},{
  name:'优势四',
  description: '教学、教研团队拥有多位具有丰富教研、教学经验的优秀教师，长达多年的试卷追踪，用大数据进行准确分析，精准押题。'
},{
  name:'优势五',
  description: '开创了行业3V1管家式服务模式，制定了行业的交付新标准，为学员提供一站式的学历提升方案。'
}]

function Advanced() {
  return (
    <Flex width='100%' justifyContent='center'>
     <Wrap align='center' justify='center' spacing='30px' width='1200px'>
        {
        advancedItems.map((item, index) => 
          <WrapItem key={index}>
            <Card width={200} height={200} padding='16px' bg='transparent' borderRadius='50%'>
              <VStack>
                <Text fontSize='24px' fontWeight='600' color='blue.500' textAlign='center'>{item.name}</Text>
                <Text color='gray.600' fontSize='14px'>{item.description}</Text>
              </VStack>
            </Card>
          </WrapItem>
          )
        }
     </Wrap>
    </Flex>
  );
}

export default Advanced;
