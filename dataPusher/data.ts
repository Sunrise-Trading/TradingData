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
    'GTLB', 'DELL'
];
const gtlblevel = 53.55;
const delllevel = 470;

export const stocksTradingPlans: TradingPlans.TradingPlans[] = [
    {
        symbol: 'GTLB',
        analysis: {
            gap: { pdc: 45 },
            usePremarketKeyLevel: 0,
            watchAreas: [],
            noTradeZones: [],
            singleMomentumKeyLevel: [{ high: gtlblevel, low: gtlblevel }],
            zoneNearEdge: { zoneIsFar: true, high: 0, low: 0 },
            dualMomentumKeyLevels: [],
            defaultRiskLevels: [],
        },
        vwapCorrection: { open: 0, volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: Constants.marketCaps.GTLB,
        atr: {
            average: 2,
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
        corePlan: "long above 53.55, wait for a pullback and then long bookmap patterns",
        short: {
            enabled: true,
            firstTargetToAdd: "-1",
            finalTargets: [
                { text: "50", partialCount: 1, atr: 0, rrr: 0, level: 50 },
                { text: "51", partialCount: 1, atr: 0, rrr: 0, level: 51 },
            ],
            gapAndCrapPlan: {
                planConfigs: stock1Configs,
                coreTarget: 60,
                coreCount: 1,
                runnerCount: 1,
                runnerTriggerCondition: "premarket high hold",
                extendedGapUpInAtr: 5,
                resistance: { high: gtlblevel, low: 53 },
            },
            levelMomentumPlan: createDefaultLevelMomentumPlan(stock1Configs),
        },
        long: {
            enabled: true,
            firstTargetToAdd: "-1",
            finalTargets: [
                { text: "60", partialCount: 1, atr: 0, rrr: 0, level: 60 },
                { text: "62", partialCount: 1, atr: 0, rrr: 0, level: 62 },
            ],
            gapAndGoPlan: {
                planConfigs: stock1Configs,
                coreTarget: 60,
                coreCount: 1,
                runnerCount: 1,
                runnerTriggerCondition: "premarket high hold",
                support: { high: 55, low: gtlblevel },
                nearPreviousKeyEventLevel: "earnings rally start 53.55"
            },
            levelMomentumPlan: createDefaultLevelMomentumPlan(stock1Configs),
        },
    },
    {
        symbol: 'DELL',
        analysis: {
            gap: { pdc: 425 },
            usePremarketKeyLevel: 0,
            watchAreas: [],
            noTradeZones: [],
            singleMomentumKeyLevel: [{ high: delllevel, low: delllevel }],
            zoneNearEdge: { zoneIsFar: true, high: 0, low: 0 },
            dualMomentumKeyLevels: [],
            defaultRiskLevels: [],
        },
        vwapCorrection: { open: 0, volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: Constants.marketCaps.DELL,
        atr: {
            average: 28,
            mutiplier: 1.5,
            minimumMultipler: 1,
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
        corePlan: "long above 470, no need to wait for pullback. long bookmap patterns",
        short: {
            enabled: false,
            firstTargetToAdd: "477",
            finalTargets: [
                { text: "477", partialCount: 1, atr: 0, rrr: 0, level: 477 },
                { text: "500", partialCount: 1, atr: 0, rrr: 0, level: 500 },
            ],

            levelMomentumPlan: createDefaultLevelMomentumPlan(stock2Configs),
        },
        long: {
            enabled: true,
            firstTargetToAdd: "477",
            finalTargets: [
                { text: "477", partialCount: 1, atr: 0, rrr: 0, level: 477 },
                { text: "500", partialCount: 1, atr: 0, rrr: 0, level: 500 },
            ],
            gapAndGoPlan: {
                planConfigs: stock2Configs,
                coreTarget: 500,
                coreCount: 1,
                support: { high: 475, low: 470 },
                runnerCount: 1,
                runnerTriggerCondition: "hold above 477",
                nearAboveConsolidationRange: "470-425"
            },
            levelMomentumPlan: createDefaultLevelMomentumPlan(stock2Configs),
        },
    },
];
