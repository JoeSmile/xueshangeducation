import { Box, Flex } from '@chakra-ui/react';
import React from 'react';

function CountryLayout({children}: {children: React.ReactNode}) {
  return (
    <Flex width='100%' justify='center'>
      <Box  width='100%'>
        {children}
      </Box>
    </Flex>
  );
}

export default CountryLayout;
