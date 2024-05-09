import * as TradingPlans from './models';
import * as Constants from './constants';

export const activeProfileName: string = "momentumSimple";  // futures, momentumSimple;
export const tradingSettings: TradingPlans.TradingSettings = {
    equalWeightDivider: 4,
    useSingleOrderForEntry: true,
}
const arm: TradingPlans.PlanConfigs = {
    size: 0.2,
    deferTradingInSeconds: 0,
    stopTradingAfterSeconds: 0,
    requireReversal: true,
    alwaysAllowStopOutOrFlatten: false,
    allowEarlyExits: false,
    allowFirstFewExitsCount: 2,
};
const rblx: TradingPlans.PlanConfigs = {
    size: 0.2,
    deferTradingInSeconds: 110,
    stopTradingAfterSeconds: 0,
    requireReversal: true,
    alwaysAllowStopOutOrFlatten: false,
    allowEarlyExits: false,
    allowFirstFewExitsCount: 2,
};
const hood: TradingPlans.PlanConfigs = {
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
    'HOOD', 'ARM',
    'RBLX',
];

export const stocksTradingPlans: TradingPlans.TradingPlans[] = [
    {
        symbol: 'ARM',
        analysis: {
            newsQualityAndFreshness: 2,
            dailyChartStory: 0,
            relativeVolumeAndCandleSmoothness: 2,
            cleanVwapTrend: 2,
        },
        autoFlip: false,
        vwapCorrection: { volumeSum: 629765, tradingSum: 61930517 },
        atr: {
            average: 6,
            mutiplier: 1.2,
            minimumMultipler: 0.8,
        },
        longOnlyIfOpenAbove: 0,
        shortOnlyIfOpenBelow: 0,
        keyLevels: {
            momentumStartForLong: 96,
            momentumStartForShort: 110,
        },
        short: {
            firstBreakoutPlan: { targets: R2Target, planConfigs: arm },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: R2Target, planConfigs: arm },
            firstNewHighPlan: { enableAutoTrigger: false, includeSecondNewHigh: true, targets: R2Target, planConfigs: arm },
            firstRetracementPlan: { targets: R2Target, planConfigs: arm },
        },
        long: {
            firstBreakoutPlan: { targets: R2Target, planConfigs: arm },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: R2Target, planConfigs: arm },
            firstNewHighPlan: { enableAutoTrigger: true, includeSecondNewHigh: true, targets: R2Target, planConfigs: arm },
            firstRetracementPlan: { targets: R2Target, planConfigs: arm },
        },
    },
    {
        symbol: 'RBLX',
        analysis: {
            newsQualityAndFreshness: 2,
            dailyChartStory: 2,
            relativeVolumeAndCandleSmoothness: 2,
            cleanVwapTrend: 1,
        },
        autoFlip: false,
        vwapCorrection: { volumeSum: 5499403, tradingSum: 157582892 },
        atr: {
            average: 1.45,
            mutiplier: 1.5,
            minimumMultipler: 1,
        },
        longOnlyIfOpenAbove: 0,
        shortOnlyIfOpenBelow: 0,
        keyLevels: {
            momentumStartForLong: 27,
            momentumStartForShort: 32,
        },
        short: {
            firstBreakoutPlan: { targets: R2Target, planConfigs: rblx },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: R2Target, planConfigs: rblx },
            firstNewHighPlan: { enableAutoTrigger: false, includeSecondNewHigh: true, targets: R2Target, planConfigs: rblx },
            firstRetracementPlan: { targets: R2Target, planConfigs: rblx },
        },
        long: {
            firstBreakoutPlan: { targets: R2Target, planConfigs: rblx },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: R2Target, planConfigs: rblx },
            firstNewHighPlan: { enableAutoTrigger: false, includeSecondNewHigh: true, targets: R2Target, planConfigs: rblx },
            firstRetracementPlan: { targets: R2Target, planConfigs: rblx },
        },
    },
    {
        symbol: 'HOOD',
        analysis: {
            newsQualityAndFreshness: 2,
            dailyChartStory: 1,
            relativeVolumeAndCandleSmoothness: 1,
            cleanVwapTrend: 2,
        },
        autoFlip: false,
        vwapCorrection: { volumeSum: 786269, tradingSum: 14896224 },
        atr: {
            average: 0.84,
            mutiplier: 1.2,
            minimumMultipler: 0.5,
        },
        longOnlyIfOpenAbove: 0,
        shortOnlyIfOpenBelow: 0,
        keyLevels: {
            momentumStartForLong: 18,
            momentumStartForShort: 18,
        },
        short: {
        },
        long: {
            firstBreakoutPlan: { targets: R2Target, planConfigs: hood },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: R2Target, planConfigs: hood },
            firstNewHighPlan: { enableAutoTrigger: true, includeSecondNewHigh: true, targets: R2Target, planConfigs: hood },
            firstRetracementPlan: { targets: R2Target, planConfigs: hood },
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