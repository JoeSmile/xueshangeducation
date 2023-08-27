import { Card, Flex, VStack, Wrap, WrapItem, Text, Image, Box, HStack, Divider } from '@chakra-ui/react';
import React from 'react';
import { Offer } from '../country/components/data';
import { useFormStore } from '@/store/formStore';

const DefaultOfferList: Offer[] = [{
    logoUrl: '/contry_school/Australia/3.png',
    schoolName: '悉尼大学',
    name: 'Z同学',
    graduateFrom: '211院校',
    subject: '电子信息工程/均分：81',
    basicInfo: '悉尼大学电气工程硕士',
  },{
    logoUrl: '/contry_school/HonKong/2.png',
    schoolName: '港中文大学',
    name: 'Y同学',
    graduateFrom: '国内双非一本院校',
    subject: '工商管理/均分：85+/雅思 7',
    basicInfo: '港中文 电子商务和物流管理',
  }, {
    logoUrl: '/contry_school/canada/5.png',
    schoolName: '加拿大本拿比公立教育局录取',
    name: 'Z同学',
    graduateFrom: '郑州某私立初中',
    subject: '',
    basicInfo: '成功录取BC省排名靠前的本拿比山高中',
  }, {
    logoUrl: '/contry_school/USA/10.png',
    schoolName: '美国顶级名校约翰霍普金斯大学录取',
    name: 'C同学',
    graduateFrom: '211院校',
    subject: '经济学专业/均分：85+/托福100+/GRE:320+',
    basicInfo: '约翰霍普金斯大学应用经济学硕士',
  },{
    logoUrl: '/contry_school/UK/8.png',
    schoolName: '曼彻斯特大学录取',
    name: 'Z同学',
    graduateFrom: '211院校',
    subject: '会计/均分：85+/PTE 66/无GRE，GMAT',
    basicInfo: '曼彻斯特大学人力资源管理硕士',
  }, {
    logoUrl: '/contry_school/UK/4.png',
    schoolName: '英国G5伦敦政治经济学院录取',
    name: 'J同学',
    graduateFrom: '985院校',
    subject: '经济学/均分：87/雅思 7/无GRE，GMAT',
    basicInfo: '伦敦政治经济学院经济史硕士',
  },

]

function OfferExample({offerList=DefaultOfferList}: {offerList?: Offer[]}) {
  const onOpen = useFormStore(s => s.onOpen);

  return (
    <VStack paddingBottom='30px'>
      <Box color='#0D0E67' fontSize='20px' fontWeight='600' textAlign='left' maxWidth='1200px' borderLeft='4px solid #122CBE' width='100%' paddingLeft='10px'>留学offer一览</Box>
      <Divider borderColor='black' maxWidth='1200px'/>
      <Flex width='100%' justifyContent='center'>
        <Wrap spacing='30px' width='1000px'>
          {
            offerList.map((item,index) => 
              <WrapItem key={index} width='300px' height='175px' alignItems='unset'>
                <Card width='300px' height='175px'>
                  <VStack bg='#fff' padding='20px' height='100%' width='100%'>
                    <HStack width='100%'>
                      <Image src={item.logoUrl} objectFit='cover' height='36px' alt='icon'/>
                      <Text fontWeight='600'>{item.schoolName}</Text>
                    </HStack>
                    <Box fontSize='12px' width='100%'>
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
      <Box as='button' margin='20px' bg='transparent' borderRadius='4px' 
       cursor='pointer'
       onClick={() => onOpen()}
      border='1px solid #FF8A00' color='#FF8A00' px={4} h={8}>了解更多</Box>
    </VStack>
  );
}

export default OfferExample;
