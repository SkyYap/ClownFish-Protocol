export const OPTIMISM_SEPOLIA_CHAIN_ID = 11155420;
export const stakeContractAddress = '0xFd9738619115cd4BcB8311597D5C3Df7eBf18488';
export const getStakedBalanceABI = [
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "user",
        "type": "address"
      }
    ],
    "name": "getStakedBalance",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
] as const;
