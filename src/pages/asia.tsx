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

export default function America()
{
  const [imagesUrl, setImagesUrl] = useState<IHits[] | null>();

  useEffect(() =>
  {
    const getNewPhoto = async (pesquisa: string[]) =>
    {
      let imageTemp;
      const photos: IHits[] = [];

      for (let i = 0; i < pesquisa.length; i++)
      {
        imageTemp = await getPhoto(pesquisa[i]);
        if (imageTemp !== null)
        {
          photos.push(imageTemp);
        }// VERIFICAR SE FOR NULL, SETAR UMA IMAGEM PADRÃO
      }

      setImagesUrl(photos)
      console.log(photos);
    }

    getNewPhoto(["rio_de_janeiro sightseeing", "machu sightseeing", "new_york sightseeing", "argentine sightseeing", "mexico sightseeing"]);

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
        <Banner bg="asia.jpg" text="Ásia" />
        <Flex h={80} justifyContent="center" alignItems={"center"} bg="white">
          <Stack direction={'row'}
            justifyContent="center"
            alignItems="center"
            spacing={'45px'}
          >
            <Show above='sm'>
              <Text mt={'10%'} pr={12} color='dark.headtext' w={'600px'} fontSize='24'>
                A Ásia é o maior dos continentes, tanto em área como em população, faz fronteira no
                lado ocidental com a África e com a Europa, com o oceano Pacífico, a Oceania e com a
                América do Norte, pelo Estreito de Bering. Na Ásia são encontradas algumas das
                montanhas mais altas do mundo; os rios mais extensos; os maiores desertos, planícies e
                planaltos; as selvas e florestas mais densas
              </Text>
              <Stack justifyContent="center" alignItems={"center"} mt={10}>
                <Text as='b' color='highlight' fontSize='48'>
                  35
                </Text>
                <Text as='b' color='dark.headtext'>
                  países
                </Text>
              </Stack>
              <Stack justifyContent="center" alignItems={"center"} >
                <Text as='b' color='highlight' fontSize='48'>
                  34
                </Text>
                <Text as='b' color='dark.headtext'>
                  línguas
                </Text>
              </Stack>
              <Stack justifyContent="center" alignItems={"center"} >
                <Text as='b' color='highlight' fontSize='48'>
                  20
                </Text>
                <Text as='b' color='dark.headtext'>
                  cidades +100
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
                A América é o segundo maior continente em área, localizado no hemisfério ocidental e que se
                estende, no sentido norte-sul, desde o oceano Ártico até o cabo Horn, ao longo de cerca de
                15 mil quilômetros
              </Text>
              <Stack direction={'row'} spacing={'40px'}>
                <Stack justifyContent="center" alignItems={"center"} >
                  <Text as='b' color='highlight' fontSize='32'>
                    35
                  </Text>
                  <Text color='dark.headtext'>
                    países
                  </Text>
                </Stack>
                <Stack justifyContent="center" alignItems={"center"} >
                  <Text as='b' color='highlight' fontSize='32'>
                    34
                  </Text>
                  <Text color='dark.headtext'>
                    línguas
                  </Text>
                </Stack>
                <Stack justifyContent="center" alignItems={"center"} >
                  <Text as='b' color='highlight' fontSize='32'>
                    20
                  </Text>
                  <Text color='dark.headtext' >
                    cidades +100
                  </Text>
                </Stack>
              </Stack>
            </Show>
          </Stack>
          <Image m={1} src='/icon_Info.png' w={[3, 4]} pt={[240, 20]} />
        </Flex>

        <Text color='dark.headtext' fontSize='36' ml='10%' mt='5%' mb='5%'>Cidades +100</Text>

        {imagesUrl !== null && imagesUrl !== undefined && (
          <>
            <Grid mb={20} templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)', 'repeat(3, 1fr)', 'repeat(4, 1fr)']} gap={6} ml='10%' mr='10%'>
              <Card_cidades
                bg={imagesUrl[0].hits[Math.floor(Math.random() * imagesUrl[0].hits.length)].webformatURL}
                title='Rio de Janeiro'
                text='Brasil'
                flag='https://cdn-icons-png.flaticon.com/512/551/551856.png'
              />
              <Card_cidades
                bg={imagesUrl[1].hits[Math.floor(Math.random() * imagesUrl[1].hits.length)].webformatURL}
                title='Machu Picchu'
                text='Peru'
                flag='https://cdn-icons-png.flaticon.com/512/197/197563.png'
              />
              <Card_cidades
                bg={imagesUrl[2].hits[Math.floor(Math.random() * imagesUrl[2].hits.length)].webformatURL}
                title='Nova Iorque'
                text='Estados Unidos'
                flag='https://cdn-icons-png.flaticon.com/512/4628/4628635.png'
              />
              <Card_cidades
                bg={imagesUrl[3].hits[Math.floor(Math.random() * imagesUrl[3].hits.length)].webformatURL}
                title='Buenos Aires'
                text='Argentina'
                flag='https://cdn-icons-png.flaticon.com/512/197/197573.png'
              />
              <Card_cidades
                bg={imagesUrl[4].hits[Math.floor(Math.random() * imagesUrl[4].hits.length)].webformatURL}
                title='Cidade do México'
                text='México'
                flag='https://cdn-icons-png.flaticon.com/512/5372/5372848.png'
              />
            </Grid>
          </>
        )}
      </main>
    </div>
  )
}