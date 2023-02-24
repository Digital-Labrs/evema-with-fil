const apiKey = process.env.NEXT_PUBLIC_ALCHEMY_KEY;
const rpcUrls = {
    mumbai: 'https://polygon-mumbai.g.alchemy.com/v2/' + apiKey,
    fantom: 'https://rpc.testnet.fantom.network',
    fantom2: 'https://endpoints.omniatech.io/v1/fantom/testnet/public',
    filecoin: 'https://api.hyperspace.node.glif.io/rpc/v1'
}


export default rpcUrls