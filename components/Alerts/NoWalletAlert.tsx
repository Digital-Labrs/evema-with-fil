import React from 'react';
import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
} from '@chakra-ui/react';
import ConnectButton from '../web3/ConnectButton';

function NoWalletAlert() {
  return (
    <Alert
      status='error'
      variant='subtle'
      flexDirection='column'
      alignItems='center'
      justifyContent='center'
      textAlign='center'
      height='250px'
    >
      <AlertIcon boxSize='40px' mr={0} />
      <AlertTitle mt={4} mb={1} fontSize='lg'>
        Wallet not connected!
      </AlertTitle>
      <AlertDescription maxWidth='sm'>
        You must connect to metamask to access this page.
        <ConnectButton />
      </AlertDescription>
    </Alert>
  );
}

export default NoWalletAlert;
