export const BASE_SEPOLIA_CHAIN_ID = 11155420;
export const mintContractAddress = '0x50Ca92f556553448FA75AD1cDc358622fd4b0b55';
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
  }
] as const;
