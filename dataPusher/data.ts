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
    'PCVX',
];
const acnsupport = 200;
const acnresistance = 230;
const pcvxresistance = 93;
const smmtlongend = 18.83
const nvdaath = 236.54;


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
        symbol: 'PCVX',
        analysis: {
            gap: { pdc: 56.48 },
            usePremarketKeyLevel: 0,
            watchAreas: [],
            noTradeZones: [],
            singleMomentumKeyLevel: [{ high: pcvxresistance, low: pcvxresistance }],
            zoneNearEdge: { zoneIsFar: true, high: 0, low: 0 },
            dualMomentumKeyLevels: [],
            defaultRiskLevels: [],
            waitForBidRetest: "no",
            waitForOfferRetest: "no",
        },
        vwapCorrection: { open: 0, volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: 13000,
        atr: {
            average: 2.15,
            mutiplier: 3,
            minimumMultipler: 2,
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
            firstTargetToAdd: "68",
            finalTargets: [
                { text: "83", partialCount: 1, atr: 0, rrr: 0, level: 83 },
                { text: "76", partialCount: 1, atr: 0, rrr: 0, level: 76 },
            ],

            gapAndCrapPlan: {
                planConfigs: stock2Configs,
                coreCount: 0,
                coreTarget: 76,
                runnerCount: 0,
                runnerTriggerCondition: "stay below vwap",
                extendedGapUpInAtr: 15,
                resistance: { high: 107, low: 93 },
            },
            levelMomentumPlan: createDefaultLevelMomentumPlan(stock2Configs),
        },
        long: {
            enabled: false,
            firstTargetToAdd: `${nvdaath}`,
            finalTargets: [
                { text: "240", partialCount: 1, atr: 0, rrr: 0, level: 240 },
                { text: "ath", partialCount: 1, atr: 1, rrr: 0, level: nvdaath },
            ],
            /*
            gapAndGoPlan: {
                planConfigs: stock2Configs,
                coreCount: 0,
                coreTarget: 240,
                runnerCount: 0,
                runnerTriggerCondition: "hold above all time high",
                support: {
                    low: pcvxresistance, high: 234.76,
                },
                nearAboveConsolidationRange: "this week range"
            },*/
            levelMomentumPlan: createDefaultLevelMomentumPlan(stock2Configs),
        },
    },
];
