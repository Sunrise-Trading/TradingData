import * as TradingPlans from './models';
import * as Constants from './constants';

// futures, momentumSimple, tradeStationEquity, schwab
export const activeProfileName: string = "schwab";
export const tradingSettings: TradingPlans.TradingSettings = {
    equalWeightDivider: 4,
    useSingleOrderForEntry: true,
}
const dalConfigs: TradingPlans.PlanConfigs = {
    size: 0.24,
    deferTradingInSeconds: 119,
    stopTradingAfterSeconds: 0,
    requireReversal: true,
    alwaysAllowStopOutOrFlatten: false,
    allowEarlyExits: false,
    allowFirstFewExitsCount: 2,
};
const qsConfigs: TradingPlans.PlanConfigs = {
    size: 0.24,
    deferTradingInSeconds: 0,
    stopTradingAfterSeconds: 0,
    requireReversal: true,
    alwaysAllowStopOutOrFlatten: false,
    allowEarlyExits: false,
    allowFirstFewExitsCount: 2,
};
const sounConfigs: TradingPlans.PlanConfigs = {
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

const dalTarget: TradingPlans.ExitTargets = {
    initialTargets: {
        priceLevels: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        rrr: [0.9, 0.95, 1, 1, 1, 1.9, 1.95, 1.95, 1.95, 3],
        dailyRanges: [1, 1, 10, 10, 10, 10, 10, 10, 10, 10],
    },
    minimumTargets: {
        rrr: [0.4, 0.6, 1, 1, 1, 1, 1.5, 1.9, 1.9, 1.9],
        priceLevels: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        dailyRanges: [1, 1, 1, 1, 1, 1, 1, 1, 1.5, 1.5],
    },
    wave3BatchIndexStart: 10,
    wave5BatchIndexStart: 10,
    trail5Count: 1,
    trail15Count: 1,
};
const qsTarget: TradingPlans.ExitTargets = {
    initialTargets: {
        priceLevels: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        rrr: [0.9, 0.95, 1.5, 1.8, 1.85, 1.9, 1.95, 1.95, 1.95, 3],
        dailyRanges: [1, 1, 1, 1, 1.5, 1.5, 2, 2, 2, 2],
    },
    minimumTargets: {
        rrr: [0.4, 0.6, 1, 1.5, 1.8, 1.9, 1.9, 1.9, 1.9, 1.9],
        priceLevels: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        dailyRanges: [1, 1, 1, 1, 1.5, 1.5, 2, 2, 2, 2],
    },
    wave3BatchIndexStart: 10,
    wave5BatchIndexStart: 10,
    trail5Count: 1,
    trail15Count: 1,
};
const sounTarget: TradingPlans.ExitTargets = {
    initialTargets: {
        priceLevels: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        rrr: [0.9, 0.95, 1.5, 1.8, 1.85, 1.9, 1.95, 1.95, 1.95, 3],
        dailyRanges: [1, 1, 10, 10, 10, 10, 10, 10, 10, 10],
    },
    minimumTargets: {
        rrr: [0.4, 0.6, 1, 1.5, 1.8, 1.9, 1.9, 1.9, 1.9, 1.9],
        priceLevels: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        dailyRanges: [1, 1, 1, 1, 1.5, 1.5, 2, 2, 2, 2],
    },
    wave3BatchIndexStart: 10,
    wave5BatchIndexStart: 10,
    trail5Count: 1,
    trail15Count: 1,
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
    trail5Count: 1,
    trail15Count: 1,
};
export const stockSelections: string[] = [
    'DAL',
    'QS',
    'SOUN'
];

export const stocksTradingPlans: TradingPlans.TradingPlans[] = [
    {
        symbol: 'DAL',
        analysis: {
            newsQualityAndFreshness: 2, gapType: TradingPlans.GapType.Outside,
            relativeVolumeAndCandleSmoothness: 2,
            cleanVwapTrend: 1, dailyChartStory: 1,
        },
        autoFlip: false,
        vwapCorrection: { volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: Constants.marketCaps.DAL,
        atr: {
            average: 1.17,
            mutiplier: 1.5,
            minimumMultipler: 1,
        },
        disableShortIfOpenAbove: 0,
        disableLongIfOpenBelow: 0,
        keyLevels: {
            momentumStartForLong: 48,
            momentumStartForShort: 48,
        },
        summary: `
        gap down near 200MA support, cannot short until a major pop. disable trading for the first 2 minutes.
        `,
        short: {
            reasons: [
                "earnings miss, lower guidance for Q3",
                "bearish daily chart and during premarket"
            ],
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: dalTarget, planConfigs: dalConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, includeSecondNewHigh: true, targets: dalTarget, planConfigs: dalConfigs },
            firstRetracementPlan: { targets: dalTarget, planConfigs: dalConfigs },
        },
        long: {
            reasons: [
                "gap down into 200MA support",
            ],
        },
    },
    {
        symbol: 'QS',
        analysis: {
            newsQualityAndFreshness: 1, gapType: TradingPlans.GapType.Outside,
            relativeVolumeAndCandleSmoothness: 2,
            cleanVwapTrend: 2, dailyChartStory: 2,
        },
        autoFlip: false,
        vwapCorrection: { volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: Constants.marketCaps.QS,
        atr: {
            average: 0.24,
            mutiplier: 2,
            minimumMultipler: 1,
        },
        disableShortIfOpenAbove: 0,
        disableLongIfOpenBelow: 0,
        keyLevels: {
            momentumStartForLong: 8,
            momentumStartForShort: 8,
        },
        summary: `
        largest gapper today and very high volume, must trade it today. gapped up too much into resistance, 
        not good potential for long. shorts are better once lost $7.
        if hold vwap before open, only short after losing $7.
        if lost vwap before open, short green to red < 60 or first breakdown.
        `,
        short: {
            reasons: [
                "gap up too much into resistance",
                "sold off from premarket high"
            ],
            profitTakingFade60Plan: { enableAutoTrigger: false, onlyIfOpenBelow: 7, targets: qsTarget, planConfigs: qsConfigs },
            levelBreakout: { entryPrice: 7, targets: qsTarget, planConfigs: qsConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: qsTarget, planConfigs: qsConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, includeSecondNewHigh: true, targets: qsTarget, planConfigs: qsConfigs },
            firstRetracementPlan: { targets: qsTarget, planConfigs: qsConfigs },
        },
        long: {
            reasons: [
                "positive news",
            ],
        },
    },
    {
        symbol: 'SOUN',
        analysis: {
            newsQualityAndFreshness: 0, gapType: TradingPlans.GapType.Outside,
            relativeVolumeAndCandleSmoothness: 2,
            cleanVwapTrend: 2, dailyChartStory: 2,
        },
        autoFlip: false,
        vwapCorrection: { volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: Constants.marketCaps.SOUN,
        atr: {
            average: 0.29,
            mutiplier: 1.5,
            minimumMultipler: 2,
        },
        disableShortIfOpenAbove: 0,
        disableLongIfOpenBelow: 0,
        keyLevels: {
            momentumStartForLong: 6,
            momentumStartForShort: 6,
        },
        summary: `
        overextended. already big rally from yesterday, this is the profit taking short like early this week. 
        gap up on no new news, just the same news from yesterday. prepare all shorts
        `,
        short: {
            reasons: [
                "overextended already big rally from yesterday, this is the profit taking short like early this week.",
                "gap up on no new news, just the same news from yesterday.",

            ],
            profitTakingFade60Plan: { enableAutoTrigger: false, onlyIfOpenBelow: 5.55, targets: sounTarget, planConfigs: sounConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: sounTarget, planConfigs: sounConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, includeSecondNewHigh: true, targets: sounTarget, planConfigs: sounConfigs },
            firstRetracementPlan: { targets: sounTarget, planConfigs: sounConfigs },
            levelBreakout: { entryPrice: 5.45, targets: sounTarget, planConfigs: sounConfigs }
        },
        long: {
            reasons: [
                "no",
            ],
            //firstBreakoutPlan: { targets: sounTarget, planConfigs: sounConfigs },
            //redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: sounTarget, planConfigs: sounConfigs },
            //firstNewHighPlan: { enableAutoTrigger: false, includeSecondNewHigh: true, targets: sounTarget, planConfigs: sounConfigs },
            //firstRetracementPlan: { targets: sounTarget, planConfigs: sounConfigs },
        },
    },
    {
        symbol: 'stock4',
        analysis: {
            newsQualityAndFreshness: -1, gapType: TradingPlans.GapType.Unknown,
            relativeVolumeAndCandleSmoothness: -1,
            cleanVwapTrend: -1, dailyChartStory: -1,
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