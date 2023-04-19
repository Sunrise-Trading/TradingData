import type * as TradingPlans from './models';

export const stockSelections: string[] = ['TSLA', 'WAL', 'NFLX'];
export const stocksTradingPlans: TradingPlans.TradingPlans[] = [
    {
        symbol: 'TSLA',
        vwapCorrection: { volumeSum: 1034325, tradingSum: 190290243 },
        dailyRange: 5,
        fixQuantity: 60,
        keyLevels: { otherLevels: [180.93] },
        long: {},
        short: {
            retracement: {
                entryAreas: [
                    { priceLevel: 180.93, upperRoom: 0.25, lowerRoom: 0.25 },
                    { priceLevel: 180, upperRoom: 0.25, lowerRoom: 0.25 },
                ],
                allowAgainstVwap: false,
                lastDefense: 182,
            },
            openingDrive: { lastDefense: 182 },
            momentum: {
                breakoutLevels: [185.16],
            }
        },
    },
    {
        symbol: 'GOOGL',
        vwapCorrection: { volumeSum: 998660, tradingSum: 104656150 },
        dailyRange: 3,
        fixQuantity: 100,
        keyLevels: { otherLevels: [135.54] },
        short: {
            openingDrive: { lastDefense: 105.2 },
            momentum: {
                breakoutLevels: [154.45],
            },
            retracement: {
                entryAreas: [
                    { priceLevel: 105, upperRoom: 0.2, lowerRoom: 0.5 },
                ],
                allowAgainstVwap: false,
                lastDefense: 105.2,
            }
        },
        long: {
            openingDrive: { lastDefense: 104.34 },
        },
    },
    {
        symbol: 'XPEV',
        vwapCorrection: { volumeSum: 917113, tradingSum: 10168556 },
        dailyRange: 3,
        fixQuantity: 100,
        keyLevels: { otherLevels: [10.87] },
        short: {
            openingDrive: { lastDefense: 10.2 },
            momentum: {
                breakoutLevels: [154.45],
            },
        },
        long: {
            openingDrive: { lastDefense: 11 },
            momentum: {
                breakoutLevels: [10.87],
            }
        },
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