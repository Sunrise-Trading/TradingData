import * as TradingPlans from './models';
import * as Constants from './constants';

// futures, momentumSimple, tradeStationEquity, schwab
export const activeProfileName: string = "schwab";
export const tradingSettings: TradingPlans.TradingSettings = {
    equalWeightDivider: 4,
    useSingleOrderForEntry: true,
}
const nkeConfig: TradingPlans.PlanConfigs = {
    size: 0.2,
    deferTradingInSeconds: 0,
    stopTradingAfterSeconds: 0,
    requireReversal: true,
    alwaysAllowStopOutOrFlatten: false,
    allowEarlyExits: false,
    allowFirstFewExitsCount: 2,
};
const quickConfig: TradingPlans.PlanConfigs = {
    size: 0.05,
    deferTradingInSeconds: 0,
    stopTradingAfterSeconds: 0,
    requireReversal: true,
    alwaysAllowStopOutOrFlatten: false,
    allowEarlyExits: false,
    allowFirstFewExitsCount: 2,
};

const stock2Configs: TradingPlans.PlanConfigs = {
    size: 0.05,
    deferTradingInSeconds: 0,
    stopTradingAfterSeconds: 0,
    requireReversal: true,
    alwaysAllowStopOutOrFlatten: false,
    allowEarlyExits: false,
    allowFirstFewExitsCount: 2,
};


const nketarget: TradingPlans.ExitTargets = {
    initialTargets: {
        priceLevels: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        rrr: [0.9, 0.95, 1.5, 1.8, 1.85, 1.9, 1.95, 1.95, 1.95, 3],
        dailyRanges: [1, 1, 10, 10, 10, 10, 10, 10, 10, 10],
    },
    minimumTargets: {
        rrr: [0.7, 0.9, 1, 1.5, 1.8, 1.9, 1.9, 1.9, 1.9, 1.9],
        priceLevels: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        dailyRanges: [0.9, 1, 1, 1.1, 1.2, 1.5, 2, 2, 3, 3],
    },
    wave3BatchIndexStart: 8,
    wave5BatchIndexStart: 9,
    dynamicExitCount: 2,
};
const stock2Target: TradingPlans.ExitTargets = {
    initialTargets: {
        priceLevels: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        rrr: [0.9, 0.95, 1.5, 1.8, 1.85, 1.9, 1.95, 1.95, 1.95, 3],
        dailyRanges: [1, 1, 10, 10, 10, 10, 10, 10, 10, 10],
    },
    minimumTargets: {
        rrr: [0.4, 0.6, 1, 1.5, 1.8, 1.9, 1.9, 1.9, 1.9, 1.9],
        priceLevels: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        dailyRanges: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    },
    wave3BatchIndexStart: 8,
    wave5BatchIndexStart: 9,
    dynamicExitCount: 2,
};
export const stockSelections: string[] = [
    'NKE',
];

export const stocksTradingPlans: TradingPlans.TradingPlans[] = [
    {
        symbol: 'NKE',
        analysis: {
            newsQualityAndFreshness: 2,
            gapType: TradingPlans.GapType.Outside,
            dailyChartStory: 2,
            relativeVolumeAndCandleSmoothness: 2,
            cleanVwapTrend: 2,
        },
        autoFlip: false,
        vwapCorrection: { volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: Constants.marketCaps.NKE,
        atr: {
            average: 1.8,
            mutiplier: 2,
            minimumMultipler: 1,
            maxRisk: 1.8,
        },
        disableShortIfOpenAbove: 0,
        disableLongIfOpenAbove: 0,
        keyLevels: {
            momentumStartForLong: 85,
            momentumStartForShort: 85,
        },
        short: {
            openDriveContinuation60Plan: { targets: nketarget, planConfigs: quickConfig },
            falseBreakoutPlan: { price: 80, targets: nketarget, planConfigs: nkeConfig },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: nketarget, planConfigs: nkeConfig },
            firstNewHighPlan: { enableAutoTrigger: true, includeSecondNewHigh: true, targets: nketarget, planConfigs: nkeConfig },
            firstRetracementPlan: { targets: nketarget, planConfigs: nkeConfig },
        },
        long: {
        },
    },
    {
        symbol: 'stock2',
        analysis: {
            newsQualityAndFreshness: -1,
            gapType: TradingPlans.GapType.Unknown,
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
            maxRisk: 0,
        },
        disableShortIfOpenAbove: 0,
        disableLongIfOpenAbove: 0,
        keyLevels: {
            momentumStartForLong: 0,
            momentumStartForShort: 0,
        },
        short: {
            firstBreakoutPlan: { targets: stock2Target, planConfigs: stock2Configs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock2Target, planConfigs: stock2Configs },
            firstNewHighPlan: { enableAutoTrigger: false, includeSecondNewHigh: true, targets: stock2Target, planConfigs: stock2Configs },
            firstRetracementPlan: { targets: stock2Target, planConfigs: stock2Configs },
        },
        long: {
            firstBreakoutPlan: { targets: stock2Target, planConfigs: stock2Configs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock2Target, planConfigs: stock2Configs },
            firstNewHighPlan: { enableAutoTrigger: false, includeSecondNewHigh: true, targets: stock2Target, planConfigs: stock2Configs },
            firstRetracementPlan: { targets: stock2Target, planConfigs: stock2Configs },
        },
    }
];