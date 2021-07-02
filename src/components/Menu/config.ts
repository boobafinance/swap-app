import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
    {
        label: 'Home',
        icon: 'HomeIcon',
        href: 'https://app.boobafinance.com/', 
      },
      {
        label: 'BOOBAM',
        icon: 'LogoBoba',
        href: '?outputCurrency=0x5481a517028813956005d77bcd0f561c7276b1e3',
      },
      {
        label: 'LIVE',
        icon: 'LogoLive',
        href: '?outputCurrency=0x45EeDF18492b6eEe6Ba99d578D0De16ca3bD8967',
      },
      {
        label: 'Farm',
        icon: 'FarmIcon',
        href: 'https://app.boobafinance.com/farms',
      },

      {
        label: 'NFTs Marketplace',
        icon: 'HandshakeIcon',
        href: 'https://app.boobafinance.com/soon/nfts',
      },
      {
        label: 'My NFT ',
        icon: 'NftIcon',
        href: 'https://app.boobafinance.com/soon/mynfts',
      },
      {
        label: 'Graphics',
        icon: 'InfoIcon',
        items: [
          
          {
            label: 'DexGuru',
            href: 'https://dex.guru/token/0x5481a517028813956005d77bcd0f561c7276b1e3-bsc',
          },
          
          {
            label: 'Bogged',
            href: 'https://charts.bogged.finance/?token=0x5481A517028813956005d77bcD0F561c7276b1e3',
          },
           
          {
            label: 'Poocoin',
            href: 'https://poocoin.app/tokens/0x5481a517028813956005d77bcd0f561c7276b1e3',
          },
     
        ],
      },
    
      {
        label: 'Listing',
        icon: 'LanguageIcon',
        items: [
          
          {
            label: 'CoinPaprika',
            href: 'https://coinpaprika.com/criptomoeda/boba-boobam-1/',
          },
          
          {
            label: 'CoinMarketcap (Soon)',
            href: '#',
          },
           
          {
            label: 'CoinGecko (Soon)',
            href: '#',
          },
     
        ],
      },
    
    
      {
        label: 'More',
        icon: 'MoreIcon',
        items: [
          // {
          //   label: 'Voting',
          //   href: 'https://voting.pancakeswap.finance',
          // },
          {
            label: 'Github',
            href: 'https://github.com/boobafinance',
          },
         // {
         //   label: 'Token Facts',
         //   href: 'https://vlad.finance/token-facts',
         // },
          {
            label: 'Twitter',
            href: 'https://twitter.com/boobamtoken',
          },
          {
            label: 'Boobam Finance',
            href: 'https://boobamfinance.medium.com/qwhoever-participates-in-boobam-wins-on-both-sides-socially-and-economically-5084c006c0b6',
          },
          // {
          //   label: 'Roadmap',
          //   href: 'https://vlad-finance.medium.com/roadmap/',
          // },
        ],
      },
] 

export default config


