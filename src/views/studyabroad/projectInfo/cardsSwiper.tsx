import React from 'react';
import {SwiperSlide} from 'swiper/react';

import { Navigation, Pagination, Autoplay } from 'swiper';
import Swiper from '@/components/swiper';
import { Flex, VStack, Image, Text, Box, Card, HStack } from '@chakra-ui/react';

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
        height: '500px',
        textAlign:'center'
      }}
    >
      {
        cards.map((card) => {
          return (
            <SwiperSlide key={card.name}>
              <Card p='10px'>
                <VStack>
                  <Image src={card.imgSrc} alt={card.name}  
                    width='200px' height='200px' 
                    objectFit='cover' />
                  <Text fontSize='20px' fontWeight='600'>{card.name}</Text>
                  <Text fontSize='13px' height='200px'>{card.description}</Text>
                </VStack>
              </Card>
          </SwiperSlide>
          )
        })
      }
    </Swiper>
  );
}

export default CardsSwiper;
