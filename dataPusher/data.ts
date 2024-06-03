import * as TradingPlans from './models';
import * as Constants from './constants';

export const activeProfileName: string = "momentumSimple";  // futures, momentumSimple;
export const tradingSettings: TradingPlans.TradingSettings = {
    equalWeightDivider: 4,
    useSingleOrderForEntry: true,
}
const gme: TradingPlans.PlanConfigs = {
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
    deferTradingInSeconds: 0,
    stopTradingAfterSeconds: 0,
    requireReversal: true,
    alwaysAllowStopOutOrFlatten: false,
    allowEarlyExits: false,
    allowFirstFewExitsCount: 2,
};
const amd: TradingPlans.PlanConfigs = {
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
    'GME',
    'NVDA', 'AMD'
];

export const stocksTradingPlans: TradingPlans.TradingPlans[] = [
    {
        symbol: 'GME',
        analysis: {
            newsQualityAndFreshness: 2,
            dailyChartStory: 2,
            relativeVolumeAndCandleSmoothness: 2,
            cleanVwapTrend: 2,
        },
        autoFlip: false,
        vwapCorrection: { volumeSum: 0, tradingSum: 0 },
        atr: {
            average: 5,
            mutiplier: 1.5,
            minimumMultipler: 1,
        },
        longOnlyIfOpenAbove: 0,
        shortOnlyIfOpenBelow: 0,
        keyLevels: {
            momentumStartForLong: 37,
            momentumStartForShort: 45,
        },
        short: {
            profitTakingFade60Plan: { targets: R2Target, planConfigs: gme },
            firstBreakoutPlan: { targets: R2Target, planConfigs: gme },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: R2Target, planConfigs: gme },
            firstNewHighPlan: { enableAutoTrigger: false, includeSecondNewHigh: true, targets: R2Target, planConfigs: gme },
            firstRetracementPlan: { targets: R2Target, planConfigs: gme },
        },
        long: {
            firstBreakoutPlan: { targets: R2Target, planConfigs: gme },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: R2Target, planConfigs: gme },
            firstNewHighPlan: { enableAutoTrigger: false, includeSecondNewHigh: true, targets: R2Target, planConfigs: gme },
            firstRetracementPlan: { targets: R2Target, planConfigs: gme },
        },
    },
    {
        symbol: 'NVDA',
        analysis: {
            newsQualityAndFreshness: 1,
            dailyChartStory: 0,
            relativeVolumeAndCandleSmoothness: 0,
            cleanVwapTrend: 2,
        },
        autoFlip: false,
        vwapCorrection: { volumeSum: 0, tradingSum: 0 },
        atr: {
            average: 30,
            mutiplier: 1.5,
            minimumMultipler: 1,
        },
        longOnlyIfOpenAbove: 0,
        shortOnlyIfOpenBelow: 0,
        keyLevels: {
            momentumStartForLong: 1100,
            momentumStartForShort: 1150,
        },
        short: {
            firstBreakoutPlan: { targets: R2Target, planConfigs: nvda },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: R2Target, planConfigs: nvda },
            firstNewHighPlan: { enableAutoTrigger: false, includeSecondNewHigh: true, targets: R2Target, planConfigs: nvda },
            firstRetracementPlan: { targets: R2Target, planConfigs: nvda },
        },
        long: {
            firstBreakoutPlan: { targets: R2Target, planConfigs: nvda },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: R2Target, planConfigs: nvda },
            firstNewHighPlan: { enableAutoTrigger: false, includeSecondNewHigh: true, targets: R2Target, planConfigs: nvda },
            firstRetracementPlan: { targets: R2Target, planConfigs: nvda },
        },
    },
    {
        symbol: 'AMD',
        analysis: {
            newsQualityAndFreshness: 1,
            dailyChartStory: 0,
            relativeVolumeAndCandleSmoothness: 0,
            cleanVwapTrend: 2,
        },
        autoFlip: false,
        vwapCorrection: { volumeSum: 0, tradingSum: 0 },
        atr: {
            average: 7,
            mutiplier: 1,
            minimumMultipler: 1,
        },
        longOnlyIfOpenAbove: 0,
        shortOnlyIfOpenBelow: 0,
        keyLevels: {
            momentumStartForLong: 165,
            momentumStartForShort: 175,
        },
        short: {
            firstBreakoutPlan: { targets: R2Target, planConfigs: amd },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: R2Target, planConfigs: amd },
            firstNewHighPlan: { enableAutoTrigger: false, includeSecondNewHigh: true, targets: R2Target, planConfigs: amd },
            firstRetracementPlan: { targets: R2Target, planConfigs: amd },
        },
        long: {
            firstBreakoutPlan: { targets: R2Target, planConfigs: amd },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: R2Target, planConfigs: amd },
            firstNewHighPlan: { enableAutoTrigger: false, includeSecondNewHigh: true, targets: R2Target, planConfigs: amd },
            firstRetracementPlan: { targets: R2Target, planConfigs: amd },
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