import type * as TradingPlans from './models';

export const stockSelections: string[] = ['TSLA', 'MRNA'];
export const stocksTradingPlans: TradingPlans.TradingPlans[] = [
    {
        symbol: 'TSLA',
        vwapCorrection: { volumeSum: 1034325, tradingSum: 190290243 },
        dailyRange: 8,
        fixQuantity: 50,
        keyLevels: { otherLevels: [185.16] },
        long: {},
        short: {
            retracement: {
                entryAreas: [
                    { priceLevel: 184, upperRoom: 1, lowerRoom: 1 },
                ],
                allowAgainstVwap: false,
                lastDefense: 185.16,
            },
            openingDrive: { lastDefense: 184.35 },
            momentum: {
                breakoutLevels: [185.16],
            }
        },
    },
    {
        symbol: 'JPM',
        vwapCorrection: { volumeSum: 1476682, tradingSum: 200860167 },
        dailyRange: 3,
        fixQuantity: 100,
        keyLevels: { otherLevels: [135.54] },
        short: {
            openingDrive: { lastDefense: 137 },
            momentum: {
                breakoutLevels: [154.45],
            },
            retracement: {
                entryAreas: [
                    { priceLevel: 137.5, upperRoom: 0.5, lowerRoom: 0.5 },
                ],
                allowAgainstVwap: false,
                lastDefense: 148,
            }
        },
        long: {},
    },
    {
        symbol: 'MESM23',
        vwapCorrection: { volumeSum: 0, tradingSum: 0 },
        dailyRange: 40,
        fixQuantity: 3,
        keyLevels: {
            otherLevels: [4000],
        },
        long: {},
        short: {},
    },
    {
        symbol: 'MNQM23',
        vwapCorrection: { volumeSum: 0, tradingSum: 0 },
        dailyRange: 40,
        fixQuantity: 3,
        keyLevels: {
            otherLevels: [4000],
        },
        long: {},
        short: {},
    }
];