import
  {
    Box,
    Flex,
    HStack,
    useColorModeValue,
  } from '@chakra-ui/react';
import { ChevronLeftIcon } from '@chakra-ui/icons';

export default function Simple()
{

  return (
    <>
      <Box bg={useColorModeValue('#F5F8FA', 'gray.900')} px={4}>
        <Flex h={24} alignItems={'center'} justifyContent={'space-between'}>
          <a href="/">
            <ChevronLeftIcon
              w={16} h={8} color="#47585B" />
          </a>
          <HStack spacing={8} alignItems={'center'}>
            <Box><a href="/">
              <div className="logo">
                <img src="/Logo.png" width={200} height={77} />
              </div>
            </a></Box>
          </HStack>
          <Flex alignItems={'center'}>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
