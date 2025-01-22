import * as TradingPlans from './models';
import * as Constants from './constants';

// futures, momentumSimple, tradeStationEquity, schwab
export const activeProfileName: string = "schwab";
export const tradingSettings: TradingPlans.TradingSettings = {
    snapMode: false,
    useSingleOrderForEntry: true,
}
export const defaultSize = 0.25;
const nflxConfigs: TradingPlans.PlanConfigs = {
    size: defaultSize,
    deferTradingInSeconds: 0,
    stopTradingAfterSeconds: 0,
    requireReversal: true,
    alwaysAllowFlatten: true,
    alwaysAllowMoveStop: true,
    allowFirstFewExitsCount: 3,
    setupQuality: TradingPlans.SetupQuality.SwingHold,
};
const orclConfigs: TradingPlans.PlanConfigs = {
    size: defaultSize,
    deferTradingInSeconds: 0,
    stopTradingAfterSeconds: 0,
    requireReversal: true,
    alwaysAllowFlatten: true,
    alwaysAllowMoveStop: true,
    allowFirstFewExitsCount: 3,
    setupQuality: TradingPlans.SetupQuality.Scalp,

};
const ualConfigs: TradingPlans.PlanConfigs = {
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
    'NFLX',
    'ORCL', 'UAL'
];

export const stocksTradingPlans: TradingPlans.TradingPlans[] = [
    {
        symbol: 'NFLX',
        analysis: {
            isFreshNews: true, newsImpactScore: 8, marketReactionScore: 10, swingHoldRatio: 0.3,
            relativeVolumeAndCandleSmoothness: 2,
            cleanVwapTrend: 0, dailyChartStory: 2,
            allowFirstMinuteByNewsQuality: true,
            allowFirstMinuteByRelativeVolume: true,
            allowFirstMinutezByKeyLevelsQuality: true,
            gapSize: 130,
            weeklychart: "up",
            dailyChart: "pullback",
            hourlyChart: "range bounce",
            premarketChart: "mixed around vwap, need to review near market open",
            keyLevels: [941.75, 1000, 998],
            singleMomentumKeyLevel: 998,
            dualMomentumKeyLevels: [],
            profitTargetsForLong: {
                targets: [1025, 1045], willBlowPastThoseLevels: 0.8, summary: `
                all time high breakout, big potential to rally $40. 
                ` },
            profitTargetsForShort: {
                targets: [991, 970], willBlowPastThoseLevels: 0.4, summary: `
                first scalp short is 991 premarket low, if break that, go to 970
                ` },
            vwapExtensionDistance: 0,
            choppyOpenRangeHigh: 0,
            choppyOpenRangeLow: 0,
        },
        autoFlip: false,
        vwapCorrection: { open: 0, volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: Constants.marketCaps.NFLX,
        atr: {
            average: 19,
            mutiplier: 2,
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
        the best setup is all time high breakout, take red to green < 60 after it retest 1000 or vwap or 998. Use 998 as the key level to 
        pick directions. After the first 3 early partials, try to hold as much as possible.
        `,
        setups: [],
        defaultConfigs: nflxConfigs, defaultTargets: stock1Target,
        short: {
            reasons: [
                "profit taking",
            ],
            levelMomentumPlan: { enableAutoTrigger: true, targets: stock1Target, planConfigs: nflxConfigs },
            falseBreakoutPlan: { price: 0, targets: stock1Target, planConfigs: nflxConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock1Target, planConfigs: nflxConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, targets: stock1Target, planConfigs: nflxConfigs },
            deferredBreakoutPlan: { targets: stock1Target, planConfigs: nflxConfigs },
        },
        long: {
            reasons: [
                "strong earnings, all time high breakout, short squeeze",
            ],
            levelMomentumPlan: { enableAutoTrigger: true, targets: stock1Target, planConfigs: nflxConfigs },
            falseBreakoutPlan: { price: 0, targets: stock1Target, planConfigs: nflxConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock1Target, planConfigs: nflxConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, targets: stock1Target, planConfigs: nflxConfigs },
            deferredBreakoutPlan: { targets: stock1Target, planConfigs: nflxConfigs },
        },
    },
    {
        symbol: 'ORCL',
        analysis: {
            isFreshNews: true, newsImpactScore: 7, marketReactionScore: 7, swingHoldRatio: 0.1,
            relativeVolumeAndCandleSmoothness: 2,
            cleanVwapTrend: 1, dailyChartStory: 1,
            allowFirstMinuteByNewsQuality: true,
            allowFirstMinuteByRelativeVolume: true,
            allowFirstMinutezByKeyLevelsQuality: true,
            gapSize: 18,
            weeklychart: "rally and big pullback",
            dailyChart: "bounce",
            hourlyChart: "up",
            premarketChart: "near vwap and dip below so far",
            keyLevels: [190],
            singleMomentumKeyLevel: 190,
            dualMomentumKeyLevels: [],
            profitTargetsForLong: {
                targets: [192, 195], willBlowPastThoseLevels: 0.1, summary: `'
                gap up into heavy resistance before all time high, unlikely to breakout, better gap above
                ` },
            profitTargetsForShort: {
                targets: [185, 180], willBlowPastThoseLevels: 0.5, summary: `
                first target is 185, if break below, go to 180
                ` },
            vwapExtensionDistance: 0,
            choppyOpenRangeHigh: 0,
            choppyOpenRangeLow: 0,
        },
        autoFlip: false,
        vwapCorrection: { open: 189.18, volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: Constants.marketCaps.ORCL,
        atr: {
            average: 4,
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
        best setup is open below vwap for a gap up and fade. already had a rally yesterday mid day
        `,
        setups: [],
        defaultConfigs: orclConfigs, defaultTargets: stock2Target,
        short: {
            reasons: [
                "profit taking",
            ],
            levelMomentumPlan: { enableAutoTrigger: true, targets: stock2Target, planConfigs: orclConfigs },
            falseBreakoutPlan: { price: 0, targets: stock2Target, planConfigs: orclConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock2Target, planConfigs: orclConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, targets: stock2Target, planConfigs: orclConfigs },
            deferredBreakoutPlan: { targets: stock2Target, planConfigs: orclConfigs },
        },
        long: {
            reasons: [
                "continuation",
            ],
            levelMomentumPlan: { enableAutoTrigger: true, targets: stock2Target, planConfigs: orclConfigs },
            falseBreakoutPlan: { price: 0, targets: stock2Target, planConfigs: orclConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock2Target, planConfigs: orclConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, targets: stock2Target, planConfigs: orclConfigs },
            deferredBreakoutPlan: { targets: stock2Target, planConfigs: orclConfigs },
        },
    },
    {
        symbol: 'UAL',
        analysis: {
            isFreshNews: true, newsImpactScore: 6, marketReactionScore: 6, swingHoldRatio: 0.2,
            relativeVolumeAndCandleSmoothness: 2,
            cleanVwapTrend: 2, dailyChartStory: 1,
            allowFirstMinuteByNewsQuality: true,
            allowFirstMinuteByRelativeVolume: true,
            allowFirstMinutezByKeyLevelsQuality: true,
            gapSize: 6,
            weeklychart: "up",
            dailyChart: "up",
            hourlyChart: "up",
            premarketChart: "up",
            keyLevels: [118.5],
            singleMomentumKeyLevel: 118.5,
            dualMomentumKeyLevels: [],
            profitTargetsForLong: {
                targets: [120, 122], willBlowPastThoseLevels: 0.3, summary: `
                if breakout 118.5, can keep push for a bit more
                ` },
            profitTargetsForShort: {
                targets: [116, 114], willBlowPastThoseLevels: 0.4, summary: `
                if break below vwap 116, can go to premarket low 114. if that breaks, go to 111
                ` },
            vwapExtensionDistance: 0,
            choppyOpenRangeHigh: 0,
            choppyOpenRangeLow: 0,
        },
        autoFlip: false,
        vwapCorrection: { open: 0, volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: Constants.marketCaps.UAL,
        atr: {
            average: 3.7,
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
        wait for 118.5 to reversal short
        `,
        setups: [],
        defaultConfigs: ualConfigs, defaultTargets: stock3Target,
        short: {
            reasons: [
                "key level rejection",
            ],
            levelMomentumPlan: { enableAutoTrigger: true, targets: stock3Target, planConfigs: ualConfigs },
            falseBreakoutPlan: { price: 0, targets: stock3Target, planConfigs: ualConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock3Target, planConfigs: ualConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, targets: stock3Target, planConfigs: ualConfigs },
            deferredBreakoutPlan: { targets: stock3Target, planConfigs: ualConfigs },
        },
        long: {
            reasons: [
                "key level breakout",
            ],
            levelMomentumPlan: { enableAutoTrigger: true, targets: stock3Target, planConfigs: ualConfigs },
            falseBreakoutPlan: { price: 0, targets: stock3Target, planConfigs: ualConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock3Target, planConfigs: ualConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, targets: stock3Target, planConfigs: ualConfigs },
            deferredBreakoutPlan: { targets: stock3Target, planConfigs: ualConfigs },
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
            levelMomentumPlan: { enableAutoTrigger: true, targets: stock4Target, planConfigs: stock4Configs },
            falseBreakoutPlan: { price: 0, targets: stock4Target, planConfigs: stock4Configs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock4Target, planConfigs: stock4Configs },
            firstNewHighPlan: { enableAutoTrigger: false, targets: stock4Target, planConfigs: stock4Configs },
            deferredBreakoutPlan: { targets: stock4Target, planConfigs: stock4Configs },
        },
        long: {
            reasons: [
                "",
            ],
            levelMomentumPlan: { enableAutoTrigger: true, targets: stock4Target, planConfigs: stock4Configs },
            falseBreakoutPlan: { price: 0, targets: stock4Target, planConfigs: stock4Configs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock4Target, planConfigs: stock4Configs },
            firstNewHighPlan: { enableAutoTrigger: false, targets: stock4Target, planConfigs: stock4Configs },
            deferredBreakoutPlan: { targets: stock4Target, planConfigs: stock4Configs },
        },
    },
];