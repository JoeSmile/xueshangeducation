import {Flex, Center, Wrap, WrapItem, Text, VStack, Link, Card, CardBody, Box, Heading, HStack } from '@chakra-ui/react';
import React from 'react';
import NextLink from 'next/link'

const products = [{
  title: '美国',
  path: '/cooperation',
  imageUrl: '/logo.png',
  description: '美国留学要花多少钱？'
},{
  title: '澳洲/新西兰',
  path: '/studyabroad',
  imageUrl: '/logo.png',
  description: '澳洲/新西兰热门专业有哪些？'
},{
  title: '加拿大',
  path: '/sqa',
  imageUrl: '/logo.png',
  description: '加拿大签证真的很难办吗？'
}, {
  title: '欧洲',
  path: '/cooperation',
  imageUrl: '/logo.png',
  description: '欧洲国家可以免学费吗？'
},{
  title: '英国',
  path: '/studyabroad',
  imageUrl: '/logo.png',
  description: '英国院校排名知多少？'
},{
  title: '亚洲',
  path: '/sqa',
  imageUrl: '/logo.png',
  description: '香港八大成人大陆高考成绩吗？'
}]


function Countries() {
  return (
    <VStack>
      <Center>
        <Text color='#0D0E67' fontSize='48px' fontWeight='600'>留学大咖的进阶之路</Text>
      </Center>
      <Center marginY='10px'>
        <Text color='#0D0E67' fontSize='48px' fontWeight='600'>国家篇</Text>
      </Center>
      <Flex justifyContent='center'>
        <Wrap maxW='1200px' width='100%' spacing={10}>
          {
            products.map(product => {
              return (
                <WrapItem width='30%' key={product.title}>
                  <Card
                    height={160}
                    width='100%'
                    backgroundImage={product.imageUrl}
                    backgroundPosition='center'
                    backgroundSize='contain'
                    alignItems='center'
                    justifyContent='center'
                    color='red'
                  >
                    <CardBody gap={20}>
                      <Center marginY='10px'>
                        <Heading fontSize="42px">{product.title}</Heading>
                      </Center>
                      <Center>
                        <Text>{product.description}</Text>
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
