import * as TradingPlans from './models';
import * as Constants from './constants';

export const activeProfileName: string = "momentumSimple";  // futures, momentumSimple;
export const tradingSettings: TradingPlans.TradingSettings = {
    equalWeightDivider: 4,
}
const mara: TradingPlans.PlanConfigs = {
    size: 0.2,
    deferTradingInSeconds: 0,
    stopTradingAfterSeconds: 0,
    requireReversal: true,
    alwaysAllowStopOutOrFlatten: true,
    allowEarlyExits: true,
    allowFirstFewExitsCount: 2,
};
const coin: TradingPlans.PlanConfigs = {
    size: 0.2,
    deferTradingInSeconds: 0,
    stopTradingAfterSeconds: 0,
    requireReversal: true,
    alwaysAllowStopOutOrFlatten: true,
    allowEarlyExits: true,
    allowFirstFewExitsCount: 2,
};
const vktx: TradingPlans.PlanConfigs = {
    size: 0.1,
    deferTradingInSeconds: 0,
    stopTradingAfterSeconds: 0,
    requireReversal: true,
    alwaysAllowStopOutOrFlatten: false,
    allowEarlyExits: false,
    allowFirstFewExitsCount: 2,
};
const zm: TradingPlans.PlanConfigs = {
    size: 0.2,
    deferTradingInSeconds: 0,
    stopTradingAfterSeconds: 0,
    requireReversal: true,
    alwaysAllowStopOutOrFlatten: true,
    allowEarlyExits: false,
    allowFirstFewExitsCount: 4,
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
    'MARA',
    'COIN',
    'VKTX',
    'ZM'
];

export const stocksTradingPlans: TradingPlans.TradingPlans[] = [
    {
        symbol: 'MARA',
        autoFlip: false,
        vwapCorrection: { volumeSum: 4593510, tradingSum: 146913293 },
        atr: {
            average: 2.8,
            mutiplier: 1.5,
            minimumMultipler: 1,
        },
        longOnlyIfOpenAbove: 0,
        shortOnlyIfOpenBelow: 0,
        keyLevels: {
            momentumStartForLong: 31.9,
            momentumStartForShort: 31.9,
        },
        short: {
            openDrive60Plan: { targets: R2Target, planConfigs: mara },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: R2Target, planConfigs: mara },
        },
        long: {
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: R2Target, planConfigs: mara },
            firstNewHighPlan: { targets: R2Target, planConfigs: mara },
        },
    },
    {
        symbol: 'COIN',
        autoFlip: false,
        vwapCorrection: { volumeSum: 704663, tradingSum: 145269290 },
        atr: {
            average: 14,
            mutiplier: 1.5,
            minimumMultipler: 1,
        },
        longOnlyIfOpenAbove: 0,
        shortOnlyIfOpenBelow: 0,
        keyLevels: {
            momentumStartForLong: 205,
            momentumStartForShort: 205,
        },
        short: {
            openDrive60Plan: { targets: R2Target, planConfigs: coin },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: R2Target, planConfigs: coin },
        },
        long: {
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: R2Target, planConfigs: coin },
            firstNewHighPlan: { targets: R2Target, planConfigs: coin },
        },
    },
    {
        symbol: 'VKTX',
        autoFlip: false,
        vwapCorrection: { volumeSum: 3040686, tradingSum: 218992048 },
        atr: {
            average: 2.45,
            mutiplier: 2,
            minimumMultipler: 2,
        },
        longOnlyIfOpenAbove: 0,
        shortOnlyIfOpenBelow: 0,
        keyLevels: {
            momentumStartForLong: 80,
            momentumStartForShort: 80,
        },
        short: {
            openDrive60Plan: { targets: R2Target, planConfigs: vktx },
            firstNewHighPlan: { targets: R2Target, planConfigs: vktx },
            falseBreakoutPlan: { price: 72, targets: R2Target, planConfigs: vktx },
        },
        long: {
        },
    },
    {
        symbol: 'ZM',
        autoFlip: false,
        vwapCorrection: { volumeSum: 594912, tradingSum: 41167086 },
        atr: {
            average: 0,
            mutiplier: 0,
            minimumMultipler: 0,
        },
        longOnlyIfOpenAbove: 0,
        shortOnlyIfOpenBelow: 0,
        keyLevels: {
            momentumStartForLong: 173,
            momentumStartForShort: 173,
        },
        short: {
        },
        long: {
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: R2Target, planConfigs: zm },
            falseBreakoutPlan: { price: 66.5, targets: R2Target, planConfigs: zm }
        },
    },
];