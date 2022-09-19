const symbolMap = {
    1: [
        {
            tokenSymbol: 'USDT',
            tokenAddress: '0xdAC17F958D2ee523a2206206994597C13D831ec7',
            tokenDecimals: 6,
            tokenImage: 'https://s2.coinmarketcap.com/static/img/coins/128x128/825.png'
        },
        {
            tokenSymbol: 'USDC',
            tokenAddress: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
            tokenDecimals: 6,
            tokenImage: 'https://assets.coingecko.com/coins/images/6319/large/USD_Coin_icon.png'
        },
        {
            tokenSymbol: 'BUSD',
            tokenAddress: '0x4Fabb145d64652a948d72533023f6E7A623C7C53',
            tokenDecimals: 18,
            tokenImage: 'https://seeklogo.com/images/B/binance-usd-busd-logo-A436FCF6B6-seeklogo.com.png'
        },
        {
            tokenSymbol: 'cUSDT',
            tokenAddress: '0xf650C3d88D12dB855b8bf7D11Be6C55A4e07dCC9',
            tokenDecimals: 8,
            tokenImage: 'https://s2.coinmarketcap.com/static/img/coins/128x128/5745.png'
        }
    ],
    137: [
        {
            tokenSymbol: 'USDT',
            tokenAddress: '0xc2132D05D31c914a87C6611C10748AEb04B58e8F',
            tokenDecimals: 6,
            tokenImage: 'https://s2.coinmarketcap.com/static/img/coins/128x128/825.png'
        },
        {
            tokenSymbol: 'OSIS',
            tokenAddress: '0x8303396EA8b5419E187950Ce609ea1F610289912',
            tokenDecimals: 18,
            tokenImage: 'https://osis.world/website/assets/images/about-us/about_main.png'
        },
    ],

    56: [
        {
            tokenSymbol: 'USDT',
            tokenAddress: '0x55d398326f99059ff775485246999027b3197955',
            tokenDecimals: 18,
            tokenImage: 'https://s2.coinmarketcap.com/static/img/coins/128x128/825.png'
        },
        {
            tokenSymbol: 'USDC',
            tokenAddress: '0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d',
            tokenDecimals: 18,
            tokenImage: 'https://assets.coingecko.com/coins/images/6319/large/USD_Coin_icon.png'
        },
        {
            tokenSymbol: 'BUSD',
            tokenAddress: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
            tokenDecimals: 18,
            tokenImage: 'https://seeklogo.com/images/B/binance-usd-busd-logo-A436FCF6B6-seeklogo.com.png'
        },
        {
            tokenSymbol: 'APX',
            tokenAddress: '0x78f5d389f5cdccfc41594abab4b0ed02f31398b3',
            tokenDecimals: 18,
            tokenImage: 'https://s2.coinmarketcap.com/static/img/coins/128x128/16334.png'
        },
        {
            tokenSymbol: 'CAKE',
            tokenAddress: '0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82',
            tokenDecimals: 18,
            tokenImage: 'https://s2.coinmarketcap.com/static/img/coins/128x128/7186.png'
        },
        {
            tokenSymbol: 'BABY',
            tokenAddress: '0x53E562b9B7E5E94b81f10e96Ee70Ad06df3D2657',
            tokenDecimals: 18,
            tokenImage: 'https://3407578001-files.gitbook.io/~/files/v0/b/gitbook-legacy-files/o/assets%2F-M_nwMvN8sUkjfbgBQzF%2F-Ma4SK31T5waAWtTTZgU%2F-Ma4UDMyZgDZsOahftN4%2FBABY-icon.png?alt=media&token=2a08bcbe-8db4-4988-9769-5c2b63e4b52d'
        },
        {
            tokenSymbol: 'LEOS',
            tokenAddress: '0x2c8368f8F474Ed9aF49b87eAc77061BEb986c2f1',
            tokenDecimals: 8,
            tokenImage: 'https://s2.coinmarketcap.com/static/img/coins/128x128/10762.png'
        },
        {
            tokenSymbol: 'BANANA',
            tokenAddress: '0x603c7f932ed1fc6575303d8fb018fdcbb0f39a95',
            tokenDecimals: 18,
            tokenImage: 'https://s2.coinmarketcap.com/static/img/coins/128x128/8497.png'
        },
        {
            tokenSymbol: 'vUSDT',
            tokenAddress: '0xfD5840Cd36d94D7229439859C0112a4185BC0255',
            tokenDecimals: 8,
            tokenImage: 'https://s2.coinmarketcap.com/static/img/coins/128x128/7957.png'
        },
        {
            tokenSymbol: 'GST',
            tokenAddress: '0x4a2c860cEC6471b9F5F5a336eB4F38bb21683c98',
            tokenDecimals: 8,
            tokenImage: 'https://assets.coingecko.com/coins/images/21841/large/gst.png?1640332626'
        }
    ],
    // Testnet
    4: [
        {
            tokenSymbol: 'USDT',
            tokenAddress: '0x163348487ff21ee4ef72448e603491bb66a34162',
            tokenDecimals: 6,
            tokenImage: 'https://s2.coinmarketcap.com/static/img/coins/128x128/825.png'
        },
        {
            tokenSymbol: 'USDC',
            tokenAddress: '0xbd34aeb5cf649f471cd69b6e12ca33cd68224315',
            tokenDecimals: 6,
            tokenImage: 'https://assets.coingecko.com/coins/images/6319/large/USD_Coin_icon.png'
        },
        {
            tokenSymbol: 'BUSD',
            tokenAddress: '0x461c09683aab14a8ebb55809c1854b31e4f23422',
            tokenDecimals: 18,
            tokenImage: 'https://seeklogo.com/images/B/binance-usd-busd-logo-A436FCF6B6-seeklogo.com.png'
        },
        {
            tokenSymbol: 'cUSDT',
            tokenAddress: '0x8d38f8F523b57b383D0e9Ed947D6570612D2659d',
            tokenDecimals: 8,
            tokenImage: 'https://s2.coinmarketcap.com/static/img/coins/128x128/5745.png'
        }
    ],
    97: [
        {
            tokenSymbol: 'USDT',
            tokenAddress: '0xb9ef9c975ebb606498d14b105a1619e89255c972',
            tokenDecimals: 18,
            tokenImage: 'https://s2.coinmarketcap.com/static/img/coins/128x128/825.png'
        },
        {
            tokenSymbol: 'USDC',
            tokenAddress: '0xddef1fa96426191027a04d7d044f2c8ad4ea6f88',
            tokenDecimals: 18,
            tokenImage: 'https://assets.coingecko.com/coins/images/6319/large/USD_Coin_icon.png'
        },
        {
            tokenSymbol: 'BUSD',
            tokenAddress: '0x960a155110e963db20123b2ee1cd5c2c633f3503',
            tokenDecimals: 18,
            tokenImage: 'https://seeklogo.com/images/B/binance-usd-busd-logo-A436FCF6B6-seeklogo.com.png'
        },
        {
            tokenSymbol: 'APX',
            tokenAddress: '0xa30fa4cd0e1d9a6a9e1c75e585a052b6ff71eb76',
            tokenDecimals: 18,
            tokenImage: 'https://s2.coinmarketcap.com/static/img/coins/128x128/16334.png'
        },
        {
            tokenSymbol: 'CAKE',
            tokenAddress: '0x1aed991857cce58add85e20b6f0c8ed2f88b77e0',
            tokenDecimals: 18,
            tokenImage: 'https://s2.coinmarketcap.com/static/img/coins/128x128/7186.png'
        },
        {
            tokenSymbol: 'BABY',
            tokenAddress: '0xccef85adc8656c2a44fa228285b5452f9b49917f',
            tokenDecimals: 18,
            tokenImage: 'https://3407578001-files.gitbook.io/~/files/v0/b/gitbook-legacy-files/o/assets%2F-M_nwMvN8sUkjfbgBQzF%2F-Ma4SK31T5waAWtTTZgU%2F-Ma4UDMyZgDZsOahftN4%2FBABY-icon.png?alt=media&token=2a08bcbe-8db4-4988-9769-5c2b63e4b52d'
        },
        {
            tokenSymbol: 'LEOS',
            tokenAddress: '0xE69F0d18951bbf45d57414870C0cc7b71697cAbb',
            tokenDecimals: 8,
            tokenImage: 'https://s2.coinmarketcap.com/static/img/coins/128x128/10762.png'
        },
        {
            tokenSymbol: 'BANANA',
            tokenAddress: '0x04912622dc52d96FD8ce46386380bd52907b548e',
            tokenDecimals: 18,
            tokenImage: 'https://s2.coinmarketcap.com/static/img/coins/128x128/8497.png'
        },
        {
            tokenSymbol: 'vUSDT',
            tokenAddress: '0xc27d8d4eC72CAe8C3B384a927D98efde2Dfc53D4',
            tokenDecimals: 8,
            tokenImage: 'https://s2.coinmarketcap.com/static/img/coins/128x128/7957.png'
        },
        {
            tokenSymbol: 'GST',
            tokenAddress: '0x3c213F1a3b61Feb6b5F009F0c92438a459D3955F',
            tokenDecimals: 8,
            tokenImage: 'https://assets.coingecko.com/coins/images/21841/large/gst.png?1640332626'
        }
    ]
};

export default symbolMap;