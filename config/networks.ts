import rpcUrls from '../rpcUrls'
import mumbaiABI from './evema.json'
import filABI from './evemafil.json'
import ftmABI from './evemaftm.json'

export type NetData = {


    ca: string
    abi: any
    chainId: number,
    title: string,
    rpc: string

}


export const NETWORKS: {
    polygon_mumbai: NetData,
    fil_testnet: NetData,
    ftm_testnet: NetData,
} = {
    polygon_mumbai: {
        ca: "0x41338C306FfacD915d2df8DC51108F6b772e0a36",
        abi: mumbaiABI,
        chainId: 80001,
        title: 'Mumbai',
        rpc: rpcUrls.mumbai
    },
    fil_testnet: {
        ca: "0x336BbC0c4df410480Dd0C3219141f04b51E25206",
        abi: filABI,
        chainId: 3141,
        title: 'Filecoin',
        rpc: rpcUrls.filecoin

    },
    ftm_testnet: {
        ca: "0x9b83F0043135c7322aA689f8284fb6BFcb5dCf9A",
        abi: ftmABI,
        chainId: 4002,
        title: 'Fantom',
        rpc: rpcUrls.fantom

    }

}

