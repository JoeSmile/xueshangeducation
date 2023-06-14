import { HStack,Wrap, WrapItem, Card, Text, Center} from '@chakra-ui/react';
import React from 'react';

const AdvancedItems = [{
  title: '优秀的团队',
  description: '我们拥有一支经验丰富，业务过硬。专业商超的精英团队，包括服务顾问、策划顾向、文书顾问，网申顾问、语言培训老师等'
}, {
  title: '贴心的服务',
  description: '多对一服产，分工合理，随时服进。每个学生至少有3至4名考师负责，随时督促学生学习及相关留学申请事项'
}, {
  title: '有效的规划',
  description: '我们的策划老师与文书老师会与每位学生进行 "头脑风暴"，挖掘不同学生的个性、优势与兴趣等，从而为每个学生制定合理、可行、有效的留学规划方案'
}, {
  title: '专业的文书',
  description: '针对每一位申请者量体裁衣，安排与申请者专业一致的文书老师创作个性化的专业文书，杜绝任何模板式文书'
}, {
  title: '透明的流程',
  description: '整个留学申请过程完全透明，对申请人无条件公开，每个申请人都可以完全排现自己的留学申请'
}, {
  title: '良好的口碑',
  description: '100%申请成功率，同行业中申请办理成功率始终居于最前列，深受广大学生，家长的信赖与好评'
}, {
  title: '顶尖的录取',
  description: '每年都有为学生申请到世界顶级学校的录取，如哈佛大学、耶魯大学、牛津大学、斯坦福大学、麻省理工学院等等'
}, ]

function Advanced() {
  return (
    <HStack>
      <Wrap spacing='30px' justify='center'>
        {
          AdvancedItems.map((item) => {
            return (
              <WrapItem key={item.title} width='20%'>
                <Card height='180px' p='10px'>
                  <Center fontSize='18px' fontWeight='600' mb='6px'>{item.title}</Center>
                  <Text fontSize='13px'>{item.description}</Text>
                </Card>
              </WrapItem>
            )
          })
        }
      </Wrap>
    </HStack>
  );
}

export default Advanced;
