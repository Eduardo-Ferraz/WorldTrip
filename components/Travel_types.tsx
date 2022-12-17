import { Box, Flex, Input, Text } from '@chakra-ui/react'
import { Stack, HStack, VStack } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import React from 'react';

export function Travel_types()
{
    return (
        <Stack direction={['column', 'row']}
            spacing={['30px', '150px']}
            pt={300}
            fontSize={'xl'}>
            <Stack justifyContent="center" alignItems={"center"}>
                <Image
                    boxSize='70px'
                    objectFit='fill'
                    src='/icon_vida_noturna.png'
                />
                <Text pt={4} as='b' color='dark.headtext'>
                    vida noturna
                </Text>
            </Stack>
            <Stack justifyContent="center" alignItems={"center"}>
                <Image
                    boxSize='70px'
                    objectFit='fill'
                    src='/icon_praia.png'
                />
                <Text pt={4} as='b' color='dark.headtext'>
                    praia
                </Text>
            </Stack>
            <Stack justifyContent="center" alignItems={"center"}>
                <Image
                    boxSize='70px'
                    objectFit='fill'
                    src='/icon_moderno.png'
                />
                <Text pt={4} as='b' color='dark.headtext'>
                    moderno
                </Text>
            </Stack>
            <Stack justifyContent="center" alignItems={"center"}>
                <Image
                    boxSize='70px'
                    objectFit='fill'
                    src='/icon_classico.png'
                />
                <Text pt={4} as='b' color='dark.headtext'>
                    clássico
                </Text>
            </Stack>
            <Stack justifyContent="center" alignItems={"center"}>
                <Image
                    boxSize='70px'
                    objectFit='fill'
                    src='/icon_mais.png'
                />
                <Text pt={4} as='b' color='dark.headtext'>
                    e mais...
                </Text>
            </Stack>
        </Stack>
    );
}
