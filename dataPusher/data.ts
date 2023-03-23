import type * as TradingPlans from './models'
export const stocksTradingPlans: TradingPlans.TradingPlans[] = [
    {
        symbol: 'COIN',
        dailyRange: 7,
        fixQuantity: 100,
        keyLevels: {
            lastDefenseForLong: 70,
            lastDefenseForShort: 71,
            otherLevels: [66.63, 61.59, 65.1],
        },
        long: {
            openingDrive: { enabled: true },
        },
        short: {
            momentum: {
                breakoutLevels: [70],
            },
            retracement: {
                entryAreas: [
                    { priceLevel: 70, upperRoom: 1, lowerRoom: 0.75 },
                    { priceLevel: 69, upperRoom: 0.5, lowerRoom: 0.75 },
                    { priceLevel: 66.63, upperRoom: 1, lowerRoom: 0.75 },
                ],
                allowAgainstVwap: true,
            }
        },
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