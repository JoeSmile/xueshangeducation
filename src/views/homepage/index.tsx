import ImageSwiper from '@/components/imageSwiper';
import Layout from '@/components/layout';
import ModuleWrapper from '@/components/moduleWrapper';
import React from 'react';
import Countries from './Countries';
import Process, { ProcessItem } from './Process';
import Profession from './Profession';
import OfferExample from './OfferExample';
import Rank from './Rank';
import Consult from './Consult'

const images = [{
  src: '/homepage/swiper/1.jpg'
}, {
  src: '/homepage/swiper/2.jpg'
}]

const HomePageProcessItem: ProcessItem[] = [{
  title: '升学规划',
  description: [
    '确定申请方向',
    '时间与背景规划',
    '未来的发展方向',
  ],
}, {
  title: '硬件条件提升',
  description: [
    '定制化学术辅导',
    '标准化考试规划',
    '学分课程',
  ],
}, {
  title: '个性化软性能力提升',
  description: [
    '高含金量国际竞赛',
    '海内/外科研论文',
    '项目经历或实习',
    '职场就业力',
  ],
}, {
  title: '院校申请',
  description: [
    '个性化申请材料清单',
    '奖学金申请',
    '面试辅导',
  ],
}, {
  title: '收获录取信与签证',
  description: [
    '择校定校',
    '缴费指导',
    '签证材料指导',
    '面签辅导',
  ],
}, {
  title: '后续服务',
  description: [
    '入学指导',
    '行前指导',
    '升学指导',
    '危机处理',
  ],
}, {
  title: '职业规划',
  description: [
    '学历学位认证',
    '海外实习与就业',
    '归国实习与就业',
  ],
}, ];

export const Homepage = ()=> {
  return (
    <Layout>
      <ImageSwiper images={images}/>

      <ModuleWrapper bg='white'>
       <Countries />
      </ModuleWrapper>

      <ModuleWrapper bg='#F5F5F5'>
       <Process ProcessItems={HomePageProcessItem}/>
      </ModuleWrapper>

      <ModuleWrapper bg='white'>
        <Profession />
      </ModuleWrapper>

      <ModuleWrapper bg='#F5F5F5'>
        <OfferExample/>
      </ModuleWrapper>

      <ModuleWrapper bg='white'>
        <Rank />
      </ModuleWrapper>

      <ModuleWrapper bg='#F5F5F5'>
        <Consult />
      </ModuleWrapper>
    </Layout>
  );
}
