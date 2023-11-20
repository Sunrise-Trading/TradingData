import * as TradingPlans from './models';
import * as Constants from './constants';

export const activeProfileName: string = "momentumSimple";  // futures, momentumSimple;
export const tradingSettigns: TradingPlans.TradingSettings = {
    equalWeightDivider: 3,
};
const bestConfigs: TradingPlans.PlanConfigs = {
    equalWeightDivider: 4,
    requireReversal: true,
};
const scalpConfigs: TradingPlans.PlanConfigs = {
    equalWeightDivider: 6,
    requireReversal: true,
};
const smallConfigs: TradingPlans.PlanConfigs = {
    equalWeightDivider: 10,
    requireReversal: true,
};
const bigTarget: TradingPlans.ExitTargets = {
    initialTargets: {
        priceLevels: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        rrr: [0.9, 0.95, 1.5, 1.9, 2, 3, 3.5, 4, 5, 10],
        dailyRanges: [0.5, 0.6, 0.75, 0.8, 0.85, 0.9, 0.95, 1, 1, 1.1],
    },
    minimumTargets: {
        rrr: [0.9, 0.95, 1.3, 1.5, 1.8, 1.9, 2, 2, 2, 4],
        priceLevels: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        dailyRanges: [0.4, 0.45, 0.5, 0.5, 0.6, 0.7, 0.8, 0.9, 1, 1],
    }
};
const smallTargets: TradingPlans.ExitTargets = {
    initialTargets: {
        priceLevels: [],
        rrr: [0.9, 0.95, 1, 1.8, 1.9, 2, 2, 3, 3, 5],
        dailyRanges: [0.8, 0.8, 0.8, 0.8, 0.8, 0.9, 0.9, 1, 1, 1],
    },
    minimumTargets: {
        priceLevels: [],
        rrr: [0.9, 0.95, 1, 1, 1, 1, 1, 1, 1, 1],
        dailyRanges: [0.45, 0.45, 0.45, 0.45, 0.45, 0.45, 0.45, 0.5, 0.5, 0.5],
    }
};
export const stockSelections: string[] = [
    'MSFT',
    'BMY'
];

export const stocksTradingPlans: TradingPlans.TradingPlans[] = [
    {
        symbol: 'MSFT',
        autoFlip: false,
        vwapCorrection: { volumeSum: 1687646, tradingSum: 632490789 },
        dailyRange: 7,
        deferTradingInSeconds: 0,
        keyLevels: {
            momentumStartForLong: 374.37,
            momentumStartForShort: 366.98,
        },
        short: {
            momentum: { targets: bigTarget, planConfigs: bestConfigs },
            levelBreakout: { entryPrice: 366.98, targets: bigTarget, planConfigs: bestConfigs },
        },
        long: {
            levelBreakout: { entryPrice: 374.37, targets: bigTarget, planConfigs: scalpConfigs },
            momentum: { targets: bigTarget, planConfigs: scalpConfigs },
        },
    },
    {
        symbol: 'BMY',
        autoFlip: false,
        vwapCorrection: { volumeSum: 482751, tradingSum: 23530758 },
        dailyRange: 2.3,
        deferTradingInSeconds: 0,
        keyLevels: {
            momentumStartForLong: 49,
            momentumStartForShort: 48.41,
        },
        short: {
            momentum: { targets: bigTarget, planConfigs: bestConfigs },
            levelBreakout: { entryPrice: 48.11, targets: bigTarget, planConfigs: bestConfigs },
        },
        long: {
            momentum: { targets: bigTarget, planConfigs: scalpConfigs },
        },
    }
];