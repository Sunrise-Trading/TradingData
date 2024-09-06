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
    alwaysAllowStopOutOrFlatten: true,
    allowEarlyExits: true,
    allowFirstFewExitsCount: 2,
};
const avgoConfigs: TradingPlans.PlanConfigs = {
    size: 0.24,
    deferTradingInSeconds: 0,
    stopTradingAfterSeconds: 0,
    requireReversal: true,
    alwaysAllowStopOutOrFlatten: true,
    allowEarlyExits: true,
    allowFirstFewExitsCount: 2,
};
const stock3Configs: TradingPlans.PlanConfigs = {
    size: 0.24,
    deferTradingInSeconds: 0,
    stopTradingAfterSeconds: 0,
    requireReversal: true,
    alwaysAllowStopOutOrFlatten: true,
    allowEarlyExits: true,
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
        rrr: [1.5, 1.5, 1.9, 1.9, 1.9, 4, 4, 4, 4, 4],
        dailyRanges: [3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
    },
    minimumTargets: {
        priceLevels: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        rrr: [1.5, 1.8, 1.9, 2.4, 3, 4, 4, 4, 4, 4],
        dailyRanges: [1, 1.3, 2, 2, 2, 3, 3, 3, 3, 3],
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
    trail5Count: 4,
    trail15Count: 4,
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
    trail5Count: 4,
    trail15Count: 4,
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
    trail5Count: 4,
    trail15Count: 4,
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
    trail5Count: 4,
    trail15Count: 4,
};
export const stockSelections: string[] = [
    'PATH',
    'AVGO',
];

export const stocksTradingPlans: TradingPlans.TradingPlans[] = [
    {
        symbol: 'PATH',
        analysis: {
            newsQualityAndFreshness: 2, gapType: TradingPlans.GapType.Outside,
            relativeVolumeAndCandleSmoothness: 1,
            cleanVwapTrend: 0, dailyChartStory: 2,
            gapSize: 1,
            weeklychart: "consolidate at bottom",
            dailyChart: "rally and bull flag",
            hourlyChart: "consolidation",
            premarketChart: "consolidation and cross up and down the vwap, want to see above vwap for the last 30 minutes",
            keyLevels: [14.04],
        },
        autoFlip: false,
        vwapCorrection: { volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: Constants.marketCaps.PATH,
        atr: {
            average: 0.41,
            mutiplier: 2,
            minimumMultipler: 1,
        },
        disableShortIfOpenAbove: 0,
        disableLongIfOpenBelow: 0,
        keyLevels: {
            momentumStartForLong: 13.25,
            momentumStartForShort: 14.05,
        },
        summary: `
        gap up into a new range. there are a lot of room to the upside. daily chart is consolidation above 50 day moving average.
        looks more like a 2nd leg up. but due to premarket below yesterday 14.1, it can also open with flush and continue selloff.
        for long, skip 60 seconds due to low volume. add premarket high breakout.
        for long, target is half unlimited.
        for short, target is limited, the best is come near 13.2 for gap fill. 
        I don't have a playbook for shorting gap up breakout when it's premarket mixed. so also skip first 60 seconds for short.
        and might fully disable short later. unless it drop below vwap in the last 30 minutes and show weakness.
        last 10 minutes drop below vwap, short only now.
        `,
        short: {
            reasons: [
                "premarket mixed, gapped up a lot",
                ""
            ],
            falseBreakoutPlan: { price: 14, targets: stock1Target, planConfigs: stock1Configs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock1Target, planConfigs: stock1Configs },
            firstNewHighPlan: { enableAutoTrigger: false, includeSecondNewHigh: true, targets: stock1Target, planConfigs: stock1Configs },
            firstRetracementPlan: { targets: stock1Target, planConfigs: stock1Configs },

        },
        long: {
            reasons: [
                "gap up into a new range. there are a lot of room to the upside. ",
                "daily chart is consolidation above 50 day moving average."
            ],

            falseBreakoutPlan: { price: 0, targets: unlimitTargetForHalf, planConfigs: stock1Configs },
            levelBreakout: { entryPrice: 14.04, targets: unlimitTargetForHalf, planConfigs: stock1Configs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: unlimitTargetForHalf, planConfigs: stock1Configs },
            firstNewHighPlan: { enableAutoTrigger: false, includeSecondNewHigh: true, targets: unlimitTargetForHalf, planConfigs: stock1Configs },
            firstRetracementPlan: { targets: unlimitTargetForHalf, planConfigs: stock1Configs },
        },
    },
    {
        symbol: 'AVGO',
        analysis: {
            newsQualityAndFreshness: 2, gapType: TradingPlans.GapType.Outside,
            relativeVolumeAndCandleSmoothness: 2,
            cleanVwapTrend: 2, dailyChartStory: 2,
            gapSize: 9,
            weeklychart: "uptrend consolidation",
            dailyChart: "down trend",
            hourlyChart: "slow fade",
            premarketChart: "gap down and bounce, bounce is strong above yesterday earnings low",
            keyLevels: [141, 140, 149],
        },
        autoFlip: false,
        vwapCorrection: { volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: Constants.marketCaps.AVGO,
        atr: {
            average: 7.5,
            mutiplier: 1.5,
            minimumMultipler: 1,
        },
        disableShortIfOpenAbove: 0,
        disableLongIfOpenBelow: 0,
        keyLevels: {
            momentumStartForLong: 136,
            momentumStartForShort: 150,
        },
        summary: `
        gap down and bounce. but the bounce is strong, so not valid for gap down short because the bounce needs to be weak.
        open above 140-141, need to look for long first. 
        trade like AI yesterday, let it make a short sell pattern first, and then go in when they need to stop out or trail stop.
        for shorts, it can come later like a 5 min new low near 149. because it's above support, so can't short at the open
        due to both directions, need to be a scalp. but try to keep half size for 5 minute trail.
        `,
        short: {
            reasons: [
                "guidance miss",
                "charts turning bearish"
            ],
            falseBreakoutPlan: { price: 148.5, targets: stock2Target, planConfigs: avgoConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock2Target, planConfigs: avgoConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, includeSecondNewHigh: true, targets: stock2Target, planConfigs: avgoConfigs },
            firstRetracementPlan: { targets: stock2Target, planConfigs: avgoConfigs },
        },
        long: {
            reasons: [
                "the bounce after gap down is strong, open above key support",
            ],
            falseBreakoutPlan: { price: 0, targets: stock2Target, planConfigs: avgoConfigs },
            firstBreakoutPlan: { targets: stock2Target, planConfigs: avgoConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock2Target, planConfigs: avgoConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, includeSecondNewHigh: true, targets: stock2Target, planConfigs: avgoConfigs },
            firstRetracementPlan: { targets: stock2Target, planConfigs: avgoConfigs },
        },
    },
    {
        symbol: 'MBLY',
        analysis: {
            newsQualityAndFreshness: 1, gapType: TradingPlans.GapType.Outside,
            relativeVolumeAndCandleSmoothness: 1,
            cleanVwapTrend: 0, dailyChartStory: 2,
            gapSize: 9,
            weeklychart: "uptrend consolidation",
            dailyChart: "down trend",
            hourlyChart: "slow fade",
            premarketChart: "gap down and bounce, bounce is strong above yesterday earnings low",
            keyLevels: [141, 140, 149],
        },
        autoFlip: false,
        vwapCorrection: { volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: Constants.marketCaps.MBLY,
        atr: {
            average: 0.91,
            mutiplier: 1,
            minimumMultipler: 1,
        },
        disableShortIfOpenAbove: 0,
        disableLongIfOpenBelow: 0,
        keyLevels: {
            momentumStartForLong: 12.51,
            momentumStartForShort: 12.51,
        },
        summary: `
        gap down and bounce. but the bounce is strong, so not valid for gap down short because the bounce needs to be weak.
        open above 140-141, need to look for long first. 
        trade like AI yesterday, let it make a short sell pattern first, and then go in when they need to stop out or trail stop.
        for shorts, it can come later like a 5 min new low near 149. because it's above support, so can't short at the open
        due to both directions, need to be a scalp. but try to keep half size for 5 minute trail.
        `,
        short: {
            reasons: [
                "guidance miss",
                "charts turning bearish"
            ],
            falseBreakoutPlan: { price: 148.5, targets: stock3Target, planConfigs: stock3Configs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock3Target, planConfigs: stock3Configs },
            firstNewHighPlan: { enableAutoTrigger: false, includeSecondNewHigh: true, targets: stock3Target, planConfigs: stock3Configs },
            firstRetracementPlan: { targets: stock3Target, planConfigs: stock3Configs },
        },
        long: {
            reasons: [
                "the bounce after gap down is strong, open above key support",
            ],

        },
    },
];