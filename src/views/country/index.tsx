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
import { ReasonsData } from './components/data';

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
  useEffect(() => {
    setCountry((router?.query?.country ?? 'USA') as string);
  }, [router]);

  return (
    <Layout>
      <CountryLayout>
        <ModuleWrapper bg='white'>
          <CountryTitle />
        </ModuleWrapper>

        <ModuleWrapper bg='white'>
          <Reasons ReasonItems={ReasonsData[country].reasons} title={ReasonsData[country].title}/>
        </ModuleWrapper>
        
      </CountryLayout>
      {
        countries[(router?.query?.country as string)]
      }
    </Layout>
  );
}

