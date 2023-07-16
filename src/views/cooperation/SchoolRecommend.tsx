import {
  VStack,
  HStack,
  Box,
  Text,
} from '@chakra-ui/react';
import React from 'react';


const SchollList = [{
  title: '2+2留学院校推荐',
  school: [{
    icon: '/logo.png',
    name: '北京外国语大学',
  }, {
    icon: '/logo.png',
    name: '上海外国语大学',
  }, {
    icon: '/logo.png',
    name: '中央财经大学',
  }, {
    icon: '/logo.png',
    name: '中国传媒大学',
  }, {
    icon: '/logo.png',
    name: '西南政法大学',
  }, {
    icon: '/logo.png',
    name: '华南师范大学',
  }]
}, {
  title: '3+2留学院校推荐',
  school: [{
    icon: '/logo.png',
    name: '北京外国语大学',
  }, {
    icon: '/logo.png',
    name: '上海外国语大学',
  }, {
    icon: '/logo.png',
    name: '中央财经大学',
  }, {
    icon: '/logo.png',
    name: '中国传媒大学',
  }, {
    icon: '/logo.png',
    name: '西南政法大学',
  }, {
    icon: '/logo.png',
    name: '华南师范大学',
  }]
}]

function SchoolRecommend() {
  return (
    <VStack>
      <Text fontSize='40px' fontWeight='600' color='#FF5B0B' marginBottom='20px'>中外合作留学院校推荐</Text>
      <VStack>
        {
          SchollList.map((schoolItem, schoolIndex) => (
            <HStack key={schoolIndex} bg='#fff' borderRadius='10px' marginBottom='20px'>
              <Box
                backgroundImage='/logo.png'
                height='180px'
                width='240px'
                backgroundPosition='center'
                backgroundSize='cover'
                alignItems='center'
                justifyContent='center'
                marginRight='40px'
                display='flex'
                justifyItems='center'
              >
                <Box as='button' bg='#FF8A00' borderRadius='50px' color='#fff' h='6' w='160px'>{schoolItem.title}</Box>
              </Box>
              {
                schoolItem.school.map((item, index) => (
                  <Box
                    key={index}
                    border='1px solid #3E4FA9'
                    borderRadius='5px'
                    padding='10px'
                    marginRight='16px'
                  >
                    <VStack>
                      <Box
                        backgroundImage={item.icon}
                        height='90px'
                        width='120px'
                        backgroundPosition='center'
                        backgroundSize='contain'
                        alignItems='center'
                        justifyContent='center'
                      />
                    </VStack>
                    <Text fontSize='14px' fontWeight='600' textAlign='center'>{item.name}</Text>
                  </Box>
                ))
              }
            </HStack>
          ))
        }
      </VStack>
    </VStack>
  )
}

export default SchoolRecommend;
