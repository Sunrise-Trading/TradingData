import * as TradingPlans from './models';
import * as Constants from './constants';

// futures, momentumSimple, tradeStationEquity, schwab
export const activeProfileName: string = "schwab";
export const tradingSettings: TradingPlans.TradingSettings = {
    equalWeightDivider: 4,
    useSingleOrderForEntry: true,
}
const stock1Configs: TradingPlans.PlanConfigs = {
    size: 0.24,
    deferTradingInSeconds: 0,
    stopTradingAfterSeconds: 0,
    requireReversal: true,
    alwaysAllowStopOutOrFlatten: false,
    allowEarlyExits: false,
    allowFirstFewExitsCount: 2,
};
const stock2Configs: TradingPlans.PlanConfigs = {
    size: 0.24,
    deferTradingInSeconds: 0,
    stopTradingAfterSeconds: 0,
    requireReversal: true,
    alwaysAllowStopOutOrFlatten: false,
    allowEarlyExits: false,
    allowFirstFewExitsCount: 2,
};
const stock3Configs: TradingPlans.PlanConfigs = {
    size: 0.24,
    deferTradingInSeconds: 0,
    stopTradingAfterSeconds: 0,
    requireReversal: true,
    alwaysAllowStopOutOrFlatten: false,
    allowEarlyExits: false,
    allowFirstFewExitsCount: 2,
};
const stock4Configs: TradingPlans.PlanConfigs = {
    size: 0.24,
    deferTradingInSeconds: 0,
    stopTradingAfterSeconds: 0,
    requireReversal: true,
    alwaysAllowStopOutOrFlatten: false,
    allowEarlyExits: false,
    allowFirstFewExitsCount: 2,
};

const crwd: TradingPlans.ExitTargets = {
    initialTargets: {
        priceLevels: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        rrr: [0.9, 0.95, 1.5, 1.8, 1.85, 1.9, 1.95, 1.95, 1.95, 3],
        dailyRanges: [1, 1, 10, 10, 10, 10, 10, 10, 10, 10],
    },
    minimumTargets: {
        rrr: [0.4, 0.6, 1, 1.5, 1.8, 1.9, 1.9, 1.9, 1.9, 1.9],
        priceLevels: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        dailyRanges: [0.5, 0.5, 0.5, 0.5, 0.5, 0.8, 0.8, 0.9, 1, 1],
    },
    wave3BatchIndexStart: 10,
    wave5BatchIndexStart: 10,
    trail5Count: 10,
    trail15Count: 10,
};
const djtTarget: TradingPlans.ExitTargets = {
    initialTargets: {
        priceLevels: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        rrr: [0.9, 0.95, 1.5, 1.8, 1.85, 1.9, 1.95, 1.95, 1.95, 3],
        dailyRanges: [1, 1, 10, 10, 10, 10, 10, 10, 10, 10],
    },
    minimumTargets: {
        rrr: [0.4, 0.6, 1, 1.5, 1.8, 1.9, 1.9, 1.9, 1.9, 1.9],
        priceLevels: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        dailyRanges: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    },
    wave3BatchIndexStart: 10,
    wave5BatchIndexStart: 10,
    trail5Count: 10,
    trail15Count: 10,
};
const stock3Target: TradingPlans.ExitTargets = {
    initialTargets: {
        priceLevels: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        rrr: [0.9, 0.95, 1.5, 1.8, 1.85, 1.9, 1.95, 1.95, 1.95, 3],
        dailyRanges: [1, 1, 10, 10, 10, 10, 10, 10, 10, 10],
    },
    minimumTargets: {
        rrr: [0.4, 0.6, 1, 1.5, 1.8, 1.9, 1.9, 1.9, 1.9, 1.9],
        priceLevels: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        dailyRanges: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    },
    wave3BatchIndexStart: 10,
    wave5BatchIndexStart: 10,
    trail5Count: 10,
    trail15Count: 10,
};
const stock4Target: TradingPlans.ExitTargets = {
    initialTargets: {
        priceLevels: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        rrr: [0.9, 0.95, 1.5, 1.8, 1.85, 1.9, 1.95, 1.95, 1.95, 3],
        dailyRanges: [1, 1, 10, 10, 10, 10, 10, 10, 10, 10],
    },
    minimumTargets: {
        rrr: [0.4, 0.6, 1, 1.5, 1.8, 1.9, 1.9, 1.9, 1.9, 1.9],
        priceLevels: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        dailyRanges: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    },
    wave3BatchIndexStart: 10,
    wave5BatchIndexStart: 10,
    trail5Count: 10,
    trail15Count: 10,
};
export const stockSelections: string[] = [
    'CRWD',
    //'RTO',
    'DJT',
    'NVDA',
];

export const stocksTradingPlans: TradingPlans.TradingPlans[] = [
    {
        symbol: 'CRWD',
        analysis: {
            newsQualityAndFreshness: 1, gapType: TradingPlans.GapType.Outside,
            relativeVolumeAndCandleSmoothness: 1,
            cleanVwapTrend: 2, dailyChartStory: 2,
            gapSize: 15,
            weeklychart: "sell off from top, dip near previous range low",
            dailyChart: "gap down below yesterday low. yesterday volume becomes resistance",
            hourlyChart: "gap down and then bounce, now faded again",
            premarketChart: "below vwap all time",
            keyLevels: [290.1, 270, 292.79],
        },
        autoFlip: false,
        vwapCorrection: { volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: Constants.marketCaps.CRWD,
        atr: {
            average: 13,
            mutiplier: 1.5,
            minimumMultipler: 0.7,
        },
        disableShortIfOpenAbove: 0,
        disableLongIfOpenBelow: 290,
        keyLevels: {
            momentumStartForLong: 293,
            momentumStartForShort: 293,
        },
        summary: `
        already bounced after a gap down last friday, if friday low is lost, continue to sell off. 
        if open below 290, trade initial bearish momentum. first 60 seconds short didn't work last friday. 
        but it can work today since it failed last time. so still enable first 60 seconds green to red. 
        but it needs to pop into 290 and then short green to red. and it needs to open below 290.
        due to initial momentum being bearish, and friday volume becomes resistance, go long will struggle a lot.
        so only plan short.
        `,
        short: {
            reasons: [
                "already bounced and lost the low of friday again",
                "firms downgrade and price cuts"
            ],
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: crwd, planConfigs: stock1Configs },
            firstNewHighPlan: { enableAutoTrigger: false, includeSecondNewHigh: true, targets: crwd, planConfigs: stock1Configs },
            firstRetracementPlan: { targets: crwd, planConfigs: stock1Configs },
        },
        long: {
            reasons: [
                "near support range on daily chart, but there's enough room to go down at least $10",
                "gapped down 1 ATR"
            ],
        },
    },
    {
        symbol: 'DJT',
        analysis: {
            newsQualityAndFreshness: 2, gapType: TradingPlans.GapType.Inside,
            relativeVolumeAndCandleSmoothness: 0,
            cleanVwapTrend: 2, dailyChartStory: 0,
            gapSize: 0.25,
            weeklychart: "inside range 20 and 55",
            dailyChart: "inside recent range of 30 and 45",
            hourlyChart: "pop and fade each time, this time the pop is very weak, just 37 and couldn't hold premarket",
            premarketChart: "popped lower and below vwap all time",
            keyLevels: [35],
        },
        autoFlip: false,
        vwapCorrection: { volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: Constants.marketCaps.DJT,
        atr: {
            average: 3.96,
            mutiplier: 1,
            minimumMultipler: 1,
        },
        disableShortIfOpenAbove: 0,
        disableLongIfOpenBelow: 0,
        keyLevels: {
            momentumStartForLong: 35.75,
            momentumStartForShort: 35,
        },
        summary: `
        currently inside range 35-35.75, within this range is no trade. with initial momentum being bearish, first look for shorts
        if it breaks below 35
        `,
        short: {
            reasons: [
                "popped lower and fade",
                "good news can't pump the stock"
            ],
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: djtTarget, planConfigs: stock2Configs },
            firstNewHighPlan: { enableAutoTrigger: false, includeSecondNewHigh: true, targets: djtTarget, planConfigs: stock2Configs },
            firstRetracementPlan: { targets: djtTarget, planConfigs: stock2Configs },
        },
        long: {
            reasons: [
                "good news, can rally in later today",
                ""
            ],
            firstBreakoutPlan: { targets: djtTarget, planConfigs: stock2Configs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: djtTarget, planConfigs: stock2Configs },
            firstNewHighPlan: { enableAutoTrigger: false, includeSecondNewHigh: true, targets: djtTarget, planConfigs: stock2Configs },
            firstRetracementPlan: { targets: djtTarget, planConfigs: stock2Configs },
        },
    },
    {
        symbol: 'NVDA',
        analysis: {
            newsQualityAndFreshness: 1, gapType: TradingPlans.GapType.Inside,
            relativeVolumeAndCandleSmoothness: 1,
            cleanVwapTrend: 1, dailyChartStory: 0,
            gapSize: 0,
            weeklychart: "consolidation",
            dailyChart: "inside a 3 day consolidation",
            hourlyChart: "inside a 3 day consolidation",
            premarketChart: "above vwap but just dipped",
            keyLevels: [120],
        },
        autoFlip: false,
        vwapCorrection: { volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: Constants.marketCaps.NVDA,
        atr: {
            average: 0,
            mutiplier: 0,
            minimumMultipler: 0,
        },
        disableShortIfOpenAbove: 0,
        disableLongIfOpenBelow: 0,
        keyLevels: {
            momentumStartForLong: 120,
            momentumStartForShort: 120,
        },
        summary: `
        watch for later in the day breakout
        `,
        short: {
            reasons: [
                "none",
                ""
            ],
        },
        long: {
            reasons: [
                "china ships",
                ""
            ],
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock3Target, planConfigs: stock3Configs },
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
        },
        autoFlip: false,
        vwapCorrection: { volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: 0,
        atr: {
            average: 0,
            mutiplier: 0,
            minimumMultipler: 0,
        },
        disableShortIfOpenAbove: 0,
        disableLongIfOpenBelow: 0,
        keyLevels: {
            momentumStartForLong: 0,
            momentumStartForShort: 0,
        },
        summary: `
        
        `,
        short: {
            reasons: [
                "",
                ""
            ],
            firstBreakoutPlan: { targets: stock4Target, planConfigs: stock4Configs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock4Target, planConfigs: stock4Configs },
            firstNewHighPlan: { enableAutoTrigger: false, includeSecondNewHigh: true, targets: stock4Target, planConfigs: stock4Configs },
            firstRetracementPlan: { targets: stock4Target, planConfigs: stock4Configs },
        },
        long: {
            reasons: [
                "",
                ""
            ],
            firstBreakoutPlan: { targets: stock4Target, planConfigs: stock4Configs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock4Target, planConfigs: stock4Configs },
            firstNewHighPlan: { enableAutoTrigger: false, includeSecondNewHigh: true, targets: stock4Target, planConfigs: stock4Configs },
            firstRetracementPlan: { targets: stock4Target, planConfigs: stock4Configs },
        },
    },
];