import { Box, Flex, Input, Show, Text } from '@chakra-ui/react'
import { Stack, HStack, VStack } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import React from 'react';
import { Icon, createIcon } from '@chakra-ui/react'
import { Link } from '@chakra-ui/react'
const breakpoints = {
  sm: '30em',
  md: '48em',
  lg: '62em',
  xl: '80em',
  '2xl': '96em',
}
const CircleIcon = (props) => (
    <Icon viewBox='0 0 200 200' {...props}>
        <path
            fill='currentColor'
            d='M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0'
        />
    </Icon>
)

export function Travel_types()
{
    return (
        <Stack direction={['column', 'row']}
        spacing={['30px', '150px']}
        pt={300}
        fontSize='xl'
        h={['30vh', '100vh']}
        justifyContent="center"
        alignItems="center"
        bg="white"
        ><Show above='sm'>
                <Link href='/' isExternal style={{ textDecoration: 'none' }}>
                    <Stack justifyContent="center" alignItems={"center"} >
                        <Image
                            objectFit='fill'
                            src='/icon_vida_noturna.png'
                            w={[0, 0, 70]}
                        />
                        <Text pt={4} as='b' color='dark.headtext'>
                            vida noturna
                        </Text>
                    </Stack>
                </Link>
                <Link href='/' isExternal style={{ textDecoration: 'none' }}>
                    <Stack justifyContent="center" alignItems={"center"}>
                        <Image
                            boxSize={[0, 70, 70]}
                            objectFit='fill'
                            src='/icon_praia.png'
                        />
                        <Text pt={4} as='b' color='dark.headtext'>
                            praia
                        </Text>
                    </Stack>
                </Link>
                <Link href='/' isExternal style={{ textDecoration: 'none' }}>
                    <Stack justifyContent="center" alignItems={"center"}>
                        <Image
                            boxSize={[0, 70, 70]}
                            objectFit='fill'
                            src='/icon_moderno.png'
                        />
                        <Text pt={4} as='b' color='dark.headtext'>
                            moderno
                        </Text>
                    </Stack>
                </Link>
                <Link href='/' isExternal style={{ textDecoration: 'none' }}>
                    <Stack justifyContent="center" alignItems={"center"}>
                        <Image
                            boxSize={[0, 70, 70]}
                            objectFit='fill'
                            src='/icon_classico.png'
                        />
                        <Text pt={4} as='b' color='dark.headtext'>
                            clássico
                        </Text>
                    </Stack>
                </Link>
                <Link href='/' isExternal style={{ textDecoration: 'none' }}>
                    <Stack justifyContent="center" alignItems={"center"}>
                        <Image
                            boxSize={[0, 70, 70]}
                            objectFit='fill'
                            src='/icon_mais.png'
                        />
                        <Text pt={4} as='b' color='dark.headtext'>
                            e mais...
                        </Text>
                    </Stack>
                </Link>

            </Show>


            <Show breakpoint='(max-width: 400px)'>
                <Link href='/' isExternal style={{ textDecoration: 'none' }}>
                    <Stack fontSize={'18'} >
                        <Box pt={4} color='dark.headtext'>
                            <CircleIcon color='highlight' pr={2} />vida noturna
                            <CircleIcon color='highlight' pr={2} ml={'16'} />praia
                        </Box>
                    </Stack>
                </Link>
                <Link href='/' isExternal style={{ textDecoration: 'none' }}>
                    <Stack justifyContent="center" alignItems={"center"} fontSize={'18'}>
                        <Text pt={4} color='dark.headtext' >
                            <CircleIcon color='highlight' pr={2} />moderno
                            <CircleIcon color='highlight' pr={2} ml={'16'} />clássico
                        </Text>
                    </Stack>
                </Link>
                <Link href='/' isExternal style={{ textDecoration: 'none' }}> <Stack justifyContent="center" alignItems={"center"} fontSize={'18'}>
                    <Text pt={4} color='dark.headtext' >
                        <CircleIcon color='highlight' pr={2} />  e mais...
                    </Text>
                </Stack>
                </Link>
            </Show>
        </Stack>
    );
}
