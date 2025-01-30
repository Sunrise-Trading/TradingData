import * as TradingPlans from './models';
import * as Constants from './constants';

// futures, momentumSimple, tradeStationEquity, schwab
export const activeProfileName: string = "schwab";
export const tradingSettings: TradingPlans.TradingSettings = {
    snapMode: false,
    useSingleOrderForEntry: true,
}
export const defaultSize = 0.24;
const avgoConfigs: TradingPlans.PlanConfigs = {
    size: defaultSize,
    deferTradingInSeconds: 0,
    stopTradingAfterSeconds: 0,
    requireReversal: true,
    alwaysAllowFlatten: true,
    alwaysAllowMoveStop: true,
    allowFirstFewExitsCount: 3,
    setupQuality: TradingPlans.SetupQuality.Move2Move,
};
const upsConfigs: TradingPlans.PlanConfigs = {
    size: defaultSize,
    deferTradingInSeconds: 0,
    stopTradingAfterSeconds: 0,
    requireReversal: true,
    alwaysAllowFlatten: true,
    alwaysAllowMoveStop: true,
    allowFirstFewExitsCount: 3,
    setupQuality: TradingPlans.SetupQuality.SwingHold,

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
    'AVGO',
    'UPS',
    'META',
    'MSFT',
];

export const stocksTradingPlans: TradingPlans.TradingPlans[] = [
    {
        symbol: 'AVGO',
        analysis: {
            isFreshNews: true, newsImpactScore: 5, marketReactionScore: 4, swingHoldRatio: 0.2,
            relativeVolumeAndCandleSmoothness: 1,
            cleanVwapTrend: 2, dailyChartStory: 1,
            allowFirstMinuteByNewsQuality: true,
            allowFirstMinuteByRelativeVolume: true,
            allowFirstMinutezByKeyLevelsQuality: true,
            gapSize: 0,
            weeklychart: "range",
            dailyChart: "step down",
            hourlyChart: "range",
            premarketChart: "above vwap, below support near",
            keyLevels: [218.43],
            singleMomentumKeyLevel: 218.43,
            dualMomentumKeyLevels: [],
            profitTargetsForLong: {
                targets: [227, 235], willBlowPastThoseLevels: 0.3, summary: `
                big room to the up side to hit short term moving average first
                ` },
            profitTargetsForShort: {
                targets: [214, 211], willBlowPastThoseLevels: 0.1, summary: `
                first premarket low, if break below, then gap fill
                ` },
            vwapExtensionDistance: 0,
            choppyOpenRangeHigh: 0,
            choppyOpenRangeLow: 0,
        },
        autoFlip: false,
        vwapCorrection: { open: 0, volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: Constants.marketCaps.AVGO,
        atr: {
            average: 8.75,
            mutiplier: 1.5,
            minimumMultipler: 1,
            maxRisk: 3.75,
        },
        disableShortIfOpenAbove: 0,
        disableLongIfOpenBelow: 0,
        keyLevels: {
            momentumStartForLong: 0,
            momentumStartForShort: 0,
        },
        summary: `
        either long the confirmed breakout, or short the rejection of the same level.
        `,
        setups: [],
        defaultConfigs: avgoConfigs, defaultTargets: stock1Target,
        short: {
            reasons: [
                "level rejection",
            ],
            levelMomentumPlan: { enableAutoTrigger: false, targets: stock1Target, planConfigs: avgoConfigs },
            falseBreakoutPlan: { price: 0, targets: stock1Target, planConfigs: avgoConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock1Target, planConfigs: avgoConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, targets: stock1Target, planConfigs: avgoConfigs },
            deferredBreakoutPlan: { targets: stock1Target, planConfigs: avgoConfigs },
        },
        long: {
            reasons: [
                "level breakout",
            ],
            levelMomentumPlan: { enableAutoTrigger: false, targets: stock1Target, planConfigs: avgoConfigs },
            falseBreakoutPlan: { price: 0, targets: stock1Target, planConfigs: avgoConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock1Target, planConfigs: avgoConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, targets: stock1Target, planConfigs: avgoConfigs },
            deferredBreakoutPlan: { targets: stock1Target, planConfigs: avgoConfigs },
        },
    },
    {
        symbol: 'UPS',
        analysis: {
            isFreshNews: true, newsImpactScore: 5, marketReactionScore: 8, swingHoldRatio: 0.3,
            relativeVolumeAndCandleSmoothness: 2,
            cleanVwapTrend: 2, dailyChartStory: 2,
            allowFirstMinuteByNewsQuality: true,
            allowFirstMinuteByRelativeVolume: true,
            allowFirstMinutezByKeyLevelsQuality: true,
            gapSize: 20,
            weeklychart: "down",
            dailyChart: "down",
            hourlyChart: "down",
            premarketChart: "down below vwap",
            keyLevels: [121.56],
            singleMomentumKeyLevel: 121.56,
            dualMomentumKeyLevels: [],
            profitTargetsForLong: {
                targets: [121, 120], willBlowPastThoseLevels: 0.1, summary: `
                no good for long
                ` },
            profitTargetsForShort: {
                targets: [113.25, 110], willBlowPastThoseLevels: -1, summary: `
                premarket low first, then 1 atr. not clear support due to previous range below 120.
                ` },
            vwapExtensionDistance: 0,
            choppyOpenRangeHigh: 0,
            choppyOpenRangeLow: 0,
        },
        autoFlip: false,
        vwapCorrection: { open: 0, volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: 0,
        atr: {
            average: 2.4,
            mutiplier: 2,
            minimumMultipler: 1,
            maxRisk: 1.3,
        },
        disableShortIfOpenAbove: 0,
        disableLongIfOpenBelow: 0,
        keyLevels: {
            momentumStartForLong: 0,
            momentumStartForShort: 0,
        },
        summary: `
        strong down trend, only short. due to large gap down, let it pop at least to near vwap before shorting. 
        prefer to take the first new low. ok to be above vwap due to open below vwap.
        `,
        setups: [],
        defaultConfigs: upsConfigs, defaultTargets: stock2Target,
        short: {
            reasons: [
                "gap down below 52 week low",
            ],
            levelMomentumPlan: { enableAutoTrigger: false, targets: stock2Target, planConfigs: upsConfigs },
            falseBreakoutPlan: { price: 0, targets: stock2Target, planConfigs: upsConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock2Target, planConfigs: upsConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, targets: stock2Target, planConfigs: upsConfigs },
            deferredBreakoutPlan: { targets: stock2Target, planConfigs: upsConfigs },
        },
        long: {
            reasons: [
                "no good",
            ],
            levelMomentumPlan: { enableAutoTrigger: false, targets: stock2Target, planConfigs: upsConfigs },
            falseBreakoutPlan: { price: 0, targets: stock2Target, planConfigs: upsConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock2Target, planConfigs: upsConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, targets: stock2Target, planConfigs: upsConfigs },
            deferredBreakoutPlan: { targets: stock2Target, planConfigs: upsConfigs },
        },
    },
    {
        symbol: 'META',
        analysis: {
            isFreshNews: true, newsImpactScore: 4, marketReactionScore: 4, swingHoldRatio: 0.1,
            relativeVolumeAndCandleSmoothness: 2,
            cleanVwapTrend: 2, dailyChartStory: 2,
            allowFirstMinuteByNewsQuality: true,
            allowFirstMinuteByRelativeVolume: true,
            allowFirstMinutezByKeyLevelsQuality: true,
            gapSize: 20,
            weeklychart: "up",
            dailyChart: "up",
            hourlyChart: "up",
            premarketChart: "above vwap, but below reaction high",
            keyLevels: [716, 682.58],
            singleMomentumKeyLevel: 682.58,
            dualMomentumKeyLevels: [],
            profitTargetsForLong: {
                targets: [700, 708], willBlowPastThoseLevels: 0.1, summary: `
                due to below reaction high, need to scalp long. also earnings is mixed
                ` },
            profitTargetsForShort: {
                targets: [664, 665], willBlowPastThoseLevels: 0.1, summary: `
                not good for short due to up trend
                ` },
            vwapExtensionDistance: 0,
            choppyOpenRangeHigh: 0,
            choppyOpenRangeLow: 0,
        },
        autoFlip: false,
        vwapCorrection: { open: 0, volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: Constants.marketCaps.META,
        atr: {
            average: 17.5,
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
        summary: `
        gap up all time high, so use that level for direction. but due to below reaction high, need to scalp long.
        the best setup is a false breakdown to hold above all time high
        `,
        setups: [],
        defaultConfigs: metaConfigs, defaultTargets: stock3Target,
        short: {
            reasons: [
                "below reaction high",
            ],
            levelMomentumPlan: { enableAutoTrigger: false, targets: stock3Target, planConfigs: metaConfigs },
            falseBreakoutPlan: { price: 0, targets: stock3Target, planConfigs: metaConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock3Target, planConfigs: metaConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, targets: stock3Target, planConfigs: metaConfigs },
            deferredBreakoutPlan: { targets: stock3Target, planConfigs: metaConfigs },
        },
        long: {
            reasons: [
                "all time high breakout",
            ],
            levelMomentumPlan: { enableAutoTrigger: false, targets: stock3Target, planConfigs: metaConfigs },
            falseBreakoutPlan: { price: 0, targets: stock3Target, planConfigs: metaConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock3Target, planConfigs: metaConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, targets: stock3Target, planConfigs: metaConfigs },
            deferredBreakoutPlan: { targets: stock3Target, planConfigs: metaConfigs },
        },
    },
    {
        symbol: 'MSFT',
        analysis: {
            isFreshNews: true, newsImpactScore: 6, marketReactionScore: 6, swingHoldRatio: 0.2,
            relativeVolumeAndCandleSmoothness: 2,
            cleanVwapTrend: 2, dailyChartStory: 1,
            allowFirstMinuteByNewsQuality: true,
            allowFirstMinuteByRelativeVolume: true,
            allowFirstMinutezByKeyLevelsQuality: true,
            gapSize: 22,
            weeklychart: "range",
            dailyChart: "range",
            hourlyChart: "range",
            premarketChart: "below vwap",
            keyLevels: [423.5],
            singleMomentumKeyLevel: 423.5,
            dualMomentumKeyLevels: [],
            profitTargetsForLong: {
                targets: [427, 428], willBlowPastThoseLevels: 0.1, summary: `
                heave resistance ahead, so prefer to scalp
                ` },
            profitTargetsForShort: {
                targets: [414, 410], willBlowPastThoseLevels: 0.2, summary: `
                probably just hit reaction low 414 and reverse
                ` },
            vwapExtensionDistance: 0,
            choppyOpenRangeHigh: 0,
            choppyOpenRangeLow: 0,
        },
        autoFlip: false,
        vwapCorrection: { open: 0, volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: Constants.marketCaps.MSFT,
        atr: {
            average: 9.6,
            mutiplier: 1,
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
        due to still in a daily range, the best setup is a pop back to vwap and key level. and then short the
         new low as rejection
        `,
        setups: [],
        defaultConfigs: msftConfigs, defaultTargets: stock4Target,
        short: {
            reasons: [
                "earnings miss",
            ],
            levelMomentumPlan: { enableAutoTrigger: false, targets: stock4Target, planConfigs: msftConfigs },
            falseBreakoutPlan: { price: 0, targets: stock4Target, planConfigs: msftConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock4Target, planConfigs: msftConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, targets: stock4Target, planConfigs: msftConfigs },
            deferredBreakoutPlan: { targets: stock4Target, planConfigs: msftConfigs },
        },
        long: {
            reasons: [
                "still inside daily range",
            ],
            levelMomentumPlan: { enableAutoTrigger: false, targets: stock4Target, planConfigs: msftConfigs },
            falseBreakoutPlan: { price: 0, targets: stock4Target, planConfigs: msftConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock4Target, planConfigs: msftConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, targets: stock4Target, planConfigs: msftConfigs },
            deferredBreakoutPlan: { targets: stock4Target, planConfigs: msftConfigs },
        },
    },
];