import * as TradingPlans from './models';
import * as Constants from './constants';

// futures, momentumSimple, tradeStationEquity, schwab
export const activeProfileName: string = "schwab";
export const tradingSettings: TradingPlans.TradingSettings = {
    snapMode: true,
    useSingleOrderForEntry: true,
}
export const defaultSize = 0.28;
const rgtiConfigs: TradingPlans.PlanConfigs = {
    size: defaultSize,
    deferTradingInSeconds: 0,
    stopTradingAfterSeconds: 0,
    requireReversal: true,
    alwaysAllowFlatten: true,
    alwaysAllowMoveStop: true,
    allowFirstFewExitsCount: 3,
    setupQuality: TradingPlans.SetupQuality.Move2Move,
};
const qubtConfigs: TradingPlans.PlanConfigs = {
    size: defaultSize,
    deferTradingInSeconds: 0,
    stopTradingAfterSeconds: 0,
    requireReversal: true,
    alwaysAllowFlatten: true,
    alwaysAllowMoveStop: true,
    allowFirstFewExitsCount: 3,
    setupQuality: TradingPlans.SetupQuality.Move2Move,

};
const ionqConfigs: TradingPlans.PlanConfigs = {
    size: defaultSize,
    deferTradingInSeconds: 0,
    stopTradingAfterSeconds: 0,
    requireReversal: true,
    alwaysAllowFlatten: true,
    alwaysAllowMoveStop: true,
    allowFirstFewExitsCount: 3,
    setupQuality: TradingPlans.SetupQuality.Move2Move,
};
const virCongfigs: TradingPlans.PlanConfigs = {
    size: defaultSize,
    deferTradingInSeconds: 0,
    stopTradingAfterSeconds: 0,
    requireReversal: true,
    alwaysAllowFlatten: true,
    alwaysAllowMoveStop: true,
    allowFirstFewExitsCount: 3,
    setupQuality: TradingPlans.SetupQuality.Move2Move,
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
    'RGTI',
    'QUBT',
    'IONQ',
    'VIR'
];

export const stocksTradingPlans: TradingPlans.TradingPlans[] = [
    {
        symbol: 'RGTI',
        analysis: {
            isFreshNews: true, newsImpactScore: 8, marketReactionScore: 10, swingHoldRatio: 0.2,
            relativeVolumeAndCandleSmoothness: 2,
            cleanVwapTrend: 2, dailyChartStory: 2,
            gapSize: 8,
            weeklychart: "up",
            dailyChart: "up",
            hourlyChart: "range",
            premarketChart: "below vwap",
            keyLevels: [14.4],
            singleMomentumKeyLevel: 14.4,
            dualMomentumKeyLevels: [],
            profitTargetsForLong: {
                targets: [15, 15.75], willBlowPastThoseLevels: 0.3, summary: `
                if breakout premarket high, can go to gap fill.
                ` },
            profitTargetsForShort: {
                targets: [13.41, 12.75], willBlowPastThoseLevels: 0.5, summary: `
                if break below premarket low, go to 12.75 on daily support. if that breaks, much lower
                ` },
            vwapExtensionDistance: 2.47,
            choppyOpenRangeHigh: 0,
            choppyOpenRangeLow: 0,
        },
        autoFlip: false,
        vwapCorrection: { open: 0, volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: Constants.marketCaps.RGTI,
        atr: {
            average: 2.45,
            mutiplier: 1,
            minimumMultipler: 1,
            maxRisk: 0.75,
        },
        disableShortIfOpenAbove: 0,
        disableLongIfOpenBelow: 0,
        keyLevels: {
            momentumStartForLong: 14.4,
            momentumStartForShort: 14.4,
        },
        summary: `
        use 14.4 reaction low as key level
        `,
        setups: [],
        defaultConfigs: rgtiConfigs, defaultTargets: stock1Target,
        short: {
            reasons: [
                "bad news",
            ],
            levelMomentumPlan: { targets: stock1Target, planConfigs: rgtiConfigs },
            falseBreakoutPlan: { price: 0, targets: stock1Target, planConfigs: rgtiConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock1Target, planConfigs: rgtiConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, targets: stock1Target, planConfigs: rgtiConfigs },
            deferredBreakoutPlan: { targets: stock1Target, planConfigs: rgtiConfigs },
        },
        long: {
            reasons: [
                "gap down to daily support",
            ],
            levelMomentumPlan: { targets: stock1Target, planConfigs: rgtiConfigs },
            falseBreakoutPlan: { price: 0, targets: stock1Target, planConfigs: rgtiConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock1Target, planConfigs: rgtiConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, targets: stock1Target, planConfigs: rgtiConfigs },
            deferredBreakoutPlan: { targets: stock1Target, planConfigs: rgtiConfigs },
        },
    },
    {
        symbol: 'QUBT',
        analysis: {
            isFreshNews: true, newsImpactScore: 8, marketReactionScore: 10, swingHoldRatio: 0.2,
            relativeVolumeAndCandleSmoothness: 2,
            cleanVwapTrend: 2, dailyChartStory: 2,
            gapSize: 5,
            weeklychart: "up",
            dailyChart: "up",
            hourlyChart: "range",
            premarketChart: "below vwap",
            keyLevels: [14.26],
            singleMomentumKeyLevel: 14.26,
            dualMomentumKeyLevels: [],
            profitTargetsForLong: {
                targets: [15, 16.37], willBlowPastThoseLevels: 0.1, summary: `
                unlikely to reach those targets, too far below vwap now
                ` },
            profitTargetsForShort: {
                targets: [12.2, 10, 9], willBlowPastThoseLevels: 0.6, summary: `
                first target 12.2 should break, then go to 10 as whole number, but not a support, real support is 9.
                ` },
            vwapExtensionDistance: 5,
            choppyOpenRangeHigh: 0,
            choppyOpenRangeLow: 0,
        },
        autoFlip: false,
        vwapCorrection: { open: 0, volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: Constants.marketCaps.QUBT,
        atr: {
            average: 3,
            mutiplier: 1,
            minimumMultipler: 1,
            maxRisk: 1,
        },
        disableShortIfOpenAbove: 0,
        disableLongIfOpenBelow: 0,
        keyLevels: {
            momentumStartForLong: 14.26,
            momentumStartForShort: 14.26,
        },
        summary: `
        use reaction low 14.26 as key level
        `,
        setups: [],
        defaultConfigs: qubtConfigs, defaultTargets: stock2Target,
        short: {
            reasons: [
                "bad news",
            ],
            levelMomentumPlan: { targets: stock2Target, planConfigs: qubtConfigs },
            falseBreakoutPlan: { price: 0, targets: stock2Target, planConfigs: qubtConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock2Target, planConfigs: qubtConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, targets: stock2Target, planConfigs: qubtConfigs },
            deferredBreakoutPlan: { targets: stock2Target, planConfigs: qubtConfigs },
        },
        long: {
            reasons: [
                "reclaim reaction low",
            ],
            levelMomentumPlan: { targets: stock2Target, planConfigs: qubtConfigs },
            falseBreakoutPlan: { price: 0, targets: stock2Target, planConfigs: qubtConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock2Target, planConfigs: qubtConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, targets: stock2Target, planConfigs: qubtConfigs },
            deferredBreakoutPlan: { targets: stock2Target, planConfigs: qubtConfigs },
        },
    },
    {
        symbol: 'IONQ',
        analysis: {
            isFreshNews: true, newsImpactScore: 8, marketReactionScore: 10, swingHoldRatio: 0.2,
            relativeVolumeAndCandleSmoothness: 2,
            cleanVwapTrend: 2, dailyChartStory: 2,
            gapSize: 8,
            weeklychart: "up",
            dailyChart: "up",
            hourlyChart: "range",
            premarketChart: "below vwap",
            keyLevels: [41],
            singleMomentumKeyLevel: 41,
            dualMomentumKeyLevels: [],
            profitTargetsForLong: {
                targets: [44, 46], willBlowPastThoseLevels: 0.3, summary: `
                if breakout premarket high, can go to gap fill.
                ` },
            profitTargetsForShort: {
                targets: [38.46, 38], willBlowPastThoseLevels: 0.5, summary: `
                if break below 38, can go to 36.5
                ` },
            vwapExtensionDistance: 5,
            choppyOpenRangeHigh: 0,
            choppyOpenRangeLow: 0,
        },
        autoFlip: false,
        vwapCorrection: { open: 0, volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: Constants.marketCaps.IONQ,
        atr: {
            average: 5,
            mutiplier: 1,
            minimumMultipler: 1,
            maxRisk: 1.5,
        },
        disableShortIfOpenAbove: 0,
        disableLongIfOpenBelow: 0,
        keyLevels: {
            momentumStartForLong: 41,
            momentumStartForShort: 41,
        },
        summary: `
        use 41 reaction low as key level
        `,
        setups: [],
        defaultConfigs: ionqConfigs, defaultTargets: stock3Target,
        short: {
            reasons: [
                "bad news",
            ],
            levelMomentumPlan: { targets: stock3Target, planConfigs: ionqConfigs },
            falseBreakoutPlan: { price: 0, targets: stock3Target, planConfigs: ionqConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock3Target, planConfigs: ionqConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, targets: stock3Target, planConfigs: ionqConfigs },
            deferredBreakoutPlan: { targets: stock3Target, planConfigs: ionqConfigs },
        },
        long: {
            reasons: [
                "not making new lows on this news",
            ],
            levelMomentumPlan: { targets: stock3Target, planConfigs: ionqConfigs },
            falseBreakoutPlan: { price: 0, targets: stock3Target, planConfigs: ionqConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock3Target, planConfigs: ionqConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, targets: stock3Target, planConfigs: ionqConfigs },
            deferredBreakoutPlan: { targets: stock3Target, planConfigs: ionqConfigs },
        },
    },
    {
        symbol: 'VIR',
        analysis: {
            isFreshNews: true, newsImpactScore: 7, marketReactionScore: 8, swingHoldRatio: 0.2,
            relativeVolumeAndCandleSmoothness: 2,
            cleanVwapTrend: 2, dailyChartStory: 2,
            gapSize: 5,
            weeklychart: "down",
            dailyChart: "down range",
            hourlyChart: "range",
            premarketChart: "above vwap",
            keyLevels: [13.09],
            singleMomentumKeyLevel: 13.09,
            dualMomentumKeyLevels: [],
            profitTargetsForLong: {
                targets: [14, 14.35], willBlowPastThoseLevels: 0.5, summary: `
                use trailing stop
                ` },
            profitTargetsForShort: {
                targets: [12, 11], willBlowPastThoseLevels: 0.5, summary: `
                gap fill to 12, then 11
                ` },
            vwapExtensionDistance: 0.43,
            choppyOpenRangeHigh: 0,
            choppyOpenRangeLow: 0,
        },
        autoFlip: false,
        vwapCorrection: { open: 0, volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: 1000,
        atr: {
            average: 0.43,
            mutiplier: 3,
            minimumMultipler: 1,
            maxRisk: 0.5,
        },
        disableShortIfOpenAbove: 0,
        disableLongIfOpenBelow: 0,
        keyLevels: {
            momentumStartForLong: 13.09,
            momentumStartForShort: 13.09,
        },
        summary: `
        use 13.09 as key level, as long as it's below, it's a short. best setup is a false breakout and green to red.
        `,
        setups: [],
        defaultConfigs: virCongfigs, defaultTargets: stock4Target,
        short: {
            reasons: [
                "profit taking",
            ],
            profitTakingExhaust60Plan: { includeOpenChase: false, minDistanceToVwap: 0.4, targets: stock4Target, planConfigs: virCongfigs },
            levelMomentumPlan: { targets: stock4Target, planConfigs: virCongfigs },
            falseBreakoutPlan: { price: 0, targets: stock4Target, planConfigs: virCongfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock4Target, planConfigs: virCongfigs },
            firstNewHighPlan: { enableAutoTrigger: false, targets: stock4Target, planConfigs: virCongfigs },
            deferredBreakoutPlan: { targets: stock4Target, planConfigs: virCongfigs },
        },
        long: {
            reasons: [
                "daily breakout",
            ],
            levelMomentumPlan: { targets: stock4Target, planConfigs: virCongfigs },
            falseBreakoutPlan: { price: 0, targets: stock4Target, planConfigs: virCongfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock4Target, planConfigs: virCongfigs },
            firstNewHighPlan: { enableAutoTrigger: false, targets: stock4Target, planConfigs: virCongfigs },
            deferredBreakoutPlan: { targets: stock4Target, planConfigs: virCongfigs },
        },
    },
];