import * as TradingPlans from './models';
import * as Constants from './constants';

// futures, momentumSimple, tradeStationEquity, schwab
export const activeProfileName: string = "schwab";
export const tradingSettings: TradingPlans.TradingSettings = {
    snapMode: false,
    useSingleOrderForEntry: true,
};

export const defaultSize = 0.21; // 0.21
const defaultCorePlan = {
    coreTarget: 0,
    coreCount: 5,
    runnerCount: 5,
    runnerTriggerCondition: "",
};
const createDefaultLevelMomentumPlan = (
    planConfigs: TradingPlans.PlanConfigs,
): TradingPlans.LevelMomentumPlan => ({
    planConfigs,
    ...defaultCorePlan,
});

const stock1Configs: TradingPlans.PlanConfigs = {
    size: defaultSize,
    requireReversal: true,
    sizingCount: 10,
};
const stock2Configs: TradingPlans.PlanConfigs = {
    size: defaultSize,
    requireReversal: true,
    sizingCount: 10,
};
const stock3Configs: TradingPlans.PlanConfigs = {
    size: defaultSize,
    requireReversal: true,
    sizingCount: 10,
};
const stock4Configs: TradingPlans.PlanConfigs = {
    size: defaultSize,
    requireReversal: true,
    sizingCount: 10,
};


export const stockSelections: string[] = [
    'MU',
];

const lastsupport = 930;
const moreberish = 15.81;
const mulevel = lastsupport;
const mupmlow = 956;
const mupmhigh = 995;

export const stocksTradingPlans: TradingPlans.TradingPlans[] = [
    {
        symbol: 'AMU',
        analysis: {
            gap: { pdc: 1011 },
            usePremarketKeyLevel: 0,
            watchAreas: [],
            noTradeZones: [],
            singleMomentumKeyLevel: [{ high: mulevel, low: mulevel }],
            zoneNearEdge: { zoneIsFar: true, high: 0, low: 0 },
            dualMomentumKeyLevels: [],
            defaultRiskLevels: [],
        },
        vwapCorrection: { open: 0, volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: Constants.marketCaps.MU,
        atr: {
            average: 70,
            mutiplier: 1,
            minimumMultipler: 0.5,
            maxQuantity: -1,
        },
        keyLevels: {
            zones: [
                //{ high: 16.85, low: 16.5, color: "red", label: "main profit target" }
            ]
        },
        defaultConfigs: stock1Configs,
        tradebooksConfig: {
            level_open_vwap: {
                shortVwapBounceFail: { waitForClose: true },
            },
            open_level_vwap: {
                shortVwapBounceFail: { waitForClose: true },
                longOpenDrive: {},
            },
            vwap_level_open: {
                shortOpenDrive: {},
                longVwapPushdownFail: { waitForClose: true },
            },
            vwap_open_level: {
                longVwapPushdownFail: { waitForClose: true },
            },
        },
        short: {
            enabled: true,
            firstTargetToAdd: 15,
            finalTargets: [
                { text: "15", partialCount: 1, atr: 0, rrr: 0, level: 15 },
                { text: "15.4", partialCount: 1, atr: 0, rrr: 0, level: 15.4 },
            ],
            gapAndCrapPlan: {
                extendedGapUpInAtr: 4,
                resistance: { high: lastsupport, low: moreberish },
                runnerCount: 1,
                coreCount: 1,
                runnerTriggerCondition: "lost premarket low",
                coreTarget: 15,
                enableOfferReversal: true,
                enableBidBreakdown: false,
                waitForPullback: false,
                planConfigs: stock1Configs,
            },
            levelMomentumPlan: createDefaultLevelMomentumPlan(stock1Configs),
        },
        long: {
            enabled: true,
            firstTargetToAdd: -1,
            finalTargets: [
                { text: "16.5", partialCount: 1, atr: 0, rrr: 0, level: 16.5 },
                { text: "16.8", partialCount: 1, atr: 1, rrr: 0, level: 16.8 },
            ],
            gapAndGoPlan: {
                support: { high: 16, low: lastsupport },
                enableOfferBreakout: false,
                enableBidReversal: true,
                waitForPullback: true,
                runnerCount: 1,
                coreCount: 1,
                runnerTriggerCondition: "survive pullback above pm high, but mainly a scalp",
                nearPreviousKeyEventLevel: "previous news gap down at 15.94",
                coreTarget: 16.50,
                planConfigs: stock1Configs,
            },
            levelMomentumPlan: createDefaultLevelMomentumPlan(stock1Configs),
        },
    },
    {
        symbol: 'MU',
        analysis: {
            gap: { pdc: 1011 },
            usePremarketKeyLevel: 0,
            watchAreas: [],
            noTradeZones: [],
            singleMomentumKeyLevel: [{ high: mulevel, low: mulevel }],
            zoneNearEdge: { zoneIsFar: true, high: 0, low: 0 },
            dualMomentumKeyLevels: [],
            defaultRiskLevels: [],
        },
        vwapCorrection: { open: 0, volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: Constants.marketCaps.MU,
        atr: {
            average: 72,
            mutiplier: 1,
            minimumMultipler: 0.5,
            maxQuantity: -1,
        },
        keyLevels: {
            otherLevels: [],
            zones: [
                { high: mupmlow + 5, low: mupmlow, color: "green", label: "pm low" }
            ]
        },
        defaultConfigs: stock2Configs,
        tradebooksConfig: {
            level_open_vwap: {
                shortVwapBounceFail: { waitForClose: true },
            },
            open_level_vwap: {
                shortVwapBounceFail: { waitForClose: true },
                longOpenDrive: {},
            },
            vwap_level_open: {
                shortOpenDrive: {},
                longVwapPushdownFail: { waitForClose: true },
            },
            vwap_open_level: {
                longVwapPushdownFail: { waitForClose: true },
            },
        },
        short: {
            enabled: false,
            firstTargetToAdd: -1,
            finalTargets: [
                { text: "30", partialCount: 1, atr: 0, rrr: 0, level: 30 },
                { text: "29", partialCount: 1, atr: 0, rrr: 0, level: 29 },
            ],
            /*
            gapDownAndGoDownPlan: {
                buyersTrappedBelowThisLevel: onontrappedlevel,
                resistance: { high: onontrappedlevel, low: 34 },
                waitForPullback: true,
                enableBidBreakdown: false,
                enableOfferReversal: true,
                runnerTriggerCondition: "confirm below pm low",
                runnerCount: 1,
                coreCount: 1,
                coreTarget: 30,
                planConfigs: stock2Configs,
            },*/
            levelMomentumPlan: createDefaultLevelMomentumPlan(stock2Configs),
        },
        long: {
            enabled: true,
            firstTargetToAdd: -1,
            finalTargets: [
                { text: "pm high", partialCount: 1, atr: 0, rrr: 0, level: mupmhigh },
                { text: "R4", partialCount: 1, atr: 0, rrr: 0, level: 978 },
            ],
            gapDownAndGoUpPlan: {
                planConfigs: stock2Configs,
                waitForPullback: true,
                enableBidReversal: true,
                enableOfferBreakout: false,
                runnerCount: 1,
                coreCount: 1,
                support: { high: 940, low: mulevel },
                nearAboveSupport: { high: 940, low: mulevel },
                runnerTriggerCondition: "reclaim vwap",
                coreTarget: mupmhigh,
            },
            levelMomentumPlan: createDefaultLevelMomentumPlan(stock2Configs),
        },
    },

];
