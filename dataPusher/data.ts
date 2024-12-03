import * as TradingPlans from './models';
import * as Constants from './constants';

// futures, momentumSimple, tradeStationEquity, schwab
export const activeProfileName: string = "schwab";
export const tradingSettings: TradingPlans.TradingSettings = {
    equalWeightDivider: 4,
    useSingleOrderForEntry: true,
}
export const defaultSize = 0.28;
const tConfigs: TradingPlans.PlanConfigs = {
    size: defaultSize,
    deferTradingInSeconds: 0,
    stopTradingAfterSeconds: 0,
    requireReversal: true,
    alwaysAllowFlatten: true,
    alwaysAllowMoveStop: true,
    allowFirstFewExitsCount: 5,
};
const tslaConfigs: TradingPlans.PlanConfigs = {
    size: defaultSize,
    deferTradingInSeconds: 0,
    stopTradingAfterSeconds: 0,
    requireReversal: true,
    alwaysAllowFlatten: true,
    alwaysAllowMoveStop: true,
    allowFirstFewExitsCount: 5,
};
const smciConfigs: TradingPlans.PlanConfigs = {
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
    'T', 'TSLA',
    'SMCI'
];

export const stocksTradingPlans: TradingPlans.TradingPlans[] = [
    {
        symbol: 'T',
        analysis: {
            newsQualityAndFreshness: 2, gapType: TradingPlans.GapType.Outside,
            relativeVolumeAndCandleSmoothness: 1,
            cleanVwapTrend: 2, dailyChartStory: 2,
            gapSize: 0.5,
            weeklychart: "up",
            dailyChart: "up",
            hourlyChart: "range",
            premarketChart: "hold above vwap",
            keyLevels: [23.38, 23.15],
            singleMomentumKeyLevel: 23.38,
            vwapExtensionDistance: 0.3,
            choppyOpenRangeHigh: 0,
            choppyOpenRangeLow: 0,
        },
        autoFlip: false,
        vwapCorrection: { volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: Constants.marketCaps.T,
        atr: {
            average: 0.39,
            mutiplier: 1.5,
            minimumMultipler: 1,
            maxRisk: 0.3,
        },
        disableShortIfOpenAbove: 0,
        disableLongIfOpenBelow: 0,
        keyLevels: {
            momentumStartForLong: 23.15,
            momentumStartForShort: 23.57,
        },
        summary: `
        the best setup is open above all time high 23.38, long the red to green < 60.
        not going to short green to red < 60 unless it opens below yesterday high 23.15.
        `,
        setups: [
            {
                high: "", low: "23.38", title: "gap and go",
                isChoppy: false,
                range: "above all time high", quality: "A",
                entrySummary: `
                red to green < 60
                `,
                exitTargets: `1-2 ATR`
            }, {
                high: "23.38", low: "vwap", title: "chop",
                isChoppy: true,
                range: "between 23.38 and vwap", quality: "B",
                entrySummary: `
                still mostly bullish.for both long and short, let it pop to 23.38.
                Long: take the next breakout after 1 minute close above 23.38
                Short: short the breakdown after a false breakout of 23.38
                `,
                exitTargets: `gap fill for short, 1-2 ATR for long.`
            }
        ],
        short: {
            reasons: [
                "all time high rejection",
            ],
            openDriveContinuation60Plan: { requireOpenBetterThanVwap: true, disableIfOpenWorseThanPrice: 23.15, targets: stock1Target, planConfigs: tConfigs },
            levelMomentumPlan: { targets: stock1Target, planConfigs: tConfigs },
            falseBreakoutPlan: { price: 0, targets: stock1Target, planConfigs: tConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock1Target, planConfigs: tConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, includeSecondNewHigh: true, targets: stock1Target, planConfigs: tConfigs },
            firstRetracementPlan: { targets: stock1Target, planConfigs: tConfigs },
            deferredBreakoutPlan: { targets: stock1Target, planConfigs: tConfigs },
        },
        long: {
            reasons: [
                "all time high breakout",
            ],
            openDriveContinuation60Plan: { requireOpenBetterThanVwap: true, disableIfOpenWorseThanPrice: 23.38, targets: stock1Target, planConfigs: tConfigs },
            levelMomentumPlan: { targets: stock1Target, planConfigs: tConfigs },
            falseBreakoutPlan: { price: 0, targets: stock1Target, planConfigs: tConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock1Target, planConfigs: tConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, includeSecondNewHigh: true, targets: stock1Target, planConfigs: tConfigs },
            firstRetracementPlan: { targets: stock1Target, planConfigs: tConfigs },
            deferredBreakoutPlan: { targets: stock1Target, planConfigs: tConfigs },
        },
    },
    {
        symbol: 'TSLA',
        analysis: {
            newsQualityAndFreshness: 2, gapType: TradingPlans.GapType.Outside,
            relativeVolumeAndCandleSmoothness: 1,
            cleanVwapTrend: 1, dailyChartStory: 1,
            gapSize: 6,
            weeklychart: "range",
            dailyChart: "range",
            hourlyChart: "range",
            premarketChart: "below vwap",
            keyLevels: [351.15],
            singleMomentumKeyLevel: 351.15,
            vwapExtensionDistance: 3.5,
            choppyOpenRangeHigh: 0,
            choppyOpenRangeLow: 0,
        },
        autoFlip: false,
        vwapCorrection: { volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: Constants.marketCaps.TSLA,
        atr: {
            average: 5,
            mutiplier: 2,
            minimumMultipler: 1,
            maxRisk: 2,
        },
        disableShortIfOpenAbove: 0,
        disableLongIfOpenBelow: 0,
        keyLevels: {
            momentumStartForLong: 348,
            momentumStartForShort: 360,
        },
        summary: `
        need to breakdown below yesterday low to gap fill. 
        best setup is open below 351.15, short after a pop green to red < 60
        otherwise, need to wait for it to breakdown below 351.15 and look for a short pattern
        
        `,
        setups: [
            {
                high: "351.15", low: "", title: "gap down selloff",
                isChoppy: false,
                range: "below yesterday low", quality: "A",
                entrySummary: `
                green to red < 60
                `,
                exitTargets: `348`
            }, {
                high: "vwap", low: "351.15", title: "chop",
                isChoppy: true,
                range: "above 351.15", quality: "B",
                entrySummary: `
                choppy open. wait for a confirmed breakdown of 351.15. 
                let 1 candle open below, short the next breakdown. if retraces, make a quick cut.
                `,
                exitTargets: `348, 345`
            }
        ],
        short: {
            reasons: [
                "gap down below yesterday low",
            ],
            openDriveContinuation60Plan: { requireOpenBetterThanVwap: true, disableIfOpenWorseThanPrice: 351.15, targets: stock2Target, planConfigs: tslaConfigs },
            levelMomentumPlan: { targets: stock2Target, planConfigs: tslaConfigs },
            falseBreakoutPlan: { price: 0, targets: stock2Target, planConfigs: tslaConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock2Target, planConfigs: tslaConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, includeSecondNewHigh: true, targets: stock2Target, planConfigs: tslaConfigs },
            firstRetracementPlan: { targets: stock2Target, planConfigs: tslaConfigs },
            deferredBreakoutPlan: { targets: stock2Target, planConfigs: tslaConfigs },
        },
        long: {
            reasons: [
                "range trading within yesterday range",
            ],
            levelMomentumPlan: { targets: stock2Target, planConfigs: tslaConfigs },
            falseBreakoutPlan: { price: 0, targets: stock2Target, planConfigs: tslaConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock2Target, planConfigs: tslaConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, includeSecondNewHigh: true, targets: stock2Target, planConfigs: tslaConfigs },
            firstRetracementPlan: { targets: stock2Target, planConfigs: tslaConfigs },
            deferredBreakoutPlan: { targets: stock2Target, planConfigs: tslaConfigs },
        },
    },
    {
        symbol: 'SMCI',
        analysis: {
            newsQualityAndFreshness: 0, gapType: TradingPlans.GapType.Outside,
            relativeVolumeAndCandleSmoothness: 2,
            cleanVwapTrend: 2, dailyChartStory: 2,
            gapSize: 1,
            weeklychart: "down",
            dailyChart: "bounce",
            hourlyChart: "up",
            premarketChart: "fade below vwap",
            keyLevels: [44.15],
            singleMomentumKeyLevel: 44.15,
            vwapExtensionDistance: 2,
            choppyOpenRangeHigh: 0,
            choppyOpenRangeLow: 0,
        },
        autoFlip: false,
        vwapCorrection: { volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: Constants.marketCaps.SMCI,
        atr: {
            average: 4,
            mutiplier: 2,
            minimumMultipler: 1,
            maxRisk: 2,
        },
        disableShortIfOpenAbove: 0,
        disableLongIfOpenBelow: 0,
        keyLevels: {
            momentumStartForLong: 40,
            momentumStartForShort: 46,
        },
        summary: `
        second day play, so focus on best opening setup, open below both vwap and 44.15, 
        short after a pop into those levels. if open with a flush down, don't chase. because it's already 2nd day.
        if open above 44.15, look for confirmed breakdown 44.15, or confirmed breakout of vwap.
        `,
        setups: [
            {
                high: "44.15", low: "", title: "short first breakdown",
                isChoppy: false,
                range: "below 44.15", quality: "A",
                entrySummary: `
                green to red < 60
                `,
                exitTargets: `42.5, should be range down, use buy low sell high`
            },
        ],
        short: {
            reasons: [
                "gap down selloff",
            ],
            openDriveContinuation60Plan: {
                requireOpenBetterThanVwap: true, disableIfOpenWorseThanPrice: 44.15, targets: stock3Target, planConfigs: smciConfigs
            },
            levelMomentumPlan: { targets: stock3Target, planConfigs: smciConfigs },
            falseBreakoutPlan: { price: 0, targets: stock3Target, planConfigs: smciConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock3Target, planConfigs: smciConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, includeSecondNewHigh: true, targets: stock3Target, planConfigs: smciConfigs },
            firstRetracementPlan: { targets: stock3Target, planConfigs: smciConfigs },
            deferredBreakoutPlan: { targets: stock3Target, planConfigs: smciConfigs },
        },
        long: {
            reasons: [
                "hold above yesterday high",
            ],
            levelMomentumPlan: { targets: stock3Target, planConfigs: smciConfigs },
            falseBreakoutPlan: { price: 0, targets: stock3Target, planConfigs: smciConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock3Target, planConfigs: smciConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, includeSecondNewHigh: true, targets: stock3Target, planConfigs: smciConfigs },
            firstRetracementPlan: { targets: stock3Target, planConfigs: smciConfigs },
            deferredBreakoutPlan: { targets: stock3Target, planConfigs: smciConfigs },
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