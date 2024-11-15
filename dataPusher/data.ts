import * as TradingPlans from './models';
import * as Constants from './constants';

// futures, momentumSimple, tradeStationEquity, schwab
export const activeProfileName: string = "schwab";
export const tradingSettings: TradingPlans.TradingSettings = {
    equalWeightDivider: 4,
    useSingleOrderForEntry: true,
}
export const defaultSize = 0.264;
const amat: TradingPlans.PlanConfigs = {
    size: defaultSize,
    deferTradingInSeconds: 0,
    stopTradingAfterSeconds: 0,
    requireReversal: true,
    alwaysAllowFlatten: true,
    alwaysAllowMoveStop: true,
    allowFirstFewExitsCount: 5,
};
const pltrConfigs: TradingPlans.PlanConfigs = {
    size: defaultSize,
    deferTradingInSeconds: 0,
    stopTradingAfterSeconds: 0,
    requireReversal: true,
    alwaysAllowFlatten: true,
    alwaysAllowMoveStop: true,
    allowFirstFewExitsCount: 5,
};
const babaConfigs: TradingPlans.PlanConfigs = {
    size: defaultSize,
    deferTradingInSeconds: 0,
    stopTradingAfterSeconds: 0,
    requireReversal: true,
    alwaysAllowFlatten: true,
    alwaysAllowMoveStop: true,
    allowFirstFewExitsCount: 10,
};
const gmeConfigs: TradingPlans.PlanConfigs = {
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
    'AMAT',
    'PLTR',
    'GME',
    'BABA',
];

export const stocksTradingPlans: TradingPlans.TradingPlans[] = [
    {
        symbol: 'AMAT',
        analysis: {
            newsQualityAndFreshness: 2, gapType: TradingPlans.GapType.Outside,
            relativeVolumeAndCandleSmoothness: 2,
            cleanVwapTrend: 2, dailyChartStory: 2,
            gapSize: 17,
            weeklychart: "range",
            dailyChart: "range",
            hourlyChart: "range",
            premarketChart: "below vwap",
            keyLevels: [171.61, 172.5],
            choppyOpenRangeHigh: 0,
            choppyOpenRangeLow: 0,
        },
        autoFlip: false,
        vwapCorrection: { volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: Constants.marketCaps.AMAT,
        atr: {
            average: 5.54,
            mutiplier: 1.2,
            minimumMultipler: 1,
            maxRisk: 2.5,
        },
        disableShortIfOpenAbove: 0,
        disableLongIfOpenBelow: 0,
        keyLevels: {
            momentumStartForLong: 171.61,
            momentumStartForShort: 175,
        },
        summary: `
        the best setup is stay below 171.61 and vwap. short green to red <>60.
        if near vwap, allow first 60 seconds.
        if between vwap and 171.61, wait.
        if above 171.61, long
        `,
        setups: [
            {
                high: "vwap", low: "", title: "gap down selloff",
                isChoppy: false,
                range: "below vwap", quality: "A",
                entrySummary: `
                short first breakdown
                `,
                exitTargets: `165`
            }, {
                high: "171.61", low: "vwap", title: "choppy",
                isChoppy: true,
                range: "between vwap and 171.61", quality: "B",
                entrySummary: `
                wait
                `,
                exitTargets: `wait`
            }
        ],
        short: {
            reasons: [
                "gap down below key level",
            ],
            openDriveContinuation60Plan: { requireOpenBetterThanVwap: true, disableIfOpenWorseThanPrice: 0, targets: stock1Target, planConfigs: amat },
            falseBreakoutPlan: { price: 0, targets: stock1Target, planConfigs: amat },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock1Target, planConfigs: amat },
            firstNewHighPlan: { enableAutoTrigger: false, includeSecondNewHigh: true, targets: stock1Target, planConfigs: amat },
            firstRetracementPlan: { targets: stock1Target, planConfigs: amat },
            deferredBreakoutPlan: { targets: stock1Target, planConfigs: amat },
        },
        long: {
            reasons: [
                "gap down to support",
            ],
            openDriveContinuation60Plan: { requireOpenBetterThanVwap: true, disableIfOpenWorseThanPrice: 171.61, targets: stock1Target, planConfigs: amat },
            falseBreakoutPlan: { price: 0, targets: stock1Target, planConfigs: amat },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock1Target, planConfigs: amat },
            firstNewHighPlan: { enableAutoTrigger: false, includeSecondNewHigh: true, targets: stock1Target, planConfigs: amat },
            firstRetracementPlan: { targets: stock1Target, planConfigs: amat },
            deferredBreakoutPlan: { targets: stock1Target, planConfigs: amat },
        },
    },
    {
        symbol: 'PLTR',
        analysis: {
            newsQualityAndFreshness: 1, gapType: TradingPlans.GapType.Outside,
            relativeVolumeAndCandleSmoothness: 1,
            cleanVwapTrend: 0, dailyChartStory: 1,
            gapSize: 1,
            weeklychart: "up",
            dailyChart: "up",
            hourlyChart: "range",
            premarketChart: "mixed vwap",
            keyLevels: [61.17],
            choppyOpenRangeHigh: 0,
            choppyOpenRangeLow: 0,
        },
        autoFlip: false,
        vwapCorrection: { volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: Constants.marketCaps.PLTR,
        atr: {
            average: 2.46,
            mutiplier: 1,
            minimumMultipler: 1,
            maxRisk: 1,
        },
        disableShortIfOpenAbove: 0,
        disableLongIfOpenBelow: 0,
        keyLevels: {
            momentumStartForLong: 60,
            momentumStartForShort: 62,
        },
        summary: `
        mixed vwap, need to wait. take a perfect clean red to green > 60 above vwap.
        `,
        setups: [
            {
                high: "", low: "61.17", title: "gap up and go",
                isChoppy: false,
                range: "above yesterday high", quality: "A",
                entrySummary: `
                red to green < 60
                `,
                exitTargets: `62`
            }, {
                high: "61.17", low: "vwap", title: "choppy open",
                isChoppy: true,
                range: "between 61.17 and vwap", quality: "B",
                entrySummary: `
                confirmed breakout 61.17. unless a clean red to green > 60
                `,
                exitTargets: `61.17, then try re-entry if breakout 61.17`
            }
        ],
        short: {
            reasons: [
                "none",
            ],
            falseBreakoutPlan: { price: 0, targets: stock2Target, planConfigs: pltrConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock2Target, planConfigs: pltrConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, includeSecondNewHigh: true, targets: stock2Target, planConfigs: pltrConfigs },
            firstRetracementPlan: { targets: stock2Target, planConfigs: pltrConfigs },
            deferredBreakoutPlan: { targets: stock2Target, planConfigs: pltrConfigs },
        },
        long: {
            reasons: [
                "gap up and go, swing",
            ],
            openDriveContinuation60Plan: { requireOpenBetterThanVwap: true, disableIfOpenWorseThanPrice: 60, targets: stock2Target, planConfigs: pltrConfigs },
            levelBreakout: { entryPrice: 61.17, targets: stock2Target, planConfigs: pltrConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock2Target, planConfigs: pltrConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, includeSecondNewHigh: true, targets: stock2Target, planConfigs: pltrConfigs },
            firstRetracementPlan: { targets: stock2Target, planConfigs: pltrConfigs },
            deferredBreakoutPlan: { targets: stock2Target, planConfigs: pltrConfigs },
        },
    },
    {
        symbol: 'BABA',
        analysis: {
            newsQualityAndFreshness: 2, gapType: TradingPlans.GapType.Outside,
            relativeVolumeAndCandleSmoothness: 2,
            cleanVwapTrend: 2, dailyChartStory: 1,
            gapSize: 0.1,
            weeklychart: "down",
            dailyChart: "down",
            hourlyChart: "down",
            premarketChart: "pop and fade",
            keyLevels: [90],
            choppyOpenRangeHigh: 0,
            choppyOpenRangeLow: 0,
        },
        autoFlip: false,
        vwapCorrection: { volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: Constants.marketCaps.BABA,
        atr: {
            average: 3,
            mutiplier: 1,
            minimumMultipler: 1,
            maxRisk: 1.5,
        },
        disableShortIfOpenAbove: 0,
        disableLongIfOpenBelow: 0,
        keyLevels: {
            momentumStartForLong: 92.5,
            momentumStartForShort: 92.5,
        },
        summary: `
        between yesterday high low, choppy open. overall short biased.
        the best setup is open with a push into vwap. and make a first breakdown below 91.56
        `,
        setups: [
            {
                high: "91.56", low: "", title: "short after pop to vwap",
                isChoppy: true,
                range: "below 91.56", quality: "B",
                entrySummary: `
                wait for a good pop, don't chase shorts
                `,
                exitTargets: `90, if 90 breaks, much lower`
            },
        ],
        short: {
            reasons: [
                "gap up and fade",
            ],
            falseBreakoutPlan: { price: 0, targets: stock3Target, planConfigs: babaConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock3Target, planConfigs: babaConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, includeSecondNewHigh: true, targets: stock3Target, planConfigs: babaConfigs },
            firstRetracementPlan: { targets: stock3Target, planConfigs: babaConfigs },
            deferredBreakoutPlan: { targets: stock3Target, planConfigs: babaConfigs },
        },
        long: {
            reasons: [
                "near support 90",
            ],
            openDriveContinuation60Plan: { requireOpenBetterThanVwap: false, disableIfOpenWorseThanPrice: 90, targets: stock3Target, planConfigs: babaConfigs },
            falseBreakoutPlan: { price: 0, targets: stock3Target, planConfigs: babaConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock3Target, planConfigs: babaConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, includeSecondNewHigh: true, targets: stock3Target, planConfigs: babaConfigs },
            firstRetracementPlan: { targets: stock3Target, planConfigs: babaConfigs },
            deferredBreakoutPlan: { targets: stock3Target, planConfigs: babaConfigs },
        },
    },
    {
        symbol: 'GME',
        analysis: {
            newsQualityAndFreshness: 0, gapType: TradingPlans.GapType.Outside,
            relativeVolumeAndCandleSmoothness: 2,
            cleanVwapTrend: 2, dailyChartStory: 2,
            gapSize: 0.8,
            weeklychart: "bounce",
            dailyChart: "up",
            hourlyChart: "up",
            premarketChart: "above vwap",
            keyLevels: [28.28],
            choppyOpenRangeHigh: 0,
            choppyOpenRangeLow: 0,
        },
        autoFlip: false,
        vwapCorrection: { volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: Constants.marketCaps.GME,
        atr: {
            average: 1.38,
            mutiplier: 1.5,
            minimumMultipler: 1,
            maxRisk: 1,
        },
        disableShortIfOpenAbove: 0,
        disableLongIfOpenBelow: 0,
        keyLevels: {
            momentumStartForLong: 28,
            momentumStartForShort: 30,
        },
        summary: `
        the best setup is open a bit above yesterday high. open with a test into those levels and vwap.
        and long the next breakaout
        `,
        setups: [
            {
                high: "28.28", low: "vwap", title: "confirmed breakout",
                isChoppy: true,
                range: "between vwap and 28.28", quality: "B",
                entrySummary: `
                wait for confirmed breakout. let it close above 28.28, then long the next breakout
                `,
                exitTargets: `29`
            }, {
                high: "", low: "28.28", title: "gap up and go",
                isChoppy: false,
                range: "above 28.28", quality: "A",
                entrySummary: `
                red to green < 60
                `,
                exitTargets: `30`
            }
        ],
        short: {
            reasons: [
                "false breakout",
            ],
            falseBreakoutPlan: { price: 0, targets: stock4Target, planConfigs: gmeConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock4Target, planConfigs: gmeConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, includeSecondNewHigh: true, targets: stock4Target, planConfigs: gmeConfigs },
            firstRetracementPlan: { targets: stock4Target, planConfigs: gmeConfigs },
            deferredBreakoutPlan: { targets: stock4Target, planConfigs: gmeConfigs },
        },
        long: {
            reasons: [
                "junk stock market",
            ],
            openDriveContinuation60Plan: { requireOpenBetterThanVwap: true, disableIfOpenWorseThanPrice: 28.28, targets: stock4Target, planConfigs: gmeConfigs },
            levelBreakout: { entryPrice: 28.28, targets: stock4Target, planConfigs: gmeConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock4Target, planConfigs: gmeConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, includeSecondNewHigh: true, targets: stock4Target, planConfigs: gmeConfigs },
            firstRetracementPlan: { targets: stock4Target, planConfigs: gmeConfigs },
            deferredBreakoutPlan: { targets: stock4Target, planConfigs: gmeConfigs },
        },
    },
];