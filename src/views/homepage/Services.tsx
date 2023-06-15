import React from 'react';
import {
  Box,
  Wrap,
  Flex,
  WrapItem,
  VStack,
  Card,
  Text
} from '@chakra-ui/react'

const ServiceItems = [{
  name: '设计升学方案',
  description: '根据咨询顾问的前期沟通，以及申请者提供的背景信息,我们将为申请者量身打造一份合理、可行、有效的留学规划方案，作为今后申请的时间规划纲要。',
}, {
  name: '执行与提升',
  description: '顾问老师将了解学生的学习进度，并实时解答准备过程中遇到的各种问题，包括但不限于：如何与导师沟通,如何选择科研课题，撰写并修改简历帮助您申请到top level的实习等等。',
}, {
  name: '选校方案',
  description: '我们将根据每位申请者的意愿和未来的职业目标，提供客观、精准的学校信息；也会对申请者想要申请的学校做岀专业的评估，在保证满足学生需求和最终结果的同时，尽可能的提高学校申请的档次。',
}, {
  name: '网络申请',
  description: '学尚留学提供全程透明化的网申服务，一方面网申顾问将会根据申请者提供的个人信息和策划顾问提供的相应文书材料准确填写每一个网申问题，同时所有的网申账号对学生开放。',
}, {
  name: '文书撰写',
  description: '学尚留学的专业的顾问(工程师/学术人/商业实践家)会与申请人共同讨论每份课题, 挖掘出最能体现申请人能力的亮点。承诺每一份文书都是量身定制并用英文直接撰写。',
}, {
  name: '签证与在国外的方方面面',
  description: '学尚留学将提供专业的签证指导与服务。此外，学尚留学也会提供在国外就业、生活的信息和讲座，同时让申请人有机会认识到同样优秀的其他学员，构建起申请者在他国的第一份人脉网络。',
}, {
  name: '实习内推操作',
  description: '留学不是终点，而是新的开始。学尚留学还致力于帮助海内外学子提升求职技能以及求职背景，实现自己的职业梦。',
}];

function Services() {
  return (
    <Flex width='100%' justifyContent='center'>
     <Wrap align='center' justify='center' spacing='30px' width='1200px'>
        {
        ServiceItems.map(item => 
          <WrapItem key={item.name}>
            <Card width={220} height={280} padding='16px' bg='transparent' >
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

export default Services;
