import Layout from '@/components/layout';
import { Flex } from '@chakra-ui/react';
import React from 'react';
import ModuleWrapper from '@/components/moduleWrapper';
import CountryTitle from './components/CountryTitle';
import Reasons from './components/Reasons'
import Applyfor from './components/Applyfor';
import Process from '../homepage/Process';
import OfferExample from '../homepage/OfferExample';
import ApplyProblems from './components/ApplyProblems';

const American = ()=> {
  return (
    <Layout>
      <ModuleWrapper bg='white'>
        <CountryTitle />
      </ModuleWrapper>

      <ModuleWrapper bg='#F5F5F5'>
        <Reasons />
      </ModuleWrapper>

      <ModuleWrapper bg='#F5F5F5'>
        <Applyfor />
      </ModuleWrapper>

      <ModuleWrapper bg='#F5F5F5'>
        <Process />
      </ModuleWrapper>
      
      <ModuleWrapper bg='#F5F5F5'>
        <OfferExample />
      </ModuleWrapper>

      <ModuleWrapper bg='#F5F5F5'>
        <ApplyProblems />
      </ModuleWrapper>
    </Layout>
  );
}


export default American;