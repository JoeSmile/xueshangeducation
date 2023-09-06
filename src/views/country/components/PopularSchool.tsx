import { Card, Flex, VStack, Wrap, WrapItem, Text, Box, HStack, Divider } from '@chakra-ui/react';
import React from 'react';
import { School } from './data';
import { useFormStore } from '@/store/formStore';
import Image from 'next/image';

const offerList = [{
  logoUrl: '/contry_school/pu.gif',
  name: '普林斯顿大学',
  englishName: 'Princeton University',
  location: '新泽西州',
  basicInfo: '普林斯顿大学（又译普林斯敦大学）位于美国新泽西州的普林斯顿，是美国殖民时期成立的第四所高等教育学院。1746年在新泽西州伊丽莎白镇创立，当时名为"新泽西学院"。学校1756年搬迁到普林斯顿时名称仍未改动，直至1896年正式改为现在的名字。普林斯顿大学的录取一直以来都是极其严格的。',
}, {
  logoUrl: '/contry_school/hafo.jpg',
  name: '哈佛大学',
  englishName: 'Harvard University',
  location: '马萨诸塞州',
  basicInfo: '哈佛大学是最早的私立大学之一，以培养研究生和从事科学研究为主的综合性大学。总部位于波士顿的剑桥城。医学院和商学院位于波士顿市区。在剑桥城，与哈佛大学相邻的是与之齐名的麻省理工学院(MIT)。有趣的是，两所大学校园之间并没有明显的界线。',
}, {
  logoUrl: '/contry_school/gelunbiya.gif',
  name: '哥伦比亚大学',
  englishName: 'Columbia University in the City of New York',
  location: '纽约州',
  basicInfo: '哥伦比亚大学（Columbia University in the City of New York），简称为哥大（Columbia），是一所世界著名的私立研究型大学。学校位于美国纽约曼哈顿，于1754年根据英国国王乔治二世颁布的《国王宪章》而成立，并于1896年正式更名为哥伦比亚大学。',
}, {
  logoUrl: '/contry_school/yale.jpg',
  name: '耶鲁大学',
  englishName: 'Yale University',
  location: '康涅狄格州',
  basicInfo: '耶鲁大学（Yale University）是一所坐落于美国康涅狄格州纽黑文市的私立大学，始创于1701年，初名"大学学院"（Collegiate School）。耶鲁大学是美国历史上建立的第三所大学，今为长青藤联盟的成员之一。在2006英国泰晤士报世界大学排名中，耶鲁大学总平均排名为世界第四。',
}, {
  logoUrl: '/contry_school/stanford.gif',
  name: '斯坦福大学',
  englishName: 'Stanford University',
  location: '加利福尼亚州',
  basicInfo: '斯坦福大学（Stanford University）简称斯坦福，是位于美国的一所私立研究大学，被公认为世界上最杰出的大学之一。它位于加利福尼亚州的斯坦福市，临近旧金山。斯坦福大学于1891年由铁路富豪利兰·斯坦福建立，拥有的资产属于世界大学中最大的之一。它占地35平方公里，是美国面积第二大的大学。',
}, {
  logoUrl: '/contry_school/chicago.jpg',
  name: '芝加哥大学',
  englishName: 'University of Chicago',
  location: '美国伊利诺伊州',
  basicInfo: '芝加哥大学（The University of Chicago），简称芝大（UChicago），位于美国国际金融中心-芝加哥，是世界著名私立研究型大学、常年位列各个大学排行榜世界前十  。这里诞生了“芝加哥经济学派”（Chicago School of Economics）等以人文社科为主的众多芝加哥学派  ，走出了超过30%的世界诺贝尔经济学奖得主。',
}, {
  logoUrl: '/contry_school/cambrige.jpg',
  name: '剑桥大学',
  englishName: 'University of Cambridge',
  location: '英格兰剑桥',
  basicInfo: '剑桥大学（University of Cambridge；勋衔：Cantab），是一所世界顶尖的公立研究型大学，采用书院联邦制，坐落于英国剑桥。其与牛津大学并称为牛剑，是罗素大学集团成员，被誉为“金三角名校”和“G5超级精英大学”。剑桥大学是英语世界中第二古老的大学，前身是一个于1209年成立的学者协会。',
}, {
  logoUrl: '/contry_school/oxford.jpg',
  name: '牛津大学',
  englishName: 'University of Oxford',
  location: '英格兰牛津',
  basicInfo: '牛津大学（University of Oxford），简称“牛津”（Oxford），位于英国牛津，世界顶尖的公立研究型大学，采用书院联邦制。 [1-4]  其与剑桥大学并称为牛剑，是罗素大学集团成员，被誉为“金三角名校”和“G5超级精英大学”。',
}, {
  logoUrl: '/contry_school/toronto.jpg',
  name: '多伦多大学',
  englishName: 'University of Toronto',
  location: '位于 Ontario Toronto',
  basicInfo: '多伦多大学是加拿大规模最大的大学，创立于1827年，有14个院系、300个学士点、148个硕士和95个博士点。学校拥有一大批才华出众、成就突出的 学者，占全加拿大的学者总数的7%，所获著名科研奖项占全国的近1/4。学校的生源也很优秀，平均录取水平在会考成绩85%以上',
}]

type PopularSchoolProps = {
  schools?: School[]
}

function PopularSchool({ schools = offerList }: PopularSchoolProps) {
  const onOpen = useFormStore(s => s.onOpen);

  return (
    <VStack paddingBottom='30px'>
      <Box color='#0D0E67' fontSize='20px' fontWeight='600' width='100%' textAlign='left' maxWidth='1200px' borderLeft='4px solid #122CBE' paddingLeft='10px'>选校不迷茫 热门院校推荐</Box>
      <Divider borderColor='black' maxWidth='1200px'/>
      <Flex width='100%' justifyContent='center'>
        <Wrap spacing='30px' width='1200px' justify='space-between' className='school-wrap'>
          {
            schools.map(item => 
              <WrapItem key={item.name} width='31%' height='230px' alignItems='unset'>
                <Card width='100%' paddingX='30px' paddingY='10px' borderRadius='20px'>
                  <HStack>
                    <Box width='50px' height='50px' position='relative'>
                      <Image src={item.logoUrl}    
                        style={{
                          objectFit: 'contain', // cover, contain, none
                        }} fill alt='icon'
                      />
                    </Box>
                   
                    <Box fontSize='12px'>
                      <Text fontSize='20px' color='#089b7d'>{item.name}</Text>
                      <Text fontSize='12px' color='#999999' noOfLines={1}>{item.englishName}</Text>
                      <Text fontSize='14px' color='#666666' marginBottom='10px'>世界大学排名：{item.rank}</Text>
                    </Box>
                  </HStack>
                  <Text
                    fontSize='14px'
                    color='#666666'
                    marginBottom='10px'
                    noOfLines={3}
                  >
                    学校简介：{item.basicInfo}
                  </Text>
                  <Box as='button' bg='#0d9b72' color='#fff' fontSize='14px' 
                    cursor='pointer'
                    onClick={() => onOpen()}
                  borderRadius='15px' h={7} width='200px' margin='auto'>获取详细攻略</Box>
                </Card>
              </WrapItem>
              )
          }
        </Wrap>
      </Flex>
    </VStack>
  );
}

export default PopularSchool;
