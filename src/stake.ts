export const OPTIMISM_SEPOLIA_CHAIN_ID = 11155420;
export const stakeContractAddress = '0x9FFdD45cc3A9C3844405449A27E33519A8DF8c8a';
export const stakeABI = [
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
