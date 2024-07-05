import * as TradingPlans from './models';
import * as Constants from './constants';

// futures, momentumSimple, tradeStationEquity, schwab
export const activeProfileName: string = "schwab";
export const tradingSettings: TradingPlans.TradingSettings = {
    equalWeightDivider: 4,
    useSingleOrderForEntry: true,
}
const tslaConfigs: TradingPlans.PlanConfigs = {
    size: 0.24,
    deferTradingInSeconds: 0,
    stopTradingAfterSeconds: 0,
    requireReversal: true,
    alwaysAllowStopOutOrFlatten: false,
    allowEarlyExits: false,
    allowFirstFewExitsCount: 2,
};
const mConfigs: TradingPlans.PlanConfigs = {
    size: 0.24,
    deferTradingInSeconds: 0,
    stopTradingAfterSeconds: 0,
    requireReversal: true,
    alwaysAllowStopOutOrFlatten: false,
    allowEarlyExits: false,
    allowFirstFewExitsCount: 2,
};
const tsla5Configs: TradingPlans.PlanConfigs = {
    size: 0.24,
    deferTradingInSeconds: 280,
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

const stock1Target: TradingPlans.ExitTargets = {
    initialTargets: {
        priceLevels: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        rrr: [0.9, 0.95, 1.5, 1.8, 1.85, 1.9, 1.95, 1.95, 1.95, 3],
        dailyRanges: [1, 1, 10, 10, 10, 10, 10, 10, 10, 10],
    },
    minimumTargets: {
        rrr: [0.4, 0.6, 1, 1.5, 1.8, 1.9, 1.9, 1.9, 1.9, 1.9],
        priceLevels: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        dailyRanges: [1, 1, 10, 10, 10, 10, 10, 10, 10, 10],
    },
    wave3BatchIndexStart: 10,
    wave5BatchIndexStart: 10,
    trail5Count: 1,
    trail15Count: 1,
};
const mTarget: TradingPlans.ExitTargets = {
    initialTargets: {
        priceLevels: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        rrr: [0.9, 0.95, 1.5, 1.8, 1.85, 1.9, 1.95, 1.95, 1.95, 3],
        dailyRanges: [1, 1, 10, 10, 10, 10, 10, 10, 10, 10],
    },
    minimumTargets: {
        rrr: [0.4, 0.6, 1, 1.5, 1.8, 1.9, 1.9, 1.9, 1.9, 1.9],
        priceLevels: [19.05, 19.05, 19.05, 19.05, 19.05, 19.05, 0, 0, 0, 0],
        dailyRanges: [0.5, 0.5, 1, 1, 1, 1, 1, 1.1, 1.2, 1.3],
    },
    wave3BatchIndexStart: 10,
    wave5BatchIndexStart: 10,
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
    'TSLA',
    'M',
];

export const stocksTradingPlans: TradingPlans.TradingPlans[] = [
    {
        symbol: 'TSLA',
        analysis: {
            newsQualityAndFreshness: 1, gapType: TradingPlans.GapType.Outside,
            relativeVolumeAndCandleSmoothness: 1,
            cleanVwapTrend: 1, dailyChartStory: 1,
        },
        autoFlip: false,
        vwapCorrection: { volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: Constants.marketCaps.TSLA,
        atr: {
            average: 9,
            mutiplier: 1,
            minimumMultipler: 0.5,
            maxRisk: 5,
        },
        disableShortIfOpenAbove: 0,
        disableLongIfOpenBelow: 0,
        keyLevels: {
            momentumStartForLong: 260,
            momentumStartForShort: 260,
        },
        summary: `
        had 3 day rally as a parabolic run, it's time for profit taking on the friday. so just look for shorts.
        recent momomentum is still bullish. it's going to be dangerous to short green to red on 1 minute. it's better
        on 5 minute chart. so plan the shorts:
        1. first new low
        2. green to red after 5 minutes.
        3. breakdown of premarket low and yesterday high 248.35
        4. false breakout plan, like ORB. let some long patterns to occur
        continue to see what it doesn in premarket, if open above 250, shorts will happen later
        for shorts, think about it as where buyers will put trailing stop. first dip at the open can get bought up.
        `,
        short: {
            reasons: [
                "profit taking",
            ],
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock1Target, planConfigs: tsla5Configs },
            firstNewHighPlan: { enableAutoTrigger: true, includeSecondNewHigh: true, targets: stock1Target, planConfigs: tslaConfigs },
            firstRetracementPlan: { targets: stock1Target, planConfigs: tslaConfigs },
            falseBreakoutPlan: { price: 250, targets: stock1Target, planConfigs: tslaConfigs },
        },
        long: {
            reasons: [
                "recent momentum is bullish",
            ],
            //redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock1Target, planConfigs: tslaConfigs },
            //firstNewHighPlan: { enableAutoTrigger: false, includeSecondNewHigh: true, targets: stock1Target, planConfigs: tslaConfigs },
            //firstRetracementPlan: { targets: stock1Target, planConfigs: tslaConfigs },
        },
    },
    {
        symbol: 'M',
        analysis: {
            newsQualityAndFreshness: 1, gapType: TradingPlans.GapType.Outside,
            relativeVolumeAndCandleSmoothness: 1,
            cleanVwapTrend: 1, dailyChartStory: 1,
        },
        autoFlip: false,
        vwapCorrection: { volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: Constants.marketCaps.M,
        atr: {
            average: 0.6,
            mutiplier: 1.5,
            minimumMultipler: 1,
            maxRisk: 0.5,
        },
        disableShortIfOpenAbove: 0,
        disableLongIfOpenBelow: 0,
        keyLevels: {
            momentumStartForLong: 19.49,
            momentumStartForShort: 21,
        },
        summary: `
        gap up on bid news, not guaranteed for a deal. and gap into resistance. short biased so far.
        volume is very low, so give up first 60 seconds. short
        1. green to red > 60
        2. first new low
        3. false breakout of 19.49
        `,
        short: {
            reasons: [
                "bid not guaranteed",
                "gap into resistance"
            ],
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: mTarget, planConfigs: mConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, includeSecondNewHigh: true, targets: mTarget, planConfigs: mConfigs },
            firstRetracementPlan: { targets: mTarget, planConfigs: mConfigs },
            falseBreakoutPlan: { price: 19.49, targets: mTarget, planConfigs: mConfigs }
        },
        long: {
            reasons: [
                "above vwap in premarket",
                ""
            ],
            //firstBreakoutPlan: { targets: stock2Target, planConfigs: stock2Configs },
            //redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock2Target, planConfigs: stock2Configs },
            //firstNewHighPlan: { enableAutoTrigger: false, includeSecondNewHigh: true, targets: stock2Target, planConfigs: stock2Configs },
            //firstRetracementPlan: { targets: stock2Target, planConfigs: stock2Configs },
        },
    }
];