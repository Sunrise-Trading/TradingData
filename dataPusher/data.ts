import * as TradingPlans from './models';
import * as Constants from './constants';

// futures, momentumSimple, tradeStationEquity, schwab
export const activeProfileName: string = "schwab";
export const tradingSettings: TradingPlans.TradingSettings = {
    equalWeightDivider: 4,
    useSingleOrderForEntry: true,
}
export const defaultSize = 0.28;
const coinConfigs: TradingPlans.PlanConfigs = {
    size: defaultSize,
    deferTradingInSeconds: 0,
    stopTradingAfterSeconds: 0,
    requireReversal: true,
    alwaysAllowFlatten: true,
    alwaysAllowMoveStop: true,
    allowFirstFewExitsCount: 5,
};
const hoodConfigs: TradingPlans.PlanConfigs = {
    size: defaultSize,
    deferTradingInSeconds: 0,
    stopTradingAfterSeconds: 0,
    requireReversal: true,
    alwaysAllowFlatten: true,
    alwaysAllowMoveStop: true,
    allowFirstFewExitsCount: 10,
};
const tslaConfigs: TradingPlans.PlanConfigs = {
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
const tslaTarget: TradingPlans.ExitTargets = {
    initialTargets: {
        priceLevels: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        rrr: [1.5, 1.6, 1.8, 1.9, 2, 2, 3, 3, 3, 3],
        dailyRanges: [2, 2, 2, 2, 2, 3, 3, 3, 3, 3],
    },
    minimumTargets: {
        priceLevels: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        rrr: [1.5, 1.6, 1.8, 1.9, 2, 2, 2, 2, 2, 2],
        dailyRanges: [2, 2, 2, 2, 2, 3, 3, 3, 3, 3],
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
    'COIN',
    'TSLA', 'HOOD'
];

export const stocksTradingPlans: TradingPlans.TradingPlans[] = [
    {
        symbol: 'COIN',
        analysis: {
            newsQualityAndFreshness: 2, gapType: TradingPlans.GapType.Outside,
            relativeVolumeAndCandleSmoothness: 1,
            cleanVwapTrend: 2, dailyChartStory: 2,
            gapSize: 15,
            weeklychart: "up",
            dailyChart: "range breakout",
            hourlyChart: "range breakout",
            premarketChart: "hold above vwap and key level",
            keyLevels: [341.75, 340, 332],
            singleMomentumKeyLevel: 341.75,
            vwapExtensionDistance: 8,
            choppyOpenRangeHigh: 0,
            choppyOpenRangeLow: 0,
        },
        autoFlip: false,
        vwapCorrection: { volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: Constants.marketCaps.COIN,
        atr: {
            average: 15,
            mutiplier: 2,
            minimumMultipler: 1.5,
            maxRisk: 5,
        },
        disableShortIfOpenAbove: 0,
        disableLongIfOpenBelow: 0,
        keyLevels: {
            momentumStartForLong: 340,
            momentumStartForShort: 400,
        },
        summary: `
        best setup is a long after it pullback to vwap or 341.5. 
        `,
        setups: [
            {
                high: "", low: "vwap", title: "gap up and go",
                isChoppy: false,
                range: "above vwap and 341.75", quality: "A",
                entrySummary: `
                gap up a lot, wait for a pullback to vwap or 341.5 to long the next breakout
                `,
                exitTargets: `368 to 370`
            }, {
                high: "341.75", low: "", title: "gap up and go",
                isChoppy: false,
                range: "below vwap and 341.5", quality: "A",
                entrySummary: `
                gap up and fade, short green to red < 60
                `,
                exitTargets: `need to quickly break down 340 to go to 332 gap fill`
            }
        ],
        short: {
            reasons: [
                "there are weaker stocks to short like MSTR which is near below key level",
            ],
            levelMomentumPlan: { targets: stock1Target, planConfigs: coinConfigs },
            falseBreakoutPlan: { price: 0, targets: stock1Target, planConfigs: coinConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock1Target, planConfigs: coinConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, includeSecondNewHigh: true, targets: stock1Target, planConfigs: coinConfigs },
            firstRetracementPlan: { targets: stock1Target, planConfigs: coinConfigs },
            deferredBreakoutPlan: { targets: stock1Target, planConfigs: coinConfigs },
        },
        long: {
            reasons: [
                "consolidation breakout",
            ],
            openDriveContinuation60Plan: { requireOpenBetterThanVwap: true, disableIfOpenWorseThanPrice: 341.75, targets: stock1Target, planConfigs: coinConfigs },
            levelMomentumPlan: { targets: stock1Target, planConfigs: coinConfigs },
            falseBreakoutPlan: { price: 0, targets: stock1Target, planConfigs: coinConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock1Target, planConfigs: coinConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, includeSecondNewHigh: true, targets: stock1Target, planConfigs: coinConfigs },
            firstRetracementPlan: { targets: stock1Target, planConfigs: coinConfigs },
            deferredBreakoutPlan: { targets: stock1Target, planConfigs: coinConfigs },
        },
    },
    {
        symbol: 'HOOD',
        analysis: {
            newsQualityAndFreshness: 1, gapType: TradingPlans.GapType.Outside,
            relativeVolumeAndCandleSmoothness: 2,
            cleanVwapTrend: 0, dailyChartStory: 1,
            gapSize: 2,
            weeklychart: "up",
            dailyChart: "up",
            hourlyChart: "V recovery",
            premarketChart: "rally away above vwap and pullback to below vwap",
            keyLevels: [40.57],
            singleMomentumKeyLevel: 0,
            vwapExtensionDistance: 0,
            choppyOpenRangeHigh: 0,
            choppyOpenRangeLow: 0,
        },
        autoFlip: false,
        vwapCorrection: { volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: Constants.marketCaps.HOOD,
        atr: {
            average: 2,
            mutiplier: 1,
            minimumMultipler: 1,
            maxRisk: 0.75,
        },
        disableShortIfOpenAbove: 0,
        disableLongIfOpenBelow: 0,
        keyLevels: {
            momentumStartForLong: 40,
            momentumStartForShort: 50,
        },
        summary: `
        cannot find a key level on the daily chart, currently in a choppy zone on weekly chart.
        use vwap. need to have a clean breakout/breakdown after pop into vwap or dip into vwap.
        `,
        setups: [
            {
                high: "", low: "43", title: "gap up and go",
                isChoppy: true,
                range: "near above vwap", quality: "B",
                entrySummary: `
                long the breakout after touching vwap
                `,
                exitTargets: `premarket high 43.87`
            }, {
                high: "43", low: "", title: "gap up and fade",
                isChoppy: true,
                range: "near below vwap", quality: "B",
                entrySummary: `
                short the breakdown after pop to vwap
                `,
                exitTargets: `41.3`
            }
        ],
        short: {
            reasons: [
                "gap up and fade",
            ],
            profitTakingFade60Plan: { enableAutoTrigger: false, onlyIfOpenBelow: 42.9, targets: stock2Target, planConfigs: hoodConfigs },
            levelMomentumPlan: { targets: stock2Target, planConfigs: hoodConfigs },
            falseBreakoutPlan: { price: 0, targets: stock2Target, planConfigs: hoodConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock2Target, planConfigs: hoodConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, includeSecondNewHigh: true, targets: stock2Target, planConfigs: hoodConfigs },
            firstRetracementPlan: { targets: stock2Target, planConfigs: hoodConfigs },
            deferredBreakoutPlan: { targets: stock2Target, planConfigs: hoodConfigs },
        },
        long: {
            reasons: [
                "breakout above vwap",
            ],
            openDriveContinuation60Plan: { requireOpenBetterThanVwap: true, disableIfOpenWorseThanPrice: 0, targets: stock2Target, planConfigs: hoodConfigs },
            levelMomentumPlan: { targets: stock2Target, planConfigs: hoodConfigs },
            falseBreakoutPlan: { price: 0, targets: stock2Target, planConfigs: hoodConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock2Target, planConfigs: hoodConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, includeSecondNewHigh: true, targets: stock2Target, planConfigs: hoodConfigs },
            firstRetracementPlan: { targets: stock2Target, planConfigs: hoodConfigs },
            deferredBreakoutPlan: { targets: stock2Target, planConfigs: hoodConfigs },
        },
    },
    {
        symbol: 'TSLA',
        analysis: {
            newsQualityAndFreshness: 1, gapType: TradingPlans.GapType.Outside,
            relativeVolumeAndCandleSmoothness: 1,
            cleanVwapTrend: 2, dailyChartStory: 1,
            gapSize: 2,
            weeklychart: "consolidation at high level",
            dailyChart: "consolidation",
            hourlyChart: "range near top",
            premarketChart: "above vwap",
            keyLevels: [358.1],
            singleMomentumKeyLevel: 358.1,
            vwapExtensionDistance: 3,
            choppyOpenRangeHigh: 0,
            choppyOpenRangeLow: 0,
        },
        autoFlip: false,
        vwapCorrection: { volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: Constants.marketCaps.TSLA,
        atr: {
            average: 5,
            mutiplier: 3,
            minimumMultipler: 2,
            maxRisk: 5,
        },
        disableShortIfOpenAbove: 0,
        disableLongIfOpenBelow: 0,
        keyLevels: {
            momentumStartForLong: 358,
            momentumStartForShort: 362,
        },
        summary: `
        above vwap and yesterday high, look for long.
        `,
        setups: [
            {
                high: "", low: "vwap", title: "gap up and go",
                isChoppy: false,
                range: "above vwap and yesterday high", quality: "A",
                entrySummary: `
                long after dip to vwap or 358
                `,
                exitTargets: `362 first, if that breaks out, much higher`
            },
        ],
        short: {
            reasons: [
                "under 362 rejection",
            ],
            levelMomentumPlan: { targets: tslaTarget, planConfigs: tslaConfigs },
            falseBreakoutPlan: { price: 0, targets: tslaTarget, planConfigs: tslaConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: tslaTarget, planConfigs: tslaConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, includeSecondNewHigh: true, targets: tslaTarget, planConfigs: tslaConfigs },
            firstRetracementPlan: { targets: tslaTarget, planConfigs: tslaConfigs },
            deferredBreakoutPlan: { targets: tslaTarget, planConfigs: tslaConfigs },
        },
        long: {
            reasons: [
                "setting up for big breakout",
            ],
            openDriveContinuation60Plan: {
                requireOpenBetterThanVwap: true, disableIfOpenWorseThanPrice: 0, targets: tslaTarget, planConfigs: tslaConfigs
            },
            levelMomentumPlan: { targets: tslaTarget, planConfigs: tslaConfigs },
            falseBreakoutPlan: { price: 0, targets: tslaTarget, planConfigs: tslaConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: tslaTarget, planConfigs: tslaConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, includeSecondNewHigh: true, targets: tslaTarget, planConfigs: tslaConfigs },
            firstRetracementPlan: { targets: tslaTarget, planConfigs: tslaConfigs },
            deferredBreakoutPlan: { targets: tslaTarget, planConfigs: tslaConfigs },
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
            vwapExtensionDistance: 0,
            choppyOpenRangeHigh: 0,
            choppyOpenRangeLow: 0,
        },
        autoFlip: false,
        vwapCorrection: { volumeSum: 0, tradingSum: 0 },
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