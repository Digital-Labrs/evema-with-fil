import { Box, Center, Icon, SimpleGrid, Text } from '@chakra-ui/react';
import { BigNumber } from 'ethers';
import React from 'react';
import { FaExclamation } from 'react-icons/fa';
import EventsComponent from '../../components/EventsComponent';
import Layout from '../../components/Layout/Layout';
import WrapContent from '../../components/WrapContent';
import { useCtx } from '../../context/AppContext';

function Events() {
  const { events }: any = useCtx();

  return (
    <Layout title='All events on Evema'>
      <WrapContent>
        <Box py='5'>
          <Text px='2' fontSize='xl' as='h1' className='capitalize py-5'>
            ALL EVENTS {events && events.length !== 0 && '-' + events.length}
          </Text>
          <SimpleGrid columns={[1, 2, 3]} spacing='5'>
            {events &&
              events.length !== 0 &&
              events.map((event: any) => (
                <div
                  key={BigNumber.from(event.eventId).toNumber()}
                  className='w-[95%] mx-auto'
                >
                  <EventsComponent event={event} />
                </div>
              ))}
          </SimpleGrid>
          {events && events.length === 0 && (
            <Center flexDir='column' p='5' gap='3'>
              <Icon as={FaExclamation} fontSize='30px' />
              <Text fontSize='lg'>Wow, Such empty!</Text>
            </Center>
          )}
        </Box>
      </WrapContent>
    </Layout>
  );
}

export default Events;
