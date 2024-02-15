import * as TradingPlans from './models';
import * as Constants from './constants';

export const activeProfileName: string = "momentumSimple";  // futures, momentumSimple;
export const tradingSettings: TradingPlans.TradingSettings = {
    equalWeightDivider: 4,
}
const soun: TradingPlans.PlanConfigs = {
    size: 0.1,
    deferTradingInSeconds: 0,
    stopTradingAfterSeconds: 0,
    requireReversal: true,
    alwaysAllowStopOutOrFlatten: false,
    allowEarlyExits: false,
    allowFirstFewExitsCount: 2,
};
const nnox: TradingPlans.PlanConfigs = {
    size: 0.1,
    deferTradingInSeconds: 0,
    stopTradingAfterSeconds: 0,
    requireReversal: true,
    alwaysAllowStopOutOrFlatten: false,
    allowEarlyExits: false,
    allowFirstFewExitsCount: 2,
};
const dwac: TradingPlans.PlanConfigs = {
    size: 0.1,
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
    'SOUN',
    'NNOX',
    'DWAC',
];

export const stocksTradingPlans: TradingPlans.TradingPlans[] = [
    {
        symbol: 'SOUN',
        autoFlip: false,
        vwapCorrection: { volumeSum: 29178142, tradingSum: 116222976 },
        atr: {
            average: 0.15,
            mutiplier: 6,
            minimumMultipler: 4,
        },
        keyLevels: {
            momentumStartForLong: 3.5,
            momentumStartForShort: 4.49,
        },
        short: {
        },
        long: {
            redtoGreenPlan: { strictMode: true, targets: R2Target, planConfigs: soun },
            firstNewHighPlan: { targets: R2Target, planConfigs: soun },
            levelBreakout: { entryPrice: 4.49, targets: R2Target, planConfigs: soun }
        },
    },
    {
        symbol: 'NNOX',
        autoFlip: false,
        vwapCorrection: { volumeSum: 3358006, tradingSum: 32848682 },
        atr: {
            average: 0.42,
            mutiplier: 10,
            minimumMultipler: 8,
        },
        keyLevels: {
            momentumStartForLong: 10,
            momentumStartForShort: 14,
        },
        short: {
        },
        long: {
            redtoGreenPlan: { strictMode: true, targets: R2Target, planConfigs: nnox },
            firstNewHighPlan: { targets: R2Target, planConfigs: nnox },
            levelBreakout: { entryPrice: 14.73, targets: R2Target, planConfigs: nnox }
        },
    },
    {
        symbol: 'DWAC',
        autoFlip: false,
        vwapCorrection: { volumeSum: 903263, tradingSum: 48475581 },
        atr: {
            average: 4.6,
            mutiplier: 2,
            minimumMultipler: 1,
        },
        keyLevels: {
            momentumStartForLong: 50,
            momentumStartForShort: 50,
        },
        short: {
        },
        long: {
            redtoGreenPlan: { strictMode: true, targets: R2Target, planConfigs: dwac },
            firstNewHighPlan: { targets: R2Target, planConfigs: dwac },
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
            firstNewHighPlan: { targets: R2Target, planConfigs: stock4Configs },
        },
        long: {
            redtoGreenPlan: { strictMode: true, targets: R2Target, planConfigs: stock4Configs },
            firstNewHighPlan: { targets: R2Target, planConfigs: stock4Configs },
        },
    },
];