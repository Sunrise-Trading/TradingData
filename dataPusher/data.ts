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
    'PYPL',
];
const crmgaplevel = 227.67;
const pypllevel = 53.44;
const pyplmoreshort = 52.3;

export const stocksTradingPlans: TradingPlans.TradingPlans[] = [
    {
        symbol: 'CRM',
        analysis: {
            gap: { pdc: 205 },
            usePremarketKeyLevel: 0,
            watchAreas: [],
            noTradeZones: [],
            singleMomentumKeyLevel: [{ high: crmgaplevel, low: crmgaplevel }],
            zoneNearEdge: { zoneIsFar: true, high: 0, low: 0 },
            dualMomentumKeyLevels: [],
            defaultRiskLevels: [],
        },
        vwapCorrection: { open: 0, volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: Constants.marketCaps.CRM,
        atr: {
            average: 7.7,
            mutiplier: 1.5,
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
        corePlan: "CRM gapped up to a previous gap level. I will long above 226.67, target is 235-236. I will also short below 226.67, target is 217-218.",
        short: {
            enabled: true,
            firstTargetToAdd: "219",
            finalTargets: [
                { text: "219", partialCount: 1, atr: 0, rrr: 0, level: 219 },
                { text: "218", partialCount: 1, atr: 0, rrr: 0, level: 218 },
            ],
            gapAndCrapPlan: {
                resistance: { high: crmgaplevel, low: 226 },
                extendedGapUpInAtr: 2.7,
                coreCount: 1,
                coreTarget: 218,
                runnerCount: 1,
                runnerTriggerCondition: "breakdown/reject below vwap",
                waitForPullback: false,// if open price is below
                planConfigs: stock1Configs,
            },
            levelMomentumPlan: createDefaultLevelMomentumPlan(stock1Configs),
        },
        long: {
            enabled: true,
            firstTargetToAdd: "-1",
            finalTargets: [
                { text: "230", partialCount: 1, atr: 0, rrr: 0, level: 230 },
                { text: "235", partialCount: 1, atr: 0, rrr: 0, level: 235 },
            ],
            gapAndGoPlan: {
                support: { high: 230, low: crmgaplevel },
                nearPreviousKeyEventLevel: `${crmgaplevel}`,
                coreCount: 1,
                coreTarget: 235,
                runnerCount: 1,
                runnerTriggerCondition: "pullback hold above premarket high",
                planConfigs: stock1Configs,
                waitForPullback: true,
            },
            levelMomentumPlan: createDefaultLevelMomentumPlan(stock1Configs),
        },
    },
    {
        symbol: 'PYPL',
        analysis: {
            gap: { pdc: 61 },
            usePremarketKeyLevel: 0,
            watchAreas: [],
            noTradeZones: [],
            singleMomentumKeyLevel: [{ high: pypllevel, low: pypllevel }],
            zoneNearEdge: { zoneIsFar: true, high: 0, low: 0 },
            dualMomentumKeyLevels: [],
            defaultRiskLevels: [],
        },
        vwapCorrection: { open: 0, volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: Constants.marketCaps.PYPL,
        atr: {
            average: 1.43,
            mutiplier: 2,
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
        corePlan: "Short below 53.44* Main target: 52.3* Runner condition: below 52.3* Extended target: 50-48",
        short: {
            enabled: true,
            firstTargetToAdd: "52.3",
            finalTargets: [
                { text: "52.3", partialCount: 1, atr: 0, rrr: 0, level: pyplmoreshort },
                { text: "50", partialCount: 1, atr: 0, rrr: 0, level: 50 },
            ],
            gapDownAndGoDownPlan: {
                buyersTrappedBelowThisLevel: pypllevel,
                planConfigs: stock2Configs,
                coreCount: 1,
                coreTarget: pyplmoreshort,
                runnerCount: 1,
                runnerTriggerCondition: "below 52.3",
                waitForPullback: false,
                resistance: { high: pypllevel, low: pyplmoreshort },
            },
            levelMomentumPlan: createDefaultLevelMomentumPlan(stock2Configs),
        },
        long: {
            enabled: true,
            firstTargetToAdd: "54",
            finalTargets: [
                { text: "pm high", partialCount: 1, atr: 0, rrr: 0, level: 54 },
                { text: "55", partialCount: 1, atr: 0, rrr: 0, level: 55 },
            ],
            gapDownAndGoUpPlan: {
                support: { high: 54, low: pypllevel },
                planConfigs: stock2Configs,
                coreCount: 0,
                coreTarget: 55,
                runnerCount: 0,
                runnerTriggerCondition: "above premarket high",
                waitForPullback: false,
                nearAboveKeyEventLevel: pypllevel,
            },
            levelMomentumPlan: createDefaultLevelMomentumPlan(stock2Configs),
        },
    },
];
