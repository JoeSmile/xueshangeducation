import {Flex, Center, Wrap, WrapItem, Text, VStack, Link, Card, CardBody, Box, Heading, HStack } from '@chakra-ui/react';
import React from 'react';
import NextLink from 'next/link'

const products = [{
  title: '美国',
  imageUrl: '/homepage/country/1.jpg',
  description: '美国留学要花多少钱？'
},{
  title: '澳洲',
  imageUrl: '/homepage/country/2.jpg',
  description: '澳洲热门专业有哪些？'
},{
  title: '加拿大',
  imageUrl: '/homepage/country/3.jpg',
  description: '加拿大签证真的很难办吗?'
}, {
  title: '欧洲',
  imageUrl: '/homepage/country/4.jpg',
  description: '欧洲国家可以免学费吗?'
},{
  title: '英国',
  imageUrl: '/homepage/country/5.jpg',
  description: '英国院校排名知多少?'
},{
  title: '亚洲',
  imageUrl: '/homepage/country/6.jpg',
  description: '亚洲国家留学可以免语言吗?'
},{
  title: '港澳',
  imageUrl: '/homepage/country/7.jpg',
  description: '香港八大承认大陆高考成绩吗?'
},{
  title: '中外合办',
  imageUrl: '/homepage/country/8.jpg',
  description: '中外合办值得上吗?'
}]


function Countries() {
  return (
    <VStack paddingBottom='30px'>
      <Center>
        <Text color='#0D0E67' fontSize='48px' fontWeight='600'>目的地篇</Text>
      </Center>
      <Center marginY='10px'>
        <Text color='#0D0E67' fontSize='24px' fontWeight='600'>留学大咖的进阶之路</Text>
      </Center>
      <Flex justifyContent='center'>
        <Wrap maxW='1200px' width='100%' spacing={10} justifyContent='center'>
          {
            products.map(product => {
              return (
                <WrapItem key={product.title} justifyContent='center'>
                  <Card
                    _after={{
                      content: "''",
                      height: '100%',
                      width: '100%',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      zIndex: 1,
                      background: 'inherit',
                      filter: 'blur(5px)'
                    }}
                    position='relative'
                    boxSizing='border-box'
                    backgroundRepeat='no-repeat'
                    backgroundImage={product.imageUrl}
                    backgroundPosition='center'
                    backgroundSize='cover'
                    height={160}
                    width='270px'
                    alignItems='center'
                    justifyContent='center'
                    color='#0D0E67' 
                    >
                    <CardBody gap={20} position='absolute' zIndex='10' 
                        height='100%' fontWeight='600'  width='100%'
                        borderRadius='4px'
                        backgroundColor='rgba(255, 255, 255, 0.5)'>
                      <Center marginY='10px'>
                        <Heading fontSize="42px" >{product.title}</Heading>
                      </Center>
                      <Center>
                        <Text fontWeight='bold' fontSize='16px'>{product.description}</Text>
                      </Center>
                    </CardBody>
                  </Card>
                </WrapItem>
              )
            })
          }
        </Wrap>
      </Flex>
    </VStack>
  );
}

export default Countries;
