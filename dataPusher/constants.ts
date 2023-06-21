import * as TradingPlans from './models';
export const scalp = TradingPlans.SetupQuality.Scalp
export const emptyNumbers: number[] = [];
export const emptyTarget = {
    priceLevels: emptyNumbers,
    rrr: emptyNumbers,
    dailyRanges: emptyNumbers,
};
export const presetTargets = {
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