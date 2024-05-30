import * as TradingPlans from './models';
import * as Constants from './constants';

export const activeProfileName: string = "momentumSimple";  // futures, momentumSimple;
export const tradingSettings: TradingPlans.TradingSettings = {
    equalWeightDivider: 4,
    useSingleOrderForEntry: false,
}
const tsla: TradingPlans.PlanConfigs = {
    size: 0.2,
    deferTradingInSeconds: 0,
    stopTradingAfterSeconds: 0,
    requireReversal: true,
    alwaysAllowStopOutOrFlatten: false,
    allowEarlyExits: false,
    allowFirstFewExitsCount: 2,
};
const crmShort: TradingPlans.PlanConfigs = {
    size: 0.2,
    deferTradingInSeconds: 0,
    stopTradingAfterSeconds: 0,
    requireReversal: true,
    alwaysAllowStopOutOrFlatten: false,
    allowEarlyExits: false,
    allowFirstFewExitsCount: 2,
};
const crmLong: TradingPlans.PlanConfigs = {
    size: 0.2,
    deferTradingInSeconds: 0,
    stopTradingAfterSeconds: 60,
    requireReversal: true,
    alwaysAllowStopOutOrFlatten: false,
    allowEarlyExits: false,
    allowFirstFewExitsCount: 2,
};
const pathShort: TradingPlans.PlanConfigs = {
    size: 0.2,
    deferTradingInSeconds: 0,
    stopTradingAfterSeconds: 0,
    requireReversal: true,
    alwaysAllowStopOutOrFlatten: false,
    allowEarlyExits: false,
    allowFirstFewExitsCount: 2,
};
const pathLong: TradingPlans.PlanConfigs = {
    size: 0.2,
    deferTradingInSeconds: 0,
    stopTradingAfterSeconds: 60,
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
    'CRM',
    'PATH',
];

export const stocksTradingPlans: TradingPlans.TradingPlans[] = [
    {
        symbol: 'TSLA',
        analysis: {
            newsQualityAndFreshness: 1,
            dailyChartStory: 2,
            relativeVolumeAndCandleSmoothness: 1,
            cleanVwapTrend: 2,
        },
        autoFlip: false,
        vwapCorrection: { volumeSum: 0, tradingSum: 0 },
        atr: {
            average: 4.5,
            mutiplier: 1.5,
            minimumMultipler: 1,
        },
        longOnlyIfOpenAbove: 0,
        shortOnlyIfOpenBelow: 0,
        keyLevels: {
            momentumStartForLong: 177,
            momentumStartForShort: 177,
        },
        short: {
        },
        long: {
            falseBreakoutPlan: { price: 178.15, targets: R2Target, planConfigs: tsla },
            firstBreakoutPlan: { targets: R2Target, planConfigs: tsla },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: R2Target, planConfigs: tsla },
            firstNewHighPlan: { enableAutoTrigger: false, includeSecondNewHigh: true, targets: R2Target, planConfigs: tsla },
            firstRetracementPlan: { targets: R2Target, planConfigs: tsla },
        },
    },
    {
        symbol: 'CRM',
        analysis: {
            newsQualityAndFreshness: 2,
            dailyChartStory: 2,
            relativeVolumeAndCandleSmoothness: 2,
            cleanVwapTrend: 0,
        },
        autoFlip: false,
        vwapCorrection: { volumeSum: 0, tradingSum: 0 },
        atr: {
            average: 6,
            mutiplier: 1.5,
            minimumMultipler: 0.8,
        },
        longOnlyIfOpenAbove: 0,
        shortOnlyIfOpenBelow: 0,
        keyLevels: {
            momentumStartForLong: 220,
            momentumStartForShort: 240,
        },
        short: {
            premarket2ndBreakout60Plan: { targets: R2Target, planConfigs: crmShort },
            firstBreakoutPlan: { targets: R2Target, planConfigs: crmShort },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: R2Target, planConfigs: crmShort },
            firstNewHighPlan: { enableAutoTrigger: false, includeSecondNewHigh: true, targets: R2Target, planConfigs: crmShort },
            firstRetracementPlan: { targets: R2Target, planConfigs: crmShort },
        },
        long: {
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: R2Target, planConfigs: crmLong },
        },
    },
    {
        symbol: 'PATH',
        analysis: {
            newsQualityAndFreshness: 2,
            dailyChartStory: 2,
            relativeVolumeAndCandleSmoothness: 2,
            cleanVwapTrend: 2,
        },
        autoFlip: false,
        vwapCorrection: { volumeSum: 0, tradingSum: 0 },
        atr: {
            average: 0.6,
            mutiplier: 2,
            minimumMultipler: 1,
        },
        longOnlyIfOpenAbove: 0,
        shortOnlyIfOpenBelow: 0,
        keyLevels: {
            momentumStartForLong: 12,
            momentumStartForShort: 15,
        },
        short: {
            premarket2ndBreakout60Plan: { targets: R2Target, planConfigs: pathShort },
            firstBreakoutPlan: { targets: R2Target, planConfigs: pathShort },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: R2Target, planConfigs: pathShort },
            firstNewHighPlan: { enableAutoTrigger: false, includeSecondNewHigh: true, targets: R2Target, planConfigs: pathShort },
            firstRetracementPlan: { targets: R2Target, planConfigs: pathShort },
        },
        long: {
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: R2Target, planConfigs: pathLong },
        },
    },

];