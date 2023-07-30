import {
  VStack,
  Select,
  Box,
  Image,
  Text,
  Button,
} from '@chakra-ui/react';
import React, { useState } from 'react';


const countryData = [{
  name: '美国',
  flag: '/country/USA (1).png',
  bgImage: '/country/USA.png',
}, {
  name: '英国',
  flag: '/country/UK (1).png',
  bgImage: '/country/UK.png',
}, {
  name: '新西兰',
  flag: '/country/New Zealand (1).png',
  bgImage: '/country/New Zealand.png',
}, {
  name: '新加坡',
  flag: '/country/Singapore (1).png',
  bgImage: '/country/Singapore.png',
}, {
  name: '加拿大',
  flag: '/country/Canada (1).png',
  bgImage: '/country/Canada.png',
}, {
  name: '澳大利亚',
  flag: '/country/Australia.png',
  bgImage: '/country/Australia.jpg',
}, {
  name: '香港',
  flag: '/country/Hong Kong.png',
  bgImage: '/country/Honkong.png',
}]

interface Country {
  name: string;
  flag: string;
  bgImage: string;
}

function Overview() {
  const [current, setCurrent] = useState<Country>({
    name: '美国',
    flag: '/country/USA (1).png',
    bgImage: '/country/USA.png',
  })
  const {
    name,
    flag,
    bgImage,
  } = current

  const onCountryChange = (e: any) => {
    console.log('data show', e)
    countryData.forEach(c => {
      if(c.name === e.target.value) {
        setCurrent(c)
      }
    })
  }

  return (
    <Box
      height='500px'
      position='relative'
    >
      <Box
        zIndex='11'
        position='relative'
        marginX='100px'
        paddingY='28px'
      >
        <VStack alignItems='unset'>
          <Box display='flex' alignItems='center' marginBottom='64px'>
            <Image src={flag} width='60px' height='50px' marginRight='10px' alt='coutry flag' />
            <Select
              variant='unstyled'
              width='200px'
              size='lg'
              defaultValue='美国'
              onChange={ onCountryChange }
            >
              <option value='美国'>美国留学频道</option>
              <option value='英国'>英国留学频道</option>
              <option value='新西兰'>新西兰留学频道</option>
              <option value='加拿大'>加拿大留学频道</option>
              <option value='新加坡'>新加坡留学频道</option>
              <option value='澳大利亚'>澳大利亚留学频道</option>
              <option value='香港'>香港留学频道</option>
            </Select>
          </Box>
          <Box fontWeight='600' fontSize='36px' marginBottom='64px'>
            <Text>全面解析</Text>
            <Text>{`开启${name}留学之旅`}</Text>
          </Box>
          <Box as='button' bg='#D40014' color='#fff' fontWeight='bold' px='4' h={10} w='200px'>立即咨询</Box>
        </VStack>
      </Box>
      <Box
        height='100%'
        width='57%'
        position='absolute'
        left='0'
        top='0'
        zIndex='1'
      >
        <Image src='/country/shadow.png' objectFit='fill' objectPosition='center center' width='100%' height='100%' alt='shadow' />
      </Box>
      <Box
        height='100%'
        width='63.38%'
        position='absolute'
        right='0'
        top='0'
      >
        <Image src={bgImage} objectFit='fill' objectPosition='center center' width='100%' height='100%' alt='background' />
      </Box>
      
    </Box>
  )
}

export default Overview;
