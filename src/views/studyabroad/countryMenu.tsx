import { HStack, Button, Text } from '@chakra-ui/react';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/router';
import React from 'react';
const countries = [{
  display: '英国',
  name: 'england'
}, {
  display: '美国',
  name: 'usa'
}, {
  display: '澳大利亚',
  name: 'american'
}, {
  display: '加拿大',
  name: 'canada'
}, {
  display: '港澳',
  name: 'hkmacao'
}, {
  display: '爱尔兰/新西兰',
  name: 'irelandnewzealand'
}]

function CountryMenu() {
  const router = useRouter()
  const pathName = usePathname()
  const currentCountry = router.query.country
  return (
    <HStack my='20px'>
      <Text mr='10px'>选择国家/地区:</Text>
      <Button colorScheme='blue' 
          variant='outline'
          isActive={pathName === '/studyabroad'}
        onClick={() => router.push('/studyabroad')}>不限</Button>
      {
      countries.map(country => 
        <Button key={country.name} 
          colorScheme='blue' 
          variant='outline'
          isActive={currentCountry === country.name}
          onClick={() => router.push({
            pathname: '/studyabroad/[country]',
            query: {
              country: country.name
            }
          })}
        >
          {country.display}
        </Button>
      )}
    </HStack>
  );
}

export default CountryMenu;
