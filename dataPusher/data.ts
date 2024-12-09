import * as TradingPlans from './models';
import * as Constants from './constants';

// futures, momentumSimple, tradeStationEquity, schwab
export const activeProfileName: string = "schwab";
export const tradingSettings: TradingPlans.TradingSettings = {
    equalWeightDivider: 4,
    useSingleOrderForEntry: true,
}
export const defaultSize = 0.28;
const pltrConfigs: TradingPlans.PlanConfigs = {
    size: defaultSize,
    deferTradingInSeconds: 0,
    stopTradingAfterSeconds: 0,
    requireReversal: true,
    alwaysAllowFlatten: true,
    alwaysAllowMoveStop: true,
    allowFirstFewExitsCount: 10,
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
const rddtConfigs: TradingPlans.PlanConfigs = {
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
    allowFirstFewExitsCount: 10,
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
    'PLTR',
    'SMCI',
    'RDDT',
    'TSLA'
];

export const stocksTradingPlans: TradingPlans.TradingPlans[] = [
    {
        symbol: 'PLTR',
        analysis: {
            newsQualityAndFreshness: 1, gapType: TradingPlans.GapType.Outside,
            relativeVolumeAndCandleSmoothness: 2,
            cleanVwapTrend: 1, dailyChartStory: 1,
            gapSize: 5,
            weeklychart: "up",
            dailyChart: "up but extended from short term moving averages",
            hourlyChart: "up",
            premarketChart: "bounce from vwap but now below",
            keyLevels: [76.82],
            singleMomentumKeyLevel: 0,
            vwapExtensionDistance: 1.5,
            choppyOpenRangeHigh: 0,
            choppyOpenRangeLow: 0,
        },
        autoFlip: false,
        vwapCorrection: { volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: Constants.marketCaps.PLTR,
        atr: {
            average: 2.9,
            mutiplier: 1.5,
            minimumMultipler: 1,
            maxRisk: 1.5,
        },
        disableShortIfOpenAbove: 0,
        disableLongIfOpenBelow: 0,
        keyLevels: {
            momentumStartForLong: 76,
            momentumStartForShort: 100,
        },
        summary: `
        a few best setups for short:
        1. open with a push towards premarket high and green to red < 60
        2. open below vwap and green to red < 60
        3. 5 minute keeps pushing and then first new low
        4. open near vwap and makes a open range breakout
        best long setups:
        1. first new high above vwap
        2. open near vwap and makes a open range breakdown
        
        `,
        setups: [
            {
                high: "vwap", low: "", title: "gap up and fade",
                isChoppy: false,
                range: "below vwap", quality: "B",
                entrySummary: `
                green to red < 60
                `,
                exitTargets: `quick out 50%, scale out rest with 1 minute trailing stop. 
                flip long on the first new high`
            },
        ],
        short: {
            reasons: [
                "big rally last friday, profit taking",
            ],
            profitTakingFade60Plan: { enableAutoTrigger: false, onlyIfOpenBelow: 81.35, targets: stock1Target, planConfigs: pltrConfigs },
            levelMomentumPlan: { targets: stock1Target, planConfigs: pltrConfigs },
            falseBreakoutPlan: { price: 82.7, targets: stock1Target, planConfigs: pltrConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock1Target, planConfigs: pltrConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, includeSecondNewHigh: true, targets: stock1Target, planConfigs: pltrConfigs },
            firstRetracementPlan: { targets: stock1Target, planConfigs: pltrConfigs },
            deferredBreakoutPlan: { targets: stock1Target, planConfigs: pltrConfigs },
        },
        long: {
            reasons: [
                "continue momentum",
            ],
            openDriveContinuation60Plan: { requireOpenBetterThanVwap: true, disableIfOpenWorseThanPrice: 0, targets: stock1Target, planConfigs: pltrConfigs },
            levelMomentumPlan: { targets: stock1Target, planConfigs: pltrConfigs },
            falseBreakoutPlan: { price: 0, targets: stock1Target, planConfigs: pltrConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock1Target, planConfigs: pltrConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, includeSecondNewHigh: true, targets: stock1Target, planConfigs: pltrConfigs },
            firstRetracementPlan: { targets: stock1Target, planConfigs: pltrConfigs },
            deferredBreakoutPlan: { targets: stock1Target, planConfigs: pltrConfigs },
        },
    },
    {
        symbol: 'SMCI',
        analysis: {
            newsQualityAndFreshness: 2, gapType: TradingPlans.GapType.Outside,
            relativeVolumeAndCandleSmoothness: 2,
            cleanVwapTrend: 1, dailyChartStory: 1,
            gapSize: 3.5,
            weeklychart: "range",
            dailyChart: "bounce",
            hourlyChart: "range breakout",
            premarketChart: "mixed above vwap",
            keyLevels: [46],
            singleMomentumKeyLevel: 46,
            vwapExtensionDistance: 2,
            choppyOpenRangeHigh: 0,
            choppyOpenRangeLow: 0,
        },
        autoFlip: false,
        vwapCorrection: { volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: Constants.marketCaps.SMCI,
        atr: {
            average: 2,
            mutiplier: 2,
            minimumMultipler: 2,
            maxRisk: 2,
        },
        disableShortIfOpenAbove: 0,
        disableLongIfOpenBelow: 0,
        keyLevels: {
            momentumStartForLong: 46,
            momentumStartForShort: 60,
        },
        summary: `
        gapped above 46, so bullish, but in the resistance area around 50.
        for long, look for first new high after testing 46.
        if open above vwap, look for new high breakout after testing vwap
        for shorts, need to wait for rejection around 50.
        if open between vwap and 46, it's going to be choppy, let it touch both sides first.
        `,
        setups: [
            {
                high: "", low: "vwap", title: "gap up and go",
                isChoppy: false,
                range: "near above vwap", quality: "B",
                entrySummary: `
                red to green < 60
                `,
                exitTargets: `trailing stop`
            },
        ],
        short: {
            reasons: [
                "in resistance",
            ],
            openDriveContinuation60Plan: { requireOpenBetterThanVwap: true, disableIfOpenWorseThanPrice: 46, targets: stock2Target, planConfigs: smciConfigs },
            levelMomentumPlan: { targets: stock2Target, planConfigs: smciConfigs },
            falseBreakoutPlan: { price: 0, targets: stock2Target, planConfigs: smciConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock2Target, planConfigs: smciConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, includeSecondNewHigh: true, targets: stock2Target, planConfigs: smciConfigs },
            firstRetracementPlan: { targets: stock2Target, planConfigs: smciConfigs },
            deferredBreakoutPlan: { targets: stock2Target, planConfigs: smciConfigs },
        },
        long: {
            reasons: [
                "good news",
            ],
            openDriveContinuation60Plan: { requireOpenBetterThanVwap: true, disableIfOpenWorseThanPrice: 0, targets: stock2Target, planConfigs: smciConfigs },
            levelMomentumPlan: { targets: stock2Target, planConfigs: smciConfigs },
            falseBreakoutPlan: { price: 0, targets: stock2Target, planConfigs: smciConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock2Target, planConfigs: smciConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, includeSecondNewHigh: true, targets: stock2Target, planConfigs: smciConfigs },
            firstRetracementPlan: { targets: stock2Target, planConfigs: smciConfigs },
            deferredBreakoutPlan: { targets: stock2Target, planConfigs: smciConfigs },
        },
    },
    {
        symbol: 'RDDT',
        analysis: {
            newsQualityAndFreshness: 1, gapType: TradingPlans.GapType.Outside,
            relativeVolumeAndCandleSmoothness: 1,
            cleanVwapTrend: 1, dailyChartStory: 2,
            gapSize: 7,
            weeklychart: "up",
            dailyChart: "up",
            hourlyChart: "up",
            premarketChart: "mixed",
            keyLevels: [163.72, 171.78, 168.5],
            singleMomentumKeyLevel: 168.5,
            vwapExtensionDistance: 3.5,
            choppyOpenRangeHigh: 0,
            choppyOpenRangeLow: 0,
        },
        autoFlip: false,
        vwapCorrection: { volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: Constants.marketCaps.RDDT,
        atr: {
            average: 8,
            mutiplier: 1,
            minimumMultipler: 1,
            maxRisk: 4,
        },
        disableShortIfOpenAbove: 0,
        disableLongIfOpenBelow: 0,
        keyLevels: {
            momentumStartForLong: 163.72,
            momentumStartForShort: 200,
        },
        summary: `
        low volume, so skip first 60 seconds.
        above vwap, look for long. premarket high breakout 171.78.
        for shorts, need to break below 168.5, then gap fill.
        `,
        setups: [
            {
                high: "", low: "vwap", title: "gap up and go",
                isChoppy: false,
                range: "near above vwap", quality: "A",
                entrySummary: `
                red to green or premarket high breakout
                `,
                exitTargets: `all time high, unlimited, keep some for trailing stops`
            },
        ],
        short: {
            reasons: [
                "gap fill",
            ],
            levelMomentumPlan: { targets: stock3Target, planConfigs: rddtConfigs },
            levelBreakout: { entryPrice: 168.5, targets: stock3Target, planConfigs: rddtConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock3Target, planConfigs: rddtConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, includeSecondNewHigh: true, targets: stock3Target, planConfigs: rddtConfigs },
            firstRetracementPlan: { targets: stock3Target, planConfigs: rddtConfigs },
            deferredBreakoutPlan: { targets: stock3Target, planConfigs: rddtConfigs },
        },
        long: {
            reasons: [
                "AI launch",
            ],
            openDriveContinuation60Plan: { requireOpenBetterThanVwap: true, disableIfOpenWorseThanPrice: 170, targets: stock3Target, planConfigs: rddtConfigs },
            levelMomentumPlan: { targets: stock3Target, planConfigs: rddtConfigs },
            levelBreakout: { entryPrice: 171.78, targets: stock3Target, planConfigs: rddtConfigs },
            falseBreakoutPlan: { price: 0, targets: stock3Target, planConfigs: rddtConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock3Target, planConfigs: rddtConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, includeSecondNewHigh: true, targets: stock3Target, planConfigs: rddtConfigs },
            firstRetracementPlan: { targets: stock3Target, planConfigs: rddtConfigs },
            deferredBreakoutPlan: { targets: stock3Target, planConfigs: rddtConfigs },
        },
    },
    {
        symbol: 'TSLA',
        analysis: {
            newsQualityAndFreshness: 2, gapType: TradingPlans.GapType.Outside,
            relativeVolumeAndCandleSmoothness: 2,
            cleanVwapTrend: 2, dailyChartStory: 1,
            gapSize: 10,
            weeklychart: "up",
            dailyChart: "up",
            hourlyChart: "up",
            premarketChart: "drop below vwap",
            keyLevels: [402.77],
            singleMomentumKeyLevel: 402.77,
            vwapExtensionDistance: 5,
            choppyOpenRangeHigh: 0,
            choppyOpenRangeLow: 0,
        },
        autoFlip: false,
        vwapCorrection: { volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: Constants.marketCaps.TSLA,
        atr: {
            average: 7,
            mutiplier: 2,
            minimumMultipler: 2,
            maxRisk: 4,
        },
        disableShortIfOpenAbove: 0,
        disableLongIfOpenBelow: 0,
        keyLevels: {
            momentumStartForLong: 390,
            momentumStartForShort: 410,
        },
        summary: `
        already rallied last friday, expect a quick profit taking if open with 
        a perfect green to red below vwap
        `,
        setups: [
            {
                high: "vwap", low: "", title: "gap up and fade",
                isChoppy: false,
                range: "near below vwap", quality: "A",
                entrySummary: `
                green to red < 60
                `,
                exitTargets: `390`
            }
        ],
        short: {
            reasons: [
                "profit taking",
            ],
            profitTakingFade60Plan: { enableAutoTrigger: false, onlyIfOpenBelow: 397.8, targets: stock4Target, planConfigs: tslaConfigs },
            levelMomentumPlan: { targets: stock4Target, planConfigs: tslaConfigs },
            falseBreakoutPlan: { price: 0, targets: stock4Target, planConfigs: tslaConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock4Target, planConfigs: tslaConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, includeSecondNewHigh: true, targets: stock4Target, planConfigs: tslaConfigs },
            firstRetracementPlan: { targets: stock4Target, planConfigs: tslaConfigs },
            deferredBreakoutPlan: { targets: stock4Target, planConfigs: tslaConfigs },
        },
        long: {
            reasons: [
                "momentum",
            ],
            levelMomentumPlan: { targets: stock4Target, planConfigs: tslaConfigs },
            falseBreakoutPlan: { price: 0, targets: stock4Target, planConfigs: tslaConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock4Target, planConfigs: tslaConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, includeSecondNewHigh: true, targets: stock4Target, planConfigs: tslaConfigs },
            firstRetracementPlan: { targets: stock4Target, planConfigs: tslaConfigs },
            deferredBreakoutPlan: { targets: stock4Target, planConfigs: tslaConfigs },
        },
    },
];