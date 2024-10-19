// Weird Chain Selector but obtained from Chainlink
export const WEIRD_CHAINLINK_BASE_SEPOLIA_CHAIN_ID = 10344971235874465080;
export const OPTIMISM_SEPOLIA_CHAIN_ID = 11155420;
export const mintContractAddress = '0xFd9738619115cd4BcB8311597D5C3Df7eBf18488';
export const mintABI = [
  {
    "inputs": [
      {
        "internalType": "uint64",
        "name": "destinationChainSelector",
        "type": "uint64"
      },
      {
        "internalType": "address",
        "name": "receiver",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      },
      {
        "internalType": "enum SourceMinter.PayFeesIn",
        "name": "payFeesIn",
        "type": "uint8"
      }
    ],
    "name": "mint",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
] as const;
