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
const muylow = 873.63;
const mulevel = muylow;
const aehrpmlow = 92.59;
const aehrdailyrangehigh = 100.7;
const aehrinflection = 100;
const aehrlevel = 1;
const stock3Level = 1;
const stock4Level = 1;

export const stocksTradingPlans: TradingPlans.TradingPlans[] = [
    {
        symbol: 'MU',
        analysis: {
            gap: { pdc: 904 },
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
            average: 86,
            mutiplier: 1,
            minimumMultipler: 1,
            maxRisk: 50,
            maxQuantity: -1,
        },
        keyLevels: {
            otherLevels: [

            ],
            zones: [
                { high: 820, low: 800, color: "green", label: "core target" },
                { high: 780, low: 770, color: "green", label: "final target" },
                { high: 850, low: 840, color: "red", label: "breakdown short" },
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
            firstTargetToAdd: 850,
            finalTargets: [
                { text: "820", partialCount: 2, atr: 0, rrr: 0, level: 820 },
                { text: "800", partialCount: 2, atr: 0, rrr: 0, level: 800 },
            ],
            gapDownAndGoDownPlan: {
                planConfigs: stock1Configs,
                resistance: { high: muylow, low: 865 },
                buyersTrappedBelowThisLevel: muylow,
                coreTarget: 820,
                coreCount: 1,
                runnerCount: 1,
                runnerTriggerCondition: "lost 850",
                waitForPullback: false,
            },
            levelMomentumPlan: createDefaultLevelMomentumPlan(stock1Configs),
        },
        long: {
            enabled: true,
            firstTargetToAdd: -1,
            finalTargets: [
                { text: "y low", partialCount: 2, atr: 0, rrr: 0, level: muylow },
                { text: "vwap", partialCount: 2, atr: 0, rrr: 0, level: 870 },
            ],
            gapDownAndGoUpPlan: {
                planConfigs: stock1Configs,
                support: { high: 860, low: 850 },
                nearAboveSupport: { high: 860, low: 850 },
                coreTarget: muylow,
                coreCount: 1,
                runnerCount: 1,
                runnerTriggerCondition: "reclaim y-low",
                waitForPullback: false,
            },
            levelMomentumPlan: createDefaultLevelMomentumPlan(stock1Configs),
        },
    },
    {
        symbol: 'AEHR',
        analysis: {
            gap: { pdc: 72 },
            usePremarketKeyLevel: 0,
            watchAreas: [],
            noTradeZones: [],
            singleMomentumKeyLevel: [{ high: aehrlevel, low: aehrlevel }],
            zoneNearEdge: { zoneIsFar: true, high: 0, low: 0 },
            dualMomentumKeyLevels: [],
            defaultRiskLevels: [],
        },
        vwapCorrection: { open: 0, volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: Constants.marketCaps.AEHR,
        atr: {
            average: 10,
            mutiplier: 1,
            minimumMultipler: 1,
            maxRisk: 10,
            maxQuantity: -1,
        },
        keyLevels: {
            zones: [
                { high: 85, low: 84, color: "green", label: "cover 1", },
                { high: 95, low: 94, color: "green", label: "50 MA", }
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
            firstTargetToAdd: aehrpmlow,
            finalTargets: [
                { text: "pm low", partialCount: 3, atr: 0, rrr: 0, level: aehrpmlow },
                { text: "86", partialCount: 1, atr: 0, rrr: 0, level: 86 },
            ],
            gapAndCrapPlan: {
                extendedGapUpInAtr: 2,
                planConfigs: stock2Configs,
                coreTarget: aehrpmlow,
                coreCount: 3,
                runnerCount: 1,
                runnerTriggerCondition: "lost pm low",
                waitForPullback: false,
                resistance: { high: 100, low: 99 },
            },
            levelMomentumPlan: createDefaultLevelMomentumPlan(stock2Configs),
        },
        long: {
            enabled: true,
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
