import { Flex, Text, Stack, Show, Grid } from '@chakra-ui/react'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import { Banner } from '../components/Banner'
import Navbar from '../components/Navbar'
import { Card_cidades } from '../components/Card_cidades'
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

export default function America()
{
  const [imagesUrl, setImagesUrl] = useState<IHits[] | null>();

  useEffect(() =>
  {
    const getNewPhoto = async (pesquisa: string[]) =>
    {
      let imageTemp;
      const photos: IHits[] = [];

      for(let i = 0; i < pesquisa.length; i++){
        imageTemp = await getPhoto(pesquisa[i]);
        if(imageTemp!==null){
          photos.push(imageTemp);
        }
      }

      setImagesUrl(photos)
      console.log(photos);
    }

    getNewPhoto(["sydney sightseeing", "auckland", "malé sightseeing", "canberra country", "wellington"]);

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
        <Navbar />
        <Banner bg="Oceania.png" text="Oceania" />
        <Flex h={80} justifyContent="center" alignItems={"center"} bg="white">
          <Stack direction={'row'}
            justifyContent="center"
            alignItems="center"
            spacing={'45px'}
          >
            <Show above='sm'>
              <Text mt={'10%'} pr={12} color='dark.headtext' w={'600px'} fontSize='24'>
                Oceania é um continente composto por vários grupos de ilhas do oceano Pacífico, a
                sudeste da Ásia. A maior parte de suas terras fica no Hemisfério Sul do planeta. A maior e
                mais populosa das nações é a Austrália, que consiste também na principal economia do
                continente.
              </Text>
              <Stack justifyContent="center" alignItems={"center"} mt={10}>
                <Text as='b' color='highlight' fontSize='48'>
                  14
                </Text>
                <Text as='b' color='dark.headtext'>
                  países
                </Text>
              </Stack>
              <Stack justifyContent="center" alignItems={"center"} >
                <Text as='b' color='highlight' fontSize='48'>
                  38
                </Text>
                <Text as='b' color='dark.headtext'>
                  línguas
                </Text>
              </Stack>
              <Stack justifyContent="center" alignItems={"center"} >
                <Text as='b' color='highlight' fontSize='48'>
                  16
                </Text>
                <Text as='b' color='dark.headtext'>
                  cidades +100 ⓘ
                </Text>
              </Stack>
            </Show>
          </Stack>

          <Stack direction={'column'}
            justifyContent="center"
            alignItems="center"
          >

            <Show below='sm'>
              <Text justifyContent="space-between" color='dark.headtext' w={'300px'} fontSize='14' pb={30}>
                Oceania é um continente composto por vários grupos de ilhas do oceano Pacífico, a
                sudeste da Ásia. A maior parte de suas terras fica no Hemisfério Sul do planeta. A maior e
                mais populosa das nações é a Austrália, que consiste também na principal economia do
                continente.
              </Text>
              <Stack direction={'row'} spacing={'40px'}>
                <Stack justifyContent="center" alignItems={"center"} >
                  <Text as='b' color='highlight' fontSize='32'>
                    14
                  </Text>
                  <Text color='dark.headtext'>
                    países
                  </Text>
                </Stack>
                <Stack justifyContent="center" alignItems={"center"} >
                  <Text as='b' color='highlight' fontSize='32'>
                    38
                  </Text>
                  <Text color='dark.headtext'>
                    línguas
                  </Text>
                </Stack>
                <Stack justifyContent="center" alignItems={"center"} >
                  <Text as='b' color='highlight' fontSize='32'>
                    16
                  </Text>
                  <Text color='dark.headtext' >
                    cidades +100 ⓘ
                  </Text>
                </Stack>
              </Stack>
            </Show>
          </Stack>
        </Flex>
        
        <Text color='dark.headtext' fontSize='36'  ml='10%' mt='5%' mb='5%'>Cidades +100</Text>

        {imagesUrl !== null && imagesUrl !== undefined &&( 
          <>
            <Grid mb = {20} templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)', 'repeat(3, 1fr)', 'repeat(4, 1fr)']} gap={6} ml='10%' mr='10%'>
              <Card_cidades 
                bg={imagesUrl[0].hits[Math.floor(Math.random() * imagesUrl[0].hits.length)].webformatURL}
                title='Sidney' 
                text='Austrália' 
                flag ='https://cdn-icons-png.flaticon.com/512/323/323367.png'
              />
              <Card_cidades 
                bg={imagesUrl[1].hits[Math.floor(Math.random() * imagesUrl[1].hits.length)].webformatURL} 
                title='Auckland' 
                text='Nova Zelândia' 
                flag ='https://cdn-icons-png.flaticon.com/512/197/197589.png'
              />
              <Card_cidades 
                bg={imagesUrl[2].hits[Math.floor(Math.random() * imagesUrl[2].hits.length)].webformatURL} 
                title='Malé' 
                text='Maldivas' 
                flag ='https://cdn-icons-png.flaticon.com/512/197/197404.png'
              />
              <Card_cidades 
                bg={imagesUrl[3].hits[Math.floor(Math.random() * imagesUrl[3].hits.length)].webformatURL} 
                title='Camberra' 
                text='Austrália' 
                flag ='https://cdn-icons-png.flaticon.com/512/323/323367.png'
              />
              <Card_cidades 
                bg={imagesUrl[4].hits[Math.floor(Math.random() * imagesUrl[4].hits.length)].webformatURL} 
                title='Wellington' 
                text='Nova Zelândia' 
                flag ='https://cdn-icons-png.flaticon.com/512/197/197589.png'
              />
            </Grid>
          </>
        )}
      </main>
    </div>
  )
}