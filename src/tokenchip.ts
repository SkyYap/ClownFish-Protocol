import { TokenChip } from '@coinbase/onchainkit/token';

export type TokenType = 'ETH' | 'stETH' | 'rzETH' | 'eETH';

export const TokenData: Record<TokenType, Parameters<typeof TokenChip>[0]['token']> = {
  ETH: {
    address: '0x1234',
    chainId: 1,
    decimals: 18,
    image: 'https://dynamic-assets.coinbase.com/dbb4b4983bde81309ddab83eb598358eb44375b930b94687ebe38bc22e52c3b2125258ffb8477a5ef22e33d6bd72e32a506c391caa13af64c00e46613c3e5806/asset_icons/4113b082d21cc5fab17fc8f2d19fb996165bcce635e6900f7fc2d57c4ef33ae9.png',
    name: 'Ethereum',
    symbol: 'ETH',
  },
  stETH: {
    address: '0xae7ab96520DE3A18E5e111B5EaAb095312D7fE84',
    chainId: 1,
    decimals: 18,
    image: 'https://assets.coingecko.com/coins/images/13442/thumb/steth_logo.png',
    name: 'Lido Staked Ether',
    symbol: 'stETH',
  },
  rzETH: {
    address: '0x465a5a630482f3abD6d3b84B39B29b07214d19e5',
    chainId: 1,
    decimals: 18,
    image: 'https://assets.coingecko.com/coins/images/34753/standard/Ezeth_logo_circle.png?1713496404',
    name: 'Renzo Restaked ETH',
    symbol: 'rzETH',
  },
  eETH: {
    address: '0x35fA164735182de50811E8e2E824cFb9B6118ac2',
    chainId: 1,
    decimals: 18,
    image: 'https://assets.coingecko.com/coins/images/35958/standard/etherfi.jpeg?1710254562',
    name: 'EtherFi Ether',
    symbol: 'eETH',
  },
};