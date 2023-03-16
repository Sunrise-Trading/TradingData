import type * as TradingPlans from './models'
export const stocksTradingPlans: TradingPlans.TradingPlans[] = [
    {
        symbol: 'META',
        dailyRange: 6,
        fixQuantity: 200,
        keyLevels: {
            lastDefenseForLong: 199,
            lastDefenseForShort: 201.5,
            otherLevels: [200, 204.8],
        },
        long: {
            openingDrive: { enabled: true },
            retracement: {
                entryAreas: [
                    { priceLevel: 199, upperRoom: 1, lowerRoom: 0.5 },
                    { priceLevel: 200, upperRoom: 1, lowerRoom: 1 },
                ],
                allowAgainstVwap: true,
                vwapArea: { upperRoom: 0.5, lowerRoom: 0.5 },
            },
            momentum: {
                breakoutLevels: [200],
            }
        },
        short: {
            openingDrive: { enabled: true },
            retracement: {
                entryAreas: [
                    { priceLevel: 201.25, upperRoom: 0.5, lowerRoom: 0.5 },
                    { priceLevel: 200, upperRoom: 0.5, lowerRoom: 0.5 },
                ],
                allowAgainstVwap: false,
                vwapArea: { upperRoom: 0.5, lowerRoom: 0.5 },
            },
        },
    },
    {
        symbol: 'TSLA',
        dailyRange: 9,
        fixQuantity: 50,
        keyLevels: {
            lastDefenseForLong: 166,
            lastDefenseForShort: 175,
            otherLevels: [178.29],
        },
        long: {
            openingDrive: { enabled: true },
            retracement: {
                entryAreas: [
                    { priceLevel: 166, upperRoom: 0.5, lowerRoom: 0.5 },
                ],
                allowAgainstVwap: true,
                vwapArea: { upperRoom: 0.5, lowerRoom: 0.5 },
            },
            momentum: {
                breakoutLevels: [171],
            }
        },
        short: {
            retracement: {
                entryAreas: [
                    { priceLevel: 171.3, upperRoom: 0.5, lowerRoom: 0.5 },
                ],
                allowAgainstVwap: true,
                vwapArea: { upperRoom: 0.5, lowerRoom: 0.5 },
            },
            momentum: {
                breakoutLevels: [171],
            }
        },
    },
    {
        symbol: 'KRE',
        dailyRange: 4,
        fixQuantity: 100,
        keyLevels: {
            lastDefenseForLong: 45,
            lastDefenseForShort: 50,
            otherLevels: [48.44],
        },
        long: {
            openingDrive: { enabled: true },
            momentum: {
                breakoutLevels: [47.25],
            }
        },
        short: {},
    },
    {
        symbol: 'QQQ',
        dailyRange: 4,
        fixQuantity: 100,
        keyLevels: {
            lastDefenseForLong: 285,
            lastDefenseForShort: 290,
            otherLevels: [287.38],
        },
        long: {
            openingDrive: { enabled: true },
            retracement: {
                entryAreas: [
                    { priceLevel: 287.38, upperRoom: 0.5, lowerRoom: 0.5 },
                    { priceLevel: 284.73, upperRoom: 0.5, lowerRoom: 0.5 },
                ],
                allowAgainstVwap: true,
                vwapArea: { upperRoom: 0.7, lowerRoom: 0.7 },
            },
            momentum: {
                breakoutLevels: [299.2],
            }
        },
        short: {},
    },
    {
        symbol: 'MESM23',
        dailyRange: 40,
        fixQuantity: 2,
        keyLevels: {
            lastDefenseForShort: 4000,
            lastDefenseForLong: 3000,
            otherLevels: [],
        },
        long: {},
        short: {},
    },
    {
        symbol: 'MNQM23',
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
];