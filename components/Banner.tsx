import React from 'react';
import {
  Box,
  useBreakpointValue,
} from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
// And react-slick as our Carousel Lib
import Slider from 'react-slick';

// Settings for the slider
const settings = {
};

export default function Banner() {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = React.useState<Slider | null>(null);

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: '90%', md: '50%' });
  const side = useBreakpointValue({ base: '30%', md: '40px' });

  // This list contains all the data for carousels
  // This can be static or loaded from a server
  const cards = [
    {
      title: '5 Continentes, infinitas possibilidades.',
      text:
        "Chegou a hora de tirar do papel a viagem que você sempre sonhou.",
    },
  ];

  return (
    <Box
      position={'absolute'}
      height={'400px'}
      width={'full'}
      overflow={'hidden'}>
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((card, index) => (
          <Box
            height={"400px"}
            position="relative"
            backgroundPosition="flex"
            backgroundRepeat="no-repeat"
            backgroundSize="100%"
            backgroundImage={ "Banner.png"}>
            {/* This is the block you need to change, to customize the caption */}
          </Box>
        ))}
      </Slider>
    </Box>
  );
}
