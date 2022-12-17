import { Box, Flex, Input, Text } from '@chakra-ui/react'
import Head from 'next/head'
import { useState } from 'react'
import Navbar_home from '../../components/Navbar_home'
import Banner from '../../components/Banner'

export default function Home()
{
  const [texto, setTexto] = useState('')

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
      <Navbar_home/>
      <Banner/>
      <main>
        <Flex h={"100vh"} justifyContent="center" alignItems={"center"} bg="white">
        </Flex>
      </main>
    </div>
  )
}
