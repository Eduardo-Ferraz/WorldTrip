import React from 'react';
import Slider from 'react-slick';
import { Show, Hide } from '@chakra-ui/react'
import
{
  Box,
  Flex,
  Text
} from '@chakra-ui/react';


interface BannerProps {
  bg: string
}

export function Banner(props: BannerProps)
{
  return (
    <Flex
      height={'500px'}
      overflow={'hidden'}
      backgroundRepeat="no-repeat"
      backgroundSize="100%"
      backgroundImage={props.bg}
      alignItems="end"
      ><Text
        color={"dark.headtext"}
        fontSize="48"
      >Europa</Text>
    </Flex>
  );
}
