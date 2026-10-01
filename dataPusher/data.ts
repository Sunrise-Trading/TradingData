import * as TradingPlans from './models';
import * as Constants from './constants';

// futures, momentumSimple, tradeStationEquity, schwab
export const activeProfileName: string = "schwab";
export const tradingSettings: TradingPlans.TradingSettings = {
    snapMode: false,
    useSingleOrderForEntry: true,
};

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
    requireReversal: true,
    sizingCount: 10,
};
const stock2Configs: TradingPlans.PlanConfigs = {
    requireReversal: true,
    sizingCount: 10,
};

export const stockSelections: string[] = [
    'ACN',
];
const acnsupport = 200;
const acnresistance = 230;
const smmtlongstart = 18.42;
const smmtlongend = 18.83


export const stocksTradingPlans: TradingPlans.TradingPlans[] = [
    {
        symbol: 'ACN',
        analysis: {
            gap: { pdc: 183 },
            usePremarketKeyLevel: 0,
            watchAreas: [],
            noTradeZones: [],
            singleMomentumKeyLevel: [{ high: acnsupport, low: acnsupport }],
            zoneNearEdge: { zoneIsFar: true, high: 0, low: 0 },
            dualMomentumKeyLevels: [],
            defaultRiskLevels: [],
            waitForBidRetest: "warning",
            waitForOfferRetest: "warning",
        },
        vwapCorrection: { open: 0, volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: Constants.marketCaps.ACN,
        atr: {
            average: 7,
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
        rangeBoundReversalPlan: {
            support: { high: 207, low: acnsupport },
            resistance: { high: acnresistance, low: 220 },
            planConfigs: stock1Configs,
            coreCount: 0,
            coreTarget: 200,
            runnerTriggerCondition: "below pm low",
            runnerCount: 0,
            previousConsolidationArea: { high: 200, low: 170 },
        },
        corePlan: "gap and middle. wait for 2 large orders to fill for both bid and offer. And then trade the either direction.",
        short: {
            enabled: true,
            firstTargetToAdd: "-1",
            finalTargets: [
                { text: "200", partialCount: 1, atr: 0, rrr: 0, level: 200 },
                { text: "198", partialCount: 1, atr: 0, rrr: 0, level: 198 },
            ],
            /*
            gapDownAndGoDownPlan: {
                buyersTrappedBelowThisLevel: mrnalevel,
                coreCount: 0,
                coreTarget: 34,
                runnerCount: 0,
                runnerTriggerCondition: "below pm low",
                planConfigs: stock1Configs,
                resistance: { high: mrnalevel, low: 35.31 },
            },*/
            levelMomentumPlan: createDefaultLevelMomentumPlan(stock1Configs),
        },
        long: {
            enabled: false,
            firstTargetToAdd: "-1", // premarket high
            finalTargets: [
                { text: "220", partialCount: 1, atr: 0, rrr: 0, level: 220 },
                { text: "230", partialCount: 1, atr: 0, rrr: 0, level: 230 },
            ],
            /*
            gapDownAndGoUpPlan: {
                nearAboveKeyEventLevel: nkesupport,
                coreCount: 0,
                coreTarget: 37.5,
                runnerCount: 0,
                runnerTriggerCondition: "lost vwap",
                planConfigs: stock1Configs,
                support: { high: 36.5, low: nkesupport },
            },*/
            levelMomentumPlan: createDefaultLevelMomentumPlan(stock1Configs),
        },
    },
    {
        symbol: 'SMMT',
        analysis: {
            gap: { pdc: 15.48 },
            usePremarketKeyLevel: 0,
            watchAreas: [],
            noTradeZones: [],
            singleMomentumKeyLevel: [{ high: smmtlongstart, low: smmtlongstart }],
            zoneNearEdge: { zoneIsFar: true, high: 0, low: 0 },
            dualMomentumKeyLevels: [],
            defaultRiskLevels: [],
            waitForBidRetest: "warning",
            waitForOfferRetest: "no",
        },
        vwapCorrection: { open: 0, volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: 15000,
        atr: {
            average: 1,
            mutiplier: 2,
            minimumMultipler: 1.5,
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
        corePlan: "near its previous earnings level 30.11. Long above 30.11, short below 30.11. Due to being in a downtrend, long must wait for pullback.",
        short: {
            enabled: true,
            firstTargetToAdd: "-1",
            finalTargets: [
                { text: "17.5", partialCount: 1, atr: 0, rrr: 0, level: 17.5 },
                { text: "17", partialCount: 1, atr: 0, rrr: 0, level: 17 },
            ],
            gapAndCrapPlan: {
                planConfigs: stock2Configs,
                coreCount: 0,
                coreTarget: 17.5,
                runnerCount: 0,
                runnerTriggerCondition: "stay below vwap",
                extendedGapUpInAtr: 3.5,
                resistance: { high: smmtlongstart, low: 18 },
            },
            levelMomentumPlan: createDefaultLevelMomentumPlan(stock2Configs),
        },
        long: {
            enabled: true,
            firstTargetToAdd: `${smmtlongstart}`,
            finalTargets: [
                { text: "20", partialCount: 1, atr: 0, rrr: 0, level: 20 },
                { text: "20.5", partialCount: 1, atr: 0, rrr: 0, level: 20.5 },
            ],
            gapAndGoPlan: {
                planConfigs: stock2Configs,
                coreCount: 0,
                coreTarget: 20.5,
                runnerCount: 0,
                runnerTriggerCondition: "hold above premarket high",
                support: {
                    low: smmtlongstart, high: smmtlongend,
                },
                nearAboveConsolidationRange: "15-18.42"
            },
            levelMomentumPlan: createDefaultLevelMomentumPlan(stock2Configs),
        },
    },
];
