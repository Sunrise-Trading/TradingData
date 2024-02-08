import * as TradingPlans from './models';
import * as Constants from './constants';

export const activeProfileName: string = "momentumSimple";  // futures, momentumSimple;
export const tradingSettings: TradingPlans.TradingSettings = {
    equalWeightDivider: 4,
}
const armLong: TradingPlans.PlanConfigs = {
    size: 0.25,
    deferTradingInSeconds: 55,
    stopTradingAfterSeconds: 0,
    requireReversal: true,
    alwaysAllowStopOutOrFlatten: false,
    allowEarlyExits: false,
    allowFirstFewExitsCount: 4,
};
const armShort: TradingPlans.PlanConfigs = {
    size: 0.25,
    deferTradingInSeconds: 0,
    stopTradingAfterSeconds: 0,
    requireReversal: true,
    alwaysAllowStopOutOrFlatten: false,
    allowEarlyExits: false,
    allowFirstFewExitsCount: 4,
};
const dis: TradingPlans.PlanConfigs = {
    size: 0.25,
    deferTradingInSeconds: 0,
    stopTradingAfterSeconds: 0,
    requireReversal: true,
    alwaysAllowStopOutOrFlatten: false,
    allowEarlyExits: false,
    allowFirstFewExitsCount: 2,
};
const pypl: TradingPlans.PlanConfigs = {
    size: 0.25,
    deferTradingInSeconds: 0,
    stopTradingAfterSeconds: 0,
    requireReversal: true,
    alwaysAllowStopOutOrFlatten: false,
    allowEarlyExits: false,
    allowFirstFewExitsCount: 2,
};
const stock4Configs: TradingPlans.PlanConfigs = {
    size: 0.15,
    deferTradingInSeconds: 0,
    stopTradingAfterSeconds: 0,
    requireReversal: true,
    alwaysAllowStopOutOrFlatten: false,
    allowEarlyExits: false,
    allowFirstFewExitsCount: 2,
};

const R2Target: TradingPlans.ExitTargets = {
    initialTargets: {
        priceLevels: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        rrr: [0.9, 0.95, 1.5, 1.8, 1.85, 1.9, 1.95, 2, 2.5, 3],
        dailyRanges: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1.1],
    },
    minimumTargets: {
        rrr: [0.9, 0.95, 1.3, 1.5, 1.8, 1.9, 1.9, 1.9, 1.9, 1.9],
        priceLevels: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        dailyRanges: [0.5, 0.55, 0.6, 0.65, 0.7, 0.8, 0.85, 0.9, 1, 1],
    }
};
const R1Target: TradingPlans.ExitTargets = {
    initialTargets: {
        priceLevels: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        rrr: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        dailyRanges: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    },
    minimumTargets: {
        rrr: [0.5, 0.5, 0.5, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9],
        priceLevels: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        dailyRanges: [0.5, 0.55, 0.6, 0.65, 0.7, 0.8, 0.85, 0.9, 1, 1],
    }
};
export const stockSelections: string[] = [
    'ARM',
    'DIS',
    'PYPL',
];

export const stocksTradingPlans: TradingPlans.TradingPlans[] = [
    {
        symbol: 'ARM',
        autoFlip: false,
        vwapCorrection: { volumeSum: 1771449, tradingSum: 173112113 },
        atr: {
            average: 3.47,
            mutiplier: 2,
            minimumMultipler: 1,
        },
        keyLevels: {
            momentumStartForLong: 92.5,
            momentumStartForShort: 100,
        },
        short: {
            redtoGreenPlan: { strictMode: false, targets: R2Target, planConfigs: armShort },
        },
        long: {
            redtoGreenPlan: { strictMode: true, targets: R2Target, planConfigs: armLong },
        },
    },
    {
        symbol: 'DIS',
        autoFlip: false,
        vwapCorrection: { volumeSum: 750834, tradingSum: 80206765 },
        atr: {
            average: 1.87,
            mutiplier: 2,
            minimumMultipler: 0.8,
        },
        keyLevels: {
            momentumStartForLong: 105,
            momentumStartForShort: 108,
        },
        short: {
            redtoGreenPlan: { strictMode: true, targets: R2Target, planConfigs: dis },
            falseBreakoutPlan: { price: 107.93, targets: R2Target, planConfigs: dis },
        },
        long: {
        },
    },
    {
        symbol: 'PYPL',
        autoFlip: false,
        vwapCorrection: { volumeSum: 1254089, tradingSum: 72167673 },
        atr: {
            average: 2.28,
            mutiplier: 1.5,
            minimumMultipler: 0.8,
        },
        keyLevels: {
            momentumStartForLong: 56.76,
            momentumStartForShort: 58.89,
        },
        short: {
            falseBreakoutPlan: { price: 58.65, targets: R2Target, planConfigs: pypl },
        },
        long: {
        },
    },
    {
        symbol: 'stock4',
        autoFlip: false,
        vwapCorrection: { volumeSum: 0, tradingSum: 0 },
        atr: {
            average: 1,
            mutiplier: 1,
            minimumMultipler: 1,
        },
        keyLevels: {
            momentumStartForLong: 173,
            momentumStartForShort: 173,
        },
        short: {
            redtoGreenPlan: { strictMode: true, targets: R2Target, planConfigs: stock4Configs },
        },
        long: {
            redtoGreenPlan: { strictMode: true, targets: R2Target, planConfigs: stock4Configs },
        },
    },
];