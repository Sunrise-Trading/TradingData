import * as TradingPlans from './models';
import * as Constants from './constants';

// futures, momentumSimple, tradeStationEquity, schwab
export const activeProfileName: string = "schwab";
export const tradingSettings: TradingPlans.TradingSettings = {
    snapMode: false,
    useSingleOrderForEntry: true,
}
export const defaultSize = 0.24;
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
const ungConfigs: TradingPlans.PlanConfigs = {
    size: defaultSize,
    deferTradingInSeconds: 0,
    stopTradingAfterSeconds: 0,
    requireReversal: true,
    alwaysAllowFlatten: true,
    alwaysAllowMoveStop: true,
    allowFirstFewExitsCount: 3,
    setupQuality: TradingPlans.SetupQuality.Scalp,
};
const qqqConfigs: TradingPlans.PlanConfigs = {
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
    'SPY', 'NVDA', 'UNG', 'QQQ',
];

export const stocksTradingPlans: TradingPlans.TradingPlans[] = [
    {
        symbol: 'SPY',
        analysis: {
            isFreshNews: true, newsImpactScore: 8, marketReactionScore: 8, swingHoldRatio: 0.3,
            relativeVolumeAndCandleSmoothness: 1,
            cleanVwapTrend: 0, dailyChartStory: 2,
            allowFirstMinuteByNewsQuality: true,
            allowFirstMinuteByRelativeVolume: true,
            allowFirstMinutezByKeyLevelsQuality: true,
            gapSize: 8,
            weeklychart: "range",
            dailyChart: "range",
            hourlyChart: "range",
            premarketChart: "mixed",
            keyLevels: [594.64, 590],
            singleMomentumKeyLevel: { high: 594.64, low: 594.64 },
            dualMomentumKeyLevels: [],
            profitTargetsForLong: {
                targets: [596.6, 595], willBlowPastThoseLevels: 0.1, summary: `
                scalp long
                ` },
            profitTargetsForShort: {
                targets: [590, 586], willBlowPastThoseLevels: 0.3, summary: `
                if lost premarket low, go down to previous gap fill
                ` },
            vwapExtensionDistance: 0,
            choppyOpenRangeHigh: 0,
            choppyOpenRangeLow: 0,
        },
        autoFlip: false,
        vwapCorrection: { open: 0, volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: 1000,
        atr: {
            average: 3.5,
            mutiplier: 2,
            minimumMultipler: 1,
            maxRisk: 1,
        },
        disableShortIfOpenAbove: 0,
        disableLongIfOpenBelow: 0,
        keyLevels: {
            momentumStartForLong: 0,
            momentumStartForShort: 0,
        },
        summary: `
        gap down below last monday gap down support, so last week buyers need to stop out. short biased until this level is reclaimed.
        `,
        setups: [],
        defaultConfigs: spyConfigs, defaultTargets: stock1Target,
        short: {
            reasons: [
                "below monday gap down support",
            ],
            levelMomentumPlan: { enableAutoTrigger: false, targets: stock1Target, planConfigs: spyConfigs },
            falseBreakoutPlan: { price: 0, targets: stock1Target, planConfigs: spyConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock1Target, planConfigs: spyConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, targets: stock1Target, planConfigs: spyConfigs },
            deferredBreakoutPlan: { targets: stock1Target, planConfigs: spyConfigs },
        },
        long: {
            reasons: [
                "reclaim monday gap down support",
            ],
            levelMomentumPlan: { enableAutoTrigger: false, targets: stock1Target, planConfigs: spyConfigs },
            falseBreakoutPlan: { price: 0, targets: stock1Target, planConfigs: spyConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock1Target, planConfigs: spyConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, targets: stock1Target, planConfigs: spyConfigs },
            deferredBreakoutPlan: { targets: stock1Target, planConfigs: spyConfigs },
        },
    },
    {
        symbol: 'NVDA',
        analysis: {
            isFreshNews: true, newsImpactScore: 5, marketReactionScore: 5, swingHoldRatio: 0.3,
            relativeVolumeAndCandleSmoothness: 1,
            cleanVwapTrend: 1, dailyChartStory: 2,
            allowFirstMinuteByNewsQuality: true,
            allowFirstMinuteByRelativeVolume: true,
            allowFirstMinutezByKeyLevelsQuality: true,
            gapSize: 5,
            weeklychart: "steps down",
            dailyChart: "range",
            hourlyChart: "range",
            premarketChart: "above vwap and then lost it",
            keyLevels: [116.25],
            singleMomentumKeyLevel: { high: 116.25, low: 116.25 },
            dualMomentumKeyLevels: [],
            profitTargetsForLong: {
                targets: [118, 120], willBlowPastThoseLevels: 0.1, summary: `
                scalp long
                ` },
            profitTargetsForShort: {
                targets: [112, 110, 105], willBlowPastThoseLevels: 0.5, summary: `
                big room to the down side
                ` },
            vwapExtensionDistance: 0,
            choppyOpenRangeHigh: 0,
            choppyOpenRangeLow: 0,
        },
        autoFlip: false,
        vwapCorrection: { open: 0, volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: Constants.marketCaps.NVDA,
        atr: {
            average: 4,
            mutiplier: 2,
            minimumMultipler: 1,
            maxRisk: 1,
        },
        disableShortIfOpenAbove: 0,
        disableLongIfOpenBelow: 0,
        keyLevels: {
            momentumStartForLong: 0,
            momentumStartForShort: 0,
        },
        summary: `
        made a important range last week and now gap down below it and very close. making it a A+ setup for short the first green to red.
        `,
        setups: [],
        defaultConfigs: nvdaConfigs, defaultTargets: stock2Target,
        short: {
            reasons: [
                "breakdown consolidation range",
            ],
            levelMomentumPlan: { enableAutoTrigger: false, targets: stock2Target, planConfigs: nvdaConfigs },
            falseBreakoutPlan: { price: 0, targets: stock2Target, planConfigs: nvdaConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock2Target, planConfigs: nvdaConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, targets: stock2Target, planConfigs: nvdaConfigs },
            deferredBreakoutPlan: { targets: stock2Target, planConfigs: nvdaConfigs },
        },
        long: {
            reasons: [
                "reclaim the range",
            ],
            levelMomentumPlan: { enableAutoTrigger: false, targets: stock2Target, planConfigs: nvdaConfigs },
            falseBreakoutPlan: { price: 0, targets: stock2Target, planConfigs: nvdaConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock2Target, planConfigs: nvdaConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, targets: stock2Target, planConfigs: nvdaConfigs },
            deferredBreakoutPlan: { targets: stock2Target, planConfigs: nvdaConfigs },
        },
    },
    {
        symbol: 'UNG',
        analysis: {
            isFreshNews: true, newsImpactScore: 8, marketReactionScore: 8, swingHoldRatio: 0.2,
            relativeVolumeAndCandleSmoothness: 1,
            cleanVwapTrend: 1, dailyChartStory: 1,
            allowFirstMinuteByNewsQuality: false,
            allowFirstMinuteByRelativeVolume: false,
            allowFirstMinutezByKeyLevelsQuality: false,
            gapSize: 1.5,
            weeklychart: "range",
            dailyChart: "down in range",
            hourlyChart: "down",
            premarketChart: "hold above vwap",
            keyLevels: [17.2, 17.58],
            singleMomentumKeyLevel: { high: 17.2, low: 17.2 },
            dualMomentumKeyLevels: [],
            profitTargetsForLong: {
                targets: [18, 19], willBlowPastThoseLevels: 0.2, summary: `
                use ATR and trailing stop
                ` },
            profitTargetsForShort: {
                targets: [17, 16.81], willBlowPastThoseLevels: 0.2, summary: `
                gap fill some of it
                ` },
            vwapExtensionDistance: 0,
            choppyOpenRangeHigh: 0,
            choppyOpenRangeLow: 0,
        },
        autoFlip: false,
        vwapCorrection: { open: 0, volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: 1000,
        atr: {
            average: 0.9,
            mutiplier: 1.5,
            minimumMultipler: 1,
            maxRisk: 0.3,
        },
        disableShortIfOpenAbove: 0,
        disableLongIfOpenBelow: 0,
        keyLevels: {
            momentumStartForLong: 0,
            momentumStartForShort: 0,
        },
        summary: `
        volume is not high, so wait for 1st minute pullback and then look for long. 
        once below premarket low, it's heading now for some gap fill
        `,
        setups: [],
        defaultConfigs: ungConfigs, defaultTargets: stock3Target,
        short: {
            reasons: [
                "profit taking",
            ],
            levelMomentumPlan: { enableAutoTrigger: false, targets: stock3Target, planConfigs: ungConfigs },
            falseBreakoutPlan: { price: 0, targets: stock3Target, planConfigs: ungConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock3Target, planConfigs: ungConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, targets: stock3Target, planConfigs: ungConfigs },
            deferredBreakoutPlan: { targets: stock3Target, planConfigs: ungConfigs },
        },
        long: {
            reasons: [
                "continue strength",
            ],
            levelBreakout: { entryPrice: 17.58, targets: stock3Target, planConfigs: ungConfigs },
            levelMomentumPlan: { enableAutoTrigger: false, targets: stock3Target, planConfigs: ungConfigs },
            falseBreakoutPlan: { price: 0, targets: stock3Target, planConfigs: ungConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock3Target, planConfigs: ungConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, targets: stock3Target, planConfigs: ungConfigs },
            deferredBreakoutPlan: { targets: stock3Target, planConfigs: ungConfigs },
        },
    },
    {
        symbol: 'QQQ',
        analysis: {
            isFreshNews: true, newsImpactScore: 8, marketReactionScore: 8, swingHoldRatio: 0.3,
            relativeVolumeAndCandleSmoothness: 1,
            cleanVwapTrend: 0, dailyChartStory: 2,
            allowFirstMinuteByNewsQuality: true,
            allowFirstMinuteByRelativeVolume: true,
            allowFirstMinutezByKeyLevelsQuality: true,
            gapSize: 8,
            weeklychart: "range",
            dailyChart: "range",
            hourlyChart: "range",
            premarketChart: "mixed",
            keyLevels: [510.15],
            singleMomentumKeyLevel: { high: 510.15, low: 510.15 },
            dualMomentumKeyLevels: [],
            profitTargetsForLong: {
                targets: [517, 518], willBlowPastThoseLevels: 0.2, summary: `
                gap fill some of it.
                ` },
            profitTargetsForShort: {
                targets: [510, 507], willBlowPastThoseLevels: 0.1, summary: `
                scalp short
                ` },
            vwapExtensionDistance: 0,
            choppyOpenRangeHigh: 0,
            choppyOpenRangeLow: 0,
        },
        autoFlip: false,
        vwapCorrection: { open: 0, volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: 1110,
        atr: {
            average: 4,
            mutiplier: 2,
            minimumMultipler: 1,
            maxRisk: 1,
        },
        disableShortIfOpenAbove: 0,
        disableLongIfOpenBelow: 0,
        keyLevels: {
            momentumStartForLong: 0,
            momentumStartForShort: 0,
        },
        summary: `
        stronger than SPY, so prefer long on this one. still above monday gap down support.
        `,
        setups: [],
        defaultConfigs: qqqConfigs, defaultTargets: stock4Target,
        short: {
            reasons: [
                "lost monday gap down support",
            ],
            levelMomentumPlan: { enableAutoTrigger: false, targets: stock4Target, planConfigs: qqqConfigs },
            falseBreakoutPlan: { price: 0, targets: stock4Target, planConfigs: qqqConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock4Target, planConfigs: qqqConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, targets: stock4Target, planConfigs: qqqConfigs },
            deferredBreakoutPlan: { targets: stock4Target, planConfigs: qqqConfigs },
        },
        long: {
            reasons: [
                "above monday gap down support",
            ],
            levelMomentumPlan: { enableAutoTrigger: false, targets: stock4Target, planConfigs: qqqConfigs },
            falseBreakoutPlan: { price: 0, targets: stock4Target, planConfigs: qqqConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock4Target, planConfigs: qqqConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, targets: stock4Target, planConfigs: qqqConfigs },
            deferredBreakoutPlan: { targets: stock4Target, planConfigs: qqqConfigs },
        },
    },
];