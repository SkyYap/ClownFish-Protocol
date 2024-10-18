export const OPTIMISM_SEPOLIA_CHAIN_ID = 11155420;
export const stakeContractAddress = '0x50Ca92f556553448FA75AD1cDc358622fd4b0b55';
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
  }
] as const;
