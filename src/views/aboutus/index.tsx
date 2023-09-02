import Layout from '@/components/layout';
import { Box, Center, Image, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import { Gallery } from 'react-grid-gallery';
import images from './image';
import Seo from '@/components/SEO';

export const Aboutus =()=> {
  return (
    <Layout flex={1} background='white'>
      <Seo/>
      <VStack flex={1} background='white'>
        <Box display='block' textIndent='20px' maxW='800px' m='20px auto' flex={1} background='white'>
          <Image src='/logo.png' objectFit='contain' alt='aboutus' 
            display='inline-block' height='300px' width='300px' mr='20px' />
        </Box>
        <Text maxW='800px' textIndent='2rem'>
        北京学尚太奇信息科技有限公司成立于2017年，是恒坤集团旗下从事出国留学服务的专职机构，业务范围涵盖广泛，从低龄留学到海外博士申请，包括留学规划、背景提升、科研竞赛、院校申请、奖学金申请、文书指导、签证服务、职业规划等方面。已与美国、英国、澳大利亚、加拿大、爱尔兰、新西兰、日本、韩国、中国香港、中国澳门、新加坡、马来西亚、德国、法国、瑞士、瑞典等几十个国家和地区的众多海内外教育机构建立了良好的合作关系。
  学尚的核心理念即:“出国留学的灯塔，回国就业的桥梁”，本着“从心出发、竭诚相待、服务至上”的服务宗旨，开创了3V1管家式服务体系，为众多学子提供一站式的留学服务，让海外求学的过程中更加省时、省心、省力。
        </Text>
      </VStack>
    {/* <Box width='800px' m='40px auto'> 
      <Text fontSize='20px'>办公区展示</Text>
      <Gallery images={images} enableImageSelection={false} />
    </Box> */}
    </Layout>
  );
}

