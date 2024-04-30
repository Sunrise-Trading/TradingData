import * as TradingPlans from './models';
import * as Constants from './constants';

export const activeProfileName: string = "momentumSimple";  // futures, momentumSimple;
export const tradingSettings: TradingPlans.TradingSettings = {
    equalWeightDivider: 4,
    useSingleOrderForEntry: true,
}
const pypl: TradingPlans.PlanConfigs = {
    size: 0.2,
    deferTradingInSeconds: 0,
    stopTradingAfterSeconds: 0,
    requireReversal: true,
    alwaysAllowStopOutOrFlatten: false,
    allowEarlyExits: false,
    allowFirstFewExitsCount: 2,
};
const stock2Configs: TradingPlans.PlanConfigs = {
    size: 0.2,
    deferTradingInSeconds: 0,
    stopTradingAfterSeconds: 0,
    requireReversal: true,
    alwaysAllowStopOutOrFlatten: false,
    allowEarlyExits: false,
    allowFirstFewExitsCount: 2,
};
const stock3Configs: TradingPlans.PlanConfigs = {
    size: 0.2,
    deferTradingInSeconds: 0,
    stopTradingAfterSeconds: 0,
    requireReversal: true,
    alwaysAllowStopOutOrFlatten: false,
    allowEarlyExits: false,
    allowFirstFewExitsCount: 2,
};
const stock4Configs: TradingPlans.PlanConfigs = {
    size: 0.2,
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
        dailyRanges: [1, 1, 1, 1, 1, 1, 1, 10, 10, 10],
    },
    minimumTargets: {
        rrr: [0.4, 0.6, 1, 1.5, 1.8, 1.9, 1.9, 1.9, 1.9, 1.9],
        priceLevels: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        dailyRanges: [0.6, 0.65, 0.7, 0.75, 0.8, 0.85, 0.9, 0.95, 1, 1],
    }
};
const R1Target: TradingPlans.ExitTargets = {
    initialTargets: {
        priceLevels: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        rrr: [1, 1, 1, 1, 1, 1, 1.5, 1.5, 2, 2],
        dailyRanges: [1, 1, 1, 1, 1, 1, 1, 1, 10, 10],
    },
    minimumTargets: {
        rrr: [0.4, 0.4, 0.5, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9],
        priceLevels: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        dailyRanges: [0.5, 0.55, 0.6, 0.65, 0.7, 0.8, 0.85, 0.9, 1, 1],
    }
};
export const stockSelections: string[] = [
    'PYPL',
    'LLY',
    'NVO'
];

export const stocksTradingPlans: TradingPlans.TradingPlans[] = [
    {
        symbol: 'PYPL',
        analysis: {
            newsQualityAndFreshness: 2,
            dailyChartStory: 1,
            relativeVolumeAndCandleSmoothness: 2,
            cleanVwapTrend: 2,
        },
        autoFlip: false,
        vwapCorrection: { volumeSum: 2523196, tradingSum: 177520395 },
        atr: {
            average: 1.67,
            mutiplier: 1.67,
            minimumMultipler: 1,
        },
        longOnlyIfOpenAbove: 0,
        shortOnlyIfOpenBelow: 0,
        keyLevels: {
            momentumStartForLong: 68,
            momentumStartForShort: 75,
        },
        short: {
            firstBreakoutPlan: { targets: R2Target, planConfigs: pypl },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: R2Target, planConfigs: pypl },
            firstNewHighPlan: { enableAutoTrigger: true, includeSecondNewHigh: true, targets: R2Target, planConfigs: pypl },
            firstRetracementPlan: { targets: R2Target, planConfigs: pypl },
        },
        long: {
            firstBreakoutPlan: { targets: R1Target, planConfigs: pypl },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: R1Target, planConfigs: pypl },
            firstNewHighPlan: { enableAutoTrigger: false, includeSecondNewHigh: true, targets: R1Target, planConfigs: pypl },
            firstRetracementPlan: { targets: R1Target, planConfigs: pypl },
        },
    },
    {
        symbol: 'LLY',
        analysis: {
            newsQualityAndFreshness: 2,
            dailyChartStory: 1,
            relativeVolumeAndCandleSmoothness: 1,
            cleanVwapTrend: 2,
        },
        autoFlip: false,
        vwapCorrection: { volumeSum: 140450, tradingSum: 110086832 },
        atr: {
            average: 17,
            mutiplier: 1.5,
            minimumMultipler: 0.5,
        },
        longOnlyIfOpenAbove: 0,
        shortOnlyIfOpenBelow: 0,
        keyLevels: {
            momentumStartForLong: 750,
            momentumStartForShort: 800,
        },
        short: {
            firstNewHighPlan: { enableAutoTrigger: true, includeSecondNewHigh: true, targets: R2Target, planConfigs: stock2Configs },
        },
        long: {
        },
    },
    {
        symbol: 'NVO',
        analysis: {
            newsQualityAndFreshness: 1,
            dailyChartStory: 1,
            relativeVolumeAndCandleSmoothness: 1,
            cleanVwapTrend: 2,
        },
        autoFlip: false,
        vwapCorrection: { volumeSum: 319954, tradingSum: 41387206 },
        atr: {
            average: 2.6,
            mutiplier: 1,
            minimumMultipler: 0.5,
        },
        longOnlyIfOpenAbove: 0,
        shortOnlyIfOpenBelow: 0,
        keyLevels: {
            momentumStartForLong: 130,
            momentumStartForShort: 130,
        },
        short: {
            firstNewHighPlan: { enableAutoTrigger: true, includeSecondNewHigh: true, targets: R2Target, planConfigs: stock3Configs },
        },
        long: {
        },
    }
];