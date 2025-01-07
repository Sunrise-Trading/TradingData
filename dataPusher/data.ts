import * as TradingPlans from './models';
import * as Constants from './constants';

// futures, momentumSimple, tradeStationEquity, schwab
export const activeProfileName: string = "schwab";
export const tradingSettings: TradingPlans.TradingSettings = {
    equalWeightDivider: 4,
    useSingleOrderForEntry: true,
}
export const defaultSize = 0.28;
const nvdaConfigs: TradingPlans.PlanConfigs = {
    size: defaultSize,
    deferTradingInSeconds: 0,
    stopTradingAfterSeconds: 0,
    requireReversal: true,
    alwaysAllowFlatten: true,
    alwaysAllowMoveStop: true,
    allowFirstFewExitsCount: 3,
    setupQuality: TradingPlans.SetupQuality.SwingHold,
};
const aurConfigs: TradingPlans.PlanConfigs = {
    size: defaultSize,
    deferTradingInSeconds: 0,
    stopTradingAfterSeconds: 0,
    requireReversal: true,
    alwaysAllowFlatten: true,
    alwaysAllowMoveStop: true,
    allowFirstFewExitsCount: 3,
    setupQuality: TradingPlans.SetupQuality.Move2Move,

};
const fuboConfigs: TradingPlans.PlanConfigs = {
    size: defaultSize,
    deferTradingInSeconds: 0,
    stopTradingAfterSeconds: 0,
    requireReversal: true,
    alwaysAllowFlatten: true,
    alwaysAllowMoveStop: true,
    allowFirstFewExitsCount: 3,
    setupQuality: TradingPlans.SetupQuality.Scalp,
};
const pltrConfigs: TradingPlans.PlanConfigs = {
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
    'NVDA',
];

export const stocksTradingPlans: TradingPlans.TradingPlans[] = [
    {
        symbol: 'NVDA',
        analysis: {
            isFreshNews: true, newsImpactScore: 5, marketReactionScore: 5, swingHoldRatio: 0.2,
            relativeVolumeAndCandleSmoothness: 1,
            cleanVwapTrend: 2, dailyChartStory: 2,
            gapSize: 3,
            weeklychart: "range",
            dailyChart: "range up",
            hourlyChart: "up",
            premarketChart: "gap up and hold above vwap",
            keyLevels: [152.16, 152.89],
            singleMomentumKeyLevel: 152.16,
            dualMomentumKeyLevels: [],
            profitTargetsForLong: {
                targets: [155, 160], willBlowPastThoseLevels: 0.8, summary: `
                if breakout all time high, there's no limit upside, use 5 minute trailing stop, keep 1 for 15 minute trend
                ` },
            profitTargetsForShort: {
                targets: [151, 150], willBlowPastThoseLevels: 0.2, summary: `
                shorts will be scalp, prefer not to trade it.
                ` },
            vwapExtensionDistance: 0,
            choppyOpenRangeHigh: 0,
            choppyOpenRangeLow: 0,
        },
        autoFlip: false,
        vwapCorrection: { open: 0, volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: 0,
        atr: {
            average: 3.5,
            mutiplier: 2,
            minimumMultipler: 1,
            maxRisk: 1.5,
        },
        disableShortIfOpenAbove: 0,
        disableLongIfOpenBelow: 0,
        keyLevels: {
            momentumStartForLong: 152.16,
            momentumStartForShort: 153.66,
        },
        summary: `
        potential all time high breakout that can be a big trade. I give it 50% probability. 
        For shorts, green to red breakout is not good. better for first new low.
        `,
        setups: [],
        defaultConfigs: nvdaConfigs, defaultTargets: stock1Target,
        short: {
            reasons: [
                "all time high rejection",
            ],
            levelMomentumPlan: { targets: stock1Target, planConfigs: nvdaConfigs },
            falseBreakoutPlan: { price: 0, targets: stock1Target, planConfigs: nvdaConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock1Target, planConfigs: nvdaConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, targets: stock1Target, planConfigs: nvdaConfigs },
            deferredBreakoutPlan: { targets: stock1Target, planConfigs: nvdaConfigs },
        },
        long: {
            reasons: [
                "all time high breakout",
            ],
            levelMomentumPlan: { targets: stock1Target, planConfigs: nvdaConfigs },
            falseBreakoutPlan: { price: 0, targets: stock1Target, planConfigs: nvdaConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock1Target, planConfigs: nvdaConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, targets: stock1Target, planConfigs: nvdaConfigs },
            deferredBreakoutPlan: { targets: stock1Target, planConfigs: nvdaConfigs },
        },
    },
    {
        symbol: 'AUR',
        analysis: {
            isFreshNews: true, newsImpactScore: 6, marketReactionScore: 8, swingHoldRatio: 0,
            relativeVolumeAndCandleSmoothness: 2,
            cleanVwapTrend: 2, dailyChartStory: 2,
            gapSize: 2.5,
            weeklychart: "up",
            dailyChart: "up",
            hourlyChart: "down",
            premarketChart: "gap up and fade below vwap and 9.5",
            keyLevels: [9.5, 8.5],
            singleMomentumKeyLevel: 9.5,
            dualMomentumKeyLevels: [],
            profitTargetsForLong: {
                targets: [10, 11], willBlowPastThoseLevels: 0.3, summary: `
                if breakout 9.5, there's 2 clear levels to take profit, 10, and run towards premarket high 11.xx
                ` },
            profitTargetsForShort: {
                targets: [8.5, 8.34, 7.8], willBlowPastThoseLevels: 0.3, summary: `
                first target is 8.5, if that breaks, then 8.34. if 8.33 breaks, much lower to 7.8
                ` },
            vwapExtensionDistance: 0,
            choppyOpenRangeHigh: 0,
            choppyOpenRangeLow: 0,
        },
        autoFlip: false,
        vwapCorrection: { open: 0, volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: 11000,
        atr: {
            average: 0.58,
            mutiplier: 2,
            minimumMultipler: 1,
            maxRisk: 0.5,
        },
        disableShortIfOpenAbove: 0,
        disableLongIfOpenBelow: 0,
        keyLevels: {
            momentumStartForLong: 9.5,
            momentumStartForShort: 9.5,
        },
        summary: `
        heavy resistance at 9.5. use 9.5 as key level. 
        `,
        setups: [],
        defaultConfigs: aurConfigs, defaultTargets: stock2Target,
        short: {
            reasons: [
                "profit taking, gap below strong resistance",
            ],
            levelMomentumPlan: { targets: stock2Target, planConfigs: aurConfigs },
            falseBreakoutPlan: { price: 0, targets: stock2Target, planConfigs: aurConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock2Target, planConfigs: aurConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, targets: stock2Target, planConfigs: aurConfigs },
            deferredBreakoutPlan: { targets: stock2Target, planConfigs: aurConfigs },
        },
        long: {
            reasons: [
                "have resistance breakout",
            ],
            levelMomentumPlan: { targets: stock2Target, planConfigs: aurConfigs },
            falseBreakoutPlan: { price: 0, targets: stock2Target, planConfigs: aurConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock2Target, planConfigs: aurConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, targets: stock2Target, planConfigs: aurConfigs },
            deferredBreakoutPlan: { targets: stock2Target, planConfigs: aurConfigs },
        },
    },
    {
        symbol: 'FUBO',
        analysis: {
            isFreshNews: false, newsImpactScore: 5, marketReactionScore: 10, swingHoldRatio: 0,
            relativeVolumeAndCandleSmoothness: 2,
            cleanVwapTrend: 1, dailyChartStory: 1,
            gapSize: 0.2,
            weeklychart: "range down",
            dailyChart: "range",
            hourlyChart: "up",
            premarketChart: "mixed",
            keyLevels: [5.3],
            singleMomentumKeyLevel: 5.3,
            dualMomentumKeyLevels: [],
            profitTargetsForLong: {
                targets: [6, 6.6], willBlowPastThoseLevels: 0.1, summary: `
                second day, limited upside. just move within range
                ` },
            profitTargetsForShort: {
                targets: [4.88, 4.5], willBlowPastThoseLevels: 0.1, summary: `
                unlikely to breakdown premarket low 4.88
                ` },
            vwapExtensionDistance: 1,
            choppyOpenRangeHigh: 0,
            choppyOpenRangeLow: 0,
        },
        autoFlip: false,
        vwapCorrection: { open: 0, volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: 1690,
        atr: {
            average: 0.5,
            mutiplier: 2,
            minimumMultipler: 2,
            maxRisk: 0.5,
        },
        disableShortIfOpenAbove: 0,
        disableLongIfOpenBelow: 0,
        keyLevels: {
            momentumStartForLong: 5.3,
            momentumStartForShort: 5.3,
        },
        summary: `
        best setup is open below y-hi and short the green to red
        `,
        setups: [],
        defaultConfigs: fuboConfigs, defaultTargets: stock3Target,
        short: {
            reasons: [
                "profit taking",
            ],
            levelMomentumPlan: { targets: stock3Target, planConfigs: fuboConfigs },
            falseBreakoutPlan: { price: 0, targets: stock3Target, planConfigs: fuboConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock3Target, planConfigs: fuboConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, targets: stock3Target, planConfigs: fuboConfigs },
            deferredBreakoutPlan: { targets: stock3Target, planConfigs: fuboConfigs },
        },
        long: {
            reasons: [
                "continuation",
            ],
            levelMomentumPlan: { targets: stock3Target, planConfigs: fuboConfigs },
            falseBreakoutPlan: { price: 0, targets: stock3Target, planConfigs: fuboConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock3Target, planConfigs: fuboConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, targets: stock3Target, planConfigs: fuboConfigs },
            deferredBreakoutPlan: { targets: stock3Target, planConfigs: fuboConfigs },
        },
    },
    {
        symbol: 'PLTR',
        analysis: {
            isFreshNews: true, newsImpactScore: 4, marketReactionScore: 3, swingHoldRatio: 0,
            relativeVolumeAndCandleSmoothness: 1,
            cleanVwapTrend: 2, dailyChartStory: 1,
            gapSize: 1,
            weeklychart: "up",
            dailyChart: "range",
            hourlyChart: "range",
            premarketChart: "below vwap",
            keyLevels: [74.61],
            singleMomentumKeyLevel: 74.61,
            dualMomentumKeyLevels: [],
            profitTargetsForLong: {
                targets: [76, 76.43, 77], willBlowPastThoseLevels: 0.2, summary: `
                range trading
                ` },
            profitTargetsForShort: {
                targets: [72.5, 71], willBlowPastThoseLevels: 0.5, summary: `
                if open below y-low, it can trend nice to previous low
                ` },
            vwapExtensionDistance: 0,
            choppyOpenRangeHigh: 0,
            choppyOpenRangeLow: 0,
        },
        autoFlip: false,
        vwapCorrection: { open: 0, volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: Constants.marketCaps.PLTR,
        atr: {
            average: 2,
            mutiplier: 2,
            minimumMultipler: 1,
            maxRisk: 1,
        },
        disableShortIfOpenAbove: 0,
        disableLongIfOpenBelow: 0,
        keyLevels: {
            momentumStartForLong: 74.61,
            momentumStartForShort: 74.61,
        },
        summary: `
        if open above 74.61, range long. if open below 74.61, momentum short
        `,
        setups: [],
        defaultConfigs: pltrConfigs, defaultTargets: stock4Target,
        short: {
            reasons: [
                "ARK sold",
            ],
            levelMomentumPlan: { targets: stock4Target, planConfigs: pltrConfigs },
            falseBreakoutPlan: { price: 0, targets: stock4Target, planConfigs: pltrConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock4Target, planConfigs: pltrConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, targets: stock4Target, planConfigs: pltrConfigs },
            deferredBreakoutPlan: { targets: stock4Target, planConfigs: pltrConfigs },
        },
        long: {
            reasons: [
                "gap down to support and not making new low",
            ],
            levelMomentumPlan: { targets: stock4Target, planConfigs: pltrConfigs },
            falseBreakoutPlan: { price: 0, targets: stock4Target, planConfigs: pltrConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock4Target, planConfigs: pltrConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, targets: stock4Target, planConfigs: pltrConfigs },
            deferredBreakoutPlan: { targets: stock4Target, planConfigs: pltrConfigs },
        },
    },
];