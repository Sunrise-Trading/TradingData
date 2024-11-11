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
    allowFirstFewExitsCount: 5,
};
const smciConfigs: TradingPlans.PlanConfigs = {
    size: 0.26,
    deferTradingInSeconds: 0,
    stopTradingAfterSeconds: 0,
    requireReversal: true,
    alwaysAllowFlatten: true,
    alwaysAllowMoveStop: true,
    allowFirstFewExitsCount: 4,
};
const maraConfigs: TradingPlans.PlanConfigs = {
    size: 0.26,
    deferTradingInSeconds: 0,
    stopTradingAfterSeconds: 0,
    requireReversal: true,
    alwaysAllowFlatten: true,
    alwaysAllowMoveStop: true,
    allowFirstFewExitsCount: 4,
};
const pltrConfigs: TradingPlans.PlanConfigs = {
    size: 0.26,
    deferTradingInSeconds: 0,
    stopTradingAfterSeconds: 0,
    requireReversal: true,
    alwaysAllowFlatten: true,
    alwaysAllowMoveStop: true,
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
    'TSLA',
    'SMCI'
];

export const stocksTradingPlans: TradingPlans.TradingPlans[] = [
    {
        symbol: 'TSLA',
        analysis: {
            newsQualityAndFreshness: 1, gapType: TradingPlans.GapType.Outside,
            relativeVolumeAndCandleSmoothness: 2,
            cleanVwapTrend: 1, dailyChartStory: 1,
            gapSize: 13,
            weeklychart: "range breakout",
            dailyChart: "extended from short term moving average",
            hourlyChart: "uptrend",
            premarketChart: "below vwap",
            keyLevels: [340, 346.44],
            choppyOpenRangeHigh: 0,
            choppyOpenRangeLow: 0,
        },
        autoFlip: false,
        vwapCorrection: { volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: Constants.marketCaps.TSLA,
        atr: {
            average: 8,
            mutiplier: 2,
            minimumMultipler: 1,
            maxRisk: 4,
        },
        disableShortIfOpenAbove: 0,
        disableLongIfOpenBelow: 0,
        keyLevels: {
            momentumStartForLong: 340,
            momentumStartForShort: 406,
        },
        summary: `
        too extended from daily chart, expect a big selloff from open
        `,
        setups: [
            {
                high: "vwap", low: "", title: "gap up and fade",
                isChoppy: false,
                range: "open below vwap", quality: "A",
                entrySummary: `
                green to red < 60
                `,
                exitTargets: `as long as it holds below vwap, can go much lower for gap fill. hold some with stop`
            }, {
                high: "", low: "vwap", title: "mixed open",
                isChoppy: true,
                range: "open above vwap", quality: "B",
                entrySummary: `
                already stayed below vwap for long. if open above vwap, it's last vwap change, wait for 2 minutes
                and look for first new low
                `,
                exitTargets: `scalp short`
            }
        ],
        short: {
            reasons: [
                "profit taking",
            ],
            profitTakingExhaust60Plan: { includeOpenChase: true, minDistanceToVwap: 1.8, targets: stock1Target, planConfigs: tslaConfigs },
            profitTakingFade60Plan: { enableAutoTrigger: false, onlyIfOpenBelow: 343.5, targets: stock1Target, planConfigs: tslaConfigs },
            falseBreakoutPlan: { price: 0, targets: stock1Target, planConfigs: tslaConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock1Target, planConfigs: tslaConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, includeSecondNewHigh: true, targets: stock1Target, planConfigs: tslaConfigs },
            firstRetracementPlan: { targets: stock1Target, planConfigs: tslaConfigs },
            deferredBreakoutPlan: { targets: stock1Target, planConfigs: tslaConfigs },
        },
        long: {
            reasons: [
                "momentum",
            ],
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
            cleanVwapTrend: 1, dailyChartStory: 1,
            gapSize: 0.5,
            weeklychart: "down",
            dailyChart: "down and bounced a bit",
            hourlyChart: "bounce",
            premarketChart: "below vwap",
            keyLevels: [23.76],
            choppyOpenRangeHigh: 0,
            choppyOpenRangeLow: 0,
        },
        autoFlip: false,
        vwapCorrection: { volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: Constants.marketCaps.SMCI,
        atr: {
            average: 2.5,
            mutiplier: 1,
            minimumMultipler: 1,
            maxRisk: 1,
        },
        disableShortIfOpenAbove: 0,
        disableLongIfOpenBelow: 0,
        keyLevels: {
            momentumStartForLong: 23.76,
            momentumStartForShort: 23.76,
        },
        summary: `
        looking for a second leg down
        `,
        setups: [
            {
                high: "vwap", low: "", title: "gap down selloff",
                isChoppy: false,
                range: "open below vwap", quality: "A",
                entrySummary: `
                green to red <60
                `,
                exitTargets: `22.5, once that breaks, much lower`
            },
        ],
        short: {
            reasons: [
                "2nd leg down",
            ],
            openDriveContinuation60Plan: { requireOpenBetterThanVwap: true, disableIfOpenWorseThanPrice: 0, targets: stock2Target, planConfigs: smciConfigs },
            falseBreakoutPlan: { price: 0, targets: stock2Target, planConfigs: smciConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock2Target, planConfigs: smciConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, includeSecondNewHigh: true, targets: stock2Target, planConfigs: smciConfigs },
            firstRetracementPlan: { targets: stock2Target, planConfigs: smciConfigs },
            deferredBreakoutPlan: { targets: stock2Target, planConfigs: smciConfigs },
        },
        long: {
            reasons: [
                "none",
            ],
            falseBreakoutPlan: { price: 0, targets: stock2Target, planConfigs: smciConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock2Target, planConfigs: smciConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, includeSecondNewHigh: true, targets: stock2Target, planConfigs: smciConfigs },
            firstRetracementPlan: { targets: stock2Target, planConfigs: smciConfigs },
            deferredBreakoutPlan: { targets: stock2Target, planConfigs: smciConfigs },
        },
    },
    {
        symbol: 'MARA',
        analysis: {
            newsQualityAndFreshness: 1, gapType: TradingPlans.GapType.Outside,
            relativeVolumeAndCandleSmoothness: 2,
            cleanVwapTrend: 2, dailyChartStory: 1,
            gapSize: 3,
            weeklychart: "range",
            dailyChart: "range breakout",
            hourlyChart: "range breakout",
            premarketChart: "below vwap",
            keyLevels: [23],
            choppyOpenRangeHigh: 0,
            choppyOpenRangeLow: 0,
        },
        autoFlip: false,
        vwapCorrection: { volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: Constants.marketCaps.MARA,
        atr: {
            average: 1.3,
            mutiplier: 1.5,
            minimumMultipler: 1,
            maxRisk: 0.5,
        },
        disableShortIfOpenAbove: 0,
        disableLongIfOpenBelow: 0,
        keyLevels: {
            momentumStartForLong: 20,
            momentumStartForShort: 25,
        },
        summary: `
        if stay below vwap, catch a green to red first
        `,
        setups: [
            {
                high: "vwap", low: "", title: "gap up and fade",
                isChoppy: false,
                range: "below vwap", quality: "A",
                entrySummary: `
                green to red < 60
                `,
                exitTargets: `gap fill`
            }, {
                high: "", low: "vwap", title: "choppy open",
                isChoppy: true,
                range: "above vwap", quality: "B",
                entrySummary: `
                wait for 2 minutes
                `,
                exitTargets: `1 ATR`
            }
        ],
        short: {
            reasons: [
                "profit taking",
            ],
            profitTakingFade60Plan: { enableAutoTrigger: false, onlyIfOpenBelow: 22.5, targets: stock3Target, planConfigs: maraConfigs },
            falseBreakoutPlan: { price: 0, targets: stock3Target, planConfigs: maraConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock3Target, planConfigs: maraConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, includeSecondNewHigh: true, targets: stock3Target, planConfigs: maraConfigs },
            firstRetracementPlan: { targets: stock3Target, planConfigs: maraConfigs },
            deferredBreakoutPlan: { targets: stock3Target, planConfigs: maraConfigs },
        },
        long: {
            reasons: [
                "momentum",
            ],
            falseBreakoutPlan: { price: 0, targets: stock3Target, planConfigs: maraConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock3Target, planConfigs: maraConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, includeSecondNewHigh: true, targets: stock3Target, planConfigs: maraConfigs },
            firstRetracementPlan: { targets: stock3Target, planConfigs: maraConfigs },
            deferredBreakoutPlan: { targets: stock3Target, planConfigs: maraConfigs },
        },
    },
    {
        symbol: 'PLTR',
        analysis: {
            newsQualityAndFreshness: 2, gapType: TradingPlans.GapType.Unknown,
            relativeVolumeAndCandleSmoothness: 2,
            cleanVwapTrend: 2, dailyChartStory: 2,
            gapSize: 2,
            weeklychart: "up",
            dailyChart: "up",
            hourlyChart: "up",
            premarketChart: "hold above vwap",
            keyLevels: [60],
            choppyOpenRangeHigh: 0,
            choppyOpenRangeLow: 0,
        },
        autoFlip: false,
        vwapCorrection: { volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: Constants.marketCaps.PLTR,
        atr: {
            average: 2,
            mutiplier: 1.5,
            minimumMultipler: 1,
            maxRisk: 0.5,
        },
        disableShortIfOpenAbove: 0,
        disableLongIfOpenBelow: 0,
        keyLevels: {
            momentumStartForLong: 60,
            momentumStartForShort: 70,
        },
        summary: `
        above vwap and 60, long first for a scalp
        `,
        setups: [
            {
                high: "61", low: "vwap", title: "gap up and go",
                isChoppy: false,
                range: "above vwap and 60", quality: "A",
                entrySummary: `
                red to green < 60
                `,
                exitTargets: `scalp`
            },
        ],
        short: {
            reasons: [
                "profit taking",
            ],
            falseBreakoutPlan: { price: 0, targets: stock4Target, planConfigs: pltrConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock4Target, planConfigs: pltrConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, includeSecondNewHigh: true, targets: stock4Target, planConfigs: pltrConfigs },
            firstRetracementPlan: { targets: stock4Target, planConfigs: pltrConfigs },
            deferredBreakoutPlan: { targets: stock4Target, planConfigs: pltrConfigs },
        },
        long: {
            reasons: [
                "gap up above key levels",
            ],
            openDriveContinuation60Plan: { requireOpenBetterThanVwap: true, disableIfOpenWorseThanPrice: 0, targets: stock4Target, planConfigs: pltrConfigs },
            falseBreakoutPlan: { price: 0, targets: stock4Target, planConfigs: pltrConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock4Target, planConfigs: pltrConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, includeSecondNewHigh: true, targets: stock4Target, planConfigs: pltrConfigs },
            firstRetracementPlan: { targets: stock4Target, planConfigs: pltrConfigs },
            deferredBreakoutPlan: { targets: stock4Target, planConfigs: pltrConfigs },
        },
    },
];