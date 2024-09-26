import * as TradingPlans from './models';
import * as Constants from './constants';

// futures, momentumSimple, tradeStationEquity, schwab
export const activeProfileName: string = "schwab";
export const tradingSettings: TradingPlans.TradingSettings = {
    equalWeightDivider: 4,
    useSingleOrderForEntry: true,
}
const muConfigs: TradingPlans.PlanConfigs = {
    size: 0.24,
    deferTradingInSeconds: 0,
    stopTradingAfterSeconds: 0,
    requireReversal: true,
    alwaysAllowFlatten: true,
    alwaysAllowMoveStop: true,
    allowEarlyExits: false,
    allowFirstFewExitsCount: 2,
};
const chinaConfigs: TradingPlans.PlanConfigs = {
    size: 0.18,
    deferTradingInSeconds: 0,
    stopTradingAfterSeconds: 0,
    requireReversal: true,
    alwaysAllowFlatten: true,
    alwaysAllowMoveStop: true,
    allowEarlyExits: false,
    allowFirstFewExitsCount: 5,
};

const kmxConfigs: TradingPlans.PlanConfigs = {
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
const muTarget: TradingPlans.ExitTargets = {
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

const kmxTarget: TradingPlans.ExitTargets = {
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
    'MU',
    'BABA',
    'PDD',
    'KWEB',
];

export const stocksTradingPlans: TradingPlans.TradingPlans[] = [
    {
        symbol: 'MU',
        analysis: {
            newsQualityAndFreshness: 2, gapType: TradingPlans.GapType.Outside,
            relativeVolumeAndCandleSmoothness: 2,
            cleanVwapTrend: 2, dailyChartStory: 2,
            gapSize: 17,
            weeklychart: "gave back all the uptrend",
            dailyChart: "downtrend",
            hourlyChart: "small uptrend",
            premarketChart: "range above vwap",
            keyLevels: [111, 106.8],
        },
        autoFlip: false,
        vwapCorrection: { volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: Constants.marketCaps.MU,
        atr: {
            average: 3.8,
            mutiplier: 1.5,
            minimumMultipler: 1,
        },
        disableShortIfOpenAbove: 0,
        disableLongIfOpenBelow: 0,
        keyLevels: {
            momentumStartForLong: 111,
            momentumStartForShort: 113.23,
        },
        summary: `
        the most obvious key level on daily chart is 111. Today I will use this level for bias. 
        If the price is above 111, long only. If lost 111, short only.
        Open above it will be long first breakout. Open below is will be short the first breakdown.
        `,
        tier1Setups: `
        open near and above 111 to long the first breakout.
        open near and below 111 to short the first breakdown.
        open with a strong push up to breakout premarket high and then became false breakout to short.
        open with a push and short green to red < 60.
        allow open chase.
        `,
        tier2Setups: `
        if open far from 111, it's a tier 2 for range trading.
        `,
        short: {
            reasons: [
                "gap up too much",
            ],
            profitTakingExhaust60Plan: { includeOpenChase: true, targets: muTarget, planConfigs: muConfigs },
            falseBreakoutPlan: { price: 113.23, targets: muTarget, planConfigs: muConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: muTarget, planConfigs: muConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, includeSecondNewHigh: true, targets: muTarget, planConfigs: muConfigs },
            firstRetracementPlan: { targets: muTarget, planConfigs: muConfigs },
            deferredBreakoutPlan: { targets: muTarget, planConfigs: muConfigs },
        },
        long: {
            reasons: [
                "strong earnings and short term trend is up",
            ],
            openDriveContinuation60Plan: { requireOpenBetterThanVwap: false, disableIfOpenWorseThanPrice: 111, targets: muTarget, planConfigs: muConfigs },
            falseBreakoutPlan: { price: 0, targets: muTarget, planConfigs: muConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: muTarget, planConfigs: muConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, includeSecondNewHigh: true, targets: muTarget, planConfigs: muConfigs },
            firstRetracementPlan: { targets: muTarget, planConfigs: muConfigs },
            deferredBreakoutPlan: { targets: muTarget, planConfigs: muConfigs },
        },
    },
    {
        symbol: 'KWEB',
        analysis: {
            newsQualityAndFreshness: 2, gapType: TradingPlans.GapType.Outside,
            relativeVolumeAndCandleSmoothness: 2,
            cleanVwapTrend: 2, dailyChartStory: 2,
            gapSize: 10,
            weeklychart: "bottom consolidation",
            dailyChart: "uptrend with extension",
            hourlyChart: "uptrend",
            premarketChart: "extended from vwap",
            keyLevels: [32.64],
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
            momentumStartForLong: 32.64,
            momentumStartForShort: 32.64,
        },
        summary: `
        gap up extension setup for all china stocks. extended from vwap in premarket and also on daily chart.
        just need to wait for the trigger on trailing stop.
        due to strong initial momentum, cannot chase shorts at the open, need some signal.
        `,
        tier1Setups: `
        if open with a push to break premarket high, short the false premarket high breakout.
        if open with a flush down, and the drop is too big, wait for a weak bounce and short the next new low as deferred entry.
        if open with a push but didn't break premarket high, short the green to red < 60.
        `,
        tier2Setups: `
        for long it's going to be dip buy.
        `,
        short: {
            reasons: [
                "gap up extension",
            ],
            profitTakingExhaust60Plan: { includeOpenChase: true, targets: chinaTarget, planConfigs: chinaConfigs },
            falseBreakoutPlan: { price: 32.59, targets: chinaTarget, planConfigs: chinaConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: chinaTarget, planConfigs: chinaConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, includeSecondNewHigh: true, targets: chinaTarget, planConfigs: chinaConfigs },
            firstRetracementPlan: { targets: chinaTarget, planConfigs: chinaConfigs },
            deferredBreakoutPlan: { targets: chinaTarget, planConfigs: chinaConfigs },
        },
        long: {
            reasons: [
                "strong initial momentum",
            ],
        },
    },
    {
        symbol: 'BABA',
        analysis: {
            newsQualityAndFreshness: 2, gapType: TradingPlans.GapType.Outside,
            relativeVolumeAndCandleSmoothness: 2,
            cleanVwapTrend: 2, dailyChartStory: 2,
            gapSize: 10,
            weeklychart: "bottom consolidation",
            dailyChart: "uptrend with extension",
            hourlyChart: "uptrend",
            premarketChart: "extended from vwap",
            keyLevels: [32.64],
        },
        autoFlip: false,
        vwapCorrection: { volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: Constants.marketCaps.BABA,
        atr: {
            average: 2,
            mutiplier: 1.5,
            minimumMultipler: 1,
        },
        disableShortIfOpenAbove: 0,
        disableLongIfOpenBelow: 0,
        keyLevels: {
            momentumStartForLong: 103.6,
            momentumStartForShort: 103.6,
        },
        summary: `
        gap up extension setup for all china stocks. extended from vwap in premarket and also on daily chart.
        just need to wait for the trigger on trailing stop.
        due to strong initial momentum, cannot chase shorts at the open, need some signal.
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
                "gap up extension",
            ],
            profitTakingExhaust60Plan: { includeOpenChase: true, targets: chinaTarget, planConfigs: chinaConfigs },
            falseBreakoutPlan: { price: 103.6, targets: chinaTarget, planConfigs: chinaConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: chinaTarget, planConfigs: chinaConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, includeSecondNewHigh: true, targets: chinaTarget, planConfigs: chinaConfigs },
            firstRetracementPlan: { targets: chinaTarget, planConfigs: chinaConfigs },
            deferredBreakoutPlan: { targets: chinaTarget, planConfigs: chinaConfigs },
        },
        long: {
            reasons: [
                "strong initial momentum",
            ],
        },
    },
    {
        symbol: 'PDD',
        analysis: {
            newsQualityAndFreshness: 2, gapType: TradingPlans.GapType.Outside,
            relativeVolumeAndCandleSmoothness: 2,
            cleanVwapTrend: 2, dailyChartStory: 2,
            gapSize: 10,
            weeklychart: "bottom consolidation",
            dailyChart: "uptrend with extension",
            hourlyChart: "uptrend",
            premarketChart: "extended from vwap",
            keyLevels: [32.64],
        },
        autoFlip: false,
        vwapCorrection: { volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: Constants.marketCaps.PDD,
        atr: {
            average: 5,
            mutiplier: 1.5,
            minimumMultipler: 1,
        },
        disableShortIfOpenAbove: 0,
        disableLongIfOpenBelow: 0,
        keyLevels: {
            momentumStartForLong: 127.96,
            momentumStartForShort: 127.96,
        },
        summary: `
        gap up extension setup for all china stocks. extended from vwap in premarket and also on daily chart.
        just need to wait for the trigger on trailing stop.
        due to strong initial momentum, cannot chase shorts at the open, need some signal.
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
                "gap up extension",
            ],
            profitTakingExhaust60Plan: { includeOpenChase: true, targets: chinaTarget, planConfigs: chinaConfigs },
            falseBreakoutPlan: { price: 127.96, targets: chinaTarget, planConfigs: chinaConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: chinaTarget, planConfigs: chinaConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, includeSecondNewHigh: true, targets: chinaTarget, planConfigs: chinaConfigs },
            firstRetracementPlan: { targets: chinaTarget, planConfigs: chinaConfigs },
            deferredBreakoutPlan: { targets: chinaTarget, planConfigs: chinaConfigs },
        },
        long: {
            reasons: [
                "strong initial momentum",
            ],
        },
    },
    {
        symbol: 'KMX',
        analysis: {
            newsQualityAndFreshness: 2, gapType: TradingPlans.GapType.Outside,
            relativeVolumeAndCandleSmoothness: 1,
            cleanVwapTrend: 2, dailyChartStory: 2,
            gapSize: 4,
            weeklychart: "Consolidation",
            dailyChart: "Consolidation",
            hourlyChart: "downtrend",
            premarketChart: "gap down and pop below vwap",
            keyLevels: [73.28],
        },
        autoFlip: false,
        vwapCorrection: { volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: Constants.marketCaps.KMX,
        atr: {
            average: 2.27,
            mutiplier: 1.3,
            minimumMultipler: 1,
        },
        disableShortIfOpenAbove: 0,
        disableLongIfOpenBelow: 0,
        keyLevels: {
            momentumStartForLong: 73,
            momentumStartForShort: 73.28,
        },
        summary: `
        gap down selloff setup. 
        `,
        tier1Setups: `
        if open below vwap, short the first breakout
        `,
        tier2Setups: `
        if open above vwap, it's range trading, skip.
        `,
        short: {
            reasons: [
                "gap down below daily consolidation range with bad earnings",
            ],
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: kmxTarget, planConfigs: kmxConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, includeSecondNewHigh: true, targets: kmxTarget, planConfigs: kmxConfigs },
            deferredBreakoutPlan: { targets: kmxTarget, planConfigs: kmxConfigs },
        },
        long: {
            reasons: [
                "none",
            ],
        },
    },
];