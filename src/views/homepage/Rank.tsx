import {
  VStack,
  Center,
  Box,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { top200Schools } from './top200'

const RankNum = ['1-50', '51-100', '101-150', '151-200']
interface SchoolItem {
  rank: number;
  school: string;
  area: string;
}

function Profession() {
  const [currentNum, setCurrentNum] = useState<Number>(0)
  const [topSchoolData, setTopSchoolData] = useState<SchoolItem[]>(top200Schools.slice(0, 50))

  const onClickNumBtn = (index: any) => {
    setCurrentNum(index)
    setTopSchoolData(top200Schools.slice(index * 50, (index + 1) * 50))
  }
  return (
    <VStack paddingBottom='30px'>
      <Box color='#0D0E67' fontSize='48px' fontWeight='600'>排名篇</Box>
      <Box color='#0D0E67' fontSize='20px' fontWeight='600'>选校定位有门道</Box>
      <Box color='#FF8A00' fontSize='20px' fontWeight='600'>一 2023QS世界大学排名TOP200 一</Box>
      <Center display='flex' width='70%'>
        {
          RankNum.map((num, index) => (
            <Box
              key={index}
              as='button'
              onClick={() => onClickNumBtn(index)}
              bg={currentNum === index ? '#080C6C' : 'transparent'}
              color={currentNum === index ? '#fff' : '#080C6C'}
              borderRadius='50px'
              border='2px solid #080C6C'
              flex='1'
              marginY='20px'
              marginX='50px'
              h='8'
              px='4'
            >{num}</Box>
          ))
        }
      </Center>
      <TableContainer width='90%' height='360px' overflowY='scroll'>
        <Table variant='striped'>
          <Thead bg='#080C6C'>
            <Tr>
              <Th color='#fff' fontSize='14px'>排名</Th>
              <Th color='#fff' fontSize='14px'>学校名称</Th>
              <Th color='#fff' fontSize='14px'>国家/地区</Th>
            </Tr>
          </Thead>
          <Tbody>
            {
              topSchoolData.map(item => (
                <Tr key={item.rank}>
                  <Td>{item.rank}</Td>
                  <Td>{item.school}</Td>
                  <Td>{item.area}</Td>
                </Tr>
              ))
            }
          </Tbody>
        </Table>
      </TableContainer>
      <Box as='button' marginTop='20px' color='#fff' borderRadius='50px' bg='#FF8A00' px={4} h={8}>更多院校排名及解析</Box>
    </VStack>
  )
}

export default Profession;
