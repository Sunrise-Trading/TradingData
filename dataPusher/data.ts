import * as TradingPlans from './models';
import * as Constants from './constants';

// futures, momentumSimple, tradeStationEquity, schwab
export const activeProfileName: string = "schwab";
export const tradingSettings: TradingPlans.TradingSettings = {
    equalWeightDivider: 4,
    useSingleOrderForEntry: true,
}
export const defaultSize = 0.28;
const tevaConfigs: TradingPlans.PlanConfigs = {
    size: defaultSize,
    deferTradingInSeconds: 0,
    stopTradingAfterSeconds: 0,
    requireReversal: true,
    alwaysAllowFlatten: true,
    alwaysAllowMoveStop: true,
    allowFirstFewExitsCount: 10,
};
const amdConfigs: TradingPlans.PlanConfigs = {
    size: defaultSize,
    deferTradingInSeconds: 0,
    stopTradingAfterSeconds: 0,
    requireReversal: true,
    alwaysAllowFlatten: true,
    alwaysAllowMoveStop: true,
    allowFirstFewExitsCount: 10,
};
const avgoConfigs: TradingPlans.PlanConfigs = {
    size: defaultSize,
    deferTradingInSeconds: 0,
    stopTradingAfterSeconds: 0,
    requireReversal: true,
    alwaysAllowFlatten: true,
    alwaysAllowMoveStop: true,
    allowFirstFewExitsCount: 10,
};
const tslaConfigs: TradingPlans.PlanConfigs = {
    size: defaultSize,
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
    'TEVA',
    'AMD',
    'AVGO',
    'TSLA'
];

export const stocksTradingPlans: TradingPlans.TradingPlans[] = [
    {
        symbol: 'TEVA',
        analysis: {
            newsQualityAndFreshness: 2, gapType: TradingPlans.GapType.Outside,
            relativeVolumeAndCandleSmoothness: 2,
            cleanVwapTrend: 2, dailyChartStory: 2,
            gapSize: 3,
            weeklychart: "top range",
            dailyChart: "up",
            hourlyChart: "pullback",
            premarketChart: "hold above vwap and key level",
            keyLevels: [19.31],
            singleMomentumKeyLevel: 19.31,
            dualMomentumKeyLevels: [],
            vwapExtensionDistance: 1,
            choppyOpenRangeHigh: 0,
            choppyOpenRangeLow: 0,
        },
        autoFlip: false,
        vwapCorrection: { open: 0, volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: Constants.marketCaps.TEVA,
        atr: {
            average: 0.53,
            mutiplier: 3,
            minimumMultipler: 3,
            maxRisk: 1,
        },
        disableShortIfOpenAbove: 0,
        disableLongIfOpenBelow: 0,
        keyLevels: {
            momentumStartForLong: 19.31,
            momentumStartForShort: 19.31,
        },
        summary: `
        only use 52 week high 19.31. If starts to rally into open, also allow vwap extension short.
        `,
        setups: [
            {
                high: "19.31", low: "", title: "gap up and fade",
                isChoppy: false,
                range: "below both", quality: "A",
                entrySummary: `
                green to red < 60
                `,
                exitTargets: `18.5`
            }, {
                high: "", low: "vwap", title: "gap up and go",
                isChoppy: false,
                range: "above both", quality: "A",
                entrySummary: `
                red to green < 60
                `,
                exitTargets: `premarket high, then much higher, using trailing stop`
            }
        ],
        short: {
            reasons: [
                "profit taking",
            ],
            profitTakingExhaust60Plan: { includeOpenChase: false, minDistanceToVwap: 0.5, targets: stock1Target, planConfigs: tevaConfigs },
            openDriveContinuation60Plan: { requireOpenBetterThanVwap: true, disableIfOpenWorseThanPrice: 19.31, targets: stock1Target, planConfigs: tevaConfigs },
            levelMomentumPlan: { targets: stock1Target, planConfigs: tevaConfigs },
            falseBreakoutPlan: { price: 0, targets: stock1Target, planConfigs: tevaConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock1Target, planConfigs: tevaConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, includeSecondNewHigh: true, targets: stock1Target, planConfigs: tevaConfigs },
            firstRetracementPlan: { targets: stock1Target, planConfigs: tevaConfigs },
            deferredBreakoutPlan: { targets: stock1Target, planConfigs: tevaConfigs },
        },
        long: {
            reasons: [
                "continuation",
            ],
            openDriveContinuation60Plan: { requireOpenBetterThanVwap: true, disableIfOpenWorseThanPrice: 19.31, targets: stock1Target, planConfigs: tevaConfigs },
            levelMomentumPlan: { targets: stock1Target, planConfigs: tevaConfigs },
            falseBreakoutPlan: { price: 0, targets: stock1Target, planConfigs: tevaConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock1Target, planConfigs: tevaConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, includeSecondNewHigh: true, targets: stock1Target, planConfigs: tevaConfigs },
            firstRetracementPlan: { targets: stock1Target, planConfigs: tevaConfigs },
            deferredBreakoutPlan: { targets: stock1Target, planConfigs: tevaConfigs },
        },
    },
    {
        symbol: 'AMD',
        analysis: {
            newsQualityAndFreshness: 1, gapType: TradingPlans.GapType.Outside,
            relativeVolumeAndCandleSmoothness: 1,
            cleanVwapTrend: 2, dailyChartStory: 1,
            gapSize: 2,
            weeklychart: "down",
            dailyChart: "down",
            hourlyChart: "flat bottom break down",
            premarketChart: "below vwap",
            keyLevels: [127],
            singleMomentumKeyLevel: 127,
            dualMomentumKeyLevels: [],
            vwapExtensionDistance: 2,
            choppyOpenRangeHigh: 0,
            choppyOpenRangeLow: 0,
        },
        autoFlip: false,
        vwapCorrection: { open: 0, volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: Constants.marketCaps.AMD,
        atr: {
            average: 4,
            mutiplier: 1,
            minimumMultipler: 1,
            maxRisk: 1.5,
        },
        disableShortIfOpenAbove: 0,
        disableLongIfOpenBelow: 0,
        keyLevels: {
            momentumStartForLong: 127,
            momentumStartForShort: 127,
        },
        summary: `
        open below vwap, wait for a pop into vwap then short new low
        `,
        setups: [
            {
                high: "vwap", low: "", title: "gap down selloff",
                isChoppy: true,
                range: "below vwap", quality: "B",
                entrySummary: `
                first new low after pop to vwap
                `,
                exitTargets: `123, then much lower 121`
            },
        ],
        short: {
            reasons: [
                "bad news",
            ],
            levelMomentumPlan: { targets: stock2Target, planConfigs: amdConfigs },
            falseBreakoutPlan: { price: 0, targets: stock2Target, planConfigs: amdConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock2Target, planConfigs: amdConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, includeSecondNewHigh: true, targets: stock2Target, planConfigs: amdConfigs },
            firstRetracementPlan: { targets: stock2Target, planConfigs: amdConfigs },
            deferredBreakoutPlan: { targets: stock2Target, planConfigs: amdConfigs },
        },
        long: {
            reasons: [
                "gap down to support",
            ],
            levelMomentumPlan: { targets: stock2Target, planConfigs: amdConfigs },
            falseBreakoutPlan: { price: 0, targets: stock2Target, planConfigs: amdConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock2Target, planConfigs: amdConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, includeSecondNewHigh: true, targets: stock2Target, planConfigs: amdConfigs },
            firstRetracementPlan: { targets: stock2Target, planConfigs: amdConfigs },
            deferredBreakoutPlan: { targets: stock2Target, planConfigs: amdConfigs },
        },
    },
    {
        symbol: 'AVGO',
        analysis: {
            newsQualityAndFreshness: 0, gapType: TradingPlans.GapType.Outside,
            relativeVolumeAndCandleSmoothness: 2,
            cleanVwapTrend: 2, dailyChartStory: 1,
            gapSize: 5,
            weeklychart: "up",
            dailyChart: "up",
            hourlyChart: "up",
            premarketChart: "sell off below vwap and key level",
            keyLevels: [251.88],
            singleMomentumKeyLevel: 251.88,
            dualMomentumKeyLevels: [],
            vwapExtensionDistance: 8,
            choppyOpenRangeHigh: 0,
            choppyOpenRangeLow: 0,
        },
        autoFlip: false,
        vwapCorrection: { open: 0, volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: Constants.marketCaps.AVGO,
        atr: {
            average: 10,
            mutiplier: 1,
            minimumMultipler: 1,
            maxRisk: 4,
        },
        disableShortIfOpenAbove: 0,
        disableLongIfOpenBelow: 0,
        keyLevels: {
            momentumStartForLong: 250,
            momentumStartForShort: 251.88,
        },
        summary: `
        let it pop back to vwap or 251.88, then look for breakdown short. or let is close above 251.88, then look for long.
        `,
        setups: [
            {
                high: "250", low: "", title: "fade the open",
                isChoppy: false,
                range: "below vwap ", quality: "A",
                entrySummary: `
                first new low
                `,
                exitTargets: `2R`
            },
        ],
        short: {
            reasons: [
                "profit taking",
            ],
            levelMomentumPlan: { targets: stock3Target, planConfigs: avgoConfigs },
            falseBreakoutPlan: { price: 0, targets: stock3Target, planConfigs: avgoConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock3Target, planConfigs: avgoConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, includeSecondNewHigh: true, targets: stock3Target, planConfigs: avgoConfigs },
            firstRetracementPlan: { targets: stock3Target, planConfigs: avgoConfigs },
            deferredBreakoutPlan: { targets: stock3Target, planConfigs: avgoConfigs },
        },
        long: {
            reasons: [
                "continuation",
            ],
            levelMomentumPlan: { targets: stock3Target, planConfigs: avgoConfigs },
            falseBreakoutPlan: { price: 0, targets: stock3Target, planConfigs: avgoConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock3Target, planConfigs: avgoConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, includeSecondNewHigh: true, targets: stock3Target, planConfigs: avgoConfigs },
            firstRetracementPlan: { targets: stock3Target, planConfigs: avgoConfigs },
            deferredBreakoutPlan: { targets: stock3Target, planConfigs: avgoConfigs },
        },
    },
    {
        symbol: 'TSLA',
        analysis: {
            newsQualityAndFreshness: 1, gapType: TradingPlans.GapType.Outside,
            relativeVolumeAndCandleSmoothness: 2,
            cleanVwapTrend: 1, dailyChartStory: 2,
            gapSize: 10,
            weeklychart: "up",
            dailyChart: "up",
            hourlyChart: "up",
            premarketChart: "fade below vwap",
            keyLevels: [479],
            singleMomentumKeyLevel: 463.19,
            dualMomentumKeyLevels: [],
            vwapExtensionDistance: 0,
            choppyOpenRangeHigh: 0,
            choppyOpenRangeLow: 0,
        },
        autoFlip: false,
        vwapCorrection: { open: 0, volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: Constants.marketCaps.TSLA,
        atr: {
            average: 8,
            mutiplier: 2,
            minimumMultipler: 2,
            maxRisk: 5,
        },
        disableShortIfOpenAbove: 0,
        disableLongIfOpenBelow: 0,
        keyLevels: {
            momentumStartForLong: 470,
            momentumStartForShort: 500,
        },
        summary: `
        only short green to red into vwap
        `,
        setups: [
            {
                high: "vwap", low: "", title: "vwap rejection",
                isChoppy: true,
                range: "below vwap", quality: "B",
                entrySummary: `
                green to red
                `,
                exitTargets: `gap fill`
            },
        ],
        short: {
            reasons: [
                "profit taking",
            ],
            openDriveContinuation60Plan: { requireOpenBetterThanVwap: true, disableIfOpenWorseThanPrice: 0, targets: stock4Target, planConfigs: tslaConfigs },
            levelMomentumPlan: { targets: stock4Target, planConfigs: tslaConfigs },
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
            levelMomentumPlan: { targets: stock4Target, planConfigs: tslaConfigs },
            falseBreakoutPlan: { price: 0, targets: stock4Target, planConfigs: tslaConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock4Target, planConfigs: tslaConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, includeSecondNewHigh: true, targets: stock4Target, planConfigs: tslaConfigs },
            firstRetracementPlan: { targets: stock4Target, planConfigs: tslaConfigs },
            deferredBreakoutPlan: { targets: stock4Target, planConfigs: tslaConfigs },
        },
    },
];