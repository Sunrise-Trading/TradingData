import type * as TradingPlans from './models'
export const stocksTradingPlans: TradingPlans.TradingPlans[] = [
    {
        symbol: 'SIVB',
        dailyRange: 10,
        fixQuantity: 30,
        keyLevels: {
            lastDefenseForLong: 33,
            lastDefenseForShort: 86,
            otherLevels: [55.69],
        },
        long: {
            openingDrive: { enabled: true },
            retracement: {
                entryAreas: [
                    { priceLevel: 33.46, upperRoom: 1, lowerRoom: 1 },
                    { priceLevel: 40, upperRoom: 1, lowerRoom: 1 },
                ],
                allowAgainstVwap: true,
                vwapArea: { upperRoom: 1, lowerRoom: 1 },
            },
            momentum: {
                breakoutLevels: [40.5],
            }
        },
        short: {
            retracement: {
                entryAreas: [
                    { priceLevel: 56, upperRoom: 1, lowerRoom: 1 },
                ],
                allowAgainstVwap: true,
                vwapArea: { upperRoom: 1, lowerRoom: 1 },
            },
            momentum: {
                breakoutLevels: [33.4],
            }
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