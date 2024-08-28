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
const stock4Configs: TradingPlans.PlanConfigs = {
    size: 0.24,
    deferTradingInSeconds: 0,
    stopTradingAfterSeconds: 0,
    requireReversal: true,
    alwaysAllowStopOutOrFlatten: false,
    allowEarlyExits: false,
    allowFirstFewExitsCount: 2,
};

const ambaTarget: TradingPlans.ExitTargets = {
    initialTargets: {
        priceLevels: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        rrr: [1.5, 1.6, 1.8, 1.9, 2, 2, 3, 3, 3, 3],
        dailyRanges: [1, 1, 1.5, 1.5, 1.9, 1.9, 1.9, 1.9, 1.9, 2],
    },
    minimumTargets: {
        priceLevels: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        rrr: [1.5, 1.6, 1.8, 1.9, 2, 2, 2, 2, 2, 2],
        dailyRanges: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    },
    wave3BatchIndexStart: 10,
    wave5BatchIndexStart: 10,
    trail5Count: 8,
    trail15Count: 10,
};
const nbixTarget: TradingPlans.ExitTargets = {
    initialTargets: {
        priceLevels: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        rrr: [1.5, 1.6, 1.8, 1.9, 2, 2, 3, 3, 3, 3],
        dailyRanges: [1, 1, 1, 1, 1, 1.1, 1.2, 1.3, 1.4, 1.5],
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
const smciTarget: TradingPlans.ExitTargets = {
    initialTargets: {
        priceLevels: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        rrr: [1.5, 1.6, 1.8, 1.9, 2, 2, 3, 3, 3, 3],
        dailyRanges: [1, 1, 1.5, 1.5, 1.9, 1.9, 1.9, 1.9, 1.9, 2],
    },
    minimumTargets: {
        priceLevels: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        rrr: [1.5, 1.6, 1.8, 1.9, 2, 2, 2, 2, 2, 2],
        dailyRanges: [1, 1, 1, 1, 1, 1, 1, 1, 1.5, 1.5],
    },
    wave3BatchIndexStart: 10,
    wave5BatchIndexStart: 10,
    trail5Count: 8,
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
    trail5Count: 4,
    trail15Count: 4,
};
export const stockSelections: string[] = [
    'SMCI',
    'NBIX', 'AMBA',
];

export const stocksTradingPlans: TradingPlans.TradingPlans[] = [
    {
        symbol: 'AMBA',
        analysis: {
            newsQualityAndFreshness: 2, gapType: TradingPlans.GapType.Outside,
            relativeVolumeAndCandleSmoothness: 1,
            cleanVwapTrend: 2, dailyChartStory: 2,
            gapSize: 10,
            weeklychart: "bearish range trading",
            dailyChart: "consolidation wide range",
            hourlyChart: "rally",
            premarketChart: "below vwap",
            keyLevels: [65.36, 66, 60],
        },
        autoFlip: false,
        vwapCorrection: { volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: Constants.marketCaps.AMBA,
        atr: {
            average: 2.39,
            mutiplier: 1.5,
            minimumMultipler: 1,
        },
        disableShortIfOpenAbove: 0,
        disableLongIfOpenBelow: 0,
        keyLevels: {
            momentumStartForLong: 60,
            momentumStartForShort: 66,
        },
        summary: `
        largest up gapper. Gap under resistance 66. premarket below vwap. setting up for gap up and fade. 
        volume is very low, so skip first 60 seconds. 
        first pop into vwap will get reject. for long, it needs to breakout high of day 2nd time above vwap.
        this can be a great trade, try to stay with it. there are too many resistance above, so short only. 
        long is not easy, at most range trading, but not breakout momentum long. so disable long.
        `,
        short: {
            reasons: [
                "Gap under resistance 66. premarket below vwap",
            ],
            falseBreakoutPlan: { price: 66, targets: ambaTarget, planConfigs: stock1Configs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: ambaTarget, planConfigs: stock1Configs },
            firstNewHighPlan: { enableAutoTrigger: false, includeSecondNewHigh: true, targets: ambaTarget, planConfigs: stock1Configs },
            firstRetracementPlan: { targets: ambaTarget, planConfigs: stock1Configs },
        },
        long: {
            reasons: [
                "firms upgrade",
            ],
            /*
            falseBreakoutPlan: { price: 62, targets: ambaTarget, planConfigs: stock1Configs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: ambaTarget, planConfigs: stock1Configs },
            firstNewHighPlan: { enableAutoTrigger: false, includeSecondNewHigh: true, targets: ambaTarget, planConfigs: stock1Configs },
            firstRetracementPlan: { targets: ambaTarget, planConfigs: stock1Configs },
            */
        },
    },
    {
        symbol: 'NBIX',
        analysis: {
            newsQualityAndFreshness: 1, gapType: TradingPlans.GapType.Outside,
            relativeVolumeAndCandleSmoothness: 1,
            cleanVwapTrend: 2, dailyChartStory: 2,
            gapSize: 30,
            weeklychart: "uptrend",
            dailyChart: "consolidation",
            hourlyChart: "consolidation",
            premarketChart: "gap down and flat",
            keyLevels: [130, 129],
        },
        autoFlip: false,
        vwapCorrection: { volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: Constants.marketCaps.NBIX,
        atr: {
            average: 3.7,
            mutiplier: 1.3,
            minimumMultipler: 0.8,
        },
        disableShortIfOpenAbove: 0,
        disableLongIfOpenBelow: 0,
        keyLevels: {
            momentumStartForLong: 0,
            momentumStartForShort: 0,
        },
        summary: `
        huge gap down below key range low. let it pop and then short the first breakdown.
        initial momentum is bearish, so just short for the day.
        skip first 60 seconds because the gap down is big and long term trend up. so expect at least 1 minute pop.
        `,
        short: {
            reasons: [
                "huge gap down below key range low",
            ],
            falseBreakoutPlan: { price: 0, targets: nbixTarget, planConfigs: stock2Configs },
            firstBreakoutPlan: { targets: nbixTarget, planConfigs: stock2Configs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: nbixTarget, planConfigs: stock2Configs },
            firstNewHighPlan: { enableAutoTrigger: false, includeSecondNewHigh: true, targets: nbixTarget, planConfigs: stock2Configs },
            firstRetracementPlan: { targets: nbixTarget, planConfigs: stock2Configs },
        },
        long: {
            reasons: [
                "long term trend is bullish, first dip gets bought up",
            ],
            /*
            falseBreakoutPlan: { price: 0, targets: stock2Target, planConfigs: stock2Configs },
            firstBreakoutPlan: { targets: stock2Target, planConfigs: stock2Configs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock2Target, planConfigs: stock2Configs },
            firstNewHighPlan: { enableAutoTrigger: false, includeSecondNewHigh: true, targets: stock2Target, planConfigs: stock2Configs },
            firstRetracementPlan: { targets: stock2Target, planConfigs: stock2Configs },
            */
        },
    },
    {
        symbol: 'SMCI',
        analysis: {
            newsQualityAndFreshness: 2, gapType: TradingPlans.GapType.Outside,
            relativeVolumeAndCandleSmoothness: 2,
            cleanVwapTrend: 2, dailyChartStory: 2,
            gapSize: 50,
            weeklychart: "down trend",
            dailyChart: "down trend",
            hourlyChart: "down trend",
            premarketChart: "below vwap",
            keyLevels: [495, 500],
        },
        autoFlip: false,
        vwapCorrection: { volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: Constants.marketCaps.SMCI,
        atr: {
            average: 48,
            mutiplier: 0,
            minimumMultipler: 0,
        },
        disableShortIfOpenAbove: 0,
        disableLongIfOpenBelow: 0,
        keyLevels: {
            momentumStartForLong: 550,
            momentumStartForShort: 550,
        },
        summary: `
        solid short only. this can be a big trade, stay with it. short the first breakdown. best setup, prepare 60 seconds.
        `,
        short: {
            reasons: [
                "10 K delay confirms yesterday short seller reports",
                "already bought up the selloff yesterday, no more buying today"
            ],
            falseBreakoutPlan: { price: 495, targets: smciTarget, planConfigs: stock3Configs },
            openDriveContinuation60Plan: { targets: smciTarget, planConfigs: stock3Configs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: smciTarget, planConfigs: stock3Configs },
            firstNewHighPlan: { enableAutoTrigger: false, includeSecondNewHigh: true, targets: smciTarget, planConfigs: stock3Configs },
            firstRetracementPlan: { targets: smciTarget, planConfigs: stock3Configs },
        },
        long: {
            reasons: [
                "none",
            ],
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