import * as TradingPlans from './models';
import * as Constants from './constants';

// futures, momentumSimple, tradeStationEquity
export const activeProfileName: string = "momentumSimple";
export const tradingSettings: TradingPlans.TradingSettings = {
    equalWeightDivider: 4,
    useSingleOrderForEntry: true,
}
const docu: TradingPlans.PlanConfigs = {
    size: 0.2,
    deferTradingInSeconds: 0,
    stopTradingAfterSeconds: 0,
    requireReversal: true,
    alwaysAllowStopOutOrFlatten: false,
    allowEarlyExits: false,
    allowFirstFewExitsCount: 2,
};
const iot: TradingPlans.PlanConfigs = {
    size: 0.2,
    deferTradingInSeconds: 55,
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
    'DOCU',
    'IOT',
];

export const stocksTradingPlans: TradingPlans.TradingPlans[] = [
    {
        symbol: 'DOCU',
        analysis: {
            newsQualityAndFreshness: 2,
            dailyChartStory: 1,
            relativeVolumeAndCandleSmoothness: 1,
            cleanVwapTrend: 2,
        },
        autoFlip: false,
        vwapCorrection: { volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: 11000,
        atr: {
            average: 1.5,
            mutiplier: 1.8,
            minimumMultipler: 0.8,
        },
        longOnlyIfOpenAbove: 0,
        shortOnlyIfOpenBelow: 0,
        keyLevels: {
            momentumStartForLong: 49.8,
            momentumStartForShort: 54,
        },
        short: {
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: R2Target, planConfigs: docu },
            firstNewHighPlan: { enableAutoTrigger: false, includeSecondNewHigh: true, targets: R2Target, planConfigs: docu },
            firstRetracementPlan: { targets: R2Target, planConfigs: docu },
        },
        long: {
            premarket2ndBreakout60Plan: { targets: R2Target, planConfigs: docu },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: R2Target, planConfigs: docu },
            firstNewHighPlan: { enableAutoTrigger: false, includeSecondNewHigh: true, targets: R2Target, planConfigs: docu },
            firstRetracementPlan: { targets: R2Target, planConfigs: docu },
        },
    },
    {
        symbol: 'IOT',
        analysis: {
            newsQualityAndFreshness: 2,
            dailyChartStory: 1,
            relativeVolumeAndCandleSmoothness: 1,
            cleanVwapTrend: 2,
        },
        autoFlip: false,
        vwapCorrection: { volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: 19000,
        atr: {
            average: 1.5,
            mutiplier: 1.5,
            minimumMultipler: 0.5,
        },
        longOnlyIfOpenAbove: 0,
        shortOnlyIfOpenBelow: 0,
        keyLevels: {
            momentumStartForLong: 33,
            momentumStartForShort: 33,
        },
        short: {
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: R2Target, planConfigs: iot },
            firstNewHighPlan: { enableAutoTrigger: false, includeSecondNewHigh: true, targets: R2Target, planConfigs: iot },
            firstRetracementPlan: { targets: R2Target, planConfigs: iot },
        },
        long: {
            firstBreakoutPlan: { targets: R2Target, planConfigs: iot },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: R2Target, planConfigs: iot },
            firstNewHighPlan: { enableAutoTrigger: false, includeSecondNewHigh: true, targets: R2Target, planConfigs: iot },
            firstRetracementPlan: { targets: R2Target, planConfigs: iot },
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
        marketCapInMillions: 0,
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
        marketCapInMillions: 0,
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