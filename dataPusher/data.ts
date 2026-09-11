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
const metalevel = 625;
const intclevel = 101.74;
const nvdaath = 236.54;
const nvdapmhigh = 232.48;
const intcyhigh = 103.23;
const intcrecenthigh = 106.69;

export const stocksTradingPlans: TradingPlans.TradingPlans[] = [
    {
        symbol: 'META',
        analysis: {
            gap: { pdc: 613 },
            usePremarketKeyLevel: 0,
            watchAreas: [],
            noTradeZones: [],
            singleMomentumKeyLevel: [{ high: metalevel, low: metalevel }],
            zoneNearEdge: { zoneIsFar: true, high: 0, low: 0 },
            dualMomentumKeyLevels: [],
            defaultRiskLevels: [],
        },
        vwapCorrection: { open: 0, volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: Constants.marketCaps.META,
        atr: {
            average: 19,
            mutiplier: 1,
            minimumMultipler: 1,
            maxQuantity: -1,
        },
        keyLevels: {
            zones: [], otherLevels: [
                // { price: 168.78, label: "ma200" },
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
                { text: "633", partialCount: 1, atr: 0, rrr: 0, level: 633 },
                { text: "625", partialCount: 1, atr: 0, rrr: 0, level: 625 },
            ],
            gapAndCrapPlan: {
                planConfigs: stock1Configs,
                coreTarget: 633,
                coreCount: 1,
                runnerCount: 1,
                runnerTriggerCondition: "lost vwap",
                extendedGapUpInAtr: 1.6,
                resistance: { high: 663, low: 660 },
            },
            levelMomentumPlan: createDefaultLevelMomentumPlan(stock1Configs),
        },
        long: {
            enabled: true,
            firstTargetToAdd: "-1",
            finalTargets: [
                { text: "655", partialCount: 1, atr: 0, rrr: 0, level: 655 },
                { text: "660", partialCount: 1, atr: 0, rrr: 0, level: 660 },
            ],
            gapAndGoPlan: {
                planConfigs: stock1Configs,
                coreTarget: 660,
                coreCount: 1,
                runnerCount: 1,
                runnerTriggerCondition: "premarket high hold",
                support: { high: 625, low: 620 },
                nearPreviousKeyEventLevel: "consolidation range 625-600"
            },
            levelMomentumPlan: createDefaultLevelMomentumPlan(stock1Configs),
        },
    },
    {
        symbol: 'INTC',
        analysis: {
            gap: { pdc: 100 },
            usePremarketKeyLevel: 0,
            watchAreas: [],
            noTradeZones: [],
            singleMomentumKeyLevel: [{ high: intclevel, low: intclevel }],
            zoneNearEdge: { zoneIsFar: true, high: 0, low: 0 },
            dualMomentumKeyLevels: [],
            defaultRiskLevels: [],
        },
        vwapCorrection: { open: 0, volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: Constants.marketCaps.NVAX,
        atr: {
            average: 5.48,
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
            firstTargetToAdd: `${intcyhigh}`,
            finalTargets: [
                { text: "y-high", partialCount: 1, atr: 0, rrr: 0, level: intcyhigh },
                { text: "main", partialCount: 1, atr: 0, rrr: 0, level: intcrecenthigh },
            ],
            gapAndGoPlan: {
                planConfigs: stock2Configs,
                coreTarget: intcrecenthigh,
                coreCount: 1,
                support: { high: intcyhigh, low: intclevel },
                runnerCount: 1,
                runnerTriggerCondition: "hold above y high",
                nearAboveConsolidationRange: "earnings level 101.74"
            },
            levelMomentumPlan: createDefaultLevelMomentumPlan(stock2Configs),
        },
    },
];
