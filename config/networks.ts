import mumbaiABI from './evema.json'
import filABI from './evemafil.json'

export const NETWORKS: any = {
    polygon_mumbai: { ca: "0x6Dd3BE79402E197dd31A763a96C1300e4134Ad09", abi: mumbaiABI, chainId: 80001, title: 'Mumbai' },
    fil_testnet: { ca: "0xeB880D6F73edc5e98AA540Be1CBDAB88960287FC", abi: filABI, chainId: 3141, title: 'Filecoin' }
}

