import React from 'react';
import Slider from 'react-slick';
import { Show, Hide } from '@chakra-ui/react'
import
{
  Box,
  Flex,
  Text
} from '@chakra-ui/react';


interface BannerProps
{
  bg: string
}

export function Banner(props: BannerProps)
{
  return (
    <Flex
      height={['200', '500']}
      overflow={'hidden'}
      backgroundRepeat="no-repeat"
      backgroundSize="100%"
      backgroundImage={props.bg}
      alignItems="center"
    ><Text
      color={"white"}
      fontSize={['30px', '48px']}
      as='b'
      mt={['0', '32']}
    >Europa</Text>
    </Flex>
  );
}
