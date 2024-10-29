import * as TradingPlans from './models';
import * as Constants from './constants';

// futures, momentumSimple, tradeStationEquity, schwab
export const activeProfileName: string = "schwab";
export const tradingSettings: TradingPlans.TradingSettings = {
    equalWeightDivider: 4,
    useSingleOrderForEntry: true,
}
const djtConfigs: TradingPlans.PlanConfigs = {
    size: 0.24,
    deferTradingInSeconds: 0,
    stopTradingAfterSeconds: 0,
    requireReversal: true,
    alwaysAllowFlatten: true,
    alwaysAllowMoveStop: true,
    allowEarlyExits: true,
    allowFirstFewExitsCount: 2,
};
const baConfigs: TradingPlans.PlanConfigs = {
    size: 0.24,
    deferTradingInSeconds: 0,
    stopTradingAfterSeconds: 0,
    requireReversal: true,
    alwaysAllowFlatten: true,
    alwaysAllowMoveStop: true,
    allowEarlyExits: false,
    allowFirstFewExitsCount: 4,
};
const pyplConfigs: TradingPlans.PlanConfigs = {
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
const baTarget: TradingPlans.ExitTargets = {
    initialTargets: {
        priceLevels: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        rrr: [1.5, 1.6, 1.8, 1.9, 2, 2, 3, 3, 3, 3],
        dailyRanges: [1, 1, 1.5, 1.5, 1.9, 1.9, 1.9, 1.9, 1.9, 2],
    },
    minimumTargets: {
        priceLevels: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        rrr: [1.5, 1.6, 1.8, 1.9, 2, 2, 2, 2, 2, 2],
        dailyRanges: [1, 1, 1, 1, 1.1, 1.2, 1.3, 1.4, 1.5, 1.5],
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
    'DJT',
    'BA',
    'PYPL'
];

export const stocksTradingPlans: TradingPlans.TradingPlans[] = [
    {
        symbol: 'DJT',
        analysis: {
            newsQualityAndFreshness: 1, gapType: TradingPlans.GapType.Outside,
            relativeVolumeAndCandleSmoothness: 2,
            cleanVwapTrend: 2, dailyChartStory: 2,
            gapSize: 8,
            weeklychart: "range top",
            dailyChart: "uptrend",
            hourlyChart: "uptrend",
            premarketChart: "above vwap without pullback",
            keyLevels: [56.55],
            choppyOpenRangeHigh: 20,
            choppyOpenRangeLow: 10,
        },
        autoFlip: false,
        vwapCorrection: { volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: Constants.marketCaps.DJT,
        atr: {
            average: 2.5,
            mutiplier: 2,
            minimumMultipler: 1.5,
        },
        disableShortIfOpenAbove: 0,
        disableLongIfOpenBelow: 0,
        keyLevels: {
            momentumStartForLong: 50,
            momentumStartForShort: 60,
        },
        summary: `
        too extended on both daily chart and premarket. overall short biased.
        `,
        setups: [
            {
                range: "below vwap", quality: "A",
                entrySummary: `
                gap up and fade, short firsr breakdown.
                `,
                exitTargets: `1.5 - 2 ATR move, eventually gap fill`
            }, {
                range: "above vwap, below 56.55", quality: "A",
                entrySummary: `
                gap up under resistance, let it pop and short green to red < 60
                `,
                exitTargets: `vwap first, if making new high above, need to flip long. if lost vwap, much lower`
            },
            {
                range: "above 56.55", quality: "B",
                entrySummary: `
                1. short after close below vwap or 56.55
                2. first dip into 56.55 can be bought up, long red to green < 60. 
                `,
                exitTargets: `long to 58, short to vwap`
            }
        ],
        short: {
            reasons: [
                "profit taking",
            ],
            profitTakingExhaust60Plan: { includeOpenChase: true, targets: stock1Target, planConfigs: djtConfigs },
            falseBreakoutPlan: { price: 0, targets: stock1Target, planConfigs: djtConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock1Target, planConfigs: djtConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, includeSecondNewHigh: true, targets: stock1Target, planConfigs: djtConfigs },
            firstRetracementPlan: { targets: stock1Target, planConfigs: djtConfigs },
            deferredBreakoutPlan: { targets: stock1Target, planConfigs: djtConfigs },
        },
        long: {
            reasons: [
                "continuation uptrend",
            ],
            openDriveContinuation60Plan: { requireOpenBetterThanVwap: true, disableIfOpenWorseThanPrice: 56.55, targets: stock1Target, planConfigs: djtConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock1Target, planConfigs: djtConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, includeSecondNewHigh: true, targets: stock1Target, planConfigs: djtConfigs },
            deferredBreakoutPlan: { targets: stock1Target, planConfigs: djtConfigs },
        },
    },
    {
        symbol: 'BA',
        analysis: {
            newsQualityAndFreshness: 2, gapType: TradingPlans.GapType.Outside,
            relativeVolumeAndCandleSmoothness: 2,
            cleanVwapTrend: 1, dailyChartStory: 1,
            gapSize: 2,
            weeklychart: "downtrend",
            dailyChart: "weak bounce",
            hourlyChart: "range",
            premarketChart: "below vwap",
            keyLevels: [150.61, 146],
            choppyOpenRangeHigh: 20,
            choppyOpenRangeLow: 10,
        },
        autoFlip: false,
        vwapCorrection: { volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: Constants.marketCaps.BA,
        atr: {
            average: 4.5,
            mutiplier: 1,
            minimumMultipler: 1,
        },
        disableShortIfOpenAbove: 0,
        disableLongIfOpenBelow: 0,
        keyLevels: {
            momentumStartForLong: 151,
            momentumStartForShort: 151,
        },
        summary: `
        expect it to sell to 143, which is the offering price. 
        `,
        setups: [
            {
                range: "below vwap", quality: "A",
                entrySummary: `
                momentum short the first breakdown.
                `,
                exitTargets: `143`
            }, {
                range: "above vwap, below 150", quality: "B",
                entrySummary: `
                first new low on 1 or 5 minutes
                above vwap, not the best trade, there are many other good stocks to trade.
                `,
                exitTargets: `vwap, then 146, then 143`
            }
        ],
        short: {
            reasons: [
                "bad news",
            ],
            openDriveContinuation60Plan: { requireOpenBetterThanVwap: true, disableIfOpenWorseThanPrice: 0, targets: baTarget, planConfigs: baConfigs },
            falseBreakoutPlan: { price: 154.52, targets: baTarget, planConfigs: baConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: baTarget, planConfigs: baConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, includeSecondNewHigh: true, targets: baTarget, planConfigs: baConfigs },
            firstRetracementPlan: { targets: baTarget, planConfigs: baConfigs },
            deferredBreakoutPlan: { targets: baTarget, planConfigs: baConfigs },
        },
        long: {
            reasons: [
                "none",
            ],
        },
    },
    {
        symbol: 'PYPL',
        analysis: {
            newsQualityAndFreshness: 2, gapType: TradingPlans.GapType.Outside,
            relativeVolumeAndCandleSmoothness: 2,
            cleanVwapTrend: 1, dailyChartStory: 2,
            gapSize: 1,
            weeklychart: "a",
            dailyChart: "b",
            hourlyChart: "c",
            premarketChart: "d",
            keyLevels: [80],
            choppyOpenRangeHigh: 20,
            choppyOpenRangeLow: 10,
        },
        autoFlip: false,
        vwapCorrection: { volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: Constants.marketCaps.PYPL,
        atr: {
            average: 1.8,
            mutiplier: 2,
            minimumMultipler: 1,
        },
        disableShortIfOpenAbove: 0,
        disableLongIfOpenBelow: 0,
        keyLevels: {
            momentumStartForLong: 82,
            momentumStartForShort: 82,
        },
        summary: `
        below both vwap and yesterday high low
        `,
        setups: [
            {
                range: "below both vwap and yesterday high low", quality: "A",
                entrySummary: `
                short first breakdown
                `,
                exitTargets: `1-2 ATR`
            }, {
                range: "above vwap", quality: "B",
                entrySummary: `
                no trade
                `,
                exitTargets: `no trade`
            }
        ],
        short: {
            reasons: [
                "lost all levels",
                ""
            ],
            openDriveContinuation60Plan: { requireOpenBetterThanVwap: true, disableIfOpenWorseThanPrice: 0, targets: stock3Target, planConfigs: pyplConfigs },
            falseBreakoutPlan: { price: 0, targets: stock3Target, planConfigs: pyplConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock3Target, planConfigs: pyplConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, includeSecondNewHigh: true, targets: stock3Target, planConfigs: pyplConfigs },
            firstRetracementPlan: { targets: stock3Target, planConfigs: pyplConfigs },
            deferredBreakoutPlan: { targets: stock3Target, planConfigs: pyplConfigs },
        },
        long: {
            reasons: [
                "none",
                ""
            ],

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