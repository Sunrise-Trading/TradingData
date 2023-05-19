import type * as TradingPlans from './models';

export const activeProfileName: string = "momentumSimple";  // futures, momentumSimple, momentumEquities, momentumScalp, fomc;
export const stockSelections: string[] = ['TSLA', 'FL'];
const presetTargets = {
    'scalp': {
        priceLevels: [],
        rrr: [0.85, 0.9, 0.95, 1, 1.05, 1.1, 1.5, 2]
    },
    'breakeven': {
        priceLevels: [],
        rrr: [0.85, 1, 1, 1, 2, 2, 3, 3]
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
        symbol: 'TSLA',
        vwapCorrection: { volumeSum: 727130, tradingSum: 129177060 },
        dailyRange: 6,
        fixQuantity: 100,
        alwaysUseFixQuantity: false,
        keyLevels: { otherLevels: [177.63, 178.5] },
        short: {
        },
        long: {
            openingDrive: {
                lastDefense: 177.4,
                stopForAgainstVwapEntry: 176.9,
                targets: presetTargets.breakeven,
            },
            momentum: {
                targets: presetTargets.breakeven,
            }
        }
    },
    {
        symbol: 'FL',
        vwapCorrection: { volumeSum: 1739950, tradingSum: 54532111 },
        dailyRange: 2,
        fixQuantity: 200,
        alwaysUseFixQuantity: false,
        keyLevels: { otherLevels: [29.79, 30] },
        long: {
            openingDrive: {
                lastDefense: 30,
                stopForAgainstVwapEntry: 29.5,
                targets: presetTargets.breakeven,
            },
            momentum: {
                targets: presetTargets.breakeven,
            }
        },
        short: {
        },
    },
    {
        symbol: 'WMT',
        vwapCorrection: { volumeSum: 516439, tradingSum: 78483352 },
        dailyRange: 4,
        fixQuantity: 200,
        alwaysUseFixQuantity: false,
        keyLevels: { otherLevels: [153.63] },
        short: {
            momentum: {
                targets: presetTargets.breakeven,
            }
        },
        long: {
            momentum: {
                targets: presetTargets.breakeven,
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