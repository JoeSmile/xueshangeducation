import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  Text,
  TableCaption,
  TableContainer,
  HStack,
  Box,
} from '@chakra-ui/react'

import { School, SchoolType } from './types';
import React from 'react';

type ColumnType = {
  display: string,
  key: string,
  render?: (parameter?: any)=> JSX.Element | React.ReactNode
}

const columns: ColumnType[] =  [{
  display: '学校名称',
  key: 'name'
}, {
  display: '国家/城市',
  key: 'location'
}, {
  display: '专业',
  key: 'majorName'
}, {
  display: '学制',
  key: 'type',
  render: (type: SchoolType) => <Text>{type === SchoolType.FULL_TIME ? "全日制": "非全日制"}</Text>
}, {
  display: '学年',
  key: 'lengthOfSchooling'
}, {
  display: '名额',
  key: 'quota'
}, {
  display: '学费',
  key: 'fee'
}];

export type SchoolsTableProps = {
  schoolData: School[]
}

export const SchoolsTable = ({schoolData}: SchoolsTableProps) => {
  if (!schoolData.length) {
    return <Box width='100%' textAlign='center' pt='50px'>无查询结果，请重新输入查询条件</Box>
  }
  return (
    <TableContainer>
    <Table variant='simple' fontSize='13px'>
      <Thead>
        <Tr>
          <Th width='50px!important'>序号</Th>
          {
            columns.map((column, idx) => {
              return (
                <Th key={idx}>{column.display}</Th>
              )
            })
          }
        </Tr>
      </Thead>
      <Tbody>
        {
            schoolData.map((school, index) => {
              return <Tr key={school.name + index} >
                  <Td width='50px!important'>{index + 1}</Td>
                  {
                  columns.map(column => {
                    return (
                      <Td key={school.name + '_' + column.display}>
                        {school[column?.key] ? column['render'] ? column['render'](school[column.key]) : school[column.key] : ''}
                      </Td>
                    )
                  })


                  }
              </Tr>
            })
        }
      </Tbody>
    </Table>
  </TableContainer>
  )
}
