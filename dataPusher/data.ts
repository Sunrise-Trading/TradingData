import * as TradingPlans from './models';
import * as Constants from './constants';

// futures, momentumSimple, tradeStationEquity, schwab
export const activeProfileName: string = "schwab";
export const tradingSettings: TradingPlans.TradingSettings = {
    snapMode: false,
    useSingleOrderForEntry: true,
}
const defaultTopLevelPlanItemCase: TradingPlans.TopLevelPlanItemCase = {
    longStart: 0, shortStart: 0,
}
const defaultTopLevelPlanItem: TradingPlans.TopLevelPlanItem = {
    openAbove: defaultTopLevelPlanItemCase,
    openBetween: defaultTopLevelPlanItemCase,
    openBelow: defaultTopLevelPlanItemCase,
}
export const defaultSize = 0.21; // 0.21
const snapConfigs: TradingPlans.PlanConfigs = {
    size: defaultSize,
    deferTradingInSeconds: 0,
    stopTradingAfterSeconds: 0,
    requireReversal: true,
    alwaysAllowFlatten: true,
    alwaysAllowMoveStop: true,
    allowFirstFewExitsCount: 3,
    setupQuality: TradingPlans.SetupQuality.Scalp,
};
const sbuxConfigs: TradingPlans.PlanConfigs = {
    size: defaultSize,
    deferTradingInSeconds: 0,
    stopTradingAfterSeconds: 0,
    requireReversal: true,
    alwaysAllowFlatten: true,
    alwaysAllowMoveStop: true,
    allowFirstFewExitsCount: 3,
    setupQuality: TradingPlans.SetupQuality.Scalp,

};
const smciConfigs: TradingPlans.PlanConfigs = {
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
/*
-1: disabled
0: enabled from open
60: enabled after 1st minute
 */
export const topLevelPlans: Map<string, TradingPlans.TopLevelPlanItem> = new Map<string, TradingPlans.TopLevelPlanItem>([
    ['SBUX', {
        openAbove: { longStart: 0, shortStart: 0 },
        openBetween: { longStart: 0, shortStart: 0 },
        openBelow: { longStart: 0, shortStart: 0 }
    }], ['SMCI', {
        openAbove: { longStart: 0, shortStart: 0 },
        openBetween: { longStart: 0, shortStart: 0 },
        openBelow: { longStart: 0, shortStart: 0 }
    }], ['SNAP', {
        openAbove: { longStart: 0, shortStart: 0 },
        openBetween: { longStart: 0, shortStart: 0 },
        openBelow: { longStart: 0, shortStart: 0 }
    }], ['stock4', {
        openAbove: { longStart: 0, shortStart: 0 },
        openBetween: { longStart: 0, shortStart: 0 },
        openBelow: { longStart: 0, shortStart: 0 }
    }]
]);

export const stockSelections: string[] = [
    'SNAP',
    'SBUX',
    'SMCI',
];

export const stocksTradingPlans: TradingPlans.TradingPlans[] = [
    {
        symbol: 'SNAP',
        analysis: {
            isFreshNews: true,
            newsImpactScore: 0, marketReactionScore: 0, swingHoldRatio: 0,// optional
            premarketVolumeScore: TradingPlans.PremarketVolumeScore.One_Higher_Than_Normal,
            cleanVwapTrend: 2, dailyChartStory: 1,
            allowFirstMinuteByNewsQuality: true,
            allowFirstMinuteByRelativeVolume: true,
            allowFirstMinutezByKeyLevelsQuality: true,
            gap: { pdc: 9.09 },
            weeklychart: "", dailyChart: "", hourlyChart: "", premarketChart: "",// optional
            dailyRangeToBreakout: { high: 9, low: 7.62 },
            keyLevels: [7.62],
            singleMomentumKeyLevel: [{ high: 7.62, low: 7.62 }],
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
        marketCapInMillions: Constants.marketCaps.SNAP,
        atr: {
            average: 0.5,
            mutiplier: 1,
            minimumMultipler: 1,
            maxRisk: 1,
        },
        disableShortIfOpenAbove: 0,
        disableLongIfOpenBelow: 0,
        keyLevels: {
            momentumStartForLong: 0,
            momentumStartForShort: 0,
        },
        setups: [],
        defaultConfigs: snapConfigs, defaultTargets: stock1Target,
        short: {
            levelMomentumPlan: { enableAutoTrigger: false, targets: stock1Target, planConfigs: snapConfigs },
            falseBreakoutPlan: { price: 0, targets: stock1Target, planConfigs: snapConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock1Target, planConfigs: snapConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, targets: stock1Target, planConfigs: snapConfigs },
            deferredBreakoutPlan: { targets: stock1Target, planConfigs: snapConfigs },
        },
        long: {
            levelMomentumPlan: { enableAutoTrigger: false, targets: stock1Target, planConfigs: snapConfigs },
            falseBreakoutPlan: { price: 0, targets: stock1Target, planConfigs: snapConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock1Target, planConfigs: snapConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, targets: stock1Target, planConfigs: snapConfigs },
            deferredBreakoutPlan: { targets: stock1Target, planConfigs: snapConfigs },
        },
        topLevelPlanItem: defaultTopLevelPlanItem,
    },
    {
        symbol: 'SBUX',
        analysis: {
            isFreshNews: true,
            newsImpactScore: 0, marketReactionScore: 0, swingHoldRatio: 0, // optional
            premarketVolumeScore: TradingPlans.PremarketVolumeScore.One_Higher_Than_Normal,
            cleanVwapTrend: 2, dailyChartStory: 1,
            allowFirstMinuteByNewsQuality: true,
            allowFirstMinuteByRelativeVolume: true,
            allowFirstMinutezByKeyLevelsQuality: true,
            gap: { pdc: 84.85 },
            weeklychart: "", dailyChart: "", hourlyChart: "", premarketChart: "",// optional
            dailyRangeToBreakout: { high: 80, low: 76.15 },
            keyLevels: [78.65],
            singleMomentumKeyLevel: [{ high: 78.65, low: 78.65 }],
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
        marketCapInMillions: Constants.marketCaps.SBUX,
        atr: {
            average: 3.42,
            mutiplier: 1,
            minimumMultipler: 1,
            maxRisk: 1.25,
        },
        disableShortIfOpenAbove: 0,
        disableLongIfOpenBelow: 0,
        keyLevels: {
            momentumStartForLong: 0,
            momentumStartForShort: 0,
        },
        setups: [],
        defaultConfigs: sbuxConfigs, defaultTargets: stock2Target,
        short: {
            levelMomentumPlan: { enableAutoTrigger: false, targets: stock2Target, planConfigs: sbuxConfigs },
            falseBreakoutPlan: { price: 0, targets: stock2Target, planConfigs: sbuxConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock2Target, planConfigs: sbuxConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, targets: stock2Target, planConfigs: sbuxConfigs },
            deferredBreakoutPlan: { targets: stock2Target, planConfigs: sbuxConfigs },
        },
        long: {
            levelMomentumPlan: { enableAutoTrigger: false, targets: stock2Target, planConfigs: sbuxConfigs },
            falseBreakoutPlan: { price: 0, targets: stock2Target, planConfigs: sbuxConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock2Target, planConfigs: sbuxConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, targets: stock2Target, planConfigs: sbuxConfigs },
            deferredBreakoutPlan: { targets: stock2Target, planConfigs: sbuxConfigs },
        },
        topLevelPlanItem: defaultTopLevelPlanItem
    },
    {
        symbol: 'SMCI',
        analysis: {
            isFreshNews: true,
            newsImpactScore: 0, marketReactionScore: 0, swingHoldRatio: 0, // optional
            premarketVolumeScore: TradingPlans.PremarketVolumeScore.Two_Extremely_High,
            cleanVwapTrend: 2, dailyChartStory: 1,
            allowFirstMinuteByNewsQuality: true,
            allowFirstMinuteByRelativeVolume: true,
            allowFirstMinutezByKeyLevelsQuality: true,
            gap: { pdc: 36 },
            weeklychart: "", dailyChart: "", hourlyChart: "", premarketChart: "",// optional
            dailyRangeToBreakout: { high: 32, low: 28.75 },
            keyLevels: [28.75],
            singleMomentumKeyLevel: [{ high: 28.75, low: 28.75 }],
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
        marketCapInMillions: Constants.marketCaps.SMCI,
        atr: {
            average: 3,
            mutiplier: 1,
            minimumMultipler: 1,
            maxRisk: 1,
        },
        disableShortIfOpenAbove: 0,
        disableLongIfOpenBelow: 0,
        keyLevels: {
            momentumStartForLong: 0,
            momentumStartForShort: 0,
        },
        setups: [],
        defaultConfigs: smciConfigs, defaultTargets: stock3Target,
        short: {
            levelMomentumPlan: { enableAutoTrigger: false, targets: stock3Target, planConfigs: smciConfigs },
            falseBreakoutPlan: { price: 0, targets: stock3Target, planConfigs: smciConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock3Target, planConfigs: smciConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, targets: stock3Target, planConfigs: smciConfigs },
            deferredBreakoutPlan: { targets: stock3Target, planConfigs: smciConfigs },
        },
        long: {
            levelMomentumPlan: { enableAutoTrigger: false, targets: stock3Target, planConfigs: smciConfigs },
            falseBreakoutPlan: { price: 0, targets: stock3Target, planConfigs: smciConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock3Target, planConfigs: smciConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, targets: stock3Target, planConfigs: smciConfigs },
            deferredBreakoutPlan: { targets: stock3Target, planConfigs: smciConfigs },
        },
        topLevelPlanItem: defaultTopLevelPlanItem
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
            singleMomentumKeyLevel: [{ high: 0, low: 0 }],
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
        topLevelPlanItem: defaultTopLevelPlanItem
    },
];