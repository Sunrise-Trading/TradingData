import type * as TradingPlans from './models'
export const stocksTradingPlans: TradingPlans.TradingPlans[] = [
    {
        symbol: 'COIN',
        dailyRange: 7,
        fixQuantity: 100,
        keyLevels: {
            otherLevels: [66.63, 61.59, 65.1],
        },
        long: {
            openingDrive: { lastDefense: 60 },
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
                lastDefense: 71,
            }
        },
    },
    {
        symbol: 'MESM23',
        dailyRange: 40,
        fixQuantity: 2,
        keyLevels: {
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
            otherLevels: [],
        },
        long: {},
        short: {},
    }
];