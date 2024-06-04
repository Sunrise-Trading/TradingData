import * as TradingPlans from './models';
import * as Constants from './constants';

export const activeProfileName: string = "momentumSimple";  // futures, momentumSimple;
export const tradingSettings: TradingPlans.TradingSettings = {
    equalWeightDivider: 4,
    useSingleOrderForEntry: true,
}
const tsla: TradingPlans.PlanConfigs = {
    size: 0.2,
    deferTradingInSeconds: 280,
    stopTradingAfterSeconds: 0,
    requireReversal: true,
    alwaysAllowStopOutOrFlatten: true,
    allowEarlyExits: true,
    allowFirstFewExitsCount: 5,
};
const nvda: TradingPlans.PlanConfigs = {
    size: 0.2,
    deferTradingInSeconds: 110,
    stopTradingAfterSeconds: 0,
    requireReversal: true,
    alwaysAllowStopOutOrFlatten: true,
    allowEarlyExits: true,
    allowFirstFewExitsCount: 5,
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
    'TSLA',
    'NVDA',
];

export const stocksTradingPlans: TradingPlans.TradingPlans[] = [
    {
        symbol: 'TSLA',
        analysis: {
            newsQualityAndFreshness: 1,
            dailyChartStory: 1,
            relativeVolumeAndCandleSmoothness: 2,
            cleanVwapTrend: 2,
        },
        autoFlip: false,
        vwapCorrection: { volumeSum: 0, tradingSum: 0 },
        atr: {
            average: 7,
            mutiplier: 1,
            minimumMultipler: 0.6,
        },
        longOnlyIfOpenAbove: 0,
        shortOnlyIfOpenBelow: 0,
        keyLevels: {
            momentumStartForLong: 173,
            momentumStartForShort: 180,
        },
        short: {
            firstBreakoutPlan: { targets: R2Target, planConfigs: tsla },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: R2Target, planConfigs: tsla },
            firstNewHighPlan: { enableAutoTrigger: false, includeSecondNewHigh: true, targets: R2Target, planConfigs: tsla },
            firstRetracementPlan: { targets: R2Target, planConfigs: tsla },
        },
        long: {
            firstBreakoutPlan: { targets: R2Target, planConfigs: tsla },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: R2Target, planConfigs: tsla },
            firstNewHighPlan: { enableAutoTrigger: false, includeSecondNewHigh: true, targets: R2Target, planConfigs: tsla },
            firstRetracementPlan: { targets: R2Target, planConfigs: tsla },
        },
    },
    {
        symbol: 'NVDA',
        analysis: {
            newsQualityAndFreshness: 1,
            dailyChartStory: 1,
            relativeVolumeAndCandleSmoothness: 0,
            cleanVwapTrend: 2,
        },
        autoFlip: false,
        vwapCorrection: { volumeSum: 0, tradingSum: 0 },
        atr: {
            average: 30,
            mutiplier: 1,
            minimumMultipler: 0.5,
        },
        longOnlyIfOpenAbove: 0,
        shortOnlyIfOpenBelow: 0,
        keyLevels: {
            momentumStartForLong: 0,
            momentumStartForShort: 0,
        },
        short: {
        },
        long: {
            falseBreakoutPlan: { price: 1147, targets: R2Target, planConfigs: nvda },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: R2Target, planConfigs: nvda },
            firstNewHighPlan: { enableAutoTrigger: false, includeSecondNewHigh: true, targets: R2Target, planConfigs: nvda },
            firstRetracementPlan: { targets: R2Target, planConfigs: nvda },
        },
    },
    {
        symbol: 'stock3',
        analysis: {
            newsQualityAndFreshness: -1,
            dailyChartStory: -1,
            relativeVolumeAndCandleSmoothness: -1,
            cleanVwapTrend: -1,
        },
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
            firstBreakoutPlan: { targets: R2Target, planConfigs: stock3Configs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: R2Target, planConfigs: stock3Configs },
            firstNewHighPlan: { enableAutoTrigger: false, includeSecondNewHigh: true, targets: R2Target, planConfigs: stock3Configs },
            firstRetracementPlan: { targets: R2Target, planConfigs: stock3Configs },
        },
        long: {
            firstBreakoutPlan: { targets: R2Target, planConfigs: stock3Configs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: R2Target, planConfigs: stock3Configs },
            firstNewHighPlan: { enableAutoTrigger: false, includeSecondNewHigh: true, targets: R2Target, planConfigs: stock3Configs },
            firstRetracementPlan: { targets: R2Target, planConfigs: stock3Configs },
        },
    },
    {
        symbol: 'stock4',
        analysis: {
            newsQualityAndFreshness: -1,
            dailyChartStory: -1,
            relativeVolumeAndCandleSmoothness: -1,
            cleanVwapTrend: -1,
        },
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
            firstBreakoutPlan: { targets: R2Target, planConfigs: stock4Configs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: R2Target, planConfigs: stock4Configs },
            firstNewHighPlan: { enableAutoTrigger: false, includeSecondNewHigh: true, targets: R2Target, planConfigs: stock4Configs },
            firstRetracementPlan: { targets: R2Target, planConfigs: stock4Configs },
        },
        long: {
            firstBreakoutPlan: { targets: R2Target, planConfigs: stock4Configs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: R2Target, planConfigs: stock4Configs },
            firstNewHighPlan: { enableAutoTrigger: false, includeSecondNewHigh: true, targets: R2Target, planConfigs: stock4Configs },
            firstRetracementPlan: { targets: R2Target, planConfigs: stock4Configs },
        },
    },
];