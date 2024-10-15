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
const stock3Configs: TradingPlans.PlanConfigs = {
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

export const stockSelections: string[] = [
    'DJT',
    'AAPL',
];

export const stocksTradingPlans: TradingPlans.TradingPlans[] = [
    {
        symbol: 'DJT',
        analysis: {
            newsQualityAndFreshness: 2, gapType: TradingPlans.GapType.Outside,
            relativeVolumeAndCandleSmoothness: 2,
            cleanVwapTrend: 1, dailyChartStory: 1,
            gapSize: 2,
            weeklychart: "downtrend bounce",
            dailyChart: "uptrend",
            hourlyChart: "uptrend",
            premarketChart: "below vwap",
            keyLevels: [31, 34.33],
            choppyOpenRangeHigh: 33.62,
            choppyOpenRangeLow: 32.8,
        },
        autoFlip: false,
        vwapCorrection: { volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: Constants.marketCaps.DJT,
        atr: {
            average: 2.29,
            mutiplier: 1.5,
            minimumMultipler: 1,
        },
        disableShortIfOpenAbove: 0,
        disableLongIfOpenBelow: 0,
        keyLevels: {
            momentumStartForLong: 30,
            momentumStartForShort: 40,
        },
        summary: `
        big rally yesterday and a big gap this morning. for long, only buy the dip, no breakout longs.
        that also means, can short for false breakout. it could be a range day.
        
        `,
        tier1Setups: `
        if stay below vwap and open below, take gap up and fade.
        if keeps pushing in the first minute, short first new low. 
        if keeps flushing in the first minute, long the first new high.
        
        `,
        tier2Setups: `
        short near premarket high and long near premarket low
        `,
        short: {
            reasons: [
                "profit taking",
            ],
            profitTakingFade60Plan: { enableAutoTrigger: false, onlyIfOpenBelow: 32.8, targets: stock1Target, planConfigs: djtConfigs },
            falseBreakoutPlan: { price: 0, targets: stock1Target, planConfigs: djtConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock1Target, planConfigs: djtConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, includeSecondNewHigh: true, targets: stock1Target, planConfigs: djtConfigs },
            firstRetracementPlan: { targets: stock1Target, planConfigs: djtConfigs },
            deferredBreakoutPlan: { targets: stock1Target, planConfigs: djtConfigs },
        },
        long: {
            reasons: [
                "strong uptrend continuation",
            ],
            falseBreakoutPlan: { price: 0, targets: stock1Target, planConfigs: djtConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock1Target, planConfigs: djtConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, includeSecondNewHigh: true, targets: stock1Target, planConfigs: djtConfigs },
            firstRetracementPlan: { targets: stock1Target, planConfigs: djtConfigs },
            deferredBreakoutPlan: { targets: stock1Target, planConfigs: djtConfigs },
        },
    },
    {
        symbol: 'AAPL',
        analysis: {
            newsQualityAndFreshness: 1, gapType: TradingPlans.GapType.Outside,
            relativeVolumeAndCandleSmoothness: 1,
            cleanVwapTrend: 2, dailyChartStory: 2,
            gapSize: 3,
            weeklychart: "consolidation",
            dailyChart: "consolidation breakout",
            hourlyChart: "cup breakout",
            premarketChart: "high above vwap without pullback",
            keyLevels: [233.09],
            choppyOpenRangeHigh: 233.38,
            choppyOpenRangeLow: 233,
        },
        autoFlip: false,
        vwapCorrection: { volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: Constants.marketCaps.AAPL,
        atr: {
            average: 3,
            mutiplier: 2,
            minimumMultipler: 1,
        },
        disableShortIfOpenAbove: 0,
        disableLongIfOpenBelow: 0,
        keyLevels: {
            momentumStartForLong: 233,
            momentumStartForShort: 303,
        },
        summary: `
        trade around key level 233.09, above it, look for long. below it, short the gap fill.
        there should be some profit taking at the open because yesterday was a big rally.
        `,
        tier1Setups: `
        pull back to vwap and 233.09, test it and hold it. long the next breakout.
        come to 233.09 and make a small bounce, and then short the low of day breakdown, risk is high of the small bounce.
        `,
        tier2Setups: `
        makes a small green candle and comes back in for green to red < 60 short. first target is vwap.
        `,
        short: {
            reasons: [
                "false breakout",
                "never pulled back to vwap in premarket"
            ],
            profitTakingExhaust60Plan: { includeOpenChase: false, targets: stock2Target, planConfigs: aaplConfigs },
            falseBreakoutPlan: { price: 0, targets: stock2Target, planConfigs: aaplConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock2Target, planConfigs: aaplConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, includeSecondNewHigh: true, targets: stock2Target, planConfigs: aaplConfigs },
            firstRetracementPlan: { targets: stock2Target, planConfigs: aaplConfigs },
            deferredBreakoutPlan: { targets: stock2Target, planConfigs: aaplConfigs },
        },
        long: {
            reasons: [
                "gap above key level",
            ],
            falseBreakoutPlan: { price: 0, targets: stock2Target, planConfigs: aaplConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock2Target, planConfigs: aaplConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, includeSecondNewHigh: true, targets: stock2Target, planConfigs: aaplConfigs },
            firstRetracementPlan: { targets: stock2Target, planConfigs: aaplConfigs },
            deferredBreakoutPlan: { targets: stock2Target, planConfigs: aaplConfigs },
        },
    },
    {
        symbol: 'SCHW',
        analysis: {
            newsQualityAndFreshness: 2, gapType: TradingPlans.GapType.Outside,
            relativeVolumeAndCandleSmoothness: 2,
            cleanVwapTrend: 1, dailyChartStory: 1,
            gapSize: 2,
            weeklychart: "downtrend bounce",
            dailyChart: "uptrend",
            hourlyChart: "uptrend",
            premarketChart: "below vwap",
            keyLevels: [31, 34.33],
            choppyOpenRangeHigh: 33.62,
            choppyOpenRangeLow: 32.8,
        },
        autoFlip: false,
        vwapCorrection: { volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: Constants.marketCaps.DJT,
        atr: {
            average: 2.29,
            mutiplier: 1.5,
            minimumMultipler: 1,
        },
        disableShortIfOpenAbove: 0,
        disableLongIfOpenBelow: 0,
        keyLevels: {
            momentumStartForLong: 100,
            momentumStartForShort: 100,
        },
        summary: `
        big rally yesterday and a big gap this morning. for long, only buy the dip, no breakout longs.
        that also means, can short for false breakout. it could be a range day.
        
        `,
        tier1Setups: `
        if stay below vwap and open below, take gap up and fade.
        if keeps pushing in the first minute, short first new low. 
        if keeps flushing in the first minute, long the first new high.
        
        `,
        tier2Setups: `
        short near premarket high and long near premarket low
        `,
        short: {
            reasons: [
                "profit taking",
            ],
            profitTakingFade60Plan: { enableAutoTrigger: false, onlyIfOpenBelow: 73.36, targets: stock1Target, planConfigs: djtConfigs },
            falseBreakoutPlan: { price: 0, targets: stock1Target, planConfigs: djtConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock1Target, planConfigs: djtConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, includeSecondNewHigh: true, targets: stock1Target, planConfigs: djtConfigs },
            firstRetracementPlan: { targets: stock1Target, planConfigs: djtConfigs },
            deferredBreakoutPlan: { targets: stock1Target, planConfigs: djtConfigs },
        },
        long: {
            reasons: [
                "strong uptrend continuation",
            ],
        },
    },
];