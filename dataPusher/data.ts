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
    'SOUN',
];
const shopgap = 151.72;
const shoppreerhigh = 139.1;
const sounlevel = 8;
const gmetrappedlevel = 20.89;
const gmelevel = gmetrappedlevel;

export const stocksTradingPlans: TradingPlans.TradingPlans[] = [
    {
        symbol: 'SOUN',
        analysis: {
            gap: { pdc: 6.43 },
            usePremarketKeyLevel: 0,
            watchAreas: [],
            noTradeZones: [],
            singleMomentumKeyLevel: [{ high: sounlevel, low: sounlevel }],
            zoneNearEdge: { zoneIsFar: true, high: 0, low: 0 },
            dualMomentumKeyLevels: [],
            defaultRiskLevels: [],
        },
        vwapCorrection: { open: 0, volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: Constants.marketCaps.SOUN,
        atr: {
            average: 0.4,
            mutiplier: 2,
            minimumMultipler: 1,
            maxQuantity: -1,
        },
        keyLevels: {
            zones: [
                { high: 9.11, low: 8.92, color: "red", label: "gap down" }
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
            firstTargetToAdd: 7.8,
            finalTargets: [
                { text: "7.5", partialCount: 1, atr: 0, rrr: 0, level: 7.5 },
                { text: "7.3", partialCount: 1, atr: 0, rrr: 0, level: 7.3 },
            ],
            gapAndCrapPlan: {
                extendedGapUpInAtr: 4.7,
                resistance: { high: 8, low: 7.93 },
                runnerCount: 1,
                coreCount: 1,
                runnerTriggerCondition: "breakdown pm low",
                coreTarget: 7.8,
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
                { text: "8.65", partialCount: 1, atr: 0, rrr: 0, level: 8.65 },
                { text: "8.74", partialCount: 1, atr: 1, rrr: 0, level: 8.74 },
            ],
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
            },
            levelMomentumPlan: createDefaultLevelMomentumPlan(stock1Configs),
        },
    },
    {
        symbol: 'GME',
        analysis: {
            gap: { pdc: 21.72 },
            usePremarketKeyLevel: 0,
            watchAreas: [],
            noTradeZones: [],
            singleMomentumKeyLevel: [{ high: gmelevel, low: gmelevel }],
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
