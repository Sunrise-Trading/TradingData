import * as TradingPlans from './models';
import * as Constants from './constants';

// futures, momentumSimple, tradeStationEquity, schwab
export const activeProfileName: string = "schwab";
export const tradingSettings: TradingPlans.TradingSettings = {
    equalWeightDivider: 4,
    useSingleOrderForEntry: true,
}
export const defaultSize = 0.28;
const stock1Configs: TradingPlans.PlanConfigs = {
    size: defaultSize,
    deferTradingInSeconds: 0,
    stopTradingAfterSeconds: 0,
    requireReversal: true,
    alwaysAllowFlatten: true,
    alwaysAllowMoveStop: true,
    allowFirstFewExitsCount: 5,
};
const stock2Configs: TradingPlans.PlanConfigs = {
    size: defaultSize,
    deferTradingInSeconds: 0,
    stopTradingAfterSeconds: 0,
    requireReversal: true,
    alwaysAllowFlatten: true,
    alwaysAllowMoveStop: true,
    allowFirstFewExitsCount: 5,
};
const stock3Configs: TradingPlans.PlanConfigs = {
    size: defaultSize,
    deferTradingInSeconds: 0,
    stopTradingAfterSeconds: 0,
    requireReversal: true,
    alwaysAllowFlatten: true,
    alwaysAllowMoveStop: true,
    allowFirstFewExitsCount: 5,
};
const stock4Configs: TradingPlans.PlanConfigs = {
    size: defaultSize,
    deferTradingInSeconds: 0,
    stopTradingAfterSeconds: 0,
    requireReversal: true,
    alwaysAllowFlatten: true,
    alwaysAllowMoveStop: true,
    allowFirstFewExitsCount: 5,
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
    'QBTS',
    'RGTI',
    'SES'
];

export const stocksTradingPlans: TradingPlans.TradingPlans[] = [
    {
        symbol: 'QBTS',
        analysis: {
            newsQualityAndFreshness: 1, gapType: TradingPlans.GapType.Outside,
            relativeVolumeAndCandleSmoothness: 1,
            cleanVwapTrend: 1, dailyChartStory: 1,
            gapSize: 0.5,
            weeklychart: "up",
            dailyChart: "up",
            hourlyChart: "up",
            premarketChart: "above vwap",
            keyLevels: [10.5],
            singleMomentumKeyLevel: 10.5,
            dualMomentumKeyLevels: [],
            vwapExtensionDistance: 0,
            choppyOpenRangeHigh: 0,
            choppyOpenRangeLow: 0,
        },
        autoFlip: false,
        vwapCorrection: { open: 0, volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: Constants.marketCaps.QBTS,
        atr: {
            average: 1.3,
            mutiplier: 2,
            minimumMultipler: 1,
            maxRisk: 1,
        },
        disableShortIfOpenAbove: 0,
        disableLongIfOpenBelow: 0,
        keyLevels: {
            momentumStartForLong: 10,
            momentumStartForShort: 11,
        },
        summary: `
        only trade the key level 10.5. 
        if open above, long the first breakout. otherwise, wait for a confirmed breakout of 10.5
        `,
        setups: [
            {
                high: "", low: "10.5", title: "gap up and go",
                isChoppy: false,
                range: "above 10.5", quality: "A",
                entrySummary: `
                red to green < 60
                `,
                exitTargets: `1 ATR, then trail on 5 minute`
            }, {
                high: "10.5", low: "vwap", title: "wait for breakout",
                isChoppy: true,
                range: "between 10.5 and vwap", quality: "B",
                entrySummary: `
                wait for 1 minute close above 10.5
                `,
                exitTargets: `same`
            }
        ],
        defaultConfigs: stock1Configs, defaultTargets: stock1Target,
        short: {
            reasons: [
                "profit taking",
            ],
            levelMomentumPlan: { targets: stock1Target, planConfigs: stock1Configs },
            falseBreakoutPlan: { price: 0, targets: stock1Target, planConfigs: stock1Configs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock1Target, planConfigs: stock1Configs },
            firstNewHighPlan: { enableAutoTrigger: false, targets: stock1Target, planConfigs: stock1Configs },
            deferredBreakoutPlan: { targets: stock1Target, planConfigs: stock1Configs },
        },
        long: {
            reasons: [
                "continuation",
            ],
            levelMomentumPlan: { targets: stock1Target, planConfigs: stock1Configs },
            falseBreakoutPlan: { price: 0, targets: stock1Target, planConfigs: stock1Configs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock1Target, planConfigs: stock1Configs },
            firstNewHighPlan: { enableAutoTrigger: false, targets: stock1Target, planConfigs: stock1Configs },
            deferredBreakoutPlan: { targets: stock1Target, planConfigs: stock1Configs },
        },
    },
    {
        symbol: 'SES',
        analysis: {
            newsQualityAndFreshness: 2, gapType: TradingPlans.GapType.Outside,
            relativeVolumeAndCandleSmoothness: 2,
            cleanVwapTrend: 2, dailyChartStory: 1,
            gapSize: 1,
            weeklychart: "down",
            dailyChart: "down",
            hourlyChart: "down",
            premarketChart: "below vwap",
            keyLevels: [2.76],
            singleMomentumKeyLevel: 2.76,
            dualMomentumKeyLevels: [],
            vwapExtensionDistance: 0,
            choppyOpenRangeHigh: 0,
            choppyOpenRangeLow: 0,
        },
        autoFlip: false,
        vwapCorrection: { open: 0, volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: 1000,
        atr: {
            average: 0.3,
            mutiplier: 3,
            minimumMultipler: 1,
            maxRisk: 0.2,
        },
        disableShortIfOpenAbove: 0,
        disableLongIfOpenBelow: 0,
        keyLevels: {
            momentumStartForLong: 2.50,
            momentumStartForShort: 2.76,
        },
        summary: `
        short if below vwap
        `,
        setups: [
            {
                high: "vwap", low: "", title: "gap up and fade",
                isChoppy: true,
                range: "belowv wap", quality: "A",
                entrySummary: `
                green to red < 60
                `,
                exitTargets: `gap fill`
            },
        ],
        defaultConfigs: stock2Configs, defaultTargets: stock2Target,
        short: {
            reasons: [
                "gap into resistance",
            ],
            levelMomentumPlan: { targets: stock2Target, planConfigs: stock2Configs },
            falseBreakoutPlan: { price: 0, targets: stock2Target, planConfigs: stock2Configs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock2Target, planConfigs: stock2Configs },
            firstNewHighPlan: { enableAutoTrigger: false, targets: stock2Target, planConfigs: stock2Configs },
            deferredBreakoutPlan: { targets: stock2Target, planConfigs: stock2Configs },
        },
        long: {
            reasons: [
                "continuation",
            ],
            levelMomentumPlan: { targets: stock2Target, planConfigs: stock2Configs },
            falseBreakoutPlan: { price: 0, targets: stock2Target, planConfigs: stock2Configs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock2Target, planConfigs: stock2Configs },
            firstNewHighPlan: { enableAutoTrigger: false, targets: stock2Target, planConfigs: stock2Configs },
            deferredBreakoutPlan: { targets: stock2Target, planConfigs: stock2Configs },
        },
    },
    {
        symbol: 'RGTI',
        analysis: {
            newsQualityAndFreshness: 0, gapType: TradingPlans.GapType.Outside,
            relativeVolumeAndCandleSmoothness: 2,
            cleanVwapTrend: 1, dailyChartStory: 1,
            gapSize: 2,
            weeklychart: "up",
            dailyChart: "up",
            hourlyChart: "up",
            premarketChart: "above vwap",
            keyLevels: [15.5],
            singleMomentumKeyLevel: 15.5,
            dualMomentumKeyLevels: [],
            vwapExtensionDistance: 1.2,
            choppyOpenRangeHigh: 0,
            choppyOpenRangeLow: 0,
        },
        autoFlip: false,
        vwapCorrection: { open: 0, volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: Constants.marketCaps.RGTI,
        atr: {
            average: 1.2,
            mutiplier: 2,
            minimumMultipler: 1,
            maxRisk: 1.2,
        },
        disableShortIfOpenAbove: 0,
        disableLongIfOpenBelow: 0,
        keyLevels: {
            momentumStartForLong: 15.5,
            momentumStartForShort: 20,
        },
        summary: `
        if open above vwap, take red to green < 60
        `,
        setups: [
            {
                high: "", low: "vwap", title: "gap and go",
                isChoppy: false,
                range: "above vwap", quality: "A",
                entrySummary: `
                red to green < 60
                `,
                exitTargets: `premarket high 17.5, of that holds, much higher`
            },
        ],
        defaultConfigs: stock3Configs, defaultTargets: stock3Target,
        short: {
            reasons: [
                "profit taking",
            ],
            levelMomentumPlan: { targets: stock3Target, planConfigs: stock3Configs },
            falseBreakoutPlan: { price: 0, targets: stock3Target, planConfigs: stock3Configs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock3Target, planConfigs: stock3Configs },
            firstNewHighPlan: { enableAutoTrigger: false, targets: stock3Target, planConfigs: stock3Configs },
            deferredBreakoutPlan: { targets: stock3Target, planConfigs: stock3Configs },
        },
        long: {
            reasons: [
                "continuation",
            ],
            levelMomentumPlan: { targets: stock3Target, planConfigs: stock3Configs },
            falseBreakoutPlan: { price: 0, targets: stock3Target, planConfigs: stock3Configs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock3Target, planConfigs: stock3Configs },
            firstNewHighPlan: { enableAutoTrigger: false, targets: stock3Target, planConfigs: stock3Configs },
            deferredBreakoutPlan: { targets: stock3Target, planConfigs: stock3Configs },
        },
    },
    {
        symbol: 'stock4',
        analysis: {
            newsQualityAndFreshness: -1, gapType: TradingPlans.GapType.Unknown,
            relativeVolumeAndCandleSmoothness: -1,
            cleanVwapTrend: -1, dailyChartStory: -1,
            gapSize: 0,
            weeklychart: "",
            dailyChart: "",
            hourlyChart: "",
            premarketChart: "",
            keyLevels: [],
            singleMomentumKeyLevel: -1,
            dualMomentumKeyLevels: [],
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
        setups: [
            {
                high: "", low: "", title: "",
                isChoppy: true,
                range: "", quality: "",
                entrySummary: `
                `,
                exitTargets: ``
            }, {
                high: "", low: "", title: "",
                isChoppy: true,
                range: "", quality: "",
                entrySummary: `
                `,
                exitTargets: ``
            }
        ],
        defaultConfigs: stock4Configs, defaultTargets: stock4Target,
        short: {
            reasons: [
                "",
            ],
            levelMomentumPlan: { targets: stock4Target, planConfigs: stock4Configs },
            falseBreakoutPlan: { price: 0, targets: stock4Target, planConfigs: stock4Configs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock4Target, planConfigs: stock4Configs },
            firstNewHighPlan: { enableAutoTrigger: false, targets: stock4Target, planConfigs: stock4Configs },
            deferredBreakoutPlan: { targets: stock4Target, planConfigs: stock4Configs },
        },
        long: {
            reasons: [
                "",
            ],
            levelMomentumPlan: { targets: stock4Target, planConfigs: stock4Configs },
            falseBreakoutPlan: { price: 0, targets: stock4Target, planConfigs: stock4Configs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock4Target, planConfigs: stock4Configs },
            firstNewHighPlan: { enableAutoTrigger: false, targets: stock4Target, planConfigs: stock4Configs },
            deferredBreakoutPlan: { targets: stock4Target, planConfigs: stock4Configs },
        },
    },
];