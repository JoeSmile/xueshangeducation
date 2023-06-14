import ImageSwiper from '@/components/imageSwiper';
import Layout from '@/components/layout';
import React from 'react';
import ProjectInfo from './projectInfo';

const images = [{
  src: '/assets/1.jpg'
}, {
  src: '/assets/2.jpg'
},{
  src: '/assets/3.jpg'
},{
  src: '/assets/4.jpg'
}]

export const Homepage = ()=> {
  return (
    <Layout>
      <ImageSwiper images={images}/>
      <ProjectInfo />
    </Layout>
  );
}
