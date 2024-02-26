import * as TradingPlans from './models';
import * as Constants from './constants';

export const activeProfileName: string = "momentumSimple";  // futures, momentumSimple;
export const tradingSettings: TradingPlans.TradingSettings = {
    equalWeightDivider: 4,
}
const liLong: TradingPlans.PlanConfigs = {
    size: 0.25,
    deferTradingInSeconds: 0,
    stopTradingAfterSeconds: 0,
    requireReversal: true,
    alwaysAllowStopOutOrFlatten: false,
    allowEarlyExits: false,
    allowFirstFewExitsCount: 2,
};
const liShort: TradingPlans.PlanConfigs = {
    size: 0.25,
    deferTradingInSeconds: 240,
    stopTradingAfterSeconds: 0,
    requireReversal: true,
    alwaysAllowStopOutOrFlatten: false,
    allowEarlyExits: false,
    allowFirstFewExitsCount: 2,
};
const mu: TradingPlans.PlanConfigs = {
    size: 0.25,
    deferTradingInSeconds: 0,
    stopTradingAfterSeconds: 0,
    requireReversal: true,
    alwaysAllowStopOutOrFlatten: true,
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
    'LI',
    'MU',
];

export const stocksTradingPlans: TradingPlans.TradingPlans[] = [
    {
        symbol: 'LI',
        autoFlip: false,
        vwapCorrection: { volumeSum: 1950856, tradingSum: 74841711 },
        atr: {
            average: 1.3,
            mutiplier: 2,
            minimumMultipler: 1,
        },
        longOnlyIfOpenAbove: 0,
        shortOnlyIfOpenBelow: 0,
        keyLevels: {
            momentumStartForLong: 38.38,
            momentumStartForShort: 40,
        },
        short: {
            falseBreakoutPlan: { price: 40, targets: R2Target, planConfigs: liShort },
        },
        long: {
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: R2Target, planConfigs: liLong },
            firstNewHighPlan: { targets: R2Target, planConfigs: liLong },
            secondNewHighPlan: { targets: R2Target, planConfigs: liLong }
        },
    },
    {
        symbol: 'MU',
        autoFlip: false,
        vwapCorrection: { volumeSum: 477147, tradingSum: 42665007 },
        atr: {
            average: 2.28,
            mutiplier: 1.5,
            minimumMultipler: 0.85,
        },
        longOnlyIfOpenAbove: 0,
        shortOnlyIfOpenBelow: 0,
        keyLevels: {
            momentumStartForLong: 173,
            momentumStartForShort: 173,
        },
        short: {
            falseBreakoutPlan: { price: 90, targets: R2Target, planConfigs: mu },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: R2Target, planConfigs: mu },
        },
        long: {
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: R2Target, planConfigs: mu },
            firstNewHighPlan: { targets: R2Target, planConfigs: mu },
            levelBreakout: { entryPrice: 90.04, targets: R2Target, planConfigs: mu },
        },
    }
];