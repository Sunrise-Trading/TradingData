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
    'AMZN',
];
const amznpmhigh = 266.69;
const amznpmlow = 258.75;
const amznlevel = amznpmhigh;
const sofipreerlow = 15.5;
const glwtrappedlow = 123;
const sofilevel = sofipreerlow;
const glwpmlow = 116.66;
const stock3Level = 1;
const stock4Level = 1;

export const stocksTradingPlans: TradingPlans.TradingPlans[] = [
    {
        symbol: 'AMZN',
        analysis: {
            gap: { pdc: 235 },
            usePremarketKeyLevel: 0,
            watchAreas: [],
            noTradeZones: [],
            singleMomentumKeyLevel: [{ high: amznlevel, low: amznlevel }],
            zoneNearEdge: { zoneIsFar: true, high: 0, low: 0 },
            dualMomentumKeyLevels: [],
            defaultRiskLevels: [],
        },
        vwapCorrection: { open: 0, volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: Constants.marketCaps.AMZN,
        atr: {
            average: 7.34,
            mutiplier: 1,
            minimumMultipler: 1,
            maxQuantity: -1,
        },
        keyLevels: {
            zones: [
                { high: 261, low: 260.8, color: "red", label: "momo" }
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
            firstTargetToAdd: amznpmlow,
            finalTargets: [
                { text: "pm low", partialCount: 1, atr: 0, rrr: 0, level: amznpmlow },
                { text: "consolidation", partialCount: 1, atr: 0, rrr: 0, level: 255 },
            ],
            gapAndCrapPlan: {
                extendedGapUpInAtr: 3.5,
                resistance: { high: 270, low: amznpmhigh },
                runnerCount: 1,
                coreCount: 1,
                runnerTriggerCondition: "lost pm low",
                coreTarget: amznpmlow,
                enableOfferReversal: true,
                enableBidBreakdown: true,
                waitForPullback: true,
                planConfigs: stock1Configs,
            },
            levelMomentumPlan: createDefaultLevelMomentumPlan(stock1Configs),
        },
        long: {
            enabled: false,
            firstTargetToAdd: -1,
            finalTargets: [
                { text: "438", partialCount: 1, atr: 0, rrr: 0, level: 438 },
                { text: "1 atr", partialCount: 1, atr: 1, rrr: 0, level: 440 },
            ],

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
