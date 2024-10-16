export const BASE_SEPOLIA_CHAIN_ID = 84532;
export const mintContractAddress = '0x4b5668Cbed0C40FdC52a957256bB161cdDd1975B';
export const mintABI = [
  {
    inputs: [
      {
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
    ],
    name: 'mint',
    outputs: [],
    stateMutability: 'public',
    type: 'function',
  },
] as const;
