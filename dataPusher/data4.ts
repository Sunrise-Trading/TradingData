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

const intcTarget: TradingPlans.ExitTargets = {
    initialTargets: {
        priceLevels: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        rrr: [0.9, 0.95, 1.5, 1.8, 1.85, 1.9, 1.95, 1.95, 1.95, 3],
        dailyRanges: [1, 1, 10, 10, 10, 10, 10, 10, 10, 10],
    },
    minimumTargets: {
        rrr: [0.4, 0.6, 1, 1.5, 1.8, 1.9, 1.9, 1.9, 1.9, 1.9],
        priceLevels: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        dailyRanges: [1, 1, 1, 1.1, 1.2, 1.3, 1.4, 1.5, 1.5, 1.5],
    },
    wave3BatchIndexStart: 10,
    wave5BatchIndexStart: 10,
    trail5Count: 1,
    trail15Count: 1,
};
const gtlbTarget: TradingPlans.ExitTargets = {
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
    trail5Count: 5,
    trail15Count: 5,
};
const fiveTarget: TradingPlans.ExitTargets = {
    initialTargets: {
        priceLevels: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        rrr: [0.9, 0.95, 1.5, 1.8, 1.85, 1.9, 1.95, 1.95, 1.95, 3],
        dailyRanges: [1, 1, 10, 10, 10, 10, 10, 10, 10, 10],
    },
    minimumTargets: {
        rrr: [0.4, 0.6, 1, 1.5, 1.8, 1.9, 1.9, 1.9, 1.9, 1.9],
        priceLevels: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        dailyRanges: [1, 1, 1, 1, 1, 1.1, 1.2, 1.3, 1.4, 1.5],
    },
    wave3BatchIndexStart: 10,
    wave5BatchIndexStart: 10,
    trail5Count: 5,
    trail15Count: 5,
};
const tsmTarget: TradingPlans.ExitTargets = {
    initialTargets: {
        priceLevels: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        rrr: [0.9, 0.95, 1.5, 1.8, 1.85, 1.9, 1.95, 1.95, 1.95, 3],
        dailyRanges: [1, 1, 10, 10, 10, 10, 10, 10, 10, 10],
    },
    minimumTargets: {
        rrr: [0.4, 0.6, 1, 1.5, 1.8, 1.9, 1.9, 1.9, 1.9, 1.9],
        priceLevels: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        dailyRanges: [0.8, 0.8, 0.8, 0.8, 0.8, 0.8, 0.8, 0.8, 0.8, 0.8],
    },
    wave3BatchIndexStart: 10,
    wave5BatchIndexStart: 10,
    trail5Count: 1,
    trail15Count: 1,
};
export const stockSelections: string[] = [
    'INTC',
    'GTLB',
    'FIVE',
    'TSM',
];

export const stocksTradingPlans: TradingPlans.TradingPlans[] = [
    {
        symbol: 'INTC',
        analysis: {
            newsQualityAndFreshness: 1, gapType: TradingPlans.GapType.Outside,
            relativeVolumeAndCandleSmoothness: 2,
            cleanVwapTrend: 2, dailyChartStory: 2,
        },
        autoFlip: false,
        vwapCorrection: { volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: Constants.marketCaps.INTC,
        atr: {
            average: 0.97,
            mutiplier: 2,
            minimumMultipler: 1,
        },
        disableShortIfOpenAbove: 0,
        disableLongIfOpenBelow: 0,
        keyLevels: {
            momentumStartForLong: 35,
            momentumStartForShort: 35,
        },
        summary: `
        gap up on benefit from US-china tension. market is gap down big while INTC is gap up big. already breakout recent high 35.5
        so for shorting, first target is 35.5, with current price of 36, profit is only 0.5. so shorts are not good. there are other stocks
        for shorts with more bearish trend. INTC is long only, but currently too extended from vwap. if open near vwap, allow gap and go < 60.
        prepare all long setups.
        `,
        short: {
            reasons: [
                "there are other better chips stocks to short, like ASML",
            ],
        },
        long: {
            reasons: [
                "recent up trend on daily chart",
                "good news and above vwap on premarket",
                "already breakout daily resistance"
            ],
            openDriveContinuation60Plan: { targets: intcTarget, planConfigs: stock1Configs },
            falseBreakoutPlan: { price: 35.5, targets: intcTarget, planConfigs: stock1Configs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: intcTarget, planConfigs: stock1Configs },
            firstNewHighPlan: { enableAutoTrigger: false, includeSecondNewHigh: true, targets: intcTarget, planConfigs: stock1Configs },
            firstRetracementPlan: { targets: intcTarget, planConfigs: stock1Configs },
        },
    },
    {
        symbol: 'GTLB',
        analysis: {
            newsQualityAndFreshness: 1, gapType: TradingPlans.GapType.Outside,
            relativeVolumeAndCandleSmoothness: 1,
            cleanVwapTrend: 2, dailyChartStory: 1,
        },
        autoFlip: false,
        vwapCorrection: { volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: Constants.marketCaps.GTLB,
        atr: {
            average: 2.15,
            mutiplier: 1,
            minimumMultipler: 1,
        },
        disableShortIfOpenAbove: 0,
        disableLongIfOpenBelow: 0,
        keyLevels: {
            momentumStartForLong: 60,
            momentumStartForShort: 60,
        },
        summary: `
        gap up on deal speculation, nothing confirmed yet. gap into resistance of 60 on the daily chart 
        and then sell off in premarket, currently below vwap. it's a gap up and fade setup.
        due to volume very low and cap is smaller, don't trade in first 60 seconds.
        take the first breakdown short, automate first new low.
        `,
        short: {
            reasons: [
                "gap up and fade",
                "deal not confirmed"
            ],
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: gtlbTarget, planConfigs: stock2Configs },
            firstNewHighPlan: { enableAutoTrigger: true, includeSecondNewHigh: true, targets: gtlbTarget, planConfigs: stock2Configs },
            firstRetracementPlan: { targets: gtlbTarget, planConfigs: stock2Configs },
        },
        long: {
            reasons: [
                "none",
            ],
        },
    },
    {
        symbol: 'FIVE',
        analysis: {
            newsQualityAndFreshness: 2, gapType: TradingPlans.GapType.Outside,
            relativeVolumeAndCandleSmoothness: 1,
            cleanVwapTrend: 1, dailyChartStory: 2,
        },
        autoFlip: false,
        vwapCorrection: { volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: Constants.marketCaps.FIVE,
        atr: {
            average: 3.94,
            mutiplier: 1.5,
            minimumMultipler: 1,
        },
        disableShortIfOpenAbove: 0,
        disableLongIfOpenBelow: 0,
        keyLevels: {
            momentumStartForLong: 100,
            momentumStartForShort: 100,
        },
        summary: `
        huge gap down on lower guidance. recovered a bit in premarket, ready to continue sell off. 
        a good setup is open with pop to near 90 and start selling off again.
        premarket volume is not smooth, so give up first 60 seconds. short the first breakdown.
        
        `,
        short: {
            reasons: [
                "already break all time low",
                "lower guidance"
            ],
            firstBreakoutPlan: { targets: fiveTarget, planConfigs: stock3Configs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: fiveTarget, planConfigs: stock3Configs },
            firstNewHighPlan: { enableAutoTrigger: false, includeSecondNewHigh: true, targets: fiveTarget, planConfigs: stock3Configs },
            firstRetracementPlan: { targets: fiveTarget, planConfigs: stock3Configs },
        },
        long: {
            reasons: [
                "gap down too much, but long will be just scalp to 90",
            ],
        },
    },
    {
        symbol: 'TSM',
        analysis: {
            newsQualityAndFreshness: 1, gapType: TradingPlans.GapType.Outside,
            relativeVolumeAndCandleSmoothness: 2,
            cleanVwapTrend: 2, dailyChartStory: 1,
        },
        autoFlip: false,
        vwapCorrection: { volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: Constants.marketCaps.TSM,
        atr: {
            average: 5.9,
            mutiplier: 1,
            minimumMultipler: 0.8,
        },
        disableShortIfOpenAbove: 0,
        disableLongIfOpenBelow: 0,
        keyLevels: {
            momentumStartForLong: 174,
            momentumStartForShort: 180,
        },
        summary: `
        big gap down when the daily chart is still bullish. already down too much, not interested in shorts.
        a good setup in first 60 seconds for short covering is false breakdown of premarket and red to green.
        otherwise, let it trap shorts first and then go long.
        `,
        short: {
            reasons: [
                "bearish news, below vwap",
            ],
        },
        long: {
            reasons: [
                "daily chart still bullish, big gap down already needs short covering",
                ""
            ],
            profitTakingExhaust60Plan: { targets: tsmTarget, planConfigs: stock4Configs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: tsmTarget, planConfigs: stock4Configs },
            firstNewHighPlan: { enableAutoTrigger: false, includeSecondNewHigh: true, targets: tsmTarget, planConfigs: stock4Configs },
            firstRetracementPlan: { targets: tsmTarget, planConfigs: stock4Configs },
        },
    },
];