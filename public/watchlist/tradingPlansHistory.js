let tradingPlans = {
    '3/2/2023': [
        {
            symbol: 'TSLA',
            dailyRange: 10,
            fixQuantity: 50,
            keyLevels: {
                lastDefenseForLong: 185.42,
                lastDefenseForShort: 190,
                otherLevels: [198.52],
            },
            long: {
                openingDrive: { enabled: true },
                retracement: {
                    entryAreas: [
                        { priceLevel: 201.5, upperRoom: 0.5, lowerRoom: 0.5 },
                        { priceLevel: 200.72, upperRoom: 0.5, lowerRoom: 0.5 },
                        { priceLevel: 200.2, upperRoom: 0.5, lowerRoom: 0.5 },
                        { priceLevel: 197.76, upperRoom: 0.5, lowerRoom: 0.5 },
                    ],
                    allowAgainstVwap: true,
                    vwapArea: { upperRoom: 0.7, lowerRoom: 0.7 },
                },
                momentum: {
                    breakoutLevels: [],
                }
            },
            short: {
                openingDrive: { enabled: true },
                retracement: {
                    entryAreas: [
                        { priceLevel: 188, upperRoom: 0.5, lowerRoom: 0.5 },
                        { priceLevel: 188.88, upperRoom: 0.5, lowerRoom: 0.5 },
                    ],
                    allowAgainstVwap: true,
                    vwapArea: { upperRoom: 0.7, lowerRoom: 0.7 },
                },
                momentum: {
                    breakoutLevels: [],
                }
            }
        },
    ],
    '2/27/2023': [
        {
            symbol: 'TSLA',
            dailyRange: 8,
            fixQuantity: 50,
            keyLevels: {
                lastDefenseForLong: 197.6,
                lastDefenseForShort: 0,
                otherLevels: [203.88],
            },
            long: {
                retracement: {
                    entryAreas: [
                        { priceLevel: 201.5, upperRoom: 0.5, lowerRoom: 0.5 },
                        { priceLevel: 200.72, upperRoom: 0.5, lowerRoom: 0.5 },
                        { priceLevel: 200.2, upperRoom: 0.5, lowerRoom: 0.5 },
                        { priceLevel: 197.76, upperRoom: 0.5, lowerRoom: 0.5 },
                    ],
                    allowAgainstVwap: true,
                    vwapArea: { upperRoom: 0.7, lowerRoom: 0.7 },
                },
            },
            short: {}
        },
        {
            symbol: 'SPY',
            dailyRange: 4,
            fixQuantity: 100,
            keyLevels: {
                lastDefenseForShort: 400.28,
                lastDefenseForLong: 0,
                otherLevels: [100],
            },
            long: {},
            short: {
                openingDrive: { enabled: true },
            },
        },
        {
            symbol: 'QQQ',
            dailyRange: 4,
            fixQuantity: 100,
            keyLevels: {
                lastDefenseForShort: 295.62,
                lastDefenseForLong: 0,
                otherLevels: [100],
            },
            long: {},
            short: {
                openingDrive: { enabled: true },
            },
        },
    ]
}