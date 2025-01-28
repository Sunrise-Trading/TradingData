import * as TradingPlans from './models';
import * as Constants from './constants';

// futures, momentumSimple, tradeStationEquity, schwab
export const activeProfileName: string = "schwab";
export const tradingSettings: TradingPlans.TradingSettings = {
    snapMode: false,
    useSingleOrderForEntry: true,
}
export const defaultSize = 0.24;
const nepConfigs: TradingPlans.PlanConfigs = {
    size: defaultSize,
    deferTradingInSeconds: 0,
    stopTradingAfterSeconds: 0,
    requireReversal: true,
    alwaysAllowFlatten: true,
    alwaysAllowMoveStop: true,
    allowFirstFewExitsCount: 3,
    setupQuality: TradingPlans.SetupQuality.Move2Move,
};
const rclConfigs: TradingPlans.PlanConfigs = {
    size: defaultSize,
    deferTradingInSeconds: 0,
    stopTradingAfterSeconds: 0,
    requireReversal: true,
    alwaysAllowFlatten: true,
    alwaysAllowMoveStop: true,
    allowFirstFewExitsCount: 3,
    setupQuality: TradingPlans.SetupQuality.Move2Move,

};
const gmConfigs: TradingPlans.PlanConfigs = {
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
    setupQuality: TradingPlans.SetupQuality.Unknown,
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
    'NEP',
    'RCL', 'GM', 'BA',
];

export const stocksTradingPlans: TradingPlans.TradingPlans[] = [
    {
        symbol: 'NEP',
        analysis: {
            isFreshNews: true, newsImpactScore: 7, marketReactionScore: 7, swingHoldRatio: 0.1,
            relativeVolumeAndCandleSmoothness: 1,
            cleanVwapTrend: 2, dailyChartStory: 2,
            allowFirstMinuteByNewsQuality: true,
            allowFirstMinuteByRelativeVolume: false,
            allowFirstMinutezByKeyLevelsQuality: true,
            gapSize: 3.50,
            weeklychart: "down",
            dailyChart: "down",
            hourlyChart: "down",
            premarketChart: "selloff below vwap",
            keyLevels: [15.25, 11.67],
            singleMomentumKeyLevel: 13.5,
            dualMomentumKeyLevels: [],
            profitTargetsForLong: {
                targets: [14, 15], willBlowPastThoseLevels: 0.2, summary: `
                unlikely to gap fill. perfer short
                ` },
            profitTargetsForShort: {
                targets: [11.67, 11], willBlowPastThoseLevels: 0.3, summary: `
                breakding all time low, likely to continue selloff. use trailing stop for a good 15 minute trend
                ` },
            vwapExtensionDistance: 0,
            choppyOpenRangeHigh: 0,
            choppyOpenRangeLow: 0,
        },
        autoFlip: false,
        vwapCorrection: { open: 0, volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: 2500,
        atr: {
            average: 0.88,
            mutiplier: 2,
            minimumMultipler: 1,
            maxRisk: 0.5,
        },
        disableShortIfOpenAbove: 0,
        disableLongIfOpenBelow: 0,
        keyLevels: {
            momentumStartForLong: 0,
            momentumStartForShort: 0,
        },
        summary: `
        gap down selloff below all time low setup. because gapped down too much and already in a down trend, better 
        to let it pop back to near below vwap and then look for first new low. 
        `,
        setups: [],
        defaultConfigs: nepConfigs, defaultTargets: stock1Target,
        short: {
            reasons: [
                "bad earnings",
            ],
            levelMomentumPlan: { enableAutoTrigger: true, targets: stock1Target, planConfigs: nepConfigs },
            falseBreakoutPlan: { price: 0, targets: stock1Target, planConfigs: nepConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock1Target, planConfigs: nepConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, targets: stock1Target, planConfigs: nepConfigs },
            deferredBreakoutPlan: { targets: stock1Target, planConfigs: nepConfigs },
        },
        long: {
            reasons: [
                "gap down too much",
            ],
            levelMomentumPlan: { enableAutoTrigger: true, targets: stock1Target, planConfigs: nepConfigs },
            falseBreakoutPlan: { price: 0, targets: stock1Target, planConfigs: nepConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock1Target, planConfigs: nepConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, targets: stock1Target, planConfigs: nepConfigs },
            deferredBreakoutPlan: { targets: stock1Target, planConfigs: nepConfigs },
        },
    },
    {
        symbol: 'RCL',
        analysis: {
            isFreshNews: true, newsImpactScore: 5, marketReactionScore: 5, swingHoldRatio: 0,
            relativeVolumeAndCandleSmoothness: 1,
            cleanVwapTrend: 1, dailyChartStory: 1,
            allowFirstMinuteByNewsQuality: true,
            allowFirstMinuteByRelativeVolume: true,
            allowFirstMinutezByKeyLevelsQuality: true,
            gapSize: 10,
            weeklychart: "up",
            dailyChart: "range",
            hourlyChart: "range",
            premarketChart: "above vwap",
            keyLevels: [250.11],
            singleMomentumKeyLevel: 250,
            dualMomentumKeyLevels: [],
            profitTargetsForLong: {
                targets: [254, 258], willBlowPastThoseLevels: 0.3, summary: `
                likely to test previous high if hold above 250
                ` },
            profitTargetsForShort: {
                targets: [245, 240], willBlowPastThoseLevels: 0.3, summary: `
                will make a big part of gap fill
                ` },
            vwapExtensionDistance: 0,
            choppyOpenRangeHigh: 0,
            choppyOpenRangeLow: 0,
        },
        autoFlip: false,
        vwapCorrection: { open: 0, volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: Constants.marketCaps.RCL,
        atr: {
            average: 6.90,
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
        the best setup is wait for the interaction with 250 and see
        `,
        setups: [],
        defaultConfigs: rclConfigs, defaultTargets: stock2Target,
        short: {
            reasons: [
                "gap into resistance",
            ],
            levelMomentumPlan: { enableAutoTrigger: true, targets: stock2Target, planConfigs: rclConfigs },
            falseBreakoutPlan: { price: 0, targets: stock2Target, planConfigs: rclConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock2Target, planConfigs: rclConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, targets: stock2Target, planConfigs: rclConfigs },
            deferredBreakoutPlan: { targets: stock2Target, planConfigs: rclConfigs },
        },
        long: {
            reasons: [
                "breakout key resistance",
            ],
            levelMomentumPlan: { enableAutoTrigger: true, targets: stock2Target, planConfigs: rclConfigs },
            falseBreakoutPlan: { price: 0, targets: stock2Target, planConfigs: rclConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock2Target, planConfigs: rclConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, targets: stock2Target, planConfigs: rclConfigs },
            deferredBreakoutPlan: { targets: stock2Target, planConfigs: rclConfigs },
        },
    },
    {
        symbol: 'GM',
        analysis: {
            isFreshNews: true, newsImpactScore: 5, marketReactionScore: 5, swingHoldRatio: 0,
            relativeVolumeAndCandleSmoothness: 2,
            cleanVwapTrend: 2, dailyChartStory: 1,
            allowFirstMinuteByNewsQuality: true,
            allowFirstMinuteByRelativeVolume: true,
            allowFirstMinutezByKeyLevelsQuality: true,
            gapSize: 2.50,
            weeklychart: "up",
            dailyChart: "range",
            hourlyChart: "range",
            premarketChart: "below",
            keyLevels: [54],
            singleMomentumKeyLevel: 54,
            dualMomentumKeyLevels: [],
            profitTargetsForLong: {
                targets: [55, 55.5], willBlowPastThoseLevels: 0.1, summary: `
                unlikely
                ` },
            profitTargetsForShort: {
                targets: [51.36, 50], willBlowPastThoseLevels: 0.2, summary: `
                if go below premarket low, go to 50
                ` },
            vwapExtensionDistance: 0,
            choppyOpenRangeHigh: 0,
            choppyOpenRangeLow: 0,
        },
        autoFlip: false,
        vwapCorrection: { open: 0, volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: Constants.marketCaps.GM,
        atr: {
            average: 1.53,
            mutiplier: 1.5,
            minimumMultipler: 1,
            maxRisk: 0.5,
        },
        disableShortIfOpenAbove: 0,
        disableLongIfOpenBelow: 0,
        keyLevels: {
            momentumStartForLong: 0,
            momentumStartForShort: 0,
        },
        summary: `
        gap up and fade below to gap down. best setup wait for pop to near 54 and then short new low
        `,
        setups: [],
        defaultConfigs: gmConfigs, defaultTargets: stock3Target,
        short: {
            reasons: [
                "down after conference call",
            ],
            levelMomentumPlan: { enableAutoTrigger: true, targets: stock3Target, planConfigs: gmConfigs },
            falseBreakoutPlan: { price: 0, targets: stock3Target, planConfigs: gmConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock3Target, planConfigs: gmConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, targets: stock3Target, planConfigs: gmConfigs },
            deferredBreakoutPlan: { targets: stock3Target, planConfigs: gmConfigs },
        },
        long: {
            reasons: [
                "none",
            ],
            levelMomentumPlan: { enableAutoTrigger: true, targets: stock3Target, planConfigs: gmConfigs },
            falseBreakoutPlan: { price: 0, targets: stock3Target, planConfigs: gmConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock3Target, planConfigs: gmConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, targets: stock3Target, planConfigs: gmConfigs },
            deferredBreakoutPlan: { targets: stock3Target, planConfigs: gmConfigs },
        },
    },
    {
        symbol: 'BA',
        analysis: {
            isFreshNews: true, newsImpactScore: 5, marketReactionScore: 5, swingHoldRatio: 0,
            relativeVolumeAndCandleSmoothness: 2,
            cleanVwapTrend: 2, dailyChartStory: 1,
            allowFirstMinuteByNewsQuality: true,
            allowFirstMinuteByRelativeVolume: true,
            allowFirstMinutezByKeyLevelsQuality: true,
            gapSize: 2.50,
            weeklychart: "up",
            dailyChart: "range",
            hourlyChart: "range",
            premarketChart: "below",
            keyLevels: [182.57],
            singleMomentumKeyLevel: 182.57,
            dualMomentumKeyLevels: [],
            profitTargetsForLong: {
                targets: [55, 55.5], willBlowPastThoseLevels: 0.1, summary: `
                unlikely
                ` },
            profitTargetsForShort: {
                targets: [51.36, 50], willBlowPastThoseLevels: 0.2, summary: `
                if go below premarket low, go to 50
                ` },
            vwapExtensionDistance: 0,
            choppyOpenRangeHigh: 0,
            choppyOpenRangeLow: 0,
        },
        autoFlip: false,
        vwapCorrection: { open: 0, volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: Constants.marketCaps.GM,
        atr: {
            average: 5,
            mutiplier: 1.5,
            minimumMultipler: 1,
            maxRisk: 2.5,
        },
        disableShortIfOpenAbove: 0,
        disableLongIfOpenBelow: 0,
        keyLevels: {
            momentumStartForLong: 0,
            momentumStartForShort: 0,
        },
        summary: `
        gap up and fade below to gap down. best setup wait for pop to near 54 and then short new low
        `,
        setups: [],
        defaultConfigs: gmConfigs, defaultTargets: stock3Target,
        short: {
            reasons: [
                "down after conference call",
            ],
            levelMomentumPlan: { enableAutoTrigger: true, targets: stock3Target, planConfigs: gmConfigs },
            falseBreakoutPlan: { price: 0, targets: stock3Target, planConfigs: gmConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock3Target, planConfigs: gmConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, targets: stock3Target, planConfigs: gmConfigs },
            deferredBreakoutPlan: { targets: stock3Target, planConfigs: gmConfigs },
        },
        long: {
            reasons: [
                "none",
            ],
            levelMomentumPlan: { enableAutoTrigger: true, targets: stock3Target, planConfigs: gmConfigs },
            falseBreakoutPlan: { price: 0, targets: stock3Target, planConfigs: gmConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock3Target, planConfigs: gmConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, targets: stock3Target, planConfigs: gmConfigs },
            deferredBreakoutPlan: { targets: stock3Target, planConfigs: gmConfigs },
        },
    },
];