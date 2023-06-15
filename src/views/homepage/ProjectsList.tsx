import {Flex, Center, Wrap, WrapItem, Text, VStack, Link } from '@chakra-ui/react';
import React from 'react';
import NextLink from 'next/link'

const products = [{
  title: '中外合作办学',
  path: '/cooperation',
  description: '根据《中外合作办学条例》和《中外合作办学条例实施办法》的有关规定，中外合作办学是指中国教育机构与外国教育机构依法在中国境内合作举办以中国公民为主要招生对象的教育教学活动。中外合作办学有合作设立机构和合作举办项目两种形式。'
},{
  title: '学尚留学',
  path: '/studyabroad',
  description: '学尚留学目前的产品线涉及出国留学、移民商旅、境外就业、教育培训、信息咨询、等领域的多元化、产业化、国际化集团公司。学尚留学凭借其与澳大利亚、美国、英国、新西兰、加拿大、等全世界30多个国家1000多个教育机构、高等院校长期、紧密、友好的合作，逐渐成为国内办理自费留学最有权威性的教育咨询机构，为您提供全方位的服务。'
},{
  title: '国际本科',
  path: '/sqa',
  description: '中国（教育部）留学服务中心是SCAAD项目中国大陆地区的独家引进单位，专门设立国际高等教育项目管理办公室，负责该项目的推广、管理、监督、协调，并为项目院校和学生提供相关服务。'
}]


function ProjectsList() {
  return (
    <Flex  justifyContent='center'>
      <Wrap maxW='1200px' width='100%' spacing={6}>
        {
          products.map(product => {
            return (
              <WrapItem flex='1' justifyContent='center' key={product.title}>
                <VStack spacing={2}>
                  <Text fontSize='24px' color='blue.500' fontWeight='500'>{product.title}</Text>
                  <Text textIndent='2rem' fontSize='14px'>{product.description}
                    <Link fontSize='12px' as={NextLink} href={product.path} textDecoration='underline' >了解更多</Link>
                  </Text>
                </VStack>
              </WrapItem>
            )
          })
        }
      </Wrap>
    </Flex>
   
  );
}

export default ProjectsList;
