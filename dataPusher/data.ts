import type * as TradingPlans from './models'
export const stocksTradingPlans: TradingPlans.TradingPlans[] = [
    {
        symbol: 'JPM',
        dailyRange: 4,
        fixQuantity: 50,
        keyLevels: {
            lastDefenseForLong: 128,
            lastDefenseForShort: 136,
            otherLevels: [127.82],
        },
        long: {
            openingDrive: { enabled: true },
            retracement: {
                entryAreas: [
                    { priceLevel: 130, upperRoom: 0.5, lowerRoom: 0.5 },
                ],
                allowAgainstVwap: true,
                vwapArea: { upperRoom: 0.5, lowerRoom: 0.5 },
            },
            momentum: {
                breakoutLevels: [133],
            }
        },
        short: {},
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
        },
    },
    {
        symbol: 'QQQ',
        dailyRange: 4,
        fixQuantity: 100,
        keyLevels: {
            lastDefenseForLong: 296.37,
            lastDefenseForShort: 299.1,
            otherLevels: [298.43],
        },
        long: {
            retracement: {
                entryAreas: [
                    { priceLevel: 296.7, upperRoom: 0.5, lowerRoom: 0.5 },
                ],
                allowAgainstVwap: true,
                vwapArea: { upperRoom: 0.7, lowerRoom: 0.7 },
            },
            momentum: {
                breakoutLevels: [299.2],
            }
        },
        short: {
            openingDrive: { enabled: true },

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
];