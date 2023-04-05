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