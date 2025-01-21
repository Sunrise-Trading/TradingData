import * as TradingPlans from './models';
import * as Constants from './constants';

// futures, momentumSimple, tradeStationEquity, schwab
export const activeProfileName: string = "schwab";
export const tradingSettings: TradingPlans.TradingSettings = {
    snapMode: false,
    useSingleOrderForEntry: true,
}
export const defaultSize = 0.26;
const ftaiConfigs: TradingPlans.PlanConfigs = {
    size: defaultSize,
    deferTradingInSeconds: 0,
    stopTradingAfterSeconds: 0,
    requireReversal: true,
    alwaysAllowFlatten: true,
    alwaysAllowMoveStop: true,
    allowFirstFewExitsCount: 3,
    setupQuality: TradingPlans.SetupQuality.SwingHold,
};
const temConfigs: TradingPlans.PlanConfigs = {
    size: defaultSize,
    deferTradingInSeconds: 0,
    stopTradingAfterSeconds: 0,
    requireReversal: true,
    alwaysAllowFlatten: true,
    alwaysAllowMoveStop: true,
    allowFirstFewExitsCount: 3,
    setupQuality: TradingPlans.SetupQuality.Move2Move,

};
const mmmConfigs: TradingPlans.PlanConfigs = {
    size: defaultSize,
    deferTradingInSeconds: 0,
    stopTradingAfterSeconds: 0,
    requireReversal: true,
    alwaysAllowFlatten: true,
    alwaysAllowMoveStop: true,
    allowFirstFewExitsCount: 3,
    setupQuality: TradingPlans.SetupQuality.Scalp,
};
const schwConfigs: TradingPlans.PlanConfigs = {
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
    'FTAI', 'TEM', //'MMM',
    'SCHW'
];

export const stocksTradingPlans: TradingPlans.TradingPlans[] = [
    {
        symbol: 'FTAI',
        analysis: {
            isFreshNews: true, newsImpactScore: 8, marketReactionScore: 8, swingHoldRatio: 0.4,
            relativeVolumeAndCandleSmoothness: 2,
            cleanVwapTrend: 1, dailyChartStory: 2,
            allowFirstMinuteByNewsQuality: true,
            allowFirstMinuteByRelativeVolume: true,
            allowFirstMinutezByKeyLevelsQuality: true,
            gapSize: 20,
            weeklychart: "topping",
            dailyChart: "down",
            hourlyChart: "down",
            premarketChart: "boune above vwap and lost it",
            keyLevels: [91.37],
            singleMomentumKeyLevel: 91.37,
            dualMomentumKeyLevels: [],
            profitTargetsForLong: {
                targets: [100, 112], willBlowPastThoseLevels: 0.1, summary: `
                small bounce or gap fill, unlikely to rally big
                ` },
            profitTargetsForShort: {
                targets: [86.7, 80], willBlowPastThoseLevels: 0.6, summary: `
                can have big room to the downside and swing potential
                ` },
            vwapExtensionDistance: 0,
            choppyOpenRangeHigh: 0,
            choppyOpenRangeLow: 0,
        },
        autoFlip: false,
        vwapCorrection: { open: 0, volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: Constants.marketCaps.FTAI,
        atr: {
            average: 9,
            mutiplier: 2,
            minimumMultipler: 1,
            maxRisk: 4,
        },
        disableShortIfOpenAbove: 0,
        disableLongIfOpenBelow: 0,
        keyLevels: {
            momentumStartForLong: 0,
            momentumStartForShort: 0,
        },
        summary: `
        can be a selloff like SMCI delay filing news. potential fear of delisting.
        `,
        setups: [],
        defaultConfigs: ftaiConfigs, defaultTargets: stock1Target,
        short: {
            reasons: [
                "delay filing",
            ],
            levelMomentumPlan: { enableAutoTrigger: true, targets: stock1Target, planConfigs: ftaiConfigs },
            falseBreakoutPlan: { price: 0, targets: stock1Target, planConfigs: ftaiConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock1Target, planConfigs: ftaiConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, targets: stock1Target, planConfigs: ftaiConfigs },
            deferredBreakoutPlan: { targets: stock1Target, planConfigs: ftaiConfigs },
        },
        long: {
            reasons: [
                "gap down to support",
            ],
            levelMomentumPlan: { enableAutoTrigger: true, targets: stock1Target, planConfigs: ftaiConfigs },
            falseBreakoutPlan: { price: 0, targets: stock1Target, planConfigs: ftaiConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock1Target, planConfigs: ftaiConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, targets: stock1Target, planConfigs: ftaiConfigs },
            deferredBreakoutPlan: { targets: stock1Target, planConfigs: ftaiConfigs },
        },
    },
    {
        symbol: 'TEM',
        analysis: {
            isFreshNews: true, newsImpactScore: 4, marketReactionScore: 4, swingHoldRatio: 0.1,
            relativeVolumeAndCandleSmoothness: 2,
            cleanVwapTrend: 2, dailyChartStory: 1,
            allowFirstMinuteByNewsQuality: true,
            allowFirstMinuteByRelativeVolume: true,
            allowFirstMinutezByKeyLevelsQuality: true,
            gapSize: 7,
            weeklychart: "down",
            dailyChart: "down",
            hourlyChart: "range",
            premarketChart: "gap up and fade below vwap",
            keyLevels: [41.9],
            singleMomentumKeyLevel: 41.9,
            dualMomentumKeyLevels: [],
            profitTargetsForLong: {
                targets: [44, 45], willBlowPastThoseLevels: 0.1, summary: `
                big resistance at premarket high, take most out before that. if premarket high breakout, can go to 47.
                ` },
            profitTargetsForShort: {
                targets: [40, 38], willBlowPastThoseLevels: 0.5, summary: `
                gap fill very likely
                ` },
            vwapExtensionDistance: 0,
            choppyOpenRangeHigh: 0,
            choppyOpenRangeLow: 0,
        },
        autoFlip: false,
        vwapCorrection: { open: 0, volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: Constants.marketCaps.TEM,
        atr: {
            average: 3.8,
            mutiplier: 1.5,
            minimumMultipler: 1,
            maxRisk: 1.75,
        },
        disableShortIfOpenAbove: 0,
        disableLongIfOpenBelow: 0,
        keyLevels: {
            momentumStartForLong: 0,
            momentumStartForShort: 0,
        },
        summary: `
        vwap is very close to key level 41.9. going to be a good setup either long or short based on this level.
        `,
        setups: [],
        defaultConfigs: temConfigs, defaultTargets: stock2Target,
        short: {
            reasons: [
                "new product launch doesn't guarantee revenue, can be sell the news",
            ],
            levelMomentumPlan: { enableAutoTrigger: true, targets: stock2Target, planConfigs: temConfigs },
            falseBreakoutPlan: { price: 0, targets: stock2Target, planConfigs: temConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock2Target, planConfigs: temConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, targets: stock2Target, planConfigs: temConfigs },
            deferredBreakoutPlan: { targets: stock2Target, planConfigs: temConfigs },
        },
        long: {
            reasons: [
                "new product launch and nancy polosi disclose position",
            ],
            levelMomentumPlan: { enableAutoTrigger: true, targets: stock2Target, planConfigs: temConfigs },
            falseBreakoutPlan: { price: 0, targets: stock2Target, planConfigs: temConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock2Target, planConfigs: temConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, targets: stock2Target, planConfigs: temConfigs },
            deferredBreakoutPlan: { targets: stock2Target, planConfigs: temConfigs },
        },
    },
    {
        symbol: 'MMM',
        analysis: {
            isFreshNews: true, newsImpactScore: 4, marketReactionScore: 6, swingHoldRatio: 0,
            relativeVolumeAndCandleSmoothness: 2,
            cleanVwapTrend: 2, dailyChartStory: 2,
            allowFirstMinuteByNewsQuality: true,
            allowFirstMinuteByRelativeVolume: false,
            allowFirstMinutezByKeyLevelsQuality: true,
            gapSize: 5,
            weeklychart: "up",
            dailyChart: "up",
            hourlyChart: "up",
            premarketChart: "above vwap and support",
            keyLevels: [141.66, 150,],
            singleMomentumKeyLevel: -1,
            dualMomentumKeyLevels: [],
            profitTargetsForLong: {
                targets: [149.79, 150], willBlowPastThoseLevels: 0.2, summary: `
                main resistance at premarket high, take most out there. if breakout premarket high, use trialing stop. 
                still heaving resistance above
                ` },
            profitTargetsForShort: {
                targets: [144, 142], willBlowPastThoseLevels: 0.5, summary: `
                main support at 144, if break below, gap fill to 142
                ` },
            vwapExtensionDistance: 0,
            choppyOpenRangeHigh: 0,
            choppyOpenRangeLow: 0,
        },
        autoFlip: false,
        vwapCorrection: { open: 0, volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: Constants.marketCaps.MMM,
        atr: {
            average: 2.60,
            mutiplier: 1.5,
            minimumMultipler: 1,
            maxRisk: 1.25,
        },
        disableShortIfOpenAbove: 0,
        disableLongIfOpenBelow: 0,
        keyLevels: {
            momentumStartForLong: 144,
            momentumStartForShort: 150,
        },
        summary: `
        52 week high breakout, not all time high breakout.still many resistance at 150+.
        it might be a range trading day between 144 and 150.
        `,
        setups: [],
        defaultConfigs: mmmConfigs, defaultTargets: stock3Target,
        short: {
            reasons: [
                "profit taking, mixed earnings",
            ],
            profitTakingExhaust60Plan: { includeOpenChase: false, minDistanceToVwap: 1, targets: stock3Target, planConfigs: mmmConfigs },
            levelMomentumPlan: { enableAutoTrigger: true, targets: stock3Target, planConfigs: mmmConfigs },
            falseBreakoutPlan: { price: 0, targets: stock3Target, planConfigs: mmmConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock3Target, planConfigs: mmmConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, targets: stock3Target, planConfigs: mmmConfigs },
            deferredBreakoutPlan: { targets: stock3Target, planConfigs: mmmConfigs },
        },
        long: {
            reasons: [
                "above earnings reaction high 144",
            ],
            levelMomentumPlan: { enableAutoTrigger: true, targets: stock3Target, planConfigs: mmmConfigs },
            falseBreakoutPlan: { price: 0, targets: stock3Target, planConfigs: mmmConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock3Target, planConfigs: mmmConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, targets: stock3Target, planConfigs: mmmConfigs },
            deferredBreakoutPlan: { targets: stock3Target, planConfigs: mmmConfigs },
        },
    },
    {
        symbol: 'SCHW',
        analysis: {
            isFreshNews: true, newsImpactScore: 4, marketReactionScore: 4, swingHoldRatio: 0,
            relativeVolumeAndCandleSmoothness: 2,
            cleanVwapTrend: 1, dailyChartStory: 1,
            allowFirstMinuteByNewsQuality: true,
            allowFirstMinuteByRelativeVolume: true,
            allowFirstMinutezByKeyLevelsQuality: false,
            gapSize: 3,
            weeklychart: "down",
            dailyChart: "range",
            hourlyChart: "up",
            premarketChart: "pop and fade belowv vwap",
            keyLevels: [80],
            singleMomentumKeyLevel: 80,
            dualMomentumKeyLevels: [],
            profitTargetsForLong: {
                targets: [82, 83], willBlowPastThoseLevels: 0.1, summary: `
                heavy resistance at the top. most out near below premarket high
                ` },
            profitTargetsForShort: {
                targets: [77.4, 76.6], willBlowPastThoseLevels: 0.5, summary: `
                likely to gap fill
                ` },
            vwapExtensionDistance: 0,
            choppyOpenRangeHigh: 0,
            choppyOpenRangeLow: 0,
        },
        autoFlip: false,
        vwapCorrection: { open: 0, volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: 0,
        atr: {
            average: 1.60,
            mutiplier: 1,
            minimumMultipler: 1,
            maxRisk: 1,
        },
        disableShortIfOpenAbove: 0,
        disableLongIfOpenBelow: 0,
        keyLevels: {
            momentumStartForLong: 80,
            momentumStartForShort: 80,
        },
        summary: `
        best setup is shorting the vwap rejection. let it pop close to vwap first
        `,
        setups: [],
        defaultConfigs: schwConfigs, defaultTargets: stock4Target,
        short: {
            reasons: [
                "pop and fade below vwap",
            ],
            profitTakingFade60Plan: { enableAutoTrigger: false, onlyIfOpenBelow: 80, targets: stock4Target, planConfigs: schwConfigs },
            levelMomentumPlan: { enableAutoTrigger: true, targets: stock4Target, planConfigs: schwConfigs },
            falseBreakoutPlan: { price: 0, targets: stock4Target, planConfigs: schwConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock4Target, planConfigs: schwConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, targets: stock4Target, planConfigs: schwConfigs },
            deferredBreakoutPlan: { targets: stock4Target, planConfigs: schwConfigs },
        },
        long: {
            reasons: [
                "gap up above key levle 80",
            ],
            levelMomentumPlan: { enableAutoTrigger: true, targets: stock4Target, planConfigs: schwConfigs },
            falseBreakoutPlan: { price: 0, targets: stock4Target, planConfigs: schwConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock4Target, planConfigs: schwConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, targets: stock4Target, planConfigs: schwConfigs },
            deferredBreakoutPlan: { targets: stock4Target, planConfigs: schwConfigs },
        },
    },
];