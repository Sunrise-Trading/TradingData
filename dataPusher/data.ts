import * as TradingPlans from './models';
import * as Constants from './constants';

// futures, momentumSimple, tradeStationEquity, schwab
export const activeProfileName: string = "schwab";
export const tradingSettings: TradingPlans.TradingSettings = {
    snapMode: false,
    useSingleOrderForEntry: true,
}
export const defaultSize = 0.24;
const wbaConfigs: TradingPlans.PlanConfigs = {
    size: defaultSize,
    deferTradingInSeconds: 0,
    stopTradingAfterSeconds: 0,
    requireReversal: true,
    alwaysAllowFlatten: true,
    alwaysAllowMoveStop: true,
    allowFirstFewExitsCount: 3,
    setupQuality: TradingPlans.SetupQuality.Scalp,
};
const aaplConfigs: TradingPlans.PlanConfigs = {
    size: defaultSize,
    deferTradingInSeconds: 0,
    stopTradingAfterSeconds: 0,
    requireReversal: true,
    alwaysAllowFlatten: true,
    alwaysAllowMoveStop: true,
    allowFirstFewExitsCount: 3,
    setupQuality: TradingPlans.SetupQuality.Scalp,

};
const teamConfigs: TradingPlans.PlanConfigs = {
    size: defaultSize,
    deferTradingInSeconds: 0,
    stopTradingAfterSeconds: 0,
    requireReversal: true,
    alwaysAllowFlatten: true,
    alwaysAllowMoveStop: true,
    allowFirstFewExitsCount: 3,
    setupQuality: TradingPlans.SetupQuality.Scalp,
};
const deckConfigs: TradingPlans.PlanConfigs = {
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
    'WBA', 'AAPL',
    'TEAM', 'DECK'
];

export const stocksTradingPlans: TradingPlans.TradingPlans[] = [
    {
        symbol: 'WBA',
        analysis: {
            isFreshNews: true, newsImpactScore: 8, marketReactionScore: 6, swingHoldRatio: 0.2,
            relativeVolumeAndCandleSmoothness: 2,
            cleanVwapTrend: 1, dailyChartStory: 1,
            allowFirstMinuteByNewsQuality: true,
            allowFirstMinuteByRelativeVolume: true,
            allowFirstMinutezByKeyLevelsQuality: true,
            gapSize: 1.5,
            weeklychart: "bounce",
            dailyChart: "up",
            hourlyChart: "range",
            premarketChart: "mostly below vwap",
            keyLevels: [10, 10.39, 10.5],
            singleMomentumKeyLevel: { high: 10.50, low: 10.39 },
            dualMomentumKeyLevels: [],
            profitTargetsForLong: {
                targets: [10.8, 11], willBlowPastThoseLevels: 0, summary: `
                short only
                ` },
            profitTargetsForShort: {
                targets: [10, 9.94], willBlowPastThoseLevels: 0.2, summary: `
                need to break 10, then 9.94, then maybe 9.8.
                ` },
            vwapExtensionDistance: 0,
            choppyOpenRangeHigh: 0,
            choppyOpenRangeLow: 0,
        },
        autoFlip: false,
        vwapCorrection: { open: 0, volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: Constants.marketCaps.WBA,
        atr: {
            average: 0.7,
            mutiplier: 1.5,
            minimumMultipler: 1,
            maxRisk: 0.25,
        },
        disableShortIfOpenAbove: 0,
        disableLongIfOpenBelow: 0,
        keyLevels: {
            momentumStartForLong: 0,
            momentumStartForShort: 0,
        },
        summary: `
        short only due to lost previous earnings gap up support. don't chase the short below 10 at open, better to wait for a pop.
        `,
        setups: [],
        defaultConfigs: wbaConfigs, defaultTargets: stock1Target,
        short: {
            reasons: [
                "lost earnings support, bad news",
            ],
            levelMomentumPlan: { enableAutoTrigger: false, targets: stock1Target, planConfigs: wbaConfigs },
            falseBreakoutPlan: { price: 0, targets: stock1Target, planConfigs: wbaConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock1Target, planConfigs: wbaConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, targets: stock1Target, planConfigs: wbaConfigs },
            deferredBreakoutPlan: { targets: stock1Target, planConfigs: wbaConfigs },
        },
        long: {
            reasons: [
                "pullback to support near 50 day ma",
            ],
            levelMomentumPlan: { enableAutoTrigger: false, targets: stock1Target, planConfigs: wbaConfigs },
            falseBreakoutPlan: { price: 0, targets: stock1Target, planConfigs: wbaConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock1Target, planConfigs: wbaConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, targets: stock1Target, planConfigs: wbaConfigs },
            deferredBreakoutPlan: { targets: stock1Target, planConfigs: wbaConfigs },
        },
    },
    {
        symbol: 'AAPL',
        analysis: {
            isFreshNews: true, newsImpactScore: 5, marketReactionScore: 5, swingHoldRatio: 0,
            relativeVolumeAndCandleSmoothness: 1,
            cleanVwapTrend: 1, dailyChartStory: 1,
            allowFirstMinuteByNewsQuality: true,
            allowFirstMinuteByRelativeVolume: true,
            allowFirstMinutezByKeyLevelsQuality: true,
            gapSize: 10,
            weeklychart: "up range",
            dailyChart: "bounce",
            hourlyChart: "up",
            premarketChart: "above vwap and making a dip, trying to hold",
            keyLevels: [248.35],
            singleMomentumKeyLevel: { high: 248.35, low: 248.35 },
            dualMomentumKeyLevels: [],
            profitTargetsForLong: {
                targets: [250, 251], willBlowPastThoseLevels: 0.1, summary: `
                look for 1 ATR
                ` },
            profitTargetsForShort: {
                targets: [244, 242], willBlowPastThoseLevels: 0.3, summary: `
                gap fill most of it
                ` },
            vwapExtensionDistance: 0,
            choppyOpenRangeHigh: 0,
            choppyOpenRangeLow: 0,
        },
        autoFlip: false,
        vwapCorrection: { open: 0, volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: Constants.marketCaps.AAPL,
        atr: {
            average: 4.5,
            mutiplier: 1.5,
            minimumMultipler: 1,
            maxRisk: 1.25,
        },
        disableShortIfOpenAbove: 0,
        disableLongIfOpenBelow: 0,
        keyLevels: {
            momentumStartForLong: 0,
            momentumStartForShort: 0,
        },
        summary: `
        premarket high is near earnings reaction high. as long as it's below, trade the gap fill short.
        245.44 is another earnings support, need to break that to go lower.
        `,
        setups: [],
        defaultConfigs: aaplConfigs, defaultTargets: stock2Target,
        short: {
            reasons: [
                "still revenue decline",
            ],
            levelMomentumPlan: { enableAutoTrigger: false, targets: stock2Target, planConfigs: aaplConfigs },
            falseBreakoutPlan: { price: 0, targets: stock2Target, planConfigs: aaplConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock2Target, planConfigs: aaplConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, targets: stock2Target, planConfigs: aaplConfigs },
            deferredBreakoutPlan: { targets: stock2Target, planConfigs: aaplConfigs },
        },
        long: {
            reasons: [
                "earnings beat",
            ],
            levelMomentumPlan: { enableAutoTrigger: false, targets: stock2Target, planConfigs: aaplConfigs },
            falseBreakoutPlan: { price: 0, targets: stock2Target, planConfigs: aaplConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock2Target, planConfigs: aaplConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, targets: stock2Target, planConfigs: aaplConfigs },
            deferredBreakoutPlan: { targets: stock2Target, planConfigs: aaplConfigs },
        },
    },
    {
        symbol: 'TEAM',
        analysis: {
            isFreshNews: true, newsImpactScore: 6, marketReactionScore: 7, swingHoldRatio: 0,
            relativeVolumeAndCandleSmoothness: 1,
            cleanVwapTrend: 2, dailyChartStory: 1,
            allowFirstMinuteByNewsQuality: true,
            allowFirstMinuteByRelativeVolume: false,
            allowFirstMinutezByKeyLevelsQuality: false,
            gapSize: 60,
            weeklychart: "up",
            dailyChart: "range",
            hourlyChart: "up",
            premarketChart: "above vwap",
            keyLevels: [336],
            singleMomentumKeyLevel: { high: 336, low: 336 },
            dualMomentumKeyLevels: [],
            profitTargetsForLong: {
                targets: [336, 330], willBlowPastThoseLevels: 0.1, summary: `
                scalp long, already gapp up too much
                ` },
            profitTargetsForShort: {
                targets: [300, 290], willBlowPastThoseLevels: 0.3, summary: `
                gap fill most of it
                ` },
            vwapExtensionDistance: 0,
            choppyOpenRangeHigh: 0,
            choppyOpenRangeLow: 0,
        },
        autoFlip: false,
        vwapCorrection: { open: 0, volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: Constants.marketCaps.TEAM,
        atr: {
            average: 9.47,
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
        gap up too much but maintain strength above vwap. scalp long after a deep pullback. 
        if lost premarket low 315, it's done, sell off to gap fill
        `,
        setups: [],
        defaultConfigs: teamConfigs, defaultTargets: stock3Target,
        short: {
            reasons: [
                "gap fill, long term still resistance above",
            ],
            levelMomentumPlan: { enableAutoTrigger: false, targets: stock3Target, planConfigs: teamConfigs },
            falseBreakoutPlan: { price: 0, targets: stock3Target, planConfigs: teamConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock3Target, planConfigs: teamConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, targets: stock3Target, planConfigs: teamConfigs },
            deferredBreakoutPlan: { targets: stock3Target, planConfigs: teamConfigs },
        },
        long: {
            reasons: [
                "strength after earnings",
            ],
            levelMomentumPlan: { enableAutoTrigger: false, targets: stock3Target, planConfigs: teamConfigs },
            falseBreakoutPlan: { price: 0, targets: stock3Target, planConfigs: teamConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock3Target, planConfigs: teamConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, targets: stock3Target, planConfigs: teamConfigs },
            deferredBreakoutPlan: { targets: stock3Target, planConfigs: teamConfigs },
        },
    },
    {
        symbol: 'DECK',
        analysis: {
            isFreshNews: true, newsImpactScore: 5, marketReactionScore: 7, swingHoldRatio: 0.2,
            relativeVolumeAndCandleSmoothness: 2,
            cleanVwapTrend: 1, dailyChartStory: 2,
            allowFirstMinuteByNewsQuality: true,
            allowFirstMinuteByRelativeVolume: true,
            allowFirstMinutezByKeyLevelsQuality: true,
            gapSize: 30,
            weeklychart: "up",
            dailyChart: "up",
            hourlyChart: "up",
            premarketChart: "gap down and bounce above vwap",
            keyLevels: [195.18],
            singleMomentumKeyLevel: { high: 195.18, low: 195.18 },
            dualMomentumKeyLevels: [],
            profitTargetsForLong: {
                targets: [199, 200], willBlowPastThoseLevels: 0.1, summary: `
                if above 195, continute 1 ATR
                ` },
            profitTargetsForShort: {
                targets: [190, 187], willBlowPastThoseLevels: 0.1, summary: `
                go to premarket low and reverse
                ` },
            vwapExtensionDistance: 0,
            choppyOpenRangeHigh: 0,
            choppyOpenRangeLow: 0,
        },
        autoFlip: false,
        vwapCorrection: { open: 0, volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: 33000,
        atr: {
            average: 5.88,
            mutiplier: 1.5,
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
        expect range trding between 195 and 187
        `,
        setups: [],
        defaultConfigs: deckConfigs, defaultTargets: stock4Target,
        short: {
            reasons: [
                "earnings miss, below key support",
            ],
            levelMomentumPlan: { enableAutoTrigger: false, targets: stock4Target, planConfigs: deckConfigs },
            falseBreakoutPlan: { price: 0, targets: stock4Target, planConfigs: deckConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock4Target, planConfigs: deckConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, targets: stock4Target, planConfigs: deckConfigs },
            deferredBreakoutPlan: { targets: stock4Target, planConfigs: deckConfigs },
        },
        long: {
            reasons: [
                "long term still bullish",
            ],
            levelMomentumPlan: { enableAutoTrigger: false, targets: stock4Target, planConfigs: deckConfigs },
            falseBreakoutPlan: { price: 0, targets: stock4Target, planConfigs: deckConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock4Target, planConfigs: deckConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, targets: stock4Target, planConfigs: deckConfigs },
            deferredBreakoutPlan: { targets: stock4Target, planConfigs: deckConfigs },
        },
    },
];