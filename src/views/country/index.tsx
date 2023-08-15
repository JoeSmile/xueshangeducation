import Layout from '@/components/layout';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router'
// import CountryMenu from '../studyabroad/countryMenu';
import American from './American'
import Hongkong from './Hongkong';
import CountryLayout from './CountryLayout';
import ModuleWrapper from '@/components/moduleWrapper';
import CountryTitle from './components/CountryTitle';
import { usePathname } from 'next/navigation';
import Reasons from './components/Reasons';
import { ApplyForData, ReasonsData, TimeLines } from './components/data';
import Applyfor from './components/Applyfor';
import Process from '../homepage/Process';
import { HomePageProcessItem } from '../homepage/data';
import { Box } from '@chakra-ui/react';
import ApplyProblems from './components/ApplyProblems';
import { countryData } from './const';

type countriesType = {
  [key: string]: React.ReactNode
}
const countries: countriesType = {
  'USA': <American />,
  'HonKong': <Hongkong />
}

export const Country = ()=> {
  const router = useRouter();
  const pathname = usePathname();
  const [country, setCountry]= useState('USA');
  const [countryName, setCountryName] = useState('美国')
  useEffect(() => {
    setCountry((router?.query?.country ?? 'USA') as string);
    const name = countryData.filter(item => item.path == router?.query?.country)[0];
    setCountryName(name.name);
  }, [router]);

  return (
    <Layout>
      <CountryLayout>
        <ModuleWrapper bg='white' maxWidth='1200px' margin='0 auto'>
          <CountryTitle />
        </ModuleWrapper>

        <ModuleWrapper >
          <Reasons ReasonItems={ReasonsData[country].reasons} title={ReasonsData[country].title}/>
        </ModuleWrapper>
        
        <ModuleWrapper >
          <Applyfor ProcessItem={ApplyForData[country]}/>
        </ModuleWrapper>

        <ModuleWrapper bg='#F5F5F5'>
          <Process ProcessItems={HomePageProcessItem}/>
        </ModuleWrapper>

        <ModuleWrapper bg='#F5F5F5'>
          <ApplyProblems applyItems={TimeLines[country]} country={countryName}/>
        </ModuleWrapper>
        
        <Box>------------------</Box>
      </CountryLayout>
      {
        countries[(router?.query?.country as string)]
      }
    </Layout>
  );
}

