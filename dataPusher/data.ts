import * as TradingPlans from './models';
import * as Constants from './constants';

// futures, momentumSimple, tradeStationEquity, schwab
export const activeProfileName: string = "schwab";
export const tradingSettings: TradingPlans.TradingSettings = {
    equalWeightDivider: 4,
    useSingleOrderForEntry: true,
}
const cegConfigs: TradingPlans.PlanConfigs = {
    size: 0.24,
    deferTradingInSeconds: 0,
    stopTradingAfterSeconds: 0,
    requireReversal: true,
    alwaysAllowFlatten: true,
    alwaysAllowMoveStop: true,
    allowEarlyExits: true,
    allowFirstFewExitsCount: 2,
};
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
const nvdaConfigs: TradingPlans.PlanConfigs = {
    size: 0.24,
    deferTradingInSeconds: 0,
    stopTradingAfterSeconds: 0,
    requireReversal: true,
    alwaysAllowFlatten: true,
    alwaysAllowMoveStop: true,
    allowEarlyExits: true,
    allowFirstFewExitsCount: 2,
};
const tslaConfigs: TradingPlans.PlanConfigs = {
    size: 0.24,
    deferTradingInSeconds: 0,
    stopTradingAfterSeconds: 0,
    requireReversal: true,
    alwaysAllowFlatten: true,
    alwaysAllowMoveStop: true,
    allowEarlyExits: true,
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
    'CEG',
    'DJT',
    'NVDA',
    'TSLA',
];

export const stocksTradingPlans: TradingPlans.TradingPlans[] = [
    {
        symbol: 'CEG',
        analysis: {
            newsQualityAndFreshness: 2, gapType: TradingPlans.GapType.Outside,
            relativeVolumeAndCandleSmoothness: 1,
            cleanVwapTrend: 2, dailyChartStory: 2,
            gapSize: 16,
            weeklychart: "uptrend pullback",
            dailyChart: "rounding top",
            hourlyChart: "flat",
            premarketChart: "gap down and bounce",
            keyLevels: [233, 294.05],
            choppyOpenRangeHigh: 0,
            choppyOpenRangeLow: 0,
        },
        autoFlip: false,
        vwapCorrection: { volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: Constants.marketCaps.CEG,
        atr: {
            average: 8.9,
            mutiplier: 1.3,
            minimumMultipler: 1,
            maxRisk: 3,
        },
        disableShortIfOpenAbove: 0,
        disableLongIfOpenBelow: 0,
        keyLevels: {
            momentumStartForLong: 233,
            momentumStartForShort: 250,
        },
        summary: `
        range trading style today because it's in between 233 and 250. 
        `,
        setups: [
            {
                range: "near 250", quality: "B",
                entrySummary: `
                look for short pattern of 250 rejection
                `,
                exitTargets: `0.5 to 1 ATR`
            }, {
                range: "near 233", quality: "B",
                entrySummary: `
                look for long pattern to show support of 233
                `,
                exitTargets: `0.5 to 1 ATR`
            },
            {
                range: "open below 233", quality: "A",
                entrySummary: `
                short the first breakdown including 60 seconds
                `,
                exitTargets: `1 ATR to 1.5 ATR`
            }
        ],
        short: {
            reasons: [
                "earnings miss",
            ],
            openDriveContinuation60Plan: { requireOpenBetterThanVwap: true, disableIfOpenWorseThanPrice: 233, targets: stock1Target, planConfigs: cegConfigs },
            falseBreakoutPlan: { price: 249, targets: stock1Target, planConfigs: cegConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock1Target, planConfigs: cegConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, includeSecondNewHigh: true, targets: stock1Target, planConfigs: cegConfigs },
            firstRetracementPlan: { targets: stock1Target, planConfigs: cegConfigs },
            deferredBreakoutPlan: { targets: stock1Target, planConfigs: cegConfigs },
        },
        long: {
            reasons: [
                "gap down and bounce from support",
            ],
            falseBreakoutPlan: { price: 233, targets: stock1Target, planConfigs: cegConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock1Target, planConfigs: cegConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, includeSecondNewHigh: true, targets: stock1Target, planConfigs: cegConfigs },
            firstRetracementPlan: { targets: stock1Target, planConfigs: cegConfigs },
            deferredBreakoutPlan: { targets: stock1Target, planConfigs: cegConfigs },
        },
    },
    {
        symbol: 'DJT',
        analysis: {
            newsQualityAndFreshness: 1, gapType: TradingPlans.GapType.Outside,
            relativeVolumeAndCandleSmoothness: 2,
            cleanVwapTrend: 2, dailyChartStory: 2,
            gapSize: 1,
            weeklychart: "range backup and deep pullback",
            dailyChart: "rally and pullback near 50%",
            hourlyChart: "downtrend",
            premarketChart: "active above vwap and pullback to vwap, keep watching",
            keyLevels: [30.03],
            choppyOpenRangeHigh: 0,
            choppyOpenRangeLow: 0,
        },
        autoFlip: false,
        vwapCorrection: { volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: Constants.marketCaps.DJT,
        atr: {
            average: 4.9,
            mutiplier: 1,
            minimumMultipler: 1,
            maxRisk: 2,
        },
        disableShortIfOpenAbove: 0,
        disableLongIfOpenBelow: 0,
        keyLevels: {
            momentumStartForLong: 28,
            momentumStartForShort: 50,
        },
        summary: `
        can have a big move at the open. the best setup is price near key level 30
        `,
        setups: [
            {
                range: "open above 30 and vwap", quality: "A",
                entrySummary: `
                long the first breakout
                `,
                exitTargets: `has potential to swing into election`
            }, {
                range: "open below 30 and vwap", quality: "A",
                entrySummary: `
                short the first breakdown
                `,
                exitTargets: `a quickly sell off to near premarket low`
            }
        ],
        short: {
            reasons: [
                "less chance of Trump winning",
            ],
            openDriveContinuation60Plan: { requireOpenBetterThanVwap: true, disableIfOpenWorseThanPrice: 30, targets: stock2Target, planConfigs: djtConfigs },
            falseBreakoutPlan: { price: 0, targets: stock2Target, planConfigs: djtConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock2Target, planConfigs: djtConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, includeSecondNewHigh: true, targets: stock2Target, planConfigs: djtConfigs },
            firstRetracementPlan: { targets: stock2Target, planConfigs: djtConfigs },
            deferredBreakoutPlan: { targets: stock2Target, planConfigs: djtConfigs },
        },
        long: {
            reasons: [
                "speculation, above vwap most of time in premarket",
            ],
            openDriveContinuation60Plan: { requireOpenBetterThanVwap: true, disableIfOpenWorseThanPrice: 30, targets: stock2Target, planConfigs: djtConfigs },
            falseBreakoutPlan: { price: 0, targets: stock2Target, planConfigs: djtConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock2Target, planConfigs: djtConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, includeSecondNewHigh: true, targets: stock2Target, planConfigs: djtConfigs },
            firstRetracementPlan: { targets: stock2Target, planConfigs: djtConfigs },
            deferredBreakoutPlan: { targets: stock2Target, planConfigs: djtConfigs },
        },
    },
    {
        symbol: 'NVDA',
        analysis: {
            newsQualityAndFreshness: 1, gapType: TradingPlans.GapType.Outside,
            relativeVolumeAndCandleSmoothness: 2,
            cleanVwapTrend: 2, dailyChartStory: 1,
            gapSize: 1,
            weeklychart: "uptrend",
            dailyChart: "pullback in an uptrend",
            hourlyChart: "pullback and bounce",
            premarketChart: "gap up and fade below vwap",
            keyLevels: [137.31],
            choppyOpenRangeHigh: 0,
            choppyOpenRangeLow: 0,
        },
        autoFlip: false,
        vwapCorrection: { volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: Constants.marketCaps.NVDA,
        atr: {
            average: 4.6,
            mutiplier: 1,
            minimumMultipler: 1,
            maxRisk: 1.5,
        },
        disableShortIfOpenAbove: 0,
        disableLongIfOpenBelow: 0,
        keyLevels: {
            momentumStartForLong: 137,
            momentumStartForShort: 140,
        },
        summary: `
        having 2 clear key level: yesterday hihg 137.31 and vwap
        `,
        setups: [
            {
                range: "open above 137.31 and vwap", quality: "A",
                entrySummary: `
                long the first breakout
                `,
                exitTargets: `0.5 ATR, scalp due to inside daily range`
            }, {
                range: "between 137.31 and vwap", quality: "B",
                entrySummary: `
                going to be choppy at the open. skip first 2 minutes. unless 
                0. it touched 137.31 first and then breakout
                1. reversal using first new high/low
                2. wait for confirmation to reclaim vwap and go long. 
                first breakdown vwap needs to wait for a new low pullback, and then go long on the next breakout
                3. false breakdown of 137.31 and go long
                `,
                exitTargets: `0.5 ATR, scalp due to inside daily range`
            },
            {
                range: "open below 137.31 and vwap", quality: "A",
                entrySummary: `
                a quick green to red short for 1 R and fully exit
                `,
                exitTargets: `scalp 1 R`
            },
        ],
        short: {
            reasons: [
                "gap up and fade, below vwap most of time in premarket",
            ],
            openDriveContinuation60Plan: { requireOpenBetterThanVwap: true, disableIfOpenWorseThanPrice: 137.31, targets: stock3Target, planConfigs: nvdaConfigs },
            falseBreakoutPlan: { price: 0, targets: stock3Target, planConfigs: nvdaConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock3Target, planConfigs: nvdaConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, includeSecondNewHigh: true, targets: stock3Target, planConfigs: nvdaConfigs },
            firstRetracementPlan: { targets: stock3Target, planConfigs: nvdaConfigs },
            deferredBreakoutPlan: { targets: stock3Target, planConfigs: nvdaConfigs },
        },
        long: {
            reasons: [
                "dow jones inclusion",
            ],
            openDriveContinuation60Plan: { requireOpenBetterThanVwap: false, disableIfOpenWorseThanPrice: 137.31, targets: stock3Target, planConfigs: nvdaConfigs },
            falseBreakoutPlan: { price: 137.31, targets: stock3Target, planConfigs: nvdaConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock3Target, planConfigs: nvdaConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, includeSecondNewHigh: true, targets: stock3Target, planConfigs: nvdaConfigs },
            firstRetracementPlan: { targets: stock3Target, planConfigs: nvdaConfigs },
            deferredBreakoutPlan: { targets: stock3Target, planConfigs: nvdaConfigs },
        },
    },
    {
        symbol: 'TSLA',
        analysis: {
            newsQualityAndFreshness: 2, gapType: TradingPlans.GapType.Outside,
            relativeVolumeAndCandleSmoothness: 1,
            cleanVwapTrend: 1, dailyChartStory: 1,
            gapSize: 7,
            weeklychart: "range",
            dailyChart: "up and pullback",
            hourlyChart: "down",
            premarketChart: "weak bounce",
            keyLevels: [242.65],
            choppyOpenRangeHigh: 0,
            choppyOpenRangeLow: 0,
        },
        autoFlip: false,
        vwapCorrection: { volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: Constants.marketCaps.TSLA,
        atr: {
            average: 9,
            mutiplier: 1,
            minimumMultipler: 1,
            maxRisk: 2,
        },
        disableShortIfOpenAbove: 0,
        disableLongIfOpenBelow: 0,
        keyLevels: {
            momentumStartForLong: 242.65,
            momentumStartForShort: 250,
        },
        summary: `
        gap down near key support from earnings gap up 242.65 and weak bounce. 
        the reading is mixed. still above support, but the bounce is vwap and below vwap most of time.
        going to be a good setup unless near 242.65.
        expect a false breakdown of 242.65. 
        `,
        setups: [
            {
                range: "belowv vwap", quality: "B",
                entrySummary: `
                green to red < 60
                `,
                exitTargets: `quick scalp, keep stop tight`
            }, {
                range: "near 246", quality: "B",
                entrySummary: `
                yesterday high rejection
                `,
                exitTargets: `vwap`
            }, {
                range: "open below 242.65", quality: "A",
                entrySummary: `
                1. near below 242.65, short first breakdown < 60
                `,
                exitTargets: `1-2R`
            }
        ],
        short: {
            reasons: [
                "delivery numbers bad",
            ],
            openDriveContinuation60Plan: { requireOpenBetterThanVwap: true, disableIfOpenWorseThanPrice: 242.65, targets: stock4Target, planConfigs: tslaConfigs },
            falseBreakoutPlan: { price: 0, targets: stock4Target, planConfigs: tslaConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock4Target, planConfigs: tslaConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, includeSecondNewHigh: true, targets: stock4Target, planConfigs: tslaConfigs },
            firstRetracementPlan: { targets: stock4Target, planConfigs: tslaConfigs },
            deferredBreakoutPlan: { targets: stock4Target, planConfigs: tslaConfigs },
        },
        long: {
            reasons: [
                "gap down to support",
            ],
            falseBreakoutPlan: { price: 0, targets: stock4Target, planConfigs: tslaConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock4Target, planConfigs: tslaConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, includeSecondNewHigh: true, targets: stock4Target, planConfigs: tslaConfigs },
            firstRetracementPlan: { targets: stock4Target, planConfigs: tslaConfigs },
            deferredBreakoutPlan: { targets: stock4Target, planConfigs: tslaConfigs },
        },
    },
];