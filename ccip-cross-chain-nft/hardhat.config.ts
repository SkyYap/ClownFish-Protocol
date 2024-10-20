// import * as dotenvenc from '@chainlink/env-enc'
// dotenvenc.config();
import * as dotenv from 'dotenv'
dotenv.config();

import { HardhatUserConfig } from 'hardhat/config';
import '@nomicfoundation/hardhat-toolbox';
import './tasks';
import '@nomicfoundation/hardhat-verify';
import "@typechain/hardhat";
import "@nomicfoundation/hardhat-ethers";

const PRIVATE_KEY = process.env.PRIVATE_KEY;
const ETHEREUM_SEPOLIA_RPC_URL = process.env.ETHEREUM_SEPOLIA_RPC_URL;
const OPTIMISM_SEPOLIA_RPC_URL = process.env.OPTIMISM_SEPOLIA_RPC_URL;
const ARBITRUM_SEPOLIA_RPC_URL = process.env.ARBITRUM_SEPOLIA_RPC_URL;
// const AVALANCHE_FUJI_RPC_URL = process.env.AVALANCHE_FUJI_RPC_URL;
const POLYGON_AMOY_RPC_URL = process.env.POLYGON_AMOY_RPC_URL;
// const BNB_CHAIN_TESTNET_RPC_URL = process.env.BNB_CHAIN_TESTNET_RPC_URL;
const BASE_SEPOLIA_RPC_URL = process.env.BASE_SEPOLIA_RPC_URL;
// const KROMA_SEPOLIA_RPC_URL = process.env.KROMA_SEPOLIA_RPC_URL;
// const WEMIX_TESTNET_RPC_URL = process.env.WEMIX_TESTNET_RPC_URL;
// const GNOSIS_CHIADO_RPC_URL = process.env.GNOSIS_CHIADO_RPC_URL;
// const CELO_ALFAJORES_RPC_URL = process.env.CELO_ALFAJORES_RPC_URL;

const config: HardhatUserConfig = {
  solidity: '0.8.20',
  networks: {
    hardhat: {
      chainId: 31337
    },
    ethereumSepolia: {
      url: ETHEREUM_SEPOLIA_RPC_URL !== undefined ? ETHEREUM_SEPOLIA_RPC_URL : '',
      accounts: PRIVATE_KEY !== undefined ? [PRIVATE_KEY] : [],
      chainId: 11155111
    },
    polygonAmoy: {
      url: POLYGON_AMOY_RPC_URL !== undefined ? POLYGON_AMOY_RPC_URL : '',
      accounts: PRIVATE_KEY !== undefined ? [PRIVATE_KEY] : [],
      chainId: 80002
    },
    optimismSepolia: {
      url: OPTIMISM_SEPOLIA_RPC_URL !== undefined ? OPTIMISM_SEPOLIA_RPC_URL : '',
      accounts: PRIVATE_KEY !== undefined ? [PRIVATE_KEY] : [],
      chainId: 11155420,
    },
    arbitrumSepolia: {
      url: ARBITRUM_SEPOLIA_RPC_URL !== undefined ? ARBITRUM_SEPOLIA_RPC_URL : '',
      accounts: PRIVATE_KEY !== undefined ? [PRIVATE_KEY] : [],
      chainId: 421614
    },
    // avalancheFuji: {
    //   url: AVALANCHE_FUJI_RPC_URL !== undefined ? AVALANCHE_FUJI_RPC_URL : '',
    //   accounts: PRIVATE_KEY !== undefined ? [PRIVATE_KEY] : [],
    //   chainId: 43113
    // },
    // bnbChainTestnet: {
    //   url: BNB_CHAIN_TESTNET_RPC_URL !== undefined ? BNB_CHAIN_TESTNET_RPC_URL : '',
    //   accounts: PRIVATE_KEY !== undefined ? [PRIVATE_KEY] : [],
    //   chainId: 97
    // },
    baseSepolia: {
      url: BASE_SEPOLIA_RPC_URL !== undefined ? BASE_SEPOLIA_RPC_URL : '',
      accounts: PRIVATE_KEY !== undefined ? [PRIVATE_KEY] : [],
      chainId: 84532
    },
    // kromaSepolia: {
    //   url: KROMA_SEPOLIA_RPC_URL !== undefined ? KROMA_SEPOLIA_RPC_URL : '',
    //   accounts: PRIVATE_KEY !== undefined ? [PRIVATE_KEY] : [],
    //   chainId: 2358
    // },
    // wemixTestnet: {
    //   url: WEMIX_TESTNET_RPC_URL !== undefined ? WEMIX_TESTNET_RPC_URL : '',
    //   accounts: PRIVATE_KEY !== undefined ? [PRIVATE_KEY] : [],
    //   chainId: 1112
    // },
    // gnosisChiado: {
    //   url: GNOSIS_CHIADO_RPC_URL !== undefined ? GNOSIS_CHIADO_RPC_URL : '',
    //   accounts: PRIVATE_KEY !== undefined ? [PRIVATE_KEY] : [],
    //   chainId: 10200
    // },
    // celoAlfajores: {
    //   url: CELO_ALFAJORES_RPC_URL !== undefined ? CELO_ALFAJORES_RPC_URL : '',
    //   accounts: PRIVATE_KEY !== undefined ? [PRIVATE_KEY] : [],
    //   chainId: 44787
    // }
  },
  etherscan: {
    apiKey: {
      arbitrumSepolia: process.env.ARBISCAN_API_KEY || '',
      optimismSepolia: process.env.OPTIMISM_API_KEY || '',
      baseSepolia: process.env.BASESCAN_API_KEY || ''
    },
    customChains: [
      {
        network: 'arbitrumSepolia',
        chainId: 421614,
        urls: {
          apiURL: 'https://api-sepolia.arbiscan.io/api',
          browserURL: 'https://sepolia.arbiscan.io'
        }
      },
      {
        network: 'optimismSepolia',
        chainId: 11155420,
        urls: {
          apiURL: 'https://api-sepolia-optimism.etherscan.io/api',
          browserURL: 'https://sepolia-optimism.etherscan.io'
        }
      },
      {
        network: 'baseSepolia',
        chainId: 84532,
        urls: {
          apiURL: 'https://api-sepolia.basescan.org/api',
          browserURL: 'https://sepolia.basescan.org'
        }
      }
    ]
  }
};

export default config;
