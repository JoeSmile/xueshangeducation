import Layout from '@/components/layout';
import ModuleWrapper from '@/components/moduleWrapper';
import React from 'react';
import Overview from './Overview';
import AbroadMode from './StudyAbroadMode'
import SchoolRecommend from './SchoolRecommend'
import Process from '../../views/homepage/Process';
import OfferExample from '../../views/homepage/OfferExample';
import Rank from '../../views/homepage/Rank';
import Consult from '../../views/homepage/Consult'

export const Cooperation = ()=> {
  return (
    <Layout>
      <ModuleWrapper bg='white'>
        <Overview />
      </ModuleWrapper>

      <ModuleWrapper bg='white'>
        <AbroadMode />
      </ModuleWrapper>

      <ModuleWrapper bg='#F5F5F5'>
        <SchoolRecommend />
      </ModuleWrapper>

      <ModuleWrapper bg='#F5F5F5'>
       <Process />
      </ModuleWrapper>

      <ModuleWrapper bg='#F5F5F5'>
        <OfferExample/>
      </ModuleWrapper>

      <ModuleWrapper bg='white'>
        <Rank />
      </ModuleWrapper>

      {/* <ModuleWrapper bg='#F5F5F5'>
        <Consult />
      </ModuleWrapper> */}
    </Layout>
  );
}
