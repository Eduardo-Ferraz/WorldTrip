import { Box, Image, Text, Stack } from '@chakra-ui/react'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import { Travel_types } from '../../components/Travel_types'
import Navbar_home from '../../components/Navbar_home'
import { Banner } from '../../components/Banner_home'
import getPhoto from '../services/axios'

import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation, Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

SwiperCore.use([Navigation, Pagination])

type IHit = {
  webformatURL: string;
  likes?: number;
}

type IHits = {
  hits: IHit[];
  total: number;
  totalHits: number;
}

export default function Home()
{
  const [imagesUrl, setImagesUrl] = useState<IHits | null>();

  useEffect(() =>
  {
    const getNewPhoto = async () =>
    {
      const photos = await getPhoto("europa");

      setImagesUrl(photos)
      console.log(photos);
    }

    getNewPhoto();

  }, []);

  return (
    <div>
      <Head>
        <title>WorldTrip</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/airplane.ico" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </Head>

      <main>
        <Navbar_home />
        <Banner bg={["Banner_mobile.png", "Banner.png"]} />
        <Travel_types />
        <Stack justifyContent="center"
          alignItems="center"
          pt={['13vh', '5']}
          color={"dark.headtext"}
          fontSize={['20', '36']}
          >
             <Image src='Divider.png' w={['', '20']}/>
          <Text
          >Vamos nessa?
          </Text>
          <Text
          >Então escolha seu continente
          </Text>
        </Stack>
        <Box
          pt={[5, 0]}
          pb={[0, 5]}
          margin={[0, 10]}
        >
          <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
          >
            <SwiperSlide >
              <Image src='Slider_Continent_Europa.png' w={'100%'} />
            </SwiperSlide>
            <SwiperSlide>
              <Image src='Slider_Continent_America.png'  w={'100%'}/>
            </SwiperSlide>
            <SwiperSlide>
              <Image src='Slider_Continent_Asia.png'  w={'100%'} /> {/* A maior imagem define a altura de todo o Swiper*/}
            </SwiperSlide>
          </Swiper>
        </Box>

      </main>
    </div>
  )
}
