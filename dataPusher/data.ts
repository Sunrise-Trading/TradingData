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
    'IREN',
];
const nflxconsolidationlow = 70.8;
const nflxlevel = nflxconsolidationlow;
const aehrpmlow = 92.59;
const aehrdailyrangehigh = 100.7;
const aehrinflection = 100;
const irenresistancelow = 37.68;
const irenresistancehigh = 42.44;
const irenlevel = 1;
const stock3Level = 1;
const stock4Level = 1;

export const stocksTradingPlans: TradingPlans.TradingPlans[] = [
    {
        symbol: 'NFLX',
        analysis: {
            gap: { pdc: 74 },
            usePremarketKeyLevel: 0,
            watchAreas: [],
            noTradeZones: [],
            singleMomentumKeyLevel: [{ high: nflxlevel, low: nflxlevel }],
            zoneNearEdge: { zoneIsFar: true, high: 0, low: 0 },
            dualMomentumKeyLevels: [],
            defaultRiskLevels: [],
        },
        vwapCorrection: { open: 0, volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: Constants.marketCaps.NFLX,
        atr: {
            average: 2.3,
            mutiplier: 1.5,
            minimumMultipler: 1,
            maxRisk: 5,
            maxQuantity: -1,
        },
        keyLevels: {
            otherLevels: [

            ],
            zones: [
                { high: 64, low: 63, color: "green", label: "final target" },
                { high: nflxconsolidationlow, low: 70, color: "red", label: "final resistance" },
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
                { text: "64", partialCount: 1, atr: 0, rrr: 0, level: 64 },
                { text: "63", partialCount: 1, atr: 0, rrr: 0, level: 63 },
            ],
            gapDownAndGoDownPlan: {
                planConfigs: stock1Configs,
                resistance: { high: nflxconsolidationlow, low: 70 },
                buyersTrappedBelowThisLevel: nflxconsolidationlow,
                coreTarget: 64,
                coreCount: 1,
                runnerCount: 1,
                runnerTriggerCondition: "lost pm low",
                waitForPullback: false,
                enableBidBreakdown: true,
                enableOfferReversal: true,
            },
            levelMomentumPlan: createDefaultLevelMomentumPlan(stock1Configs),
        },
        long: {
            enabled: false,
            firstTargetToAdd: -1,
            finalTargets: [
                { text: "y low", partialCount: 2, atr: 0, rrr: 0, level: nflxconsolidationlow },
                { text: "vwap", partialCount: 2, atr: 0, rrr: 0, level: 870 },
            ],
            gapDownAndGoUpPlan: {
                planConfigs: stock1Configs,
                support: { high: 860, low: 850 },
                nearAboveSupport: { high: 860, low: 850 },
                coreTarget: nflxconsolidationlow,
                coreCount: 1,
                runnerCount: 1,
                runnerTriggerCondition: "reclaim y-low",
                waitForPullback: false,
                enableOfferBreakout: true,
                enableBidReversal: false,
            },
            levelMomentumPlan: createDefaultLevelMomentumPlan(stock1Configs),
        },
    },
    {
        symbol: 'IREN',
        analysis: {
            gap: { pdc: 33.62 },
            usePremarketKeyLevel: 0,
            watchAreas: [],
            noTradeZones: [],
            singleMomentumKeyLevel: [{ high: irenlevel, low: irenlevel }],
            zoneNearEdge: { zoneIsFar: true, high: 0, low: 0 },
            dualMomentumKeyLevels: [],
            defaultRiskLevels: [],
        },
        vwapCorrection: { open: 0, volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: Constants.marketCaps.IREN,
        atr: {
            average: 4.2,
            mutiplier: 1,
            minimumMultipler: 1,
            maxRisk: 5,
            maxQuantity: -1,
        },
        keyLevels: {
            zones: [
                { high: 35, low: 34.92, color: "green", label: "cover", }
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
            enabled: true,
            firstTargetToAdd: -1,
            finalTargets: [
                { text: "y-low", partialCount: 3, atr: 0, rrr: 0, level: 35 },
                { text: "pm low", partialCount: 1, atr: 0, rrr: 0, level: 34 },
            ],
            gapAndCrapPlan: {
                extendedGapUpInAtr: 0.69,
                planConfigs: stock2Configs,
                coreTarget: 35,
                coreCount: 3,
                runnerCount: 1,
                runnerTriggerCondition: "breakdown y-low",
                waitForPullback: false,
                resistance: { high: irenresistancehigh, low: irenresistancelow, requireEntryWithinRange: false },
                enableBidBreakdown: false,
                enableOfferReversal: true,
            },
            levelMomentumPlan: createDefaultLevelMomentumPlan(stock2Configs),
        },
        long: {
            enabled: false,
            firstTargetToAdd: -1,
            finalTargets: [
                { text: "105", partialCount: 1, atr: 0, rrr: 0, level: 105 },
                { text: "107", partialCount: 1, atr: 0, rrr: 0, level: 107 },
            ],
            gapAndGoPlan: {
                planConfigs: stock2Configs,
                support: { high: 101, low: aehrdailyrangehigh },
                nearBelowConsolidationRangeTop: "100-100.7",
                coreTarget: aehrdailyrangehigh,
                coreCount: 0,
                runnerCount: 0,
                runnerTriggerCondition: "survive pullback above pm low",
                waitForPullback: false,
                enableOfferBreakout: true,
                enableBidReversal: false,
            },
            levelMomentumPlan: createDefaultLevelMomentumPlan(stock2Configs),
        },
    },
    {
        symbol: 'stock3',
        analysis: {

            gap: { pdc: 0 },
            usePremarketKeyLevel: 0,
            watchAreas: [],
            noTradeZones: [],
            singleMomentumKeyLevel: [{ high: stock3Level, low: stock3Level }],
            zoneNearEdge: { zoneIsFar: true, high: 0, low: 0 },
            dualMomentumKeyLevels: [],
            defaultRiskLevels: [],
        },
        vwapCorrection: { open: 0, volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: 0,
        atr: {
            average: 0,
            mutiplier: 0,
            minimumMultipler: 0,
            maxRisk: 0,
            maxQuantity: -1,
        },
        keyLevels: { zones: [] },
        defaultConfigs: stock3Configs,
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
            firstTargetToAdd: 0,
            finalTargets: [
                { text: "", partialCount: 5, atr: 0, rrr: 0, level: 0 },
                { text: "", partialCount: 5, atr: 0, rrr: 0, level: 0 },
            ],
            levelMomentumPlan: createDefaultLevelMomentumPlan(stock3Configs),
        },
        long: {
            enabled: true,
            firstTargetToAdd: 0,
            finalTargets: [
                { text: "", partialCount: 5, atr: 0, rrr: 0, level: 0 },
                { text: "", partialCount: 5, atr: 0, rrr: 0, level: 0 },
            ],
            levelMomentumPlan: createDefaultLevelMomentumPlan(stock3Configs),
        },
    },
    {
        symbol: 'stock4',
        analysis: {

            gap: { pdc: 0 }, // optional, pdv is previous day close
            usePremarketKeyLevel: 0,
            watchAreas: [],
            noTradeZones: [],
            singleMomentumKeyLevel: [{ high: stock4Level, low: stock4Level }],
            zoneNearEdge: { zoneIsFar: true, high: 0, low: 0 },
            dualMomentumKeyLevels: [],
            defaultRiskLevels: [],
        },
        vwapCorrection: { open: 0, volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: 0,
        atr: {
            average: 0,
            mutiplier: 0,
            minimumMultipler: 0,
            maxRisk: 0,
            maxQuantity: -1,
        },
        keyLevels: { zones: [] },
        defaultConfigs: stock4Configs,
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
            firstTargetToAdd: 0,
            finalTargets: [
                { text: "", partialCount: 5, atr: 0, rrr: 0, level: 0 },
                { text: "", partialCount: 5, atr: 0, rrr: 0, level: 0 },
            ],
            levelMomentumPlan: createDefaultLevelMomentumPlan(stock4Configs),
        },
        long: {
            enabled: true,
            firstTargetToAdd: 0,
            finalTargets: [
                { text: "", partialCount: 5, atr: 0, rrr: 0, level: 0 },
                { text: "", partialCount: 5, atr: 0, rrr: 0, level: 0 },
            ],
            levelMomentumPlan: createDefaultLevelMomentumPlan(stock4Configs),
        },
    },
];
