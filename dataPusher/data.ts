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
    'MSFT',
];
const qbts2atr = 19.21;
const msftinflection = 430;
const qbtspmhigh = 18.35;
const msftpmlow = 417;
const msftlevel = msftinflection;
const sofipreerlow = 15.5;
const glwtrappedlow = 123;
const sofilevel = sofipreerlow;
const glwpmlow = 116.66;
const stock3Level = 1;
const stock4Level = 1;

export const stocksTradingPlans: TradingPlans.TradingPlans[] = [
    {
        symbol: 'MSFT',
        analysis: {
            gap: { pdc: 390 },
            usePremarketKeyLevel: 0,
            watchAreas: [],
            noTradeZones: [],
            singleMomentumKeyLevel: [{ high: msftlevel, low: msftlevel }],
            zoneNearEdge: { zoneIsFar: true, high: 0, low: 0 },
            dualMomentumKeyLevels: [],
            defaultRiskLevels: [],
        },
        vwapCorrection: { open: 0, volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: Constants.marketCaps.MSFT,
        atr: {
            average: 11.8,
            mutiplier: 1.55,
            minimumMultipler: 1,
            maxQuantity: -1,
        },
        keyLevels: { zones: [] },
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
            firstTargetToAdd: msftpmlow,
            finalTargets: [
                { text: "pm low", partialCount: 1, atr: 0, rrr: 0, level: msftpmlow },
                { text: "gap fill", partialCount: 1, atr: 0, rrr: 0, level: 410 },
            ],
            gapAndCrapPlan: {
                extendedGapUpInAtr: 3,
                resistance: { high: msftinflection, low: 427 },
                runnerCount: 1,
                coreCount: 1,
                runnerTriggerCondition: "lost pm low",
                coreTarget: msftpmlow,
                enableOfferReversal: true,
                enableBidBreakdown: false,
                waitForPullback: true,
                planConfigs: stock1Configs,
            },
            levelMomentumPlan: createDefaultLevelMomentumPlan(stock1Configs),
        },
        long: {
            enabled: true,
            firstTargetToAdd: -1,
            finalTargets: [
                { text: "438", partialCount: 1, atr: 0, rrr: 0, level: 438 },
                { text: "1 atr", partialCount: 1, atr: 1, rrr: 0, level: 440 },
            ],
            gapAndGoPlan: {
                nearBelowConsolidationRangeTop: "430-403",
                support: { low: msftinflection, high: 433 },
                waitForPullback: true,
                planConfigs: stock1Configs,
                enableBidReversal: true, enableOfferBreakout: false,
                runnerCount: 0,
                coreCount: 0,
                runnerTriggerCondition: "momentum scalp",
                coreTarget: 438
            },
            levelMomentumPlan: createDefaultLevelMomentumPlan(stock1Configs),
        },
    },
    {
        symbol: 'SOFI',
        analysis: {
            gap: { pdc: 16.74 },
            usePremarketKeyLevel: 0,
            watchAreas: [],
            noTradeZones: [],
            singleMomentumKeyLevel: [{ high: sofilevel, low: sofilevel }],
            zoneNearEdge: { zoneIsFar: true, high: 0, low: 0 },
            dualMomentumKeyLevels: [],
            defaultRiskLevels: [],
        },
        vwapCorrection: { open: 0, volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: Constants.marketCaps.SOFI,
        atr: {
            average: 0.84,
            mutiplier: 1.5,
            minimumMultipler: 1,
            maxQuantity: -1,
        },
        keyLevels: {
            otherLevels: [{ label: "inflection", price: 15.5 }],
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
                { text: "14", partialCount: 1, atr: 0, rrr: 0, level: 14 },
                { text: "14.5", partialCount: 1, atr: 0, rrr: 0, level: 14.5 },
            ],
            gapDownAndGoDownPlan: {
                buyersTrappedBelowThisLevel: sofipreerlow,
                resistance: { high: sofipreerlow, low: 15 },
                waitForPullback: true,
                enableBidBreakdown: true,
                enableOfferReversal: true,
                runnerTriggerCondition: "sclap, keep stop tight",
                runnerCount: 1,
                coreCount: 1,
                coreTarget: 14,
                planConfigs: stock2Configs,
            },
            levelMomentumPlan: createDefaultLevelMomentumPlan(stock2Configs),
        },
        long: {
            enabled: true,
            firstTargetToAdd: -1,
            finalTargets: [
                { text: "16", partialCount: 1, atr: 0, rrr: 0, level: 16 },
                { text: "16.2", partialCount: 1, atr: 0, rrr: 0, level: 16.2 },
            ],
            gapDownAndGoUpPlan: {
                planConfigs: stock2Configs,
                waitForPullback: true,
                enableBidReversal: true,
                enableOfferBreakout: false,
                runnerCount: 1,
                coreCount: 1,
                support: { high: 15.75, low: sofipreerlow },
                nearAboveSupport: { high: 15.75, low: sofipreerlow },
                runnerTriggerCondition: "breakout vwap",
                coreTarget: 16,
            },
            levelMomentumPlan: createDefaultLevelMomentumPlan(stock2Configs),
        },
    },

];
