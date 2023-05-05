import type * as TradingPlans from './models';

export const activeProfileName: string = "momentumSimple";  // momentumSimple, momentumEquities, momentumScalp, fomc;
export const stockSelections: string[] = ['TSLA', 'CVNA'];
const t1 = {
    priceLevels: [163.68, 163.8, 164.7],
    rrr: [1, 1.5]
};
const t2 = {
    priceLevels: [],
    rrr: [],
};
export const stocksTradingPlans: TradingPlans.TradingPlans[] = [
    {
        symbol: 'TSLA',
        vwapCorrection: { volumeSum: 682221, tradingSum: 107782110 },
        dailyRange: 6,
        fixQuantity: 50,
        alwaysUseFixQuantity: false,
        keyLevels: { otherLevels: [162.95] },
        long: {
            openingDrive: {
                lastDefense: 162.6,
                targets: t1,
            },
            momentum: {
                targets: t1,
            }
        },
        short: {
        }
    },
    {
        symbol: 'CNVA',
        vwapCorrection: { volumeSum: 5086909, tradingSum: 52361320 },
        dailyRange: 1,
        fixQuantity: 500,
        alwaysUseFixQuantity: false,
        keyLevels: { otherLevels: [10] },
        short: {
            openingDrive: {
                lastDefense: 10.4,
                targets: {
                    priceLevels: [],
                    rrr: [],
                }
            },
            momentum: {
                targets: t2,
            }
        },
        long: {
            openingDrive: {
                lastDefense: 9.9,
                targets: t2
            },
            momentum: {
                targets: t2
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
    },
    {
        symbol: 'USM23',
        vwapCorrection: { volumeSum: 0, tradingSum: 0 },
        dailyRange: 2,
        fixQuantity: 3,
        alwaysUseFixQuantity: true,
        keyLevels: {
            otherLevels: [4000],
        },
        long: {},
        short: {},
    }
];