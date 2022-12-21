import
  {
    Box,
    Flex,
    HStack,
    Link,
  } from '@chakra-ui/react';

export default function Simple()
{
  return (
    <>
      <Box bg='light.headtext' px={4}>
        <Flex h={24} alignItems={'center'} justifyContent={'center'}>
          <HStack spacing={8} alignItems={'center'}>
            <Box><Link href="/">
              <div>
                <img src="/Logo.png" width={200} height={77} />
              </div>
            </Link></Box>
          </HStack>
        </Flex>
      </Box>
    </>
  );
}
