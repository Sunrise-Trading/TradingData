import * as TradingPlans from './models';
import * as Constants from './constants';

// futures, momentumSimple, tradeStationEquity, schwab
export const activeProfileName: string = "schwab";
export const tradingSettings: TradingPlans.TradingSettings = {
    equalWeightDivider: 4,
    useSingleOrderForEntry: true,
}
const abnbConfigs: TradingPlans.PlanConfigs = {
    size: 0.26,
    deferTradingInSeconds: 0,
    stopTradingAfterSeconds: 0,
    requireReversal: true,
    alwaysAllowFlatten: true,
    alwaysAllowMoveStop: true,
    allowFirstFewExitsCount: 10,
};
const upstConfigs: TradingPlans.PlanConfigs = {
    size: 0.26,
    deferTradingInSeconds: 0,
    stopTradingAfterSeconds: 0,
    requireReversal: true,
    alwaysAllowFlatten: true,
    alwaysAllowMoveStop: true,
    allowFirstFewExitsCount: 10,
};
const dkngConfigs: TradingPlans.PlanConfigs = {
    size: 0.26,
    deferTradingInSeconds: 0,
    stopTradingAfterSeconds: 0,
    requireReversal: true,
    alwaysAllowFlatten: true,
    alwaysAllowMoveStop: true,
    allowFirstFewExitsCount: 10,
};
const tslaConfigs: TradingPlans.PlanConfigs = {
    size: 0.13,
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
    'ABNB',
    'UPST',
    'DKNG',
    'TSLA',
];

export const stocksTradingPlans: TradingPlans.TradingPlans[] = [
    {
        symbol: 'ABNB',
        analysis: {
            newsQualityAndFreshness: 2, gapType: TradingPlans.GapType.Outside,
            relativeVolumeAndCandleSmoothness: 1,
            cleanVwapTrend: 1, dailyChartStory: 1,
            gapSize: 10,
            weeklychart: "range",
            dailyChart: "up",
            hourlyChart: "up",
            premarketChart: "mixed around vwap",
            keyLevels: [138.05],
            choppyOpenRangeHigh: 0,
            choppyOpenRangeLow: 0,
        },
        autoFlip: false,
        vwapCorrection: { volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: Constants.marketCaps.ABNB,
        atr: {
            average: 3.48,
            mutiplier: 1.5,
            minimumMultipler: 1,
            maxRisk: 1.5,
        },
        disableShortIfOpenAbove: 0,
        disableLongIfOpenBelow: 0,
        keyLevels: {
            momentumStartForLong: 135,
            momentumStartForShort: 142,
        },
        summary: `
        138.05 was earnings reaction low. it's currently below that. use 138.05 to form bias.
        and use vwap for momentum.
        `,
        setups: [
            {
                high: "", low: "138.05", title: "long gap down to support",
                isChoppy: false,
                range: "open above both vwap and 138.05", quality: "B",
                entrySummary: `
                long the first breakout.
                `,
                exitTargets: `140-141`
            }, {
                high: "138.05", low: "vwap", title: "choppy open",
                isChoppy: true,
                range: "between 138.05 and vwap", quality: "C",
                entrySummary: `
                skip first 2 minutes
                `,
                exitTargets: `1 ATR`
            }, {
                high: "vwap", low: "", title: "gap down selloff",
                isChoppy: false,
                range: "open below both vwap and 138.05", quality: "A",
                entrySummary: `
                long the first breakdown.
                `,
                exitTargets: `premarket low, then 4.5-5 range`
            }
        ],
        short: {
            reasons: [
                "earnings miss",
            ],
            openDriveContinuation60Plan: { requireOpenBetterThanVwap: true, disableIfOpenWorseThanPrice: 138.05, targets: stock1Target, planConfigs: abnbConfigs },
            falseBreakoutPlan: { price: 0, targets: stock1Target, planConfigs: abnbConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock1Target, planConfigs: abnbConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, includeSecondNewHigh: true, targets: stock1Target, planConfigs: abnbConfigs },
            firstRetracementPlan: { targets: stock1Target, planConfigs: abnbConfigs },
            deferredBreakoutPlan: { targets: stock1Target, planConfigs: abnbConfigs },
        },
        long: {
            reasons: [
                "gap down to support, long term trend is up",
            ],
            openDriveContinuation60Plan: { requireOpenBetterThanVwap: true, disableIfOpenWorseThanPrice: 138.05, targets: stock1Target, planConfigs: abnbConfigs },
            falseBreakoutPlan: { price: 0, targets: stock1Target, planConfigs: abnbConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock1Target, planConfigs: abnbConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, includeSecondNewHigh: true, targets: stock1Target, planConfigs: abnbConfigs },
            firstRetracementPlan: { targets: stock1Target, planConfigs: abnbConfigs },
            deferredBreakoutPlan: { targets: stock1Target, planConfigs: abnbConfigs },
        },
    },
    {
        symbol: 'UPST',
        analysis: {
            newsQualityAndFreshness: 2, gapType: TradingPlans.GapType.Outside,
            relativeVolumeAndCandleSmoothness: 2,
            cleanVwapTrend: 2, dailyChartStory: 2,
            gapSize: 10,
            weeklychart: "up",
            dailyChart: "up",
            hourlyChart: "up",
            premarketChart: "below vwap, below earnings reaction high",
            keyLevels: [69, 60.5],
            choppyOpenRangeHigh: 0,
            choppyOpenRangeLow: 0,
        },
        autoFlip: false,
        vwapCorrection: { volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: Constants.marketCaps.UPST,
        atr: {
            average: 3.3,
            mutiplier: 1.5,
            minimumMultipler: 1,
            maxRisk: 1,
        },
        disableShortIfOpenAbove: 0,
        disableLongIfOpenBelow: 0,
        keyLevels: {
            momentumStartForLong: 60,
            momentumStartForShort: 70,
        },
        summary: `
        below earnigns reaction high 69. so overall is short bias. 
        best setup is open below vwap, then short gap up and fade.
        it's a friday, and many earnings today, so try to stay with the best setup.
        if open too far away from vwap, let it pullback to vwap first, don't chase open trades.
        if reclaim vwap, wait for a retest of vwap, then long the next breakout
        `,
        setups: [
            {
                high: "68", low: "vwap", title: "gap up and hold vwap",
                isChoppy: false,
                range: "above and near vwap", quality: "B",
                entrySummary: `
                gap up and go. let it open with a dip into vwap and long the next breakout
                `,
                exitTargets: `69, 70, 71. scale along the day`
            }, {
                high: "vwap", low: "", title: "gap up and fade",
                isChoppy: false,
                range: "below vwap", quality: "A",
                entrySummary: `
                short green to red < 60, short the first breakdown.
                for shorting the 1st pop, keep stop tight
                `,
                exitTargets: `61`
            }
        ],
        short: {
            reasons: [
                "below earnings reaction high",
            ],
            profitTakingFade60Plan: { enableAutoTrigger: false, onlyIfOpenBelow: 66.6, targets: stock2Target, planConfigs: upstConfigs },
            falseBreakoutPlan: { price: 0, targets: stock2Target, planConfigs: upstConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock2Target, planConfigs: upstConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, includeSecondNewHigh: true, targets: stock2Target, planConfigs: upstConfigs },
            firstRetracementPlan: { targets: stock2Target, planConfigs: upstConfigs },
            deferredBreakoutPlan: { targets: stock2Target, planConfigs: upstConfigs },
        },
        long: {
            reasons: [
                "earnings beat",
            ],
            openDriveContinuation60Plan: { requireOpenBetterThanVwap: true, disableIfOpenWorseThanPrice: 0, targets: stock2Target, planConfigs: upstConfigs },
            falseBreakoutPlan: { price: 0, targets: stock2Target, planConfigs: upstConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock2Target, planConfigs: upstConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, includeSecondNewHigh: true, targets: stock2Target, planConfigs: upstConfigs },
            firstRetracementPlan: { targets: stock2Target, planConfigs: upstConfigs },
            deferredBreakoutPlan: { targets: stock2Target, planConfigs: upstConfigs },
        },
    },
    {
        symbol: 'DKNG',
        analysis: {
            newsQualityAndFreshness: 2, gapType: TradingPlans.GapType.Outside,
            relativeVolumeAndCandleSmoothness: 2,
            cleanVwapTrend: 2, dailyChartStory: 1,
            gapSize: 1,
            weeklychart: "range",
            dailyChart: "range",
            hourlyChart: "range",
            premarketChart: "above vwap",
            keyLevels: [38.3],
            choppyOpenRangeHigh: 0,
            choppyOpenRangeLow: 0,
        },
        autoFlip: false,
        vwapCorrection: { volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: Constants.marketCaps.DKNG,
        atr: {
            average: 1.29,
            mutiplier: 1,
            minimumMultipler: 1,
            maxRisk: 0.5,
        },
        disableShortIfOpenAbove: 0,
        disableLongIfOpenBelow: 0,
        keyLevels: {
            momentumStartForLong: 38.3,
            momentumStartForShort: 39.38,
        },
        summary: `
        only take the best setup. open with a test into 38.3 and vwap. and then long the first breakout
        `,
        setups: [
            {
                high: "", low: "38.3", title: "long after retest of low",
                isChoppy: false,
                range: "above vwap and 38.3", quality: "A",
                entrySummary: `
                long the next breakout after retest of low
                `,
                exitTargets: `39.38, hold some through it.`
            },
        ],
        short: {
            reasons: [
                "gap up into resistance",
            ],
            falseBreakoutPlan: { price: 0, targets: stock3Target, planConfigs: dkngConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock3Target, planConfigs: dkngConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, includeSecondNewHigh: true, targets: stock3Target, planConfigs: dkngConfigs },
            firstRetracementPlan: { targets: stock3Target, planConfigs: dkngConfigs },
            deferredBreakoutPlan: { targets: stock3Target, planConfigs: dkngConfigs },
        },
        long: {
            reasons: [
                "above vwap",
            ],
            openDriveContinuation60Plan: { requireOpenBetterThanVwap: true, disableIfOpenWorseThanPrice: 38.3, targets: stock3Target, planConfigs: dkngConfigs },
            falseBreakoutPlan: { price: 0, targets: stock3Target, planConfigs: dkngConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock3Target, planConfigs: dkngConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, includeSecondNewHigh: true, targets: stock3Target, planConfigs: dkngConfigs },
            firstRetracementPlan: { targets: stock3Target, planConfigs: dkngConfigs },
            deferredBreakoutPlan: { targets: stock3Target, planConfigs: dkngConfigs },
        },
    },
    {
        symbol: 'TSLA',
        analysis: {
            newsQualityAndFreshness: 1, gapType: TradingPlans.GapType.Outside,
            relativeVolumeAndCandleSmoothness: 1,
            cleanVwapTrend: 2, dailyChartStory: 1,
            gapSize: 1,
            weeklychart: "range",
            dailyChart: "up",
            hourlyChart: "up",
            premarketChart: "above vwap",
            keyLevels: [300],
            choppyOpenRangeHigh: 0,
            choppyOpenRangeLow: 0,
        },
        autoFlip: false,
        vwapCorrection: { volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: Constants.marketCaps.TSLA,
        atr: {
            average: 5,
            mutiplier: 1,
            minimumMultipler: 1,
            maxRisk: 1.5,
        },
        disableShortIfOpenAbove: 0,
        disableLongIfOpenBelow: 0,
        keyLevels: {
            momentumStartForLong: 297,
            momentumStartForShort: 300,
        },
        summary: `
        only trade the best setup for TSLA. 
        for first 60 seconds, trade half size.
        at 300, watch for reversal
        `,
        setups: [
            {
                high: "298.5", low: "vwap", title: "red to green < 60",
                isChoppy: false,
                range: "near above vwap", quality: "A",
                entrySummary: `
                long the first breakout, better to have a dip to vwap first
                `,
                exitTargets: `299-300`
            },
        ],
        short: {
            reasons: [
                "profit taking, 300 rejection",
            ],
            profitTakingExhaust60Plan: { includeOpenChase: false, minDistanceToVwap: 2, targets: stock4Target, planConfigs: tslaConfigs },
            falseBreakoutPlan: { price: 0, targets: stock4Target, planConfigs: tslaConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock4Target, planConfigs: tslaConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, includeSecondNewHigh: true, targets: stock4Target, planConfigs: tslaConfigs },
            firstRetracementPlan: { targets: stock4Target, planConfigs: tslaConfigs },
            deferredBreakoutPlan: { targets: stock4Target, planConfigs: tslaConfigs },
        },
        long: {
            reasons: [
                "continuation",
            ],
            openDriveContinuation60Plan: { requireOpenBetterThanVwap: true, disableIfOpenWorseThanPrice: 0, targets: stock4Target, planConfigs: tslaConfigs },
            falseBreakoutPlan: { price: 0, targets: stock4Target, planConfigs: tslaConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock4Target, planConfigs: tslaConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, includeSecondNewHigh: true, targets: stock4Target, planConfigs: tslaConfigs },
            firstRetracementPlan: { targets: stock4Target, planConfigs: tslaConfigs },
            deferredBreakoutPlan: { targets: stock4Target, planConfigs: tslaConfigs },
        },
    },
];