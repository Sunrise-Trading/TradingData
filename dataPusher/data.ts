import * as TradingPlans from './models';
import * as Constants from './constants';

// futures, momentumSimple, tradeStationEquity, schwab
export const activeProfileName: string = "schwab";
export const tradingSettings: TradingPlans.TradingSettings = {
    snapMode: false,
    useSingleOrderForEntry: true,
}
const rokuLevel = 82.38;

export const defaultSize = 0.21; // 0.21
const tslaConfigs: TradingPlans.PlanConfigs = {
    size: 0.11,
    deferTradingInSeconds: 0,
    stopTradingAfterSeconds: 0,
    requireReversal: true,
    alwaysAllowFlatten: true,
    alwaysAllowMoveStop: true,
    allowFirstFewExitsCount: 3,
    setupQuality: TradingPlans.SetupQuality.Scalp,
};
const rokuConfigs: TradingPlans.PlanConfigs = {
    size: defaultSize,
    deferTradingInSeconds: 0,
    stopTradingAfterSeconds: 0,
    requireReversal: true,
    alwaysAllowFlatten: true,
    alwaysAllowMoveStop: true,
    allowFirstFewExitsCount: 3,
    setupQuality: TradingPlans.SetupQuality.Scalp,

};
const metaConfigs: TradingPlans.PlanConfigs = {
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

    trail5Count: 10,
    trail15Count: 10,
};
const metaLevel = 705;
export const stockSelections: string[] = [
    'META', 'TSLA',
    'ROKU',
];
const tslaLevel = 325;
export const stocksTradingPlans: TradingPlans.TradingPlans[] = [
    {
        symbol: 'TSLA',
        analysis: {
            isFreshNews: true,
            newsImpactScore: 0, marketReactionScore: 0, swingHoldRatio: 0,// optional
            premarketVolumeScore: TradingPlans.PremarketVolumeScore.One_Higher_Than_Normal,
            cleanVwapTrend: 2, dailyChartStory: 2,
            allowFirstMinuteByNewsQuality: false,
            allowFirstMinuteByRelativeVolume: false,
            allowFirstMinutezByKeyLevelsQuality: false,
            gap: { pdc: 325 },
            weeklychart: "", dailyChart: "", hourlyChart: "", premarketChart: "",// optional
            dailyRangeToBreakout: { high: 333, low: 325 },
            keyLevels: [tslaLevel],
            usePremarketKeyLevel: 0,
            singleMomentumKeyLevel: [{ high: tslaLevel, low: tslaLevel }],
            dualMomentumKeyLevels: [],
            tradableAreas: [
                { start: tslaLevel, isLong: true, phaseOutDistance: 3, endDistance: 5, vwapDistance: 1.5 },
                { start: tslaLevel, isLong: false, phaseOutDistance: 3, endDistance: 5, vwapDistance: 1.5 },
            ],
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
        marketCapInMillions: Constants.marketCaps.TSLA,
        atr: {
            average: 10,
            mutiplier: 1,
            minimumMultipler: 1,
            maxRisk: 4,
        },
        disableShortIfOpenAbove: 0,
        disableLongIfOpenBelow: 0,
        keyLevels: {
            momentumStartForLong: 0,
            momentumStartForShort: 0,
        },
        setups: [],
        defaultConfigs: tslaConfigs, defaultTargets: stock1Target,
        short: {
            enabled: true,
            firstTargetToAdd: 329.28,
            levelMomentumPlan: { enableAutoTrigger: false, targets: stock1Target, planConfigs: tslaConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock1Target, planConfigs: tslaConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, targets: stock1Target, planConfigs: tslaConfigs },
        },
        long: {
            enabled: true,
            firstTargetToAdd: 336.44,
            levelMomentumPlan: { enableAutoTrigger: false, targets: stock1Target, planConfigs: tslaConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock1Target, planConfigs: tslaConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, targets: stock1Target, planConfigs: tslaConfigs },
        }
    },
    {
        symbol: 'ROKU',
        analysis: {
            isFreshNews: true,
            newsImpactScore: 0, marketReactionScore: 0, swingHoldRatio: 0, // optional
            premarketVolumeScore: TradingPlans.PremarketVolumeScore.One_Higher_Than_Normal,
            cleanVwapTrend: 2, dailyChartStory: 2,
            allowFirstMinuteByNewsQuality: true,
            allowFirstMinuteByRelativeVolume: true,
            allowFirstMinutezByKeyLevelsQuality: true,
            gap: { pdc: 74.41 },
            weeklychart: "", dailyChart: "", hourlyChart: "", premarketChart: "",// optional
            dailyRangeToBreakout: { high: 82.34, low: 75 },
            keyLevels: [rokuLevel],
            usePremarketKeyLevel: 0,
            singleMomentumKeyLevel: [{ high: rokuLevel, low: rokuLevel }],
            dualMomentumKeyLevels: [],
            tradableAreas: [
                { start: rokuLevel, isLong: true, phaseOutDistance: 1, endDistance: 2, vwapDistance: 1 },
                { start: rokuLevel, isLong: false, phaseOutDistance: 1, endDistance: 2, vwapDistance: 1 },
            ],
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
        marketCapInMillions: Constants.marketCaps.ROKU,
        atr: {
            average: 2.89,
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
        defaultConfigs: rokuConfigs, defaultTargets: stock2Target,
        short: {
            enabled: true,
            firstTargetToAdd: -1,
            levelMomentumPlan: { enableAutoTrigger: false, targets: stock2Target, planConfigs: rokuConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock2Target, planConfigs: rokuConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, targets: stock2Target, planConfigs: rokuConfigs },
        },
        long: {
            enabled: true,
            firstTargetToAdd: 79.8,
            levelMomentumPlan: { enableAutoTrigger: false, targets: stock2Target, planConfigs: rokuConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock2Target, planConfigs: rokuConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, targets: stock2Target, planConfigs: rokuConfigs },
        }
    },
    {
        symbol: 'META',
        analysis: {
            isFreshNews: true,
            newsImpactScore: 0, marketReactionScore: 0, swingHoldRatio: 0, // optional
            premarketVolumeScore: TradingPlans.PremarketVolumeScore.One_Higher_Than_Normal,
            cleanVwapTrend: 2, dailyChartStory: 2,
            allowFirstMinuteByNewsQuality: true,
            allowFirstMinuteByRelativeVolume: true,
            allowFirstMinutezByKeyLevelsQuality: true,
            gap: { pdc: 682 },
            weeklychart: "", dailyChart: "", hourlyChart: "", premarketChart: "",// optional
            dailyRangeToBreakout: { high: 708, low: 660 },
            keyLevels: [metaLevel],
            usePremarketKeyLevel: 1,
            singleMomentumKeyLevel: [{ high: metaLevel, low: metaLevel }],
            dualMomentumKeyLevels: [],
            tradableAreas: [
                { start: metaLevel, isLong: true, phaseOutDistance: 5, endDistance: 8, vwapDistance: 2 },
                { start: metaLevel, isLong: false, phaseOutDistance: 5, endDistance: 8, vwapDistance: 2 },
            ],
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
        marketCapInMillions: Constants.marketCaps.META,
        atr: {
            average: 16.5,
            mutiplier: 1,
            minimumMultipler: 1,
            maxRisk: 10,
        },
        disableShortIfOpenAbove: 0,
        disableLongIfOpenBelow: 0,
        keyLevels: {
            momentumStartForLong: 0,
            momentumStartForShort: 0,
        },
        setups: [],
        defaultConfigs: metaConfigs, defaultTargets: stock3Target,
        short: {
            enabled: true,
            firstTargetToAdd: -1,
            levelMomentumPlan: { enableAutoTrigger: false, targets: stock3Target, planConfigs: metaConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock3Target, planConfigs: metaConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, targets: stock3Target, planConfigs: metaConfigs },
        },
        long: {
            enabled: true,
            firstTargetToAdd: 708.87,
            levelMomentumPlan: { enableAutoTrigger: false, targets: stock3Target, planConfigs: metaConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock3Target, planConfigs: metaConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, targets: stock3Target, planConfigs: metaConfigs },
        }
    },
    {
        symbol: 'AIRO',
        analysis: {
            isFreshNews: false,
            newsImpactScore: 0, marketReactionScore: 0, swingHoldRatio: 0, // optional
            premarketVolumeScore: TradingPlans.PremarketVolumeScore.Unknown,
            cleanVwapTrend: -1, dailyChartStory: -1,
            allowFirstMinuteByNewsQuality: false,
            allowFirstMinuteByRelativeVolume: false,
            allowFirstMinutezByKeyLevelsQuality: false,
            gap: { pdc: 0 }, // optional, pdv is previous day close
            weeklychart: "", dailyChart: "", hourlyChart: "", premarketChart: "",// optional
            dailyRangeToBreakout: { high: 0, low: 0 },
            keyLevels: [],
            usePremarketKeyLevel: 0,
            singleMomentumKeyLevel: [{ high: 0, low: 0 }],
            dualMomentumKeyLevels: [],
            tradableAreas: [
                { start: 123, isLong: true, phaseOutDistance: 1, endDistance: 2, vwapDistance: 1 },
                { start: 123, isLong: false, phaseOutDistance: 1, endDistance: 2, vwapDistance: 1 },
            ],
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
            enabled: true,
            firstTargetToAdd: 0,
            levelMomentumPlan: { enableAutoTrigger: false, targets: stock4Target, planConfigs: stock4Configs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock4Target, planConfigs: stock4Configs },
            firstNewHighPlan: { enableAutoTrigger: false, targets: stock4Target, planConfigs: stock4Configs },
        },
        long: {
            enabled: true,
            firstTargetToAdd: 0,
            levelMomentumPlan: { enableAutoTrigger: false, targets: stock4Target, planConfigs: stock4Configs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock4Target, planConfigs: stock4Configs },
            firstNewHighPlan: { enableAutoTrigger: false, targets: stock4Target, planConfigs: stock4Configs },
        }
    },
    {
        symbol: 'stock4',
        analysis: {
            isFreshNews: false,
            newsImpactScore: 0, marketReactionScore: 0, swingHoldRatio: 0, // optional
            premarketVolumeScore: TradingPlans.PremarketVolumeScore.Unknown,
            cleanVwapTrend: -1, dailyChartStory: -1,
            allowFirstMinuteByNewsQuality: false,
            allowFirstMinuteByRelativeVolume: false,
            allowFirstMinutezByKeyLevelsQuality: false,
            gap: { pdc: 0 }, // optional, pdv is previous day close
            weeklychart: "", dailyChart: "", hourlyChart: "", premarketChart: "",// optional
            dailyRangeToBreakout: { high: 0, low: 0 },
            keyLevels: [],
            usePremarketKeyLevel: 0,
            singleMomentumKeyLevel: [{ high: 0, low: 0 }],
            dualMomentumKeyLevels: [],
            tradableAreas: [
                { start: 123, isLong: true, phaseOutDistance: 1, endDistance: 2, vwapDistance: 1 },
                { start: 123, isLong: false, phaseOutDistance: 1, endDistance: 2, vwapDistance: 1 },
            ],
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
            enabled: true,
            firstTargetToAdd: 0,
            levelMomentumPlan: { enableAutoTrigger: false, targets: stock4Target, planConfigs: stock4Configs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock4Target, planConfigs: stock4Configs },
            firstNewHighPlan: { enableAutoTrigger: false, targets: stock4Target, planConfigs: stock4Configs },
        },
        long: {
            enabled: true,
            firstTargetToAdd: 0,
            levelMomentumPlan: { enableAutoTrigger: false, targets: stock4Target, planConfigs: stock4Configs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock4Target, planConfigs: stock4Configs },
            firstNewHighPlan: { enableAutoTrigger: false, targets: stock4Target, planConfigs: stock4Configs },
        }
    },
];