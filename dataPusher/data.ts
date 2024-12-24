import * as TradingPlans from './models';
import * as Constants from './constants';

// futures, momentumSimple, tradeStationEquity, schwab
export const activeProfileName: string = "schwab";
export const tradingSettings: TradingPlans.TradingSettings = {
    equalWeightDivider: 4,
    useSingleOrderForEntry: true,
}
export const defaultSize = 0.28;
const rgtiConfigs: TradingPlans.PlanConfigs = {
    size: defaultSize,
    deferTradingInSeconds: 0,
    stopTradingAfterSeconds: 0,
    requireReversal: true,
    alwaysAllowFlatten: true,
    alwaysAllowMoveStop: true,
    allowFirstFewExitsCount: 5,
};
const rumConfigs: TradingPlans.PlanConfigs = {
    size: defaultSize,
    deferTradingInSeconds: 0,
    stopTradingAfterSeconds: 0,
    requireReversal: true,
    alwaysAllowFlatten: true,
    alwaysAllowMoveStop: true,
    allowFirstFewExitsCount: 5,
};
const stock3Configs: TradingPlans.PlanConfigs = {
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
    'RGTI',
    'RUM',
];

export const stocksTradingPlans: TradingPlans.TradingPlans[] = [
    {
        symbol: 'RGTI',
        analysis: {
            newsQualityAndFreshness: 1, gapType: TradingPlans.GapType.Outside,
            relativeVolumeAndCandleSmoothness: 2,
            cleanVwapTrend: 2, dailyChartStory: 1,
            gapSize: 2.5,
            weeklychart: "up",
            dailyChart: "up",
            hourlyChart: "up",
            premarketChart: "up",
            keyLevels: [12.75, 11.37, 10.08],
            singleMomentumKeyLevel: 11.37,
            dualMomentumKeyLevels: [],
            vwapExtensionDistance: 1.5,
            choppyOpenRangeHigh: 0,
            choppyOpenRangeLow: 0,
        },
        autoFlip: false,
        vwapCorrection: { open: 0, volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: Constants.marketCaps.RGTI,
        atr: {
            average: 1.5,
            mutiplier: 1.5,
            minimumMultipler: 1,
            maxRisk: 1,
        },
        disableShortIfOpenAbove: 0,
        disableLongIfOpenBelow: 0,
        keyLevels: {
            momentumStartForLong: 10,
            momentumStartForShort: 12.75,
        },
        summary: `
        if open too far away from vwap like more than $1, ok to short green to red < 60 for vwap extension
        `,
        setups: [
            {
                high: "", low: "11.37", title: "reclaim all time high",
                isChoppy: false,
                range: "above vwap and 11.37", quality: "A",
                entrySummary: `
                red to green < 60, but beter setup is first new high above vwap
                `,
                exitTargets: `12.75, once break that, all clear more more all time high`
            }
        ],
        defaultConfigs: rgtiConfigs, defaultTargets: stock1Target,
        short: {
            reasons: [
                "profit taking",
            ],
            profitTakingExhaust60Plan: { includeOpenChase: false, minDistanceToVwap: 0.5, targets: stock1Target, planConfigs: rgtiConfigs },
            levelMomentumPlan: { targets: stock1Target, planConfigs: rgtiConfigs },
            falseBreakoutPlan: { price: 0, targets: stock1Target, planConfigs: rgtiConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock1Target, planConfigs: rgtiConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, includeSecondNewHigh: true, targets: stock1Target, planConfigs: rgtiConfigs },
            firstRetracementPlan: { targets: stock1Target, planConfigs: rgtiConfigs },
            deferredBreakoutPlan: { targets: stock1Target, planConfigs: rgtiConfigs },
        },
        long: {
            reasons: [
                "continuation",
            ],
            levelMomentumPlan: { targets: stock1Target, planConfigs: rgtiConfigs },
            falseBreakoutPlan: { price: 0, targets: stock1Target, planConfigs: rgtiConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock1Target, planConfigs: rgtiConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, includeSecondNewHigh: true, targets: stock1Target, planConfigs: rgtiConfigs },
            firstRetracementPlan: { targets: stock1Target, planConfigs: rgtiConfigs },
            deferredBreakoutPlan: { targets: stock1Target, planConfigs: rgtiConfigs },
        },
    },
    {
        symbol: 'RUM',
        analysis: {
            newsQualityAndFreshness: 2, gapType: TradingPlans.GapType.Outside,
            relativeVolumeAndCandleSmoothness: 1,
            cleanVwapTrend: 1, dailyChartStory: 1,
            gapSize: 3,
            weeklychart: "up",
            dailyChart: "range",
            hourlyChart: "down",
            premarketChart: "gap and fade below vwap",
            keyLevels: [11],
            singleMomentumKeyLevel: 11,
            dualMomentumKeyLevels: [],
            vwapExtensionDistance: 0,
            choppyOpenRangeHigh: 0,
            choppyOpenRangeLow: 0,
        },
        autoFlip: false,
        vwapCorrection: { open: 0, volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: Constants.marketCaps.RUM,
        atr: {
            average: 0.64,
            mutiplier: 2,
            minimumMultipler: 1,
            maxRisk: 0.4,
        },
        disableShortIfOpenAbove: 0,
        disableLongIfOpenBelow: 0,
        keyLevels: {
            momentumStartForLong: 11,
            momentumStartForShort: 11,
        },
        summary: `
        gap up into resistance area on daily chart. best setup is open below vwap for a gap up and fade.
        `,
        setups: [
            {
                high: "vwap", low: "", title: "gap up and fade",
                isChoppy: false,
                range: "below vwap", quality: "A",
                entrySummary: `
                green to red < 60
                `,
                exitTargets: `9.25`
            }
        ],
        defaultConfigs: rumConfigs, defaultTargets: stock2Target,
        short: {
            reasons: [
                "gap up and fade",
            ],
            levelMomentumPlan: { targets: stock2Target, planConfigs: rumConfigs },
            falseBreakoutPlan: { price: 0, targets: stock2Target, planConfigs: rumConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock2Target, planConfigs: rumConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, includeSecondNewHigh: true, targets: stock2Target, planConfigs: rumConfigs },
            firstRetracementPlan: { targets: stock2Target, planConfigs: rumConfigs },
            deferredBreakoutPlan: { targets: stock2Target, planConfigs: rumConfigs },
        },
        long: {
            reasons: [
                "above 10 whole number",
            ],
            levelMomentumPlan: { targets: stock2Target, planConfigs: rumConfigs },
            falseBreakoutPlan: { price: 0, targets: stock2Target, planConfigs: rumConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock2Target, planConfigs: rumConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, includeSecondNewHigh: true, targets: stock2Target, planConfigs: rumConfigs },
            firstRetracementPlan: { targets: stock2Target, planConfigs: rumConfigs },
            deferredBreakoutPlan: { targets: stock2Target, planConfigs: rumConfigs },
        },
    },
    {
        symbol: 'QUBT',
        analysis: {
            newsQualityAndFreshness: 0, gapType: TradingPlans.GapType.Outside,
            relativeVolumeAndCandleSmoothness: 2,
            cleanVwapTrend: 2, dailyChartStory: 1,
            gapSize: 0,
            weeklychart: "up",
            dailyChart: "up",
            hourlyChart: "up",
            premarketChart: "up",
            keyLevels: [19.88],
            singleMomentumKeyLevel: 19.88,
            dualMomentumKeyLevels: [],
            vwapExtensionDistance: 1.5,
            choppyOpenRangeHigh: 0,
            choppyOpenRangeLow: 0,
        },
        autoFlip: false,
        vwapCorrection: { open: 0, volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: Constants.marketCaps.QUBT,
        atr: {
            average: 3.39,
            mutiplier: 1,
            minimumMultipler: 1,
            maxRisk: 1.5,
        },
        disableShortIfOpenAbove: 0,
        disableLongIfOpenBelow: 0,
        keyLevels: {
            momentumStartForLong: 19.88,
            momentumStartForShort: 19.88,
        },
        summary: `
        at clear level of yesterday high and near 20
        `,
        setups: [
            {
                high: "", low: "19.88", title: "gap up and go",
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
        defaultConfigs: stock3Configs, defaultTargets: stock3Target,
        short: {
            reasons: [
                "",
            ],
            levelMomentumPlan: { targets: stock3Target, planConfigs: stock3Configs },
            falseBreakoutPlan: { price: 0, targets: stock3Target, planConfigs: stock3Configs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock3Target, planConfigs: stock3Configs },
            firstNewHighPlan: { enableAutoTrigger: false, includeSecondNewHigh: true, targets: stock3Target, planConfigs: stock3Configs },
            firstRetracementPlan: { targets: stock3Target, planConfigs: stock3Configs },
            deferredBreakoutPlan: { targets: stock3Target, planConfigs: stock3Configs },
        },
        long: {
            reasons: [
                "",
            ],
            levelMomentumPlan: { targets: stock3Target, planConfigs: stock3Configs },
            falseBreakoutPlan: { price: 0, targets: stock3Target, planConfigs: stock3Configs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock3Target, planConfigs: stock3Configs },
            firstNewHighPlan: { enableAutoTrigger: false, includeSecondNewHigh: true, targets: stock3Target, planConfigs: stock3Configs },
            firstRetracementPlan: { targets: stock3Target, planConfigs: stock3Configs },
            deferredBreakoutPlan: { targets: stock3Target, planConfigs: stock3Configs },
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
        defaultConfigs: stock4Configs, defaultTargets: stock4Target,
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