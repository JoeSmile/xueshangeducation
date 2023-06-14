import React from 'react';
import { Flex, Image, chakra} from '@chakra-ui/react';
import {Swiper as _Swiper, SwiperSlide} from 'swiper/react';

const Swiper = chakra(_Swiper);

export type SwiperProps = React.ComponentProps<typeof Swiper>

export default Swiper;
