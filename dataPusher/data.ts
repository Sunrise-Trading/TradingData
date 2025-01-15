import * as TradingPlans from './models';
import * as Constants from './constants';

// futures, momentumSimple, tradeStationEquity, schwab
export const activeProfileName: string = "schwab";
export const tradingSettings: TradingPlans.TradingSettings = {
    snapMode: false,
    useSingleOrderForEntry: true,
}
export const defaultSize = 0.28;
const rgtiConfigs: TradingPlans.PlanConfigs = {
    size: defaultSize,
    deferTradingInSeconds: 0,
    stopTradingAfterSeconds: 0,
    requireReversal: true,
    alwaysAllowFlatten: true,
    alwaysAllowMoveStop: true,
    allowFirstFewExitsCount: 3,
    setupQuality: TradingPlans.SetupQuality.Scalp,
};
const spyConfigs: TradingPlans.PlanConfigs = {
    size: defaultSize,
    deferTradingInSeconds: 0,
    stopTradingAfterSeconds: 0,
    requireReversal: true,
    alwaysAllowFlatten: true,
    alwaysAllowMoveStop: true,
    allowFirstFewExitsCount: 3,
    setupQuality: TradingPlans.SetupQuality.Scalp,

};
const hoodConfigs: TradingPlans.PlanConfigs = {
    size: defaultSize,
    deferTradingInSeconds: 0,
    stopTradingAfterSeconds: 0,
    requireReversal: true,
    alwaysAllowFlatten: true,
    alwaysAllowMoveStop: true,
    allowFirstFewExitsCount: 3,
    setupQuality: TradingPlans.SetupQuality.Move2Move,
};
const stock4Configs: TradingPlans.PlanConfigs = {
    size: defaultSize,
    deferTradingInSeconds: 0,
    stopTradingAfterSeconds: 0,
    requireReversal: true,
    alwaysAllowFlatten: true,
    alwaysAllowMoveStop: true,
    allowFirstFewExitsCount: 3,
    setupQuality: TradingPlans.SetupQuality.Unknown,
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
    'RGTI', 'SPY', 'HOOD'
];

export const stocksTradingPlans: TradingPlans.TradingPlans[] = [
    {
        symbol: 'RGTI',
        analysis: {
            isFreshNews: true, newsImpactScore: 4, marketReactionScore: 4, swingHoldRatio: 0,
            relativeVolumeAndCandleSmoothness: 2,
            cleanVwapTrend: 2, dailyChartStory: 1,
            gapSize: 2.5,
            weeklychart: "pop and fade",
            dailyChart: "down",
            hourlyChart: "up",
            premarketChart: "above vwap",
            keyLevels: [8.97],
            singleMomentumKeyLevel: 8.97,
            dualMomentumKeyLevels: [],
            profitTargetsForLong: {
                targets: [10.75, 11, 11.3], willBlowPastThoseLevels: 0.2, summary: `
                quick pop at the open from yesterday continuation.
                ` },
            profitTargetsForShort: {
                targets: [8.74, 6.57], willBlowPastThoseLevels: 0, summary: `
                gap fill
                ` },
            vwapExtensionDistance: 0,
            choppyOpenRangeHigh: 0,
            choppyOpenRangeLow: 0,
        },
        autoFlip: false,
        vwapCorrection: { open: 0, volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: Constants.marketCaps.RGTI,
        atr: {
            average: 2,
            mutiplier: 2,
            minimumMultipler: 1,
            maxRisk: 0.5,
        },
        disableShortIfOpenAbove: 0,
        disableLongIfOpenBelow: 0,
        keyLevels: {
            momentumStartForLong: 9,
            momentumStartForShort: 11,
        },
        summary: `
        above 10 and vwap can keep short squeezing. look for quick pop at open, and roll over later in the day
        `,
        setups: [],
        defaultConfigs: rgtiConfigs, defaultTargets: stock1Target,
        short: {
            reasons: [
                "long term trend down",
            ],
            profitTakingExhaust60Plan: { includeOpenChase: false, minDistanceToVwap: 0.5, targets: stock1Target, planConfigs: rgtiConfigs },
            levelMomentumPlan: { targets: stock1Target, planConfigs: rgtiConfigs },
            falseBreakoutPlan: { price: 0, targets: stock1Target, planConfigs: rgtiConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock1Target, planConfigs: rgtiConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, targets: stock1Target, planConfigs: rgtiConfigs },
            deferredBreakoutPlan: { targets: stock1Target, planConfigs: rgtiConfigs },
        },
        long: {
            reasons: [
                "short squeeze",
            ],
            levelMomentumPlan: { targets: stock1Target, planConfigs: rgtiConfigs },
            falseBreakoutPlan: { price: 0, targets: stock1Target, planConfigs: rgtiConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock1Target, planConfigs: rgtiConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, targets: stock1Target, planConfigs: rgtiConfigs },
            deferredBreakoutPlan: { targets: stock1Target, planConfigs: rgtiConfigs },
        },
    },
    {
        symbol: 'SPY',
        analysis: {
            isFreshNews: true, newsImpactScore: 6, marketReactionScore: 6, swingHoldRatio: 0,
            relativeVolumeAndCandleSmoothness: 2,
            cleanVwapTrend: 2, dailyChartStory: 1,
            gapSize: 8,
            weeklychart: "up and pullback",
            dailyChart: "down",
            hourlyChart: "range",
            premarketChart: "above vwap and reaction high",
            keyLevels: [589.32],
            singleMomentumKeyLevel: 589.32,
            dualMomentumKeyLevels: [],
            profitTargetsForLong: {
                targets: [591.78, 592], willBlowPastThoseLevels: 0.6, summary: `
                continuation, no clear levels
                ` },
            profitTargetsForShort: {
                targets: [586, 584], willBlowPastThoseLevels: 0.1, summary: `
                gap fill
                ` },
            vwapExtensionDistance: 0,
            choppyOpenRangeHigh: 0,
            choppyOpenRangeLow: 0,
        },
        autoFlip: false,
        vwapCorrection: { open: 0, volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: 1000,
        atr: {
            average: 4,
            mutiplier: 1,
            minimumMultipler: 1,
            maxRisk: 1.5,
        },
        disableShortIfOpenAbove: 0,
        disableLongIfOpenBelow: 0,
        keyLevels: {
            momentumStartForLong: 589.32,
            momentumStartForShort: 589.32,
        },
        summary: `
        key CPI reaction high as key level
        `,
        setups: [],
        defaultConfigs: spyConfigs, defaultTargets: stock2Target,
        short: {
            reasons: [
                "gap into resistance",
            ],
            levelMomentumPlan: { targets: stock2Target, planConfigs: spyConfigs },
            falseBreakoutPlan: { price: 0, targets: stock2Target, planConfigs: spyConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock2Target, planConfigs: spyConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, targets: stock2Target, planConfigs: spyConfigs },
            deferredBreakoutPlan: { targets: stock2Target, planConfigs: spyConfigs },
        },
        long: {
            reasons: [
                "continuation, bounce from bottom",
            ],
            levelMomentumPlan: { targets: stock2Target, planConfigs: spyConfigs },
            falseBreakoutPlan: { price: 0, targets: stock2Target, planConfigs: spyConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock2Target, planConfigs: spyConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, targets: stock2Target, planConfigs: spyConfigs },
            deferredBreakoutPlan: { targets: stock2Target, planConfigs: spyConfigs },
        },
    },
    {
        symbol: 'HOOD',
        analysis: {
            isFreshNews: true, newsImpactScore: 4, marketReactionScore: 6, swingHoldRatio: 0.2,
            relativeVolumeAndCandleSmoothness: 2,
            cleanVwapTrend: 2, dailyChartStory: 2,
            gapSize: 3,
            weeklychart: "up",
            dailyChart: "up",
            hourlyChart: "range",
            premarketChart: "hold above all time high and vwap",
            keyLevels: [43.83],
            singleMomentumKeyLevel: 43.83,
            dualMomentumKeyLevels: [],
            profitTargetsForLong: {
                targets: [45, 46], willBlowPastThoseLevels: 0.8, summary: `
                all time high breakout, not real all time high, but next target is 47
                ` },
            profitTargetsForShort: {
                targets: [43.16, 43], willBlowPastThoseLevels: 0.1, summary: `
                small gap fill
                ` },
            vwapExtensionDistance: 0,
            choppyOpenRangeHigh: 0,
            choppyOpenRangeLow: 0,
        },
        autoFlip: false,
        vwapCorrection: { open: 0, volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: Constants.marketCaps.HOOD,
        atr: {
            average: 2.44,
            mutiplier: 1.5,
            minimumMultipler: 1,
            maxRisk: 1,
        },
        disableShortIfOpenAbove: 0,
        disableLongIfOpenBelow: 0,
        keyLevels: {
            momentumStartForLong: 43.83,
            momentumStartForShort: 43.83,
        },
        summary: `
        long biased. 
        `,
        setups: [],
        defaultConfigs: hoodConfigs, defaultTargets: stock3Target,
        short: {
            reasons: [
                "false breakout",
            ],
            levelMomentumPlan: { targets: stock3Target, planConfigs: hoodConfigs },
            falseBreakoutPlan: { price: 0, targets: stock3Target, planConfigs: hoodConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock3Target, planConfigs: hoodConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, targets: stock3Target, planConfigs: hoodConfigs },
            deferredBreakoutPlan: { targets: stock3Target, planConfigs: hoodConfigs },
        },
        long: {
            reasons: [
                "52 week high breakout",
            ],
            levelMomentumPlan: { targets: stock3Target, planConfigs: hoodConfigs },
            falseBreakoutPlan: { price: 0, targets: stock3Target, planConfigs: hoodConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock3Target, planConfigs: hoodConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, targets: stock3Target, planConfigs: hoodConfigs },
            deferredBreakoutPlan: { targets: stock3Target, planConfigs: hoodConfigs },
        },
    },
    {
        symbol: 'stock4',
        analysis: {
            isFreshNews: false, newsImpactScore: 0, marketReactionScore: 0, swingHoldRatio: 0,
            relativeVolumeAndCandleSmoothness: -1,
            cleanVwapTrend: -1, dailyChartStory: -1,
            gapSize: 0,
            weeklychart: "",
            dailyChart: "",
            hourlyChart: "",
            premarketChart: "",
            keyLevels: [],
            singleMomentumKeyLevel: -1,
            dualMomentumKeyLevels: [],
            profitTargetsForLong: {
                targets: [], willBlowPastThoseLevels: -1, summary: `
                ` },
            profitTargetsForShort: {
                targets: [], willBlowPastThoseLevels: -1, summary: `
                ` },
            vwapExtensionDistance: 0,
            choppyOpenRangeHigh: 0,
            choppyOpenRangeLow: 0,
        },
        autoFlip: false,
        vwapCorrection: { open: 0, volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: 0,
        atr: {
            average: 0,
            mutiplier: 0,
            minimumMultipler: 0,
            maxRisk: 0,
        },
        disableShortIfOpenAbove: 0,
        disableLongIfOpenBelow: 0,
        keyLevels: {
            momentumStartForLong: 0,
            momentumStartForShort: 0,
        },
        summary: `
        
        `,
        setups: [],
        defaultConfigs: stock4Configs, defaultTargets: stock4Target,
        short: {
            reasons: [
                "",
            ],
            levelMomentumPlan: { targets: stock4Target, planConfigs: stock4Configs },
            falseBreakoutPlan: { price: 0, targets: stock4Target, planConfigs: stock4Configs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock4Target, planConfigs: stock4Configs },
            firstNewHighPlan: { enableAutoTrigger: false, targets: stock4Target, planConfigs: stock4Configs },
            deferredBreakoutPlan: { targets: stock4Target, planConfigs: stock4Configs },
        },
        long: {
            reasons: [
                "",
            ],
            levelMomentumPlan: { targets: stock4Target, planConfigs: stock4Configs },
            falseBreakoutPlan: { price: 0, targets: stock4Target, planConfigs: stock4Configs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock4Target, planConfigs: stock4Configs },
            firstNewHighPlan: { enableAutoTrigger: false, targets: stock4Target, planConfigs: stock4Configs },
            deferredBreakoutPlan: { targets: stock4Target, planConfigs: stock4Configs },
        },
    },
];