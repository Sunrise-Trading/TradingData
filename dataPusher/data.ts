import * as TradingPlans from './models';
import * as Constants from './constants';

// futures, momentumSimple, tradeStationEquity, schwab
export const activeProfileName: string = "schwab";
export const tradingSettings: TradingPlans.TradingSettings = {
    snapMode: false,
    useSingleOrderForEntry: true,
}
export const defaultSize = 0.24;
const asmlConfigs: TradingPlans.PlanConfigs = {
    size: defaultSize,
    deferTradingInSeconds: 0,
    stopTradingAfterSeconds: 0,
    requireReversal: true,
    alwaysAllowFlatten: true,
    alwaysAllowMoveStop: true,
    allowFirstFewExitsCount: 3,
    setupQuality: TradingPlans.SetupQuality.Move2Move,
};
const sbuxConfigs: TradingPlans.PlanConfigs = {
    size: defaultSize,
    deferTradingInSeconds: 0,
    stopTradingAfterSeconds: 0,
    requireReversal: true,
    alwaysAllowFlatten: true,
    alwaysAllowMoveStop: true,
    allowFirstFewExitsCount: 3,
    setupQuality: TradingPlans.SetupQuality.Move2Move,

};
const babaConfigs: TradingPlans.PlanConfigs = {
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
    'ASML', 'SBUX', 'BABA',
];

export const stocksTradingPlans: TradingPlans.TradingPlans[] = [
    {
        symbol: 'ASML',
        analysis: {
            isFreshNews: true, newsImpactScore: 6, marketReactionScore: 6, swingHoldRatio: 0.1,
            relativeVolumeAndCandleSmoothness: 1,
            cleanVwapTrend: 2, dailyChartStory: 1,
            allowFirstMinuteByNewsQuality: true,
            allowFirstMinuteByRelativeVolume: false,
            allowFirstMinutezByKeyLevelsQuality: true,
            gapSize: 30,
            weeklychart: "down",
            dailyChart: "range",
            hourlyChart: "range breakout by gap",
            premarketChart: "below vwap",
            keyLevels: [729.3],
            singleMomentumKeyLevel: 729.3,
            dualMomentumKeyLevels: [],
            profitTargetsForLong: {
                targets: [740, 750], willBlowPastThoseLevels: 0.1, summary: `
                scalp long 740, 750
                ` },
            profitTargetsForShort: {
                targets: [715, 700], willBlowPastThoseLevels: 0.3, summary: `
                possible gap fill
                ` },
            vwapExtensionDistance: 0,
            choppyOpenRangeHigh: 0,
            choppyOpenRangeLow: 0,
        },
        autoFlip: false,
        vwapCorrection: { open: 0, volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: Constants.marketCaps.ASML,
        atr: {
            average: 24,
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
        summary: `
        the best setup short the first new low after testing previous gap fill 729.3
        `,
        setups: [],
        defaultConfigs: asmlConfigs, defaultTargets: stock1Target,
        short: {
            reasons: [
                "gap into resistance, guidance weak",
            ],
            levelMomentumPlan: { enableAutoTrigger: false, targets: stock1Target, planConfigs: asmlConfigs },
            falseBreakoutPlan: { price: 0, targets: stock1Target, planConfigs: asmlConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock1Target, planConfigs: asmlConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, targets: stock1Target, planConfigs: asmlConfigs },
            deferredBreakoutPlan: { targets: stock1Target, planConfigs: asmlConfigs },
        },
        long: {
            reasons: [
                "reclaim gap fill",
            ],
            levelMomentumPlan: { enableAutoTrigger: false, targets: stock1Target, planConfigs: asmlConfigs },
            falseBreakoutPlan: { price: 0, targets: stock1Target, planConfigs: asmlConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock1Target, planConfigs: asmlConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, targets: stock1Target, planConfigs: asmlConfigs },
            deferredBreakoutPlan: { targets: stock1Target, planConfigs: asmlConfigs },
        },
    },
    {
        symbol: 'SBUX',
        analysis: {
            isFreshNews: true, newsImpactScore: 5, marketReactionScore: 5, swingHoldRatio: 0,
            relativeVolumeAndCandleSmoothness: 1,
            cleanVwapTrend: 2, dailyChartStory: 1,
            allowFirstMinuteByNewsQuality: true,
            allowFirstMinuteByRelativeVolume: true,
            allowFirstMinutezByKeyLevelsQuality: true,
            gapSize: 3,
            weeklychart: "range",
            dailyChart: "range",
            hourlyChart: "up",
            premarketChart: "hold above support and vwap",
            keyLevels: [103.32],
            singleMomentumKeyLevel: 106.44,
            dualMomentumKeyLevels: [],
            profitTargetsForLong: {
                targets: [104.5, 105, 106], willBlowPastThoseLevels: 0.2, summary: `
                above 103.32, still more resistance above, keep it scalp
                ` },
            profitTargetsForShort: {
                targets: [100, 98], willBlowPastThoseLevels: 0.4, summary: `
                gap fill, look for a good $2 move
                ` },
            vwapExtensionDistance: 0,
            choppyOpenRangeHigh: 0,
            choppyOpenRangeLow: 0,
        },
        autoFlip: false,
        vwapCorrection: { open: 0, volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: Constants.marketCaps.SBUX,
        atr: {
            average: 1.87,
            mutiplier: 1.5,
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
        use the 103.32 as key level, long above, short below. follow first breakout/breakdown based on 
        open price zone. just focus on execution.
        `,
        setups: [],
        defaultConfigs: sbuxConfigs, defaultTargets: stock2Target,
        short: {
            reasons: [
                "gap onto resistance, business still decline",
            ],
            levelMomentumPlan: { enableAutoTrigger: false, targets: stock2Target, planConfigs: sbuxConfigs },
            falseBreakoutPlan: { price: 0, targets: stock2Target, planConfigs: sbuxConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock2Target, planConfigs: sbuxConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, targets: stock2Target, planConfigs: sbuxConfigs },
            deferredBreakoutPlan: { targets: stock2Target, planConfigs: sbuxConfigs },
        },
        long: {
            reasons: [
                "hold above key level",
            ],
            levelMomentumPlan: { enableAutoTrigger: false, targets: stock2Target, planConfigs: sbuxConfigs },
            falseBreakoutPlan: { price: 0, targets: stock2Target, planConfigs: sbuxConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock2Target, planConfigs: sbuxConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, targets: stock2Target, planConfigs: sbuxConfigs },
            deferredBreakoutPlan: { targets: stock2Target, planConfigs: sbuxConfigs },
        },
    },
    {
        symbol: 'BABA',
        analysis: {
            isFreshNews: false, newsImpactScore: 5, marketReactionScore: 5, swingHoldRatio: 0,
            relativeVolumeAndCandleSmoothness: 2,
            cleanVwapTrend: 2, dailyChartStory: 1,
            allowFirstMinuteByNewsQuality: false,
            allowFirstMinuteByRelativeVolume: false,
            allowFirstMinutezByKeyLevelsQuality: false,
            gapSize: 3,
            weeklychart: "range bounce",
            dailyChart: "up",
            hourlyChart: "up",
            premarketChart: "above vwap and just lost it",
            keyLevels: [99.18],
            singleMomentumKeyLevel: 99.18,
            dualMomentumKeyLevels: [],
            profitTargetsForLong: {
                targets: [100, 101], willBlowPastThoseLevels: 0.2, summary: `
                trailing stop, into resistance zone
                ` },
            profitTargetsForShort: {
                targets: [98, 97], willBlowPastThoseLevels: 0.1, summary: `
                small pullback due to strong strength
                ` },
            vwapExtensionDistance: 0,
            choppyOpenRangeHigh: 0,
            choppyOpenRangeLow: 0,
        },
        autoFlip: false,
        vwapCorrection: { open: 0, volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: Constants.marketCaps.BABA,
        atr: {
            average: 2.34,
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
        summary: `
        take quick trades at the open. it could be making a quickly rally at the open. overall, it will be range day. 
        `,
        setups: [],
        defaultConfigs: babaConfigs, defaultTargets: stock3Target,
        short: {
            reasons: [
                "already rallied yesterday",
            ],
            levelMomentumPlan: { enableAutoTrigger: false, targets: stock3Target, planConfigs: babaConfigs },
            falseBreakoutPlan: { price: 0, targets: stock3Target, planConfigs: babaConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock3Target, planConfigs: babaConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, targets: stock3Target, planConfigs: babaConfigs },
            deferredBreakoutPlan: { targets: stock3Target, planConfigs: babaConfigs },
        },
        long: {
            reasons: [
                "strength continute",
            ],
            levelMomentumPlan: { enableAutoTrigger: false, targets: stock3Target, planConfigs: babaConfigs },
            falseBreakoutPlan: { price: 0, targets: stock3Target, planConfigs: babaConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock3Target, planConfigs: babaConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, targets: stock3Target, planConfigs: babaConfigs },
            deferredBreakoutPlan: { targets: stock3Target, planConfigs: babaConfigs },
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
            singleMomentumKeyLevel: -1,
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
        summary: `
        
        `,
        setups: [],
        defaultConfigs: stock4Configs, defaultTargets: stock4Target,
        short: {
            reasons: [
                "",
            ],
            levelMomentumPlan: { enableAutoTrigger: false, targets: stock4Target, planConfigs: stock4Configs },
            falseBreakoutPlan: { price: 0, targets: stock4Target, planConfigs: stock4Configs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock4Target, planConfigs: stock4Configs },
            firstNewHighPlan: { enableAutoTrigger: false, targets: stock4Target, planConfigs: stock4Configs },
            deferredBreakoutPlan: { targets: stock4Target, planConfigs: stock4Configs },
        },
        long: {
            reasons: [
                "",
            ],
            levelMomentumPlan: { enableAutoTrigger: false, targets: stock4Target, planConfigs: stock4Configs },
            falseBreakoutPlan: { price: 0, targets: stock4Target, planConfigs: stock4Configs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock4Target, planConfigs: stock4Configs },
            firstNewHighPlan: { enableAutoTrigger: false, targets: stock4Target, planConfigs: stock4Configs },
            deferredBreakoutPlan: { targets: stock4Target, planConfigs: stock4Configs },
        },
    },
];