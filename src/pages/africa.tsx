import { Flex, Text, Stack, Show, Image, Grid } from '@chakra-ui/react'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import { Banner } from '../components/Banner'
import Navbar from '../components/Navbar'
import { Card_cidades } from '../components/Card_cidades'
import getPhoto from '../services/axios'

type IHit = {
  webformatURL: string;
  likes?: number;
}

type IHits = {
  hits: IHit[];
  total: number;
  totalHits: number;
}

export default function Europa()
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

    getNewPhoto(["cape town sightseeing", "Marrocos", "Alexandria", "Luanda", "Dar es salaam"]);

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
        <Banner bg="Africa.jpg" text="África" />
        <Flex h={80} justifyContent="center" alignItems={"center"} bg="white">
          <Stack direction={'row'}
            justifyContent="center"
            alignItems="center"
            spacing={'45px'}
          >
            <Show above='sm'>
              <Text mt={'10%'} pr={12} color='dark.headtext' w={'600px'} fontSize='24'>
              A África é o segundo continente mais populoso do 
              mundo com cerca de um bilhão de pessoas, representando 
              cerca de um sétimo da população mundial, e 54 países independentes. 
              Apresentando uma grande diversidade étnica, cultural, social e política.
              </Text>
              <Stack justifyContent="center" alignItems={"center"} mt={10}>
                <Text as='b' color='highlight' fontSize='48'>
                  54
                </Text>
                <Text as='b' color='dark.headtext'>
                  países
                </Text>
              </Stack>
              <Stack justifyContent="center" alignItems={"center"} >
                <Text as='b' color='highlight' fontSize='48'>
                  197
                </Text>
                <Text as='b' color='dark.headtext'>
                  línguas
                </Text>
              </Stack>
              <Stack justifyContent="center" alignItems={"center"} >
                <Text as='b' color='highlight' fontSize='48'>
                  27
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
              A África é o terceiro continente mais extenso com cerca de 30 milhões de quilômetros
              quadrados, cobrindo 20,3% da área total da terra firme do planeta. É o segundo continente
              mais populoso do mundo com cerca de um bilhão de pessoas, representando cerca de um
              sétimo da população mundial, e 54 países independentes. Apresentando uma grande
              diversidade étnica, cultural, social e política.
              </Text>
              <Stack direction={'row'} spacing={'40px'}>
                <Stack justifyContent="center" alignItems={"center"} >
                  <Text as='b' color='highlight' fontSize='32'>
                    54
                  </Text>
                  <Text color='dark.headtext'>
                    países
                  </Text>
                </Stack>
                <Stack justifyContent="center" alignItems={"center"} >
                  <Text as='b' color='highlight' fontSize='32'>
                    197
                  </Text>
                  <Text color='dark.headtext'>
                    línguas
                  </Text>
                </Stack>
                <Stack justifyContent="center" alignItems={"center"} >
                  <Text as='b' color='highlight' fontSize='32'>
                    32
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
                title='Cidade do Cabo' 
                text='África do Sul' 
                flag ='https://cdn-icons-png.flaticon.com/512/197/197562.png'
              />
              <Card_cidades 
                bg={imagesUrl[1].hits[Math.floor(Math.random() * imagesUrl[1].hits.length)].webformatURL} 
                title='Casablanca' 
                text='Marrocos' 
                flag ='https://cdn-icons-png.flaticon.com/512/197/197551.png'
              />
              <Card_cidades 
                bg={imagesUrl[2].hits[Math.floor(Math.random() * imagesUrl[2].hits.length)].webformatURL} 
                title='Alexandria' 
                text='Egito' 
                flag ='https://cdn-icons-png.flaticon.com/512/197/197558.png'
              />
              <Card_cidades 
                bg={imagesUrl[3].hits[Math.floor(Math.random() * imagesUrl[3].hits.length)].webformatURL} 
                title='Luanda' 
                text='Angola' 
                flag ='https://img.freepik.com/premium-vector/angola-flat-rounded-flag-icon_97173-386.jpg?w=2000'
              />
              <Card_cidades 
                bg={imagesUrl[4].hits[Math.floor(Math.random() * imagesUrl[4].hits.length)].webformatURL} 
                title='Dar es Salaam' 
                text='Tanzânia' 
                flag ='https://cdn-icons-png.flaticon.com/512/197/197634.png'
              />
            </Grid>
          </>
        )}
      </main>
    </div>
  )
}