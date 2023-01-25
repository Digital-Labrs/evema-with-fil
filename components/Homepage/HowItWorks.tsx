import React from 'react';
import { MdOutlinePersonOutline, MdWorkOutline } from 'react-icons/md';
import { AiOutlineSave } from 'react-icons/ai';
import { Box, Link, SimpleGrid, Stack, Text } from '@chakra-ui/react';
import WrapContent from '../Layouts/components/WrapContent';

const HowItWorks = () => {
  return (
    <Box id='howitworks' pt='40px'>
      <WrapContent>
        <Stack px='5' m='auto' alignItems={'center'} py='10'>
          <Text as='h2' fontSize='3xl'>
            How it works
          </Text>
          <Text
            fontSize='lg'
            className='text-center  text-gray-400 w-[80%] lg:w-[60%]'
          >
            {/* The simple steps on how to interact with our platform, just get the
            direct link or search for the event of your choice, connect your
            wallet and pay for the event and in turn you will get an NFT Ticket
            which will be your pass to the event, you will also be able to view
            pictures from the event after the event on the platform and so many
            other things */}
            Connect Wallet - Pay - Go! - It&apos;s that simple!
          </Text>
          <SimpleGrid columns={[1, 1, 3]} spacing='5' pt='5'>
            <Box
              rounded='xl'
              className='flex flex-col items-center bg-white drop-shadow-md p-3 md:p-5 h-full space-y-1'
            >
              <Box fontSize='30px' className='bg-orange p-4 rounded-full'>
                <MdOutlinePersonOutline className='text-white' />
              </Box>

              <Text as='h3' fontWeight='bold' fontSize='xl'>
                Connect Wallet
              </Text>

              <Text className='text-lg text-center'>
                Firstly you have to connect your wallet to the DAPP
              </Text>
            </Box>
            <Box
              rounded='xl'
              className='flex flex-col items-center bg-white drop-shadow-md p-3 md:p-5 h-full space-y-1'
            >
              <Box fontSize='30px' className='bg-primary p-4 rounded-full'>
                <MdWorkOutline className='text-white' />
              </Box>
              <Link href='/events'>
                <Text as='h3' fontWeight='bold' fontSize='xl'>
                  Search for Event
                </Text>
              </Link>
              <Text className='text-lg text-center'>
                Search for an Event in your Area or specific event
              </Text>
            </Box>
            <Box
              rounded='xl'
              className='flex flex-col items-center bg-white drop-shadow-md p-3  md:p-5 h-full space-y-1'
            >
              <Box fontSize='30px' className='bg-[#0CA789] p-4 rounded-full'>
                <AiOutlineSave className='text-white' />
              </Box>

              <Link href='/my-tickets'>
                <Text
                  as='h3'
                  fontWeight='bold'
                  textAlign='center'
                  fontSize='xl'
                >
                  Pay and Get NFT Ticket
                </Text>
              </Link>
              <Text className='text-lg text-center'>
                Pay for the event you want and get NFT Ticket
              </Text>
            </Box>
          </SimpleGrid>
        </Stack>
      </WrapContent>
    </Box>
  );
};

export default HowItWorks;
