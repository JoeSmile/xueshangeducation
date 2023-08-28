import {
  VStack,
  HStack,
  Box,
  Text,
} from '@chakra-ui/react';
import React from 'react';


const SchollList = [ {
  title: '4+0留学院校推荐',
  school: [{
    icon: '/cooperation/40/1.png',
    name: '中央财经大学',
  }, {
    icon: '/cooperation/40/2.png',
    name: '上海外国语大学',
  }, {
    icon: '/cooperation/40/3.png',
    name: '暨南大学',
  }, {
    icon: '/cooperation/40/4.png',
    name: '中国传媒大学',
  }, {
    icon: '/cooperation/40/5.png',
    name: '南京审计大学',
  }, {
    icon: '/cooperation/40/6.png',
    name: '上海财经大学',
  }]
},  {
  title: '2+0留学院校推荐',
  school: [{
    icon: '/cooperation/20/1.png',
    name: '对外经贸大学',
  }, {
    icon: '/cooperation/20/2.png',
    name: '北京邮电大学',
  }, {
    icon: '/cooperation/20/3.png',
    name: '上海财经大学',
  }, {
    icon: '/cooperation/20/4.png',
    name: '上海交通大学',
  }, {
    icon: '/cooperation/20/5.png',
    name: '北京科技大学',
  }, {
    icon: '/cooperation/20/6.png',
    name: '中国传媒大学',
  }]
},{
  title: '3+1留学院校推荐',
  school: [{
    icon: '/cooperation/31/1.png',
    name: '北京理工大学',
  }, {
    icon: '/cooperation/31/2.png',
    name: '上海外国语大学',
  }, {
    icon: '/cooperation/31/3.png',
    name: '暨南大学',
  }, {
    icon: '/cooperation/31/4.png',
    name: '中央财经大学',
  }, {
    icon: '/cooperation/31/5.png',
    name: '济南大学',
  }, {
    icon: '/cooperation/31/6.png',
    name: '广东财经大学',
  }]
},{
  title: '2+2留学院校推荐',
  school: [{
    icon: '/cooperation/22/1.png',
    name: '上海大学',
  }, {
    icon: '/cooperation/22/2.png',
    name: '北京理工大学',
  }, {
    icon: '/cooperation/22/3.png',
    name: '中央财经大学',
  }, {
    icon: '/cooperation/22/4.png',
    name: '集美大学',
  }, {
    icon: '/cooperation/22/5.png',
    name: '吉林大学',
  }, {
    icon: '/cooperation/22/6.png',
    name: '武汉理工大学',
  }]
}, ]

function SchoolRecommend() {
  return (
    <VStack>
      <Text fontSize='40px' fontWeight='600' color='#0D0E67' marginBottom='20px'>中外合作留学院校推荐</Text>
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
                        backgroundRepeat='no-repeat'
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
