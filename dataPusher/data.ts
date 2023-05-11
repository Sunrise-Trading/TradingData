import type * as TradingPlans from './models';

export const activeProfileName: string = "momentumSimple";  // futures, momentumSimple, momentumEquities, momentumScalp, fomc;
export const stockSelections: string[] = ['DIS', 'GOOGL'];
const presetTargets = {
    'scalp': {
        priceLevels: [],
        rrr: [0.85, 0.9, 0.95, 1, 1.05, 1.1, 1.5, 2]
    },
    'breakeven': {
        priceLevels: [],
        rrr: [0.85, 1, 1, 1, 2, 2, 2, 2]
    },
    'r2': {
        priceLevels: [],
        rrr: [1.5, 1.8, 1.9, 2, 2, 2.1, 2.2, 3],
    },
    'doubleTop': {
        priceLevels: [],
        rrr: [1.5, 1.8, 2, 2.2, 5, 5, 5, 5],
    },
    'swing': {
        priceLevels: [],
        rrr: [1.8, 2, 2.5, 3, 6, 7, 8, 9,],
    },
}

const emptyTarget = {
    priceLevels: [],
    rrr: [],
};
export const stocksTradingPlans: TradingPlans.TradingPlans[] = [
    {
        symbol: 'DIS',
        vwapCorrection: { volumeSum: 552180, tradingSum: 52777878 },
        dailyRange: 2.5,
        fixQuantity: 300,
        alwaysUseFixQuantity: false,
        keyLevels: { otherLevels: [96.46] },
        long: {},
        short: {
            openingDrive: {
                lastDefense: 96.46,
                targets: presetTargets.breakeven,
            },
            momentum: {
                targets: presetTargets.breakeven,
            }
        }
    },
    {
        symbol: 'GOOGL',
        vwapCorrection: { volumeSum: 1061021, tradingSum: 120896102 },
        dailyRange: 3,
        fixQuantity: 200,
        alwaysUseFixQuantity: false,
        keyLevels: { otherLevels: [113.85] },
        short: {
            openingDrive: {
                lastDefense: 114.8,
                targets: presetTargets.scalp,
            },
            momentum: {
                targets: presetTargets.scalp,
            }
        },
        long: {
            momentum: {
                targets: presetTargets.scalp,
            }
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
        long: {
            newsBreakout: {
                targets: emptyTarget,
            }
        },
        short: {
            newsBreakout: {
                targets: emptyTarget,
            }
        },
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
        long: {
            newsBreakout: {
                targets: emptyTarget,
            }
        },
        short: {
            newsBreakout: {
                targets: emptyTarget,
            }
        },
    },
    {
        symbol: 'USM23',
        vwapCorrection: { volumeSum: 0, tradingSum: 0 },
        dailyRange: 2,
        fixQuantity: 2,
        alwaysUseFixQuantity: true,
        keyLevels: {
            otherLevels: [4000],
        },
        long: {
            newsBreakout: {
                targets: emptyTarget,
            }
        },
        short: {
            newsBreakout: {
                targets: emptyTarget,
            }
        },
    }
];