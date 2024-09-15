import * as TradingPlans from './models';
import * as Constants from './constants';

// futures, momentumSimple, tradeStationEquity, schwab
export const activeProfileName: string = "schwab";
export const tradingSettings: TradingPlans.TradingSettings = {
    equalWeightDivider: 4,
    useSingleOrderForEntry: true,
}
const mrnaConfigs: TradingPlans.PlanConfigs = {
    size: 0.24,
    deferTradingInSeconds: 0,
    stopTradingAfterSeconds: 0,
    requireReversal: true,
    alwaysAllowStopOutOrFlatten: false,
    allowEarlyExits: false,
    allowFirstFewExitsCount: 2,
};
const adbeConfigs: TradingPlans.PlanConfigs = {
    size: 0.24,
    deferTradingInSeconds: 0,
    stopTradingAfterSeconds: 0,
    requireReversal: true,
    alwaysAllowStopOutOrFlatten: true,
    allowEarlyExits: true,
    allowFirstFewExitsCount: 2,
};
const orclConfigs: TradingPlans.PlanConfigs = {
    size: 0.24,
    deferTradingInSeconds: 0,
    stopTradingAfterSeconds: 0,
    requireReversal: true,
    alwaysAllowStopOutOrFlatten: true,
    allowEarlyExits: true,
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
const unlimitTargetForHalf: TradingPlans.ExitTargets = {
    initialTargets: {
        priceLevels: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        rrr: [1.5, 1.8, 1.9, 2.4, 3, 4, 4, 4, 4, 4],
        dailyRanges: [3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
    },
    minimumTargets: {
        priceLevels: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        rrr: [1.5, 1.8, 1.9, 2.4, 3, 4, 4, 4, 4, 4],
        dailyRanges: [1, 1, 1, 1, 1, 3, 3, 3, 3, 3],
    },
    wave3BatchIndexStart: 10,
    wave5BatchIndexStart: 10,
    trail5Count: 10,
    trail15Count: 10,
};
const mrnaTarget: TradingPlans.ExitTargets = {
    initialTargets: {
        priceLevels: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        rrr: [1.5, 1.6, 1.8, 1.9, 2, 2, 3, 3, 3, 3],
        dailyRanges: [2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    },
    minimumTargets: {
        priceLevels: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        rrr: [1.5, 1.6, 1.8, 1.9, 1.9, 1.9, 1.9, 1.9, 1.9, 1.9],
        dailyRanges: [2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    },
    wave3BatchIndexStart: 10,
    wave5BatchIndexStart: 10,
    trail5Count: 10,
    trail15Count: 10,
};
const orclTarget: TradingPlans.ExitTargets = {
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
    trail5Count: 10,
    trail15Count: 10,
};
const adbeTarget: TradingPlans.ExitTargets = {
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
    trail5Count: 10,
    trail15Count: 10,
};
export const stockSelections: string[] = [
    'ORCL',
    'MRNA',
    'ADBE',
];

export const stocksTradingPlans: TradingPlans.TradingPlans[] = [
    {
        symbol: 'MRNA',
        analysis: {
            newsQualityAndFreshness: 2, gapType: TradingPlans.GapType.Inside,
            relativeVolumeAndCandleSmoothness: 2,
            cleanVwapTrend: 2, dailyChartStory: 2,
            gapSize: 2.5,
            weeklychart: "downtrend",
            dailyChart: "bear flag setting up for 2nd leg down",
            hourlyChart: "consolidation and then breakout",
            premarketChart: "super weak below vwap",
            keyLevels: [71.51, 70, 67.85],
        },
        autoFlip: false,
        vwapCorrection: { volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: Constants.marketCaps.MRNA,
        atr: {
            average: 3.92,
            mutiplier: 1.5,
            minimumMultipler: 1,
        },
        disableShortIfOpenAbove: 0,
        disableLongIfOpenBelow: 0,
        keyLevels: {
            momentumStartForLong: 67,
            momentumStartForShort: 67,
        },
        summary: `
        downtrend daily chart. lower guidance. everything is aligned to short. trade it like DJT second day play.
        skip 60 seconds. need to stay below vwap and short the green to red > 60.
        `,
        contingencyPlan: `
        if open above vwap, short deferred entry.
        `,
        short: {
            reasons: [
                "downtrend daily chart. lower guidance. ",
            ],
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: mrnaTarget, planConfigs: mrnaConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, includeSecondNewHigh: true, targets: mrnaTarget, planConfigs: mrnaConfigs },
            deferredBreakoutPlan: { targets: mrnaTarget, planConfigs: mrnaConfigs },
        },
        long: {
            reasons: [
                "none, not good setup for long.",
            ],
        },
    },
    {
        symbol: 'ADBE',
        analysis: {
            newsQualityAndFreshness: 2, gapType: TradingPlans.GapType.Outside,
            relativeVolumeAndCandleSmoothness: 2,
            cleanVwapTrend: 1, dailyChartStory: 1,
            gapSize: 50,
            weeklychart: "large range consolidation",
            dailyChart: "bounce",
            hourlyChart: "consolidation",
            premarketChart: "vwap mixed",
            keyLevels: [525.49],
        },
        autoFlip: false,
        vwapCorrection: { volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: Constants.marketCaps.ADBE,
        atr: {
            average: 13.7,
            mutiplier: 2,
            minimumMultipler: 1,
        },
        disableShortIfOpenAbove: 0,
        disableLongIfOpenBelow: 0,
        keyLevels: {
            momentumStartForLong: 525,
            momentumStartForShort: 545,
        },
        summary: `
        charts are mixed, vwap is mixed. gap down and the next day stayed above yesterday earnings reaction low. so it's very mixed.
        lower guidance is for short. no bias so far so just prepare defered entry and keep monitoring.
        if open below vwap, short after a pop. need at least 1 minute pop, so skip first 60 seconds.
        long will be paper hand, so skip long
        `,
        contingencyPlan: `
        if open above vwap, either short deferred entry, or let it make continuous new higher low and short first new low.
        `,
        short: {
            reasons: [
                "lower guidance is for short.",
            ],
            falseBreakoutPlan: { price: 544.5, targets: adbeTarget, planConfigs: adbeConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: adbeTarget, planConfigs: adbeConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, includeSecondNewHigh: true, targets: adbeTarget, planConfigs: orclConfigs },
            firstRetracementPlan: { targets: adbeTarget, planConfigs: orclConfigs },
            deferredBreakoutPlan: { targets: adbeTarget, planConfigs: orclConfigs },
        },
        long: {
            reasons: [
                "mixed news and charts, stayed above earnings reaction low",
                "long will be paper hand, so skip long"
            ],
        },
    },
    {
        symbol: 'ORCL',
        analysis: {
            newsQualityAndFreshness: 2, gapType: TradingPlans.GapType.Outside,
            relativeVolumeAndCandleSmoothness: 2,
            cleanVwapTrend: 1, dailyChartStory: 2,
            gapSize: 10,
            weeklychart: "uptrend",
            dailyChart: "uptrend",
            hourlyChart: "uptrend",
            premarketChart: "range",
            keyLevels: [173.76],
        },
        autoFlip: false,
        vwapCorrection: { volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: Constants.marketCaps.ORCL,
        atr: {
            average: 3.5,
            mutiplier: 1.4,
            minimumMultipler: 1,
        },
        disableShortIfOpenAbove: 0,
        disableLongIfOpenBelow: 0,
        keyLevels: {
            momentumStartForLong: 170,
            momentumStartForShort: 200,
        },
        summary: `
        very bullish chart and too much profit taking. i am a bit short biased. 
        for short, it needs to be 2 cases. either gap up and fade that opens below vwap, or gap up and extend that makes a false breakout,
        like into premarket high.
        for long, it needs to open near vwap and make a quick red to green. 
        volume is lower than earnings day, so skip first 60 seconds.
        `,
        contingencyPlan: `
        have 3 plans for above vwap too far, near vwap and below vwap.
        `,
        short: {
            reasons: [
                "too much profit taking",
            ],
            profitTakingExhaust60Plan: { includeOpenChase: true, targets: orclTarget, planConfigs: orclConfigs },
            falseBreakoutPlan: { price: 0, targets: orclTarget, planConfigs: orclConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: orclTarget, planConfigs: orclConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, includeSecondNewHigh: true, targets: orclTarget, planConfigs: orclConfigs },
            firstRetracementPlan: { targets: orclTarget, planConfigs: orclConfigs },
            deferredBreakoutPlan: { targets: orclTarget, planConfigs: orclConfigs },
        },
        long: {
            reasons: [
                "very bullish charts and good news",
            ],
            falseBreakoutPlan: { price: 0, targets: orclTarget, planConfigs: orclConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: orclTarget, planConfigs: orclConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, includeSecondNewHigh: true, targets: orclTarget, planConfigs: orclConfigs },
            firstRetracementPlan: { targets: orclTarget, planConfigs: orclConfigs },
            deferredBreakoutPlan: { targets: orclTarget, planConfigs: orclConfigs },
        },
    },
];