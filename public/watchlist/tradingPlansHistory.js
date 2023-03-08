let tradingPlans = {
    '3/8/2023': [
        {
            symbol: 'TSLA',
            dailyRange: 7,
            fixQuantity: 60,
            keyLevels: {
                lastDefenseForLong: 0,
                lastDefenseForShort: 188.45,
                otherLevels: [185.42, 187.2],
            },
            long: {},
            short: {
                openingDrive: { enabled: true },
                retracement: {
                    entryAreas: [
                        { priceLevel: 187.25, upperRoom: 0.5, lowerRoom: 0.5 },
                        { priceLevel: 186.1, upperRoom: 0.5, lowerRoom: 0.5 },
                    ],
                    allowAgainstVwap: true,
                    vwapArea: { upperRoom: 0.7, lowerRoom: 0.7 },
                },
                momentum: {
                    breakoutLevels: [184.36],
                }
            },
        },
        {
            symbol: 'META',
            dailyRange: 4.5,
            fixQuantity: 110,
            keyLevels: {
                lastDefenseForShort: 185.6,
                lastDefenseForLong: 184,
                otherLevels: [185],
            },
            long: {},
            short: {
                openingDrive: { enabled: true },
                retracement: {
                    entryAreas: [
                        { priceLevel: 184.5, upperRoom: 0.5, lowerRoom: 0.5 },
                        { priceLevel: 184, upperRoom: 0.5, lowerRoom: 0.5 },
                    ],
                    allowAgainstVwap: false,
                    vwapArea: { upperRoom: 0.5, lowerRoom: 0.5 },
                },
                momentum: {
                    breakoutLevels: [182.5],
                }
            },
        },
        {
            symbol: 'MESH23',
            dailyRange: 40,
            fixQuantity: 2,
            keyLevels: {
                lastDefenseForShort: 4000,
                lastDefenseForLong: 3000,
                otherLevels: [],
            },
            long: {},
            short: {},
        }
    ],
    '3/6/2023': [
        {
            symbol: 'TSLA',
            dailyRange: 7,
            fixQuantity: 50,
            keyLevels: {
                lastDefenseForLong: 198,
                lastDefenseForShort: 201,
                otherLevels: [197],
            },
            long: {},
            short: {
                openingDrive: { enabled: true },
                retracement: {
                    entryAreas: [
                        { priceLevel: 200.48, upperRoom: 0.5, lowerRoom: 0.5 },
                        { priceLevel: 199.6, upperRoom: 0.5, lowerRoom: 0.5 },
                    ],
                    allowAgainstVwap: true,
                    vwapArea: { upperRoom: 0.7, lowerRoom: 0.7 },
                },
                momentum: {
                    breakoutLevels: [198.5],
                }
            },
        },
        {
            symbol: 'SPY',
            dailyRange: 4,
            fixQuantity: 100,
            keyLevels: {
                lastDefenseForShort: 405.63,
                lastDefenseForLong: 0,
                otherLevels: [404.45],
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
                lastDefenseForShort: 301.45,
                lastDefenseForLong: 0,
                otherLevels: [299.92],
            },
            long: {},
            short: {
                openingDrive: { enabled: true },
            },
        },
        {
            symbol: 'AAPL',
            dailyRange: 3.5,
            fixQuantity: 200,
            keyLevels: {
                lastDefenseForShort: 154.1,
                lastDefenseForLong: 152.16,
                otherLevels: [152.88, 152.18],
            },
            long: {
                retracement: {
                    entryAreas: [
                        { priceLevel: 152.88, upperRoom: 0.3, lowerRoom: 0.3 },
                    ],
                    allowAgainstVwap: true,
                    vwapArea: { upperRoom: 0.3, lowerRoom: 0.3 },
                },
                momentum: {
                    breakoutLevels: [154.01],
                }
            },
            short: {
                openingDrive: { enabled: true },
            },
        },
    ],
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