import * as TradingPlans from './models';
import * as Constants from './constants';

// futures, momentumSimple, tradeStationEquity, schwab
export const activeProfileName: string = "schwab";
export const tradingSettings: TradingPlans.TradingSettings = {
    snapMode: false,
    useSingleOrderForEntry: true,
}
export const defaultSize = 0.25;
const twloConfigs: TradingPlans.PlanConfigs = {
    size: defaultSize,
    deferTradingInSeconds: 0,
    stopTradingAfterSeconds: 0,
    requireReversal: true,
    alwaysAllowFlatten: true,
    alwaysAllowMoveStop: true,
    allowFirstFewExitsCount: 3,
    setupQuality: TradingPlans.SetupQuality.Move2Move,
};
const nvoConfigs: TradingPlans.PlanConfigs = {
    size: defaultSize,
    deferTradingInSeconds: 0,
    stopTradingAfterSeconds: 0,
    requireReversal: true,
    alwaysAllowFlatten: true,
    alwaysAllowMoveStop: true,
    allowFirstFewExitsCount: 3,
    setupQuality: TradingPlans.SetupQuality.SwingHold,

};
const coinConfigs: TradingPlans.PlanConfigs = {
    size: defaultSize,
    deferTradingInSeconds: 0,
    stopTradingAfterSeconds: 0,
    requireReversal: true,
    alwaysAllowFlatten: true,
    alwaysAllowMoveStop: true,
    allowFirstFewExitsCount: 3,
    setupQuality: TradingPlans.SetupQuality.Scalp,
};
const axpConfigs: TradingPlans.PlanConfigs = {
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
    'NVO',
    'TWLO',
    'AXP',
    'NVDA'
];

export const stocksTradingPlans: TradingPlans.TradingPlans[] = [
    {
        symbol: 'TWLO',
        analysis: {
            isFreshNews: true, newsImpactScore: 6, marketReactionScore: 10, swingHoldRatio: 0.1,
            relativeVolumeAndCandleSmoothness: 2,
            cleanVwapTrend: 1, dailyChartStory: 2,
            allowFirstMinuteByNewsQuality: true,
            allowFirstMinuteByRelativeVolume: true,
            allowFirstMinutezByKeyLevelsQuality: true,
            gapSize: 30,
            weeklychart: "down and up",
            dailyChart: "up",
            hourlyChart: "range",
            premarketChart: "flat above vwap and yesterday reaction high",
            keyLevels: [130.5],
            singleMomentumKeyLevel: 130.5,
            dualMomentumKeyLevels: [],
            profitTargetsForLong: {
                targets: [136, 140], willBlowPastThoseLevels: 0.2, summary: `
                no clear targets, use trailing stop. weekly chart is still bearish. so take partial
                ` },
            profitTargetsForShort: {
                targets: [130.5, 128], willBlowPastThoseLevels: 0.5, summary: `
                if break below 130.5, short to 128. it will open big room to the down side.
                ` },
            vwapExtensionDistance: 0,
            choppyOpenRangeHigh: 0,
            choppyOpenRangeLow: 0,
        },
        autoFlip: false,
        vwapCorrection: { open: 0, volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: Constants.marketCaps.TWLO,
        atr: {
            average: 3.7,
            mutiplier: 2,
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
        huge gap up. as long as it holds above vwap, only look for long. for shorts, need to break below reaction high.
        due to huge gap up, prefer to take long after a decent pull back.
        too extended, also allow first short against vwap and levels.
        `,
        setups: [],
        defaultConfigs: twloConfigs, defaultTargets: stock1Target,
        short: {
            reasons: [
                "profit taking",
            ],
            profitTakingExhaust60Plan: { includeOpenChase: false, minDistanceToVwap: 1, targets: stock1Target, planConfigs: twloConfigs },
            levelMomentumPlan: { enableAutoTrigger: true, targets: stock1Target, planConfigs: twloConfigs },
            falseBreakoutPlan: { price: 0, targets: stock1Target, planConfigs: twloConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock1Target, planConfigs: twloConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, targets: stock1Target, planConfigs: twloConfigs },
            deferredBreakoutPlan: { targets: stock1Target, planConfigs: twloConfigs },
        },
        long: {
            reasons: [
                "strength continuation",
            ],
            levelMomentumPlan: { enableAutoTrigger: true, targets: stock1Target, planConfigs: twloConfigs },
            falseBreakoutPlan: { price: 0, targets: stock1Target, planConfigs: twloConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock1Target, planConfigs: twloConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, targets: stock1Target, planConfigs: twloConfigs },
            deferredBreakoutPlan: { targets: stock1Target, planConfigs: twloConfigs },
        },
    },
    {
        symbol: 'NVO',
        analysis: {
            isFreshNews: true, newsImpactScore: 8, marketReactionScore: 8, swingHoldRatio: 0.3,
            relativeVolumeAndCandleSmoothness: 2,
            cleanVwapTrend: 1, dailyChartStory: 2,
            allowFirstMinuteByNewsQuality: true,
            allowFirstMinuteByRelativeVolume: true,
            allowFirstMinutezByKeyLevelsQuality: true,
            gapSize: 10,
            weeklychart: "down",
            dailyChart: "down",
            hourlyChart: "down",
            premarketChart: "mixed around vwap",
            keyLevels: [89.1],
            singleMomentumKeyLevel: 89.1,
            dualMomentumKeyLevels: [],
            profitTargetsForLong: {
                targets: [93.11, 94, 95], willBlowPastThoseLevels: 0.6, summary: `
                big room to the upside to 99. hold core position for a higher timeframe trail.
                ` },
            profitTargetsForShort: {
                targets: [88, 87], willBlowPastThoseLevels: 0.2, summary: `
                big room to the downside. but unlikely to continue dropping, take partials along the way and add back on pops.
                ` },
            vwapExtensionDistance: 0,
            choppyOpenRangeHigh: 0,
            choppyOpenRangeLow: 0,
        },
        autoFlip: false,
        vwapCorrection: { open: 0, volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: Constants.marketCaps.NVO,
        atr: {
            average: 2.74,
            mutiplier: 2,
            minimumMultipler: 1.5,
            maxRisk: 1.75,
        },
        disableShortIfOpenAbove: 0,
        disableLongIfOpenBelow: 0,
        keyLevels: {
            momentumStartForLong: 0,
            momentumStartForShort: 0,
        },
        summary: `
        this can be a potentially a very good trade due to the gap space it opened up. Best setup is a dip to touch the daily key level.
        try to hold on to longs with core positions. 
        `,
        setups: [],
        defaultConfigs: nvoConfigs, defaultTargets: stock2Target,
        short: {
            reasons: [
                "profit taking, daily chart is bearish",
            ],
            levelMomentumPlan: { enableAutoTrigger: true, targets: stock2Target, planConfigs: nvoConfigs },
            falseBreakoutPlan: { price: 0, targets: stock2Target, planConfigs: nvoConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock2Target, planConfigs: nvoConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, targets: stock2Target, planConfigs: nvoConfigs },
            deferredBreakoutPlan: { targets: stock2Target, planConfigs: nvoConfigs },
        },
        long: {
            reasons: [
                "posistive drug results",
            ],
            levelMomentumPlan: { enableAutoTrigger: true, targets: stock2Target, planConfigs: nvoConfigs },
            falseBreakoutPlan: { price: 0, targets: stock2Target, planConfigs: nvoConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock2Target, planConfigs: nvoConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, targets: stock2Target, planConfigs: nvoConfigs },
            deferredBreakoutPlan: { targets: stock2Target, planConfigs: nvoConfigs },
        },
    },
    {
        symbol: 'COIN',
        analysis: {
            isFreshNews: false, newsImpactScore: 5, marketReactionScore: 2, swingHoldRatio: 0.1,
            relativeVolumeAndCandleSmoothness: 1,
            cleanVwapTrend: 1, dailyChartStory: 1,
            allowFirstMinuteByNewsQuality: true,
            allowFirstMinuteByRelativeVolume: true,
            allowFirstMinutezByKeyLevelsQuality: true,
            gapSize: 5,
            weeklychart: "range",
            dailyChart: "range",
            hourlyChart: "range",
            premarketChart: "below vwap",
            keyLevels: [303.56],
            singleMomentumKeyLevel: 303.56,
            dualMomentumKeyLevels: [],
            profitTargetsForLong: {
                targets: [310, 308], willBlowPastThoseLevels: 0.1, summary: `
                there are resistance near above, so take partials and trail.
                look for a 1 to 1 measured move of the range height.
                ` },
            profitTargetsForShort: {
                targets: [300, 297.5], willBlowPastThoseLevels: 0.1, summary: `
                too much support under, not a good option to short.
                ` },
            vwapExtensionDistance: 0,
            choppyOpenRangeHigh: 0,
            choppyOpenRangeLow: 0,
        },
        autoFlip: false,
        vwapCorrection: { open: 0, volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: Constants.marketCaps.COIN,
        atr: {
            average: 9,
            mutiplier: 2,
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
        long take long when it confirms a breakout above yesterday high. look for a 1 to 1 measured move of the range height.
        `,
        setups: [],
        defaultConfigs: coinConfigs, defaultTargets: stock3Target,
        short: {
            reasons: [
                "near resistance, still inside range",
            ],
            levelMomentumPlan: { enableAutoTrigger: true, targets: stock3Target, planConfigs: coinConfigs },
            falseBreakoutPlan: { price: 0, targets: stock3Target, planConfigs: coinConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock3Target, planConfigs: coinConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, targets: stock3Target, planConfigs: coinConfigs },
            deferredBreakoutPlan: { targets: stock3Target, planConfigs: coinConfigs },
        },
        long: {
            reasons: [
                "daily range breakout",
            ],
            levelMomentumPlan: { enableAutoTrigger: true, targets: stock3Target, planConfigs: coinConfigs },
            falseBreakoutPlan: { price: 0, targets: stock3Target, planConfigs: coinConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock3Target, planConfigs: coinConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, targets: stock3Target, planConfigs: coinConfigs },
            deferredBreakoutPlan: { targets: stock3Target, planConfigs: coinConfigs },
        },
    },
    {
        symbol: 'AXP',
        analysis: {
            isFreshNews: true, newsImpactScore: 5, marketReactionScore: 2, swingHoldRatio: 0,
            relativeVolumeAndCandleSmoothness: 1,
            cleanVwapTrend: 1, dailyChartStory: 1,
            allowFirstMinuteByNewsQuality: false,
            allowFirstMinuteByRelativeVolume: false,
            allowFirstMinutezByKeyLevelsQuality: false,
            gapSize: 1,
            weeklychart: "up",
            dailyChart: "up",
            hourlyChart: "up",
            premarketChart: "up",
            keyLevels: [321.99, 326.27],
            singleMomentumKeyLevel: -1,
            dualMomentumKeyLevels: [321.99, 326.27],
            profitTargetsForLong: {
                targets: [330, 335], willBlowPastThoseLevels: 0.2, summary: `
                all time high breakout, trail with unlimited target.
                ` },
            profitTargetsForShort: {
                targets: [320, 315, 312], willBlowPastThoseLevels: 0.1, summary: `
                strong dialy trend, a small pullback
                ` },
            vwapExtensionDistance: 0,
            choppyOpenRangeHigh: 0,
            choppyOpenRangeLow: 0,
        },
        autoFlip: false,
        vwapCorrection: { open: 0, volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: Constants.marketCaps.AXP,
        atr: {
            average: 6,
            mutiplier: 1,
            minimumMultipler: 1,
            maxRisk: 1.5,
        },
        disableShortIfOpenAbove: 0,
        disableLongIfOpenBelow: 0,
        keyLevels: {
            momentumStartForLong: 326.27,
            momentumStartForShort: 321.99,
        },
        summary: `
        prefer to take long after all time high breakout with tight stop.
        `,
        setups: [],
        defaultConfigs: axpConfigs, defaultTargets: stock4Target,
        short: {
            reasons: [
                "profit taking",
            ],
            levelMomentumPlan: { enableAutoTrigger: true, targets: stock4Target, planConfigs: axpConfigs },
            falseBreakoutPlan: { price: 0, targets: stock4Target, planConfigs: axpConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock4Target, planConfigs: axpConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, targets: stock4Target, planConfigs: axpConfigs },
            deferredBreakoutPlan: { targets: stock4Target, planConfigs: axpConfigs },
        },
        long: {
            reasons: [
                "continuation",
            ],
            levelMomentumPlan: { enableAutoTrigger: true, targets: stock4Target, planConfigs: axpConfigs },
            falseBreakoutPlan: { price: 0, targets: stock4Target, planConfigs: axpConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock4Target, planConfigs: axpConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, targets: stock4Target, planConfigs: axpConfigs },
            deferredBreakoutPlan: { targets: stock4Target, planConfigs: axpConfigs },
        },
    },
    {
        symbol: 'NVDA',
        analysis: {
            isFreshNews: true, newsImpactScore: 5, marketReactionScore: 2, swingHoldRatio: 0,
            relativeVolumeAndCandleSmoothness: 2,
            cleanVwapTrend: 2, dailyChartStory: 2,
            allowFirstMinuteByNewsQuality: true,
            allowFirstMinuteByRelativeVolume: true,
            allowFirstMinutezByKeyLevelsQuality: true,
            gapSize: 1,
            weeklychart: "up",
            dailyChart: "up",
            hourlyChart: "up",
            premarketChart: "up",
            keyLevels: [147.23],
            singleMomentumKeyLevel: 147.23,
            dualMomentumKeyLevels: [],
            profitTargetsForLong: {
                targets: [150, 153], willBlowPastThoseLevels: 0.2, summary: `
                follow momentum.
                ` },
            profitTargetsForShort: {
                targets: [146, 147], willBlowPastThoseLevels: 0.1, summary: `
                not a good short
                ` },
            vwapExtensionDistance: 0,
            choppyOpenRangeHigh: 0,
            choppyOpenRangeLow: 0,
        },
        autoFlip: false,
        vwapCorrection: { open: 0, volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: Constants.marketCaps.NVDA,
        atr: {
            average: 4.9,
            mutiplier: 1,
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
        i was looking for a NVDA 2nd push with some news. now it happens. so follow the setup. it's a two bullish 
        consolidation breakout. but be careful, it 's a news in premarket, i already missed the first breakout.
        `,
        setups: [],
        defaultConfigs: axpConfigs, defaultTargets: stock4Target,
        short: {
            reasons: [
                "profit taking",
            ],
            levelMomentumPlan: { enableAutoTrigger: false, targets: stock4Target, planConfigs: axpConfigs },
            falseBreakoutPlan: { price: 0, targets: stock4Target, planConfigs: axpConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock4Target, planConfigs: axpConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, targets: stock4Target, planConfigs: axpConfigs },
            deferredBreakoutPlan: { targets: stock4Target, planConfigs: axpConfigs },
        },
        long: {
            reasons: [
                "continuation",
            ],
            levelMomentumPlan: { enableAutoTrigger: true, targets: stock4Target, planConfigs: axpConfigs },
            falseBreakoutPlan: { price: 0, targets: stock4Target, planConfigs: axpConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock4Target, planConfigs: axpConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, targets: stock4Target, planConfigs: axpConfigs },
            deferredBreakoutPlan: { targets: stock4Target, planConfigs: axpConfigs },
        },
    },
];