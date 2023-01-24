import { Box, Button, Text } from '@chakra-ui/react';
import { ethers } from 'ethers';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { getSignedContract } from '../../metamaskFunctions';
import { useWeb3 } from '../../context/Web3Context';

function BuyTicketButton({ id, price, chain }: any) {
  const [loading, setLoading] = useState(false);
  const { client, switchNetworks }: any = useWeb3();
  async function buyTicket() {
    if (!client)
      return toast.error('Wallet not connected', { position: 'top-center' });

    setLoading(true);

    try {
      let res = await getSignedContract(client.chainId).bookTickets(id, {
        value: ethers.utils.parseEther('0.1'),
      });
      alert('Booked, check your NFT ticket in your wallet');
    } catch (error) {
      console.log(error);

      toast.error('Error booking the ticket');
    }

    setLoading(false);
  }
  return (
    <Box>
      <Button
        isLoading={loading}
        bg='#f24726'
        onClick={buyTicket}
        colorScheme='orange'
        color='white'
        size='lg'
        disabled={client.chainId !== chain}
      >
        Buy Ticket
      </Button>

      {client.chainId !== chain && (
        <Text>
          You are connected to <br /> the wrong network.
          <br />
          <Button
            my='3'
            colorScheme='green'
            onClick={() => switchNetworks(chain)}
          >
            Switch
          </Button>
        </Text>
      )}
    </Box>
  );
}

export default BuyTicketButton;
