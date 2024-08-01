import * as TradingPlans from './models';
import * as Constants from './constants';

// futures, momentumSimple, tradeStationEquity, schwab
export const activeProfileName: string = "schwab";
export const tradingSettings: TradingPlans.TradingSettings = {
    equalWeightDivider: 4,
    useSingleOrderForEntry: true,
}
const metaConfigs: TradingPlans.PlanConfigs = {
    size: 0.24,
    deferTradingInSeconds: 0,
    stopTradingAfterSeconds: 0,
    requireReversal: true,
    alwaysAllowStopOutOrFlatten: true,
    allowEarlyExits: true,
    allowFirstFewExitsCount: 2,
};
const armConfigs: TradingPlans.PlanConfigs = {
    size: 0.24,
    deferTradingInSeconds: 0,
    stopTradingAfterSeconds: 0,
    requireReversal: true,
    alwaysAllowStopOutOrFlatten: false,
    allowEarlyExits: false,
    allowFirstFewExitsCount: 5,
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

const stock1Target: TradingPlans.ExitTargets = {
    initialTargets: {
        priceLevels: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        rrr: [1.5, 1.6, 1.8, 1.9, 2, 2, 3, 3, 3, 3],
        dailyRanges: [1, 1, 1.5, 1.5, 2, 2, 2, 2, 2, 2],
    },
    minimumTargets: {
        priceLevels: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        rrr: [1.5, 1.6, 1.8, 1.9, 2, 2, 2, 2, 2, 2],
        dailyRanges: [1, 1, 1.5, 1.5, 2, 2, 2, 2, 2, 2],
    },
    wave3BatchIndexStart: 10,
    wave5BatchIndexStart: 10,
    trail5Count: 4,
    trail15Count: 4,
};
const armTarget: TradingPlans.ExitTargets = {
    initialTargets: {
        priceLevels: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        rrr: [1.5, 1.6, 1.8, 1.9, 2, 2, 3, 3, 3, 3],
        dailyRanges: [1, 1, 1.5, 1.5, 2, 2, 2, 2, 2, 2],
    },
    minimumTargets: {
        priceLevels: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        rrr: [1.5, 1.6, 1.8, 1.9, 2, 2, 2, 2, 2, 2],
        dailyRanges: [0.5, 0.5, 0.7, 0.8, 0.9, 1, 1, 1, 1, 1],
    },
    wave3BatchIndexStart: 10,
    wave5BatchIndexStart: 10,
    trail5Count: 4,
    trail15Count: 4,
};
const mrnaTarget: TradingPlans.ExitTargets = {
    initialTargets: {
        priceLevels: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        rrr: [1.5, 1.6, 1.8, 1.9, 2, 2, 3, 3, 3, 3],
        dailyRanges: [1, 1, 1.5, 1.5, 2, 2, 2, 2, 2, 2],
    },
    minimumTargets: {
        priceLevels: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        rrr: [1.5, 1.6, 1.8, 1.9, 2, 2, 2, 2, 2, 2],
        dailyRanges: [1, 1, 1.5, 1.5, 2, 2, 2, 2, 2, 2],
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
        dailyRanges: [1, 1, 1.5, 1.5, 2, 2, 2, 2, 2, 2],
    },
    minimumTargets: {
        priceLevels: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        rrr: [1.5, 1.6, 1.8, 1.9, 2, 2, 3, 3, 3, 3],
        dailyRanges: [1, 1, 1.5, 1.5, 2, 2, 2, 2, 2, 2],
    },
    wave3BatchIndexStart: 10,
    wave5BatchIndexStart: 10,
    trail5Count: 4,
    trail15Count: 4,
};
export const stockSelections: string[] = [
    'META',
    'ARM',
    'MRNA'
];

export const stocksTradingPlans: TradingPlans.TradingPlans[] = [
    {
        symbol: 'META',
        analysis: {
            newsQualityAndFreshness: 2, gapType: TradingPlans.GapType.Outside,
            relativeVolumeAndCandleSmoothness: 2,
            cleanVwapTrend: 2, dailyChartStory: 2,
            gapSize: 40,
            weeklychart: "consolidation",
            dailyChart: "recent downtrend, gap up above the middle level",
            hourlyChart: "recent downtrend, gap up and recovered 75%",
            premarketChart: "strong above vwap",
            keyLevels: [515],
        },
        autoFlip: false,
        vwapCorrection: { volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: Constants.marketCaps.META,
        atr: {
            average: 15,
            mutiplier: 1.5,
            minimumMultipler: 0.65,
        },
        disableShortIfOpenAbove: 0,
        disableLongIfOpenBelow: 0,
        keyLevels: {
            momentumStartForLong: 500,
            momentumStartForShort: 500,
        },
        summary: `
        earnings beat, strong premarket, initial momentum is bullish, long only. because there are other weaker stocks to short.
        due to big gap, let it sell off at the open and then look for breakouts on both 1 minute and 5 minute charts.
        give up 60 seconds gap and go due to gap too large.
        key level is 515, watch bottoming signal near that level.
        set it to scalp due to not having a good story for buying the rumor. and QQQ already rallied strong yesterday.
        use 1 minte and 5 minute for trailing stops. 
        expect a 10-15 rally before topping out
        `,
        short: {
            reasons: [
                "gap up too much"
            ],
        },
        long: {
            reasons: [
                "earnings beat, strong premarket, initial momentum is bullish, long only. because there are other weaker stocks to short.",
                "guidance above estimates and less spending"
            ],
            falseBreakoutPlan: { price: 515, targets: stock1Target, planConfigs: metaConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock1Target, planConfigs: metaConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, includeSecondNewHigh: true, targets: stock1Target, planConfigs: metaConfigs },
            firstRetracementPlan: { targets: stock1Target, planConfigs: metaConfigs },
        },
    },
    {
        symbol: 'ARM',
        analysis: {
            newsQualityAndFreshness: 2, gapType: TradingPlans.GapType.Outside,
            relativeVolumeAndCandleSmoothness: 2,
            cleanVwapTrend: 2, dailyChartStory: 2,
            gapSize: 16,
            weeklychart: "pullback beyond the middle of a up trend",
            dailyChart: "downtrend, small bounce yesterday and makes a new low today below 130",
            hourlyChart: "downtrend continue",
            premarketChart: "gap down bounce above vwap and faded below vwap again",
            keyLevels: [130, 129.1],
        },
        autoFlip: false,
        vwapCorrection: { volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: Constants.marketCaps.ARM,
        atr: {
            average: 9.9,
            mutiplier: 1,
            minimumMultipler: 0.5,
        },
        disableShortIfOpenAbove: 0,
        disableLongIfOpenBelow: 0,
        keyLevels: {
            momentumStartForLong: 130,
            momentumStartForShort: 130,
        },
        summary: `
        weaker than expected guidance. the news is bearish, short only. 
        due to gap down into support, this down trend trade can be choppy, need patience to buy low and sell high
        long will be very strugle, so only short. META long is better. and NVDA is better.
        keep first 60 seconds in case it opens near vwap
        `,
        short: {
            reasons: [
                "weaker than expected guidance",
                "downtrend daily chart, open below key levels and makes a new low"
            ],
            openDriveContinuation60Plan: { targets: armTarget, planConfigs: armConfigs },
            falseBreakoutPlan: { price: 129, targets: armTarget, planConfigs: armConfigs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: armTarget, planConfigs: armConfigs },
            firstNewHighPlan: { enableAutoTrigger: false, includeSecondNewHigh: true, targets: armTarget, planConfigs: armConfigs },
            firstRetracementPlan: { targets: armTarget, planConfigs: armConfigs },
        },
        long: {
            reasons: [
                "gap down into support",
                "current earnings is still beat"
            ],
        },
    },
    {
        symbol: 'MRNA',
        analysis: {
            newsQualityAndFreshness: 2, gapType: TradingPlans.GapType.Outside,
            relativeVolumeAndCandleSmoothness: 2,
            cleanVwapTrend: 2, dailyChartStory: 2,
            gapSize: 20,
            weeklychart: "pop rally and fade",
            dailyChart: "long flat consolidation and break below now",
            hourlyChart: "flat",
            premarketChart: "below vwap all time",
            keyLevels: [100],
        },
        autoFlip: false,
        vwapCorrection: { volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: Constants.marketCaps.MRNA,
        atr: {
            average: 4.9,
            mutiplier: 1.5,
            minimumMultipler: 1,
        },
        disableShortIfOpenAbove: 0,
        disableLongIfOpenBelow: 0,
        keyLevels: {
            momentumStartForLong: 115,
            momentumStartForShort: 115,
        },
        summary: `
        lowered guidance.  This drop in guidance was attributed to factors including lower-than-expected sales in Europe and escalating competition in the US.
        this can be the best trade for today, keep diamond hand and more than 2R move.
        if open below 100, allow first 60 seconds.
        `,
        short: {
            reasons: [
                "lower guidance with persisting reasons",
                "flat bounce on daily chart and now lost it"
            ],
            openDriveContinuation60Plan: { targets: mrnaTarget, planConfigs: stock3Configs },
            falseBreakoutPlan: { price: 100, targets: mrnaTarget, planConfigs: stock3Configs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: mrnaTarget, planConfigs: stock3Configs },
            firstNewHighPlan: { enableAutoTrigger: false, includeSecondNewHigh: true, targets: mrnaTarget, planConfigs: stock3Configs },
            firstRetracementPlan: { targets: mrnaTarget, planConfigs: stock3Configs },
        },
        long: {
            reasons: [
                "none",
            ],
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
            falseBreakoutPlan: { price: 0, targets: stock4Target, planConfigs: stock4Configs },
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
            falseBreakoutPlan: { price: 0, targets: stock4Target, planConfigs: stock4Configs },
            firstBreakoutPlan: { targets: stock4Target, planConfigs: stock4Configs },
            redtoGreenPlan: { strictMode: true, considerCurrentCandleAfterOneMinute: true, targets: stock4Target, planConfigs: stock4Configs },
            firstNewHighPlan: { enableAutoTrigger: false, includeSecondNewHigh: true, targets: stock4Target, planConfigs: stock4Configs },
            firstRetracementPlan: { targets: stock4Target, planConfigs: stock4Configs },
        },
    },
];