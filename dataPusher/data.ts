import * as TradingPlans from './models';
import * as Constants from './constants';

export const activeProfileName: string = "momentumSimple";  // futures, momentumSimple;
export const tradingSettings: TradingPlans.TradingSettings = {
    equalWeightDivider: 4,
}
const googl: TradingPlans.PlanConfigs = {
    size: 0.2,
    deferTradingInSeconds: 0,
    stopTradingAfterSeconds: 0,
    requireReversal: true,
    alwaysAllowStopOutOrFlatten: false,
    allowEarlyExits: false,
    allowFirstFewExitsCount: 2,
};
const tsla: TradingPlans.PlanConfigs = {
    size: 0.2,
    deferTradingInSeconds: 0,
    stopTradingAfterSeconds: 0,
    requireReversal: true,
    alwaysAllowStopOutOrFlatten: false,
    allowEarlyExits: false,
    allowFirstFewExitsCount: 2,
};
const nvda: TradingPlans.PlanConfigs = {
    size: 0.2,
    deferTradingInSeconds: 115,
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
    'GOOGL',
    'TSLA',
    'NVDA',
];

export const stocksTradingPlans: TradingPlans.TradingPlans[] = [
    {
        symbol: 'GOOGL',
        autoFlip: false,
        vwapCorrection: { volumeSum: 1358548, tradingSum: 201125248 },
        atr: {
            average: 3.1,
            mutiplier: 1.6,
            minimumMultipler: 0.64,
        },
        longOnlyIfOpenAbove: 0,
        shortOnlyIfOpenBelow: 0,
        keyLevels: {
            momentumStartForLong: 153,
            momentumStartForShort: 153,
        },
        short: {
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: R2Target, planConfigs: googl },
            firstNewHighPlan: { includeSecondNewHigh: true, targets: R2Target, planConfigs: googl },
        },
        long: {
            //redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: R2Target, planConfigs: googl },
            //firstNewHighPlan: { includeSecondNewHigh: true, targets: R2Target, planConfigs: googl },
        },
    },
    {
        symbol: 'TSLA',
        autoFlip: false,
        vwapCorrection: { volumeSum: 1617830, tradingSum: 274189251 },
        atr: {
            average: 8,
            mutiplier: 0.9,
            minimumMultipler: 0.45,
        },
        longOnlyIfOpenAbove: 0,
        shortOnlyIfOpenBelow: 0,
        keyLevels: {
            momentumStartForLong: 171,
            momentumStartForShort: 175,
        },
        short: {
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: R2Target, planConfigs: tsla },
            firstNewHighPlan: { includeSecondNewHigh: true, targets: R2Target, planConfigs: tsla },
            falseBreakoutPlan: { price: 170, targets: R2Target, planConfigs: tsla },
        },
        long: {
        },
    },
    {
        symbol: 'NVDA',
        autoFlip: false,
        vwapCorrection: { volumeSum: 610691, tradingSum: 550587505 },
        atr: {
            average: 39,
            mutiplier: 1,
            minimumMultipler: 0.4,
        },
        longOnlyIfOpenAbove: 0,
        shortOnlyIfOpenBelow: 0,
        keyLevels: {
            momentumStartForLong: 895,
            momentumStartForShort: 895,
        },
        short: {
        },
        long: {
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: R2Target, planConfigs: nvda },
            firstNewHighPlan: { includeSecondNewHigh: true, targets: R2Target, planConfigs: nvda },

        },
    }
];