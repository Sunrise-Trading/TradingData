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
    'PLTR',
];
const amdath = 645.46;
const acnresistance = 230;
const pltrsupport = 194.78;
const pltrgap = 201.82;
const pltrath = 207.52;

export const stocksTradingPlans: TradingPlans.TradingPlans[] = [
    {
        symbol: 'AMD2',
        analysis: {
            gap: { pdc: 631 },
            usePremarketKeyLevel: 0,
            watchAreas: [],
            noTradeZones: [],
            singleMomentumKeyLevel: [{ high: amdath, low: amdath }],
            zoneNearEdge: { zoneIsFar: true, high: 0, low: 0 },
            dualMomentumKeyLevels: [],
            defaultRiskLevels: [],
            waitForBidRetest: "warning",
            waitForOfferRetest: "warning",
        },
        vwapCorrection: { open: 0, volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: Constants.marketCaps.AMD,
        atr: {
            average: 23.47,
            mutiplier: 1,
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
            support: { high: 635, low: 633.5 },
            resistance: { high: 700, low: 680 },
            planConfigs: stock1Configs,
            coreCount: 0,
            coreTarget: 650,
            runnerTriggerCondition: "hold above pm high",
            runnerCount: 0,
            previousConsolidationArea: { high: 631, low: 621 },
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
        symbol: 'PLTR',
        analysis: {
            gap: { pdc: 1045 },
            usePremarketKeyLevel: 0,
            watchAreas: [],
            noTradeZones: [],
            singleMomentumKeyLevel: [{ high: pltrsupport, low: pltrsupport }],
            zoneNearEdge: { zoneIsFar: true, high: 0, low: 0 },
            dualMomentumKeyLevels: [],
            defaultRiskLevels: [],
            waitForBidRetest: "warning",
            waitForOfferRetest: "warning",
        },
        vwapCorrection: { open: 0, volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: Constants.marketCaps.PLTR,
        atr: {
            average: 43,
            mutiplier: 1,
            minimumMultipler: 1,
            maxQuantity: -1,
        },
        keyLevels: {
            zones: [], otherLevels: [
                { price: pltrgap, label: "gap fill" }
            ]
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
        corePlan: "near its previous earnings level 30.11. Long above 30.11, short below 30.11. Due to being in a downtrend, long must wait for pullback.",
        short: {
            enabled: true,
            firstTargetToAdd: "-1",
            finalTargets: [
                { text: "195", partialCount: 1, atr: 0, rrr: 0, level: 195 },
                { text: "194.75", partialCount: 1, atr: 0, rrr: 0, level: pltrsupport },
            ],
            gapDownAndGoDownPlan: {
                planConfigs: stock2Configs,
                coreCount: 0,
                coreTarget: pltrsupport,
                runnerCount: 0,
                runnerTriggerCondition: "stay below vwap",
                buyersTrappedBelowThisLevel: pltrath,
                resistance: { high: pltrath, low: pltrgap },
            },
            levelMomentumPlan: createDefaultLevelMomentumPlan(stock2Configs),
        },
        long: {
            enabled: true,
            firstTargetToAdd: TradingPlans.PriceIndicator.PremarketHigh,
            finalTargets: [
                { text: "gap fill", partialCount: 1, atr: 0, rrr: 0, level: pltrgap },
                { text: "ath", partialCount: 1, atr: 1, rrr: 0, level: pltrath },
            ],
            gapAndGoPlan: {
                planConfigs: stock2Configs,
                coreCount: 0,
                coreTarget: pltrgap,
                runnerCount: 0,
                runnerTriggerCondition: "hold above premarket high",
                support: {
                    low: pltrsupport, high: 195,
                },
                nearAboveConsolidationRange: "184-195",
            },
            levelMomentumPlan: createDefaultLevelMomentumPlan(stock2Configs),
        },
    },
];
