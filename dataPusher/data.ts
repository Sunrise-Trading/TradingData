import type * as TradingPlans from './models'
export const stocksTradingPlans: TradingPlans.TradingPlans[] = [
    {
        symbol: 'GOOGL',
        dailyRange: 3,
        fixQuantity: 200,
        keyLevels: {
            otherLevels: [105.5],
        },
        long: {
            openingDrive: { lastDefense: 105.58 },
            retracement: {
                entryAreas: [
                    { priceLevel: 199.6, upperRoom: 1, lowerRoom: 1 },
                    { priceLevel: 197.5, upperRoom: 1, lowerRoom: 1 },
                ],
                allowAgainstVwap: true,
                lastDefense: 105,
            },
            momentum: {
                breakoutLevels: [106.3],
            }
        },
        short: {}
    },
    {
        symbol: 'SPY',
        dailyRange: 5,
        fixQuantity: 100,
        keyLevels: {
            otherLevels: [105.5],
        },
        long: {
            momentum: {
                breakoutLevels: [106.3],
            }
        },
        short: {
            momentum: {
                breakoutLevels: [106.3],
            }
        }
    },
    {
        symbol: 'QQQ',
        dailyRange: 5,
        fixQuantity: 100,
        keyLevels: {
            otherLevels: [105.5],
        },
        long: {
            momentum: {
                breakoutLevels: [106.3],
            }
        },
        short: {
            momentum: {
                breakoutLevels: [106.3],
            }
        }
    },
    {
        symbol: 'TSLA',
        dailyRange: 8,
        fixQuantity: 100,
        keyLevels: {
            otherLevels: [208],
        },
        long: {},
        short: {
            momentum: {
                breakoutLevels: [184],
            },
            retracement: {
                entryAreas: [
                    { priceLevel: 184, upperRoom: 1, lowerRoom: 1 },
                    { priceLevel: 185, upperRoom: 1, lowerRoom: 1 },
                ],
                allowAgainstVwap: true,
                lastDefense: 185.76,
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