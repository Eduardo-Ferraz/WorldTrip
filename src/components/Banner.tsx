import React from 'react';
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
  text: string
}

export function Banner(props: BannerProps)
{
  return (
    <Flex
      height={['150', '66vh']}
      overflow={'hidden'}
      backgroundRepeat="no-repeat"
      backgroundSize="100%"
      objectFit='cover'
      backgroundImage={props.bg}
      alignItems="center"
    ><Text
      color={"white"}
      fontSize={['30px', '48px']}
      as='b'
      mt={['', '40']}
      ml={[30]}
      pl={100}
      h={['', '2']}
    >{props.text}</Text>
    </Flex>
  );
}
