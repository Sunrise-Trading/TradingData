import * as TradingPlans from './models';
import * as Constants from './constants';

// futures, momentumSimple, tradeStationEquity, schwab
export const activeProfileName: string = "schwab";
export const tradingSettings: TradingPlans.TradingSettings = {
    snapMode: false,
    useSingleOrderForEntry: true,
}
export const defaultSize = 0.24;
const ddogConfigs: TradingPlans.PlanConfigs = {
    size: defaultSize,
    deferTradingInSeconds: 0,
    stopTradingAfterSeconds: 0,
    requireReversal: true,
    alwaysAllowFlatten: true,
    alwaysAllowMoveStop: true,
    allowFirstFewExitsCount: 3,
    setupQuality: TradingPlans.SetupQuality.Scalp,
};
const stock2Configs: TradingPlans.PlanConfigs = {
    size: defaultSize,
    deferTradingInSeconds: 0,
    stopTradingAfterSeconds: 0,
    requireReversal: true,
    alwaysAllowFlatten: true,
    alwaysAllowMoveStop: true,
    allowFirstFewExitsCount: 3,
    setupQuality: TradingPlans.SetupQuality.Scalp,

};
const appConfigs: TradingPlans.PlanConfigs = {
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
    'DDOG',
    'CSCO',
    'APP',
    'HOOD'
];

export const stocksTradingPlans: TradingPlans.TradingPlans[] = [
    {
        symbol: 'DDOG',
        analysis: {
            isFreshNews: true, newsImpactScore: 5, marketReactionScore: 5, swingHoldRatio: 0.1,
            relativeVolumeAndCandleSmoothness: 2,
            cleanVwapTrend: 2, dailyChartStory: 1,
            allowFirstMinuteByNewsQuality: true,
            allowFirstMinuteByRelativeVolume: true,
            allowFirstMinutezByKeyLevelsQuality: true,
            gapSize: 11,
            weeklychart: "up pullback bounce",
            dailyChart: "range",
            hourlyChart: "range",
            premarketChart: "gap down and bounce above vwap",
            keyLevels: [134.72],
            singleMomentumKeyLevel: { high: 134.72, low: 134.72 },
            dualMomentumKeyLevels: [],
            profitTargetsForLong: {
                targets: [140, 142], willBlowPastThoseLevels: 0.1, summary: `
                scalp long
                ` },
            profitTargetsForShort: {
                targets: [130, 126], willBlowPastThoseLevels: 0.1, summary: `
                scalp short
                ` },
            vwapExtensionDistance: 0,
            choppyOpenRangeHigh: 0,
            choppyOpenRangeLow: 0,
        },
        autoFlip: false,
        vwapCorrection: { open: 0, volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: Constants.marketCaps.DDOG,
        atr: {
            average: 4.86,
            mutiplier: 1,
            minimumMultipler: 1,
            maxRisk: 1.5,
        },
        disableShortIfOpenAbove: 0,
        disableLongIfOpenBelow: 0,
        keyLevels: {
            momentumStartForLong: 0,
            momentumStartForShort: 0,
        },
        setups: [],
        defaultConfigs: ddogConfigs, defaultTargets: stock1Target,
        short: {
            levelMomentumPlan: { enableAutoTrigger: false, targets: stock1Target, planConfigs: ddogConfigs },
            falseBreakoutPlan: { price: 0, targets: stock1Target, planConfigs: ddogConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock1Target, planConfigs: ddogConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, targets: stock1Target, planConfigs: ddogConfigs },
            deferredBreakoutPlan: { targets: stock1Target, planConfigs: ddogConfigs },
        },
        long: {
            levelMomentumPlan: { enableAutoTrigger: false, targets: stock1Target, planConfigs: ddogConfigs },
            falseBreakoutPlan: { price: 0, targets: stock1Target, planConfigs: ddogConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock1Target, planConfigs: ddogConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, targets: stock1Target, planConfigs: ddogConfigs },
            deferredBreakoutPlan: { targets: stock1Target, planConfigs: ddogConfigs },
        },
    },
    {
        symbol: 'CSCO',
        analysis: {
            isFreshNews: true, newsImpactScore: 5, marketReactionScore: 7, swingHoldRatio: 0.2,
            relativeVolumeAndCandleSmoothness: 1,
            cleanVwapTrend: 1, dailyChartStory: 2,
            allowFirstMinuteByNewsQuality: true,
            allowFirstMinuteByRelativeVolume: false,
            allowFirstMinutezByKeyLevelsQuality: true,
            gapSize: 4,
            weeklychart: "up",
            dailyChart: "up",
            hourlyChart: "up",
            premarketChart: "mixed",
            keyLevels: [67.21],
            singleMomentumKeyLevel: { high: 67.21, low: 67 },
            dualMomentumKeyLevels: [],
            profitTargetsForLong: {
                targets: [70, 69], willBlowPastThoseLevels: 0.2, summary: `
                big room up side
                ` },
            profitTargetsForShort: {
                targets: [64, 63], willBlowPastThoseLevels: 0.2, summary: `
                gap fill
                ` },
            vwapExtensionDistance: 0,
            choppyOpenRangeHigh: 0,
            choppyOpenRangeLow: 0,
        },
        autoFlip: false,
        vwapCorrection: { open: 0, volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: Constants.marketCaps.CSCO,
        atr: {
            average: 1,
            mutiplier: 1.5,
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
        defaultConfigs: stock2Configs, defaultTargets: stock2Target,
        short: {
            levelMomentumPlan: { enableAutoTrigger: false, targets: stock2Target, planConfigs: stock2Configs },
            falseBreakoutPlan: { price: 0, targets: stock2Target, planConfigs: stock2Configs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock2Target, planConfigs: stock2Configs },
            firstNewHighPlan: { enableAutoTrigger: false, targets: stock2Target, planConfigs: stock2Configs },
            deferredBreakoutPlan: { targets: stock2Target, planConfigs: stock2Configs },
        },
        long: {
            levelMomentumPlan: { enableAutoTrigger: false, targets: stock2Target, planConfigs: stock2Configs },
            falseBreakoutPlan: { price: 0, targets: stock2Target, planConfigs: stock2Configs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock2Target, planConfigs: stock2Configs },
            firstNewHighPlan: { enableAutoTrigger: false, targets: stock2Target, planConfigs: stock2Configs },
            deferredBreakoutPlan: { targets: stock2Target, planConfigs: stock2Configs },
        },
    },
    {
        symbol: 'APP',
        analysis: {
            isFreshNews: true, newsImpactScore: 5, marketReactionScore: 5, swingHoldRatio: 0.3,
            relativeVolumeAndCandleSmoothness: 2,
            cleanVwapTrend: 1, dailyChartStory: 2,
            allowFirstMinuteByNewsQuality: true,
            allowFirstMinuteByRelativeVolume: true,
            allowFirstMinutezByKeyLevelsQuality: true,
            gapSize: 120,
            weeklychart: "up",
            dailyChart: "up",
            hourlyChart: "range",
            premarketChart: "mostly hold above vwap",
            keyLevels: [498],
            singleMomentumKeyLevel: { high: 497.77, low: 497.77 },
            dualMomentumKeyLevels: [],
            profitTargetsForLong: {
                targets: [500, 510, 520], willBlowPastThoseLevels: 0.5, summary: `
                unlimited upside
                ` },
            profitTargetsForShort: {
                targets: [482, 480, 470], willBlowPastThoseLevels: 0.3, summary: `
                if break below premarket low, big room downside
                ` },
            vwapExtensionDistance: 0,
            choppyOpenRangeHigh: 0,
            choppyOpenRangeLow: 0,
        },
        autoFlip: false,
        vwapCorrection: { open: 0, volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: Constants.marketCaps.APP,
        atr: {
            average: 20,
            mutiplier: 2,
            minimumMultipler: 1,
            maxRisk: 5,
        },
        disableShortIfOpenAbove: 0,
        disableLongIfOpenBelow: 0,
        keyLevels: {
            momentumStartForLong: 0,
            momentumStartForShort: 0,
        },
        setups: [],
        defaultConfigs: appConfigs, defaultTargets: stock3Target,
        short: {
            levelMomentumPlan: { enableAutoTrigger: false, targets: stock3Target, planConfigs: appConfigs },
            falseBreakoutPlan: { price: 0, targets: stock3Target, planConfigs: appConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock3Target, planConfigs: appConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, targets: stock3Target, planConfigs: appConfigs },
            deferredBreakoutPlan: { targets: stock3Target, planConfigs: appConfigs },
        },
        long: {
            levelMomentumPlan: { enableAutoTrigger: false, targets: stock3Target, planConfigs: appConfigs },
            falseBreakoutPlan: { price: 0, targets: stock3Target, planConfigs: appConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock3Target, planConfigs: appConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, targets: stock3Target, planConfigs: appConfigs },
            deferredBreakoutPlan: { targets: stock3Target, planConfigs: appConfigs },
        },
    },
    {
        symbol: 'HOOD',
        analysis: {
            isFreshNews: true, newsImpactScore: 5, marketReactionScore: 5, swingHoldRatio: 0.1,
            relativeVolumeAndCandleSmoothness: 2,
            cleanVwapTrend: 1, dailyChartStory: 2,
            allowFirstMinuteByNewsQuality: true,
            allowFirstMinuteByRelativeVolume: true,
            allowFirstMinutezByKeyLevelsQuality: true,
            gapSize: 5,
            weeklychart: "up",
            dailyChart: "up",
            hourlyChart: "up",
            premarketChart: "below vwap most of time",
            keyLevels: [66.27],
            singleMomentumKeyLevel: { high: 66.27, low: 66.27 },
            dualMomentumKeyLevels: [],
            profitTargetsForLong: {
                targets: [66.27, 70], willBlowPastThoseLevels: 0.1, summary: `
                scalp long
                ` },
            profitTargetsForShort: {
                targets: [61.7, 60], willBlowPastThoseLevels: 0.1, summary: `
                premarket low 61.7, then much lower to gap fill
                ` },
            vwapExtensionDistance: 0,
            choppyOpenRangeHigh: 0,
            choppyOpenRangeLow: 0,
        },
        autoFlip: false,
        vwapCorrection: { open: 0, volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: Constants.marketCaps.HOOD,
        atr: {
            average: 2.5,
            mutiplier: 1,
            minimumMultipler: 1,
            maxRisk: 0.75,
        },
        disableShortIfOpenAbove: 0,
        disableLongIfOpenBelow: 0,
        keyLevels: {
            momentumStartForLong: 0,
            momentumStartForShort: 0,
        },
        setups: [],
        defaultConfigs: hoodConfigs, defaultTargets: stock4Target,
        short: {
            levelMomentumPlan: { enableAutoTrigger: false, targets: stock4Target, planConfigs: hoodConfigs },
            falseBreakoutPlan: { price: 0, targets: stock4Target, planConfigs: hoodConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock4Target, planConfigs: hoodConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, targets: stock4Target, planConfigs: hoodConfigs },
            deferredBreakoutPlan: { targets: stock4Target, planConfigs: hoodConfigs },
        },
        long: {
            levelMomentumPlan: { enableAutoTrigger: false, targets: stock4Target, planConfigs: hoodConfigs },
            falseBreakoutPlan: { price: 0, targets: stock4Target, planConfigs: hoodConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock4Target, planConfigs: hoodConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, targets: stock4Target, planConfigs: hoodConfigs },
            deferredBreakoutPlan: { targets: stock4Target, planConfigs: hoodConfigs },
        },
    },
];