import * as TradingPlans from './models';
import * as Constants from './constants';

// futures, momentumSimple, tradeStationEquity, schwab
export const activeProfileName: string = "schwab";
export const tradingSettings: TradingPlans.TradingSettings = {
    equalWeightDivider: 4,
    useSingleOrderForEntry: true,
}
const intcShortConfigs: TradingPlans.PlanConfigs = {
    size: 0.24,
    deferTradingInSeconds: 0,
    stopTradingAfterSeconds: 0,
    requireReversal: true,
    alwaysAllowStopOutOrFlatten: false,
    allowEarlyExits: false,
    allowFirstFewExitsCount: 2,
};
const intcLongConfigs: TradingPlans.PlanConfigs = {
    size: 0.24,
    deferTradingInSeconds: 0,
    stopTradingAfterSeconds: 0,
    requireReversal: true,
    alwaysAllowStopOutOrFlatten: true,
    allowEarlyExits: true,
    allowFirstFewExitsCount: 2,
};
const amznConfigs: TradingPlans.PlanConfigs = {
    size: 0.24,
    deferTradingInSeconds: 0,
    stopTradingAfterSeconds: 0,
    requireReversal: true,
    alwaysAllowStopOutOrFlatten: true,
    allowEarlyExits: true,
    allowFirstFewExitsCount: 2,
};
const stock3Configs: TradingPlans.PlanConfigs = {
    size: 0.24,
    deferTradingInSeconds: 0,
    stopTradingAfterSeconds: 0,
    requireReversal: true,
    alwaysAllowStopOutOrFlatten: false,
    allowEarlyExits: false,
    allowFirstFewExitsCount: 2,
};
const stock4Configs: TradingPlans.PlanConfigs = {
    size: 0.24,
    deferTradingInSeconds: 0,
    stopTradingAfterSeconds: 0,
    requireReversal: true,
    alwaysAllowStopOutOrFlatten: false,
    allowEarlyExits: false,
    allowFirstFewExitsCount: 2,
};

const intcTarget: TradingPlans.ExitTargets = {
    initialTargets: {
        priceLevels: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        rrr: [1.5, 1.6, 1.8, 1.9, 2, 2, 3, 3, 3, 3],
        dailyRanges: [1, 1, 1.5, 1.5, 2, 2, 2, 2, 2, 2],
    },
    minimumTargets: {
        priceLevels: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        rrr: [1.5, 1.6, 1.8, 1.9, 2, 2, 2, 2, 2, 2],
        dailyRanges: [1, 1, 1.5, 1.5, 2, 2, 2, 2, 2, 2],
    },
    wave3BatchIndexStart: 10,
    wave5BatchIndexStart: 10,
    trail5Count: 4,
    trail15Count: 4,
};
const stock2Target: TradingPlans.ExitTargets = {
    initialTargets: {
        priceLevels: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        rrr: [1.5, 1.6, 1.8, 1.9, 2, 2, 3, 3, 3, 3],
        dailyRanges: [1, 1, 1.5, 1.5, 2, 2, 2, 2, 2, 2],
    },
    minimumTargets: {
        priceLevels: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        rrr: [1.5, 1.6, 1.8, 1.9, 2, 2, 2, 2, 2, 2],
        dailyRanges: [1, 1, 1.5, 1.5, 2, 2, 2, 2, 2, 2],
    },
    wave3BatchIndexStart: 10,
    wave5BatchIndexStart: 10,
    trail5Count: 4,
    trail15Count: 4,
};
const stock3Target: TradingPlans.ExitTargets = {
    initialTargets: {
        priceLevels: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        rrr: [1.5, 1.6, 1.8, 1.9, 2, 2, 3, 3, 3, 3],
        dailyRanges: [1, 1, 1.5, 1.5, 2, 2, 2, 2, 2, 2],
    },
    minimumTargets: {
        priceLevels: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        rrr: [1.5, 1.6, 1.8, 1.9, 2, 2, 2, 2, 2, 2],
        dailyRanges: [1, 1, 1.5, 1.5, 2, 2, 2, 2, 2, 2],
    },
    wave3BatchIndexStart: 10,
    wave5BatchIndexStart: 10,
    trail5Count: 4,
    trail15Count: 4,
};
const stock4Target: TradingPlans.ExitTargets = {
    initialTargets: {
        priceLevels: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        rrr: [1.5, 1.6, 1.8, 1.9, 2, 2, 2, 2, 2, 2],
        dailyRanges: [1, 1, 1.5, 1.5, 2, 2, 2, 2, 2, 2],
    },
    minimumTargets: {
        priceLevels: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        rrr: [1.5, 1.6, 1.8, 1.9, 2, 2, 3, 3, 3, 3],
        dailyRanges: [1, 1, 1.5, 1.5, 2, 2, 2, 2, 2, 2],
    },
    wave3BatchIndexStart: 10,
    wave5BatchIndexStart: 10,
    trail5Count: 4,
    trail15Count: 4,
};
export const stockSelections: string[] = [
    'INTC',
    'AAPL',
];

export const stocksTradingPlans: TradingPlans.TradingPlans[] = [
    {
        symbol: 'INTC',
        analysis: {
            newsQualityAndFreshness: 2, gapType: TradingPlans.GapType.Outside,
            relativeVolumeAndCandleSmoothness: 2,
            cleanVwapTrend: 2, dailyChartStory: 2,
            gapSize: 8,
            weeklychart: "making a 2nd leg after a bear flag",
            dailyChart: "below all time low",
            hourlyChart: "extended to the downside",
            premarketChart: "gap down and extend",
            keyLevels: [24.59],
        },
        autoFlip: false,
        vwapCorrection: { volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: Constants.marketCaps.INTC,
        atr: {
            average: 0.9,
            mutiplier: 2,
            minimumMultipler: 1,
        },
        disableShortIfOpenAbove: 0,
        disableLongIfOpenBelow: 0,
        keyLevels: {
            momentumStartForLong: 20,
            momentumStartForShort: 30,
        },
        summary: `
        earnings miss. firms downgrade. breakdown below all time low support.
        gapped down 8 ATR is too much. For a good short setup, it needs to bounce at least 0.5 ATR.
        so a good entry is first new low. because green to red will be 0.5 ATR risk. 
        if stock makes a small green bar at the open, still ok to short the green to red > 60. but it will be a quick scalp of 2R and move stop to breakeven.
        it also has potential to squeeze at the open for short covering. a good setup is false breakdown premarket low and to red to green < 60.
        feels like bad news can't drop the market and it might be a recover day. so add red to green > 60 for INTC.
        removed red to green > 60, best long is AAPL which reclaimed yesterday low
        `,
        short: {
            reasons: [
                "earnings miss. firms downgrade. breakdown below all time low support.",
                "2nd leg after bear flag on higher timeframe",
                "suspend dividends",
            ],
            falseBreakoutPlan: { price: 23, targets: intcTarget, planConfigs: intcShortConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: intcTarget, planConfigs: intcShortConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, includeSecondNewHigh: true, targets: intcTarget, planConfigs: intcShortConfigs },
            firstRetracementPlan: { targets: intcTarget, planConfigs: intcShortConfigs },
        },
        long: {
            reasons: [
                "gap down too much, 8 ATR",
            ],
            profitTakingExhaust60Plan: { targets: intcTarget, planConfigs: intcLongConfigs },
            //redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: intcTarget, planConfigs: intcLongConfigs },

        },
    },
    {
        symbol: 'AMZN',
        analysis: {
            newsQualityAndFreshness: 2, gapType: TradingPlans.GapType.Outside,
            relativeVolumeAndCandleSmoothness: 2,
            cleanVwapTrend: 2, dailyChartStory: 2,
            gapSize: 20,
            weeklychart: "chop",
            dailyChart: "consolidation",
            hourlyChart: "range",
            premarketChart: "gap down and hold below vwap",
            keyLevels: [],
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
        not having a good idea of how AMZN will move at the open. it has bad news and gap down. but gap down near support. it can be a range trading today.
        maybe no trades and just observe it. a good long setup is open above key level 166.32. then let first breakout to fail and then take the 2nd breakout.
        initial momentum is still bearish, so long trades will struggle. either take 2nd breakout or range trading to buy the dip.
        or let it make a false break down.
        so i will leave it as scalp.
        `,
        short: {
            reasons: [
                "earnings miss",
            ],
            falseBreakoutPlan: { price: 0, targets: stock2Target, planConfigs: amznConfigs },
            firstBreakoutPlan: { targets: stock2Target, planConfigs: amznConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock2Target, planConfigs: amznConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, includeSecondNewHigh: true, targets: stock2Target, planConfigs: amznConfigs },
            firstRetracementPlan: { targets: stock2Target, planConfigs: amznConfigs },
        },
        long: {
            reasons: [
                "gap down near support",
            ],
            falseBreakoutPlan: { price: 166.32, targets: stock2Target, planConfigs: amznConfigs },
            firstBreakoutPlan: { targets: stock2Target, planConfigs: amznConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock2Target, planConfigs: amznConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, includeSecondNewHigh: true, targets: stock2Target, planConfigs: amznConfigs },
            firstRetracementPlan: { targets: stock2Target, planConfigs: amznConfigs },
        },
    },
    {
        symbol: 'AAPL',
        analysis: {
            newsQualityAndFreshness: 2, gapType: TradingPlans.GapType.Outside,
            relativeVolumeAndCandleSmoothness: 2,
            cleanVwapTrend: 2, dailyChartStory: 2,
            gapSize: 3,
            weeklychart: "pullback after a big uptrend",
            dailyChart: "selloff",
            hourlyChart: "selloff and extend",
            premarketChart: "selloff and recovering",
            keyLevels: [538.71],
        },
        autoFlip: false,
        vwapCorrection: { volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: 10000,
        atr: {
            average: 7,
            mutiplier: 1,
            minimumMultipler: 1,
        },
        disableShortIfOpenAbove: 0,
        disableLongIfOpenBelow: 0,
        keyLevels: {
            momentumStartForLong: 533,
            momentumStartForShort: 533,
        },
        summary: `
        if it recovers the selloff from market data, go long
        `,
        short: {
            reasons: [
                "still down trend",
            ],
        },
        long: {
            reasons: [
                "if recover the selloff points, then bad news can't selloff, there's only long",
            ],
            falseBreakoutPlan: { price: 0, targets: stock3Target, planConfigs: stock3Configs },
            firstBreakoutPlan: { targets: stock3Target, planConfigs: stock3Configs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock3Target, planConfigs: stock3Configs },
            firstNewHighPlan: { enableAutoTrigger: false, includeSecondNewHigh: true, targets: stock3Target, planConfigs: stock3Configs },
            firstRetracementPlan: { targets: stock3Target, planConfigs: stock3Configs },
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
        short: {
            reasons: [
                "",
                ""
            ],
            falseBreakoutPlan: { price: 0, targets: stock4Target, planConfigs: stock4Configs },
            firstBreakoutPlan: { targets: stock4Target, planConfigs: stock4Configs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock4Target, planConfigs: stock4Configs },
            firstNewHighPlan: { enableAutoTrigger: false, includeSecondNewHigh: true, targets: stock4Target, planConfigs: stock4Configs },
            firstRetracementPlan: { targets: stock4Target, planConfigs: stock4Configs },
        },
        long: {
            reasons: [
                "",
                ""
            ],
            falseBreakoutPlan: { price: 0, targets: stock4Target, planConfigs: stock4Configs },
            firstBreakoutPlan: { targets: stock4Target, planConfigs: stock4Configs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock4Target, planConfigs: stock4Configs },
            firstNewHighPlan: { enableAutoTrigger: false, includeSecondNewHigh: true, targets: stock4Target, planConfigs: stock4Configs },
            firstRetracementPlan: { targets: stock4Target, planConfigs: stock4Configs },
        },
    },
];