import * as TradingPlans from './models';
import * as Constants from './constants';

// futures, momentumSimple, tradeStationEquity, schwab
export const activeProfileName: string = "schwab";
export const tradingSettings: TradingPlans.TradingSettings = {
    equalWeightDivider: 4,
    useSingleOrderForEntry: true,
}
export const defaultSize = 0.28;
const avgoConfigs: TradingPlans.PlanConfigs = {
    size: defaultSize,
    deferTradingInSeconds: 0,
    stopTradingAfterSeconds: 0,
    requireReversal: true,
    alwaysAllowFlatten: true,
    alwaysAllowMoveStop: true,
    allowFirstFewExitsCount: 5,
};
const rhConfigs: TradingPlans.PlanConfigs = {
    size: defaultSize,
    deferTradingInSeconds: 0,
    stopTradingAfterSeconds: 0,
    requireReversal: true,
    alwaysAllowFlatten: true,
    alwaysAllowMoveStop: true,
    allowFirstFewExitsCount: 5,
};
const afrmConfigs: TradingPlans.PlanConfigs = {
    size: defaultSize,
    deferTradingInSeconds: 0,
    stopTradingAfterSeconds: 0,
    requireReversal: true,
    alwaysAllowFlatten: true,
    alwaysAllowMoveStop: true,
    allowFirstFewExitsCount: 5,
};
const stock4Configs: TradingPlans.PlanConfigs = {
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
    'AVGO',
    'RH',
    //'TSM',
    'AFRM',
];

export const stocksTradingPlans: TradingPlans.TradingPlans[] = [
    {
        symbol: 'AVGO',
        analysis: {
            newsQualityAndFreshness: 2, gapType: TradingPlans.GapType.Outside,
            relativeVolumeAndCandleSmoothness: 2,
            cleanVwapTrend: 2, dailyChartStory: 2,
            gapSize: 33,
            weeklychart: "up",
            dailyChart: "big range breakout",
            hourlyChart: "steps up",
            premarketChart: "above reaction high and vwap",
            keyLevels: [209.89, 186.42],
            singleMomentumKeyLevel: 209.89,
            dualMomentumKeyLevels: [],
            vwapExtensionDistance: 3,
            choppyOpenRangeHigh: 0,
            choppyOpenRangeLow: 0,
        },
        autoFlip: false,
        vwapCorrection: { open: 0, volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: Constants.marketCaps.AVGO,
        atr: {
            average: 6.3,
            mutiplier: 2,
            minimumMultipler: 1,
            maxRisk: 3,
        },
        disableShortIfOpenAbove: 0,
        disableLongIfOpenBelow: 0,
        keyLevels: {
            momentumStartForLong: 205,
            momentumStartForShort: 300,
        },
        summary: `
        good setup when reaction high is near vwap. premarket is not extended from vwap, 
        so no vwap extension short yet. unless it starts to rally just before open.
        starts to rally now, it's extended from vwap, allow vwap extension short if open with a green push
        already dip into vwap, i can't short vwap extension any more
        `,
        setups: [
            {
                high: "", low: "vwap", title: "gap up and go",
                isChoppy: false,
                range: "above both levels", quality: "A",
                entrySummary: `
                red to green < 60
                `,
                exitTargets: `all time high, trailing stop, to limit`
            }, {
                high: "209.89", low: "", title: "gap up and fade",
                isChoppy: false,
                range: "below both levels", quality: "A",
                entrySummary: `
                green to red < 60
                `,
                exitTargets: `205 premarket low`
            }
        ],
        short: {
            reasons: [
                "profit taking",
            ],
            // profitTakingExhaust60Plan: { includeOpenChase: false, minDistanceToVwap: 2, targets: stock1Target, planConfigs: avgoConfigs },
            //openDriveContinuation60Plan: { requireOpenBetterThanVwap: true, disableIfOpenWorseThanPrice: 209.89, targets: stock1Target, planConfigs: avgoConfigs },
            levelMomentumPlan: { targets: stock1Target, planConfigs: avgoConfigs },
            falseBreakoutPlan: { price: 0, targets: stock1Target, planConfigs: avgoConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock1Target, planConfigs: avgoConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, includeSecondNewHigh: true, targets: stock1Target, planConfigs: avgoConfigs },
            firstRetracementPlan: { targets: stock1Target, planConfigs: avgoConfigs },
            deferredBreakoutPlan: { targets: stock1Target, planConfigs: avgoConfigs },
        },
        long: {
            reasons: [
                "continuation",
            ],
            openDriveContinuation60Plan: { requireOpenBetterThanVwap: true, disableIfOpenWorseThanPrice: 209.89, targets: stock1Target, planConfigs: avgoConfigs },
            levelMomentumPlan: { targets: stock1Target, planConfigs: avgoConfigs },
            falseBreakoutPlan: { price: 0, targets: stock1Target, planConfigs: avgoConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock1Target, planConfigs: avgoConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, includeSecondNewHigh: true, targets: stock1Target, planConfigs: avgoConfigs },
            firstRetracementPlan: { targets: stock1Target, planConfigs: avgoConfigs },
            deferredBreakoutPlan: { targets: stock1Target, planConfigs: avgoConfigs },
        },
    },
    {
        symbol: 'RH',
        analysis: {
            newsQualityAndFreshness: 2, gapType: TradingPlans.GapType.Outside,
            relativeVolumeAndCandleSmoothness: 1,
            cleanVwapTrend: 2, dailyChartStory: 2,
            gapSize: 50,
            weeklychart: "steps up",
            dailyChart: "range",
            hourlyChart: "range",
            premarketChart: "gap up and fade below vwap and key levels",
            keyLevels: [465.05, 441.67],
            singleMomentumKeyLevel: 441.67,
            dualMomentumKeyLevels: [],
            vwapExtensionDistance: 8,
            choppyOpenRangeHigh: 0,
            choppyOpenRangeLow: 0,
        },
        autoFlip: false,
        vwapCorrection: { open: 0, volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: Constants.marketCaps.RH,
        atr: {
            average: 14,
            mutiplier: 1.5,
            minimumMultipler: 1,
            maxRisk: 5,
        },
        disableShortIfOpenAbove: 0,
        disableLongIfOpenBelow: 0,
        keyLevels: {
            momentumStartForLong: 441,
            momentumStartForShort: 465,
        },
        summary: `
        gap up and fade if opens below both levels.
        `,
        setups: [
            {
                high: "vwap", low: "", title: "gap  up and fade",
                isChoppy: false,
                range: "below vwap", quality: "A",
                entrySummary: `
                green to red < 60
                `,
                exitTargets: `gap fill 410`
            },
        ],
        short: {
            reasons: [
                "profit taking",
            ],
            openDriveContinuation60Plan: { requireOpenBetterThanVwap: true, disableIfOpenWorseThanPrice: 441.67, targets: stock2Target, planConfigs: rhConfigs },
            levelMomentumPlan: { targets: stock2Target, planConfigs: rhConfigs },
            falseBreakoutPlan: { price: 0, targets: stock2Target, planConfigs: rhConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock2Target, planConfigs: rhConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, includeSecondNewHigh: true, targets: stock2Target, planConfigs: rhConfigs },
            firstRetracementPlan: { targets: stock2Target, planConfigs: rhConfigs },
            deferredBreakoutPlan: { targets: stock2Target, planConfigs: rhConfigs },
        },
        long: {
            reasons: [
                "earnings beat",
            ],
            levelMomentumPlan: { targets: stock2Target, planConfigs: rhConfigs },
            falseBreakoutPlan: { price: 0, targets: stock2Target, planConfigs: rhConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock2Target, planConfigs: rhConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, includeSecondNewHigh: true, targets: stock2Target, planConfigs: rhConfigs },
            firstRetracementPlan: { targets: stock2Target, planConfigs: rhConfigs },
            deferredBreakoutPlan: { targets: stock2Target, planConfigs: rhConfigs },
        },
    },
    {
        symbol: 'AFRM',
        analysis: {
            newsQualityAndFreshness: 1, gapType: TradingPlans.GapType.Outside,
            relativeVolumeAndCandleSmoothness: 2,
            cleanVwapTrend: 2, dailyChartStory: 1,
            gapSize: 3,
            weeklychart: "up",
            dailyChart: "range",
            hourlyChart: "range",
            premarketChart: "above vwap mostly",
            keyLevels: [72.82],
            singleMomentumKeyLevel: 72.82,
            dualMomentumKeyLevels: [],
            vwapExtensionDistance: 2,
            choppyOpenRangeHigh: 0,
            choppyOpenRangeLow: 0,
        },
        autoFlip: false,
        vwapCorrection: { open: 0, volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: Constants.marketCaps.AFRM,
        atr: {
            average: 4,
            mutiplier: 1,
            minimumMultipler: 1,
            maxRisk: 1,
        },
        disableShortIfOpenAbove: 0,
        disableLongIfOpenBelow: 0,
        keyLevels: {
            momentumStartForLong: 72,
            momentumStartForShort: 72,
        },
        summary: `
        if gap above 72.82, red to green < 60.
        if open below, wait for a close above it, then long the next breakout
        `,
        setups: [
            {
                high: "", low: "72.82", title: "gap and go",
                isChoppy: false,
                range: "above 72.82", quality: "A",
                entrySummary: `
                red to green < 60
                `,
                exitTargets: `1 ATR`
            }, {
                high: "72.82", low: "vwap", title: "confirmed breakout",
                isChoppy: true,
                range: "between vwap and 72.82", quality: "B",
                entrySummary: `
                let 1 candle close above 72.82, long the next breakout
                `,
                exitTargets: `1 ATR`
            }
        ],
        short: {
            reasons: [
                "pop into resistance",
            ],
            profitTakingFade60Plan: { enableAutoTrigger: false, onlyIfOpenBelow: 71.6, targets: stock3Target, planConfigs: afrmConfigs },
            levelMomentumPlan: { targets: stock3Target, planConfigs: afrmConfigs },
            falseBreakoutPlan: { price: 0, targets: stock3Target, planConfigs: afrmConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock3Target, planConfigs: afrmConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, includeSecondNewHigh: true, targets: stock3Target, planConfigs: afrmConfigs },
            firstRetracementPlan: { targets: stock3Target, planConfigs: afrmConfigs },
            deferredBreakoutPlan: { targets: stock3Target, planConfigs: afrmConfigs },
        },
        long: {
            reasons: [
                "daily chart breakout",
            ],
            openDriveContinuation60Plan: { requireOpenBetterThanVwap: true, disableIfOpenWorseThanPrice: 72.82, targets: stock3Target, planConfigs: afrmConfigs },
            levelMomentumPlan: { targets: stock3Target, planConfigs: afrmConfigs },
            falseBreakoutPlan: { price: 0, targets: stock3Target, planConfigs: afrmConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock3Target, planConfigs: afrmConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, includeSecondNewHigh: true, targets: stock3Target, planConfigs: afrmConfigs },
            firstRetracementPlan: { targets: stock3Target, planConfigs: afrmConfigs },
            deferredBreakoutPlan: { targets: stock3Target, planConfigs: afrmConfigs },
        },
    },
    {
        symbol: 'stock4',
        analysis: {
            newsQualityAndFreshness: -1, gapType: TradingPlans.GapType.Unknown,
            relativeVolumeAndCandleSmoothness: -1,
            cleanVwapTrend: -1, dailyChartStory: -1,
            gapSize: 0,
            weeklychart: "",
            dailyChart: "",
            hourlyChart: "",
            premarketChart: "",
            keyLevels: [],
            singleMomentumKeyLevel: -1,
            dualMomentumKeyLevels: [],
            vwapExtensionDistance: 0,
            choppyOpenRangeHigh: 0,
            choppyOpenRangeLow: 0,
        },
        autoFlip: false,
        vwapCorrection: { open: 0, volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: 0,
        atr: {
            average: 0,
            mutiplier: 0,
            minimumMultipler: 0,
            maxRisk: 0,
        },
        disableShortIfOpenAbove: 0,
        disableLongIfOpenBelow: 0,
        keyLevels: {
            momentumStartForLong: 0,
            momentumStartForShort: 0,
        },
        summary: `
        
        `,
        setups: [
            {
                high: "", low: "", title: "",
                isChoppy: true,
                range: "", quality: "",
                entrySummary: `
                `,
                exitTargets: ``
            }, {
                high: "", low: "", title: "",
                isChoppy: true,
                range: "", quality: "",
                entrySummary: `
                `,
                exitTargets: ``
            }
        ],
        short: {
            reasons: [
                "",
            ],
            levelMomentumPlan: { targets: stock4Target, planConfigs: stock4Configs },
            falseBreakoutPlan: { price: 0, targets: stock4Target, planConfigs: stock4Configs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock4Target, planConfigs: stock4Configs },
            firstNewHighPlan: { enableAutoTrigger: false, includeSecondNewHigh: true, targets: stock4Target, planConfigs: stock4Configs },
            firstRetracementPlan: { targets: stock4Target, planConfigs: stock4Configs },
            deferredBreakoutPlan: { targets: stock4Target, planConfigs: stock4Configs },
        },
        long: {
            reasons: [
                "",
            ],
            levelMomentumPlan: { targets: stock4Target, planConfigs: stock4Configs },
            falseBreakoutPlan: { price: 0, targets: stock4Target, planConfigs: stock4Configs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock4Target, planConfigs: stock4Configs },
            firstNewHighPlan: { enableAutoTrigger: false, includeSecondNewHigh: true, targets: stock4Target, planConfigs: stock4Configs },
            firstRetracementPlan: { targets: stock4Target, planConfigs: stock4Configs },
            deferredBreakoutPlan: { targets: stock4Target, planConfigs: stock4Configs },
        },
    },
];