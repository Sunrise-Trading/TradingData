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
    'PLTR',
];
const pltrpreergap = 143;
const amznpmlow = 258.75;
const pltrpreerhigh = 145;
const pltrlevel = pltrpreergap;
const gmetrappedlevel = 20.89;
const glwtrappedlow = 123;
const gmelevel = gmetrappedlevel;
const glwpmlow = 116.66;
const stock3Level = 1;
const stock4Level = 1;

export const stocksTradingPlans: TradingPlans.TradingPlans[] = [
    {
        symbol: 'PLTR',
        analysis: {
            gap: { pdc: 125.65 },
            usePremarketKeyLevel: 0,
            watchAreas: [],
            noTradeZones: [],
            singleMomentumKeyLevel: [{ high: pltrlevel, low: pltrlevel }],
            zoneNearEdge: { zoneIsFar: true, high: 0, low: 0 },
            dualMomentumKeyLevels: [],
            defaultRiskLevels: [],
        },
        vwapCorrection: { open: 0, volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: Constants.marketCaps.PLTR,
        atr: {
            average: 6.32,
            mutiplier: 1,
            minimumMultipler: 1,
            maxQuantity: -1,
        },
        keyLevels: {
            zones: [
                { high: pltrpreerhigh, low: pltrpreergap, color: "green", label: "momo" }
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
            firstTargetToAdd: -1,
            finalTargets: [
                { text: "140", partialCount: 1, atr: 0, rrr: 0, level: 140 },
                { text: "gap fill", partialCount: 1, atr: 0, rrr: 0, level: 135 },
            ],
            gapAndCrapPlan: {
                extendedGapUpInAtr: 3.5,
                resistance: { high: pltrpreergap, low: 142 },
                runnerCount: 1,
                coreCount: 1,
                runnerTriggerCondition: "scalp",
                coreTarget: 140,
                enableOfferReversal: true,
                enableBidBreakdown: true,
                waitForPullback: true,
                planConfigs: stock1Configs,
            },
            levelMomentumPlan: createDefaultLevelMomentumPlan(stock1Configs),
        },
        long: {
            enabled: true,
            firstTargetToAdd: -1,
            finalTargets: [
                { text: "150", partialCount: 1, atr: 0, rrr: 0, level: 150 },
                { text: "152", partialCount: 1, atr: 1, rrr: 0, level: 152 },
            ],
            gapAndGoPlan: {
                support: { high: 139, low: 135 },
                enableOfferBreakout: true,
                enableBidReversal: true,
                waitForPullback: true,
                runnerCount: 1,
                coreCount: 1,
                runnerTriggerCondition: "breakout pm high",
                nearPreviousKeyEventLevel: "143 pre er gap",
                coreTarget: 150,
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
