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