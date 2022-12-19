import
{
  Box,
  Flex,
  HStack,
} from '@chakra-ui/react';
import { ChevronLeftIcon } from '@chakra-ui/icons';
import { Link } from '@chakra-ui/react'

export default function Simple()
{

  return (
    <>
      <Box bg='light.headtext' px={4}>
        <Flex h={24} alignItems={'center'} justifyContent={'space-between'}>
          <a href="/">
            <ChevronLeftIcon
              w={[10, 70]} ml={[2,70]} h={8} color="dark.headtext" />
          </a>
          <HStack spacing={8} alignItems={'center'}>
            <Box mr={[5,78]}><a href='/'>
          
                <img src="/Logo.png" width={200} height={77} />
            </a>
            </Box>
          </HStack>
          <Flex alignItems={'center'}>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
