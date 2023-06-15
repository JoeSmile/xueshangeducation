import ImageSwiper from '@/components/imageSwiper';
import Layout from '@/components/layout';
import ModuleWrapper from '@/components/moduleWrapper';
import React from 'react';
import ProjectsList from './ProjectsList';
import Services from './Services';
import Advanced from './Advanced';
import SchoolLogos from './SchoolLogos';

const images = [{
  src: '/homepage/swiper/1.jpg'
}, {
  src: '/homepage/swiper/2.jpg'
},{
  src: '/homepage/swiper/3.jpg'
},{
  src: '/homepage/swiper/4.jpg'
}]

export const Homepage = ()=> {
  return (
    <Layout>
      <ImageSwiper images={images}/>

      <ModuleWrapper title='精选产品' bg='white'>
       <ProjectsList />
      </ModuleWrapper>

      <ModuleWrapper title='七大服务体系'>
       <Services />
      </ModuleWrapper>

      <ModuleWrapper title='行业优势' bg='white'>
       <Advanced />
      </ModuleWrapper>


      <ModuleWrapper title='合作院校'>
       <SchoolLogos/>
      </ModuleWrapper>
    </Layout>
  );
}
