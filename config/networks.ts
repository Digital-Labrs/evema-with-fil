import mumbaiABI from './evema.json'
import filABI from './evemafil.json'

export const NETWORKS: any = {
    polygon_mumbai: {
        ca: "0x566C27A4953B13AF8388E45F26381c06A4D33B8e",
        abi: mumbaiABI,
        chainId: 80001,
        title: 'Mumbai'
    },
    fil_testnet: {
        ca: "0x67C00F69F2D5a8671A0C4B3bfccE79446bfC6911",
        abi: filABI,
        chainId: 3141,
        title: 'Filecoin'
    }
}

