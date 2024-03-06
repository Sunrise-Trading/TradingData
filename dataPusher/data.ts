import * as TradingPlans from './models';
import * as Constants from './constants';

export const activeProfileName: string = "momentumSimple";  // futures, momentumSimple;
export const tradingSettings: TradingPlans.TradingSettings = {
    equalWeightDivider: 4,
}
const pltr: TradingPlans.PlanConfigs = {
    size: 0.25,
    deferTradingInSeconds: 0,
    stopTradingAfterSeconds: 0,
    requireReversal: true,
    alwaysAllowStopOutOrFlatten: false,
    allowEarlyExits: false,
    allowFirstFewExitsCount: 2,
};
const stock2Configs: TradingPlans.PlanConfigs = {
    size: 0.25,
    deferTradingInSeconds: 0,
    stopTradingAfterSeconds: 0,
    requireReversal: true,
    alwaysAllowStopOutOrFlatten: false,
    allowEarlyExits: false,
    allowFirstFewExitsCount: 2,
};
const jd: TradingPlans.PlanConfigs = {
    size: 0.25,
    deferTradingInSeconds: 0,
    stopTradingAfterSeconds: 0,
    requireReversal: true,
    alwaysAllowStopOutOrFlatten: false,
    allowEarlyExits: false,
    allowFirstFewExitsCount: 2,
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
    'CRWD',
    'JD',
];

export const stocksTradingPlans: TradingPlans.TradingPlans[] = [
    {
        symbol: 'PLTR',
        autoFlip: false,
        vwapCorrection: { volumeSum: 8481426, tradingSum: 216513599 },
        atr: {
            average: 1.18,
            mutiplier: 1.5,
            minimumMultipler: 0.84,
        },
        longOnlyIfOpenAbove: 0,
        shortOnlyIfOpenBelow: 0,
        keyLevels: {
            momentumStartForLong: 25,
            momentumStartForShort: 25,
        },
        short: {
        },
        long: {
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: R2Target, planConfigs: pltr },
            firstNewHighPlan: { targets: R2Target, planConfigs: pltr },
            secondNewHighPlan: { targets: R2Target, planConfigs: pltr },
        },
    },
    {
        symbol: 'CRWD',
        autoFlip: false,
        vwapCorrection: { volumeSum: 237615, tradingSum: 87079074 },
        atr: {
            average: 13,
            mutiplier: 1.5,
            minimumMultipler: 0.76,
        },
        longOnlyIfOpenAbove: 0,
        shortOnlyIfOpenBelow: 0,
        keyLevels: {
            momentumStartForLong: 362,
            momentumStartForShort: 373,
        },
        short: {
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: R2Target, planConfigs: stock2Configs },
            firstNewHighPlan: { targets: R2Target, planConfigs: stock2Configs },
        },
        long: {
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: R2Target, planConfigs: stock2Configs },
            firstNewHighPlan: { targets: R2Target, planConfigs: stock2Configs },
        },
    },
    {
        symbol: 'JD',
        autoFlip: false,
        vwapCorrection: { volumeSum: 3465527, tradingSum: 83079349 },
        atr: {
            average: 0.88,
            mutiplier: 1.8,
            minimumMultipler: 1.13,
        },
        longOnlyIfOpenAbove: 0,
        shortOnlyIfOpenBelow: 0,
        keyLevels: {
            momentumStartForLong: 25,
            momentumStartForShort: 25,
        },
        short: {
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: R2Target, planConfigs: jd },
            firstNewHighPlan: { targets: R2Target, planConfigs: jd },
        },
        long: {
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
            firstNewHighPlan: { targets: R2Target, planConfigs: stock4Configs },
        },
        long: {
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: R2Target, planConfigs: stock4Configs },
            firstNewHighPlan: { targets: R2Target, planConfigs: stock4Configs },
        },
    },
];