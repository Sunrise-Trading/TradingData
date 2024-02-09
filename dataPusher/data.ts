import * as TradingPlans from './models';
import * as Constants from './constants';

export const activeProfileName: string = "momentumSimple";  // futures, momentumSimple;
export const tradingSettings: TradingPlans.TradingSettings = {
    equalWeightDivider: 4,
}
const netLong: TradingPlans.PlanConfigs = {
    size: 0.3,
    deferTradingInSeconds: 0,
    stopTradingAfterSeconds: 0,
    requireReversal: true,
    alwaysAllowStopOutOrFlatten: false,
    allowEarlyExits: false,
    allowFirstFewExitsCount: 2,
};
const netShort: TradingPlans.PlanConfigs = {
    size: 0.15,
    deferTradingInSeconds: 0,
    stopTradingAfterSeconds: 90,
    requireReversal: true,
    alwaysAllowStopOutOrFlatten: false,
    allowEarlyExits: false,
    allowFirstFewExitsCount: 2,
};
const nvda: TradingPlans.PlanConfigs = {
    size: 0.15,
    deferTradingInSeconds: 0,
    stopTradingAfterSeconds: 0,
    requireReversal: true,
    alwaysAllowStopOutOrFlatten: false,
    allowEarlyExits: false,
    allowFirstFewExitsCount: 2,
};
const expe: TradingPlans.PlanConfigs = {
    size: 0.2,
    deferTradingInSeconds: 55,
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
    'NET',
    'NVDA',
    'EXPE',
];

export const stocksTradingPlans: TradingPlans.TradingPlans[] = [
    {
        symbol: 'NET',
        autoFlip: false,
        vwapCorrection: { volumeSum: 752604, tradingSum: 85014470 },
        atr: {
            average: 3.6,
            mutiplier: 2.2,
            minimumMultipler: 1,
        },
        keyLevels: {
            momentumStartForLong: 110,
            momentumStartForShort: 117.7,
        },
        short: {
            redtoGreenPlan: { strictMode: true, targets: R1Target, planConfigs: netShort },
        },
        long: {
            redtoGreenPlan: { strictMode: true, targets: R2Target, planConfigs: netLong },
            firstNewHighPlan: { targets: R2Target, planConfigs: netLong },
            levelBreakout: { entryPrice: 117.7, targets: R2Target, planConfigs: netLong }
        },
    },
    {
        symbol: 'NVDA',
        autoFlip: false,
        vwapCorrection: { volumeSum: 376896, tradingSum: 264852574 },
        atr: {
            average: 19,
            mutiplier: 0.85,
            minimumMultipler: 0.5,
        },
        keyLevels: {
            momentumStartForLong: 700,
            momentumStartForShort: 708,
        },
        short: {
        },
        long: {
            redtoGreenPlan: { strictMode: true, targets: R2Target, planConfigs: nvda },
            levelBreakout: { entryPrice: 708.18, targets: R2Target, planConfigs: nvda },
        },
    },
    {
        symbol: 'EXPE',
        autoFlip: false,
        vwapCorrection: { volumeSum: 336326, tradingSum: 45333515 },
        atr: {
            average: 4.23,
            mutiplier: 2,
            minimumMultipler: 1,
        },
        keyLevels: {
            momentumStartForLong: 133,
            momentumStartForShort: 140,
        },
        short: {
            firstNewHighPlan: { targets: R2Target, planConfigs: expe },
            falseBreakoutPlan: { price: 135.98, targets: R2Target, planConfigs: expe }
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
            firstNewHighPlan: { targets: R2Target, planConfigs: stock4Configs },
        },
        long: {
            redtoGreenPlan: { strictMode: true, targets: R2Target, planConfigs: stock4Configs },
            firstNewHighPlan: { targets: R2Target, planConfigs: stock4Configs },
        },
    },
];