import { Card, Flex, VStack, Wrap, WrapItem, Text, Image, Box, HStack, Divider } from '@chakra-ui/react';
import React, { useState } from 'react';

const offerList = [{
  logoUrl: '/hongkong/1.png',
  name: '香港大学',
  englishName: 'The University of Hong Kong',
  rank: '26',
  location: '香港中西区',
  advantage: '香港大学是中国香港的一所综合性国际化公立研究型大学，有亚洲“常春藤”之称。香港大学奠基于1910年3月16日，次年3月30日正式注册成立，其前身为香港西医书院，是香港历史最悠久的高等教育。',
}, {
  logoUrl: '/hongkong/2.png',
  name: '香港中文大学',
  englishName: 'The Chinese University of Hong Kong',
  rank: '47',
  location: '香港新界沙田',
  advantage: '香港中文大学历史始于1963年，是一所国际化公立研究型综合大学，在人文学科、数学、计算机科学、经济与金融、医学、法律、传媒、地理等领域堪称学术重镇，也是香港唯一有诺贝尔奖、菲尔兹奖、图灵奖及香农奖得主任教的大学。该校以“结合传统与现代，融会中国与西方”为使命，以灵活学分制、书院制、中英兼重和多元文化为特色，是环太平洋大学联盟、世界大学联盟、松联盟、中国大学校长联谊会成员，亚洲首家AACSB认证成员，香港互联网交换中心所在地。根据国际学术网站Research公布的2022年大学及科学家排名，香港中文大学心理学学科位列中国第1位，计算机科学、医学、经济及金融、生物学及生物化学4个学科位列中国第2位，微生物学学科位列中国第3位。此外，计算机科学、经济及金融、心理学、植物科学及农艺学、生物学及生物化学、基因及分子生物学6个学科排名靠前。',
}, {
  logoUrl: '/hongkong/3.png',
  name: '香港科技大学',
  englishName: 'The Hong Kong University of Science and Technology',
  rank: '60',
  location: '香港新界西贡',
  advantage: '香港科技大学是香港政府为配合1980年代经济结构转型需要而创办的香港第三所大学，是香港第一所研究型大学。香港科技大学为环太平洋大学联盟、全球大学校长论坛、东亚研究型大学协会、亚洲大学联盟、中国大学校长联谊会重要成员，并获AACSB和EQUIS双重认证，是一所世界知名研究型大学。该校以科技和商业管理为主、人文及社会科学并重，尤以商科和工科见长，在物理、工程、工商管理、生物科学及生物技术、环境及可持续发展等领域均取得显著成就。2022年4月，QS世界大学学科排名发布，香港科技大学有14个科目进入全球50强，并入选亚洲十佳大学。',
}, {
  logoUrl: '/hongkong/4.png',
  name: '香港理工大学',
  englishName: 'The Hong Kong Polytechnic University',
  rank: '65',
  location: '香港九龙红磡',
  advantage: '香港理工大学是一所位于中国香港的公立综合性研究型大学。致力培育慎思明辨、勇于探索求知、富于创见和能言善道的学生，让他们为世界带来正面影响。理大专注于跨学科研究，研发具长远影响力且能应对现实生活问题的创新科技。透过启发创新意念、促进可持续发展、提高经济成果，以及优化社区生活，以造福香港、国家以至全世界。在最新发布的 QS 2022年度世界大学学科排名，理大有六个学科及一个学术范畴跻身全球首50位之内。这排名结果印证了理大在多个学科范畴领先全球。理大将继往开来，在教育、科研和创新各方面力臻完美，为社会的福祉作出更大的贡献。理大优势学科包括酒店及康乐管理，建筑，土木工程，艺术设计，环境科学，商业管理及社会学、语言学学科。理大工商管理学院是同时具有AACSB、EQUIS双重认证的商学院。',
}, {
  logoUrl: '/hongkong/5.png',
  name: '香港城市大学',
  englishName: 'City University of Hong Kong',
  rank: '70',
  location: '香港九龙塘',
  advantage: '香港城市大学成立于1994年，是一所充满朝气的大学，其地理位置独特，位于香港这个东西方汇集的亚洲国际都会中心。以创新精神专注于研究及专业教育两大领域，致力为全球议题寻找解决方案，并推动有益社会的转变，追求卓越、促进创新、培育创意，造福社会和服务全球。城大是一所现代化国际大学，注重多元化、跨文化学习与全球视野。城大拥有优良的师资，与国际学术界建立了密切广泛的合作网络。城大的毕业生成长为杰出专业人士，具备广纳新知、灵活应变、细心思虑、乐于回馈社会的特质。城大在国际大学排名榜上表现出色，位居全球第54位；而根据史丹福大学最新公布的排名指标，逾140位论文被高度引用的城大教研人员，获列入全球排名前2%科学家，反映大学极高的学术水平及卓越研究成就。在商科、理工科、社科、文科领域都有优势专业。',
}]

interface School {
  logoUrl: string;
  name: string;
  englishName: string;
  rank: string;
  location: string;
  advantage: string;
}

function HongkongSchool() {
  const [current, setCurrent] = useState<School>({
    logoUrl: '/hongkong/1.png',
    name: '香港大学',
    englishName: 'The University of Hong Kong',
    rank: '26',
    location: '香港中西区',
    advantage: '香港大学是中国香港的一所综合性国际化公立研究型大学，有亚洲“常春藤”之称。香港大学奠基于1910年3月16日，次年3月30日正式注册成立，其前身为香港西医书院，是香港历史最悠久的高等教育。',
  })
  const {
    name,
    englishName,
    rank,
    location,
    advantage,
  } = current
  const onClickSchool = (data: any) => {
    setCurrent(data)
  }
  return (
    <VStack>
      <Box color='#0D0E67' fontSize='20px' fontWeight='600' marginY='20px'>选校推荐</Box>
      <Flex width='100%' justifyContent='center' cursor='pointer'>
        <Box display='flex' justifyContent='space-around'>
          {
            offerList.map(item => 
              <Card
                width='19%'
                padding='10px'
                borderRadius='20px'
                display='flex'
                justifyContent='center'
                key={item.name}
                onClick={() => { onClickSchool(item) }}
              >
                <HStack>
                  <Image src={item.logoUrl} objectFit='cover' height='68px' alt='icon'/>
                  <Box fontSize='12px'>
                    <Text fontSize='18px' color='#666666' fontWeight='bold'>{item.name}</Text>
                    <Text fontSize='12px' color='#666666' marginBottom='10px'>{item.englishName}</Text>
                  </Box>
                </HStack>
              </Card>
              )
          }
        </Box>
      </Flex>
      <Box marginTop='16px' borderRadius='20px' padding='0 30px 45px 30px' bg='linear-gradient(180deg,#f5f5f5 0%,#f5f5f5 40%,#f2c7ef)'>
        <VStack alignItems='unset'>
          <Text fontSize='24px' color='#666666' marginBottom='10px'>{`${name} ${englishName}`}</Text>
          <HStack display='flex' alignItems='unset'>
            <Box color='#9a2b93' width='280px'>
              <Box display='flex'>
                QS世界大学排名：<Text color='#666666'>{rank}</Text>
              </Box>
              <Box display='flex'>
                地理位置：<Text color='#666666'>{location}</Text>
              </Box>
            </Box>
            <Box width='4px' height='60px' bg='#cc91c8' marginRight='40px' />
            <Box display='flex' flex='1'>
              <Box color='#9a2b93'>学校优势：</Box>
              <Text color='#666666' flex='1'>{advantage}</Text>
            </Box>
          </HStack>
          <Box display='flex' justifyContent='end' marginTop='10px' marginRight='10px'>
            <Box as='button' bg='#9a2b93' color='#fff' borderRadius='20px' borderColor='#9a2b93' width='200px' h={7}>了解更多院校详情</Box>
          </Box>
        </VStack>
      </Box>
    </VStack>
  );
}

export default HongkongSchool;
