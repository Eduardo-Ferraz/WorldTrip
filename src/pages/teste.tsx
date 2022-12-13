import { Box, Flex, Input, Text } from '@chakra-ui/react'
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'

export default function Home() {
  const [texto, setTexto] = useState('')

  return (
    <div>
    <main>
      <Flex h={"100vh"} justifyContent="center" alignItems={"center"} bg="lightblue">
        <Box bg="whiteAlpha.400" borderRadius="xl" padding={"10"}>
            <Text>
                {texto}{texto}{texto}
            </Text>
            <Input
                type={'text'}
                onChange={(event) => setTexto(event.target.value)}
            ></Input>
        </Box>
      </Flex>  
    </main>
    </div>
  )
}
