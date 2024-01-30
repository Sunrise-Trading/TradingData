import * as TradingPlans from './models';
import * as Constants from './constants';

export const activeProfileName: string = "momentumSimple";  // futures, momentumSimple;
export const tradingSettings: TradingPlans.TradingSettings = {
    equalWeightDivider: 4,
}
const gm: TradingPlans.PlanConfigs = {
    sizeOverride: 0.2,
    deferTradingInSeconds: 0,
    requireReversal: true,
    alwaysAllowStopOutOrFlatten: false,
    alwaysAllowFirstFewExits: true,
    allowEarlyExits: false,
};
const smci: TradingPlans.PlanConfigs = {
    sizeOverride: 0.3,
    deferTradingInSeconds: 0,
    requireReversal: true,
    alwaysAllowStopOutOrFlatten: false,
    alwaysAllowFirstFewExits: true,
    allowEarlyExits: false,
};
const stock3Configs: TradingPlans.PlanConfigs = {
    sizeOverride: 0,
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
    'GM',
    'SMCI',
];

export const stocksTradingPlans: TradingPlans.TradingPlans[] = [
    {
        symbol: 'GM',
        autoFlip: false,
        vwapCorrection: { volumeSum: 1783501, tradingSum: 67591835 },
        atr: {
            average: 0.83,
            mutiplier: 1.5,
            minimumMultipler: 0.5,
        },
        keyLevels: {
            momentumStartForLong: 36.84,
            momentumStartForShort: 38.6,
        },
        short: {
            falseBreakoutPlan: { price: 38.40, targets: R1Target, planConfigs: gm },

        },
        long: {
            redtoGreenPlan: { strictMode: true, targets: R1Target, planConfigs: gm },
        },
    },
    {
        symbol: 'SMCI',
        autoFlip: false,
        vwapCorrection: { volumeSum: 415113, tradingSum: 230413648 },
        atr: {
            average: 29,
            mutiplier: 1.5,
            minimumMultipler: 0.5,
        },
        keyLevels: {
            momentumStartForLong: 545,
            momentumStartForShort: 565,
        },
        short: {
            redtoGreenPlan: { strictMode: true, targets: R2Target, planConfigs: smci },
            falseBreakoutPlan: { price: 560, targets: R2Target, planConfigs: smci },
        },
        long: {
        },
    },
    {
        symbol: 'UPS',
        autoFlip: false,
        vwapCorrection: { volumeSum: 0, tradingSum: 0 },
        atr: {
            average: 2.8,
            mutiplier: 1.5,
            minimumMultipler: 0.5,
        },
        keyLevels: {
            momentumStartForLong: 146,
            momentumStartForShort: 150,
        },
        short: {
            redtoGreenPlan: { strictMode: true, targets: R2Target, planConfigs: stock3Configs },
        },
        long: {
            redtoGreenPlan: { strictMode: true, targets: R2Target, planConfigs: stock3Configs },
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
            redtoGreenPlan: { strictMode: true, targets: R2Target, planConfigs: stock4Configs },
        },
        long: {
            redtoGreenPlan: { strictMode: true, targets: R2Target, planConfigs: stock4Configs },
        },
    },
];