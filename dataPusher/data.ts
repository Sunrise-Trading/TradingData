import * as TradingPlans from './models';
import * as Constants from './constants';

// futures, momentumSimple, tradeStationEquity, schwab
export const activeProfileName: string = "schwab";
export const tradingSettings: TradingPlans.TradingSettings = {
    equalWeightDivider: 4,
    useSingleOrderForEntry: true,
}
const ionqConfigs: TradingPlans.PlanConfigs = {
    size: 0.2,
    deferTradingInSeconds: 0,
    stopTradingAfterSeconds: 0,
    requireReversal: true,
    alwaysAllowFlatten: true,
    alwaysAllowMoveStop: true,
    allowEarlyExits: true,
    allowFirstFewExitsCount: 2,
};
const chinaConfigs: TradingPlans.PlanConfigs = {
    size: 0.2,
    deferTradingInSeconds: 0,
    stopTradingAfterSeconds: 0,
    requireReversal: true,
    alwaysAllowFlatten: true,
    alwaysAllowMoveStop: true,
    allowEarlyExits: true,
    allowFirstFewExitsCount: 5,
};

const costConfigs: TradingPlans.PlanConfigs = {
    size: 0.2,
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
const ionqTarget: TradingPlans.ExitTargets = {
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
const chinaTarget: TradingPlans.ExitTargets = {
    initialTargets: {
        priceLevels: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        rrr: [1.5, 1.6, 1.8, 1.9, 2, 2, 3, 3, 3, 3],
        dailyRanges: [1, 1, 1.5, 1.5, 1.9, 1.9, 1.9, 1.9, 1.9, 2],
    },
    minimumTargets: {
        priceLevels: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        rrr: [1.5, 1.6, 1.8, 1.9, 2, 2, 2, 2, 2, 2],
        dailyRanges: [1, 1, 1.1, 1.2, 1.3, 1.4, 1.5, 1.5, 1.5, 5],
    },
    wave3BatchIndexStart: 10,
    wave5BatchIndexStart: 10,
    trail5Count: 10,
    trail15Count: 10,
};

const costTarget: TradingPlans.ExitTargets = {
    initialTargets: {
        priceLevels: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        rrr: [1.5, 1.6, 1.8, 1.9, 2, 2, 2, 2, 2, 2],
        dailyRanges: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    },
    minimumTargets: {
        priceLevels: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        rrr: [1.5, 1.6, 1.8, 1.9, 2, 2, 3, 3, 3, 3],
        dailyRanges: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    },
    wave3BatchIndexStart: 10,
    wave5BatchIndexStart: 10,
    trail5Count: 10,
    trail15Count: 10,
};
export const stockSelections: string[] = [
    'NIO',
    'KWEB',
    'STLA'
];

export const stocksTradingPlans: TradingPlans.TradingPlans[] = [
    {
        symbol: 'NIO',
        analysis: {
            newsQualityAndFreshness: 2, gapType: TradingPlans.GapType.Outside,
            relativeVolumeAndCandleSmoothness: 1,
            cleanVwapTrend: 1, dailyChartStory: 1,
            gapSize: 10,
            weeklychart: "bottom consolidation",
            dailyChart: "uptrend with extension",
            hourlyChart: "uptrend",
            premarketChart: "extended from vwap",
            keyLevels: [7, 7.5],
        },
        autoFlip: false,
        vwapCorrection: { volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: Constants.marketCaps.NIO,
        atr: {
            average: 0.4,
            mutiplier: 2,
            minimumMultipler: 1,
        },
        disableShortIfOpenAbove: 0,
        disableLongIfOpenBelow: 0,
        keyLevels: {
            momentumStartForLong: 7,
            momentumStartForShort: 10,
        },
        summary: `
        every extended on the daily chart and in premarket. but very strong uptrend. so long has to be dip buy. and short can be better 
        gapping up into resistance
        `,
        tier1Setups: `
        if open below vwap, short the first breakdown as gap up and fade.
        if open above vwap, let it run for a bit and short first new low on 1 minute or 5 minute candle
        if make false breakout of premarket high, range short it.
        going to open extended from vwap, short false premarket high breakout. if it pops at the open, short the false breakout.
        `,
        tier2Setups: `
        long the dips as false breakdown.
        `,
        short: {
            reasons: [
                "profit taking before chinese holiday",
            ],
            levelBreakout: { entryPrice: 7.5, targets: chinaTarget, planConfigs: chinaConfigs },
            profitTakingExhaust60Plan: { includeOpenChase: false, targets: chinaTarget, planConfigs: chinaConfigs },
            profitTakingFade60Plan: { enableAutoTrigger: false, onlyIfOpenBelow: 7.45, targets: chinaTarget, planConfigs: chinaConfigs },
            falseBreakoutPlan: { price: 7.78, targets: chinaTarget, planConfigs: chinaConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: chinaTarget, planConfigs: chinaConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, includeSecondNewHigh: true, targets: chinaTarget, planConfigs: chinaConfigs },
            firstRetracementPlan: { targets: chinaTarget, planConfigs: chinaConfigs },
            deferredBreakoutPlan: { targets: chinaTarget, planConfigs: chinaConfigs },
        },
        long: {
            reasons: [
                "strong up trend",
            ],
            openDriveContinuation60Plan: { requireOpenBetterThanVwap: true, disableIfOpenWorseThanPrice: 7.5, targets: chinaTarget, planConfigs: chinaConfigs },
            redtoGreenPlan: {
                strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: chinaTarget, planConfigs: chinaConfigs
            },
            deferredBreakoutPlan: { targets: chinaTarget, planConfigs: chinaConfigs },
        },
    },
    {
        symbol: 'KWEB',
        analysis: {
            newsQualityAndFreshness: 2, gapType: TradingPlans.GapType.Outside,
            relativeVolumeAndCandleSmoothness: 1,
            cleanVwapTrend: 1, dailyChartStory: 1,
            gapSize: 10,
            weeklychart: "bottom consolidation",
            dailyChart: "uptrend with extension",
            hourlyChart: "uptrend",
            premarketChart: "extended from vwap",
            keyLevels: [36.19],
        },
        autoFlip: false,
        vwapCorrection: { volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: Constants.marketCaps.KWEB,
        atr: {
            average: 0.5,
            mutiplier: 2,
            minimumMultipler: 1,
        },
        disableShortIfOpenAbove: 0,
        disableLongIfOpenBelow: 0,
        keyLevels: {
            momentumStartForLong: 30,
            momentumStartForShort: 40,
        },
        summary: `
        every extended on the daily chart. but very strong uptrend. so long has to be dip buy. and short can be better 
        `,
        tier1Setups: `
        if open below vwap, short the first breakdown as gap up and fade.
        if open above vwap, let it run for a bit and short first new low on 1 minute or 5 minute candle
        if make false breakout of premarket high, range short it.
        `,
        tier2Setups: `
        long the dips as false breakdown.
        `,
        short: {
            reasons: [
                "profit taking before chinese holiday",
            ],
            profitTakingExhaust60Plan: { includeOpenChase: false, targets: chinaTarget, planConfigs: chinaConfigs },
            profitTakingFade60Plan: { enableAutoTrigger: false, onlyIfOpenBelow: 35.75, targets: chinaTarget, planConfigs: chinaConfigs },
            falseBreakoutPlan: { price: 36.03, targets: chinaTarget, planConfigs: chinaConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: chinaTarget, planConfigs: chinaConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, includeSecondNewHigh: true, targets: chinaTarget, planConfigs: chinaConfigs },
            firstRetracementPlan: { targets: chinaTarget, planConfigs: chinaConfigs },
            deferredBreakoutPlan: { targets: chinaTarget, planConfigs: chinaConfigs },
        },
        long: {
            reasons: [
                "strong up trend",
            ],
            deferredBreakoutPlan: { targets: chinaTarget, planConfigs: chinaConfigs },
        },
    },
    {
        symbol: 'STLA',
        analysis: {
            newsQualityAndFreshness: 2, gapType: TradingPlans.GapType.Outside,
            relativeVolumeAndCandleSmoothness: 2,
            cleanVwapTrend: 2, dailyChartStory: 2,
            gapSize: 2,
            weeklychart: "downtrend",
            dailyChart: "uptrend",
            hourlyChart: "uptrend with gap up",
            premarketChart: "gap down and bounce",
            keyLevels: [14.76],
        },
        autoFlip: false,
        vwapCorrection: { volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: 46000,
        atr: {
            average: 0.4,
            mutiplier: 2,
            minimumMultipler: 1,
        },
        disableShortIfOpenAbove: 0,
        disableLongIfOpenBelow: 0,
        keyLevels: {
            momentumStartForLong: 14.7,
            momentumStartForShort: 14.7,
        },
        summary: `
        gap down sell off setup. making a small bounce in the premarket. due to low volume, skip 60 seconds.
        `,
        tier1Setups: `
        if open with a push to break premarket high, short the false premarket high breakout.
        if open with a flush down, and the drop is too big, wait for a weak bounce and short the next new low as deferred entry.
        `,
        tier2Setups: `
        for long it's going to be dip buy.
        `,
        short: {
            reasons: [
                "gap down selloff",
            ],
            falseBreakoutPlan: { price: 7.3, targets: chinaTarget, planConfigs: chinaConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: chinaTarget, planConfigs: chinaConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, includeSecondNewHigh: true, targets: chinaTarget, planConfigs: chinaConfigs },
            firstRetracementPlan: { targets: chinaTarget, planConfigs: chinaConfigs },
            deferredBreakoutPlan: { targets: chinaTarget, planConfigs: chinaConfigs },
        },
        long: {
            reasons: [
                "none",
            ],
        },
    }
];