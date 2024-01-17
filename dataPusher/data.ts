import * as TradingPlans from './models';
import * as Constants from './constants';

export const activeProfileName: string = "momentumSimple";  // futures, momentumSimple;
export const tradingSettings: TradingPlans.TradingSettings = {
    equalWeightDivider: 4,
}
const rivnConfigs: TradingPlans.PlanConfigs = {
    sizeOverride: 0.1,
    deferTradingInSeconds: 0,
    requireReversal: true,
    alwaysAllowStopOutOrFlatten: false,
    alwaysAllowFirstFewExits: true,
    allowEarlyExits: false,
};
const tslaConfigs: TradingPlans.PlanConfigs = {
    sizeOverride: 0.1,
    deferTradingInSeconds: 0,
    requireReversal: true,
    alwaysAllowStopOutOrFlatten: false,
    alwaysAllowFirstFewExits: true,
    allowEarlyExits: false,
};
const stock3Configs: TradingPlans.PlanConfigs = {
    sizeOverride: 0.1,
    deferTradingInSeconds: 0,
    requireReversal: true,
    alwaysAllowStopOutOrFlatten: false,
    alwaysAllowFirstFewExits: true,
    allowEarlyExits: false,
};
const stock4Configs: TradingPlans.PlanConfigs = {
    sizeOverride: 0,
    deferTradingInSeconds: 0,
    requireReversal: true,
    alwaysAllowStopOutOrFlatten: false,
    alwaysAllowFirstFewExits: true,
    allowEarlyExits: false,
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
        rrr: [0.9, 0.95, 1.5, 1.8, 1.85, 1.9, 1.95, 2, 2.5, 3],
        dailyRanges: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1.1],
    },
    minimumTargets: {
        rrr: [0.5, 0.5, 0.5, 1, 1, 1, 1, 1, 1, 1],
        priceLevels: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        dailyRanges: [0.5, 0.55, 0.6, 0.65, 0.7, 0.8, 0.85, 0.9, 1, 1],
    }
};
export const stockSelections: string[] = [
    'RIVN',
    'TSLA',
    'SAVE',
    'stock4',
];

export const stocksTradingPlans: TradingPlans.TradingPlans[] = [
    {
        symbol: 'RIVN',
        autoFlip: false,
        vwapCorrection: { volumeSum: 407075, tradingSum: 7001394 },
        atr: {
            average: 1,
            mutiplier: 1,
            minimumMultipler: 0.5,
        },
        keyLevels: {
            momentumStartForLong: 17,
            momentumStartForShort: 17.25,
        },
        short: {
            redtoGreenPlan: { targets: R2Target, planConfigs: rivnConfigs },
            bothSidesFalseBreakoutPlan: { targets: R2Target, planConfigs: rivnConfigs },
        },
        long: {
            bothSidesFalseBreakoutPlan: { targets: R2Target, planConfigs: rivnConfigs },
        },
    },
    {
        symbol: 'TSLA',
        autoFlip: false,
        vwapCorrection: { volumeSum: 1162509, tradingSum: 250383907 },
        atr: {
            average: 8,
            mutiplier: 1,
            minimumMultipler: 0.5,
        },
        keyLevels: {
            momentumStartForLong: 213,
            momentumStartForShort: 218,
        },
        short: {
            redtoGreenPlan: { targets: R2Target, planConfigs: tslaConfigs },
            bothSidesFalseBreakoutPlan: { targets: R2Target, planConfigs: tslaConfigs },
        },
        long: {
            bothSidesFalseBreakoutPlan: { targets: R2Target, planConfigs: tslaConfigs },
        },
    },
    {
        symbol: 'SAVE',
        autoFlip: false,
        vwapCorrection: { volumeSum: 5258403, tradingSum: 34441724 },
        atr: {
            average: 1.4,
            mutiplier: 1,
            minimumMultipler: 0.5,
        },
        keyLevels: {
            momentumStartForLong: 6.16,
            momentumStartForShort: 7.6,
        },
        short: {
        },
        long: {
            bothSidesFalseBreakoutPlan: { targets: R2Target, planConfigs: stock3Configs },
            rangePlan: { targets: R2Target, planConfigs: stock3Configs },
        },
    },
    {
        symbol: 'stock4',
        autoFlip: false,
        vwapCorrection: { volumeSum: 0, tradingSum: 0 },
        atr: {
            average: 2.13,
            mutiplier: 1.5,
            minimumMultipler: 0.5,
        },
        keyLevels: {
            momentumStartForLong: 173,
            momentumStartForShort: 173,
        },
        short: {
            redtoGreenPlan: { targets: R2Target, planConfigs: stock4Configs },
        },
        long: {
            redtoGreenPlan: { targets: R2Target, planConfigs: stock4Configs },
        },
    },
];