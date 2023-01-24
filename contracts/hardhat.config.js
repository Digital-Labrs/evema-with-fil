require("@nomicfoundation/hardhat-toolbox");

require('dotenv').config();
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-etherscan");

module.exports = {
  defaultNetwork: "polygon_mumbai",
  networks: {
    hardhat: {
    },

    polygon_mumbai: {
      url: "https://rpc-mumbai.maticvigil.com",
      accounts: [process.env.PRIVATE_KEY]
    },

    ploygon_mainnet: {
      url: "https://rpc-mainnet.matic.network/",
      accounts: [process.env.PRIVATE_KEY]
    },

    bsc_testnet: {
      url: "https://data-seed-prebsc-1-s1.binance.org:8545/",
      accounts: [process.env.PRIVATE_KEY]
    },


    bsc_mainnet: {
      url: "https://bsc-dataseed.binance.org/",
      accounts: [process.env.PRIVATE_KEY]
    },

    conflux_testnet: {
      url: "https://evmtestnet.confluxrpc.com/",
      accounts: [process.env.PRIVATE_KEY]
    },

    conflux_mainnet: {
      url: "https://evm.confluxrpc.com/",
      accounts: [process.env.PRIVATE_KEY]
    }
    
  },
  etherscan: {
    apiKey: {
      polygonMumbai: process.env.POLYGONSCAN_API_KEY
    }
  },
  solidity: {
    version: "0.8.17",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
}