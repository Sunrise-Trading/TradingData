import * as TradingPlans from './models';
import * as Constants from './constants';

// futures, momentumSimple, tradeStationEquity, schwab
export const activeProfileName: string = "schwab";
export const tradingSettings: TradingPlans.TradingSettings = {
    equalWeightDivider: 4,
    useSingleOrderForEntry: true,
}
const tslaConfigs: TradingPlans.PlanConfigs = {
    size: 0.26,
    deferTradingInSeconds: 0,
    stopTradingAfterSeconds: 0,
    requireReversal: true,
    alwaysAllowFlatten: true,
    alwaysAllowMoveStop: true,
    allowFirstFewExitsCount: 10,
};
const smciConfigs: TradingPlans.PlanConfigs = {
    size: 0.26,
    deferTradingInSeconds: 0,
    stopTradingAfterSeconds: 0,
    requireReversal: true,
    alwaysAllowFlatten: true,
    alwaysAllowMoveStop: true,
    allowFirstFewExitsCount: 10,
};
const spyConfigs: TradingPlans.PlanConfigs = {
    size: 0.26,
    deferTradingInSeconds: 0,
    stopTradingAfterSeconds: 0,
    requireReversal: true,
    alwaysAllowFlatten: true,
    alwaysAllowMoveStop: true,
    allowFirstFewExitsCount: 10,
};
const xlfConfigs: TradingPlans.PlanConfigs = {
    size: 0.26,
    deferTradingInSeconds: 0,
    stopTradingAfterSeconds: 0,
    requireReversal: true,
    alwaysAllowFlatten: true,
    alwaysAllowMoveStop: true,
    allowFirstFewExitsCount: 10,
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
const stock1Target: TradingPlans.ExitTargets = {
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
    trail5Count: 10,
    trail15Count: 10,
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
    trail5Count: 10,
    trail15Count: 10,
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
    trail5Count: 10,
    trail15Count: 10,
};
export const stockSelections: string[] = [
    'TSLA',
    'SMCI',
    'SPY',
    'XLF'
];

export const stocksTradingPlans: TradingPlans.TradingPlans[] = [
    {
        symbol: 'TSLA',
        analysis: {
            newsQualityAndFreshness: 2, gapType: TradingPlans.GapType.Outside,
            relativeVolumeAndCandleSmoothness: 2,
            cleanVwapTrend: 2, dailyChartStory: 1,
            gapSize: 30,
            weeklychart: "range",
            dailyChart: "range",
            hourlyChart: "2nd leg of uptrend",
            premarketChart: "below vwap for now, keep watching",
            keyLevels: [280.93, 289.52],
            choppyOpenRangeHigh: 0,
            choppyOpenRangeLow: 0,
        },
        autoFlip: false,
        vwapCorrection: { volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: Constants.marketCaps.TSLA,
        atr: {
            average: 5,
            mutiplier: 2,
            minimumMultipler: 1.5,
            maxRisk: 2,
        },
        disableShortIfOpenAbove: 0,
        disableLongIfOpenBelow: 0,
        keyLevels: {
            momentumStartForLong: 280,
            momentumStartForShort: 300,
        },
        summary: `
        currently in a 1 ATR gap range of 280-290. if open in the middle, it can be a range trading to start.
        due to large gap up, short the first breakout if 
        1. extended from vwap
        2. below vwap
        if open above 280.93, cannot chase short.
        if open below 280.83, ok to chase short
        `,
        setups: [
            {
                range: "below both 283 and vwap, or below near vwap. so just below vwap", quality: "A",
                entrySummary: `
                green to red < 60
                below 283 is even better, means the premarket open range didn't breakout.
                `,
                exitTargets: `scale out and hold some to $10 move`
            }, {
                range: "above vwap", quality: "B",
                entrySummary: `
                red to green < 60
                `,
                exitTargets: `can test 290. scale out onto premarket high`
            }
        ],
        short: {
            reasons: [
                "profit taking",
            ],
            profitTakingExhaust60Plan: { includeOpenChase: true, minDistanceToVwap: 1, targets: stock1Target, planConfigs: tslaConfigs },
            profitTakingFade60Plan: { enableAutoTrigger: false, onlyIfOpenBelow: 284, targets: stock1Target, planConfigs: tslaConfigs },
            falseBreakoutPlan: { price: 0, targets: stock1Target, planConfigs: tslaConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock1Target, planConfigs: tslaConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, includeSecondNewHigh: true, targets: stock1Target, planConfigs: tslaConfigs },
            firstRetracementPlan: { targets: stock1Target, planConfigs: tslaConfigs },
            deferredBreakoutPlan: { targets: stock1Target, planConfigs: tslaConfigs },
        },
        long: {
            reasons: [
                "gap above previous gap fill support",
            ],
            openDriveContinuation60Plan: { requireOpenBetterThanVwap: true, disableIfOpenWorseThanPrice: 0, targets: stock1Target, planConfigs: tslaConfigs },
            falseBreakoutPlan: { price: 0, targets: stock1Target, planConfigs: tslaConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock1Target, planConfigs: tslaConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, includeSecondNewHigh: true, targets: stock1Target, planConfigs: tslaConfigs },
            firstRetracementPlan: { targets: stock1Target, planConfigs: tslaConfigs },
            deferredBreakoutPlan: { targets: stock1Target, planConfigs: tslaConfigs },
        },
    },
    {
        symbol: 'SMCI',
        analysis: {
            newsQualityAndFreshness: 2, gapType: TradingPlans.GapType.Outside,
            relativeVolumeAndCandleSmoothness: 1,
            cleanVwapTrend: 1, dailyChartStory: 2,
            gapSize: 6,
            weeklychart: "downtrend",
            dailyChart: "downtrend",
            hourlyChart: "consolidation",
            premarketChart: "mixed",
            keyLevels: [22.52],
            choppyOpenRangeHigh: 0,
            choppyOpenRangeLow: 0,
        },
        autoFlip: false,
        vwapCorrection: { volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: Constants.marketCaps.SMCI,
        atr: {
            average: 4,
            mutiplier: 1,
            minimumMultipler: 0.5,
            maxRisk: 1,
        },
        disableShortIfOpenAbove: 0,
        disableLongIfOpenBelow: 0,
        keyLevels: {
            momentumStartForLong: 22.52,
            momentumStartForShort: 25.1,
        },
        summary: `
        many stocks today, only trade the best setup. for SMCI, gap down selloff if open below vwap.
        `,
        setups: [
            {
                range: "below vwap and 22.52", quality: "A",
                entrySummary: `
                gap down seloff, short the first breakdown. green to red < 60
                `,
                exitTargets: `1 ATR`
            },
        ],
        short: {
            reasons: [
                "gap down below support",
            ],
            openDriveContinuation60Plan: { requireOpenBetterThanVwap: true, disableIfOpenWorseThanPrice: 22.52, targets: stock2Target, planConfigs: smciConfigs },
            falseBreakoutPlan: { price: 0, targets: stock2Target, planConfigs: smciConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock2Target, planConfigs: smciConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, includeSecondNewHigh: true, targets: stock2Target, planConfigs: smciConfigs },
            firstRetracementPlan: { targets: stock2Target, planConfigs: smciConfigs },
            deferredBreakoutPlan: { targets: stock2Target, planConfigs: smciConfigs },
        },
        long: {
            reasons: [
                "gap down to support",
            ],
            falseBreakoutPlan: { price: 0, targets: stock2Target, planConfigs: smciConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock2Target, planConfigs: smciConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, includeSecondNewHigh: true, targets: stock2Target, planConfigs: smciConfigs },
            firstRetracementPlan: { targets: stock2Target, planConfigs: smciConfigs },
            deferredBreakoutPlan: { targets: stock2Target, planConfigs: smciConfigs },
        },
    },
    {
        symbol: 'SPY',
        analysis: {
            newsQualityAndFreshness: 2, gapType: TradingPlans.GapType.Outside,
            relativeVolumeAndCandleSmoothness: 1,
            cleanVwapTrend: 1, dailyChartStory: 2,
            gapSize: 12,
            weeklychart: "uptrend",
            dailyChart: "bounce",
            hourlyChart: "consolidation breakout",
            premarketChart: "mixed around vwap",
            keyLevels: [586.12],
            choppyOpenRangeHigh: 0,
            choppyOpenRangeLow: 0,
        },
        autoFlip: false,
        vwapCorrection: { volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: 10000,
        atr: {
            average: 4,
            mutiplier: 1,
            minimumMultipler: 1,
            maxRisk: 1.5,
        },
        disableShortIfOpenAbove: 0,
        disableLongIfOpenBelow: 0,
        keyLevels: {
            momentumStartForLong: 576,
            momentumStartForShort: 592,
        },
        summary: `
        the gap up is too big for SPY. expect a profit taking at the open.
        `,
        setups: [
            {
                range: "near below vwap", quality: "A",
                entrySummary: `
                green to red < 60
                `,
                exitTargets: `1-2R`
            }, {
                range: "extended above vwap", quality: "B",
                entrySummary: `
                green to red < 60
                `,
                exitTargets: `vwap, and then look for first new high to flip long`
            }
        ],
        short: {
            reasons: [
                "profit taking",
            ],
            profitTakingExhaust60Plan: { includeOpenChase: true, minDistanceToVwap: 0.95, targets: stock3Target, planConfigs: spyConfigs },
            profitTakingFade60Plan: { enableAutoTrigger: false, onlyIfOpenBelow: 589.22, targets: stock3Target, planConfigs: spyConfigs },
            falseBreakoutPlan: { price: 0, targets: stock3Target, planConfigs: spyConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock3Target, planConfigs: spyConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, includeSecondNewHigh: true, targets: stock3Target, planConfigs: spyConfigs },
            firstRetracementPlan: { targets: stock3Target, planConfigs: spyConfigs },
            deferredBreakoutPlan: { targets: stock3Target, planConfigs: spyConfigs },
        },
        long: {
            reasons: [
                "uptrend continuation",
            ],
            falseBreakoutPlan: { price: 0, targets: stock3Target, planConfigs: spyConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock3Target, planConfigs: spyConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, includeSecondNewHigh: true, targets: stock3Target, planConfigs: spyConfigs },
            firstRetracementPlan: { targets: stock3Target, planConfigs: spyConfigs },
            deferredBreakoutPlan: { targets: stock3Target, planConfigs: spyConfigs },
        },
    },
    {
        symbol: 'XLF',
        analysis: {
            newsQualityAndFreshness: 2, gapType: TradingPlans.GapType.Outside,
            relativeVolumeAndCandleSmoothness: 2,
            cleanVwapTrend: 2, dailyChartStory: 2,
            gapSize: 3,
            weeklychart: "uptrend",
            dailyChart: "pullback",
            hourlyChart: "range",
            premarketChart: "gap up and fade below vwap",
            keyLevels: [47.81],
            choppyOpenRangeHigh: 0,
            choppyOpenRangeLow: 0,
        },
        autoFlip: false,
        vwapCorrection: { volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: 10000,
        atr: {
            average: 0.53,
            mutiplier: 1.5,
            minimumMultipler: 1,
            maxRisk: 0.4,
        },
        disableShortIfOpenAbove: 0,
        disableLongIfOpenBelow: 0,
        keyLevels: {
            momentumStartForLong: 49,
            momentumStartForShort: 49.46,
        },
        summary: `
        setting up for a nice gap up and fade.
        `,
        setups: [
            {
                range: "below vwap", quality: "A",
                entrySummary: `
                green to red < 60
                `,
                exitTargets: `1 ATR. hold some for a complete gap fill`
            }, {
                range: "above vwap", quality: "B",
                entrySummary: `
                need to have at least 1 new low as false breakdown
                `,
                exitTargets: `premarket high`
            }
        ],
        short: {
            reasons: [
                "profit taking",
            ],
            profitTakingFade60Plan: { enableAutoTrigger: false, onlyIfOpenBelow: 49.21, targets: stock4Target, planConfigs: xlfConfigs },
            falseBreakoutPlan: { price: 0, targets: stock4Target, planConfigs: xlfConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock4Target, planConfigs: xlfConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, includeSecondNewHigh: true, targets: stock4Target, planConfigs: xlfConfigs },
            firstRetracementPlan: { targets: stock4Target, planConfigs: xlfConfigs },
            deferredBreakoutPlan: { targets: stock4Target, planConfigs: xlfConfigs },
        },
        long: {
            reasons: [
                "uptrend continuation",
            ],
            falseBreakoutPlan: { price: 0, targets: stock4Target, planConfigs: xlfConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock4Target, planConfigs: xlfConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, includeSecondNewHigh: true, targets: stock4Target, planConfigs: xlfConfigs },
            firstRetracementPlan: { targets: stock4Target, planConfigs: xlfConfigs },
            deferredBreakoutPlan: { targets: stock4Target, planConfigs: xlfConfigs },
        },
    },
];