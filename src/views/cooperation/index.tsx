import Layout from '@/components/layout';
import React, { useCallback, useState, useMemo } from 'react';
import { SchoolsTable } from './schoolsTable';
import { Box, Button, HStack, Input, Text } from '@chakra-ui/react';
import {schoolList} from './data';
import { SchoolType, School } from './types';
import Fuse from 'fuse.js';
import { ifError } from 'assert';

type keys = keyof School;

export const Cooperation = ()=> { 
  const [schoolTypes, setSchoolTypes]= useState<SchoolType[]>([])
  const [inputVal, setInputVal] = useState<string>('')

  const selectType = useCallback((type: SchoolType) => {
    const index = schoolTypes.indexOf(type);
    if (index === -1) {
      schoolTypes.push(type)
    } else {
      schoolTypes.splice(index, 1);
    }
    setSchoolTypes([...schoolTypes]);
  }, [schoolTypes]);

  const schoolData = useMemo(()=> {
    const tempSchools = schoolList.filter(school => schoolTypes.length ? schoolTypes.includes(school.type) : true)
    if (inputVal) {
      const options = {
        includeScore: true,
        keys: ['name', 'location', 'majorName', 'lengthOfSchooling', 'quota', 'fee']
      }
      const fuse = new Fuse(tempSchools, options)
      const result = fuse.search(inputVal);

      return result.map(item => item.item) as School[]
    } else {
      return tempSchools
    }
  }, [schoolTypes, inputVal])

  return (
    <Layout>
      <Box >
        <Box p='12px'>
          <Text mb='12px' fontSize='16px' fontWeight='600'>
            筛选条件：
          </Text>
          <HStack spacing={4}>
            <Button fontSize='13px' onClick={() => selectType(SchoolType.FULL_TIME)}
            colorScheme={schoolTypes.includes(SchoolType.FULL_TIME) ? 'blue' : 'gray'}
              >全日制</Button>
            <Button fontSize='13px' onClick={() => selectType(SchoolType.PART_TIME)}
            colorScheme={schoolTypes.includes(SchoolType.PART_TIME) ? 'blue' : 'gray'}
            >非全日制</Button>
            <Input variant='outline'  width='200px' placeholder='请输入要查询的字段'
              onChange={(event)=> setInputVal(event.target.value)}
            />
          </HStack>
        </Box>
      </Box>
      <Box maxH='600px' minH='600px' border='1px solid' borderColor='gray.300' overflow='auto'>
        <SchoolsTable schoolData={schoolData}/>
      </Box>
    </Layout>
  );
}

