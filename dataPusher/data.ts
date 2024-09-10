import * as TradingPlans from './models';
import * as Constants from './constants';

// futures, momentumSimple, tradeStationEquity, schwab
export const activeProfileName: string = "schwab";
export const tradingSettings: TradingPlans.TradingSettings = {
    equalWeightDivider: 4,
    useSingleOrderForEntry: true,
}
const pltrConfigs: TradingPlans.PlanConfigs = {
    size: 0.24,
    deferTradingInSeconds: 0,
    stopTradingAfterSeconds: 0,
    requireReversal: true,
    alwaysAllowStopOutOrFlatten: true,
    allowEarlyExits: false,
    allowFirstFewExitsCount: 2,
};
const dellConfigs: TradingPlans.PlanConfigs = {
    size: 0.24,
    deferTradingInSeconds: 0,
    stopTradingAfterSeconds: 0,
    requireReversal: true,
    alwaysAllowStopOutOrFlatten: true,
    allowEarlyExits: false,
    allowFirstFewExitsCount: 2,
};
const baConfigs: TradingPlans.PlanConfigs = {
    size: 0.24,
    deferTradingInSeconds: 0,
    stopTradingAfterSeconds: 0,
    requireReversal: true,
    alwaysAllowStopOutOrFlatten: true,
    allowEarlyExits: true,
    allowFirstFewExitsCount: 2,
};
const stock4Configs: TradingPlans.PlanConfigs = {
    size: 0.24,
    deferTradingInSeconds: 0,
    stopTradingAfterSeconds: 0,
    requireReversal: true,
    alwaysAllowStopOutOrFlatten: false,
    allowEarlyExits: false,
    allowFirstFewExitsCount: 2,
};

const unlimitTargetForAll: TradingPlans.ExitTargets = {
    initialTargets: {
        priceLevels: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        rrr: [1.5, 1.8, 1.9, 2.4, 3, 4, 4, 4, 4, 4],
        dailyRanges: [3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
    },
    minimumTargets: {
        priceLevels: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        rrr: [1.5, 1.8, 1.9, 2.4, 3, 4, 4, 4, 4, 4],
        dailyRanges: [3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
    },
    wave3BatchIndexStart: 10,
    wave5BatchIndexStart: 10,
    trail5Count: 10,
    trail15Count: 10,
};
const pltrTarget: TradingPlans.ExitTargets = {
    initialTargets: {
        priceLevels: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        rrr: [1.5, 1.6, 1.8, 1.9, 2, 2, 3, 3, 3, 3],
        dailyRanges: [1, 1, 1.5, 1.5, 1.9, 1.9, 1.9, 1.9, 1.9, 2],
    },
    minimumTargets: {
        priceLevels: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        rrr: [1.5, 1.6, 1.8, 1.9, 2, 2, 2, 2, 2, 2],
        dailyRanges: [1, 1, 1.5, 1.5, 1.9, 1.9, 1.9, 1.9, 1.9, 2],
    },
    wave3BatchIndexStart: 10,
    wave5BatchIndexStart: 10,
    trail5Count: 4,
    trail15Count: 4,
};
const stock2Target: TradingPlans.ExitTargets = {
    initialTargets: {
        priceLevels: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        rrr: [1.5, 1.6, 1.8, 1.9, 2, 2, 3, 3, 3, 3],
        dailyRanges: [1, 1, 1.5, 1.5, 1.9, 1.9, 1.9, 1.9, 1.9, 2],
    },
    minimumTargets: {
        priceLevels: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        rrr: [1.5, 1.6, 1.8, 1.9, 2, 2, 2, 2, 2, 2],
        dailyRanges: [1, 1, 1.5, 1.5, 1.9, 1.9, 1.9, 1.9, 1.9, 2],
    },
    wave3BatchIndexStart: 10,
    wave5BatchIndexStart: 10,
    trail5Count: 4,
    trail15Count: 4,
};
const stock3Target: TradingPlans.ExitTargets = {
    initialTargets: {
        priceLevels: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        rrr: [1.5, 1.6, 1.8, 1.9, 2, 2, 3, 3, 3, 3],
        dailyRanges: [1, 1, 1.5, 1.5, 1.9, 1.9, 1.9, 1.9, 1.9, 2],
    },
    minimumTargets: {
        priceLevels: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        rrr: [1.5, 1.6, 1.8, 1.9, 2, 2, 2, 2, 2, 2],
        dailyRanges: [1, 1, 1.5, 1.5, 1.9, 1.9, 1.9, 1.9, 1.9, 2],
    },
    wave3BatchIndexStart: 10,
    wave5BatchIndexStart: 10,
    trail5Count: 4,
    trail15Count: 4,
};
const stock4Target: TradingPlans.ExitTargets = {
    initialTargets: {
        priceLevels: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        rrr: [1.5, 1.6, 1.8, 1.9, 2, 2, 2, 2, 2, 2],
        dailyRanges: [1, 1, 1.5, 1.5, 1.9, 1.9, 1.9, 1.9, 1.9, 2],
    },
    minimumTargets: {
        priceLevels: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        rrr: [1.5, 1.6, 1.8, 1.9, 2, 2, 3, 3, 3, 3],
        dailyRanges: [1, 1, 1.5, 1.5, 1.9, 1.9, 1.9, 1.9, 1.9, 2],
    },
    wave3BatchIndexStart: 10,
    wave5BatchIndexStart: 10,
    trail5Count: 4,
    trail15Count: 4,
};
export const stockSelections: string[] = [
    'PLTR',
    'DELL',
    'BA'
];

export const stocksTradingPlans: TradingPlans.TradingPlans[] = [
    {
        symbol: 'PLTR',
        analysis: {
            newsQualityAndFreshness: 2, gapType: TradingPlans.GapType.Outside,
            relativeVolumeAndCandleSmoothness: 2,
            cleanVwapTrend: 2, dailyChartStory: 2,
            gapSize: 3,
            weeklychart: "uptrend with pullback",
            dailyChart: "uptrend with pullback",
            hourlyChart: "bull flag",
            premarketChart: "strong above vwap",
            keyLevels: [33.12, 33.01, 32],
        },
        autoFlip: false,
        vwapCorrection: { volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: Constants.marketCaps.PLTR,
        atr: {
            average: 1.29,
            mutiplier: 1.5,
            minimumMultipler: 1,
        },
        disableShortIfOpenAbove: 0,
        disableLongIfOpenBelow: 0,
        keyLevels: {
            momentumStartForLong: 32,
            momentumStartForShort: 33,
        },
        summary: `
        the news has the potential to go long for swing. so expect big profit with trailing stop.
        strong above vwap, so initial momentum is bullish. SPY had larget selloff last friday but PLTR holds well.
        this makes me long bias on the stock and there are better choices for short like DELL.
        so far, plan long only as long as it opens above vwap. also prepare all time high breakout
        `,
        contingencyPlan: `
        look for long first. if opens below vwap, need to wait for defer entry.
        `,
        short: {
            reasons: [
                "gap up too much. gap under all time high",
            ],
            /*
            falseBreakoutPlan: { price: 0, targets: pltrTarget, planConfigs: pltrConfigs },
            firstBreakoutPlan: { targets: pltrTarget, planConfigs: pltrConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: pltrTarget, planConfigs: pltrConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, includeSecondNewHigh: true, targets: pltrTarget, planConfigs: pltrConfigs },
            firstRetracementPlan: { targets: pltrTarget, planConfigs: pltrConfigs },
            
            */
            deferredBreakoutPlan: { targets: pltrTarget, planConfigs: pltrConfigs },
        },
        long: {
            reasons: [
                "strong above vwap, so initial momentum is bullish.",
                "news is for swing long",
                "SPY had larget selloff last friday but PLTR holds well."
            ],
            openDriveContinuation60Plan: { requireOpenBetterThanVwap: false, disableIfOpenWorseThanPrice: 32.5, targets: pltrTarget, planConfigs: pltrConfigs },
            falseBreakoutPlan: { price: 0, targets: pltrTarget, planConfigs: pltrConfigs },
            levelBreakout: { entryPrice: 33.13, targets: pltrTarget, planConfigs: pltrConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: pltrTarget, planConfigs: pltrConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, includeSecondNewHigh: true, targets: pltrTarget, planConfigs: pltrConfigs },
            firstRetracementPlan: { targets: pltrTarget, planConfigs: pltrConfigs },
            deferredBreakoutPlan: { targets: pltrTarget, planConfigs: pltrConfigs },
        },
    },
    {
        symbol: 'DELL',
        analysis: {
            newsQualityAndFreshness: 2, gapType: TradingPlans.GapType.Inside,
            relativeVolumeAndCandleSmoothness: 1,
            cleanVwapTrend: 2, dailyChartStory: 1,
            gapSize: 5,
            weeklychart: "gave back all the rally",
            dailyChart: "downtrend",
            hourlyChart: "down trend after earnings",
            premarketChart: "pop and fade below vwap",
            keyLevels: [108.21],
        },
        autoFlip: false,
        vwapCorrection: { volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: Constants.marketCaps.DELL,
        atr: {
            average: 5.36,
            mutiplier: 1,
            minimumMultipler: 1,
        },
        disableShortIfOpenAbove: 0,
        disableLongIfOpenBelow: 0,
        keyLevels: {
            momentumStartForLong: 106,
            momentumStartForShort: 110,
        },
        summary: `
        gapped inside range. so this gap up is very weak and now below vwap so it's setting up for gap up and fade. 
        candles not smooth, so skip first 60 seconds.
        if opens below vwap. 
        `,
        contingencyPlan: `
        look for short first. if opens above vwap, wait for defer entry

        `,
        short: {
            reasons: [
                "down trend charts",
                ""
            ],
            falseBreakoutPlan: { price: 0, targets: stock2Target, planConfigs: dellConfigs },
            firstBreakoutPlan: { targets: stock2Target, planConfigs: dellConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock2Target, planConfigs: dellConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, includeSecondNewHigh: true, targets: stock2Target, planConfigs: dellConfigs },
            firstRetracementPlan: { targets: stock2Target, planConfigs: dellConfigs },
            deferredBreakoutPlan: { targets: stock2Target, planConfigs: dellConfigs },
        },
        long: {
            reasons: [
                "news has swing potential",
                ""
            ],
            falseBreakoutPlan: { price: 0, targets: stock2Target, planConfigs: dellConfigs },
            firstBreakoutPlan: { targets: stock2Target, planConfigs: dellConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock2Target, planConfigs: dellConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, includeSecondNewHigh: true, targets: stock2Target, planConfigs: dellConfigs },
            firstRetracementPlan: { targets: stock2Target, planConfigs: dellConfigs },
            deferredBreakoutPlan: { targets: stock2Target, planConfigs: dellConfigs },
        },
    },
    {
        symbol: 'BA',
        analysis: {
            newsQualityAndFreshness: 1, gapType: TradingPlans.GapType.Inside,
            relativeVolumeAndCandleSmoothness: 2,
            cleanVwapTrend: 2, dailyChartStory: 1,
            gapSize: 5,
            weeklychart: "downtrend",
            dailyChart: "downtrend",
            hourlyChart: "downtrend",
            premarketChart: "gap up and fade below vwap",
            keyLevels: [162.85],
        },
        autoFlip: false,
        vwapCorrection: { volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: Constants.marketCaps.BA,
        atr: {
            average: 5.6,
            mutiplier: 1,
            minimumMultipler: 1,
        },
        disableShortIfOpenAbove: 162.85,
        disableLongIfOpenBelow: 0,
        keyLevels: {
            momentumStartForLong: 162.85,
            momentumStartForShort: 168.39,
        },
        summary: `
        if open aboves yesterday high, that's a bullish signal but due to downtrend, first pop will get faded. 
        the best setup is open below 162.85 and makes a green to red gap up and fade.
        `,
        contingencyPlan: `
        if opens above 162.85, then it's neutral open and need to use deferred entry.
        `,
        short: {
            reasons: [
                "first pop should get faded, premarket below vwap",
            ],
            falseBreakoutPlan: { price: 0, targets: stock3Target, planConfigs: baConfigs },
            firstBreakoutPlan: { targets: stock3Target, planConfigs: baConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock3Target, planConfigs: baConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, includeSecondNewHigh: true, targets: stock3Target, planConfigs: baConfigs },
            firstRetracementPlan: { targets: stock3Target, planConfigs: baConfigs },
            deferredBreakoutPlan: { targets: stock3Target, planConfigs: baConfigs },
        },
        long: {
            reasons: [
                "ok news",
            ],
            falseBreakoutPlan: { price: 0, targets: stock3Target, planConfigs: baConfigs },
            firstBreakoutPlan: { targets: stock3Target, planConfigs: baConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock3Target, planConfigs: baConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, includeSecondNewHigh: true, targets: stock3Target, planConfigs: baConfigs },
            firstRetracementPlan: { targets: stock3Target, planConfigs: baConfigs },
            deferredBreakoutPlan: { targets: stock3Target, planConfigs: baConfigs },
        },
    }
];