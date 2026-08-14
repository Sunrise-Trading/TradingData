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
    'NU',
];

const nupreergap = 15.94;
const moreberish = 15.81;
const irenpmhigh = 46.79;
const nulevel = nupreergap;
const onontrappedlevel = 34.67;
const ononpreerlow = 31.62;
const ononlevel = ononpreerlow;

export const stocksTradingPlans: TradingPlans.TradingPlans[] = [
    {
        symbol: 'NU',
        analysis: {
            gap: { pdc: 13.93 },
            usePremarketKeyLevel: 0,
            watchAreas: [],
            noTradeZones: [],
            singleMomentumKeyLevel: [{ high: nulevel, low: nulevel }],
            zoneNearEdge: { zoneIsFar: true, high: 0, low: 0 },
            dualMomentumKeyLevels: [],
            defaultRiskLevels: [],
        },
        vwapCorrection: { open: 0, volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: Constants.marketCaps.NU,
        atr: {
            average: 0.47,
            mutiplier: 2,
            minimumMultipler: 1,
            maxQuantity: -1,
        },
        keyLevels: {
            zones: [
                { high: 16.85, low: 16.5, color: "red", label: "main profit target" }
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
            enabled: false,
            firstTargetToAdd: 15,
            finalTargets: [
                { text: "15", partialCount: 1, atr: 0, rrr: 0, level: 15 },
                { text: "15.4", partialCount: 1, atr: 0, rrr: 0, level: 15.4 },
            ],
            gapAndCrapPlan: {
                extendedGapUpInAtr: 4,
                resistance: { high: nupreergap, low: moreberish },
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
                support: { high: 16, low: nupreergap },
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
        symbol: 'ONON',
        analysis: {
            gap: { pdc: 38.78 },
            usePremarketKeyLevel: 0,
            watchAreas: [],
            noTradeZones: [],
            singleMomentumKeyLevel: [{ high: ononlevel, low: ononlevel }],
            zoneNearEdge: { zoneIsFar: true, high: 0, low: 0 },
            dualMomentumKeyLevels: [],
            defaultRiskLevels: [],
        },
        vwapCorrection: { open: 0, volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: Constants.marketCaps.GME,
        atr: {
            average: 1.39,
            mutiplier: 1.5,
            minimumMultipler: 1,
            maxQuantity: -1,
        },
        keyLevels: {
            otherLevels: [],
            zones: [{ high: ononpreerlow, low: 31, color: "red", label: "short momo" }]
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
            enabled: true,
            firstTargetToAdd: -1,
            finalTargets: [
                { text: "30", partialCount: 1, atr: 0, rrr: 0, level: 30 },
                { text: "29", partialCount: 1, atr: 0, rrr: 0, level: 29 },
            ],
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
            },
            levelMomentumPlan: createDefaultLevelMomentumPlan(stock2Configs),
        },
        long: {
            enabled: true,
            firstTargetToAdd: -1,
            finalTargets: [
                { text: "33.5", partialCount: 1, atr: 0, rrr: 0, level: 33.5 },
                { text: "34", partialCount: 1, atr: 0, rrr: 0, level: 34 },
            ],
            gapDownAndGoUpPlan: {
                planConfigs: stock2Configs,
                waitForPullback: true,
                enableBidReversal: true,
                enableOfferBreakout: false,
                runnerCount: 1,
                coreCount: 1,
                support: { high: 32, low: ononpreerlow },
                nearAboveSupport: { high: 32, low: ononpreerlow },
                runnerTriggerCondition: "reclaim vwap",
                coreTarget: 33.5,
            },
            levelMomentumPlan: createDefaultLevelMomentumPlan(stock2Configs),
        },
    },

];
