import type * as TradingPlans from './models'
export const stocksTradingPlans: TradingPlans.TradingPlans[] = [
    {
        symbol: 'UBS',
        dailyRange: 0.7,
        fixQuantity: 500,
        keyLevels: {
            lastDefenseForLong: 19.76,
            lastDefenseForShort: 20.5,
            otherLevels: [20],
        },
        long: {
            openingDrive: { enabled: true },
            retracement: {
                entryAreas: [
                    { priceLevel: 20, upperRoom: 0.2, lowerRoom: 0.2 },
                    { priceLevel: 19.76, upperRoom: 0.15, lowerRoom: 0.15 },
                ],
                allowAgainstVwap: false,
                vwapArea: { upperRoom: 0.1, lowerRoom: 0.1 },
            },
            momentum: {
                breakoutLevels: [20.5],
            }
        },
        short: {},
    },
    {
        symbol: 'KRE',
        dailyRange: 2.5,
        fixQuantity: 200,
        keyLevels: {
            lastDefenseForLong: 79,
            lastDefenseForShort: 44.7,
            otherLevels: [45.58],
        },
        long: {
            openingDrive: { enabled: true },
            retracement: {
                entryAreas: [
                    { priceLevel: 45.58, upperRoom: 0.2, lowerRoom: 0.2 },
                ],
                allowAgainstVwap: false,
            },
            momentum: { breakoutLevels: [46.1] },
        },
        short: {
            openingDrive: { enabled: true },
        }
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