import * as TradingPlans from './models';
import * as Constants from './constants';

export const activeProfileName: string = "momentumSimple";  // futures, momentumSimple;
export const tradingSettings: TradingPlans.TradingSettings = {
    equalWeightDivider: 4,
    useSingleOrderForEntry: true,
}
const pltrLong: TradingPlans.PlanConfigs = {
    size: 0.2,
    deferTradingInSeconds: 0,
    stopTradingAfterSeconds: 0,
    requireReversal: true,
    alwaysAllowStopOutOrFlatten: false,
    allowEarlyExits: false,
    allowFirstFewExitsCount: 5,
};
const pltrScalpLong: TradingPlans.PlanConfigs = {
    size: 0.2,
    deferTradingInSeconds: 0,
    stopTradingAfterSeconds: 0,
    requireReversal: true,
    alwaysAllowStopOutOrFlatten: false,
    allowEarlyExits: false,
    allowFirstFewExitsCount: 5,
};
const pltrShort: TradingPlans.PlanConfigs = {
    size: 0.2,
    deferTradingInSeconds: 60,
    stopTradingAfterSeconds: 0,
    requireReversal: true,
    alwaysAllowStopOutOrFlatten: false,
    allowEarlyExits: false,
    allowFirstFewExitsCount: 5,
};
const levi: TradingPlans.PlanConfigs = {
    size: 0.2,
    deferTradingInSeconds: 110,
    stopTradingAfterSeconds: 0,
    requireReversal: true,
    alwaysAllowStopOutOrFlatten: false,
    allowEarlyExits: false,
    allowFirstFewExitsCount: 2,
};
const meta: TradingPlans.PlanConfigs = {
    size: 0.2,
    deferTradingInSeconds: 0,
    stopTradingAfterSeconds: 0,
    requireReversal: true,
    alwaysAllowStopOutOrFlatten: false,
    allowEarlyExits: false,
    allowFirstFewExitsCount: 4,
};
const stock4Configs: TradingPlans.PlanConfigs = {
    size: 0.25,
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
    'PLTR',
    'LEVI',
    'META',
];

export const stocksTradingPlans: TradingPlans.TradingPlans[] = [
    {
        symbol: 'PLTR',
        autoFlip: false,
        vwapCorrection: { volumeSum: 2588045, tradingSum: 60726869 },
        atr: {
            average: 1,
            mutiplier: 0.8,
            minimumMultipler: 0.45,
        },
        longOnlyIfOpenAbove: 0,
        shortOnlyIfOpenBelow: 0,
        keyLevels: {
            momentumStartForLong: 23,
            momentumStartForShort: 24,
        },
        short: {
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: R2Target, planConfigs: pltrShort },
            firstNewHighPlan: { includeSecondNewHigh: true, targets: R2Target, planConfigs: pltrShort },
        },
        long: {
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: R2Target, planConfigs: pltrScalpLong },
            firstNewHighPlan: { includeSecondNewHigh: true, targets: R2Target, planConfigs: pltrLong },
        },
    },
    {
        symbol: 'LEVI',
        autoFlip: false,
        vwapCorrection: { volumeSum: 270600, tradingSum: 5663934 },
        atr: {
            average: 0.56,
            mutiplier: 1.5,
            minimumMultipler: 0.9,
        },
        longOnlyIfOpenAbove: 0,
        shortOnlyIfOpenBelow: 0,
        keyLevels: {
            momentumStartForLong: 20.36,
            momentumStartForShort: 21.35,
        },
        short: {
            firstNewHighPlan: { includeSecondNewHigh: true, targets: R2Target, planConfigs: levi },
        },
        long: {
            firstNewHighPlan: { includeSecondNewHigh: true, targets: R2Target, planConfigs: levi },
        },
    },
    {
        symbol: 'META',
        autoFlip: false,
        vwapCorrection: { volumeSum: 129362, tradingSum: 66341927 },
        atr: {
            average: 9.9,
            mutiplier: 1,
            minimumMultipler: 0.5,
        },
        longOnlyIfOpenAbove: 0,
        shortOnlyIfOpenBelow: 0,
        keyLevels: {
            momentumStartForLong: 507.24,
            momentumStartForShort: 530,
        },
        short: {
            firstNewHighPlan: { includeSecondNewHigh: true, targets: R2Target, planConfigs: meta },
        },
        long: {
            firstNewHighPlan: { includeSecondNewHigh: true, targets: R2Target, planConfigs: meta },
        },
    },
    {
        symbol: 'stock4',
        autoFlip: false,
        vwapCorrection: { volumeSum: 0, tradingSum: 0 },
        atr: {
            average: 0,
            mutiplier: 0,
            minimumMultipler: 0,
        },
        longOnlyIfOpenAbove: 0,
        shortOnlyIfOpenBelow: 0,
        keyLevels: {
            momentumStartForLong: 0,
            momentumStartForShort: 0,
        },
        short: {
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: R2Target, planConfigs: stock4Configs },
            firstNewHighPlan: { includeSecondNewHigh: true, targets: R2Target, planConfigs: stock4Configs },
        },
        long: {
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: R2Target, planConfigs: stock4Configs },
            firstNewHighPlan: { includeSecondNewHigh: true, targets: R2Target, planConfigs: stock4Configs },
        },
    },
];