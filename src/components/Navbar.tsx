import
{
  Box,
  Flex,
  HStack,
  Link,
} from '@chakra-ui/react';
import { ChevronLeftIcon } from '@chakra-ui/icons';

export default function Simple()
{

  return (
    <>
      <Box bg='light.headtext' px={4}>
        <Flex h={24} alignItems={'center'} justifyContent={'space-between'}>
          <Link href='/'>
            <ChevronLeftIcon
              w={[10, 70]} ml={[2,70]} h={8} color="dark.headtext" />
          </Link>
          <HStack spacing={8} alignItems={'center'}>
            <Box mr={[5,78]}><Link href='/'>
                <img src="/Logo.png" width={200} height={77} />
            </Link>
            </Box>
          </HStack>
          <Flex alignItems={'center'}>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
