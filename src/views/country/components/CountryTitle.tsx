import {
  VStack,
  Select,
  Box,
  Text,
  Button,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React, { use, useEffect, useState } from 'react';
import { Country, countryData } from '../const';
import { useFormStore } from '@/store/formStore';

import Image from 'next/image';

function Overview() {
  const [current, setCurrent] = useState<Country>(countryData[0]);
  const onOpen = useFormStore(s => s.onOpen);
  const router = useRouter();
  const onCountryChange = (e: any) => {
    router.push(e.target.value);
  }
  useEffect(() => {
    if (router?.query?.country) {
      const target = countryData.filter(country => country.path === router?.query?.country );
      setCurrent(target[0]);
    }
  }, [router])

  return (
    <Box
      height='500px'
      position='relative'
      paddingBottom='30px'
    >
      <Box
        zIndex='11'
        position='relative'
        marginX='100px'
        paddingY='28px'
      >
        <VStack alignItems='unset'>
          <Box display='flex' alignItems='center' marginBottom='64px'>
            <Image src={current.flag} width={60} height={50} 
              style={{
                marginRight: '10px'
              }}
             alt='coutry flag' />
            <Select
              variant='unstyled'
              width='200px'
              size='lg'
              value={current.path}
              onChange={onCountryChange}
            >
              <option value='USA'>美国留学频道</option>
              <option value='UK'>英国留学频道</option>
              <option value='NewZealand'>新西兰留学频道</option>
              <option value='Canada'>加拿大留学频道</option>
              <option value='Singapore'>新加坡留学频道</option>
              <option value='Australia'>澳大利亚留学频道</option>
              <option value='HonKong'>香港留学频道</option>
            </Select>
          </Box>
          <Box fontWeight='600' fontSize='36px' marginBottom='64px'>
            <Text>全面解析</Text>
            <Text>{`开启${current.name}留学之旅`}</Text>
          </Box>
          <Box as='button' bg='#D40014' color='#fff' fontWeight='bold' px='4' h={10} w='200px' onClick={() => onOpen()}>立即咨询</Box>
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
        <Image src='/country/shadow.png' style={{
          objectPosition: 'center center'
        }} fill alt='shadow' />
      </Box>
      <Box
        height='100%'
        width='63.38%'
        position='absolute'
        right='0'
        top='0'
      >
        {
          current.bgImage && <Image src={current.bgImage} style={{
            objectPosition: 'center center'
          }} fill alt='background' />
        }
     
      </Box>
      
    </Box>
  )
}

export default Overview;
