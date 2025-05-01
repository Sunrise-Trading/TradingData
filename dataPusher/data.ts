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
export const defaultSize = 0.10; // 0.21
const msftConfigs: TradingPlans.PlanConfigs = {
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
const rblxConfigs: TradingPlans.PlanConfigs = {
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
    ['MSFT', {
        openAbove: { longStart: 0, shortStart: 0 },
        openBetween: { longStart: 0, shortStart: 0 },
        openBelow: { longStart: 0, shortStart: 0 }
    }], ['META', {
        openAbove: { longStart: 60, shortStart: 0 },
        openBetween: { longStart: 60, shortStart: 0 },
        openBelow: { longStart: 60, shortStart: 0 }
    }], ['CVS', {
        openAbove: { longStart: 0, shortStart: 0 },
        openBetween: { longStart: 0, shortStart: 0 },
        openBelow: { longStart: 0, shortStart: 0 }
    }], ['HOOD', {
        openAbove: { longStart: 0, shortStart: 0 },
        openBetween: { longStart: 0, shortStart: 0 },
        openBelow: { longStart: 0, shortStart: 0 }
    }], ['RBLX', {
        openAbove: { longStart: 0, shortStart: 0 },
        openBetween: { longStart: 0, shortStart: 0 },
        openBelow: { longStart: 0, shortStart: 0 }
    }]
]);

export const stockSelections: string[] = [
    'MSFT', 'HOOD',
    'RBLX', 'META',
];

export const stocksTradingPlans: TradingPlans.TradingPlans[] = [
    {
        symbol: 'MSFT',
        analysis: {
            isFreshNews: true,
            newsImpactScore: 0, marketReactionScore: 0, swingHoldRatio: 0,// optional
            premarketVolumeScore: TradingPlans.PremarketVolumeScore.Two_Extremely_High,
            cleanVwapTrend: 2, dailyChartStory: 2,
            allowFirstMinuteByNewsQuality: true,
            allowFirstMinuteByRelativeVolume: true,
            allowFirstMinutezByKeyLevelsQuality: true,
            gap: { pdc: 395 },
            weeklychart: "", dailyChart: "", hourlyChart: "", premarketChart: "",// optional
            dailyRangeToBreakout: { high: 400, low: 350 },
            keyLevels: [431.2],
            singleMomentumKeyLevel: [{ high: 431.2, low: 431.2 }],
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
        marketCapInMillions: Constants.marketCaps.MSFT,
        atr: {
            average: 11,
            mutiplier: 1.5,
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
        defaultConfigs: msftConfigs, defaultTargets: stock1Target,
        short: {
            levelMomentumPlan: { enableAutoTrigger: false, targets: stock1Target, planConfigs: msftConfigs },
            falseBreakoutPlan: { price: 0, targets: stock1Target, planConfigs: msftConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock1Target, planConfigs: msftConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, targets: stock1Target, planConfigs: msftConfigs },
            deferredBreakoutPlan: { targets: stock1Target, planConfigs: msftConfigs },
        },
        long: {
            levelMomentumPlan: { enableAutoTrigger: false, targets: stock1Target, planConfigs: msftConfigs },
            falseBreakoutPlan: { price: 0, targets: stock1Target, planConfigs: msftConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock1Target, planConfigs: msftConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, targets: stock1Target, planConfigs: msftConfigs },
            deferredBreakoutPlan: { targets: stock1Target, planConfigs: msftConfigs },
        },
        topLevelPlanItem: defaultTopLevelPlanItem,
    },
    {
        symbol: 'META',
        analysis: {
            isFreshNews: true,
            newsImpactScore: 0, marketReactionScore: 0, swingHoldRatio: 0, // optional
            premarketVolumeScore: TradingPlans.PremarketVolumeScore.Two_Extremely_High,
            cleanVwapTrend: 2, dailyChartStory: 2,
            allowFirstMinuteByNewsQuality: true,
            allowFirstMinuteByRelativeVolume: true,
            allowFirstMinutezByKeyLevelsQuality: true,
            gap: { pdc: 549 },
            weeklychart: "", dailyChart: "", hourlyChart: "", premarketChart: "",// optional
            dailyRangeToBreakout: { high: 550, low: 500 },
            keyLevels: [593.25, 587.89, 582.89],
            singleMomentumKeyLevel: [{ high: 593.25, low: 593.25 }],
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
        marketCapInMillions: Constants.marketCaps.META,
        atr: {
            average: 25,
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
        defaultConfigs: metaConfigs, defaultTargets: stock2Target,
        short: {
            levelMomentumPlan: { enableAutoTrigger: false, targets: stock2Target, planConfigs: metaConfigs },
            falseBreakoutPlan: { price: 0, targets: stock2Target, planConfigs: metaConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock2Target, planConfigs: metaConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, targets: stock2Target, planConfigs: metaConfigs },
            deferredBreakoutPlan: { targets: stock2Target, planConfigs: metaConfigs },
        },
        long: {
            levelMomentumPlan: { enableAutoTrigger: false, targets: stock2Target, planConfigs: metaConfigs },
            falseBreakoutPlan: { price: 0, targets: stock2Target, planConfigs: metaConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock2Target, planConfigs: metaConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, targets: stock2Target, planConfigs: metaConfigs },
            deferredBreakoutPlan: { targets: stock2Target, planConfigs: metaConfigs },
        },
        topLevelPlanItem: defaultTopLevelPlanItem
    },
    {
        symbol: 'HOOD',
        analysis: {
            isFreshNews: true,
            newsImpactScore: 0, marketReactionScore: 0, swingHoldRatio: 0, // optional
            premarketVolumeScore: TradingPlans.PremarketVolumeScore.One_Higher_Than_Normal,
            cleanVwapTrend: 2, dailyChartStory: 2,
            allowFirstMinuteByNewsQuality: true,
            allowFirstMinuteByRelativeVolume: true,
            allowFirstMinutezByKeyLevelsQuality: true,
            gap: { pdc: 49.11 },
            weeklychart: "", dailyChart: "", hourlyChart: "", premarketChart: "",// optional
            dailyRangeToBreakout: { high: 51.07, low: 49 },
            keyLevels: [51.25],
            singleMomentumKeyLevel: [{ high: 51.25, low: 51.07 }],
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
        marketCapInMillions: Constants.marketCaps.HOOD,
        atr: {
            average: 3.5,
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
        defaultConfigs: hoodConfigs, defaultTargets: stock3Target,
        short: {
            levelMomentumPlan: { enableAutoTrigger: false, targets: stock3Target, planConfigs: hoodConfigs },
            falseBreakoutPlan: { price: 0, targets: stock3Target, planConfigs: hoodConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock3Target, planConfigs: hoodConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, targets: stock3Target, planConfigs: hoodConfigs },
            deferredBreakoutPlan: { targets: stock3Target, planConfigs: hoodConfigs },
        },
        long: {
            levelMomentumPlan: { enableAutoTrigger: false, targets: stock3Target, planConfigs: hoodConfigs },
            falseBreakoutPlan: { price: 0, targets: stock3Target, planConfigs: hoodConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock3Target, planConfigs: hoodConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, targets: stock3Target, planConfigs: hoodConfigs },
            deferredBreakoutPlan: { targets: stock3Target, planConfigs: hoodConfigs },
        },
        topLevelPlanItem: defaultTopLevelPlanItem
    },
    {
        symbol: 'RBLX',
        analysis: {
            isFreshNews: true,
            newsImpactScore: 0, marketReactionScore: 0, swingHoldRatio: 0, // optional
            premarketVolumeScore: TradingPlans.PremarketVolumeScore.One_Higher_Than_Normal,
            cleanVwapTrend: 2, dailyChartStory: 1,
            allowFirstMinuteByNewsQuality: true,
            allowFirstMinuteByRelativeVolume: true,
            allowFirstMinutezByKeyLevelsQuality: true,
            gap: { pdc: 67 }, // optional, pdv is previous day close
            weeklychart: "", dailyChart: "", hourlyChart: "", premarketChart: "",// optional
            dailyRangeToBreakout: { high: 67, low: 50 },
            keyLevels: [74],
            singleMomentumKeyLevel: [{ high: 74, low: 74 }],
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
        marketCapInMillions: Constants.marketCaps.RBLX,
        atr: {
            average: 2.85,
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
        defaultConfigs: rblxConfigs, defaultTargets: stock4Target,
        short: {
            levelMomentumPlan: { enableAutoTrigger: false, targets: stock4Target, planConfigs: rblxConfigs },
            falseBreakoutPlan: { price: 0, targets: stock4Target, planConfigs: rblxConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock4Target, planConfigs: rblxConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, targets: stock4Target, planConfigs: rblxConfigs },
            deferredBreakoutPlan: { targets: stock4Target, planConfigs: rblxConfigs },
        },
        long: {
            levelMomentumPlan: { enableAutoTrigger: false, targets: stock4Target, planConfigs: rblxConfigs },
            falseBreakoutPlan: { price: 0, targets: stock4Target, planConfigs: rblxConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock4Target, planConfigs: rblxConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, targets: stock4Target, planConfigs: rblxConfigs },
            deferredBreakoutPlan: { targets: stock4Target, planConfigs: rblxConfigs },
        },
        topLevelPlanItem: defaultTopLevelPlanItem
    },
];