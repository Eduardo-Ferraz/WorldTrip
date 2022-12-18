import { Image } from '@chakra-ui/react'
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
  likes?: number ;
}

type IHits = {
  hits: IHit[];
  total: number;
  totalHits: number;
}

export default function Home()
{
  const [imagesUrl, setImagesUrl] = useState<IHits | null>();

  useEffect(() => {
    const getNewPhoto = async () => {
    const photos = await getPhoto("europa");
      
    setImagesUrl(photos)
    console.log(photos);   
    }

    getNewPhoto();
    
  },[]);

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
        <Navbar_home/>
        <Banner bg ={["Banner_mobile.png", "Banner_mobile.png", "Banner.png"]} />
        <Travel_types/>

        <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
          >
            <SwiperSlide>
              <Image src={imagesUrl?.hits[0].webformatURL} /> 
            </SwiperSlide>
            <SwiperSlide>
              <Image src={imagesUrl?.hits[1].webformatURL} /> 
            </SwiperSlide>
            <SwiperSlide>
              <Image src={imagesUrl?.hits[2].webformatURL} /> {/* A maior imagem define a altura de todo o Swiper*/}
            </SwiperSlide>
          </Swiper>
      </main>
    </div>
  )
}
