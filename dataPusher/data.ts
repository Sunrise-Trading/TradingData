import * as TradingPlans from './models';
import * as Constants from './constants';

// futures, momentumSimple, tradeStationEquity, schwab
export const activeProfileName: string = "schwab";
export const tradingSettings: TradingPlans.TradingSettings = {
    equalWeightDivider: 4,
    useSingleOrderForEntry: true,
}
const enphConfigs: TradingPlans.PlanConfigs = {
    size: 0.24,
    deferTradingInSeconds: 0,
    stopTradingAfterSeconds: 0,
    requireReversal: true,
    alwaysAllowFlatten: true,
    alwaysAllowMoveStop: true,
    allowEarlyExits: false,
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
    allowFirstFewExitsCount: 2,
};
const sbuxConfigs: TradingPlans.PlanConfigs = {
    size: 0.24,
    deferTradingInSeconds: 0,
    stopTradingAfterSeconds: 0,
    requireReversal: true,
    alwaysAllowFlatten: true,
    alwaysAllowMoveStop: true,
    allowEarlyExits: false,
    allowFirstFewExitsCount: 2,
};
const mcdConfigs: TradingPlans.PlanConfigs = {
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
    'ENPH',
    'BA',
    'SBUX',
    'MCD',
];

export const stocksTradingPlans: TradingPlans.TradingPlans[] = [
    {
        symbol: 'ENPH',
        analysis: {
            newsQualityAndFreshness: 2, gapType: TradingPlans.GapType.Outside,
            relativeVolumeAndCandleSmoothness: 2,
            cleanVwapTrend: 2, dailyChartStory: 2,
            gapSize: 16,
            weeklychart: "downtrend and range at bottom",
            dailyChart: "downtrend and range at bottom",
            hourlyChart: "steps down",
            premarketChart: "weak below vwap",
            keyLevels: [79.14],
            choppyOpenRangeHigh: 2,
            choppyOpenRangeLow: 1,
        },
        autoFlip: false,
        vwapCorrection: { volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: Constants.marketCaps.ENPH,
        atr: {
            average: 4.28,
            mutiplier: 1.5,
            minimumMultipler: 1,
        },
        disableShortIfOpenAbove: 0,
        disableLongIfOpenBelow: 0,
        keyLevels: {
            momentumStartForLong: 79.14,
            momentumStartForShort: 79.14,
        },
        summary: `
        gap down too much, need to wait for a pop and then short first breakdown.
        if open near below vwap, also allow first 60 seconds.
        `,
        setups: [
            {
                range: "near below vwap", quality: "A",
                entrySummary: `
                green to red < 60
                `,
                exitTargets: `1 ATR, then 73`
            }, {
                range: "below vwap", quality: "A",
                entrySummary: `
                green to red > 60, first new low on 1 minute, 5 minute.
                `,
                exitTargets: `1 ATR, then 73`
            },
        ],
        short: {
            reasons: [
                "gap down below support",
            ],
            openDriveContinuation60Plan: { requireOpenBetterThanVwap: true, disableIfOpenWorseThanPrice: 78, targets: stock1Target, planConfigs: enphConfigs },
            falseBreakoutPlan: { price: 0, targets: stock1Target, planConfigs: enphConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock1Target, planConfigs: enphConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, includeSecondNewHigh: true, targets: stock1Target, planConfigs: enphConfigs },
            firstRetracementPlan: { targets: stock1Target, planConfigs: enphConfigs },
            deferredBreakoutPlan: { targets: stock1Target, planConfigs: enphConfigs },
        },
        long: {
            reasons: [
                "short squeeze",
            ],
            falseBreakoutPlan: { price: 0, targets: stock1Target, planConfigs: enphConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock1Target, planConfigs: enphConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, includeSecondNewHigh: true, targets: stock1Target, planConfigs: enphConfigs },
            firstRetracementPlan: { targets: stock1Target, planConfigs: enphConfigs },
            deferredBreakoutPlan: { targets: stock1Target, planConfigs: enphConfigs },
        },
    },
    {
        symbol: 'BA',
        analysis: {
            newsQualityAndFreshness: 2, gapType: TradingPlans.GapType.Outside,
            relativeVolumeAndCandleSmoothness: 1,
            cleanVwapTrend: 1, dailyChartStory: 1,
            gapSize: 2,
            weeklychart: "downtrend bounce",
            dailyChart: "downtrend bounce",
            hourlyChart: "range",
            premarketChart: "below vwap",
            keyLevels: [158.36],
            choppyOpenRangeHigh: 20,
            choppyOpenRangeLow: 10,
        },
        autoFlip: false,
        vwapCorrection: { volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: Constants.marketCaps.BA,
        atr: {
            average: 4.3,
            mutiplier: 1,
            minimumMultipler: 1,
        },
        disableShortIfOpenAbove: 0,
        disableLongIfOpenBelow: 0,
        keyLevels: {
            momentumStartForLong: 160,
            momentumStartForShort: 158.36,
        },
        summary: `
        only trade around the level of 158.36
        `,
        setups: [
            {
                range: "open below 158.36", quality: "A",
                entrySummary: `
                short firstr breakdown
                `,
                exitTargets: `small partial at premarket low, then 155`
            }, {
                range: "above 158.36", quality: "B",
                entrySummary: `
                short after a confirmed breakdown. 1 candle close below, short next breakdown
                `,
                exitTargets: `small partial at premarket low, then 155`
            }
        ],
        short: {
            reasons: [
                "lost support",
            ],
            openDriveContinuation60Plan: { requireOpenBetterThanVwap: true, disableIfOpenWorseThanPrice: 158.36, targets: stock2Target, planConfigs: baConfigs },
            levelBreakout: { entryPrice: 158.36, targets: stock2Target, planConfigs: baConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock2Target, planConfigs: baConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, includeSecondNewHigh: true, targets: stock2Target, planConfigs: baConfigs },
            firstRetracementPlan: { targets: stock2Target, planConfigs: baConfigs },
            deferredBreakoutPlan: { targets: stock2Target, planConfigs: baConfigs },
        },
        long: {
            reasons: [
                "none",
            ],

        },
    },
    {
        symbol: 'SBUX',
        analysis: {
            newsQualityAndFreshness: 2, gapType: TradingPlans.GapType.Outside,
            relativeVolumeAndCandleSmoothness: 1,
            cleanVwapTrend: 2, dailyChartStory: 2,
            gapSize: 4,
            weeklychart: "range",
            dailyChart: "range",
            hourlyChart: "range",
            premarketChart: "above vwap",
            keyLevels: [93.66],
            choppyOpenRangeHigh: 20,
            choppyOpenRangeLow: 10,
        },
        autoFlip: false,
        vwapCorrection: { volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: Constants.marketCaps.SBUX,
        atr: {
            average: 1.7,
            mutiplier: 1.5,
            minimumMultipler: 1,
        },
        disableShortIfOpenAbove: 0,
        disableLongIfOpenBelow: 0,
        keyLevels: {
            momentumStartForLong: 93.66,
            momentumStartForShort: 94,
        },
        summary: `
        gap down below 93.66, already lost support, short only. 
        `,
        setups: [
            {
                range: "above vwap", quality: "B",
                entrySummary: `
                some strength in premarket, wait for pop into 93.66.
                `,
                exitTargets: `90.88`
            }, {
                range: "below vwap", quality: "B",
                entrySummary: `
                short first breakdown after a green. include 60 seconds
                `,
                exitTargets: `90.88`
            },
        ],
        short: {
            reasons: [
                "gap down below support",
            ],
            openDriveContinuation60Plan: { requireOpenBetterThanVwap: true, disableIfOpenWorseThanPrice: 0, targets: stock3Target, planConfigs: sbuxConfigs },
            falseBreakoutPlan: { price: 0, targets: stock3Target, planConfigs: sbuxConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock3Target, planConfigs: sbuxConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, includeSecondNewHigh: true, targets: stock3Target, planConfigs: sbuxConfigs },
            firstRetracementPlan: { targets: stock3Target, planConfigs: sbuxConfigs },
            deferredBreakoutPlan: { targets: stock3Target, planConfigs: sbuxConfigs },
        },
        long: {
            reasons: [
                "none",
            ],
        },
    },
    {
        symbol: 'MCD',
        analysis: {
            newsQualityAndFreshness: 2, gapType: TradingPlans.GapType.Outside,
            relativeVolumeAndCandleSmoothness: 1,
            cleanVwapTrend: 1, dailyChartStory: 2,
            gapSize: 24,
            weeklychart: "uptrend",
            dailyChart: "uptrend",
            hourlyChart: "uptrend",
            premarketChart: "mixed around vwap",
            keyLevels: [296],
            choppyOpenRangeHigh: 20,
            choppyOpenRangeLow: 10,
        },
        autoFlip: false,
        vwapCorrection: { volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: Constants.marketCaps.MCD,
        atr: {
            average: 3.75,
            mutiplier: 1.8,
            minimumMultipler: 1,
        },
        disableShortIfOpenAbove: 0,
        disableLongIfOpenBelow: 0,
        keyLevels: {
            momentumStartForLong: 296,
            momentumStartForShort: 298,
        },
        summary: `
        gap down below 50 moving average. let it make a pop first. because long term trend is up, 
        first dip gets bounght up. then short the new low.
        `,
        setups: [
            {
                range: "below 296", quality: "A",
                entrySummary: `
                short first new low. at 296-298, look for shorts.
                `,
                exitTargets: `1.5 ATR move`
            }, {
                range: "below vwap", quality: "B",
                entrySummary: `
                don't chase shorts, already gap down bigh on an uptrend stock.
                `,
                exitTargets: `1.5 ATR move`
            }
        ],
        short: {
            reasons: [
                "fear, lost support",
            ],
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock4Target, planConfigs: mcdConfigs },

            firstNewHighPlan: { enableAutoTrigger: false, includeSecondNewHigh: true, targets: stock4Target, planConfigs: mcdConfigs },
            deferredBreakoutPlan: { targets: stock4Target, planConfigs: mcdConfigs },
        },
        long: {
            reasons: [
                "uptrend",
            ],
        },
    },
];