import React from 'react';
import { MdWorkOutline, MdGroups } from 'react-icons/md';
import { BiSearch } from 'react-icons/bi';
import Link from 'next/link';
import {
  Box,
  Button,
  Center,
  Flex,
  HStack,
  Stack,
  Text,
} from '@chakra-ui/react';

type Props = {};

const Banner = (props: Props) => {
  return (
    <Center
      flexDir={'column'}
      textAlign={'center'}
      // backgroundColor={'#1F3578'}
      backgroundColor={'blackAlpha.800'}
      minHeight='80vh'
      bgImg={'/images/bannerbackground.png'}
      bgRepeat='no-repeat'
      bgSize={'cover'}
      bgBlendMode='overlay'
      color='white'
    >
      <Text as='h1' fontSize='6xl' fontWeight='semibold'>
        Bring your events <br />
        <Text rounded='lg' px='3' color='#f24726' as='span'>
          on-chain!
        </Text>{' '}
      </Text>
      <Text fontSize='lg'>
        Evema is the first and best web3 event management system <br />
        powered by IPFS!
      </Text>
      <HStack gap='5' my='10'>
        <Button
          as={Link}
          href='/create'
          bg='#f24726'
          size='lg'
          colorScheme={'orange'}
          rounded='lg'
        >
          Create an event
        </Button>
        <Button
          as={Link}
          href='#howitworks'
          colorScheme={'blue'}
          _hover={{ bg: 'blackAlpha.900' }}
          color='white'
          variant='flushed'
          size='lg'
          rounded='lg'
        >
          Learn more
        </Button>
      </HStack>
    </Center>
  );
};

export default Banner;
