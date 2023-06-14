import { Flex, Image } from '@chakra-ui/react';
import React from 'react';
import {SwiperSlide} from 'swiper/react';


import { Navigation, Pagination, Autoplay } from 'swiper';
import Swiper from '../swiper';

type image = {
  src: string
}

export type ImageSwiperProps = {
  images: image[]
}


function ImageSwiper(props:ImageSwiperProps) {
  const { images } = props;
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      loop
      spaceBetween={50}
      slidesPerView={1}
      threshold={40}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      autoplay={{
        delay: 8000,
        stopOnLastSlide: false,
      }}
      style={{
        width: '100%',
        height: '400px',
        border: '1px solid',
        textAlign:'center'
      }}
    >
      {
        images.map((image) => {
          return (
            <SwiperSlide>
              <Flex width='100%' height='400px' justifyContent='center'>
                <Image src={image.src} alt={image.src}  
                  width='100%' height='100%' 
                  objectFit='cover'/>
              </Flex>
          </SwiperSlide>
          )
        })
      }
    </Swiper>
  );
}

export default ImageSwiper;
