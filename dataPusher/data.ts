import * as TradingPlans from './models';
import * as Constants from './constants';

// futures, momentumSimple, tradeStationEquity, schwab
export const activeProfileName: string = "schwab";
export const tradingSettings: TradingPlans.TradingSettings = {
    equalWeightDivider: 4,
    useSingleOrderForEntry: true,
}
const nflxConfigs: TradingPlans.PlanConfigs = {
    size: 0.24,
    deferTradingInSeconds: 0,
    stopTradingAfterSeconds: 0,
    requireReversal: true,
    alwaysAllowFlatten: true,
    alwaysAllowMoveStop: true,
    allowEarlyExits: true,
    allowFirstFewExitsCount: 2,
};
const aaplConfigs: TradingPlans.PlanConfigs = {
    size: 0.24,
    deferTradingInSeconds: 0,
    stopTradingAfterSeconds: 0,
    requireReversal: true,
    alwaysAllowFlatten: true,
    alwaysAllowMoveStop: true,
    allowEarlyExits: true,
    allowFirstFewExitsCount: 2,
};
const cvsConfigs: TradingPlans.PlanConfigs = {
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
    alwaysAllowFlatten: false,
    alwaysAllowMoveStop: false,
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
    'NFLX',
    'CVS',
    'AAPL'
];

export const stocksTradingPlans: TradingPlans.TradingPlans[] = [
    {
        symbol: 'NFLX',
        analysis: {
            newsQualityAndFreshness: 2, gapType: TradingPlans.GapType.Outside,
            relativeVolumeAndCandleSmoothness: 2,
            cleanVwapTrend: 2, dailyChartStory: -2,
            gapSize: 50,
            weeklychart: "uptrend",
            dailyChart: "range",
            hourlyChart: "downtrend",
            premarketChart: "hold above vwap",
            keyLevels: [734.8, 736],
            choppyOpenRangeHigh: 0,
            choppyOpenRangeLow: 0,
        },
        autoFlip: false,
        vwapCorrection: { volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: Constants.marketCaps.NFLX,
        atr: {
            average: 15,
            mutiplier: 1.5,
            minimumMultipler: 1,
        },
        disableShortIfOpenAbove: 0,
        disableLongIfOpenBelow: 0,
        keyLevels: {
            momentumStartForLong: 720,
            momentumStartForShort: 736,
        },
        summary: `
        gap above vwap but below all time high 736. 
        `,
        setups: [
            {
                range: "open below both 736 and vwap", quality: "A",
                entrySummary: `
                gap up and fade, short the first breakdown. 
                or short with open chase and use premarket high as stop
                `,
                exitTargets: `725 is the first target from yesterday reaction high`
            }, {
                range: "open between vwap and 736", quality: "B",
                entrySummary: `
                1. 736 breakout, let one candle closed above 736, then go long in the next breakout
                2. 736 false breakout, first minute pop into 736 and short green to red. because open above vwap, so must have a false breakout.
                `,
                exitTargets: ``
            }, {
                range: "open above both 736 and vwap", quality: "A+",
                entrySummary: `
                gap up and go, long the first breakout.
                `,
                exitTargets: `above all time high, no resistance, must wait for 1 ATR to take profit`
            },
        ],
        short: {
            reasons: [
                "profit taking friday",
            ],
            profitTakingExhaust60Plan: { includeOpenChase: true, targets: stock1Target, planConfigs: nflxConfigs },
            falseBreakoutPlan: { price: 736, targets: stock1Target, planConfigs: nflxConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock1Target, planConfigs: nflxConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, includeSecondNewHigh: true, targets: stock1Target, planConfigs: nflxConfigs },
            firstRetracementPlan: { targets: stock1Target, planConfigs: nflxConfigs },
            deferredBreakoutPlan: { targets: stock1Target, planConfigs: nflxConfigs },
        },
        long: {
            reasons: [
                "good earnings",
                "above vwap in premarket, and above yesterday reaction high"
            ],
            openDriveContinuation60Plan: { requireOpenBetterThanVwap: true, disableIfOpenWorseThanPrice: 0, targets: stock1Target, planConfigs: nflxConfigs },
            levelBreakout: { entryPrice: 736, targets: stock1Target, planConfigs: nflxConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock1Target, planConfigs: nflxConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, includeSecondNewHigh: true, targets: stock1Target, planConfigs: nflxConfigs },
            firstRetracementPlan: { targets: stock1Target, planConfigs: nflxConfigs },
            deferredBreakoutPlan: { targets: stock1Target, planConfigs: nflxConfigs },
        },
    },
    {
        symbol: 'AAPL',
        analysis: {
            newsQualityAndFreshness: 2, gapType: TradingPlans.GapType.Outside,
            relativeVolumeAndCandleSmoothness: 1,
            cleanVwapTrend: 1, dailyChartStory: 1,
            gapSize: 0,
            weeklychart: "range",
            dailyChart: "range",
            hourlyChart: "range",
            premarketChart: "above vwap so far",
            keyLevels: [237.49],
            choppyOpenRangeHigh: 0,
            choppyOpenRangeLow: 0,
        },
        autoFlip: false,
        vwapCorrection: { volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: Constants.marketCaps.AAPL,
        atr: {
            average: 4.39,
            mutiplier: 1,
            minimumMultipler: 1,
        },
        disableShortIfOpenAbove: 0,
        disableLongIfOpenBelow: 0,
        keyLevels: {
            momentumStartForLong: 234,
            momentumStartForShort: 237.49,
        },
        summary: `
        only trade around key level all time high or a perfect red to green
        `,
        setups: [
            {
                range: "open above vwap", quality: "B",
                entrySummary: `
                long the perfect red to green after 1 minute
                `,
                exitTargets: `
                first target is all time high, if breakout that, more room for the upside
                `
            }, {
                range: "rest", quality: "A",
                entrySummary: `
                1. all timehigh breakout, let 1 minute close above, long the next breakout
                2. all time high false breakout, short after break and comes back below.
                `,
                exitTargets: `back to low of the day like NVDA yesterday`
            }
        ],
        short: {
            reasons: [
                "all time high false breakout",
            ],
            falseBreakoutPlan: { price: 237.49, targets: stock2Target, planConfigs: aaplConfigs },
        },
        long: {
            reasons: [
                "all time high breakout",
                ""
            ],
            levelBreakout: { entryPrice: 237.49, targets: stock2Target, planConfigs: aaplConfigs },
        },
    },
    {
        symbol: 'CVS',
        analysis: {
            newsQualityAndFreshness: 2, gapType: TradingPlans.GapType.Outside,
            relativeVolumeAndCandleSmoothness: 2,
            cleanVwapTrend: -2, dailyChartStory: 2,
            gapSize: 4,
            weeklychart: "downtrend",
            dailyChart: "uptrend",
            hourlyChart: "stepping down",
            premarketChart: "rally above vwap and 2 dollar above vwap extended",
            keyLevels: [60],
            choppyOpenRangeHigh: 0,
            choppyOpenRangeLow: 0,
        },
        autoFlip: false,
        vwapCorrection: { volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: Constants.marketCaps.CVS,
        atr: {
            average: 1.7,
            mutiplier: 2,
            minimumMultipler: 1,
        },
        disableShortIfOpenAbove: 0,
        disableLongIfOpenBelow: 0,
        keyLevels: {
            momentumStartForLong: 55,
            momentumStartForShort: 60,
        },
        summary: `
        gap down and already bounced from support, very strong, but expect a first selloff
        `,
        setups: [
            {
                range: "open near 60 but below 60", quality: "A",
                entrySummary: `
                let it open with a small green and short the green to red < 60
                `,
                exitTargets: `vwap`
            }, {
                range: "open between 60 and vwap", quality: "C",
                entrySummary: `
                can go both ways, no trade
                `,
                exitTargets: `no trade`
            }
        ],
        short: {
            reasons: [
                "gap down selloff",
            ],
            openDriveContinuation60Plan: { requireOpenBetterThanVwap: false, disableIfOpenWorseThanPrice: 60, targets: stock3Target, planConfigs: cvsConfigs },
            falseBreakoutPlan: { price: 0, targets: stock3Target, planConfigs: cvsConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock3Target, planConfigs: cvsConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, includeSecondNewHigh: true, targets: stock3Target, planConfigs: cvsConfigs },
            firstRetracementPlan: { targets: stock3Target, planConfigs: cvsConfigs },
            deferredBreakoutPlan: { targets: stock3Target, planConfigs: cvsConfigs },
        },
        long: {
            reasons: [
                "",
                ""
            ],
            falseBreakoutPlan: { price: 0, targets: stock3Target, planConfigs: cvsConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock3Target, planConfigs: cvsConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, includeSecondNewHigh: true, targets: stock3Target, planConfigs: cvsConfigs },
            firstRetracementPlan: { targets: stock3Target, planConfigs: cvsConfigs },
            deferredBreakoutPlan: { targets: stock3Target, planConfigs: cvsConfigs },
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