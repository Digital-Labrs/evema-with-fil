import React from 'react';
import { MdOutlinePersonOutline, MdWorkOutline } from 'react-icons/md';
import { AiOutlineSave } from 'react-icons/ai';
import { Box, Link, SimpleGrid, Stack, Text } from '@chakra-ui/react';

const HowItWorks = () => {
  return (
    <Stack className='flex flex-col items-center justify-center mt-3 px-3 lg:px-0 md:max-w-[80%] md:mx-auto'>
      <Text className='font-bold text-base md:text-lg whitespace-nowrap'>
        How it works
      </Text>
      <Text className='text-center text-sm text-gray-400 w-[80%] lg:w-[60%] mx-auto'>
        The simple steps on how to interact with our platform, just get the
        direct link or search for the event of your choice, connect your wallet
        and pay for the event and in turn you will get an NFT Ticket which will
        be your pass to the event, you will also be able to view pictures from
        the event after the event on the platform and so many other things
      </Text>
      <SimpleGrid columns={[1, 3]} spacing='5' pt='5'>
        <Box className='flex flex-col items-center bg-white drop-shadow-md p-3 md:p-5 h-full space-y-1'>
          <Box className='bg-orange p-2 rounded-full'>
            <MdOutlinePersonOutline className='text-white' />
          </Box>

          <Text className='font-bold text-xs md:text-sm lg:text-base'>
            Connect Wallet
          </Text>

          <Text className='text-xs text-gray-400 lg:w-1/2 text-center'>
            Firstly you have to connect your wallet to the DAPP
          </Text>
        </Box>
        <Box className='flex flex-col items-center bg-white drop-shadow-md p-3 md:p-5 h-full space-y-1'>
          <Box className='bg-primary p-2 rounded-full'>
            <MdWorkOutline className='text-white' />
          </Box>
          <Link href='/events'>
            <Text className='font-bold text-xs md:text-sm lg:text-base'>
              Search for Event
            </Text>
          </Link>
          <Text className='text-xs text-gray-400 lg:w-1/2 text-center'>
            Search for an Event in your Area or specific event
          </Text>
        </Box>
        <Box className='flex flex-col items-center bg-white drop-shadow-md p-3  md:p-5 h-full space-y-1'>
          <Box className='bg-[#0CA789] p-2 rounded-full'>
            <AiOutlineSave className='text-white' />
          </Box>

          <Link href='/my-tickets'>
            <Text className='font-bold text-xs md:text-sm lg:text-base'>
              Pay and Get NFT Ticket
            </Text>
          </Link>
          <Text className='text-xs text-gray-400 lg:w-1/2 text-center'>
            Pay for the event you want and get NFT Ticket
          </Text>
        </Box>
      </SimpleGrid>
    </Stack>
  );
};

export default HowItWorks;
