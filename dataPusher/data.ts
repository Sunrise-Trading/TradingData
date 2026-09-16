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

export const stockSelections: string[] = [
    'INTC'
];
const intclevel = 101.74;
const crwdmoreaggressive = 218.31;
const crwdlevel = 215;
const nvdaath = 236.54;
const nvdapmhigh = 232.48;
const intcyhigh = 103.23;
const intcrecenthigh = 106.69;

export const stocksTradingPlans: TradingPlans.TradingPlans[] = [
    {
        symbol: 'INTC',
        analysis: {
            gap: { pdc: 97 },
            usePremarketKeyLevel: 0,
            watchAreas: [],
            noTradeZones: [],
            singleMomentumKeyLevel: [{ high: intclevel, low: intclevel }],
            zoneNearEdge: { zoneIsFar: true, high: 0, low: 0 },
            dualMomentumKeyLevels: [],
            defaultRiskLevels: [],
        },
        vwapCorrection: { open: 0, volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: Constants.marketCaps.INTC,
        atr: {
            average: 5.5,
            mutiplier: 1,
            minimumMultipler: 1,
            maxQuantity: -1,
        },
        keyLevels: {
            zones: [], otherLevels: [
                { price: 101.74, label: "er high" },
                // { price: 175, label: "final T" }
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
        corePlan: "wait for test for both bid and offer, then long above 625, short below 663, use 643 as pivot",
        short: {
            enabled: true,
            firstTargetToAdd: "-1",
            finalTargets: [
                { text: "99", partialCount: 1, atr: 0, rrr: 0, level: 99 },
                { text: "98", partialCount: 1, atr: 0, rrr: 0, level: 98 },
            ],
            gapAndCrapPlan: {
                planConfigs: stock1Configs,
                coreTarget: 99,
                coreCount: 1,
                runnerCount: 1,
                runnerTriggerCondition: "scalp",
                extendedGapUpInAtr: 1.6,
                topEdgeOfCurrentRange: 107,
                resistance: { high: 107, low: 106 },
            },
            levelMomentumPlan: createDefaultLevelMomentumPlan(stock1Configs),
        },
        long: {
            enabled: true,
            firstTargetToAdd: "-1",
            finalTargets: [
                { text: "105", partialCount: 1, atr: 0, rrr: 0, level: 105 },
                { text: "107", partialCount: 1, atr: 0, rrr: 0, level: 107 },
            ],
            gapAndGoPlan: {
                planConfigs: stock1Configs,
                coreTarget: 107,
                coreCount: 1,
                runnerCount: 1,
                runnerTriggerCondition: "scalp",
                support: { high: 91, low: 90 },
                nearPreviousKeyEventLevel: "consolidation range inside current range"
            },
            levelMomentumPlan: createDefaultLevelMomentumPlan(stock1Configs),
        },
    },
    {
        symbol: 'CRWD',
        analysis: {
            gap: { pdc: 206 },
            usePremarketKeyLevel: 0,
            watchAreas: [],
            noTradeZones: [],
            singleMomentumKeyLevel: [{ high: crwdlevel, low: crwdlevel }],
            zoneNearEdge: { zoneIsFar: true, high: 0, low: 0 },
            dualMomentumKeyLevels: [],
            defaultRiskLevels: [],
        },
        vwapCorrection: { open: 0, volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: Constants.marketCaps.CRWD,
        atr: {
            average: 11,
            mutiplier: 1,
            minimumMultipler: 0.5,
            maxQuantity: -1,
        },
        keyLevels: { zones: [] },
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
        corePlan: "small gap up, already pull back in premarket, no need to wait for pullback, long first breakout",
        short: {
            enabled: false,
            firstTargetToAdd: "-1",
            finalTargets: [
                { text: "pm low", partialCount: 1, atr: 0, rrr: 0, level: 352 },
                { text: "ah low", partialCount: 1, atr: 0, rrr: 0, level: 342 },
            ],
            /*
            gapDownAndGoDownPlan: {
                planConfigs: stock2Configs,
                coreTarget: 352,
                coreCount: 1,
                runnerCount: 1,
                runnerTriggerCondition: "stay below pm low",
                resistance: { high: 360, low: 358 },
                buyersTrappedBelowThisLevel: 360,
            },*/
            levelMomentumPlan: createDefaultLevelMomentumPlan(stock2Configs),
        },
        long: {
            enabled: true,
            firstTargetToAdd: `-1`,
            finalTargets: [
                { text: "228", partialCount: 1, atr: 0, rrr: 0, level: 228 },
                { text: "all time high", partialCount: 1, atr: 0, rrr: 0, level: 233 },
            ],
            gapAndGoPlan: {
                planConfigs: stock2Configs,
                coreTarget: 228,
                coreCount: 1,
                support: { high: crwdmoreaggressive, low: crwdlevel },
                runnerCount: 1,
                runnerTriggerCondition: "hold above y high",
                nearAboveConsolidationRange: "earnings level 205-218"
            },
            levelMomentumPlan: createDefaultLevelMomentumPlan(stock2Configs),
        },
    },
];
