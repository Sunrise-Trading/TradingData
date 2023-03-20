import type * as TradingPlans from './models'
export const stocksTradingPlans: TradingPlans.TradingPlans[] = [
    {
        symbol: 'UBS',
        dailyRange: 1,
        fixQuantity: 500,
        keyLevels: {
            lastDefenseForLong: 17,
            lastDefenseForShort: 19.5,
            otherLevels: [19.77, 17.24],
        },
        long: {
            retracement: {
                entryAreas: [
                    { priceLevel: 199, upperRoom: 1, lowerRoom: 0.5 },
                    { priceLevel: 200, upperRoom: 1, lowerRoom: 1 },
                ],
                allowAgainstVwap: false,
                vwapArea: { upperRoom: 0.5, lowerRoom: 0.5 },
            },
            momentum: {
                breakoutLevels: [200],
            }
        },
        short: {
            openingDrive: { enabled: true },
        },
    },
    {
        symbol: 'PDD',
        dailyRange: 5,
        fixQuantity: 100,
        keyLevels: {
            lastDefenseForLong: 79,
            lastDefenseForShort: 82.5,
            otherLevels: [82.41],
        },
        long: {
            openingDrive: { enabled: true },
            momentum: { breakoutLevels: [80] },
        },
        short: {
            retracement: {
                entryAreas: [
                    { priceLevel: 80, upperRoom: 0.5, lowerRoom: 0.5 },
                ],
                allowAgainstVwap: false,
            }
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