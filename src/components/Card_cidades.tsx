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
    Avatar,

}
    from '@chakra-ui/react'
import { Highlight } from '@chakra-ui/react'
import React from 'react';

interface CardProps
{
    title: string
    text: string
    bg: string
    flag: string
}

export function Card_cidades(props: CardProps)
{
    return (
        <Card  maxH={['280', '300']} border='1px' borderRadius='lg' borderColor='highlight50'>
            <Image src={props.bg}
                h={['60%', '150']}
                borderRadius='4'
            />
            <CardBody>
                <Stack >
                    <Stack spacing={['40%', '30%']} direction={'row'}>
                        <Heading  fontSize={'20px'} >{props.title}</Heading>
                        <Stack>
                            <Avatar src={props.flag}/>
                        </Stack>
                    </Stack>
                    <Text  color='dark.info' fontSize={'16px'}>
                        {props.text}
                    </Text>
                </Stack>

            </CardBody>

        </Card>

    );
}



