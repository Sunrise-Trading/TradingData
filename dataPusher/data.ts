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
const coinConfigs: TradingPlans.PlanConfigs = {
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
const unhConfigs: TradingPlans.PlanConfigs = {
    size: defaultSize,
    deferTradingInSeconds: 0,
    stopTradingAfterSeconds: 0,
    requireReversal: true,
    alwaysAllowFlatten: true,
    alwaysAllowMoveStop: true,
    allowFirstFewExitsCount: 3,
    setupQuality: TradingPlans.SetupQuality.Scalp,
};
const nvdaConfigs: TradingPlans.PlanConfigs = {
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
    ['COIN', {
        openAbove: { longStart: 0, shortStart: 0 },
        openBetween: { longStart: 0, shortStart: 0 },
        openBelow: { longStart: 0, shortStart: 0 }
    }], ['RGTI', {
        openAbove: { longStart: 0, shortStart: 0 },
        openBetween: { longStart: 0, shortStart: 0 },
        openBelow: { longStart: 0, shortStart: 0 }
    }], ['UNH', {
        openAbove: { longStart: 0, shortStart: 0 },
        openBetween: { longStart: 0, shortStart: 0 },
        openBelow: { longStart: 0, shortStart: 0 }
    }], ['NVDA', {
        openAbove: { longStart: 0, shortStart: 0 },
        openBetween: { longStart: 0, shortStart: 0 },
        openBelow: { longStart: 0, shortStart: 0 }
    }]
]);

export const stockSelections: string[] = [
    'COIN', 'RGTI', 'UNH', 'NVDA'
];
const nvdaLevel = 125.08;

export const stocksTradingPlans: TradingPlans.TradingPlans[] = [
    {
        symbol: 'COIN',
        analysis: {
            isFreshNews: true,
            newsImpactScore: 0, marketReactionScore: 0, swingHoldRatio: 0,// optional
            premarketVolumeScore: TradingPlans.PremarketVolumeScore.One_Higher_Than_Normal,
            cleanVwapTrend: 2, dailyChartStory: 1,
            allowFirstMinuteByNewsQuality: true,
            allowFirstMinuteByRelativeVolume: true,
            allowFirstMinutezByKeyLevelsQuality: true,
            gap: { pdc: 207 },
            weeklychart: "", dailyChart: "", hourlyChart: "", premarketChart: "",// optional
            dailyRangeToBreakout: { high: 215, low: 196 },
            keyLevels: [229.97],
            singleMomentumKeyLevel: [{ high: 229.97, low: 229.97 }],
            dualMomentumKeyLevels: [],
            tradableAreas: [
                { start: 229.97, isLong: true, phaseOutDistance: 2, endDistance: 4, vwapDistance: 2 },
                { start: 229.97, isLong: false, phaseOutDistance: 2, endDistance: 4, vwapDistance: 2 },
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
        marketCapInMillions: Constants.marketCaps.COIN,
        atr: {
            average: 11,
            mutiplier: 1,
            minimumMultipler: 1,
            maxRisk: 3.5,
        },
        disableShortIfOpenAbove: 0,
        disableLongIfOpenBelow: 0,
        keyLevels: {
            momentumStartForLong: 0,
            momentumStartForShort: 0,
        },
        setups: [],
        defaultConfigs: coinConfigs, defaultTargets: stock1Target,
        short: {
            levelMomentumPlan: { enableAutoTrigger: false, targets: stock1Target, planConfigs: coinConfigs },
            falseBreakoutPlan: { price: 0, targets: stock1Target, planConfigs: coinConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock1Target, planConfigs: coinConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, targets: stock1Target, planConfigs: coinConfigs },
            deferredBreakoutPlan: { targets: stock1Target, planConfigs: coinConfigs },
            vwapBounceFailPlan: { targets: stock1Target, planConfigs: coinConfigs },
        },
        long: {
            levelMomentumPlan: { enableAutoTrigger: false, targets: stock1Target, planConfigs: coinConfigs },
            falseBreakoutPlan: { price: 0, targets: stock1Target, planConfigs: coinConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock1Target, planConfigs: coinConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, targets: stock1Target, planConfigs: coinConfigs },
            deferredBreakoutPlan: { targets: stock1Target, planConfigs: coinConfigs },
            vwapBounceFailPlan: { targets: stock1Target, planConfigs: coinConfigs },
        },
        topLevelPlanItem: defaultTopLevelPlanItem,
    },
    {
        symbol: 'RGTI',
        analysis: {
            isFreshNews: true,
            newsImpactScore: 0, marketReactionScore: 0, swingHoldRatio: 0, // optional
            premarketVolumeScore: TradingPlans.PremarketVolumeScore.One_Higher_Than_Normal,
            cleanVwapTrend: 1, dailyChartStory: 1,
            allowFirstMinuteByNewsQuality: false,
            allowFirstMinuteByRelativeVolume: true,
            allowFirstMinutezByKeyLevelsQuality: true,
            gap: { pdc: 11.55 },
            weeklychart: "", dailyChart: "", hourlyChart: "", premarketChart: "",// optional
            dailyRangeToBreakout: { high: 12, low: 9 },
            keyLevels: [9.88],
            singleMomentumKeyLevel: [{ high: 9.88, low: 9.88 }],
            dualMomentumKeyLevels: [],
            tradableAreas: [
                { start: 9.88, isLong: true, phaseOutDistance: 0.2, endDistance: 0.3, vwapDistance: 0.2 },
                { start: 9.88, isLong: false, phaseOutDistance: 0.2, endDistance: 0.3, vwapDistance: 0.2 },
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
        marketCapInMillions: Constants.marketCaps.RGTI,
        atr: {
            average: 0.9,
            mutiplier: 1,
            minimumMultipler: 1,
            maxRisk: 0.5,
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
            vwapBounceFailPlan: { targets: stock2Target, planConfigs: stock2Configs },
        },
        long: {
            levelMomentumPlan: { enableAutoTrigger: false, targets: stock2Target, planConfigs: stock2Configs },
            falseBreakoutPlan: { price: 0, targets: stock2Target, planConfigs: stock2Configs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock2Target, planConfigs: stock2Configs },
            firstNewHighPlan: { enableAutoTrigger: false, targets: stock2Target, planConfigs: stock2Configs },
            deferredBreakoutPlan: { targets: stock2Target, planConfigs: stock2Configs },
            vwapBounceFailPlan: { targets: stock2Target, planConfigs: stock2Configs },
        },
        topLevelPlanItem: defaultTopLevelPlanItem
    },
    {
        symbol: 'UNH',
        analysis: {
            isFreshNews: true,
            newsImpactScore: 0, marketReactionScore: 0, swingHoldRatio: 0, // optional
            premarketVolumeScore: TradingPlans.PremarketVolumeScore.One_Higher_Than_Normal,
            cleanVwapTrend: 2, dailyChartStory: 2,
            allowFirstMinuteByNewsQuality: true,
            allowFirstMinuteByRelativeVolume: true,
            allowFirstMinutezByKeyLevelsQuality: true,
            gap: { pdc: 378 },
            weeklychart: "", dailyChart: "", hourlyChart: "", premarketChart: "",// optional
            dailyRangeToBreakout: { high: 400, low: 378 },
            keyLevels: [335.18],
            singleMomentumKeyLevel: [{ high: 335.18, low: 335.18 }],
            dualMomentumKeyLevels: [],
            tradableAreas: [
                { start: 335.18, isLong: true, phaseOutDistance: 3, endDistance: 5, vwapDistance: 2 },
                { start: 335.18, isLong: false, phaseOutDistance: 3, endDistance: 5, vwapDistance: 2 },
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
        marketCapInMillions: Constants.marketCaps.UNH,
        atr: {
            average: 15,
            mutiplier: 1,
            minimumMultipler: 1,
            maxRisk: 7,
        },
        disableShortIfOpenAbove: 0,
        disableLongIfOpenBelow: 0,
        keyLevels: {
            momentumStartForLong: 0,
            momentumStartForShort: 0,
        },
        setups: [],
        defaultConfigs: unhConfigs, defaultTargets: stock3Target,
        short: {
            levelMomentumPlan: { enableAutoTrigger: false, targets: stock3Target, planConfigs: unhConfigs },
            falseBreakoutPlan: { price: 0, targets: stock3Target, planConfigs: unhConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock3Target, planConfigs: unhConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, targets: stock3Target, planConfigs: unhConfigs },
            deferredBreakoutPlan: { targets: stock3Target, planConfigs: unhConfigs },
            vwapBounceFailPlan: { targets: stock3Target, planConfigs: unhConfigs },
        },
        long: {
            levelMomentumPlan: { enableAutoTrigger: false, targets: stock3Target, planConfigs: unhConfigs },
            falseBreakoutPlan: { price: 0, targets: stock3Target, planConfigs: unhConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock3Target, planConfigs: unhConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, targets: stock3Target, planConfigs: unhConfigs },
            deferredBreakoutPlan: { targets: stock3Target, planConfigs: unhConfigs },
            vwapBounceFailPlan: { targets: stock3Target, planConfigs: unhConfigs },
        },
        topLevelPlanItem: defaultTopLevelPlanItem
    },
    {
        symbol: 'NVDA',
        analysis: {
            isFreshNews: true,
            newsImpactScore: 0, marketReactionScore: 0, swingHoldRatio: 0, // optional
            premarketVolumeScore: TradingPlans.PremarketVolumeScore.One_Higher_Than_Normal,
            cleanVwapTrend: 1, dailyChartStory: 1,
            allowFirstMinuteByNewsQuality: false,
            allowFirstMinuteByRelativeVolume: false,
            allowFirstMinutezByKeyLevelsQuality: false,
            gap: { pdc: 123 }, // optional, pdv is previous day close
            weeklychart: "", dailyChart: "", hourlyChart: "", premarketChart: "",// optional
            dailyRangeToBreakout: { high: 123, low: 120 },
            keyLevels: [nvdaLevel],
            singleMomentumKeyLevel: [{ high: nvdaLevel, low: nvdaLevel }],
            dualMomentumKeyLevels: [],
            tradableAreas: [
                { start: nvdaLevel, isLong: true, phaseOutDistance: 1, endDistance: 2, vwapDistance: 1 },
                { start: nvdaLevel, isLong: false, phaseOutDistance: 1, endDistance: 2, vwapDistance: 1 },
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
        marketCapInMillions: Constants.marketCaps.NVDA,
        atr: {
            average: 5,
            mutiplier: 1,
            minimumMultipler: 1,
            maxRisk: 2.5,
        },
        disableShortIfOpenAbove: 0,
        disableLongIfOpenBelow: 0,
        keyLevels: {
            momentumStartForLong: 0,
            momentumStartForShort: 0,
        },
        setups: [],
        defaultConfigs: nvdaConfigs, defaultTargets: stock4Target,
        short: {
            levelMomentumPlan: { enableAutoTrigger: false, targets: stock4Target, planConfigs: nvdaConfigs },
            falseBreakoutPlan: { price: 0, targets: stock4Target, planConfigs: nvdaConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock4Target, planConfigs: nvdaConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, targets: stock4Target, planConfigs: nvdaConfigs },
            deferredBreakoutPlan: { targets: stock4Target, planConfigs: nvdaConfigs },
            vwapBounceFailPlan: { targets: stock4Target, planConfigs: nvdaConfigs },
        },
        long: {
            levelMomentumPlan: { enableAutoTrigger: false, targets: stock4Target, planConfigs: nvdaConfigs },
            falseBreakoutPlan: { price: 0, targets: stock4Target, planConfigs: nvdaConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock4Target, planConfigs: nvdaConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, targets: stock4Target, planConfigs: nvdaConfigs },
            deferredBreakoutPlan: { targets: stock4Target, planConfigs: nvdaConfigs },
            vwapBounceFailPlan: { targets: stock4Target, planConfigs: nvdaConfigs },
        },
        topLevelPlanItem: defaultTopLevelPlanItem
    },
];