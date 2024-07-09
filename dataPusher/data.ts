import * as TradingPlans from './models';
import * as Constants from './constants';

// futures, momentumSimple, tradeStationEquity, schwab
export const activeProfileName: string = "schwab";
export const tradingSettings: TradingPlans.TradingSettings = {
    equalWeightDivider: 4,
    useSingleOrderForEntry: true,
}
const stock1Configs: TradingPlans.PlanConfigs = {
    size: 0.24,
    deferTradingInSeconds: 0,
    stopTradingAfterSeconds: 0,
    requireReversal: true,
    alwaysAllowStopOutOrFlatten: false,
    allowEarlyExits: false,
    allowFirstFewExitsCount: 2,
};
const stock2Configs: TradingPlans.PlanConfigs = {
    size: 0.24,
    deferTradingInSeconds: 0,
    stopTradingAfterSeconds: 0,
    requireReversal: true,
    alwaysAllowStopOutOrFlatten: false,
    allowEarlyExits: false,
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
const pltrConfigs: TradingPlans.PlanConfigs = {
    size: 0.24,
    deferTradingInSeconds: 0,
    stopTradingAfterSeconds: 0,
    requireReversal: true,
    alwaysAllowStopOutOrFlatten: true,
    allowEarlyExits: true,
    allowFirstFewExitsCount: 2,
};

const heleTarget: TradingPlans.ExitTargets = {
    initialTargets: {
        priceLevels: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        rrr: [0.9, 0.95, 1.5, 1.8, 1.85, 1.9, 1.95, 1.95, 1.95, 3],
        dailyRanges: [1, 1, 10, 10, 10, 10, 10, 10, 10, 10],
    },
    minimumTargets: {
        rrr: [0.4, 0.6, 1, 1.5, 1.8, 1.9, 1.9, 1.9, 1.9, 1.9],
        priceLevels: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        dailyRanges: [1, 1, 1, 1, 1, 1.5, 1.5, 1.5, 1.5, 2],
    },
    wave3BatchIndexStart: 10,
    wave5BatchIndexStart: 10,
    trail5Count: 1,
    trail15Count: 1,
};
const intcShort: TradingPlans.ExitTargets = {
    initialTargets: {
        priceLevels: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        rrr: [0.9, 0.95, 1.5, 1.8, 1.85, 1.9, 1.95, 1.95, 1.95, 3],
        dailyRanges: [1, 1, 10, 10, 10, 10, 10, 10, 10, 10],
    },
    minimumTargets: {
        rrr: [0.4, 0.6, 1, 1.5, 1.8, 1.9, 1.9, 1.9, 1.9, 1.9],
        priceLevels: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        dailyRanges: [0.5, 0.5, 0.5, 0.5, 0.8, 0.8, 0.8, 0.8, 0.8, 0.8],
    },
    wave3BatchIndexStart: 10,
    wave5BatchIndexStart: 10,
    trail5Count: 1,
    trail15Count: 1,
};
const nvdaTarget: TradingPlans.ExitTargets = {
    initialTargets: {
        priceLevels: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        rrr: [0.9, 0.95, 1.5, 1.8, 1.85, 1.9, 1.95, 1.95, 1.95, 3],
        dailyRanges: [1, 1, 10, 10, 10, 10, 10, 10, 10, 10],
    },
    minimumTargets: {
        rrr: [0.4, 0.6, 1, 1.5, 1.8, 1.9, 1.9, 1.9, 1.9, 1.9],
        priceLevels: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        dailyRanges: [0.5, 0.5, 0.5, 1, 1, 1, 1, 1, 1, 1],
    },
    wave3BatchIndexStart: 10,
    wave5BatchIndexStart: 10,
    trail5Count: 1,
    trail15Count: 1,
};
const stock4Target: TradingPlans.ExitTargets = {
    initialTargets: {
        priceLevels: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        rrr: [0.9, 0.95, 1.5, 1.8, 1.85, 1.9, 1.95, 1.95, 1.95, 3],
        dailyRanges: [1, 1, 10, 10, 10, 10, 10, 10, 10, 10],
    },
    minimumTargets: {
        rrr: [0.4, 0.6, 1, 1.5, 1.8, 1.9, 1.9, 1.9, 1.9, 1.9],
        priceLevels: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        dailyRanges: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    },
    wave3BatchIndexStart: 10,
    wave5BatchIndexStart: 10,
    trail5Count: 1,
    trail15Count: 1,
};
export const stockSelections: string[] = [
    'HELE',
    'INTC',
    'NVDA',
    'PLTR',
];

export const stocksTradingPlans: TradingPlans.TradingPlans[] = [
    {
        symbol: 'HELE',
        analysis: {
            newsQualityAndFreshness: -1, gapType: TradingPlans.GapType.Unknown,
            relativeVolumeAndCandleSmoothness: -1,
            cleanVwapTrend: -1, dailyChartStory: -1,
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
            momentumStartForLong: 70,
            momentumStartForShort: 70,
        },
        summary: `
        Atr is 2.79, but gapped down 25. for all day trend short, it needs to bounce back a lot first
        given also low volume in premarket, just avoid first 60 seconds.
        for short, let it pop a few candles first
        
        `,
        short: {
            reasons: [
                "lower guidance",
            ],
            falseBreakoutPlan: { price: 0, targets: heleTarget, planConfigs: stock1Configs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: heleTarget, planConfigs: stock1Configs },
            firstNewHighPlan: { enableAutoTrigger: false, includeSecondNewHigh: true, targets: heleTarget, planConfigs: stock1Configs },
        },
        long: {
            reasons: [
                "no long setup",
            ],
        },
    },
    {
        symbol: 'INTC',
        analysis: {
            newsQualityAndFreshness: 0, gapType: TradingPlans.GapType.Outside,
            relativeVolumeAndCandleSmoothness: 2,
            cleanVwapTrend: 2, dailyChartStory: 1,
        },
        autoFlip: false,
        vwapCorrection: { volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: Constants.marketCaps.INTC,
        atr: {
            average: 0.8,
            mutiplier: 1.2,
            minimumMultipler: 1,
        },
        disableShortIfOpenAbove: 0,
        disableLongIfOpenBelow: 0,
        keyLevels: {
            momentumStartForLong: 34,
            momentumStartForShort: 36,
        },
        summary: `
        big rally yesterday and a huge gap up. it's setting up for profit taking.
        if it opens below 35, ok to take the green to red < 60 after a pop into 35. 
        if it opens above 35, shorts will be much later, if cannot breakout premarket high, short after it comes back to vwap.
        also can be first new low to trigger trailing stop. or green to red
        open above 35 is gap up $1, more than 1ATR, not going to chase it. 
        `,
        short: {
            reasons: [
                "profit taking",
                "still bearish in daily chart"
            ],
            profitTakingFade60Plan: { enableAutoTrigger: false, onlyIfOpenBelow: 35, targets: intcShort, planConfigs: stock2Configs },
            falseBreakoutPlan: { price: 35.47, targets: intcShort, planConfigs: stock2Configs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: intcShort, planConfigs: stock2Configs },
            firstNewHighPlan: { enableAutoTrigger: true, includeSecondNewHigh: true, targets: intcShort, planConfigs: stock2Configs },

        },
        long: {
            reasons: [
                "too extended, no plans",
            ],
        },
    },
    {
        symbol: 'NVDA',
        analysis: {
            newsQualityAndFreshness: 1, gapType: TradingPlans.GapType.Inside,
            relativeVolumeAndCandleSmoothness: 1,
            cleanVwapTrend: 2, dailyChartStory: 1,
        },
        autoFlip: false,
        vwapCorrection: { volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: Constants.marketCaps.NVDA,
        atr: {
            average: 4.9,
            mutiplier: 1,
            minimumMultipler: 0.5,
        },
        disableShortIfOpenAbove: 0,
        disableLongIfOpenBelow: 0,
        keyLevels: {
            momentumStartForLong: 128.5,
            momentumStartForShort: 128.5,
        },
        summary: `
        setting up for a breakout above 130. because it was quickly selling from 140, so reclaim yesterday high can continue to 140.
        positive upgrade to 180 today, very big. due to gap inside, expect the breakout to happen later
        take red to green >60, first new high or level breakout of yesterday high
        has swing potential to 140 in 2 days
        `,
        short: {
            reasons: [
                "no",
            ],
            firstBreakoutPlan: { targets: nvdaTarget, planConfigs: stock3Configs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: nvdaTarget, planConfigs: stock3Configs },
            firstNewHighPlan: { enableAutoTrigger: false, includeSecondNewHigh: true, targets: nvdaTarget, planConfigs: stock3Configs },
            firstRetracementPlan: { targets: nvdaTarget, planConfigs: stock3Configs },
        },
        long: {
            reasons: [
                "big price upgrade",
                "strong vwap in premarket",
                "reclaimed short term moving averages on daily chart"
            ],
            levelBreakout: { entryPrice: 130.77, targets: nvdaTarget, planConfigs: stock3Configs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: nvdaTarget, planConfigs: stock3Configs },
            firstNewHighPlan: { enableAutoTrigger: false, includeSecondNewHigh: true, targets: nvdaTarget, planConfigs: stock3Configs },
            firstRetracementPlan: { targets: nvdaTarget, planConfigs: stock3Configs },
        },
    },
    {
        symbol: 'PLTR',
        analysis: {
            newsQualityAndFreshness: 1, gapType: TradingPlans.GapType.Inside,
            relativeVolumeAndCandleSmoothness: 1,
            cleanVwapTrend: 0, dailyChartStory: 1,
        },
        autoFlip: false,
        vwapCorrection: { volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: Constants.marketCaps.PLTR,
        atr: {
            average: 0.97,
            mutiplier: 1,
            minimumMultipler: 0.5,
        },
        disableShortIfOpenAbove: 0,
        disableLongIfOpenBelow: 0,
        keyLevels: {
            momentumStartForLong: 27.74,
            momentumStartForShort: 28,
        },
        summary: `
        lower volume but near all time high. expect a breakout trade later in the day. 
        if premarket low holds above 27.75, it's just 0.25 to breakout 28. 
        `,
        short: {
            reasons: [
                "near all time high resistance",
            ],
            falseBreakoutPlan: { price: 28, targets: stock4Target, planConfigs: pltrConfigs },
        },
        long: {
            reasons: [
                "positive news",
                "already sold off yesterday but bounced back and near all time high"
            ],
            levelBreakout: { entryPrice: 28, targets: stock4Target, planConfigs: pltrConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock4Target, planConfigs: pltrConfigs },
        },
    },
];