import { NETWORKS as SUPPORTED_NETWORKS } from './config/networks';
import { ethers } from 'ethers';
import { toast } from 'react-hot-toast';
//constants
const matic_chain_id = 80001;
const fil_chain_id = 3141;

const switchWeb3Network = async (network: string) => {
    const { ethereum }: any = window;
    const accounts = await ethereum.request({ method: 'eth_accounts' });

    try {
        await ethereum.request({
            method: 'wallet_switchEthereumChain',
            params: [{ chainId: `0x${Number(network).toString(16)}` }],
        });
    } catch (switchError: any) {
        if (switchError.code === 4902 || switchError.code === 32603) {
            let selected_chain = Object.values(networks).filter((entry: any) => {
                return entry.chainId === `0x${Number(network).toString(16)}`
            })
            try {
                await ethereum.request({
                    method: 'wallet_addEthereumChain',
                    params: [
                        {
                            ...selected_chain[0]
                        },
                    ],
                });
            } catch (addError) {
                return toast.error('cannot add or switch networks, please add manually')
            }
        }
    }
    return {
        isConnected: true,
        address: accounts[0],
        network: network,
    };
}

const checkConnection = async (setClient: any) => {

    const { ethereum }: any = window;

    if (ethereum) {
        const accounts = await ethereum.request({ method: 'eth_accounts' });
        let chainId = parseInt(ethereum.chainId)
        const current_network: any = Object.values(SUPPORTED_NETWORKS).filter((entry: any) => {
            return entry.chainId === chainId
        })
        if (accounts.length > 0) {
            return setClient({
                isConnected: true,
                address: accounts[0],
                network: parseInt(ethereum.chainId),
                ...current_network[0]
            });
        }
        return false;
    } else {
        return toast.error('Install metamask to use this app');
    }
};

const connectWeb3 = async () => {
    try {
        const { ethereum }: any = window;

        if (!ethereum) {
            toast.error('Please install metamask');
            return;
        }
        const provider = new ethers.providers.Web3Provider(ethereum);
        const accounts = await provider.send('eth_requestAccounts', []);
        let network_details = await provider.getNetwork();

        return {
            isConnected: true,
            address: accounts[0],
            network: network_details.chainId,
        };

    } catch (error: any) {
        error.code === 4001 &&
            toast.error('Please accept connection request', {
                position: 'top-right',
            });
    }
};

// const getSignedMaticContract = () => {
//     const { ethereum }: any = window;
//     const provider = new ethers.providers.Web3Provider(ethereum);
//     const signer = provider.getSigner();
//     // @ts-ignore
//     let ca = NETWORKS.polygon_mumbai.ca;
//     // @ts-ignore
//     let abi = NETWORKS.polygon_mumbai.abi;
//     const ct = new ethers.Contract(ca, abi, provider);
//     let signed = ct.connect(signer);
//     return signed;
// };
const getSignedContract = (chainId: any) => {
    if (!chainId) return null
    const current_network: any = Object.values(SUPPORTED_NETWORKS).filter((entry: any) => {
        return entry.chainId === chainId
    })
    const { ethereum }: any = window;
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();

    // @ts-ignore
    let ca = current_network[0].ca;
    // @ts-ignore
    let abi = current_network[0].abi;

    const ct = new ethers.Contract(ca, abi, provider);
    let signed = ct.connect(signer);

    return signed;
};

const networks = {
    filecoin: {
        chainId: `0x${Number(fil_chain_id).toString(16)}`,
        chainName: 'Filecoin - Hyperspace testnet',
        nativeCurrency: {
            name: 'tFIL',
            symbol: 'tFIL',
            decimals: 18,
        },
        rpcUrls: ['https://api.hyperspace.node.glif.io/rpc/v1'],
        blockExplorerUrls: ['https://hyperspace.filfox.info/en'],
    },
    polygon: {
        chainId: `0x${Number(80001).toString(16)}`,
        chainName: 'Mumbai',
        nativeCurrency: {
            name: 'MATIC',
            symbol: 'MATIC',
            decimals: 18,
        },
        rpcUrls: ['https://rpc-mumbai.maticvigil.com/'],
        blockExplorerUrls: ['https://mumbai.polygonscan.com/'],
    },
    bsc: {
        chainId: `0x${Number(56).toString(16)}`,
        chainName: 'Binance Smart Chain Testnet',
        nativeCurrency: {
            name: 'Binance Chain Native Token',
            symbol: 'BNB',
            decimals: 18,
        },
        rpcUrls: [
            'https://bsc-dataseed1.binance.org',
            'https://bsc-dataseed2.binance.org',
            'https://bsc-dataseed3.binance.org',
            'https://bsc-dataseed4.binance.org',
            'https://bsc-dataseed1.defibit.io',
            'https://bsc-dataseed2.defibit.io',
            'https://bsc-dataseed3.defibit.io',
            'https://bsc-dataseed4.defibit.io',
            'https://bsc-dataseed1.ninicoin.io',
            'https://bsc-dataseed2.ninicoin.io',
            'https://bsc-dataseed3.ninicoin.io',
            'https://bsc-dataseed4.ninicoin.io',
            'wss://bsc-ws-node.nariox.org',
        ],
        blockExplorerUrls: ['https://bscscan.com'],
    },
};

export {
    checkConnection,
    connectWeb3,
    getSignedContract,
    fil_chain_id,
    matic_chain_id,
    networks,
    switchWeb3Network
};
