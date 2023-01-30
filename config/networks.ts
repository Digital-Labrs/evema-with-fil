import mumbaiABI from './evema.json'
import filABI from './evemafil.json'

export const NETWORKS: any = {
    polygon_mumbai: {
        ca: "0x41338C306FfacD915d2df8DC51108F6b772e0a36",
        abi: mumbaiABI,
        chainId: 80001,
        title: 'Mumbai'
    },
    fil_testnet: {
        ca: "0x336BbC0c4df410480Dd0C3219141f04b51E25206",
        abi: filABI,
        chainId: 3141,
        title: 'Filecoin'
    }
}

