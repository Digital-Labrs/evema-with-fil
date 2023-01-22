import React from 'react';
import { MdWorkOutline, MdGroups } from 'react-icons/md';
import { BiSearch } from 'react-icons/bi';
import Link from 'next/link';
import { Box, Flex, HStack, Stack, Text } from '@chakra-ui/react';

type Props = {};

const Banner = (props: Props) => {
  return (
    <Stack
      backgroundColor={'#1F3578'}
      minHeight='400px'
      bgImg={'/images/bannerbackground.png'}
      bgBlendMode='overlay'
    >
      <Box padding={'10'}>
        <Text textColor={'white'} fontWeight='bold' fontSize={'30px'}>
          The One Stop Spot to manage all your events
          <br />
          Book for any events, create and manage your events,
          <br />
          Save your your gallery to the IPFS
          <br />
        </Text>
      </Box>
      <Stack>
        <HStack marginStart={'50'}>
          <Flex className=' space-x-5'>
            <Box className='flex flex-col px-2 md:px-4 lg:px-6 border border-orange py-1 md:py-3 rounded-md h-full'>
              <div className='flex items-center space-x-2'>
                <MdGroups className='text-red-500 w-4 h-4 lg:w-6 lg:h-6' />
                <span className='font-medium text-sm lg:text-xl text-white'>
                  1.9k
                </span>
              </div>
              <p className='text-xs lg:text-sm whitespace-nowrap text-white'>
                Created Event
              </p>
            </Box>
            <Box className='flex flex-col px-2 md:px-4 lg:px-6 border border-orange py-1 md:py-3 rounded-md h-full'>
              <div className='flex items-center space-x-2'>
                <MdGroups className='text-red-500 w-4 h-4 lg:w-6 lg:h-6' />
                <span className='font-medium text-sm lg:text-xl text-white'>
                  21.9k
                </span>
              </div>
              <p className='text-xs lg:text-sm whitespace-nowrap text-white'>
                Total Users
              </p>
            </Box>
          </Flex>
        </HStack>
        <HStack px={'30'}>
          <Flex className='flex items-center space-x-3' padding={'5'}>
            <button className='flex items-center space-x-1 bg-orange px-3 py-1 md:py-2 rounded-sm'>
              <MdWorkOutline className='text-white w-3 h-3 lg:w-6 lg:h-6' />
              <Link href='/create' passHref>
                <span className='font-medium text-xs md:text-sm lg:text-base whitespace-nowrap'>
                  Create An Event
                </span>
              </Link>
            </button>
            <div className='w-full md:w-[60%] lg:w-[70%] relative'>
              <input
                type='text'
                placeholder='Search for an Event'
                className='pl-3 pr-9 py-1 md:py-2 rounded-sm w-full placeholder:text-gray-200 placeholder:text-xs outline-none bg-white text-gray-800 text-xs md:text-sm lg:text-base'
              />
              <button className='absolute top-1 md:top-1.5 lg:top-2 bg-orange p-1 rounded-sm right-1 md:right-2'>
                <BiSearch className='w-3 h-3 md:w-4 md:h-4' />
              </button>
            </div>
          </Flex>
        </HStack>
      </Stack>
    </Stack>
  );
};

export default Banner;
