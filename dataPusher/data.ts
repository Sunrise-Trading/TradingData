import type * as TradingPlans from './models';

export const activeProfileName: string = "momentumSimple";  // futures, momentumSimple, momentumEquities, momentumScalp, fomc;
export const stockSelections: string[] = ['TWLO'];
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
        symbol: 'TWLO',
        vwapCorrection: { volumeSum: 611864, tradingSum: 28157494 },
        dailyRange: 2.5,
        fixQuantity: 300,
        alwaysUseFixQuantity: false,
        keyLevels: { otherLevels: [47.8] },
        long: {},
        short: {
            openingDrive: {
                lastDefense: 47,
                targets: presetTargets.breakeven,
            },
            momentum: {
                targets: presetTargets.breakeven,
            }
        }
    },
    {
        symbol: 'UPST',
        vwapCorrection: { volumeSum: 1272533, tradingSum: 24850427 },
        dailyRange: 1,
        fixQuantity: 500,
        alwaysUseFixQuantity: false,
        keyLevels: { otherLevels: [7.42] },
        short: {
            openingDrive: {
                lastDefense: 20,
                targets: presetTargets.scalp,
            },
            momentum: {
                targets: presetTargets.scalp,
            }
        },
        long: {
            openingDrive: {
                lastDefense: 19,
                targets: presetTargets.scalp,
            },
            momentum: {
                targets: presetTargets.scalp,
            }
        },
    },
    {
        symbol: 'MESM23',
        vwapCorrection: { volumeSum: 0, tradingSum: 0 },
        dailyRange: 40,
        fixQuantity: 5,
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
        fixQuantity: 5,
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