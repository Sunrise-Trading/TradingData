import * as TradingPlans from './models';
import * as Constants from './constants';

// futures, momentumSimple, tradeStationEquity, schwab
export const activeProfileName: string = "schwab";
export const tradingSettings: TradingPlans.TradingSettings = {
    snapMode: false,
    useSingleOrderForEntry: true,
}
export const defaultSize = 0.27;
const intcConfigs: TradingPlans.PlanConfigs = {
    size: defaultSize,
    deferTradingInSeconds: 0,
    stopTradingAfterSeconds: 0,
    requireReversal: true,
    alwaysAllowFlatten: true,
    alwaysAllowMoveStop: true,
    allowFirstFewExitsCount: 3,
    setupQuality: TradingPlans.SetupQuality.SwingHold,
};
const nvoConfigs: TradingPlans.PlanConfigs = {
    size: defaultSize,
    deferTradingInSeconds: 0,
    stopTradingAfterSeconds: 0,
    requireReversal: true,
    alwaysAllowFlatten: true,
    alwaysAllowMoveStop: true,
    allowFirstFewExitsCount: 3,
    setupQuality: TradingPlans.SetupQuality.Move2Move,

};
const aalConfigs: TradingPlans.PlanConfigs = {
    size: defaultSize,
    deferTradingInSeconds: 0,
    stopTradingAfterSeconds: 0,
    requireReversal: true,
    alwaysAllowFlatten: true,
    alwaysAllowMoveStop: true,
    allowFirstFewExitsCount: 3,
    setupQuality: TradingPlans.SetupQuality.Move2Move,
};
const ibitConfigs: TradingPlans.PlanConfigs = {
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
    'INTC', 'NVO', 'AAL',
    'IBIT'
];

export const stocksTradingPlans: TradingPlans.TradingPlans[] = [
    {
        symbol: 'INTC',
        analysis: {
            isFreshNews: true, newsImpactScore: 4, marketReactionScore: 7, swingHoldRatio: 0,
            relativeVolumeAndCandleSmoothness: 2,
            cleanVwapTrend: 2, dailyChartStory: 1,
            allowFirstMinuteByNewsQuality: true,
            allowFirstMinuteByRelativeVolume: true,
            allowFirstMinutezByKeyLevelsQuality: true,
            gapSize: 1.5,
            weeklychart: "down",
            dailyChart: "down range",
            hourlyChart: "range",
            premarketChart: "currently above vwap",
            keyLevels: [21, 21.47],
            singleMomentumKeyLevel: 21.47,
            dualMomentumKeyLevels: [],
            profitTargetsForLong: {
                targets: [21.91, 22], willBlowPastThoseLevels: 0.2, summary: `
                heading into heaving resistance
                ` },
            profitTargetsForShort: {
                targets: [21, 20], willBlowPastThoseLevels: 0.6, summary: `
                highly likely to completely gap fill because it's just a rumor and it's a friday into long weekend.
                ` },
            vwapExtensionDistance: 0,
            choppyOpenRangeHigh: 0,
            choppyOpenRangeLow: 0,
        },
        autoFlip: false,
        vwapCorrection: { open: 0, volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: Constants.marketCaps.INTC,
        atr: {
            average: 0.7,
            mutiplier: 1.4,
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
        I am short biased due to being just a rumor and previously had similar rumor and stock was still in a down trend.
        So I picked a higher resistance 21.47 as a key level to short.
        `,
        setups: [],
        defaultConfigs: intcConfigs, defaultTargets: stock1Target,
        short: {
            reasons: [
                "rumor",
            ],
            profitTakingExhaust60Plan: { includeOpenChase: false, minDistanceToVwap: 0.3, targets: stock1Target, planConfigs: intcConfigs },
            levelMomentumPlan: { enableAutoTrigger: true, targets: stock1Target, planConfigs: intcConfigs },
            falseBreakoutPlan: { price: 0, targets: stock1Target, planConfigs: intcConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock1Target, planConfigs: intcConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, targets: stock1Target, planConfigs: intcConfigs },
            deferredBreakoutPlan: { targets: stock1Target, planConfigs: intcConfigs },
        },
        long: {
            reasons: [
                "above vwap in premarket",
            ],
            levelMomentumPlan: { enableAutoTrigger: true, targets: stock1Target, planConfigs: intcConfigs },
            falseBreakoutPlan: { price: 0, targets: stock1Target, planConfigs: intcConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock1Target, planConfigs: intcConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, targets: stock1Target, planConfigs: intcConfigs },
            deferredBreakoutPlan: { targets: stock1Target, planConfigs: intcConfigs },
        },
    },
    {
        symbol: 'NVO',
        analysis: {
            isFreshNews: true, newsImpactScore: 6, marketReactionScore: 5, swingHoldRatio: 0.1,
            relativeVolumeAndCandleSmoothness: 2,
            cleanVwapTrend: 2, dailyChartStory: 2,
            allowFirstMinuteByNewsQuality: true,
            allowFirstMinuteByRelativeVolume: true,
            allowFirstMinutezByKeyLevelsQuality: true,
            gapSize: 3,
            weeklychart: "down",
            dailyChart: "down",
            hourlyChart: "down",
            premarketChart: "below vwap and below reaction low",
            keyLevels: [80],
            singleMomentumKeyLevel: 80.05,
            dualMomentumKeyLevels: [],
            profitTargetsForLong: {
                targets: [81, 82], willBlowPastThoseLevels: 0.1, summary: `
                weak pop due to bearish trend on daily chart
                ` },
            profitTargetsForShort: {
                targets: [79.13, 76], willBlowPastThoseLevels: 0.4, summary: `
                not clear on the daily chart where's the next level because it's at a previous range. use R and ATR for exits.
                ` },
            vwapExtensionDistance: 0,
            choppyOpenRangeHigh: 0,
            choppyOpenRangeLow: 0,
        },
        autoFlip: false,
        vwapCorrection: { open: 0, volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: Constants.marketCaps.NVO,
        atr: {
            average: 2.85,
            mutiplier: 1.3,
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
        best setup is short after it pop to near 80 and makes a new low
        `,
        setups: [],
        defaultConfigs: nvoConfigs, defaultTargets: stock2Target,
        short: {
            reasons: [
                "drugs results not good enough",
            ],
            levelMomentumPlan: { enableAutoTrigger: true, targets: stock2Target, planConfigs: nvoConfigs },
            falseBreakoutPlan: { price: 0, targets: stock2Target, planConfigs: nvoConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock2Target, planConfigs: nvoConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, targets: stock2Target, planConfigs: nvoConfigs },
            deferredBreakoutPlan: { targets: stock2Target, planConfigs: nvoConfigs },
        },
        long: {
            reasons: [
                "drug results still effective",
            ],
            levelMomentumPlan: { enableAutoTrigger: true, targets: stock2Target, planConfigs: nvoConfigs },
            falseBreakoutPlan: { price: 0, targets: stock2Target, planConfigs: nvoConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock2Target, planConfigs: nvoConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, targets: stock2Target, planConfigs: nvoConfigs },
            deferredBreakoutPlan: { targets: stock2Target, planConfigs: nvoConfigs },
        },
    },
    {
        symbol: 'AAL',
        analysis: {
            isFreshNews: true, newsImpactScore: 4, marketReactionScore: 6, swingHoldRatio: 0.2,
            relativeVolumeAndCandleSmoothness: 0,
            cleanVwapTrend: 1, dailyChartStory: 2,
            allowFirstMinuteByNewsQuality: true,
            allowFirstMinuteByRelativeVolume: false,
            allowFirstMinutezByKeyLevelsQuality: true,
            gapSize: 0.5,
            weeklychart: "up",
            dailyChart: "up",
            hourlyChart: "up",
            premarketChart: "up",
            keyLevels: [19, 18.56],
            singleMomentumKeyLevel: 18.56,
            dualMomentumKeyLevels: [],
            profitTargetsForLong: {
                targets: [19, 18.8], willBlowPastThoseLevels: 0.1, summary: `
                major resistance at 19, take most out there and add back small if breakout
                ` },
            profitTargetsForShort: {
                targets: [18.33, 18.45], willBlowPastThoseLevels: 0.4, summary: `
                gap fill
                ` },
            vwapExtensionDistance: 0,
            choppyOpenRangeHigh: 0,
            choppyOpenRangeLow: 0,
        },
        autoFlip: false,
        vwapCorrection: { open: 0, volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: Constants.marketCaps.AAL,
        atr: {
            average: 0.64,
            mutiplier: 1,
            minimumMultipler: 1,
            maxRisk: 0.25,
        },
        disableShortIfOpenAbove: 0,
        disableLongIfOpenBelow: 0,
        keyLevels: {
            momentumStartForLong: 18.56,
            momentumStartForShort: 18.56,
        },
        summary: `
        altough it's 52 week high, but there more resistance close above on the weekly chart. so don't get too excited and avoid < 60 due 
        to low volume.
        `,
        setups: [],
        defaultConfigs: aalConfigs, defaultTargets: stock3Target,
        short: {
            reasons: [
                "weekly resistance rejection",
            ],
            levelMomentumPlan: { enableAutoTrigger: true, targets: stock3Target, planConfigs: aalConfigs },
            falseBreakoutPlan: { price: 0, targets: stock3Target, planConfigs: aalConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock3Target, planConfigs: aalConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, targets: stock3Target, planConfigs: aalConfigs },
            deferredBreakoutPlan: { targets: stock3Target, planConfigs: aalConfigs },
        },
        long: {
            reasons: [
                "positive note from firm upgrade",
            ],
            levelMomentumPlan: { enableAutoTrigger: true, targets: stock3Target, planConfigs: aalConfigs },
            falseBreakoutPlan: { price: 0, targets: stock3Target, planConfigs: aalConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock3Target, planConfigs: aalConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, targets: stock3Target, planConfigs: aalConfigs },
            deferredBreakoutPlan: { targets: stock3Target, planConfigs: aalConfigs },
        },
    },
    {
        symbol: 'IBIT',
        analysis: {
            isFreshNews: true, newsImpactScore: 5, marketReactionScore: 5, swingHoldRatio: 0.2,
            relativeVolumeAndCandleSmoothness: 2,
            cleanVwapTrend: 2, dailyChartStory: 2,
            allowFirstMinuteByNewsQuality: true,
            allowFirstMinuteByRelativeVolume: true,
            allowFirstMinutezByKeyLevelsQuality: true,
            gapSize: 1.5,
            weeklychart: "up",
            dailyChart: "up",
            hourlyChart: "up",
            premarketChart: "above vwap",
            keyLevels: [58.46],
            singleMomentumKeyLevel: 58.13,
            dualMomentumKeyLevels: [],
            profitTargetsForLong: {
                targets: [60, 61.75], willBlowPastThoseLevels: 0.6, summary: `
                highly likely to turn into a swing trade
                ` },
            profitTargetsForShort: {
                targets: [57.65, 57.3], willBlowPastThoseLevels: 0.3, summary: `
                maybe gap fill
                ` },
            vwapExtensionDistance: 0,
            choppyOpenRangeHigh: 0,
            choppyOpenRangeLow: 0,
        },
        autoFlip: false,
        vwapCorrection: { open: 0, volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: 1000,
        atr: {
            average: 2.47,
            mutiplier: 1,
            minimumMultipler: 1,
            maxRisk: 0.7,
        },
        disableShortIfOpenAbove: 0,
        disableLongIfOpenBelow: 0,
        keyLevels: {
            momentumStartForLong: 0,
            momentumStartForShort: 0,
        },
        summary: `
        good speculation into Trump presidency on Jan 20th. Can be buying into the rumor.

        `,
        setups: [],
        defaultConfigs: ibitConfigs, defaultTargets: stock4Target,
        short: {
            reasons: [
                "already gapped up overnight",
            ],
            levelMomentumPlan: { enableAutoTrigger: true, targets: stock4Target, planConfigs: ibitConfigs },
            falseBreakoutPlan: { price: 0, targets: stock4Target, planConfigs: ibitConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock4Target, planConfigs: ibitConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, targets: stock4Target, planConfigs: ibitConfigs },
            deferredBreakoutPlan: { targets: stock4Target, planConfigs: ibitConfigs },
        },
        long: {
            reasons: [
                "buy the rumor",
            ],
            openDriveContinuation60Plan: { disableIfOpenWorseThanPrice: 58.46, requireOpenBetterThanVwap: true, targets: stock4Target, planConfigs: ibitConfigs },
            levelMomentumPlan: { enableAutoTrigger: true, targets: stock4Target, planConfigs: ibitConfigs },
            falseBreakoutPlan: { price: 0, targets: stock4Target, planConfigs: ibitConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock4Target, planConfigs: ibitConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, targets: stock4Target, planConfigs: ibitConfigs },
            deferredBreakoutPlan: { targets: stock4Target, planConfigs: ibitConfigs },
        },
    },
];