import React from 'react';
import Slider from 'react-slick';
import { Show, Hide } from '@chakra-ui/react'
import
{
  Box,
} from '@chakra-ui/react';


interface BannerProps {
  bg: string[]
}

export function Banner(props: BannerProps)
{
  return (
    <Box
      position={'absolute'}
      height={'400px'}
      width={'full'}
      overflow={'hidden'}>
      {/* Slider */}
        <Slider >
          <Box
            height={"400px"}
            position="relative"
            backgroundPosition="flex"
            backgroundRepeat="no-repeat"
            backgroundSize="100%"
            backgroundImage={props.bg}>
          </Box>
        </Slider>
    </Box>
  );
}
