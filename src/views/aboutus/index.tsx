import Layout from '@/components/layout';
import { Box, Center, Image, Text } from '@chakra-ui/react';
import React from 'react';
import { Gallery } from 'react-grid-gallery';
import images from './image';

export const Aboutus =()=> {
  return (
    <Layout>
      <Box display='block' textIndent='20px' maxW='800px' m='20px auto'>
        <Image src='/logo.png' objectFit='contain' alt='aboutus' 
          float='left' display='inline-block' width='300px' mr='20px' />
        北京学尚太奇信息科技有限公司成立于2017年7月，学尚教育集团业务涵盖国际本科、中外合作办学、国际教育等三大板块，而目前公司的主要业务板块集中在留学移民，教育培训领域:公司在成立初期就坚持以流量导入为核心理念，逻辑验证为基础的运营策略。深耕院校数据库系统，并与众多欧美名校校友以及欧美500强建立战路合作关系，拥有丰富强大的的校友网络和实习就业网络，积累了丰富的留学申请实践经验，帮助众多学子实现了留学海外名校的梦想;同时我们们用精细，前沿，系统的服务帮助留学生快速的适应留学生活。
学尚教育的核心理念即:“出国留学的灯塔，回国就业的桥梁”，本着“从心出发、蝎诚相待、服务至上”的服务宗旨，开创了行业3V1管家式服务体系，独创3大步骤，8大流程，56个节点，制定了行业的交付新标准，为众多学子提供一站式的留学升学规划方案，在海外求学的过程中更加省时、省心、省力。秉承着“纯海归团队，管到底”的核心企业价值观，学尚留学在留学行业的生态体系的建立上笃定前行，为每一个学子创造最合理，最合适的留学机会和道路，为留学生回国就业提供-些可以利用和嫁接的资源;学尚留学，留学生海归的完美拍档。
99%以上申请成功率，同行业中申请办理成功率始终居于最前列，深受广大学生，家长的信赖与好评。
      </Box>
    <Box width='800px' m='40px auto'> 
      <Text fontSize='20px'>办公区展示</Text>
      <Gallery images={images} enableImageSelection={false} />
    </Box>
    </Layout>
  );
}

