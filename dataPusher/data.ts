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
    'AVGO',
    //'SNOW'
];
const snowlevel = 392;
const avgolevel = 360;

export const stocksTradingPlans: TradingPlans.TradingPlans[] = [
    {
        symbol: 'SNOW',
        analysis: {
            gap: { pdc: 305 },
            usePremarketKeyLevel: 0,
            watchAreas: [],
            noTradeZones: [],
            singleMomentumKeyLevel: [{ high: snowlevel, low: snowlevel }],
            zoneNearEdge: { zoneIsFar: true, high: 0, low: 0 },
            dualMomentumKeyLevels: [],
            defaultRiskLevels: [],
        },
        vwapCorrection: { open: 0, volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: Constants.marketCaps.SNOW,
        atr: {
            average: 13,
            mutiplier: 2,
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
        corePlan: "below 378, short aggressive. above 378, wait for pop failed to reclaim 378 or keep stop tight",
        short: {
            enabled: true,
            firstTargetToAdd: "-1",
            finalTargets: [
                { text: "350", partialCount: 1, atr: 0, rrr: 0, level: 350 },
                { text: "365", partialCount: 1, atr: 0, rrr: 0, level: 365 },
            ],
            gapAndCrapPlan: {
                planConfigs: stock1Configs,
                coreTarget: 365,
                coreCount: 1,
                runnerCount: 1,
                runnerTriggerCondition: "stay below 365",
                extendedGapUpInAtr: 5,
                resistance: { high: snowlevel, low: 390 },
            },
            levelMomentumPlan: createDefaultLevelMomentumPlan(stock1Configs),
        },
        long: {
            enabled: false,
            firstTargetToAdd: "-1",
            finalTargets: [
                { text: "60", partialCount: 1, atr: 0, rrr: 0, level: 60 },
                { text: "62", partialCount: 1, atr: 0, rrr: 0, level: 62 },
            ],
            /*
            gapAndGoPlan: {
                planConfigs: stock1Configs,
                coreTarget: 60,
                coreCount: 1,
                runnerCount: 1,
                runnerTriggerCondition: "premarket high hold",
                support: { high: 55, low: snowlevel },
                nearPreviousKeyEventLevel: "earnings rally start 53.55"
            },*/
            levelMomentumPlan: createDefaultLevelMomentumPlan(stock1Configs),
        },
    },
    {
        symbol: 'AVGO',
        analysis: {
            gap: { pdc: 367 },
            usePremarketKeyLevel: 0,
            watchAreas: [],
            noTradeZones: [],
            singleMomentumKeyLevel: [{ high: avgolevel, low: avgolevel }],
            zoneNearEdge: { zoneIsFar: true, high: 0, low: 0 },
            dualMomentumKeyLevels: [],
            defaultRiskLevels: [],
        },
        vwapCorrection: { open: 0, volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: Constants.marketCaps.AVGO,
        atr: {
            average: 12,
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
        corePlan: "wait for test of both offer and bid, then short below 360",
        short: {
            enabled: true,
            firstTargetToAdd: "-1",
            finalTargets: [
                { text: "pm low", partialCount: 1, atr: 0, rrr: 0, level: 352 },
                { text: "ah low", partialCount: 1, atr: 0, rrr: 0, level: 342 },
            ],
            gapDownAndGoDownPlan: {
                planConfigs: stock2Configs,
                coreTarget: 352,
                coreCount: 1,
                runnerCount: 1,
                runnerTriggerCondition: "stay below pm low",
                resistance: { high: 360, low: 358 },
                buyersTrappedBelowThisLevel: 360,
            },
            levelMomentumPlan: createDefaultLevelMomentumPlan(stock2Configs),
        },
        long: {
            enabled: false,
            firstTargetToAdd: "477",
            finalTargets: [
                { text: "477", partialCount: 1, atr: 0, rrr: 0, level: 477 },
                { text: "500", partialCount: 1, atr: 0, rrr: 0, level: 500 },
            ],
            /*
            gapAndGoPlan: {
                planConfigs: stock2Configs,
                coreTarget: 500,
                coreCount: 1,
                support: { high: 475, low: 470 },
                runnerCount: 1,
                runnerTriggerCondition: "hold above 477",
                nearAboveConsolidationRange: "470-425"
            },*/
            levelMomentumPlan: createDefaultLevelMomentumPlan(stock2Configs),
        },
    },
];
