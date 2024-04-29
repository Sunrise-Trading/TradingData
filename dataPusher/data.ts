import * as TradingPlans from './models';
import * as Constants from './constants';

export const activeProfileName: string = "momentumSimple";  // futures, momentumSimple;
export const tradingSettings: TradingPlans.TradingSettings = {
    equalWeightDivider: 4,
    useSingleOrderForEntry: true,
}
const phg: TradingPlans.PlanConfigs = {
    size: 0.2,
    deferTradingInSeconds: 0,
    stopTradingAfterSeconds: 0,
    requireReversal: true,
    alwaysAllowStopOutOrFlatten: false,
    allowEarlyExits: false,
    allowFirstFewExitsCount: 2,
};
const bidu: TradingPlans.PlanConfigs = {
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
const sofi: TradingPlans.PlanConfigs = {
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
    'PHG',
    'BIDU',
    'TSLA',
    'SOFI',
];

export const stocksTradingPlans: TradingPlans.TradingPlans[] = [
    {
        symbol: 'PHG',
        analysis: {
            newsQualityAndFreshness: 2,
            dailyChartStory: 2,
            relativeVolumeAndCandleSmoothness: 2,
            cleanVwapTrend: 2,
        },
        autoFlip: false,
        vwapCorrection: { volumeSum: 1323737, tradingSum: 38991618 },
        atr: {
            average: 0.37,
            mutiplier: 2,
            minimumMultipler: 2,
        },
        longOnlyIfOpenAbove: 0,
        shortOnlyIfOpenBelow: 0,
        keyLevels: {
            momentumStartForLong: 30,
            momentumStartForShort: 30,
        },
        short: {
            firstBreakoutPlan: { targets: R2Target, planConfigs: phg },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: R2Target, planConfigs: phg },
            firstNewHighPlan: { enableAutoTrigger: true, includeSecondNewHigh: true, targets: R2Target, planConfigs: phg },
            firstRetracementPlan: { targets: R2Target, planConfigs: phg },
        },
        long: {
        },
    },
    {
        symbol: 'BIDU',
        analysis: {
            newsQualityAndFreshness: 1,
            dailyChartStory: 1,
            relativeVolumeAndCandleSmoothness: 1,
            cleanVwapTrend: 2,
        },
        autoFlip: false,
        vwapCorrection: { volumeSum: 200141, tradingSum: 21259126 },
        atr: {
            average: 2.5,
            mutiplier: 1.3,
            minimumMultipler: 1,
        },
        longOnlyIfOpenAbove: 0,
        shortOnlyIfOpenBelow: 0,
        keyLevels: {
            momentumStartForLong: 107.5,
            momentumStartForShort: 107.5,
        },
        short: {
            firstNewHighPlan: { enableAutoTrigger: true, includeSecondNewHigh: true, targets: R2Target, planConfigs: bidu },
        },
        long: {
        },
    },
    {
        symbol: 'TSLA',
        analysis: {
            newsQualityAndFreshness: 2,
            dailyChartStory: 2,
            relativeVolumeAndCandleSmoothness: 2,
            cleanVwapTrend: 2,
        },
        autoFlip: false,
        vwapCorrection: { volumeSum: 8901889, tradingSum: 1660525037 },
        atr: {
            average: 5,
            mutiplier: 2,
            minimumMultipler: 1,
        },
        longOnlyIfOpenAbove: 0,
        shortOnlyIfOpenBelow: 0,
        keyLevels: {
            momentumStartForLong: 175,
            momentumStartForShort: 200,
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
        symbol: 'SOFI',
        analysis: {
            newsQualityAndFreshness: 2,
            dailyChartStory: 1,
            relativeVolumeAndCandleSmoothness: 2,
            cleanVwapTrend: 2,
        },
        autoFlip: false,
        vwapCorrection: { volumeSum: 12515461, tradingSum: 97997715 },
        atr: {
            average: 0.3,
            mutiplier: 1.5,
            minimumMultipler: 1,
        },
        longOnlyIfOpenAbove: 0,
        shortOnlyIfOpenBelow: 0,
        keyLevels: {
            momentumStartForLong: 8,
            momentumStartForShort: 8,
        },
        short: {
            firstBreakoutPlan: { targets: R2Target, planConfigs: sofi },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: R2Target, planConfigs: sofi },
            firstNewHighPlan: { enableAutoTrigger: true, includeSecondNewHigh: true, targets: R2Target, planConfigs: sofi },
            firstRetracementPlan: { targets: R2Target, planConfigs: sofi },
        },
        long: {
        },
    },
];