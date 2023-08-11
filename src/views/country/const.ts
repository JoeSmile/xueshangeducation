
export interface Country {
    name: string;
    flag: string;
    bgImage?: string;
    path: string;
  }
  
export const countryData: Country[] = [{
    name: '美国',
    flag: '/country/USA (1).png',
    bgImage: '/country/USA.png',
    path: 'USA'
  }, {
    name: '英国',
    flag: '/country/UK (1).png',
    bgImage: '/country/UK.jpg',
    path: 'UK'
  }, {
    name: '新西兰',
    flag: '/country/New Zealand (1).png',
    bgImage: '/country/NewZealand.jpg',
    path: 'NewZealand'
  }, {
    name: '新加坡',
    flag: '/country/Singapore (1).png',
    bgImage: '/country/Singapore.jpg',
    path: 'Singapore'
  }, {
    name: '加拿大',
    flag: '/country/Canada (1).png',
    bgImage: '/country/Canada.jpg',
    path: 'Canada'
  }, {
    name: '澳大利亚',
    flag: '/country/Australia.png',
    bgImage: '/country/Australia.jpg',
    path: 'Australia'
  }, {
    name: '港澳',
    flag: '/country/Hong Kong.png',
    bgImage: '/country/Honkong.jpg',
    path: 'HonKong'
  }];