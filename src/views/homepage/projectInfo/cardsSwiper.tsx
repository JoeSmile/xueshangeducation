import React from 'react';
import {SwiperSlide} from 'swiper/react';

import { Navigation, Pagination, Autoplay } from 'swiper';
import Swiper from '@/components/swiper';
import { Flex, VStack, Image, Text, Box } from '@chakra-ui/react';

type Card = {
  name: string,
  imgSrc: string,
  description: string
}
type CardsSwiper = {
  cards: Card[]
}

function CardsSwiper(props: CardsSwiper) {
  const { cards } = props

  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      loop
      spaceBetween={50}
      slidesPerView={4}
      threshold={40}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      autoplay={{
        delay: 5000,
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
        cards.map((card) => {
          return (
            <SwiperSlide>
              <VStack justifyContent='center'>
                <Box>
                  <Image src={card.imgSrc} alt={card.name}  
                    width='200px' height='200px' 
                    objectFit='cover' />
                    <Text>{card.name}</Text>
                </Box>
              
                <Text>{card.description}</Text>
              </VStack>
          </SwiperSlide>
          )
        })
      }
    </Swiper>
  );
}

export default CardsSwiper;
