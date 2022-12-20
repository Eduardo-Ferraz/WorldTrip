import
{
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Image,
    Text,
    Stack,
    Heading,
    Divider,
    Avatar,

}
    from '@chakra-ui/react'
import { Highlight } from '@chakra-ui/react'
import React from 'react';

interface CardProps
{
    bg: string
    flag: string
    title: string
    text: string
}

export function Card_cidades(props: CardProps)
{
    return (
        <Card maxW={['300', 's200']} border='1px' borderRadius='lg' borderColor='rgba(255, 186, 8, 0.5)'>
            <Image src={props.bg}
                h={['30%', '150']}
                borderRadius='4'
            />
            <CardBody>
                <Stack >
                    <Stack spacing={['30%', '20%']} direction={'row'}>
                        <Heading pt={4} size='xl'>{props.title}</Heading>
                        <Stack pt={6}>
                            <Avatar src={props.title} />
                        </Stack>
                    </Stack>
                    <Text color='dark.info' fontSize='2xl'>
                        {props.text}
                    </Text>
                </Stack>

            </CardBody>

        </Card>

    );
}



