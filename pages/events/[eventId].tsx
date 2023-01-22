import {
  Badge,
  Box,
  Flex,
  Heading,
  HStack,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react';
import axios from 'axios';
import { BigNumber, ethers } from 'ethers';
import { useRouter } from 'next/router';
import React, { useCallback, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { BsCashCoin } from 'react-icons/bs';
import { FiCalendar, FiMapPin } from 'react-icons/fi';
import BuyTicketButton from '../../components/Events/BuyTicketButton';
import WrapContent from '../../components/Layouts/components/WrapContent';
import MainLayout from '../../components/Layouts/MainLayout';

export const formatDate = (date: any) => {
  let d = new Date(BigNumber.from(date).toNumber());
  return d.toDateString();
};
function SingleEvent(props: any) {
  let title = 'Event details';
  const [event, setEvent] = useState(null);
  const [data, setData] = useState({
    id: '',
    title: 'loading ...',
    category: '',
    desc: '',
    seats: '',
    startdate: 0,
    enddate: 0,
    time: '0',
    information: '',
    location: '',
    image: '',
    price: '0',
  });
  let { query } = useRouter();

  const fetchMetadata = useCallback(async (d: any) => {
    try {
      let { data } = await axios.get(
        //@ts-ignore
        'https://gateway.pinata.cloud/ipfs/' + d['metadata']
      );
      setData(data);
      console.log(data);
    } catch (error) {
      console.log(error);
      toast.error('error occurred');
    }
  }, []);

  const fetchItem = useCallback(async () => {
    let rpc =
      'https://polygon-mumbai.g.alchemy.com/v2/qc55QhaO9Id1jIXvfxbS-bisfiYT-41T';
    const provider = new ethers.providers.JsonRpcProvider(rpc);
    const signer = provider.getSigner();
    // @ts-ignore
    let ca = CONTRACT.polygon_mumbai.ca;
    // @ts-ignore
    let abi = CONTRACT.polygon_mumbai.abi;
    const ct = new ethers.Contract(ca, abi, provider);

    let d = await ct.getEventByIds(query.eventId);

    setEvent(d);
    fetchMetadata(d);
  }, [query, fetchMetadata]);

  useEffect(() => {
    fetchItem();
  }, [fetchItem, query]);

  return (
    <MainLayout title={data.title}>
      <WrapContent>
        <Box py='5'>
          <Flex gap='10' flexDir={['column', 'column', 'row', 'row']}>
            <Stack spacing='5' w={['full', 'full', '35%', '30%']}>
              <Box>
                <Heading
                  color='blue.800'
                  fontSize={['lg', '2xl', '3xl', '5xl']}
                >
                  {data.title}
                </Heading>
                <HStack py='1'>
                  <Box color='#f24726'>
                    <FiMapPin />
                  </Box>
                  <Text as='small' fontWeight='bold' fontSize='xs'>
                    {data.location ? data.location : 'No location yet'}
                  </Text>
                </HStack>
              </Box>
              <SimpleGrid columns={[1, 2, 2, 2]} spacing='5'>
                <Box>
                  <HStack py='1'>
                    <Box color='#f24726' fontSize='xs'>
                      <FiCalendar />
                    </Box>
                    <Text as='small' fontWeight='bold' fontSize='xs'>
                      Start date
                    </Text>
                  </HStack>
                  <Text fontSize='xl'>
                    {event && formatDate(event['startTime'])}
                  </Text>
                </Box>
                <Box>
                  <HStack py='1'>
                    <Box color='#f24726' fontSize='xs'>
                      <FiCalendar />
                    </Box>
                    <Text as='small' fontWeight='bold' fontSize='xs'>
                      End date
                    </Text>
                  </HStack>
                  <Text fontSize='xl'>
                    {event && formatDate(event['endSales'])}
                  </Text>
                </Box>
                {/* <Box>
                  <HStack py='1'>
                    <Box color='#f24726' fontSize='xs'>
                      <FiClock />
                    </Box>
                    <Text as='small' fontWeight='bold' fontSize='xs'>
                      Start time
                    </Text>
                  </HStack>
                  <Text fontSize='xl'>
                    {event && formatTime(event['startTime'])}
                  </Text>
                </Box> */}
              </SimpleGrid>
              <HStack gap='5'>
                <BuyTicketButton
                  id={event ? event['eventId'] : null}
                  price={data.price}
                />
                <Box>
                  <HStack py='1'>
                    <Box color='#f24726' fontSize='xs'>
                      <BsCashCoin />
                    </Box>
                    <Text as='small' fontWeight='bold' fontSize='xs'>
                      Cost
                    </Text>
                  </HStack>
                  <Text fontSize='xl'>${data.price}</Text>
                </Box>
              </HStack>
            </Stack>

            {/* end of left side */}
            <Stack spacing='5' w={['full', 'full', '60%', '65%']}>
              <Box h='300px' pos='relative'>
                <Badge
                  p='2'
                  pos='absolute'
                  top='10px'
                  left='0'
                  colorScheme='green'
                  rounded='0'
                >
                  {data.category}
                </Badge>

                <Image
                  src={data.image}
                  alt={data.title}
                  h='100%'
                  w='full'
                  objectFit={'cover'}
                />
              </Box>
              <Box>
                <Text fontSize='xl' as='h1' className='capitalize py-5'>
                  Description
                </Text>

                {data.information}
              </Box>
            </Stack>
          </Flex>
        </Box>
      </WrapContent>
    </MainLayout>
  );
}

export default SingleEvent;

// // This gets called on every request
// export async function getServerSideProps(context: any) {
//   // Fetch data from external API
//   const res: any = getSingleEvent(context.params.eventId);
//   const data = JSON.parse(res);

//   // Pass data to the page via props
//   return { props: { data } };
// }
