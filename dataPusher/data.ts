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

const nvoTarget: TradingPlans.ExitTargets = {
    initialTargets: {
        priceLevels: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        rrr: [0.9, 0.95, 1.5, 1.8, 1.85, 1.9, 1.95, 1.95, 1.95, 3],
        dailyRanges: [1, 1, 10, 10, 10, 10, 10, 10, 10, 10],
    },
    minimumTargets: {
        rrr: [0.4, 0.6, 1, 1.5, 1.8, 1.9, 1.9, 1.9, 1.9, 1.9],
        priceLevels: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        dailyRanges: [1, 1, 1, 1, 1.1, 1.2, 1.3, 1.4, 1.5, 1.6],
    },
    wave3BatchIndexStart: 8,
    wave5BatchIndexStart: 9,
    trail5Count: 1,
    trail15Count: 1,
};
const stock2Target: TradingPlans.ExitTargets = {
    initialTargets: {
        priceLevels: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        rrr: [0.9, 0.95, 1.5, 1.8, 1.85, 1.9, 1.95, 1.95, 1.95, 3],
        dailyRanges: [1, 1, 10, 10, 10, 10, 10, 10, 10, 10],
    },
    minimumTargets: {
        rrr: [0.4, 0.6, 1, 1.5, 1.8, 1.9, 1.9, 1.9, 1.9, 1.9],
        priceLevels: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        dailyRanges: [1, 1, 1, 1, 1.1, 1.2, 1.3, 1.4, 1.5, 1.60],
    },
    wave3BatchIndexStart: 8,
    wave5BatchIndexStart: 9,
    trail5Count: 1,
    trail15Count: 1,
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
    wave3BatchIndexStart: 8,
    wave5BatchIndexStart: 9,
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
    wave3BatchIndexStart: 8,
    wave5BatchIndexStart: 9,
    trail5Count: 1,
    trail15Count: 1,
};
export const stockSelections: string[] = [
    'NVO',
    'LLY',
    //'TSLA',
];

export const stocksTradingPlans: TradingPlans.TradingPlans[] = [
    {
        symbol: 'NVO',
        analysis: {
            newsQualityAndFreshness: 1, gapType: TradingPlans.GapType.Outside,
            relativeVolumeAndCandleSmoothness: 1,
            cleanVwapTrend: 2, dailyChartStory: 1,
        },
        autoFlip: false,
        vwapCorrection: { volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: Constants.marketCaps.NVO,
        atr: {
            average: 2.6,
            mutiplier: 1.5,
            minimumMultipler: 0.8,
            maxRisk: 2,
        },
        disableShortIfOpenAbove: 0,
        disableLongIfOpenBelow: 0,
        keyLevels: {
            momentumStartForLong: 145,
            momentumStartForShort: 145,
        },
        summary: `
        gapped down $5 which is 2 ATR. 
        strong daily chart but had a bad news and gap down. for short, let it open with a few pops and then 
        short the first breakdown. automate first new low. 
        the stock can do a range day today from 140 to 145. 
        for long, if open with a flush down, near 140 and red to green, ok to go long. first target is 142
        this gap down can trigger trailing stop, especially for LLY
        gap down and already bounced, short only now. now can add gap and go < 60, because it's near vwap
        above vwap now, cancel first 60 seconds. 
        `,
        short: {
            reasons: [
                "bearish news, below vwap in premarket",
                "gap down below recent range"
            ],
            // openDriveContinuation60Plan: { targets: nvoTarget, planConfigs: stock1Configs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: nvoTarget, planConfigs: stock1Configs },
            firstNewHighPlan: { enableAutoTrigger: true, includeSecondNewHigh: true, targets: nvoTarget, planConfigs: stock1Configs },
            firstRetracementPlan: { targets: nvoTarget, planConfigs: stock1Configs },
        },
        long: {
            reasons: [
                "strong daily chart, first dip can get bought up",
                "gap down near 140 support"
            ],
            //redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: nvoTarget, planConfigs: stock1Configs },
            //firstNewHighPlan: { enableAutoTrigger: false, includeSecondNewHigh: true, targets: nvoTarget, planConfigs: stock1Configs },
            //firstRetracementPlan: { targets: nvoTarget, planConfigs: stock1Configs },
        },
    },
    {
        symbol: 'LLY',
        analysis: {
            newsQualityAndFreshness: 1, gapType: TradingPlans.GapType.Outside,
            relativeVolumeAndCandleSmoothness: 1,
            cleanVwapTrend: 2, dailyChartStory: 1,
        },
        autoFlip: false,
        vwapCorrection: { volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: Constants.marketCaps.LLY,
        atr: {
            average: 16,
            mutiplier: 1.5,
            minimumMultipler: 1,
            maxRisk: 8,
        },
        disableShortIfOpenAbove: 0,
        disableLongIfOpenBelow: 0,
        keyLevels: {
            momentumStartForLong: 910,
            momentumStartForShort: 910,
        },
        summary: `
        same summary as NVO
        `,
        short: {
            reasons: [
                "same reason as NVO",
            ],
            //openDriveContinuation60Plan: { targets: stock2Target, planConfigs: stock2Configs },
            //firstBreakoutPlan: { targets: stock2Target, planConfigs: stock2Configs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock2Target, planConfigs: stock2Configs },
            firstNewHighPlan: { enableAutoTrigger: true, includeSecondNewHigh: true, targets: stock2Target, planConfigs: stock2Configs },
            firstRetracementPlan: { targets: stock2Target, planConfigs: stock2Configs },
        },
        long: {
            reasons: [
                "same reason as NVO",
            ],
            //firstBreakoutPlan: { targets: stock2Target, planConfigs: stock2Configs },
            //redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock2Target, planConfigs: stock2Configs },
            //firstNewHighPlan: { enableAutoTrigger: false, includeSecondNewHigh: true, targets: stock2Target, planConfigs: stock2Configs },
            //firstRetracementPlan: { targets: stock2Target, planConfigs: stock2Configs },
        },
    },
    {
        symbol: 'TSLA',
        analysis: {
            newsQualityAndFreshness: 2, gapType: TradingPlans.GapType.Outside,
            relativeVolumeAndCandleSmoothness: 2,
            cleanVwapTrend: 2, dailyChartStory: 2,
        },
        autoFlip: false,
        vwapCorrection: { volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: Constants.marketCaps.TSLA,
        atr: {
            average: 8,
            mutiplier: 1,
            minimumMultipler: 0.5,
            maxRisk: 2,
        },
        disableShortIfOpenAbove: 0,
        disableLongIfOpenBelow: 0,
        keyLevels: {
            momentumStartForLong: 0,
            momentumStartForShort: 0,
        },
        summary: `
        good delivery numbers, already made a large move in premarket
        need to wait for a big pullback to go long
        `,
        short: {
            reasons: [
                "gap up too much",
                "extended from vwap"
            ],
            profitTakingExhaust60Plan: { targets: stock3Target, planConfigs: stock3Configs },
            firstBreakoutPlan: { targets: stock3Target, planConfigs: stock3Configs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock3Target, planConfigs: stock3Configs },
            firstNewHighPlan: { enableAutoTrigger: false, includeSecondNewHigh: true, targets: stock3Target, planConfigs: stock3Configs },
            firstRetracementPlan: { targets: stock3Target, planConfigs: stock3Configs },
        },
        long: {
            reasons: [
                "good news, breakout on daily chart",
            ],
            firstBreakoutPlan: { targets: stock3Target, planConfigs: stock3Configs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock3Target, planConfigs: stock3Configs },
            firstNewHighPlan: { enableAutoTrigger: false, includeSecondNewHigh: true, targets: stock3Target, planConfigs: stock3Configs },
            firstRetracementPlan: { targets: stock3Target, planConfigs: stock3Configs },
        },
    },
];