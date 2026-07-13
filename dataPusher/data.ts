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

const crclselloffhigh = 73.2;
const crclmomentumsupport = 70;
const crcllastsupport = 67.5;
const crclfinaltarget = 76.54;
const crcllevel = crcllastsupport;
const mutrappedlevel = 960;
const mupmlow = 913;
const mulevel = mutrappedlevel;
const stock3Level = 1;
const stock4Level = 1;

export const stocksTradingPlans: TradingPlans.TradingPlans[] = [
    {
        symbol: 'CRCL',
        analysis: {
            gap: { pdc: 63 },
            usePremarketKeyLevel: 0,
            watchAreas: [],
            noTradeZones: [],
            singleMomentumKeyLevel: [{ high: crcllevel, low: crcllevel }],
            zoneNearEdge: { zoneIsFar: true, high: 0, low: 0 },
            dualMomentumKeyLevels: [],
            defaultRiskLevels: [],
        },
        vwapCorrection: { open: 0, volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: Constants.marketCaps.CRCL,
        atr: {
            average: 90,
            mutiplier: 1,
            minimumMultipler: 1,
            maxRisk: 50,
            maxQuantity: -1,
        },
        keyLevels: {
            otherLevels: [{
                label: "selloff high",
                price: crclselloffhigh
            }, {
                label: "momentum support",
                price: crclmomentumsupport
            }, { label: "last support", price: crcllastsupport }],
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
            firstTargetToAdd: crclselloffhigh,
            finalTargets: [
                { text: "selloff high", partialCount: 1, atr: 0, rrr: 0, level: crclselloffhigh },
                { text: "final target", partialCount: 1, atr: 0, rrr: 0, level: crclfinaltarget },
            ],
            gapAndCrapPlan: {
                runnerCount: 0,
                runnerTriggerCondition: "lose vwap",
                coreCount: 0,
                coreTarget: 1013,
                extendedGapUpInAtr: 0.6,
                waitForPullback: true,
                aboveThisLevelNoMoreShort: 2000,
                belowThisLevelOnlyVwapContinuation: 70,
                planConfigs: stock1Configs,
            },
            levelMomentumPlan: createDefaultLevelMomentumPlan(stock1Configs),
        },
        long: {
            enabled: true,
            firstTargetToAdd: crclselloffhigh,
            finalTargets: [
                { text: "selloff high", partialCount: 1, atr: 0, rrr: 0, level: crclselloffhigh },
                { text: "final target", partialCount: 1, atr: 0, rrr: 0, level: crclfinaltarget },
            ],
            gapAndGoPlan: {
                runnerCount: 0,
                runnerTriggerCondition: "breakout selloff high",
                coreCount: 0,
                coreTarget: crclselloffhigh,
                waitForPullback: false,
                planConfigs: stock1Configs,
                nearAboveConsolidationRange: "61-70",
                enableOfferBreakout: true,
                enableBidReversal: true,
                support: { high: crcllastsupport, low: crcllastsupport },
            },
            levelMomentumPlan: createDefaultLevelMomentumPlan(stock1Configs),
        },
    },
    {
        symbol: 'MU',
        analysis: {
            gap: { pdc: 979 },
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
            average: 87,
            mutiplier: 1,
            minimumMultipler: 1,
            maxRisk: 50,
            maxQuantity: -1,
        },
        keyLevels: {
            otherLevels: [{
                label: "trapped high",
                price: mutrappedlevel
            }]
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
            firstTargetToAdd: mupmlow,
            finalTargets: [
                { text: "pm low", partialCount: 2, atr: 0, rrr: 0, level: mupmlow },
                { text: "ma50", partialCount: 2, atr: 0, rrr: 0, level: 900 },
            ],
            gapDownAndGoDownPlan: {
                runnerCount: 1,
                coreCount: 1,
                coreTarget: mupmlow,
                runnerTriggerCondition: "lose pm low",
                planConfigs: stock2Configs,
                buyersTrappedBelowThisLevel: mutrappedlevel,
                waitForPullback: true,
            },
            levelMomentumPlan: createDefaultLevelMomentumPlan(stock2Configs),
        },
        long: {
            enabled: true,
            firstTargetToAdd: -1,
            finalTargets: [
                { text: "scalp", partialCount: 1, atr: 0, rrr: 0, level: 930 },
                { text: "pm high", partialCount: 1, atr: 0, rrr: 0, level: 950 },
            ],
            gapDownAndGoUpPlan: {
                runnerCount: 1,
                coreCount: 1,
                coreTarget: 950,
                runnerTriggerCondition: "reclaim vwap",
                planConfigs: stock2Configs,
                support: [{ high: mupmlow, low: mupmlow }],
                nearAboveSupport: { high: mupmlow, low: mupmlow },
                waitForPullback: true,
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
        keyLevels: {},
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
        keyLevels: {},
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
