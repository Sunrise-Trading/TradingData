import * as TradingPlans from './models';
import * as Constants from './constants';

// futures, momentumSimple, tradeStationEquity, schwab
export const activeProfileName: string = "schwab";
export const tradingSettings: TradingPlans.TradingSettings = {
    snapMode: false,
    useSingleOrderForEntry: true,
}
export const defaultSize = 0.27;
const amdConfigs: TradingPlans.PlanConfigs = {
    size: defaultSize,
    deferTradingInSeconds: 0,
    stopTradingAfterSeconds: 0,
    requireReversal: true,
    alwaysAllowFlatten: true,
    alwaysAllowMoveStop: true,
    allowFirstFewExitsCount: 3,
    setupQuality: TradingPlans.SetupQuality.Scalp,
};
const tsmConfigs: TradingPlans.PlanConfigs = {
    size: defaultSize,
    deferTradingInSeconds: 0,
    stopTradingAfterSeconds: 0,
    requireReversal: true,
    alwaysAllowFlatten: true,
    alwaysAllowMoveStop: true,
    allowFirstFewExitsCount: 3,
    setupQuality: TradingPlans.SetupQuality.Move2Move,

};
const symConfigs: TradingPlans.PlanConfigs = {
    size: defaultSize,
    deferTradingInSeconds: 0,
    stopTradingAfterSeconds: 0,
    requireReversal: true,
    alwaysAllowFlatten: true,
    alwaysAllowMoveStop: true,
    allowFirstFewExitsCount: 3,
    setupQuality: TradingPlans.SetupQuality.Move2Move,
};
const amat: TradingPlans.PlanConfigs = {
    size: defaultSize,
    deferTradingInSeconds: 0,
    stopTradingAfterSeconds: 0,
    requireReversal: true,
    alwaysAllowFlatten: true,
    alwaysAllowMoveStop: true,
    allowFirstFewExitsCount: 3,
    setupQuality: TradingPlans.SetupQuality.SwingHold,
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
    'AMD',
    'TSM',
    'SYM',
    'AMAT'
];

export const stocksTradingPlans: TradingPlans.TradingPlans[] = [
    {
        symbol: 'AMD',
        analysis: {
            isFreshNews: true, newsImpactScore: 3, marketReactionScore: 5, swingHoldRatio: 0,
            relativeVolumeAndCandleSmoothness: 0,
            cleanVwapTrend: 2, dailyChartStory: 1,
            gapSize: 0.5,
            weeklychart: "down",
            dailyChart: "down",
            hourlyChart: "down and bounce",
            premarketChart: "below vwap",
            keyLevels: [120.42],
            singleMomentumKeyLevel: 120.42,
            dualMomentumKeyLevels: [],
            profitTargetsForLong: {
                targets: [121.4, 122.4], willBlowPastThoseLevels: 0.3, summary: `
                resistance above
                ` },
            profitTargetsForShort: {
                targets: [119.82, 119], willBlowPastThoseLevels: 0.5, summary: `
                scalp short due to yesterday strength
                ` },
            vwapExtensionDistance: 0,
            choppyOpenRangeHigh: 0,
            choppyOpenRangeLow: 0,
        },
        autoFlip: false,
        vwapCorrection: { open: 0, volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: Constants.marketCaps.AMD,
        atr: {
            average: 4.6,
            mutiplier: 1,
            minimumMultipler: 0.5,
            maxRisk: 1,
        },
        disableShortIfOpenAbove: 0,
        disableLongIfOpenBelow: 0,
        keyLevels: {
            momentumStartForLong: 0,
            momentumStartForShort: 0,
        },
        summary: `
        a scalp trade if opens perfectly near below vwap and yesterday high. it will be a range trading for the rest of the day
        `,
        setups: [],
        defaultConfigs: amdConfigs, defaultTargets: stock1Target,
        short: {
            reasons: [
                "firms downgrade",
            ],
            levelMomentumPlan: { enableAutoTrigger: true, targets: stock1Target, planConfigs: amdConfigs },
            falseBreakoutPlan: { price: 0, targets: stock1Target, planConfigs: amdConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock1Target, planConfigs: amdConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, targets: stock1Target, planConfigs: amdConfigs },
            deferredBreakoutPlan: { targets: stock1Target, planConfigs: amdConfigs },
        },
        long: {
            reasons: [
                "reclaim yesterday high",
            ],
            levelMomentumPlan: { enableAutoTrigger: true, targets: stock1Target, planConfigs: amdConfigs },
            falseBreakoutPlan: { price: 0, targets: stock1Target, planConfigs: amdConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock1Target, planConfigs: amdConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, targets: stock1Target, planConfigs: amdConfigs },
            deferredBreakoutPlan: { targets: stock1Target, planConfigs: amdConfigs },
        },
    },
    {
        symbol: 'TSM',
        analysis: {
            isFreshNews: true, newsImpactScore: 6, marketReactionScore: 6, swingHoldRatio: 0.1,
            relativeVolumeAndCandleSmoothness: 2,
            cleanVwapTrend: 1, dailyChartStory: 1,
            gapSize: 12,
            weeklychart: "up",
            dailyChart: "range",
            hourlyChart: "range",
            premarketChart: "mixed around vwap",
            keyLevels: [222.2, 210],
            singleMomentumKeyLevel: 215,
            dualMomentumKeyLevels: [],
            profitTargetsForLong: {
                targets: [222, 225], willBlowPastThoseLevels: 0.3, summary: `
                first target is all time high, once break that, it's unlimited, use trailing stop
                ` },
            profitTargetsForShort: {
                targets: [214.5, 210], willBlowPastThoseLevels: 0.2, summary: `
                gap fill
                ` },
            vwapExtensionDistance: 0,
            choppyOpenRangeHigh: 0,
            choppyOpenRangeLow: 0,
        },
        autoFlip: false,
        vwapCorrection: { open: 0, volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: Constants.marketCaps.TSM,
        atr: {
            average: 7,
            mutiplier: 2,
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
        pop to all time high and rejected. need to stay strong above vwap to preapre another push intraday to all time high
        `,
        setups: [],
        defaultConfigs: tsmConfigs, defaultTargets: stock2Target,
        short: {
            reasons: [
                "all time high rejection",
            ],
            levelMomentumPlan: { enableAutoTrigger: true, targets: stock2Target, planConfigs: tsmConfigs },
            falseBreakoutPlan: { price: 0, targets: stock2Target, planConfigs: tsmConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock2Target, planConfigs: tsmConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, targets: stock2Target, planConfigs: tsmConfigs },
            deferredBreakoutPlan: { targets: stock2Target, planConfigs: tsmConfigs },
        },
        long: {
            reasons: [
                "strong earnings",
            ],
            levelMomentumPlan: { enableAutoTrigger: true, targets: stock2Target, planConfigs: tsmConfigs },
            falseBreakoutPlan: { price: 0, targets: stock2Target, planConfigs: tsmConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock2Target, planConfigs: tsmConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, targets: stock2Target, planConfigs: tsmConfigs },
            deferredBreakoutPlan: { targets: stock2Target, planConfigs: tsmConfigs },
        },
    },
    {
        symbol: 'SYM',
        analysis: {
            isFreshNews: true, newsImpactScore: 6, marketReactionScore: 6, swingHoldRatio: 0.1,
            relativeVolumeAndCandleSmoothness: 2,
            cleanVwapTrend: 1, dailyChartStory: 1,
            gapSize: 4,
            weeklychart: "down",
            dailyChart: "range",
            hourlyChart: "range",
            premarketChart: "pop and fade below vwap, but holds support",
            keyLevels: [31.08],
            singleMomentumKeyLevel: 31.08,
            dualMomentumKeyLevels: [],
            profitTargetsForLong: {
                targets: [34, 34.2], willBlowPastThoseLevels: 0.1, summary: `
                34 and that's enough
                ` },
            profitTargetsForShort: {
                targets: [30, 28], willBlowPastThoseLevels: 0.5, summary: `
                gap fill
                ` },
            vwapExtensionDistance: 0,
            choppyOpenRangeHigh: 0,
            choppyOpenRangeLow: 0,
        },
        autoFlip: false,
        vwapCorrection: { open: 0, volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: Constants.marketCaps.SYM,
        atr: {
            average: 2,
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
        31 being the daily key level
        `,
        setups: [],
        defaultConfigs: symConfigs, defaultTargets: stock3Target,
        short: {
            reasons: [
                "gap up under resistance",
            ],
            levelMomentumPlan: { enableAutoTrigger: true, targets: stock3Target, planConfigs: symConfigs },
            falseBreakoutPlan: { price: 0, targets: stock3Target, planConfigs: symConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock3Target, planConfigs: symConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, targets: stock3Target, planConfigs: symConfigs },
            deferredBreakoutPlan: { targets: stock3Target, planConfigs: symConfigs },
        },
        long: {
            reasons: [
                "gap up above resistance and continuation",
            ],
            levelMomentumPlan: { enableAutoTrigger: true, targets: stock3Target, planConfigs: symConfigs },
            falseBreakoutPlan: { price: 0, targets: stock3Target, planConfigs: symConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock3Target, planConfigs: symConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, targets: stock3Target, planConfigs: symConfigs },
            deferredBreakoutPlan: { targets: stock3Target, planConfigs: symConfigs },
        },
    },
    {
        symbol: 'AMAT',
        analysis: {
            isFreshNews: true, newsImpactScore: 6, marketReactionScore: 6, swingHoldRatio: 0.2,
            relativeVolumeAndCandleSmoothness: 2,
            cleanVwapTrend: 2, dailyChartStory: 1,
            gapSize: 7,
            weeklychart: "down",
            dailyChart: "down bounce",
            hourlyChart: "range up",
            premarketChart: "strong above vwap",
            keyLevels: [183],
            singleMomentumKeyLevel: 183,
            dualMomentumKeyLevels: [],
            profitTargetsForLong: {
                targets: [188, 190], willBlowPastThoseLevels: 0.4, summary: `
                swing potential
                ` },
            profitTargetsForShort: {
                targets: [183, 182], willBlowPastThoseLevels: 0.2, summary: `
                gap fill
                ` },
            vwapExtensionDistance: 0,
            choppyOpenRangeHigh: 0,
            choppyOpenRangeLow: 0,
        },
        autoFlip: false,
        vwapCorrection: { open: 0, volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: Constants.marketCaps.AMAT,
        atr: {
            average: 5,
            mutiplier: 1,
            minimumMultipler: 0.6,
            maxRisk: 2,
        },
        disableShortIfOpenAbove: 0,
        disableLongIfOpenBelow: 0,
        keyLevels: {
            momentumStartForLong: 0,
            momentumStartForShort: 0,
        },
        summary: `
        potential long, best to open above 185.7
        `,
        setups: [],
        defaultConfigs: amat, defaultTargets: stock4Target,
        short: {
            reasons: [
                "gap under resistance",
            ],
            levelMomentumPlan: { enableAutoTrigger: true, targets: stock4Target, planConfigs: amat },
            falseBreakoutPlan: { price: 0, targets: stock4Target, planConfigs: amat },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock4Target, planConfigs: amat },
            firstNewHighPlan: { enableAutoTrigger: false, targets: stock4Target, planConfigs: amat },
            deferredBreakoutPlan: { targets: stock4Target, planConfigs: amat },
        },
        long: {
            reasons: [
                "TSM cap ex increase",
            ],
            levelMomentumPlan: { enableAutoTrigger: true, targets: stock4Target, planConfigs: amat },
            falseBreakoutPlan: { price: 0, targets: stock4Target, planConfigs: amat },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock4Target, planConfigs: amat },
            firstNewHighPlan: { enableAutoTrigger: false, targets: stock4Target, planConfigs: amat },
            deferredBreakoutPlan: { targets: stock4Target, planConfigs: amat },
        },
    },
];