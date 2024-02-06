import * as TradingPlans from './models';
import * as Constants from './constants';

export const activeProfileName: string = "momentumSimple";  // futures, momentumSimple;
export const tradingSettings: TradingPlans.TradingSettings = {
    equalWeightDivider: 4,
}
const pltr: TradingPlans.PlanConfigs = {
    size: 0.3,
    deferTradingInSeconds: 0,
    requireReversal: true,
    alwaysAllowStopOutOrFlatten: false,
    alwaysAllowFirstFewExits: true,
    allowEarlyExits: false,
};
const pltrShort: TradingPlans.PlanConfigs = {
    size: 0.1,
    deferTradingInSeconds: 0,
    requireReversal: true,
    alwaysAllowStopOutOrFlatten: false,
    alwaysAllowFirstFewExits: true,
    allowEarlyExits: false,
};
const spot: TradingPlans.PlanConfigs = {
    size: 0.2,
    deferTradingInSeconds: 0,
    requireReversal: true,
    alwaysAllowStopOutOrFlatten: false,
    alwaysAllowFirstFewExits: true,
    allowEarlyExits: false,
};
const stock3Configs: TradingPlans.PlanConfigs = {
    size: 0.1,
    deferTradingInSeconds: 0,
    requireReversal: true,
    alwaysAllowStopOutOrFlatten: false,
    alwaysAllowFirstFewExits: true,
    allowEarlyExits: false,
};
const stock4Configs: TradingPlans.PlanConfigs = {
    size: 0.15,
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
    'SPOT',
    'MDGL',
];

export const stocksTradingPlans: TradingPlans.TradingPlans[] = [
    {
        symbol: 'PLTR',
        autoFlip: false,
        vwapCorrection: { volumeSum: 11387084, tradingSum: 225996058 },
        atr: {
            average: 0.73,
            mutiplier: 2,
            minimumMultipler: 1,
        },
        keyLevels: {
            momentumStartForLong: 19.32,
            momentumStartForShort: 20,
        },
        short: {
            redtoGreenPlan: { strictMode: true, targets: R2Target, planConfigs: pltrShort },
            falseBreakoutPlan: { price: 20, targets: R2Target, planConfigs: pltrShort },
            levelBreakout: { entryPrice: 20.32, targets: R2Target, planConfigs: pltrShort },
        },
        long: {
            redtoGreenPlan: { strictMode: true, targets: R2Target, planConfigs: pltr },
            falseBreakoutPlan: { price: 20, targets: R2Target, planConfigs: pltr },
        },
    },
    {
        symbol: 'SPOT',
        autoFlip: false,
        vwapCorrection: { volumeSum: 252505, tradingSum: 60057622 },
        atr: {
            average: 5.45,
            mutiplier: 1.65,
            minimumMultipler: 0.8,
        },
        keyLevels: {
            momentumStartForLong: 236,
            momentumStartForShort: 247,
        },
        short: {
            redtoGreenPlan: { strictMode: true, targets: R2Target, planConfigs: spot },
            falseBreakoutPlan: { price: 247, targets: R2Target, planConfigs: spot },
        },
        long: {
        },
    },
    {
        symbol: 'MDGL',
        autoFlip: false,
        vwapCorrection: { volumeSum: 100366, tradingSum: 19423715 },
        atr: {
            average: 11,
            mutiplier: 1.5,
            minimumMultipler: 0.5,
        },
        keyLevels: {
            momentumStartForLong: 182.5,
            momentumStartForShort: 195,
        },
        short: {
            redtoGreenPlan: { strictMode: true, targets: R2Target, planConfigs: stock3Configs },
            falseBreakoutPlan: { price: 194.88, targets: R2Target, planConfigs: stock3Configs }
        },
        long: {
        },
    }
];