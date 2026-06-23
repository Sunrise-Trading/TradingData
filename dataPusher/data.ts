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
export const googleDocLink = "https://docs.google.com/document/d/1eZIGtO4NKr0XyARnEf8U9GEb8XrsSy5k-lJkEUAlvIM/edit?tab=t.0";

export const getGoogleDocId = () => {
    let docPrefix = "https://docs.google.com/document/d/";
    const docIdWithRest = googleDocLink.substring(googleDocLink.indexOf(docPrefix) + docPrefix.length);
    const docId = docIdWithRest.split('/')[0];
    return docId;
};
export const stockSelections: string[] = [
    //'MU' 
    'SPCX',
];
const spcxylow = 154;
const spcxpmlow = 146.88;
const ipolow = 149.34;
const spcxlevel = spcxpmlow;
const muma9 = 1045;
const stock2Level = 1;
const stock3Level = 1;
const stock4Level = 1;

export const stocksTradingPlans: TradingPlans.TradingPlans[] = [
    {
        symbol: 'SPCX',
        analysis: {
            gap: { pdc: 154.6 },
            usePremarketKeyLevel: 0,
            watchAreas: [],
            noTradeZones: [],
            singleMomentumKeyLevel: [{ high: spcxlevel, low: spcxlevel }],
            zoneNearEdge: { zoneIsFar: true, high: 0, low: 0 },
            dualMomentumKeyLevels: [],
            defaultRiskLevels: [],
        },
        vwapCorrection: { open: 0, volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: 100000,
        atr: {
            average: 20,
            mutiplier: 1,
            minimumMultipler: 0.5,
            maxRisk: 10,
            maxQuantity: -1,
        },
        keyLevels: {
            otherLevels: [ipolow]
        },
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
            firstTargetToAdd: spcxpmlow,
            finalTargets: [
                { text: "pm low", partialCount: 1, atr: 0, rrr: 0, level: spcxpmlow },
                { text: "100", partialCount: 1, atr: 0, rrr: 0, level: 100 },
            ],
            gapDownAndGoDownPlan: {
                buyersTrappedBelowThisLevel: ipolow,
                runnerCount: 2,
                runnerTriggerCondition: "pm low breakdown",
                coreCount: 2,
                coreTarget: spcxpmlow,
                targets: stock1Target, planConfigs: stock1Configs,
                waitForPullback: false,
            },
            levelMomentumPlan: createDefaultLevelMomentumPlan(stock1Target, stock1Configs),
            firstNewHighPlan: createDefaultFirstNewHighPlan(stock1Target, stock1Configs),
        },
        long: {
            enabled: true,
            firstTargetToAdd: -1,
            finalTargets: [
                { text: "ylow", partialCount: 2, atr: 0, rrr: 0, level: spcxylow },
                { text: "164", partialCount: 2, atr: 0, rrr: 0, level: 164 },
            ],
            gapDownAndGoUpPlan: {
                nearAboveKeyEventLevel: ipolow,
                targets: stock1Target, planConfigs: stock1Configs,
                waitForPullback: false,
                runnerCount: 2,
                runnerTriggerCondition: "ylow breakout",
                coreTarget: spcxylow,
                coreCount: 2,
                support: [{ high: ipolow, low: ipolow }]
            },
            levelMomentumPlan: createDefaultLevelMomentumPlan(stock1Target, stock1Configs),
            firstNewHighPlan: createDefaultFirstNewHighPlan(stock1Target, stock1Configs),
        },
    },
    {
        symbol: 'MU',
        analysis: {
            gap: { pdc: 1211 },
            usePremarketKeyLevel: 0,
            watchAreas: [],
            noTradeZones: [],
            singleMomentumKeyLevel: [{ high: stock2Level, low: stock2Level }],
            zoneNearEdge: { zoneIsFar: true, high: 0, low: 0 },
            dualMomentumKeyLevels: [],
            defaultRiskLevels: [],
        },
        vwapCorrection: { open: 0, volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: Constants.marketCaps.MU,
        atr: {
            average: 80,
            mutiplier: 1,
            minimumMultipler: 0.5,
            maxRisk: 50,
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
            enabled: false,
            firstTargetToAdd: 0,
            finalTargets: [
                { text: "", partialCount: 5, atr: 0, rrr: 0, level: 0 },
                { text: "", partialCount: 5, atr: 0, rrr: 0, level: 0 },
            ],
            levelMomentumPlan: createDefaultLevelMomentumPlan(stock2Target, stock2Configs),
            firstNewHighPlan: createDefaultFirstNewHighPlan(stock2Target, stock2Configs),
        },
        long: {
            enabled: true,
            firstTargetToAdd: -1,
            finalTargets: [
                { text: "gap fill", partialCount: 2, atr: 0, rrr: 0, level: 1160 },
                { text: "1140", partialCount: 2, atr: 0, rrr: 0, level: 1140 },
            ],
            gapDownAndGoUpPlan: {
                nearAboveSupport: { high: muma9, low: muma9 },
                runnerCount: 1,
                runnerTriggerCondition: "reclaim y low",
                coreCount: 1,
                coreTarget: 1160,
                targets: stock2Target, planConfigs: stock2Configs,
                support: [{ high: muma9, low: muma9 }],
                waitForPullback: false,
            },
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
