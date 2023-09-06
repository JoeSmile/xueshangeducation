import { Flex } from '@chakra-ui/react';
import React from 'react';
import {SwiperSlide} from 'swiper/react';
import { useFormStore } from '@/store/formStore';

import Image from 'next/image';

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
  const onOpen = useFormStore(s => s.onOpen);

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
        delay: 3000,
        stopOnLastSlide: false,
      }}
      style={{
        width: '100%',
        height: '500px',
        textAlign:'center',
        maxWidth:'1200px'
      }}
    >
      {
        images.map((image, index) => {
          return (
            <SwiperSlide key={index}>
              <Flex width='100%' height='500px' 
                cursor='pointer'
                justifyContent='center' onClick={() => onOpen()}>
                <Image src={image.src} alt={image.src}  
                  fill
                  style={{
                    objectFit: 'cover', // cover, contain, none
                  }}
                />
              </Flex>
          </SwiperSlide>
          )
        })
      }
    </Swiper>
  );
}

export default ImageSwiper;
