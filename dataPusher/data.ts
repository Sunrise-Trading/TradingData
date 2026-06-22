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
    targets: TradingPlans.ExitTargets,
    planConfigs: TradingPlans.PlanConfigs,
): TradingPlans.LevelMomentumPlan => ({
    enableAutoTrigger: false,
    targets,
    planConfigs,
    ...defaultCorePlan,
});
const createDefaultFirstNewHighPlan = (
    targets: TradingPlans.ExitTargets,
    planConfigs: TradingPlans.PlanConfigs,
): TradingPlans.FirstNewHighPlan => ({
    enableAutoTrigger: false,
    targets,
    planConfigs,
    ...defaultCorePlan,
});
const stock1Configs: TradingPlans.PlanConfigs = {
    size: defaultSize,
    requireReversal: true,
    alwaysAllowFlatten: true,
    alwaysAllowMoveStop: true,
    setupQuality: TradingPlans.SetupQuality.Scalp,
    sizingCount: 10,
};
const stock2Configs: TradingPlans.PlanConfigs = {
    size: defaultSize,
    requireReversal: true,
    alwaysAllowFlatten: true,
    alwaysAllowMoveStop: true,
    setupQuality: TradingPlans.SetupQuality.Scalp,
    sizingCount: 10,
};
const stock3Configs: TradingPlans.PlanConfigs = {
    size: defaultSize,
    requireReversal: true,
    alwaysAllowFlatten: true,
    alwaysAllowMoveStop: true,
    setupQuality: TradingPlans.SetupQuality.Scalp,
    sizingCount: 10,
};
const stock4Configs: TradingPlans.PlanConfigs = {
    size: defaultSize,
    requireReversal: true,
    alwaysAllowFlatten: true,
    alwaysAllowMoveStop: true,
    setupQuality: TradingPlans.SetupQuality.Scalp,
    sizingCount: 10,
};

const unlimitTargetForAll: TradingPlans.ExitTargets = {
    initialTargets: {
        priceLevels: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        rrr: [1.5, 1.8, 1.9, 2.4, 3, 4, 4, 4, 4, 4],
        dailyRanges: [3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
    },
};
const unlimitTargetForHalf: TradingPlans.ExitTargets = {
    initialTargets: {
        priceLevels: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        rrr: [1.5, 1.8, 1.9, 2.4, 3, 4, 4, 4, 4, 4],
        dailyRanges: [3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
    },
};
const stock1Target: TradingPlans.ExitTargets = {
    initialTargets: {
        priceLevels: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        rrr: [1.5, 1.6, 1.8, 1.9, 2, 2, 3, 3, 3, 3],
        dailyRanges: [1, 1, 1.5, 1.5, 1.9, 1.9, 1.9, 1.9, 1.9, 2],
    },
};
const stock2Target: TradingPlans.ExitTargets = {
    initialTargets: {
        priceLevels: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        rrr: [1.5, 1.6, 1.8, 1.9, 2, 2, 3, 3, 3, 3],
        dailyRanges: [1, 1, 1.5, 1.5, 1.9, 1.9, 1.9, 1.9, 1.9, 2],
    },
};
const stock3Target: TradingPlans.ExitTargets = {
    initialTargets: {
        priceLevels: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        rrr: [1.5, 1.6, 1.8, 1.9, 2, 2, 3, 3, 3, 3],
        dailyRanges: [1, 1, 1.5, 1.5, 1.9, 1.9, 1.9, 1.9, 1.9, 2],
    },
};
const stock4Target: TradingPlans.ExitTargets = {
    initialTargets: {
        priceLevels: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        rrr: [1.5, 1.6, 1.8, 1.9, 2, 2, 2, 2, 2, 2],
        dailyRanges: [1, 1, 1.5, 1.5, 1.9, 1.9, 1.9, 1.9, 1.9, 2],
    },
};
export const googleDocLink = "https://docs.google.com/document/d/18dnakOBOWL5VCGOepN6Nu4Wzg3K1CMBw8Ta49iDyMKc/edit?tab=t.0";

export const getGoogleDocId = () => {
    let docPrefix = "https://docs.google.com/document/d/";
    const docIdWithRest = googleDocLink.substring(googleDocLink.indexOf(docPrefix) + docPrefix.length);
    const docId = docIdWithRest.split('/')[0];
    return docId;
};
export const stockSelections: string[] = [
    'MU',//  'DFTX',
];
const dftxgapfill = 30;
const DFTXlevel = 100;
const mulevel = 2000;
const stock3Level = 1;
const stock4Level = 1;

export const stocksTradingPlans: TradingPlans.TradingPlans[] = [
    {
        symbol: 'DFTX',
        analysis: {
            gap: { pdc: 25 },
            usePremarketKeyLevel: 0,
            watchAreas: [],
            noTradeZones: [],
            singleMomentumKeyLevel: [{ high: DFTXlevel, low: DFTXlevel }],
            zoneNearEdge: { zoneIsFar: true, high: 0, low: 0 },
            dualMomentumKeyLevels: [],
            defaultRiskLevels: [],
        },
        vwapCorrection: { open: 0, volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: 2000,
        atr: {
            average: 1.38,
            mutiplier: 3,
            minimumMultipler: 2,
            maxRisk: 10,
            maxQuantity: -1,
        },
        keyLevels: {},
        defaultConfigs: stock1Configs,
        defaultTargets: stock1Target,
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
                { text: "26", partialCount: 1, atr: 0, rrr: 0, level: 26 },
                { text: "30", partialCount: 1, atr: 0, rrr: 0, level: 30 },
            ],
            gapAndCrapPlan: {
                extendedGapUpInAtr: 8,
                targets: stock1Target, planConfigs: stock1Configs,
                runnerCount: 2,
                runnerTriggerCondition: "vwap bounce fail",
                coreCount: 4,
                coreTarget: 38,
                aboveThisLevelNoMoreShort: 100,
                belowThisLevelOnlyVwapContinuation: 20,
                waitForPullback: false,
            },
            levelMomentumPlan: createDefaultLevelMomentumPlan(stock1Target, stock1Configs),
            firstNewHighPlan: createDefaultFirstNewHighPlan(stock1Target, stock1Configs),
        },
        long: {
            enabled: false,
            firstTargetToAdd: 0,
            finalTargets: [
                { text: "", partialCount: 5, atr: 0, rrr: 0, level: 0 },
                { text: "", partialCount: 5, atr: 0, rrr: 0, level: 0 },
            ],
            levelMomentumPlan: createDefaultLevelMomentumPlan(stock1Target, stock1Configs),
            firstNewHighPlan: createDefaultFirstNewHighPlan(stock1Target, stock1Configs),
        },
    },
    {
        symbol: 'MU',
        analysis: {
            gap: { pdc: 1134 },
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
            average: 80,
            mutiplier: 1,
            minimumMultipler: 1,
            maxRisk: 40,
            maxQuantity: -1,
        },
        keyLevels: {},
        defaultConfigs: stock2Configs,
        defaultTargets: stock2Target,
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
                { text: "1150", partialCount: 2, atr: 0, rrr: 0, level: 1150 },
                { text: "1180", partialCount: 1, atr: 0, rrr: 0, level: 1180 },
            ],
            gapAndCrapPlan: {
                extendedGapUpInAtr: 1,
                targets: stock2Target, planConfigs: stock2Configs,
                runnerCount: 2,
                runnerTriggerCondition: "vwap bounce fail",
                coreCount: 4,
                coreTarget: 1190,
                aboveThisLevelNoMoreShort: 2000,
                belowThisLevelOnlyVwapContinuation: 20,
                waitForPullback: false,
            },
            levelMomentumPlan: createDefaultLevelMomentumPlan(stock2Target, stock2Configs),
            firstNewHighPlan: createDefaultFirstNewHighPlan(stock2Target, stock2Configs),
        },
        long: {
            enabled: false,
            firstTargetToAdd: 0,
            finalTargets: [
                { text: "", partialCount: 5, atr: 0, rrr: 0, level: 0 },
                { text: "", partialCount: 5, atr: 0, rrr: 0, level: 0 },
            ],
            levelMomentumPlan: createDefaultLevelMomentumPlan(stock2Target, stock2Configs),
            firstNewHighPlan: createDefaultFirstNewHighPlan(stock2Target, stock2Configs),
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
        keyLevels: {},
        defaultConfigs: stock3Configs,
        defaultTargets: stock3Target,
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
            levelMomentumPlan: createDefaultLevelMomentumPlan(stock3Target, stock3Configs),
            firstNewHighPlan: createDefaultFirstNewHighPlan(stock3Target, stock3Configs),
        },
        long: {
            enabled: true,
            firstTargetToAdd: 0,
            finalTargets: [
                { text: "", partialCount: 5, atr: 0, rrr: 0, level: 0 },
                { text: "", partialCount: 5, atr: 0, rrr: 0, level: 0 },
            ],
            levelMomentumPlan: createDefaultLevelMomentumPlan(stock3Target, stock3Configs),
            firstNewHighPlan: createDefaultFirstNewHighPlan(stock3Target, stock3Configs),
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
        keyLevels: {},
        defaultConfigs: stock4Configs,
        defaultTargets: stock4Target,
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
            levelMomentumPlan: createDefaultLevelMomentumPlan(stock4Target, stock4Configs),
            firstNewHighPlan: createDefaultFirstNewHighPlan(stock4Target, stock4Configs),
        },
        long: {
            enabled: true,
            firstTargetToAdd: 0,
            finalTargets: [
                { text: "", partialCount: 5, atr: 0, rrr: 0, level: 0 },
                { text: "", partialCount: 5, atr: 0, rrr: 0, level: 0 },
            ],
            levelMomentumPlan: createDefaultLevelMomentumPlan(stock4Target, stock4Configs),
            firstNewHighPlan: createDefaultFirstNewHighPlan(stock4Target, stock4Configs),
        },
    },
];
