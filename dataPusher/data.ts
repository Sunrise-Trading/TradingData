import * as TradingPlans from './models';
import * as Constants from './constants';

// futures, momentumSimple, tradeStationEquity, schwab
export const activeProfileName: string = "schwab";
export const tradingSettings: TradingPlans.TradingSettings = {
    equalWeightDivider: 4,
    useSingleOrderForEntry: true,
}
export const defaultSize = 0.285;
const crmConfigs: TradingPlans.PlanConfigs = {
    size: defaultSize,
    deferTradingInSeconds: 0,
    stopTradingAfterSeconds: 0,
    requireReversal: true,
    alwaysAllowFlatten: true,
    alwaysAllowMoveStop: true,
    allowFirstFewExitsCount: 10,
};
const flConfigs: TradingPlans.PlanConfigs = {
    size: defaultSize,
    deferTradingInSeconds: 0,
    stopTradingAfterSeconds: 0,
    requireReversal: true,
    alwaysAllowFlatten: true,
    alwaysAllowMoveStop: true,
    allowFirstFewExitsCount: 5,
};
const mrvlConfigs: TradingPlans.PlanConfigs = {
    size: defaultSize,
    deferTradingInSeconds: 0,
    stopTradingAfterSeconds: 0,
    requireReversal: true,
    alwaysAllowFlatten: true,
    alwaysAllowMoveStop: true,
    allowFirstFewExitsCount: 10,
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
    'CRM',
    'FL',
    'MRVL',
];

export const stocksTradingPlans: TradingPlans.TradingPlans[] = [
    {
        symbol: 'CRM',
        analysis: {
            newsQualityAndFreshness: 2, gapType: TradingPlans.GapType.Outside,
            relativeVolumeAndCandleSmoothness: 2,
            cleanVwapTrend: 1, dailyChartStory: 2,
            gapSize: 40,
            weeklychart: "up",
            dailyChart: "range breakout",
            hourlyChart: "range",
            premarketChart: "rally and come back below vwap",
            keyLevels: [360, 368, 382],
            singleMomentumKeyLevel: 368,
            vwapExtensionDistance: 4,
            choppyOpenRangeHigh: 0,
            choppyOpenRangeLow: 0,
        },
        autoFlip: false,
        vwapCorrection: { volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: Constants.marketCaps.CRM,
        atr: {
            average: 8,
            mutiplier: 1.5,
            minimumMultipler: 1,
            maxRisk: 3,
        },
        disableShortIfOpenAbove: 0,
        disableLongIfOpenBelow: 0,
        keyLevels: {
            momentumStartForLong: 360,
            momentumStartForShort: 382,
        },
        summary: `
        key levels are too far from vwap. first need to look for entries near vwap.
        near 368 now. if open below both vwap and 368, it's a good short. or need to wait for it to 
        pop clear below vwap to short. initial momentum is too weak under vwap.
        `,
        setups: [
            {
                high: "vwap", low: "368", title: "chop",
                isChoppy: true,
                range: "between 368 and vwap", quality: "B",
                entrySummary: `
                wait to short the breakdown near below vwap
                `,
                exitTargets: `368 breaks, go to 360`
            }, {
                high: "368", low: "", title: "gap up and fade",
                isChoppy: false,
                range: "below 368 and vwap", quality: "A",
                entrySummary: `
                green to red < 60
                `,
                exitTargets: `360`
            }
        ],
        short: {
            reasons: [
                "profit taking, below vwap fade",
            ],
            profitTakingFade60Plan: { enableAutoTrigger: false, onlyIfOpenBelow: 368, targets: stock1Target, planConfigs: crmConfigs },
            levelMomentumPlan: { targets: stock1Target, planConfigs: crmConfigs },
            falseBreakoutPlan: { price: 0, targets: stock1Target, planConfigs: crmConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock1Target, planConfigs: crmConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, includeSecondNewHigh: true, targets: stock1Target, planConfigs: crmConfigs },
            firstRetracementPlan: { targets: stock1Target, planConfigs: crmConfigs },
            deferredBreakoutPlan: { targets: stock1Target, planConfigs: crmConfigs },
        },
        long: {
            reasons: [
                "hold 368",
            ],
            levelMomentumPlan: { targets: stock1Target, planConfigs: crmConfigs },
            falseBreakoutPlan: { price: 0, targets: stock1Target, planConfigs: crmConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock1Target, planConfigs: crmConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, includeSecondNewHigh: true, targets: stock1Target, planConfigs: crmConfigs },
            firstRetracementPlan: { targets: stock1Target, planConfigs: crmConfigs },
            deferredBreakoutPlan: { targets: stock1Target, planConfigs: crmConfigs },
        },
    },
    {
        symbol: 'FL',
        analysis: {
            newsQualityAndFreshness: 2, gapType: TradingPlans.GapType.Outside,
            relativeVolumeAndCandleSmoothness: 2,
            cleanVwapTrend: 2, dailyChartStory: 2,
            gapSize: 1,
            weeklychart: "range",
            dailyChart: "range",
            hourlyChart: "up and pullback",
            premarketChart: "weak selloff below vwap",
            keyLevels: [20.47],
            singleMomentumKeyLevel: 20.47,
            vwapExtensionDistance: 0.5,
            choppyOpenRangeHigh: 0,
            choppyOpenRangeLow: 0,
        },
        autoFlip: false,
        vwapCorrection: { volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: Constants.marketCaps.FL,
        atr: {
            average: 0.99,
            mutiplier: 2,
            minimumMultipler: 1,
            maxRisk: 0.6,
        },
        disableShortIfOpenAbove: 0,
        disableLongIfOpenBelow: 0,
        keyLevels: {
            momentumStartForLong: 20.47,
            momentumStartForShort: 22,
        },
        summary: `
        the best setup is after it touched 20.47, and then short green to red. 
        if above 20.47, it will gap fill. 
        `,
        setups: [
            {
                high: "20.47", low: "", title: "gap down sell off",
                isChoppy: false,
                range: "below 20.47 and vwap", quality: "A",
                entrySummary: `
                green to red, stay focus on this stock
                `,
                exitTargets: `1-2 ATR`
            }, {
                high: "vwap", low: "20.47", title: "chop",
                isChoppy: true,
                range: "between vwap and 20.47", quality: "B",
                entrySummary: `
                wait 2 minutes
                `,
                exitTargets: `1 ATR`
            }, {
                high: "", low: "vwap", title: "gap down to support long",
                isChoppy: false,
                range: "above 20.47 and vwap", quality: "A",
                entrySummary: `
                let it make a false breakdown, and long the shorts stop out
                `,
                exitTargets: `1-2 ATR`
            }
        ],
        short: {
            reasons: [
                "gap down sell off below 20.47",
            ],
            openDriveContinuation60Plan: { requireOpenBetterThanVwap: true, disableIfOpenWorseThanPrice: 0, targets: stock2Target, planConfigs: flConfigs },
            levelMomentumPlan: { targets: stock2Target, planConfigs: flConfigs },
            falseBreakoutPlan: { price: 0, targets: stock2Target, planConfigs: flConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock2Target, planConfigs: flConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, includeSecondNewHigh: true, targets: stock2Target, planConfigs: flConfigs },
            firstRetracementPlan: { targets: stock2Target, planConfigs: flConfigs },
            deferredBreakoutPlan: { targets: stock2Target, planConfigs: flConfigs },
        },
        long: {
            reasons: [
                "long the gap fill, but news is bearish",
            ],
            levelMomentumPlan: { targets: stock2Target, planConfigs: flConfigs },
            falseBreakoutPlan: { price: 0, targets: stock2Target, planConfigs: flConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock2Target, planConfigs: flConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, includeSecondNewHigh: true, targets: stock2Target, planConfigs: flConfigs },
            firstRetracementPlan: { targets: stock2Target, planConfigs: flConfigs },
            deferredBreakoutPlan: { targets: stock2Target, planConfigs: flConfigs },
        },
    },
    {
        symbol: 'MRVL',
        analysis: {
            newsQualityAndFreshness: 2, gapType: TradingPlans.GapType.Outside,
            relativeVolumeAndCandleSmoothness: 1,
            cleanVwapTrend: 2, dailyChartStory: 2,
            gapSize: 14,
            weeklychart: "up",
            dailyChart: "up",
            hourlyChart: "up",
            premarketChart: "hold above vwap and reaction high",
            keyLevels: [107.5],
            singleMomentumKeyLevel: 107.5,
            vwapExtensionDistance: 2,
            choppyOpenRangeHigh: 0,
            choppyOpenRangeLow: 0,
        },
        autoFlip: false,
        vwapCorrection: { volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: Constants.marketCaps.MRVL,
        atr: {
            average: 3.35,
            mutiplier: 1.5,
            minimumMultipler: 1,
            maxRisk: 2,
        },
        disableShortIfOpenAbove: 0,
        disableLongIfOpenBelow: 0,
        keyLevels: {
            momentumStartForLong: 107.5,
            momentumStartForShort: 120,
        },
        summary: `
        for long, let it dip to vwap or 107.5, and long the next breakout.
        if open extended from vwap, also consider shorting green to red < 60
        `,
        setups: [
            {
                high: "", low: "vwap", title: "gap up and go",
                isChoppy: false,
                range: "above 107.5 and vwap", quality: "A",
                entrySummary: `
                let it open to pullback to vwap or 107.5, long the next breakout
                `,
                exitTargets: `1 ATR`
            },
        ],
        short: {
            reasons: [
                "vwap extension short",
            ],
            profitTakingExhaust60Plan: { includeOpenChase: false, minDistanceToVwap: 1, targets: stock3Target, planConfigs: mrvlConfigs },
            levelMomentumPlan: { targets: stock3Target, planConfigs: mrvlConfigs },
            falseBreakoutPlan: { price: 0, targets: stock3Target, planConfigs: mrvlConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock3Target, planConfigs: mrvlConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, includeSecondNewHigh: true, targets: stock3Target, planConfigs: mrvlConfigs },
            firstRetracementPlan: { targets: stock3Target, planConfigs: mrvlConfigs },
            deferredBreakoutPlan: { targets: stock3Target, planConfigs: mrvlConfigs },
        },
        long: {
            reasons: [
                "all time high breakout and above reaction high",
            ],
            openDriveContinuation60Plan: { requireOpenBetterThanVwap: true, disableIfOpenWorseThanPrice: 107.5, targets: stock3Target, planConfigs: mrvlConfigs },
            levelMomentumPlan: { targets: stock3Target, planConfigs: mrvlConfigs },
            falseBreakoutPlan: { price: 0, targets: stock3Target, planConfigs: mrvlConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock3Target, planConfigs: mrvlConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, includeSecondNewHigh: true, targets: stock3Target, planConfigs: mrvlConfigs },
            firstRetracementPlan: { targets: stock3Target, planConfigs: mrvlConfigs },
            deferredBreakoutPlan: { targets: stock3Target, planConfigs: mrvlConfigs },
        },
    },
    {
        symbol: 'OKTA',
        analysis: {
            newsQualityAndFreshness: 2, gapType: TradingPlans.GapType.Outside,
            relativeVolumeAndCandleSmoothness: 1,
            cleanVwapTrend: -1, dailyChartStory: 1,
            gapSize: 11,
            weeklychart: "range",
            dailyChart: "range breakout",
            hourlyChart: "up",
            premarketChart: "fade below vwap",
            keyLevels: [90.28],
            singleMomentumKeyLevel: -1,
            vwapExtensionDistance: 1,
            choppyOpenRangeHigh: 0,
            choppyOpenRangeLow: 0,
        },
        autoFlip: false,
        vwapCorrection: { volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: Constants.marketCaps.OKTA,
        atr: {
            average: 2.34,
            mutiplier: 1.5,
            minimumMultipler: 1,
            maxRisk: 1.5,
        },
        disableShortIfOpenAbove: 0,
        disableLongIfOpenBelow: 0,
        keyLevels: {
            momentumStartForLong: 90,
            momentumStartForShort: 100,
        },
        summary: `
        gap up and fade
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
        short: {
            reasons: [
                "",
            ],
            levelMomentumPlan: { targets: stock4Target, planConfigs: stock4Configs },
            falseBreakoutPlan: { price: 0, targets: stock4Target, planConfigs: stock4Configs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock4Target, planConfigs: stock4Configs },
            firstNewHighPlan: { enableAutoTrigger: false, includeSecondNewHigh: true, targets: stock4Target, planConfigs: stock4Configs },
            firstRetracementPlan: { targets: stock4Target, planConfigs: stock4Configs },
            deferredBreakoutPlan: { targets: stock4Target, planConfigs: stock4Configs },
        },
        long: {
            reasons: [
                "",
            ],
            levelMomentumPlan: { targets: stock4Target, planConfigs: stock4Configs },
            falseBreakoutPlan: { price: 0, targets: stock4Target, planConfigs: stock4Configs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock4Target, planConfigs: stock4Configs },
            firstNewHighPlan: { enableAutoTrigger: false, includeSecondNewHigh: true, targets: stock4Target, planConfigs: stock4Configs },
            firstRetracementPlan: { targets: stock4Target, planConfigs: stock4Configs },
            deferredBreakoutPlan: { targets: stock4Target, planConfigs: stock4Configs },
        },
    },
];