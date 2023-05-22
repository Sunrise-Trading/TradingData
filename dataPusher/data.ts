import type * as TradingPlans from './models';

export const activeProfileName: string = "momentumSimple";  // futures, momentumSimple, momentumEquities, momentumScalp, fomc;
export const stockSelections: string[] = ['MU', 'NVDA'];
const emptyNumbers: number[] = [];
const emptyTarget = {
    priceLevels: emptyNumbers,
    rrr: emptyNumbers,
    dailyRanges: emptyNumbers,
};
const presetTargets = {
    'scalp': {
        ...emptyTarget,
        rrr: [0.85, 0.9, 0.95, 1, 1.05, 1.1, 1.5, 2],
    },
    'breakeven': {
        ...emptyTarget,
        rrr: [0.85, 1, 1, 1, 2, 2, 3, 3]
    },
    'r2': {
        ...emptyTarget,
        rrr: [1.5, 1.8, 1.9, 2, 2, 2.1, 2.2, 3],
    },
    'doubleTop': {
        ...emptyTarget,
        rrr: [1.5, 1.8, 2, 2.2, 5, 5, 5, 5],
    },
    'swing': {
        ...emptyTarget,
        rrr: [1.8, 2, 2.5, 3, 6, 7, 8, 9,],
    },
}


export const stocksTradingPlans: TradingPlans.TradingPlans[] = [
    {
        symbol: 'TSLA',
        vwapCorrection: { volumeSum: 727130, tradingSum: 129177060 },
        dailyRange: 6,
        fixQuantity: 100,
        alwaysUseFixQuantity: false,
        keyLevels: { otherLevels: [177.63, 178.5] },
        short: {
            openingDrive: {
                lastDefense: 178,
                stopForAgainstVwapEntry: 178.12,
                targets: presetTargets.breakeven,
            },
            momentum: {
                targets: presetTargets.breakeven,
            }
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
        symbol: 'MU',
        vwapCorrection: { volumeSum: 1378557, tradingSum: 90053619 },
        dailyRange: 2,
        fixQuantity: 200,
        alwaysUseFixQuantity: false,
        keyLevels: { otherLevels: [66.43, 65.08] },
        long: {
            openingDrive: {
                lastDefense: 65,
                stopForAgainstVwapEntry: 64.92,
                targets: presetTargets.scalp,
            },
            momentum: {
                targets: presetTargets.scalp,
            }
        },
        short: {
            openingDrive: {
                lastDefense: 67,
                stopForAgainstVwapEntry: 67.5,
                targets: presetTargets.scalp,
            },
            momentum: {
                targets: presetTargets.scalp,
            }

        },
    },
    {
        symbol: 'NVDA',
        vwapCorrection: { volumeSum: 327577, tradingSum: 101529617 },
        dailyRange: 6,
        fixQuantity: 100,
        alwaysUseFixQuantity: false,
        keyLevels: { otherLevels: [309.16] },
        short: {
            openingDrive: {
                lastDefense: 310,
                stopForAgainstVwapEntry: 311,
                targets: presetTargets.scalp,
            },
            momentum: {
                targets: presetTargets.scalp,
            }
        },
        long: {
            openingDrive: {
                lastDefense: 310,
                stopForAgainstVwapEntry: 309.35,
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