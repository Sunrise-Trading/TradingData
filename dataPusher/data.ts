import * as TradingPlans from './models';
import * as Constants from './constants';

// futures, momentumSimple, tradeStationEquity, schwab
export const activeProfileName: string = "schwab";
export const tradingSettings: TradingPlans.TradingSettings = {
    equalWeightDivider: 4,
    useSingleOrderForEntry: true,
}
const rddtConfigs: TradingPlans.PlanConfigs = {
    size: 0.24,
    deferTradingInSeconds: 0,
    stopTradingAfterSeconds: 0,
    requireReversal: true,
    alwaysAllowFlatten: true,
    alwaysAllowMoveStop: true,
    allowEarlyExits: false,
    allowFirstFewExitsCount: 2,
};
const snapConfigs: TradingPlans.PlanConfigs = {
    size: 0.24,
    deferTradingInSeconds: 0,
    stopTradingAfterSeconds: 0,
    requireReversal: true,
    alwaysAllowFlatten: true,
    alwaysAllowMoveStop: true,
    allowEarlyExits: true,
    allowFirstFewExitsCount: 2,
};
const googleConfigs: TradingPlans.PlanConfigs = {
    size: 0.24,
    deferTradingInSeconds: 0,
    stopTradingAfterSeconds: 0,
    requireReversal: true,
    alwaysAllowFlatten: true,
    alwaysAllowMoveStop: true,
    allowEarlyExits: true,
    allowFirstFewExitsCount: 2,
};
const stock4Configs: TradingPlans.PlanConfigs = {
    size: 0.24,
    deferTradingInSeconds: 0,
    stopTradingAfterSeconds: 0,
    requireReversal: true,
    alwaysAllowFlatten: true,
    alwaysAllowMoveStop: true,
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
    'RDDT',
    'SNAP',
    'GOOGL'

];

export const stocksTradingPlans: TradingPlans.TradingPlans[] = [
    {
        symbol: 'RDDT',
        analysis: {
            newsQualityAndFreshness: 2, gapType: TradingPlans.GapType.Outside,
            relativeVolumeAndCandleSmoothness: 2,
            cleanVwapTrend: 1, dailyChartStory: 2,
            gapSize: 20,
            weeklychart: "uptrend",
            dailyChart: "uptrend",
            hourlyChart: "uptrend",
            premarketChart: "below vwap and now reclaim",
            keyLevels: [100],
            choppyOpenRangeHigh: 20,
            choppyOpenRangeLow: 10,
        },
        autoFlip: false,
        vwapCorrection: { volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: Constants.marketCaps.RDDT,
        atr: {
            average: 3,
            mutiplier: 2,
            minimumMultipler: 1,
        },
        disableShortIfOpenAbove: 0,
        disableLongIfOpenBelow: 0,
        keyLevels: {
            momentumStartForLong: 97,
            momentumStartForShort: 102.3,
        },
        summary: `
        gap up above all time high. big space to both upside and downside. earnings very good and strong beat.
        gap up very big, should have a bit profit taking before long. use red to green including <60
        `,
        setups: [
            {
                range: "above vwap", quality: "A",
                entrySummary: `
                red to green < 60
                `,
                exitTargets: `premarket high, if break above it, no resistance above, use 5 minute trail`
            }, {
                range: "near premarket high", quality: "A",
                entrySummary: `
                1. short when it's making a false breakout of premarket high and green to red < 60. 
                flip long on first new high above vwap
                2. if strong close above premarket high, long the next breakout
                `,
                exitTargets: `5 minute trail for long. vwap for first target short, if break below vwap, premarket low 97`
            },
            {
                range: "below vwap", quality: "A",
                entrySummary: `
                green to red < 60 for gap up and fade
                `,
                exitTargets: `97 premarket low`
            },
        ],
        short: {
            reasons: [
                "profit taking",
            ],
            profitTakingExhaust60Plan: { includeOpenChase: false, targets: stock1Target, planConfigs: rddtConfigs },
            profitTakingFade60Plan: { enableAutoTrigger: false, onlyIfOpenBelow: 99, targets: stock1Target, planConfigs: rddtConfigs },
            falseBreakoutPlan: { price: 0, targets: stock1Target, planConfigs: rddtConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock1Target, planConfigs: rddtConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, includeSecondNewHigh: true, targets: stock1Target, planConfigs: rddtConfigs },
            firstRetracementPlan: { targets: stock1Target, planConfigs: rddtConfigs },
            deferredBreakoutPlan: { targets: stock1Target, planConfigs: rddtConfigs },
        },
        long: {
            reasons: [
                "earings beat, break all time high",
            ],
            openDriveContinuation60Plan: { requireOpenBetterThanVwap: true, disableIfOpenWorseThanPrice: 0, targets: stock1Target, planConfigs: rddtConfigs },
            levelBreakout: { entryPrice: 102.3, targets: stock1Target, planConfigs: rddtConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock1Target, planConfigs: rddtConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, includeSecondNewHigh: true, targets: stock1Target, planConfigs: rddtConfigs },
            firstRetracementPlan: { targets: stock1Target, planConfigs: rddtConfigs },
            deferredBreakoutPlan: { targets: stock1Target, planConfigs: rddtConfigs },
        },
    },
    {
        symbol: 'SNAP',
        analysis: {
            newsQualityAndFreshness: 2, gapType: TradingPlans.GapType.Outside,
            relativeVolumeAndCandleSmoothness: 2,
            cleanVwapTrend: 2, dailyChartStory: 2,
            gapSize: 1,
            weeklychart: "downtrend",
            dailyChart: "range",
            hourlyChart: "range",
            premarketChart: "below vwap fade",
            keyLevels: [12, 11.21],
            choppyOpenRangeHigh: 2,
            choppyOpenRangeLow: 1,
        },
        autoFlip: false,
        vwapCorrection: { volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: Constants.marketCaps.SNAP,
        atr: {
            average: 0.38,
            mutiplier: 1.5,
            minimumMultipler: 1,
        },
        disableShortIfOpenAbove: 0,
        disableLongIfOpenBelow: 0,
        keyLevels: {
            momentumStartForLong: 12,
            momentumStartForShort: 12,
        },
        summary: `
        only trade gap up and fade due to other stocks are better for long
        `,
        setups: [
            {
                range: "belowv wap", quality: "A",
                entrySummary: `
                short green to red < 60
                `,
                exitTargets: `11.21`
            }, {
                range: "belowv wap", quality: "A",
                entrySummary: `
                short green to red < 60
                `,
                exitTargets: `11.21`
            },
        ],
        short: {
            reasons: [
                "gap up and fade",
            ],
            profitTakingFade60Plan: { enableAutoTrigger: false, onlyIfOpenBelow: 11.82, targets: stock2Target, planConfigs: snapConfigs },
            falseBreakoutPlan: { price: 0, targets: stock2Target, planConfigs: snapConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock2Target, planConfigs: snapConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, includeSecondNewHigh: true, targets: stock2Target, planConfigs: snapConfigs },
            firstRetracementPlan: { targets: stock2Target, planConfigs: snapConfigs },
            deferredBreakoutPlan: { targets: stock2Target, planConfigs: snapConfigs },
        },
        long: {
            reasons: [
                "none",
            ],
        },
    },
    {
        symbol: 'GOOGL',
        analysis: {
            newsQualityAndFreshness: 2, gapType: TradingPlans.GapType.Outside,
            relativeVolumeAndCandleSmoothness: 2,
            cleanVwapTrend: 1, dailyChartStory: 2,
            gapSize: 12,
            weeklychart: "range",
            dailyChart: "up",
            hourlyChart: "up",
            premarketChart: "mostly above vwap",
            keyLevels: [181.56],
            choppyOpenRangeHigh: 20,
            choppyOpenRangeLow: 10,
        },
        autoFlip: false,
        vwapCorrection: { volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: Constants.marketCaps.GOOGL,
        atr: {
            average: 3.1,
            mutiplier: 1.5,
            minimumMultipler: 1,
        },
        disableShortIfOpenAbove: 0,
        disableLongIfOpenBelow: 0,
        keyLevels: {
            momentumStartForLong: 178,
            momentumStartForShort: 182,
        },
        summary: `
        mostly long biased. there are othe weaker stocks that gapped up like SNAP.
        `,
        setups: [
            {
                range: "above 181.56", quality: "A",
                entrySummary: `
                long the first breakout, after a pullback.
                `,
                exitTargets: `1 ATR move`
            }, {
                range: "below 181.56, above vwap", quality: "A",
                entrySummary: `
                1. red to green < 60
                2. green to red < 60 if false breakout premarket high
                `,
                exitTargets: `1 ATR move`
            }, {
                range: "below  vwap", quality: "A",
                entrySummary: `
                gap up and fade red to green < 60
                `,
                exitTargets: `1 ATR move`
            }
        ],
        short: {
            reasons: [
                "profit taking",
            ],
            profitTakingExhaust60Plan: { includeOpenChase: false, targets: stock3Target, planConfigs: googleConfigs },
            profitTakingFade60Plan: { enableAutoTrigger: false, onlyIfOpenBelow: 180.21, targets: stock3Target, planConfigs: googleConfigs },
            falseBreakoutPlan: { price: 0, targets: stock3Target, planConfigs: googleConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock3Target, planConfigs: googleConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, includeSecondNewHigh: true, targets: stock3Target, planConfigs: googleConfigs },
            firstRetracementPlan: { targets: stock3Target, planConfigs: googleConfigs },
            deferredBreakoutPlan: { targets: stock3Target, planConfigs: googleConfigs },
        },
        long: {
            reasons: [
                "earnings beat, above vwap",
            ],
            openDriveContinuation60Plan: { requireOpenBetterThanVwap: true, disableIfOpenWorseThanPrice: 0, targets: stock3Target, planConfigs: googleConfigs },
            falseBreakoutPlan: { price: 0, targets: stock3Target, planConfigs: googleConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock3Target, planConfigs: googleConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, includeSecondNewHigh: true, targets: stock3Target, planConfigs: googleConfigs },
            firstRetracementPlan: { targets: stock3Target, planConfigs: googleConfigs },
            deferredBreakoutPlan: { targets: stock3Target, planConfigs: googleConfigs },
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
            choppyOpenRangeHigh: 0,
            choppyOpenRangeLow: 0,
        },
        autoFlip: false,
        vwapCorrection: { volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: 0,
        atr: {
            average: 0,
            mutiplier: 0,
            minimumMultipler: 0,
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
                range: "", quality: "",
                entrySummary: `
                `,
                exitTargets: ``
            }, {
                range: "", quality: "",
                entrySummary: `
                `,
                exitTargets: ``
            }
        ],
        short: {
            reasons: [
                "",
                ""
            ],
            falseBreakoutPlan: { price: 0, targets: stock4Target, planConfigs: stock4Configs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock4Target, planConfigs: stock4Configs },
            firstNewHighPlan: { enableAutoTrigger: false, includeSecondNewHigh: true, targets: stock4Target, planConfigs: stock4Configs },
            firstRetracementPlan: { targets: stock4Target, planConfigs: stock4Configs },
            deferredBreakoutPlan: { targets: stock4Target, planConfigs: stock4Configs },
        },
        long: {
            reasons: [
                "",
                ""
            ],
            falseBreakoutPlan: { price: 0, targets: stock4Target, planConfigs: stock4Configs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock4Target, planConfigs: stock4Configs },
            firstNewHighPlan: { enableAutoTrigger: false, includeSecondNewHigh: true, targets: stock4Target, planConfigs: stock4Configs },
            firstRetracementPlan: { targets: stock4Target, planConfigs: stock4Configs },
            deferredBreakoutPlan: { targets: stock4Target, planConfigs: stock4Configs },
        },
    },
];