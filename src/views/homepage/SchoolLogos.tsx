import { Card, Flex, VStack, Wrap, WrapItem, Text, Image, Box } from '@chakra-ui/react';
import React from 'react';

const Logos = () => {
    const dom: React.ReactNode[] = [];
    for (let i=0; i<20; i++) {
        dom.push(
            <WrapItem key={i}>
                <Box bg='transparent'>
                    <Image src={`/homepage/schools/${i + 1}.jpg`} alt={`${i}.jpg`} 
                    width='120px' height='60px' objectFit='contain'/>
                </Box>
          </WrapItem>
        )
    }
    return <>{dom}</>
}

function SchoolLogos() {
  return (
    <Flex width='100%' justifyContent='center'>
     <Wrap align='center' justify='center' spacing='30px' width='1000px'>
        <Logos />
     </Wrap>
    </Flex>
  );
}

export default SchoolLogos;
