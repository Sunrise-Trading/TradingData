import * as TradingPlans from './models';
import * as Constants from './constants';

// futures, momentumSimple, tradeStationEquity, schwab
export const activeProfileName: string = "schwab";
export const tradingSettings: TradingPlans.TradingSettings = {
    equalWeightDivider: 4,
    useSingleOrderForEntry: true,
}
export const defaultSize = 0.28;
const hutConfigs: TradingPlans.PlanConfigs = {
    size: defaultSize,
    deferTradingInSeconds: 0,
    stopTradingAfterSeconds: 0,
    requireReversal: true,
    alwaysAllowFlatten: true,
    alwaysAllowMoveStop: true,
    allowFirstFewExitsCount: 5,
};
const adbeConfigs: TradingPlans.PlanConfigs = {
    size: defaultSize,
    deferTradingInSeconds: 0,
    stopTradingAfterSeconds: 0,
    requireReversal: true,
    alwaysAllowFlatten: true,
    alwaysAllowMoveStop: true,
    allowFirstFewExitsCount: 5,
};
const tslaConfigs: TradingPlans.PlanConfigs = {
    size: defaultSize,
    deferTradingInSeconds: 0,
    stopTradingAfterSeconds: 0,
    requireReversal: true,
    alwaysAllowFlatten: true,
    alwaysAllowMoveStop: true,
    allowFirstFewExitsCount: 5,
};
const googleConfigs: TradingPlans.PlanConfigs = {
    size: defaultSize,
    deferTradingInSeconds: 0,
    stopTradingAfterSeconds: 0,
    requireReversal: true,
    alwaysAllowFlatten: true,
    alwaysAllowMoveStop: true,
    allowFirstFewExitsCount: 5,
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
    'HUT',
    'ADBE',
    'TSLA',
    'GOOGL'
];

export const stocksTradingPlans: TradingPlans.TradingPlans[] = [
    {
        symbol: 'HUT',
        analysis: {
            newsQualityAndFreshness: 2, gapType: TradingPlans.GapType.Outside,
            relativeVolumeAndCandleSmoothness: 1,
            cleanVwapTrend: 1, dailyChartStory: 1,
            gapSize: 5,
            weeklychart: "up",
            dailyChart: "range at top",
            hourlyChart: "range",
            premarketChart: "fade belowv vwap, but hold above yesterday reaction high",
            keyLevels: [30.88, 31.95],
            singleMomentumKeyLevel: 30.88,
            dualMomentumKeyLevels: [30.88, 31.95],
            vwapExtensionDistance: 1,
            choppyOpenRangeHigh: 0,
            choppyOpenRangeLow: 0,
        },
        autoFlip: false,
        vwapCorrection: { volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: Constants.marketCaps.HUT,
        atr: {
            average: 2.7,
            mutiplier: 1.5,
            minimumMultipler: 1,
            maxRisk: 1.25,
        },
        disableShortIfOpenAbove: 0,
        disableLongIfOpenBelow: 0,
        keyLevels: {
            momentumStartForLong: 30.88,
            momentumStartForShort: 40,
        },
        summary: `
        two key levels. best setup is open below 30.88, short. or open above 31.95, go long.
        if in between, wait 2 minutes.
        `,
        setups: [
            {
                high: "30.88", low: "", title: "gap up and fade",
                isChoppy: false,
                range: "below 30.88", quality: "A",
                entrySummary: `
                green to red < 60
                `,
                exitTargets: `30, premarket low, then gap fill`
            }, {
                high: "", low: "31.95", title: "gap up and go",
                isChoppy: false,
                range: "above all time high", quality: "A",
                entrySummary: `
                red to green < 60
                `,
                exitTargets: `premarket high, then much higher`
            }
        ],
        short: {
            reasons: [
                "below reaction high",
            ],
            openDriveContinuation60Plan: { requireOpenBetterThanVwap: true, disableIfOpenWorseThanPrice: 30.88, targets: stock1Target, planConfigs: hutConfigs },
            levelMomentumPlan: { targets: stock1Target, planConfigs: hutConfigs },
            falseBreakoutPlan: { price: 0, targets: stock1Target, planConfigs: hutConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock1Target, planConfigs: hutConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, includeSecondNewHigh: true, targets: stock1Target, planConfigs: hutConfigs },
            firstRetracementPlan: { targets: stock1Target, planConfigs: hutConfigs },
            deferredBreakoutPlan: { targets: stock1Target, planConfigs: hutConfigs },
        },
        long: {
            reasons: [
                "all time high breakout",
            ],
            openDriveContinuation60Plan: { requireOpenBetterThanVwap: true, disableIfOpenWorseThanPrice: 31.95, targets: stock1Target, planConfigs: hutConfigs },
            levelMomentumPlan: { targets: stock1Target, planConfigs: hutConfigs },
            falseBreakoutPlan: { price: 0, targets: stock1Target, planConfigs: hutConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock1Target, planConfigs: hutConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, includeSecondNewHigh: true, targets: stock1Target, planConfigs: hutConfigs },
            firstRetracementPlan: { targets: stock1Target, planConfigs: hutConfigs },
            deferredBreakoutPlan: { targets: stock1Target, planConfigs: hutConfigs },
        },
    },
    {
        symbol: 'ADBE',
        analysis: {
            newsQualityAndFreshness: 2, gapType: TradingPlans.GapType.Outside,
            relativeVolumeAndCandleSmoothness: 1,
            cleanVwapTrend: 1, dailyChartStory: 1,
            gapSize: 50,
            weeklychart: "range",
            dailyChart: "bounce",
            hourlyChart: "range",
            premarketChart: "gap down and recover from vwap",
            keyLevels: [493.1],
            singleMomentumKeyLevel: 493.1,
            dualMomentumKeyLevels: [],
            vwapExtensionDistance: 5,
            choppyOpenRangeHigh: 0,
            choppyOpenRangeLow: 0,
        },
        autoFlip: false,
        vwapCorrection: { volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: Constants.marketCaps.ADBE,
        atr: {
            average: 12,
            mutiplier: 1.5,
            minimumMultipler: 1,
            maxRisk: 5,
        },
        disableShortIfOpenAbove: 0,
        disableLongIfOpenBelow: 0,
        keyLevels: {
            momentumStartForLong: 484,
            momentumStartForShort: 524,
        },
        summary: `
        best is open above both vwap and 493.1.
        below vwap, is short
        `,
        setups: [
            {
                high: "", low: "493.1", title: "long gap down above support",
                isChoppy: false,
                range: "above 493.1", quality: "A",
                entrySummary: `
                red to green < 60
                `,
                exitTargets: `500, then premarket high 503`
            }, {
                high: "493.1", low: "vwap", title: "chop",
                isChoppy: true,
                range: "between levels", quality: "B",
                entrySummary: `
                1. long confirmed breakout of 493.1, let it close above, and then do pullback, long the next breakout
                no short in the first 2 minutes because above vwap
                `,
                exitTargets: `500`
            }
        ],
        short: {
            reasons: [
                "low guidance in earnings",
            ],
            openDriveContinuation60Plan: { requireOpenBetterThanVwap: true, disableIfOpenWorseThanPrice: 0, targets: stock2Target, planConfigs: adbeConfigs },
            levelMomentumPlan: { targets: stock2Target, planConfigs: adbeConfigs },
            falseBreakoutPlan: { price: 0, targets: stock2Target, planConfigs: adbeConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock2Target, planConfigs: adbeConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, includeSecondNewHigh: true, targets: stock2Target, planConfigs: adbeConfigs },
            firstRetracementPlan: { targets: stock2Target, planConfigs: adbeConfigs },
            deferredBreakoutPlan: { targets: stock2Target, planConfigs: adbeConfigs },
        },
        long: {
            reasons: [
                "gap down to support",
            ],
            openDriveContinuation60Plan: { requireOpenBetterThanVwap: true, disableIfOpenWorseThanPrice: 493.1, targets: stock2Target, planConfigs: adbeConfigs },
            levelMomentumPlan: { targets: stock2Target, planConfigs: adbeConfigs },
            falseBreakoutPlan: { price: 0, targets: stock2Target, planConfigs: adbeConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock2Target, planConfigs: adbeConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, includeSecondNewHigh: true, targets: stock2Target, planConfigs: adbeConfigs },
            firstRetracementPlan: { targets: stock2Target, planConfigs: adbeConfigs },
            deferredBreakoutPlan: { targets: stock2Target, planConfigs: adbeConfigs },
        },
    },
    {
        symbol: 'TSLA',
        analysis: {
            newsQualityAndFreshness: 0, gapType: TradingPlans.GapType.Outside,
            relativeVolumeAndCandleSmoothness: 2,
            cleanVwapTrend: 2, dailyChartStory: 1,
            gapSize: 1,
            weeklychart: "up",
            dailyChart: "up",
            hourlyChart: "up",
            premarketChart: "fade below vwap",
            keyLevels: [424.88],
            singleMomentumKeyLevel: 424.88,
            dualMomentumKeyLevels: [],
            vwapExtensionDistance: 10,
            choppyOpenRangeHigh: 0,
            choppyOpenRangeLow: 0,
        },
        autoFlip: false,
        vwapCorrection: { volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: Constants.marketCaps.TSLA,
        atr: {
            average: 9,
            mutiplier: 1,
            minimumMultipler: 0.5,
            maxRisk: 5,
        },
        disableShortIfOpenAbove: 0,
        disableLongIfOpenBelow: 0,
        keyLevels: {
            momentumStartForLong: 420,
            momentumStartForShort: 500,
        },
        summary: `
        best setup is open just near below vwap and 424.88. short green to red < 60.
        `,
        setups: [
            {
                high: "vwap", low: "", title: "rejection",
                isChoppy: false,
                range: "below vwap", quality: "A",
                entrySummary: `
                green to red < 60
                `,
                exitTargets: `5-10 dollars. then 414 previous all time high`
            },
        ],
        short: {
            reasons: [
                "profit taking",
            ],
            openDriveContinuation60Plan: { requireOpenBetterThanVwap: true, disableIfOpenWorseThanPrice: 424.88, targets: stock3Target, planConfigs: tslaConfigs },
            levelMomentumPlan: { targets: stock3Target, planConfigs: tslaConfigs },
            falseBreakoutPlan: { price: 0, targets: stock3Target, planConfigs: tslaConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock3Target, planConfigs: tslaConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, includeSecondNewHigh: true, targets: stock3Target, planConfigs: tslaConfigs },
            firstRetracementPlan: { targets: stock3Target, planConfigs: tslaConfigs },
            deferredBreakoutPlan: { targets: stock3Target, planConfigs: tslaConfigs },
        },
        long: {
            reasons: [
                "continuation",
            ],
            openDriveContinuation60Plan: { requireOpenBetterThanVwap: true, disableIfOpenWorseThanPrice: 424.88, targets: stock3Target, planConfigs: tslaConfigs },
            levelMomentumPlan: { targets: stock3Target, planConfigs: tslaConfigs },
            falseBreakoutPlan: { price: 0, targets: stock3Target, planConfigs: tslaConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock3Target, planConfigs: tslaConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, includeSecondNewHigh: true, targets: stock3Target, planConfigs: tslaConfigs },
            firstRetracementPlan: { targets: stock3Target, planConfigs: tslaConfigs },
            deferredBreakoutPlan: { targets: stock3Target, planConfigs: tslaConfigs },
        },
    },
    {

        symbol: 'GOOGL',
        analysis: {
            newsQualityAndFreshness: 1, gapType: TradingPlans.GapType.Outside,
            relativeVolumeAndCandleSmoothness: 1,
            cleanVwapTrend: 2, dailyChartStory: 1,
            gapSize: 1,
            weeklychart: "range",
            dailyChart: "range",
            hourlyChart: "up",
            premarketChart: "gap up and fade",
            keyLevels: [195.61],
            singleMomentumKeyLevel: 195.61,
            dualMomentumKeyLevels: [],
            vwapExtensionDistance: 2,
            choppyOpenRangeHigh: 0,
            choppyOpenRangeLow: 0,
        },
        autoFlip: false,
        vwapCorrection: { volumeSum: 494653, tradingSum: 96670793 },
        marketCapInMillions: Constants.marketCaps.GOOGL,
        atr: {
            average: 4,
            mutiplier: 1,
            minimumMultipler: 1,
            maxRisk: 1.25,
        },
        disableShortIfOpenAbove: 0,
        disableLongIfOpenBelow: 0,
        keyLevels: {
            momentumStartForLong: 190,
            momentumStartForShort: 200,
        },
        summary: `
        wait for pop to y-high and vwap to short rejection
        `,
        setups: [
            {
                high: "", low: "vwap", title: "short",
                isChoppy: false,
                range: "below vwap", quality: "A",
                entrySummary: `
                green to red < 60
                `,
                exitTargets: `old all time high 191.75`
            }
        ],
        short: {
            reasons: [
                "profit taking",
            ],
            openDriveContinuation60Plan: { requireOpenBetterThanVwap: true, disableIfOpenWorseThanPrice: 195.61, targets: stock4Target, planConfigs: googleConfigs },
            levelMomentumPlan: { targets: stock4Target, planConfigs: googleConfigs },
            falseBreakoutPlan: { price: 0, targets: stock4Target, planConfigs: googleConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock4Target, planConfigs: googleConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, includeSecondNewHigh: true, targets: stock4Target, planConfigs: googleConfigs },
            firstRetracementPlan: { targets: stock4Target, planConfigs: googleConfigs },
            deferredBreakoutPlan: { targets: stock4Target, planConfigs: googleConfigs },
        },
        long: {
            reasons: [
                "continuation",
            ],
            levelMomentumPlan: { targets: stock4Target, planConfigs: googleConfigs },
            falseBreakoutPlan: { price: 0, targets: stock4Target, planConfigs: googleConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock4Target, planConfigs: googleConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, includeSecondNewHigh: true, targets: stock4Target, planConfigs: googleConfigs },
            firstRetracementPlan: { targets: stock4Target, planConfigs: googleConfigs },
            deferredBreakoutPlan: { targets: stock4Target, planConfigs: googleConfigs },
        },
    },
];