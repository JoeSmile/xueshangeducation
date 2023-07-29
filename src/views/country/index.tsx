import Layout from '@/components/layout';
import React from 'react';
import { useRouter } from 'next/router'
// import CountryMenu from '../studyabroad/countryMenu';
import American from './American'
import Hongkong from './Hongkong';

type countriesType = {
  [key: string]: React.ReactNode
}
const countries: countriesType = {
  'american': <American />,
  'hongkong': <Hongkong />
}
export const Country = ()=> {
  const router = useRouter();
  console.log('country', router.query.country);
 
  return (
    <Layout>
      {
        countries[(router?.query?.country as string)]
      }
    </Layout>
  );
}

