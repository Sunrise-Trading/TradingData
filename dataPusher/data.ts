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
    'DOCS',
];
const docspmlow = 34.11;
const docsgap = 32.66;
const docslevel = 68;
const gmetrappedlevel = 20.89;
const spcxlevel = 120;

export const stocksTradingPlans: TradingPlans.TradingPlans[] = [
    {
        symbol: 'DOCS',
        analysis: {
            gap: { pdc: 20.66 },
            usePremarketKeyLevel: 0,
            watchAreas: [],
            noTradeZones: [],
            singleMomentumKeyLevel: [{ high: docslevel, low: docslevel }],
            zoneNearEdge: { zoneIsFar: true, high: 0, low: 0 },
            dualMomentumKeyLevels: [],
            defaultRiskLevels: [],
        },
        vwapCorrection: { open: 0, volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: 6000,
        atr: {
            average: 1,
            mutiplier: 2,
            minimumMultipler: 1,
            maxQuantity: -1,
        },
        keyLevels: {
            zones: [
                //{ high: 9.11, low: 8.92, color: "red", label: "gap down" }
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
            firstTargetToAdd: docsgap,
            finalTargets: [
                { text: "gap low", partialCount: 1, atr: 0, rrr: 0, level: docsgap },
                { text: "35", partialCount: 1, atr: 0, rrr: 0, level: 35 },
            ],
            gapAndCrapPlan: {
                extendedGapUpInAtr: 16,
                resistance: { high: docslevel, low: 40 },
                runnerCount: 1,
                coreCount: 1,
                runnerTriggerCondition: "breakdown gap low",
                coreTarget: docsgap,
                enableOfferReversal: true,
                enableBidBreakdown: true,
                waitForPullback: false,
                planConfigs: stock1Configs,
            },
            levelMomentumPlan: createDefaultLevelMomentumPlan(stock1Configs),
        },
        long: {
            enabled: false,
            firstTargetToAdd: -1,
            finalTargets: [
                { text: "8.65", partialCount: 1, atr: 0, rrr: 0, level: 8.65 },
                { text: "8.74", partialCount: 1, atr: 1, rrr: 0, level: 8.74 },
            ],
            /*
            gapAndGoPlan: {
                support: { high: 8.1, low: 8 },
                enableOfferBreakout: true,
                enableBidReversal: true,
                waitForPullback: true,
                runnerCount: 1,
                coreCount: 1,
                runnerTriggerCondition: "stay above vwap",
                nearPreviousKeyEventLevel: "above current consolidation and next consolidation bottom",
                coreTarget: 8.66,
                planConfigs: stock1Configs,
            },*/
            levelMomentumPlan: createDefaultLevelMomentumPlan(stock1Configs),
        },
    },
    {
        symbol: 'SPCX',
        analysis: {
            gap: { pdc: 120 },
            usePremarketKeyLevel: 0,
            watchAreas: [],
            noTradeZones: [],
            singleMomentumKeyLevel: [{ high: spcxlevel, low: spcxlevel }],
            zoneNearEdge: { zoneIsFar: true, high: 0, low: 0 },
            dualMomentumKeyLevels: [],
            defaultRiskLevels: [],
        },
        vwapCorrection: { open: 0, volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: Constants.marketCaps.GME,
        atr: {
            average: 0.49,
            mutiplier: 1.5,
            minimumMultipler: 1,
            maxQuantity: -1,
        },
        keyLevels: {
            otherLevels: [{ label: "trapped below", price: gmetrappedlevel }],
            zones: []
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
                { text: "20", partialCount: 1, atr: 0, rrr: 0, level: 20 },
                { text: "19", partialCount: 1, atr: 0, rrr: 0, level: 19 },
            ],
            gapDownAndGoDownPlan: {
                buyersTrappedBelowThisLevel: gmetrappedlevel,
                resistance: { high: gmetrappedlevel, low: 20.62 },
                waitForPullback: true,
                enableBidBreakdown: true,
                enableOfferReversal: true,
                runnerTriggerCondition: "lost vwap",
                runnerCount: 1,
                coreCount: 1,
                coreTarget: 20,
                planConfigs: stock2Configs,
            },
            levelMomentumPlan: createDefaultLevelMomentumPlan(stock2Configs),
        },
        long: {
            enabled: true,
            firstTargetToAdd: -1,
            finalTargets: [
                { text: "20.5", partialCount: 1, atr: 0, rrr: 0, level: 20.5 },
                { text: "20.8", partialCount: 1, atr: 0, rrr: 0, level: 20.8 },
            ],
            gapDownAndGoUpPlan: {
                planConfigs: stock2Configs,
                waitForPullback: true,
                enableBidReversal: true,
                enableOfferBreakout: false,
                runnerCount: 1,
                coreCount: 1,
                support: { high: 20, low: 19.93 },
                nearAboveSupport: { high: 20, low: 19.93 },
                runnerTriggerCondition: "breakout vwap",
                coreTarget: 20.5,
            },
            levelMomentumPlan: createDefaultLevelMomentumPlan(stock2Configs),
        },
    },

];
