import Layout from '@/components/layout';
import React from 'react';
import CountryMenu from './countryMenu';
import ProjectInfo from './projectInfo';
import ModuleWrapper from '@/components/moduleWrapper';
import Advanced from './advanced';

export const Studyabroad = ()=> {
  return (
    <Layout>
      <CountryMenu />
      <ModuleWrapper title='项目介绍' mb='30px'>
        <ProjectInfo />
      </ModuleWrapper>

      <ModuleWrapper title='项目优势'>
        <Advanced />
      </ModuleWrapper>
    </Layout>
  );
}

