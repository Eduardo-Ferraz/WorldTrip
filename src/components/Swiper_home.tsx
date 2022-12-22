import { Box, Text, Stack, VStack, Flex, Link } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import getPhoto from '../services/axios'

import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation, Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

SwiperCore.use([Navigation, Pagination]);

type IHit = {
  webformatURL: string;
  likes?: number;
}

type IHits = {
  hits: IHit[];
  total: number;
  totalHits: number;
}

export default function Swiper_home()
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
        }// VERIFICAR SE FOR NULL, SETAR UMA IMAGEM PADRÃO
      }

      setImagesUrl(photos)
      console.log(photos);
    }

    getNewPhoto(["europe sightseeing", "america sightseeing", "asia sightseeing", "africa sightseeing", "oceania"]);

  }, []);

  return (
    <>
      <Box
          pt={[5, 0]}
          pb={[0, 5]}
          margin={[0, 10]}
        >
          <Swiper
            modules={[Navigation, Pagination]}
            navigation={true}
            pagination={{ clickable: true }}
            style={{
              "--swiper-pagination-color": "#FFBA08",
              "--swiper-navigation-color": "#FFBA08",
            }}
          >
            <>
              <SwiperSlide >
                <Link 
                href='/europa'
                _hover={{
                  textDecoration: 'underline #FFBA08' 
                }}
                >
                  { imagesUrl !== null && imagesUrl !== undefined &&( 
                    <>
                      <Flex
                      w={'full'}
                      h={'60vh'}
                      bgImage={
                        imagesUrl[0].hits[Math.floor(Math.random() * imagesUrl[0].hits.length)].webformatURL
                      }
                      backgroundSize={'cover'}
                      backgroundPosition={'center center'}
                      >
                        <VStack
                        w={'full'}
                        justify={'center'}
                        px={'6'}
                        bgGradient={'linear(to-r, blackAlpha.600, transparent)'}>
                          
                          <Stack maxW={'2xl'} align='center' spacing={6}>
                            <Text
                            color='light.headtext'
                            fontWeight={700}
                            lineHeight={1.2}
                            as='b'
                            fontSize={['3xl', '4xl']}
                            >
                              Europa
                            </Text>
                            <Text
                            color='light.info'
                            fontWeight={700}
                            lineHeight={1.2}
                            as='b'
                            fontSize={['1xl', '2xl']}
                            >
                              O continente mais antigo.
                            </Text>
                          </Stack>
                        </VStack>
                      </Flex>
                    </>
                  )}
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link  
                href='/america'
                _hover={{
                  textDecoration: 'underline #FFBA08' 
                }}
                >
                  { imagesUrl !== null && imagesUrl !== undefined &&( 
                    <>
                      <Flex
                        w={'full'}
                        h={'60vh'}
                        bgImage={
                          imagesUrl[1].hits[Math.floor(Math.random() * imagesUrl[1].hits.length)].webformatURL
                        }
                        backgroundSize={'cover'}
                        backgroundPosition={'center center'}>
                        <VStack
                          w={'full'}
                          justify={'center'}
                          px={'6'}
                          bgGradient={'linear(to-r, blackAlpha.600, transparent)'}>
                          
                          <Stack maxW={'2xl'} align='center' spacing={6}>
                            <Text
                              color='light.headtext'
                              fontWeight={700}
                              lineHeight={1.2}
                              as='b'
                              fontSize={['3xl', '4xl']}>
                              América
                            </Text>
                            <Text
                              color='light.info'
                              fontWeight={700}
                              lineHeight={1.2}
                              as='b'
                              fontSize={['1xl', '2xl']}>
                              Um continente de grandes belezas.
                            </Text>
                          </Stack>
                        </VStack>
                      </Flex>
                    </>
                  )}
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link
                href='/asia'
                _hover={{
                  textDecoration: 'underline #FFBA08' 
                }}
                >
                { imagesUrl !== null && imagesUrl !== undefined &&( 
                  <>
                    <Flex
                      w={'full'}
                      h={'60vh'}
                      bgImage={
                        imagesUrl[2].hits[Math.floor(Math.random() * imagesUrl[2].hits.length)].webformatURL
                      }
                      backgroundSize={'cover'}
                      backgroundPosition={'center center'}>
                      <VStack
                        w={'full'}
                        justify={'center'}
                        px={'6'}
                        bgGradient={'linear(to-r, blackAlpha.600, transparent)'}>
                        
                        <Stack maxW={'2xl'} align='center' spacing={6}>
                          <Text
                            color='light.headtext'
                            fontWeight={700}
                            lineHeight={1.2}
                            as='b'
                            fontSize={['3xl', '4xl']}>
                            Ásia
                          </Text>
                          <Text
                            color='light.info'
                            fontWeight={700}
                            lineHeight={1.2}
                            as='b'
                            fontSize={['1xl', '2xl']}>
                            O maior continente.
                          </Text>
                        </Stack>
                      </VStack>
                    </Flex>
                  </>
                )}
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link
                href='/africa'
                _hover={{
                  textDecoration: 'underline #FFBA08' 
                }}
                >
                { imagesUrl !== null && imagesUrl !== undefined &&( 
                  <>
                    <Flex
                      w={'full'}
                      h={'60vh'}
                      bgImage={
                        imagesUrl[3].hits[Math.floor(Math.random() * imagesUrl[3].hits.length)].webformatURL
                      }
                      backgroundSize={'cover'}
                      backgroundPosition={'center center'}>
                      <VStack
                        w={'full'}
                        justify={'center'}
                        px={'6'}
                        bgGradient={'linear(to-r, blackAlpha.600, transparent)'}>
                        
                        <Stack maxW={'2xl'} align='center' spacing={6}>
                          <Text
                            color='light.headtext'
                            fontWeight={700}
                            lineHeight={1.2}
                            as='b'
                            fontSize={['3xl', '4xl']}>
                            África
                          </Text>
                          <Text
                            color='light.info'
                            fontWeight={700}
                            lineHeight={1.2}
                            as='b'
                            fontSize={['1xl', '2xl']}>
                            O berço da humanidade.
                          </Text>
                        </Stack>
                      </VStack>
                    </Flex>
                  </>
                )}
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link
                href='/oceania'
                _hover={{
                  textDecoration: 'underline #FFBA08' 
                }}
                >
                { imagesUrl !== null && imagesUrl !== undefined &&( 
                  <>
                    <Flex
                      w={'full'}
                      h={'60vh'}
                      bgImage={
                        imagesUrl[4].hits[Math.floor(Math.random() * imagesUrl[4].hits.length)].webformatURL
                      }
                      backgroundSize={'cover'}
                      backgroundPosition={'center center'}>
                      <VStack
                        w={'full'}
                        justify={'center'}
                        px={'6'}
                        bgGradient={'linear(to-r, blackAlpha.600, transparent)'}>
                        
                        <Stack maxW={'2xl'} align='center' spacing={6}>
                          <Text
                            color='light.headtext'
                            fontWeight={700}
                            lineHeight={1.2}
                            as='b'
                            fontSize={['3xl', '4xl']}>
                            Oceania
                          </Text>
                          <Text
                            color='light.info'
                            fontWeight={700}
                            lineHeight={1.2}
                            as='b'
                            fontSize={['1xl', '2xl']}>
                            Arquipélago inestimável.
                          </Text>
                        </Stack>
                      </VStack>
                    </Flex>
                  </>
                )}
                </Link>
              </SwiperSlide>
            </>
          </Swiper>
        </Box>
    </>
  );
}

