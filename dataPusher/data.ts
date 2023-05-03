import type * as TradingPlans from './models';

export const stockSelections: string[] = ['AMD', 'NVDA'];
export const stocksTradingPlans: TradingPlans.TradingPlans[] = [
    {
        symbol: 'AMD',
        vwapCorrection: { volumeSum: 1237671, tradingSum: 103253376 },
        dailyRange: 3,
        fixQuantity: 200,
        alwaysUseFixQuantity: false,
        keyLevels: { otherLevels: [83.64, 83.76] },
        long: {
            openingDrive: {
                lastDefense: 83,
                targets: {
                    priceLevels: [83.76],
                    rrr: [1.5],
                }
            },
            momentum: {
                targets: {
                    priceLevels: [142],
                    rrr: [1.5],
                },
            },
        },
        short: {
            openingDrive: {
                lastDefense: 83.76,
                targets: {
                    priceLevels: [83],
                    rrr: [1.5],
                }
            },
            momentum: {
                targets: {
                    priceLevels: [142],
                    rrr: [1.5],
                },
            },
        }
    },
    {
        symbol: 'NVDA',
        vwapCorrection: { volumeSum: 147159, tradingSum: 41185931 },
        dailyRange: 8,
        fixQuantity: 50,
        alwaysUseFixQuantity: false,
        keyLevels: { otherLevels: [280.83] },
        short: {
        },
        long: {
            openingDrive: {
                lastDefense: 279.4,
                targets: {
                    priceLevels: [283.6],
                    rrr: [],
                },
            },
            momentum: {
                targets: {
                    priceLevels: [],
                    rrr: [],
                },
            },
        },
    },
    {
        symbol: 'MESM23',
        vwapCorrection: { volumeSum: 0, tradingSum: 0 },
        dailyRange: 40,
        fixQuantity: 3,
        alwaysUseFixQuantity: true,
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
        alwaysUseFixQuantity: true,
        keyLevels: {
            otherLevels: [4000],
        },
        long: {},
        short: {},
    }
];