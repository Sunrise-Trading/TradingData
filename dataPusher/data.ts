import * as TradingPlans from './models';
import * as Constants from './constants';

export const activeProfileName: string = "momentumSimple";  // futures, momentumSimple;
export const tradingSettings: TradingPlans.TradingSettings = {
    equalWeightDivider: 4,
}
const lulu: TradingPlans.PlanConfigs = {
    size: 0.15,
    deferTradingInSeconds: 0,
    stopTradingAfterSeconds: 0,
    requireReversal: true,
    alwaysAllowStopOutOrFlatten: false,
    allowEarlyExits: false,
    allowFirstFewExitsCount: 2,
};
const nke: TradingPlans.PlanConfigs = {
    size: 0.15,
    deferTradingInSeconds: 0,
    stopTradingAfterSeconds: 0,
    requireReversal: true,
    alwaysAllowStopOutOrFlatten: false,
    allowEarlyExits: false,
    allowFirstFewExitsCount: 2,
};
const fdx: TradingPlans.PlanConfigs = {
    size: 0.15,
    deferTradingInSeconds: 0,
    stopTradingAfterSeconds: 0,
    requireReversal: true,
    alwaysAllowStopOutOrFlatten: false,
    allowEarlyExits: false,
    allowFirstFewExitsCount: 2,
};
const fdxQuick: TradingPlans.PlanConfigs = {
    size: 0.1,
    deferTradingInSeconds: 0,
    stopTradingAfterSeconds: 0,
    requireReversal: true,
    alwaysAllowStopOutOrFlatten: false,
    allowEarlyExits: false,
    allowFirstFewExitsCount: 4,
};
const tsla: TradingPlans.PlanConfigs = {
    size: 0.15,
    deferTradingInSeconds: 110,
    stopTradingAfterSeconds: 0,
    requireReversal: true,
    alwaysAllowStopOutOrFlatten: false,
    allowEarlyExits: false,
    allowFirstFewExitsCount: 2,
};

const R2Target: TradingPlans.ExitTargets = {
    initialTargets: {
        priceLevels: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        rrr: [0.9, 0.95, 1.5, 1.8, 1.85, 1.9, 1.95, 1.95, 1.95, 3],
        dailyRanges: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1.1],
    },
    minimumTargets: {
        rrr: [0.9, 0.95, 1.3, 1.5, 1.8, 1.9, 1.9, 1.9, 1.9, 1.9],
        priceLevels: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        dailyRanges: [0.6, 0.65, 0.7, 0.75, 0.8, 0.85, 0.9, 0.95, 1, 1],
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
    'LULU',
    'NKE',
    'FDX',
    'TSLA',
];

export const stocksTradingPlans: TradingPlans.TradingPlans[] = [
    {
        symbol: 'LULU',
        autoFlip: false,
        vwapCorrection: { volumeSum: 103310, tradingSum: 43009494 },
        atr: {
            average: 9,
            mutiplier: 1.5,
            minimumMultipler: 0.8,
        },
        longOnlyIfOpenAbove: 0,
        shortOnlyIfOpenBelow: 0,
        keyLevels: {
            momentumStartForLong: 440,
            momentumStartForShort: 440,
        },
        short: {
            firstNewHighPlan: { includeSecondNewHigh: true, targets: R2Target, planConfigs: lulu },
            falseBreakoutPlan: { price: 422, targets: R2Target, planConfigs: lulu },
        },
        long: {
        },
    },
    {
        symbol: 'NKE',
        autoFlip: false,
        vwapCorrection: { volumeSum: 393899, tradingSum: 37237736 },
        atr: {
            average: 1.9,
            mutiplier: 1.5,
            minimumMultipler: 0.8,
        },
        longOnlyIfOpenAbove: 0,
        shortOnlyIfOpenBelow: 0,
        keyLevels: {
            momentumStartForLong: 97,
            momentumStartForShort: 97,
        },
        short: {
            firstNewHighPlan: { includeSecondNewHigh: true, targets: R2Target, planConfigs: nke },
            falseBreakoutPlan: { price: 95, targets: R2Target, planConfigs: nke },
        },
        long: {
        },
    },
    {
        symbol: 'FDX',
        autoFlip: false,
        vwapCorrection: { volumeSum: 97679, tradingSum: 28836910 },
        atr: {
            average: 4,
            mutiplier: 1.5,
            minimumMultipler: 0.9,
        },
        longOnlyIfOpenAbove: 0,
        shortOnlyIfOpenBelow: 0,
        keyLevels: {
            momentumStartForLong: 300,
            momentumStartForShort: 300,
        },
        short: {
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: R2Target, planConfigs: fdxQuick },
            firstNewHighPlan: { includeSecondNewHigh: true, targets: R2Target, planConfigs: fdx },
            falseBreakoutPlan: { price: 290, targets: R2Target, planConfigs: fdx }
        },
        long: {
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: R2Target, planConfigs: fdxQuick },

        },
    },
    {
        symbol: 'TSLA',
        autoFlip: false,
        vwapCorrection: { volumeSum: 1820921, tradingSum: 305248598 },
        atr: {
            average: 7.5,
            mutiplier: 0.8,
            minimumMultipler: 4,
        },
        longOnlyIfOpenAbove: 0,
        shortOnlyIfOpenBelow: 0,
        keyLevels: {
            momentumStartForLong: 172,
            momentumStartForShort: 172,
        },
        short: {
            firstNewHighPlan: { includeSecondNewHigh: true, targets: R2Target, planConfigs: tsla },
            falseBreakoutPlan: { price: 169, targets: R2Target, planConfigs: tsla }
        },
        long: {
        },
    },
];