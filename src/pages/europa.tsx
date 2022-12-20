import { Box, Flex, Input, Text, Stack, Show, Image } from '@chakra-ui/react'
import Head from 'next/head'
import { useState } from 'react'
import { Banner } from '../../components/Banner'
import Navbar from '../../components/Navbar'

export default function America()
{
  const [texto, setTexto] = useState('');
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
        <Banner bg="Europa.png" text = "Europa"/>
        <Flex h ={80} justifyContent="center" alignItems={"center"} bg="white">
          <Stack direction={'row'}
            justifyContent="center"
            alignItems="center"
            spacing={'45px'}
          >
            <Show above='sm'>
              <Text mt = {'10%'}pr= {12} color='dark.headtext' w={'600px'} fontSize='24'>
                A Europa é, por convenção, um dos seis continentes do
                mundo. Compreendendo a península ocidental da Eurásia,
                a Europa geralmente divide-se da Ásia a leste pela
                divisória de águas dos montes Urais, o rio Ural, o
                mar Cáspio, o Cáucaso, e o mar Negro a sudeste
              </Text>
              <Stack justifyContent="center" alignItems={"center"}  mt={10}>
                <Text as='b' color='highlight50' fontSize='48'>
                  50
                </Text>
                <Text as='b' color='dark.headtext'>
                  países
                </Text>
              </Stack>
              <Stack justifyContent="center" alignItems={"center"} >
                <Text as='b' color='highlight50' fontSize='48'>
                  60
                </Text>
                <Text as='b' color='dark.headtext'>
                  línguas
                </Text>
              </Stack>
              <Stack justifyContent="center" alignItems={"center"} >
                <Text as='b' color='highlight50' fontSize='48'>
                  27
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
              <Text  justifyContent="space-between" color='dark.headtext' w={'300px'} fontSize='14' pb={30}>
                A Europa é, por convenção, um dos seis continentes do
                mundo. Compreendendo a península ocidental da Eurásia,
                a Europa geralmente divide-se da Ásia a leste pela
                divisória de águas dos montes Urais, o rio Ural, o
                mar Cáspio, o Cáucaso, e o mar Negro a sudeste
              </Text>
              <Stack direction={'row'} spacing={'40px'}>
                <Stack justifyContent="center" alignItems={"center"} >
                  <Text as='b' color='highlight50' fontSize='32'>
                    50
                  </Text>
                  <Text color='dark.headtext'>
                    países
                  </Text>
                </Stack>
                <Stack justifyContent="center" alignItems={"center"} >
                  <Text as='b' color='highlight50' fontSize='32'>
                    60
                  </Text>
                  <Text color='dark.headtext'>
                    línguas
                  </Text>
                </Stack>
                <Stack justifyContent="center" alignItems={"center"} >
                  <Text as='b' color='highlight50' fontSize='32'>
                    27
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
      </main>
    </div>
  )
}