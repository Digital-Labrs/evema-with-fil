import { Button } from '@chakra-ui/react';
import { ethers } from 'ethers';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { getSignedMaticContract } from '../../metamaskFunctions';
import { useCtx } from '../../context/AppContext';

function BuyTicketButton({ id, price }: any) {
  const [loading, setLoading] = useState(false);
  const { client }: any = useCtx();
  async function buyTicket() {
    if (!client) return toast.error('Wallet not connected');
    setLoading(true);
    try {
      let res = await getSignedMaticContract().bookTickets(id, {
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
    <Button
      isLoading={loading}
      bg='#f24726'
      onClick={buyTicket}
      colorScheme='orange'
      color='white'
      size='lg'
    >
      Buy Ticket
    </Button>
  );
}

export default BuyTicketButton;
