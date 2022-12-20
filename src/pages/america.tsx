import { Box, Flex, Input, Text, Image, Button } from '@chakra-ui/react'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar'
import getPhoto from '../services/axios'

type IHit = {
  webformatURL: string;
  likes?: number ;
}

type IHits = {
  hits: IHit[];
  total: number;
  totalHits: number;
}

export default function Europa(){
  const [imagesUrl, setImagesUrl] = useState<IHits | null>();

  useEffect(() => {
    const getNewPhoto = async (pesquisa: string) => {
    const photos = await getPhoto(pesquisa);
      
    setImagesUrl(photos);
    console.log(photos);
    console.log(imagesUrl?.totalHits);
    }

    getNewPhoto("europe");
    
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
        <Navbar/>
        <Flex 
        h="100vh" 
        direction={["column", "row"]}
        justify="center" 
        align="center" 
        bg={["white"]}>
            { imagesUrl !== null && imagesUrl !== undefined &&( 
              <><Image src={imagesUrl.hits[Math.floor(Math.random() * imagesUrl.hits.length)].webformatURL} /></>
            )}
        </Flex>
       
       
      </main>
    </div>
  )
}
