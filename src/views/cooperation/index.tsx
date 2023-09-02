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
import ImageSwiper from '@/components/imageSwiper';
import Seo from '@/components/SEO';
import { OffersCountry } from '../country/components/data';

const images = [{
  src: '/homepage/swiper/1.jpg'
}, {
  src: '/homepage/swiper/2.jpg'
}]

export const Cooperation = ()=> {
  return (
    <Layout>
      <Seo/>

      <ImageSwiper images={images}/>

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
        <OfferExample offerList={OffersCountry['cooperation']}/>
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
