import { Box, Center, Icon, Text } from '@chakra-ui/react';
import React, { useCallback, useEffect, useState } from 'react';
import Layout from '../components/Layout/Layout';
import NoWalletAlert from '../components/NoWalletAlert';
import TicketsGrid from '../components/TicketsGrid';
import WrapContent from '../components/WrapContent';
import { useCtx } from '../context/AppContext';
import axios from 'axios';
import { FaExclamation } from 'react-icons/fa';
import { getSignedMaticContract } from '../metamaskFunctions';
// Replace with your Alchemy API key:
const apiKey = process.env.NEXT_PUBLIC_ALCHEMY_KEY;
const baseURL = `https://polygon-mumbai.g.alchemy.com/v2/${apiKey}`;
const axiosURL = `${baseURL}`;

function MyTickets() {
  const { client }: any = useCtx();
  const [data, setData] = useState([]);

  const getNFTS = useCallback(async () => {
    if (!client) return;
    try {
      // let res = await axios(axiosURL, {
      //   method: 'post',
      //   headers: { 'Content-Type': 'application/json' },
      //   data: JSON.stringify({
      //     jsonrpc: '2.0',
      //     id: 0,
      //     method: 'alchemy_getAssetTransfers',
      //     params: [
      //       {
      //         fromBlock: '0x0',
      //         fromAddress: '0x0000000000000000000000000000000000000000',
      //         toAddress: client.address,
      //         excludeZeroValue: true,
      //         category: ['erc721', 'erc1155'],
      //       },
      //     ],
      //   }),
      // });
      let ct = await getSignedMaticContract();
      let token = await ct.usersTokens(client.address);
      setData(token);
    } catch (error) {
      console.log(error);
    }
  }, [client]);

  useEffect(() => {
    if (client) {
      getNFTS();
    }
  }, [client, getNFTS]);

  return (
    <Layout title='My tickets on Evema'>
      <WrapContent>
        <Box py='5'>
          <Text px='2' fontSize='xl' as='h1' className='capitalize py-5'>
            MY TICKETS
          </Text>
        </Box>
        {!client && <NoWalletAlert />}
        {client && <TicketsGrid nft={data} />}
        {data && data.length === 0 && (
          <Center flexDir='column' p='5' gap='3'>
            <Icon as={FaExclamation} fontSize='30px' />
            <Text fontSize='lg'>Wow, So much empty!</Text>
          </Center>
        )}
      </WrapContent>
    </Layout>
  );
}

export default MyTickets;
