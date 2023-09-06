import ImageSwiper from '@/components/imageSwiper';
import Layout from '@/components/layout';
import ModuleWrapper from '@/components/moduleWrapper';
import React from 'react';
import Countries from './Countries';
import Process, { ProcessItem } from './Process';
import { HomePageProcessItem} from './data';
import Seo from '@/components/SEO';
import dynamic from 'next/dynamic'

const Profession = dynamic(() => import('./Profession'))
const OfferExample = dynamic(() => import('./OfferExample'))
const Rank = dynamic(() => import('./Rank'))

const images = [{
  src: '/homepage/swiper/1.jpg'
}, {
  src: '/homepage/swiper/2.jpg'
}]


export const Homepage = ()=> {
  return (
    <Layout>
      <Seo/>

      <ImageSwiper images={images}/>

      <ModuleWrapper bg='white'>
       <Countries />
      </ModuleWrapper>

      <ModuleWrapper bg='#F5F5F5'>
       <Process ProcessItems={HomePageProcessItem}/>
      </ModuleWrapper>

      <ModuleWrapper bg='white' maxW='1200px' margin='0 auto'>
        <Profession />
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
