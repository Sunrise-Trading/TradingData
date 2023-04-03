import type * as TradingPlans from './models'
export const stocksTradingPlans: TradingPlans.TradingPlans[] = [
    {
        symbol: 'TSLA',
        dailyRange: 7,
        fixQuantity: 100,
        keyLevels: {
            otherLevels: [208],
        },
        long: {
            openingDrive: { lastDefense: 199.50 },
            retracement: {
                entryAreas: [
                    { priceLevel: 199.6, upperRoom: 1, lowerRoom: 1 },
                    { priceLevel: 197.5, upperRoom: 1, lowerRoom: 1 },
                ],
                allowAgainstVwap: false,
                lastDefense: 196.5,
            }
        },
        short: {
            momentum: {
                breakoutLevels: [202],
            },
            retracement: {
                entryAreas: [
                    { priceLevel: 204.6, upperRoom: 1, lowerRoom: 1 },
                    { priceLevel: 202.86, upperRoom: 1, lowerRoom: 1 },
                ],
                allowAgainstVwap: true,
                lastDefense: 205,
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