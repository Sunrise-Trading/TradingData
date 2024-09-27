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

    'COST',
    'KWEB',
    'IONQ',
    //'BABA',

];

export const stocksTradingPlans: TradingPlans.TradingPlans[] = [
    {
        symbol: 'IONQ',
        analysis: {
            newsQualityAndFreshness: 2, gapType: TradingPlans.GapType.Outside,
            relativeVolumeAndCandleSmoothness: 2,
            cleanVwapTrend: 2, dailyChartStory: 2,
            gapSize: 1,
            weeklychart: "downtrend",
            dailyChart: "bottom consolidation",
            hourlyChart: "uptrend",
            premarketChart: "hold high above vwap",
            keyLevels: [9.05],
        },
        autoFlip: false,
        vwapCorrection: { volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: 1000,
        atr: {
            average: 0.47,
            mutiplier: 1.5,
            minimumMultipler: 1,
        },
        disableShortIfOpenAbove: 0,
        disableLongIfOpenBelow: 0,
        keyLevels: {
            momentumStartForLong: 8.5,
            momentumStartForShort: 10,
        },
        summary: `
        stocks on downtrend. first pop tends to get faded and it's a friday.
        already made a pullback to vwap. it's like china stocks yesterday. that's going to be choppy open.
        it will be deferred entry for this stock
        still keep all shorts if it makes a false breakout.
        `,
        tier1Setups: `
        gap up and fade: need to open below key level 9.05. then let it pop above 9.05 
        and then short it becomes false breakout.
        if open above 9.05, let it make a pullback and long the red to green.
        `,
        tier2Setups: `
        if pullback into vwap before open, it's also setting up for long as a quick scalp.
        but i won't trade tier 2 setups today.
        `,
        short: {
            reasons: [
                "gap up too much, long term charts bearish",
            ],
            profitTakingExhaust60Plan: { includeOpenChase: true, targets: ionqTarget, planConfigs: ionqConfigs },
            falseBreakoutPlan: { price: 9.05, targets: ionqTarget, planConfigs: ionqConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: ionqTarget, planConfigs: ionqConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, includeSecondNewHigh: true, targets: ionqTarget, planConfigs: ionqConfigs },
            firstRetracementPlan: { targets: ionqTarget, planConfigs: ionqConfigs },
            deferredBreakoutPlan: { targets: ionqTarget, planConfigs: ionqConfigs },
        },
        long: {
            reasons: [
                "initial momentum strong",
            ],
            /*
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: ionqTarget, planConfigs: ionqConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, includeSecondNewHigh: true, targets: ionqTarget, planConfigs: ionqConfigs },
            firstRetracementPlan: { targets: ionqTarget, planConfigs: ionqConfigs },*/
            deferredBreakoutPlan: { targets: ionqTarget, planConfigs: ionqConfigs },
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
        only trade the gap up and fade. has to skip first 60 seconds due to lower volume than yesterday.
        `,
        tier1Setups: `
        gap up and fade, has to open below vwap. then short the first new low.
        `,
        tier2Setups: `
        not going to trade any other setups
        `,
        short: {
            reasons: [
                "friday profit taking",
            ],
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
    },
    {
        symbol: 'BABA',
        analysis: {
            newsQualityAndFreshness: 1, gapType: TradingPlans.GapType.Outside,
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
        symbol: 'COST',
        analysis: {
            newsQualityAndFreshness: 2, gapType: TradingPlans.GapType.Inside,
            relativeVolumeAndCandleSmoothness: 1,
            cleanVwapTrend: 1, dailyChartStory: 1,
            gapSize: 7,
            weeklychart: "uptrend",
            dailyChart: "uptrend",
            hourlyChart: "consolidation",
            premarketChart: "gap down and bounce from support",
            keyLevels: [890.95],
        },
        autoFlip: false,
        vwapCorrection: { volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: Constants.marketCaps.COST,
        atr: {
            average: 16,
            mutiplier: 1,
            minimumMultipler: 1,
        },
        disableShortIfOpenAbove: 0,
        disableLongIfOpenBelow: 0,
        keyLevels: {
            momentumStartForLong: 890,
            momentumStartForShort: 900,
        },
        summary: `
        gap down to support and bounce. long term charts are bullish.
        `,
        tier1Setups: `
        open with a breakdown pattern, let it trend for small profit for short sellers and then long the first breakout.
        `,
        tier2Setups: `
        if open above vwap, it's range trading, skip.
        `,
        long: {
            reasons: [
                "gap down to support and bounce. long term charts are bullish.",
            ],
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: costTarget, planConfigs: costConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, includeSecondNewHigh: true, targets: costTarget, planConfigs: costConfigs },
            deferredBreakoutPlan: { targets: costTarget, planConfigs: costConfigs },
        },
        short: {
            reasons: [
                "none",
            ],
        },
    },
];