import Layout from '@/components/layout';
import React, { useEffect } from 'react';
import { useRouter } from 'next/router'
// import CountryMenu from '../studyabroad/countryMenu';
import American from './American'
import Hongkong from './Hongkong';
import CountryLayout from './CountryLayout';
import ModuleWrapper from '@/components/moduleWrapper';
import CountryTitle from './components/CountryTitle';
import { usePathname } from 'next/navigation';

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
  console.log('country', router.query.country);

  useEffect(() => {
    console.log('pathname-----', router?.query?.country)
  }, [router]);

  return (
    <Layout>
      <CountryLayout>
        <ModuleWrapper bg='white'>
          <CountryTitle />
        </ModuleWrapper>
      </CountryLayout>
      {
        countries[(router?.query?.country as string)]
      }
    </Layout>
  );
}

