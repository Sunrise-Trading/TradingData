import * as TradingPlans from './models';
import * as Constants from './constants';

// futures, momentumSimple, tradeStationEquity, schwab
export const activeProfileName: string = "schwab";
export const tradingSettings: TradingPlans.TradingSettings = {
    snapMode: false,
    useSingleOrderForEntry: true,
}
export const defaultSize = 0.24;
const mndyConfigs: TradingPlans.PlanConfigs = {
    size: defaultSize,
    deferTradingInSeconds: 0,
    stopTradingAfterSeconds: 0,
    requireReversal: true,
    alwaysAllowFlatten: true,
    alwaysAllowMoveStop: true,
    allowFirstFewExitsCount: 3,
    setupQuality: TradingPlans.SetupQuality.Scalp,
};
const onConfigs: TradingPlans.PlanConfigs = {
    size: defaultSize,
    deferTradingInSeconds: 0,
    stopTradingAfterSeconds: 0,
    requireReversal: true,
    alwaysAllowFlatten: true,
    alwaysAllowMoveStop: true,
    allowFirstFewExitsCount: 3,
    setupQuality: TradingPlans.SetupQuality.Scalp,

};
const bpConfigs: TradingPlans.PlanConfigs = {
    size: defaultSize,
    deferTradingInSeconds: 0,
    stopTradingAfterSeconds: 0,
    requireReversal: true,
    alwaysAllowFlatten: true,
    alwaysAllowMoveStop: true,
    allowFirstFewExitsCount: 3,
    setupQuality: TradingPlans.SetupQuality.Scalp,
};
const stock4Configs: TradingPlans.PlanConfigs = {
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
    'MNDY', 'ON',
    'BP'
];

export const stocksTradingPlans: TradingPlans.TradingPlans[] = [
    {
        symbol: 'MNDY',
        analysis: {
            isFreshNews: true, newsImpactScore: 5, marketReactionScore: 5, swingHoldRatio: 0.1,
            relativeVolumeAndCandleSmoothness: 2,
            cleanVwapTrend: 2, dailyChartStory: 2,
            allowFirstMinuteByNewsQuality: true,
            allowFirstMinuteByRelativeVolume: true,
            allowFirstMinutezByKeyLevelsQuality: true,
            gapSize: 70,
            weeklychart: "up and pullback",
            dailyChart: "down",
            hourlyChart: "range",
            premarketChart: "hold above vwap",
            keyLevels: [324.99],
            singleMomentumKeyLevel: { high: 324.99, low: 324.99 },
            dualMomentumKeyLevels: [],
            profitTargetsForLong: {
                targets: [340, 350], willBlowPastThoseLevels: 0.3, summary: `
                big room upside, but there are still resistance
                ` },
            profitTargetsForShort: {
                targets: [310, 300], willBlowPastThoseLevels: 0.3, summary: `
                big room to gap fill to 300
                ` },
            vwapExtensionDistance: 0,
            choppyOpenRangeHigh: 0,
            choppyOpenRangeLow: 0,
        },
        autoFlip: false,
        vwapCorrection: { open: 0, volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: Constants.marketCaps.MNDY,
        atr: {
            average: 12,
            mutiplier: 1.5,
            minimumMultipler: 0.8,
            maxRisk: 3,
        },
        disableShortIfOpenAbove: 0,
        disableLongIfOpenBelow: 0,
        keyLevels: {
            momentumStartForLong: 0,
            momentumStartForShort: 0,
        },
        setups: [],
        defaultConfigs: mndyConfigs, defaultTargets: stock1Target,
        short: {
            levelMomentumPlan: { enableAutoTrigger: false, targets: stock1Target, planConfigs: mndyConfigs },
            falseBreakoutPlan: { price: 0, targets: stock1Target, planConfigs: mndyConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock1Target, planConfigs: mndyConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, targets: stock1Target, planConfigs: mndyConfigs },
            deferredBreakoutPlan: { targets: stock1Target, planConfigs: mndyConfigs },
        },
        long: {
            levelMomentumPlan: { enableAutoTrigger: false, targets: stock1Target, planConfigs: mndyConfigs },
            falseBreakoutPlan: { price: 0, targets: stock1Target, planConfigs: mndyConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock1Target, planConfigs: mndyConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, targets: stock1Target, planConfigs: mndyConfigs },
            deferredBreakoutPlan: { targets: stock1Target, planConfigs: mndyConfigs },
        },
    },
    {
        symbol: 'ON',
        analysis: {
            isFreshNews: true, newsImpactScore: 6, marketReactionScore: 3, swingHoldRatio: 0.3,
            relativeVolumeAndCandleSmoothness: 1,
            cleanVwapTrend: 1, dailyChartStory: 2,
            allowFirstMinuteByNewsQuality: true,
            allowFirstMinuteByRelativeVolume: true,
            allowFirstMinutezByKeyLevelsQuality: true,
            gapSize: 3,
            weeklychart: "down",
            dailyChart: "down",
            hourlyChart: "down",
            premarketChart: "mixed around vwap",
            keyLevels: [49.8],
            singleMomentumKeyLevel: { high: 49.8, low: 49.8 },
            dualMomentumKeyLevels: [],
            profitTargetsForLong: {
                targets: [1, 2], willBlowPastThoseLevels: 0.1, summary: `
                none
                ` },
            profitTargetsForShort: {
                targets: [45, 46], willBlowPastThoseLevels: 0.2, summary: `
                good setup for 1ATR move
                ` },
            vwapExtensionDistance: 0,
            choppyOpenRangeHigh: 0,
            choppyOpenRangeLow: 0,
        },
        autoFlip: false,
        vwapCorrection: { open: 0, volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: Constants.marketCaps.ON,
        atr: {
            average: 2,
            mutiplier: 1.5,
            minimumMultipler: 1,
            maxRisk: 0.4,
        },
        disableShortIfOpenAbove: 0,
        disableLongIfOpenBelow: 0,
        keyLevels: {
            momentumStartForLong: 0,
            momentumStartForShort: 0,
        },
        setups: [],
        defaultConfigs: onConfigs, defaultTargets: stock2Target,
        short: {
            levelMomentumPlan: { enableAutoTrigger: false, targets: stock2Target, planConfigs: onConfigs },
            falseBreakoutPlan: { price: 0, targets: stock2Target, planConfigs: onConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock2Target, planConfigs: onConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, targets: stock2Target, planConfigs: onConfigs },
            deferredBreakoutPlan: { targets: stock2Target, planConfigs: onConfigs },
        },
        long: {
            levelMomentumPlan: { enableAutoTrigger: false, targets: stock2Target, planConfigs: onConfigs },
            falseBreakoutPlan: { price: 0, targets: stock2Target, planConfigs: onConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock2Target, planConfigs: onConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, targets: stock2Target, planConfigs: onConfigs },
            deferredBreakoutPlan: { targets: stock2Target, planConfigs: onConfigs },
        },
    },
    {
        symbol: 'BP',
        analysis: {
            isFreshNews: true, newsImpactScore: 5, marketReactionScore: 5, swingHoldRatio: 0.3,
            relativeVolumeAndCandleSmoothness: 1,
            cleanVwapTrend: 2, dailyChartStory: 1,
            allowFirstMinuteByNewsQuality: true,
            allowFirstMinuteByRelativeVolume: true,
            allowFirstMinutezByKeyLevelsQuality: true,
            gapSize: 2,
            weeklychart: "down with bounce",
            dailyChart: "up",
            hourlyChart: "up",
            premarketChart: "gap up and fade",
            keyLevels: [34.5],
            singleMomentumKeyLevel: { high: 34.5, low: 34.43 },
            dualMomentumKeyLevels: [],
            profitTargetsForLong: {
                targets: [35, 34.8], willBlowPastThoseLevels: 0.1, summary: `
                scalp long
                ` },
            profitTargetsForShort: {
                targets: [34, 33.5], willBlowPastThoseLevels: 0.3, summary: `
                big room for gap fill
                ` },
            vwapExtensionDistance: 0,
            choppyOpenRangeHigh: 0,
            choppyOpenRangeLow: 0,
        },
        autoFlip: false,
        vwapCorrection: { open: 0, volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: Constants.marketCaps.BP,
        atr: {
            average: 0.59,
            mutiplier: 2,
            minimumMultipler: 1,
            maxRisk: 0.35,
        },
        disableShortIfOpenAbove: 0,
        disableLongIfOpenBelow: 0,
        keyLevels: {
            momentumStartForLong: 0,
            momentumStartForShort: 0,
        },
        setups: [],
        defaultConfigs: bpConfigs, defaultTargets: stock3Target,
        short: {
            levelMomentumPlan: { enableAutoTrigger: false, targets: stock3Target, planConfigs: bpConfigs },
            falseBreakoutPlan: { price: 0, targets: stock3Target, planConfigs: bpConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock3Target, planConfigs: bpConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, targets: stock3Target, planConfigs: bpConfigs },
            deferredBreakoutPlan: { targets: stock3Target, planConfigs: bpConfigs },
        },
        long: {
            levelMomentumPlan: { enableAutoTrigger: false, targets: stock3Target, planConfigs: bpConfigs },
            falseBreakoutPlan: { price: 0, targets: stock3Target, planConfigs: bpConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock3Target, planConfigs: bpConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, targets: stock3Target, planConfigs: bpConfigs },
            deferredBreakoutPlan: { targets: stock3Target, planConfigs: bpConfigs },
        },
    },
    {
        symbol: 'stock4',
        analysis: {
            isFreshNews: false, newsImpactScore: 0, marketReactionScore: 0, swingHoldRatio: 0,
            relativeVolumeAndCandleSmoothness: -1,
            cleanVwapTrend: -1, dailyChartStory: -1,
            allowFirstMinuteByNewsQuality: false,
            allowFirstMinuteByRelativeVolume: false,
            allowFirstMinutezByKeyLevelsQuality: false,
            gapSize: 0,
            weeklychart: "",
            dailyChart: "",
            hourlyChart: "",
            premarketChart: "",
            keyLevels: [],
            singleMomentumKeyLevel: { high: 0, low: 0 },
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
        setups: [],
        defaultConfigs: stock4Configs, defaultTargets: stock4Target,
        short: {
            levelMomentumPlan: { enableAutoTrigger: false, targets: stock4Target, planConfigs: stock4Configs },
            falseBreakoutPlan: { price: 0, targets: stock4Target, planConfigs: stock4Configs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock4Target, planConfigs: stock4Configs },
            firstNewHighPlan: { enableAutoTrigger: false, targets: stock4Target, planConfigs: stock4Configs },
            deferredBreakoutPlan: { targets: stock4Target, planConfigs: stock4Configs },
        },
        long: {
            levelMomentumPlan: { enableAutoTrigger: false, targets: stock4Target, planConfigs: stock4Configs },
            falseBreakoutPlan: { price: 0, targets: stock4Target, planConfigs: stock4Configs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock4Target, planConfigs: stock4Configs },
            firstNewHighPlan: { enableAutoTrigger: false, targets: stock4Target, planConfigs: stock4Configs },
            deferredBreakoutPlan: { targets: stock4Target, planConfigs: stock4Configs },
        },
    },
];