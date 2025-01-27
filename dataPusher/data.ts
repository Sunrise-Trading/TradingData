import * as TradingPlans from './models';
import * as Constants from './constants';

// futures, momentumSimple, tradeStationEquity, schwab
export const activeProfileName: string = "schwab";
export const tradingSettings: TradingPlans.TradingSettings = {
    snapMode: false,
    useSingleOrderForEntry: true,
}
export const defaultSize = 0.25;
const nvdaConfigs: TradingPlans.PlanConfigs = {
    size: defaultSize,
    deferTradingInSeconds: 0,
    stopTradingAfterSeconds: 0,
    requireReversal: true,
    alwaysAllowFlatten: true,
    alwaysAllowMoveStop: true,
    allowFirstFewExitsCount: 3,
    setupQuality: TradingPlans.SetupQuality.SwingHold,
};
const scalpConfigs: TradingPlans.PlanConfigs = {
    size: defaultSize,
    deferTradingInSeconds: 0,
    stopTradingAfterSeconds: 0,
    requireReversal: true,
    alwaysAllowFlatten: true,
    alwaysAllowMoveStop: true,
    allowFirstFewExitsCount: 3,
    setupQuality: TradingPlans.SetupQuality.Scalp,
};
const akroConfigs: TradingPlans.PlanConfigs = {
    size: defaultSize,
    deferTradingInSeconds: 0,
    stopTradingAfterSeconds: 0,
    requireReversal: true,
    alwaysAllowFlatten: true,
    alwaysAllowMoveStop: true,
    allowFirstFewExitsCount: 3,
    setupQuality: TradingPlans.SetupQuality.Move2Move,

};
const vstConfigs: TradingPlans.PlanConfigs = {
    size: defaultSize,
    deferTradingInSeconds: 0,
    stopTradingAfterSeconds: 0,
    requireReversal: true,
    alwaysAllowFlatten: true,
    alwaysAllowMoveStop: true,
    allowFirstFewExitsCount: 3,
    setupQuality: TradingPlans.SetupQuality.Scalp,
};
const cegConfigs: TradingPlans.PlanConfigs = {
    size: defaultSize,
    deferTradingInSeconds: 0,
    stopTradingAfterSeconds: 0,
    requireReversal: true,
    alwaysAllowFlatten: true,
    alwaysAllowMoveStop: true,
    allowFirstFewExitsCount: 3,
    setupQuality: TradingPlans.SetupQuality.Scalp,
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
    'NVDA',
    'AKRO',
    'CEG', 'VST',
];

export const stocksTradingPlans: TradingPlans.TradingPlans[] = [
    {
        symbol: 'NVDA',
        analysis: {
            isFreshNews: false, newsImpactScore: 10, marketReactionScore: 8, swingHoldRatio: 0.2,
            relativeVolumeAndCandleSmoothness: 2,
            cleanVwapTrend: 2, dailyChartStory: 2,
            allowFirstMinuteByNewsQuality: true,
            allowFirstMinuteByRelativeVolume: true,
            allowFirstMinutezByKeyLevelsQuality: true,
            gapSize: 14,
            weeklychart: "range",
            dailyChart: "range",
            hourlyChart: "down",
            premarketChart: "strong selloff below vwap",
            keyLevels: [126.86],
            singleMomentumKeyLevel: 126.86,
            dualMomentumKeyLevels: [],
            profitTargetsForLong: {
                targets: [130, 134], willBlowPastThoseLevels: 0.1, summary: `
                sell at resistance, scalp long
                ` },
            profitTargetsForShort: {
                targets: [121, 122.75], willBlowPastThoseLevels: 0.3, summary: `
                if stay below 126.86, can be a big selloff day. first target is premarke low, then 200 day moving average 121.
                ` },
            vwapExtensionDistance: 0,
            choppyOpenRangeHigh: 0,
            choppyOpenRangeLow: 0,
        },
        autoFlip: false,
        vwapCorrection: { open: 0, volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: Constants.marketCaps.NVDA,
        atr: {
            average: 5.75,
            mutiplier: 1.8,
            minimumMultipler: 1,
            maxRisk: 2,
        },
        disableShortIfOpenAbove: 0,
        disableLongIfOpenBelow: 0,
        keyLevels: {
            momentumStartForLong: 0,
            momentumStartForShort: 0,
        },
        summary: `
        at key level 126.86, if stay below, can be a big selloff day. but if reclaim, need to wait for a short at the next resistance.
        the next few resistance are sunday low 133.83.
        long will not be a good setup because there are better stocks to go long on the bounce from this market selloff.
        `,
        setups: [],
        defaultConfigs: nvdaConfigs, defaultTargets: stock1Target,
        short: {
            reasons: [
                "AI uncertainty by deepseek",
            ],
            levelMomentumPlan: { enableAutoTrigger: false, targets: stock1Target, planConfigs: nvdaConfigs },
            falseBreakoutPlan: { price: 0, targets: stock1Target, planConfigs: nvdaConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock1Target, planConfigs: nvdaConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, targets: stock1Target, planConfigs: nvdaConfigs },
            deferredBreakoutPlan: { targets: stock1Target, planConfigs: nvdaConfigs },
        },
        long: {
            reasons: [
                "sold off too much, and already had a selloff day last friday",
            ],
            levelMomentumPlan: { enableAutoTrigger: false, targets: stock1Target, planConfigs: scalpConfigs },
            falseBreakoutPlan: { price: 0, targets: stock1Target, planConfigs: scalpConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock1Target, planConfigs: scalpConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, targets: stock1Target, planConfigs: scalpConfigs },
            deferredBreakoutPlan: { targets: stock1Target, planConfigs: scalpConfigs },
        },
    },
    {
        symbol: 'AKRO',
        analysis: {
            isFreshNews: true, newsImpactScore: 7, marketReactionScore: 8, swingHoldRatio: 0.2,
            relativeVolumeAndCandleSmoothness: 2,
            cleanVwapTrend: 1, dailyChartStory: 2,
            allowFirstMinuteByNewsQuality: true,
            allowFirstMinuteByRelativeVolume: true,
            allowFirstMinutezByKeyLevelsQuality: true,
            gapSize: 30,
            weeklychart: "down",
            dailyChart: "down range",
            hourlyChart: "range",
            premarketChart: "mixed around vwap",
            keyLevels: [58.38, 54.88],
            singleMomentumKeyLevel: 58.38,
            dualMomentumKeyLevels: [],
            profitTargetsForLong: {
                targets: [60, 63.9], willBlowPastThoseLevels: 0.1, summary: `
                unlikely to break all time high and continue, can be a fade
                ` },
            profitTargetsForShort: {
                targets: [55, 50], willBlowPastThoseLevels: 0.4, summary: `
                big room to the down side.
                ` },
            vwapExtensionDistance: 0,
            choppyOpenRangeHigh: 0,
            choppyOpenRangeLow: 0,
        },
        autoFlip: false,
        vwapCorrection: { open: 0, volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: Constants.marketCaps.AKRO,
        atr: {
            average: 1.44,
            mutiplier: 3,
            minimumMultipler: 1.5,
            maxRisk: 1.5,
        },
        disableShortIfOpenAbove: 0,
        disableLongIfOpenBelow: 0,
        keyLevels: {
            momentumStartForLong: 0,
            momentumStartForShort: 0,
        },
        summary: `
        near below all time high. the best setup is wait for the interaction at all time high. 
        volume in premarket is super high and i tend to believe it will be a fade. because the market cap is 
        just 1.83 billion, it is not a big company. and we already traded 10% of the market cap in premarket.
        either short the break below 54.88 or short the fade at 58.38.
        `,
        setups: [],
        defaultConfigs: akroConfigs, defaultTargets: stock2Target,
        short: {
            reasons: [
                "traded too heavy in premarket",
            ],
            profitTakingExhaust60Plan: { includeOpenChase: false, minDistanceToVwap: 0.1, targets: stock2Target, planConfigs: akroConfigs },
            levelMomentumPlan: { enableAutoTrigger: true, targets: stock2Target, planConfigs: akroConfigs },
            falseBreakoutPlan: { price: 0, targets: stock2Target, planConfigs: akroConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock2Target, planConfigs: akroConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, targets: stock2Target, planConfigs: akroConfigs },
            deferredBreakoutPlan: { targets: stock2Target, planConfigs: akroConfigs },
        },
        long: {
            reasons: [
                "positive news.",
            ],
            levelMomentumPlan: { enableAutoTrigger: false, targets: stock2Target, planConfigs: akroConfigs },
            falseBreakoutPlan: { price: 0, targets: stock2Target, planConfigs: akroConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock2Target, planConfigs: akroConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, targets: stock2Target, planConfigs: akroConfigs },
            deferredBreakoutPlan: { targets: stock2Target, planConfigs: akroConfigs },
        },
    },
    {
        symbol: 'VST',
        analysis: {
            isFreshNews: true, newsImpactScore: 8, marketReactionScore: 8, swingHoldRatio: 0.3,
            relativeVolumeAndCandleSmoothness: 2,
            cleanVwapTrend: 2, dailyChartStory: 1,
            allowFirstMinuteByNewsQuality: true,
            allowFirstMinuteByRelativeVolume: true,
            allowFirstMinutezByKeyLevelsQuality: false,
            gapSize: 30,
            weeklychart: "up",
            dailyChart: "up",
            hourlyChart: "up",
            premarketChart: "below vwap",
            keyLevels: [190],
            singleMomentumKeyLevel: 190,
            dualMomentumKeyLevels: [],
            profitTargetsForLong: {
                targets: [1, 2], willBlowPastThoseLevels: 0.1, summary: `
                no plan to long
                ` },
            profitTargetsForShort: {
                targets: [158.62, 155], willBlowPastThoseLevels: 0.3, summary: `
                premarket low, then 50 day moving average
                ` },
            vwapExtensionDistance: 0,
            choppyOpenRangeHigh: 0,
            choppyOpenRangeLow: 0,
        },
        autoFlip: false,
        vwapCorrection: { open: 0, volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: Constants.marketCaps.VST,
        atr: {
            average: 10,
            mutiplier: 1.5,
            minimumMultipler: 1,
            maxRisk: 3,
        },
        disableShortIfOpenAbove: 0,
        disableLongIfOpenBelow: 0,
        keyLevels: {
            momentumStartForLong: 0,
            momentumStartForShort: 0,
        },
        summary: `
        due to not the main stock under the spotlight of deepseek, need to wait for 1 minute to make a pop. and then short 
        the first new low. gap down too much, not a good idea to short at the open. so skip first 60 seconds. 
        `,
        setups: [],
        defaultConfigs: vstConfigs, defaultTargets: stock3Target,
        short: {
            reasons: [
                "may not need much power due to deepseek",
            ],
            levelMomentumPlan: { enableAutoTrigger: true, targets: stock3Target, planConfigs: vstConfigs },
            falseBreakoutPlan: { price: 0, targets: stock3Target, planConfigs: vstConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock3Target, planConfigs: vstConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, targets: stock3Target, planConfigs: vstConfigs },
            deferredBreakoutPlan: { targets: stock3Target, planConfigs: vstConfigs },
        },
        long: {
            reasons: [
                "long term trend is up",
            ],
            levelMomentumPlan: { enableAutoTrigger: true, targets: stock3Target, planConfigs: vstConfigs },
            falseBreakoutPlan: { price: 0, targets: stock3Target, planConfigs: vstConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock3Target, planConfigs: vstConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, targets: stock3Target, planConfigs: vstConfigs },
            deferredBreakoutPlan: { targets: stock3Target, planConfigs: vstConfigs },
        },
    },
    {
        symbol: 'CEG',
        analysis: {
            isFreshNews: true, newsImpactScore: 8, marketReactionScore: 8, swingHoldRatio: 0.3,
            relativeVolumeAndCandleSmoothness: 1,
            cleanVwapTrend: 2, dailyChartStory: 1,
            allowFirstMinuteByNewsQuality: true,
            allowFirstMinuteByRelativeVolume: false,
            allowFirstMinutezByKeyLevelsQuality: false,
            gapSize: 50,
            weeklychart: "up",
            dailyChart: "up",
            hourlyChart: "up",
            premarketChart: "below vwap",
            keyLevels: [340],
            singleMomentumKeyLevel: 340,
            dualMomentumKeyLevels: [],
            profitTargetsForLong: {
                targets: [1, 2], willBlowPastThoseLevels: 0.1, summary: `
                no plan to long
                ` },
            profitTargetsForShort: {
                targets: [289, 277], willBlowPastThoseLevels: 0.3, summary: `
                premarket low, then moving average 277
                ` },
            vwapExtensionDistance: 0,
            choppyOpenRangeHigh: 0,
            choppyOpenRangeLow: 0,
        },
        autoFlip: false,
        vwapCorrection: { open: 0, volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: Constants.marketCaps.CEG,
        atr: {
            average: 15,
            mutiplier: 1,
            minimumMultipler: 1,
            maxRisk: 5,
        },
        disableShortIfOpenAbove: 0,
        disableLongIfOpenBelow: 0,
        keyLevels: {
            momentumStartForLong: 0,
            momentumStartForShort: 0,
        },
        summary: `
        same as VST
        `,
        setups: [],
        defaultConfigs: cegConfigs, defaultTargets: stock4Target,
        short: {
            reasons: [
                "deepseek news",
            ],
            levelMomentumPlan: { enableAutoTrigger: true, targets: stock4Target, planConfigs: cegConfigs },
            falseBreakoutPlan: { price: 0, targets: stock4Target, planConfigs: cegConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock4Target, planConfigs: cegConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, targets: stock4Target, planConfigs: cegConfigs },
            deferredBreakoutPlan: { targets: stock4Target, planConfigs: cegConfigs },
        },
        long: {
            reasons: [
                "long term trend is up",
            ],
            levelMomentumPlan: { enableAutoTrigger: true, targets: stock4Target, planConfigs: cegConfigs },
            falseBreakoutPlan: { price: 0, targets: stock4Target, planConfigs: cegConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock4Target, planConfigs: cegConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, targets: stock4Target, planConfigs: cegConfigs },
            deferredBreakoutPlan: { targets: stock4Target, planConfigs: cegConfigs },
        },
    },
];