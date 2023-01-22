import { Box, Button } from '@chakra-ui/react';
import React from 'react';
import { NETWORKS as SUPPORTED_NETWORKS } from '../../config/networks';
import SwitchNetworkModal from './SwitchNetworkModal';
import { Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react';
import { FaChevronDown } from 'react-icons/fa';
import { AiOutlineLogout } from 'react-icons/ai';
import { useWeb3 } from '../../context/Web3Context';

function ConnectButton() {
  const { connectWallet, client }: any = useWeb3();
  function disconnectWallet() {}

  function Close() {
    return null;
  }

  const handleClick = (network: any) => {
    connectWallet(network);
  };
  function GetSupportedNetworks() {
    let temparr: any[] = [];
    Object.keys(SUPPORTED_NETWORKS).forEach((key) =>
      temparr.push(SUPPORTED_NETWORKS[key].chainId)
    );
    return temparr;
  }

  return (
    <>
      <Menu>
        <MenuButton
          my='2'
          rounded='lg'
          display={['none', 'flex']}
          size={['xs', 'sm', 'md', 'md']}
          colorScheme={client ? 'green' : 'twitter'}
          as={Button}
          rightIcon={<FaChevronDown />}
        >
          {client ? client?.address.substr(0, 8) + '...' : 'Connect'}
        </MenuButton>
        <MenuList>
          {Object.values(SUPPORTED_NETWORKS).map((n: any, i: any) => {
            return (
              <MenuItem onClick={() => handleClick(n)} key={i + 'nt'}>
                {n.title}
              </MenuItem>
            );
          })}
        </MenuList>
      </Menu>

      {client && (
        <SwitchNetworkModal
          onClose={Close}
          isOpen={!GetSupportedNetworks().includes(client.chainId)}
        />
      )}
    </>
  );
}

export default ConnectButton;
