import * as TradingPlans from './models';
import * as Constants from './constants';

// futures, momentumSimple, tradeStationEquity, schwab
export const activeProfileName: string = "schwab";
export const tradingSettings: TradingPlans.TradingSettings = {
    equalWeightDivider: 4,
    useSingleOrderForEntry: true,
}
const stock1Configs: TradingPlans.PlanConfigs = {
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

const wbaTarget: TradingPlans.ExitTargets = {
    initialTargets: {
        priceLevels: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        rrr: [0.9, 0.95, 1.5, 1.8, 1.85, 1.9, 1.95, 1.95, 1.95, 3],
        dailyRanges: [1, 1, 10, 10, 10, 10, 10, 10, 10, 10],
    },
    minimumTargets: {
        rrr: [0.4, 0.6, 1, 1.5, 1.8, 1.9, 1.9, 1.9, 1.9, 1.9],
        priceLevels: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        dailyRanges: [1, 1, 1.2, 1.3, 1.4, 1.5, 1.6, 2, 2, 3],
    },
    wave3BatchIndexStart: 8,
    wave5BatchIndexStart: 9,
    dynamicExitCount: 2,
};
const muTarget: TradingPlans.ExitTargets = {
    initialTargets: {
        priceLevels: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        rrr: [0.9, 0.95, 1.5, 1.8, 1.85, 1.9, 1.95, 1.95, 1.95, 3],
        dailyRanges: [1, 1, 10, 10, 10, 10, 10, 10, 10, 10],
    },
    minimumTargets: {
        rrr: [0.4, 0.6, 1, 1.5, 1.8, 1.9, 1.9, 1.9, 1.9, 1.9],
        priceLevels: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        dailyRanges: [0.5, 0.5, 1, 1, 1.1, 1.2, 1.3, 1.4, 2, 2],
    },
    wave3BatchIndexStart: 8,
    wave5BatchIndexStart: 9,
    dynamicExitCount: 2,
};
export const stockSelections: string[] = [
    'WBA',
    'MU',
];

export const stocksTradingPlans: TradingPlans.TradingPlans[] = [
    {
        symbol: 'WBA',
        analysis: {
            newsQualityAndFreshness: 2,
            gapType: TradingPlans.GapType.Outside,
            dailyChartStory: 2,
            relativeVolumeAndCandleSmoothness: 2,
            cleanVwapTrend: 2,
        },
        autoFlip: false,
        vwapCorrection: { volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: Constants.marketCaps.WBA,
        atr: {
            average: 0.49,
            mutiplier: 2,
            minimumMultipler: 1,
            maxRisk: 0.51,
        },
        disableShortIfOpenAbove: 0,
        disableLongIfOpenAbove: 0,
        keyLevels: {
            momentumStartForLong: 15,
            momentumStartForShort: 15,
        },
        short: {
            openDriveContinuation60Plan: { targets: wbaTarget, planConfigs: stock1Configs },
            firstBreakoutPlan: { targets: wbaTarget, planConfigs: stock1Configs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: wbaTarget, planConfigs: stock1Configs },
            firstNewHighPlan: { enableAutoTrigger: true, includeSecondNewHigh: true, targets: wbaTarget, planConfigs: stock1Configs },
            firstRetracementPlan: { targets: wbaTarget, planConfigs: stock1Configs },
        },
        long: {
        },
    },
    {
        symbol: 'MU',
        analysis: {
            newsQualityAndFreshness: 2,
            gapType: TradingPlans.GapType.Outside,
            dailyChartStory: 1,
            relativeVolumeAndCandleSmoothness: 2,
            cleanVwapTrend: 2,
        },
        autoFlip: false,
        vwapCorrection: { volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: Constants.marketCaps.MU,
        atr: {
            average: 5.6,
            mutiplier: 1.5,
            minimumMultipler: 0.8,
            maxRisk: 3,
        },
        disableShortIfOpenAbove: 0,
        disableLongIfOpenAbove: 0,
        keyLevels: {
            momentumStartForLong: 138,
            momentumStartForShort: 138,
        },
        short: {
            openDriveContinuation60Plan: { targets: muTarget, planConfigs: stock2Configs },
            levelBreakout: { entryPrice: 135.69, targets: muTarget, planConfigs: stock2Configs },
            firstBreakoutPlan: { targets: muTarget, planConfigs: stock2Configs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: muTarget, planConfigs: stock2Configs },
            firstNewHighPlan: { enableAutoTrigger: true, includeSecondNewHigh: true, targets: muTarget, planConfigs: stock2Configs },
            firstRetracementPlan: { targets: muTarget, planConfigs: stock2Configs },
        },
        long: {
        },
    }
];