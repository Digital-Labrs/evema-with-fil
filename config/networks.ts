import mumbaiABI from './evema.json'
import filABI from './evemafil.json'

export const NETWORKS: any = {
    polygon_mumbai: {
        ca: "0xc3a06FbB1477dE3bC24a75A1807151d43eC6A913",
        abi: mumbaiABI,
        chainId: 80001,
        title: 'Mumbai'
    },
    fil_testnet: {
        ca: "0x05eC409dD081405659F104e68C2e0686Ed1146d8",
        abi: filABI,
        chainId: 3141,
        title: 'Filecoin'
    }
}

