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
    'NVDA', 'AMD',
];
const nvdatrapped = 181.46;
const nvdadipbuy = 164.27;

const dkngtrappedlevel = 18.35;
const amderlow = 475;

export const stocksTradingPlans: TradingPlans.TradingPlans[] = [
    {
        symbol: 'NVDA',
        strongHold: true,
        bookmapPatternsToMonitor: [],
        analysis: {
            gap: { pdc: 186.64 },
            usePremarketKeyLevel: 0,
            watchAreas: [],
            noTradeZones: [],
            singleMomentumKeyLevel: [{ high: nvdatrapped, low: nvdatrapped }],
            zoneNearEdge: { zoneIsFar: true, high: 0, low: 0 },
            dualMomentumKeyLevels: [],
            defaultRiskLevels: [],
            waitForBidRetest: "no",
            waitForOfferRetest: "no",
        },
        vwapCorrection: { open: 0, volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: Constants.marketCaps.NVDA,
        atr: {
            average: 7.77,
            mutiplier: 1,
            minimumMultipler: 1,
            maxQuantity: -1,
        },
        keyLevels: { zones: [] },
        fixedShares: [100, 200, 400, 800, 1600],
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
        corePlan: `short until dip buy near 165
        the gap down is large. so if short at the open without a pop, use very small size.
        after a pop, short bid breakdown.
        near 165, look for 2 bids claim or bid step up retest hold to long the reversal`,
        short: {
            enabled: true,
            firstTargetToAdd: TradingPlans.PriceIndicator.PremarketLow,
            finalTargets: [
                { text: "170", partialCount: 1, atr: 0, rrr: 0, level: 170 },
                { text: "165", partialCount: 1, atr: 0, rrr: 0, level: 165 },
            ],
            gapDownAndGoDownPlan: {
                buyersTrappedBelowThisLevel: nvdatrapped,
                coreTarget: 160,
                coreCount: 0,
                runnerCount: 0,
                runnerTriggerCondition: "below pm low",
                planConfigs: stock1Configs,
                resistance: { high: nvdatrapped, low: 179 },
            },
            levelMomentumPlan: createDefaultLevelMomentumPlan(stock1Configs),
        },
        long: {
            enabled: true,
            firstTargetToAdd: "-1",
            finalTargets: [
                { text: "170", partialCount: 1, atr: 0, rrr: 0, level: 170 },
                { text: "172", partialCount: 1, atr: 0, rrr: 0, level: 172 },
            ],
            gapDownAndGoUpPlan: {
                nearAboveKeyEventLevel: nvdadipbuy,
                coreCount: 0,
                coreTarget: 170,
                runnerCount: 0,
                runnerTriggerCondition: "hold above pm high",
                planConfigs: stock1Configs,
                support: { high: 165, low: nvdadipbuy },
            },
            levelMomentumPlan: createDefaultLevelMomentumPlan(stock1Configs),
        },
    },
    {
        symbol: 'AMD',
        strongHold: false,
        bookmapPatternsToMonitor: [],
        analysis: {
            gap: { pdc: 449.04 },
            usePremarketKeyLevel: 0,
            watchAreas: [],
            noTradeZones: [],
            singleMomentumKeyLevel: [{ high: amderlow, low: amderlow }],
            zoneNearEdge: { zoneIsFar: true, high: 0, low: 0 },
            dualMomentumKeyLevels: [],
            defaultRiskLevels: [],
            waitForBidRetest: "no",
            waitForOfferRetest: "no",
        },
        vwapCorrection: { open: 0, volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: Constants.marketCaps.AMD,
        atr: {
            average: 36.61,
            mutiplier: 1,
            minimumMultipler: 1,
            maxQuantity: -1,
        },
        keyLevels: { zones: [], otherLevels: [] },
        fixedShares: [25, 50, 75, 100],
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
        corePlan: `long only because stronger than NVDA.
        wait for reclaim earnings level 475, go long either 
        1. retest to some bids hold
        2. some bids lift the price`,
        short: {
            enabled: false,
            firstTargetToAdd: "-1",
            finalTargets: [
                { text: "pm low", partialCount: 1, atr: 0, rrr: 0, level: 188 },
                { text: "180", partialCount: 1, atr: 0, rrr: 0, level: 180 },
            ],
            /*
            gapAndCrapPlan: {
                extendedGapUpInAtr: 3.6,
                coreCount: 0,
                coreTarget: 188,
                runnerCount: 0,
                runnerTriggerCondition: "below vwap",
                planConfigs: stock1Configs,
                resistance: { high: amderlow, low: 188 },
            },*/
            levelMomentumPlan: createDefaultLevelMomentumPlan(stock1Configs),
        },
        long: {
            enabled: true,
            firstTargetToAdd: "-1",
            finalTargets: [
                { text: "500", partialCount: 1, atr: 0, rrr: 0, level: 500 },
                { text: "515", partialCount: 1, atr: 0, rrr: 0, level: 515 },
            ],
            gapAndGoPlan: {
                nearAboveConsolidationRange: "ath",
                coreCount: 0,
                coreTarget: 500,
                runnerCount: 0,
                runnerTriggerCondition: "hold above pm high",
                planConfigs: stock1Configs,
                support: { high: 476, low: amderlow },
            },
            levelMomentumPlan: createDefaultLevelMomentumPlan(stock1Configs),
        },
    },
    {
        symbol: 'DKNG',
        strongHold: false,
        bookmapPatternsToMonitor: [],
        analysis: {
            gap: { pdc: 23 },
            usePremarketKeyLevel: 0,
            watchAreas: [],
            noTradeZones: [],
            singleMomentumKeyLevel: [{ high: dkngtrappedlevel, low: dkngtrappedlevel }],
            zoneNearEdge: { zoneIsFar: true, high: 0, low: 0 },
            dualMomentumKeyLevels: [],
            defaultRiskLevels: [],
            waitForBidRetest: "no",
            waitForOfferRetest: "no",
        },
        vwapCorrection: { open: 0, volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: Constants.marketCaps.DKNG,
        atr: {
            average: 1,
            mutiplier: 1,
            minimumMultipler: 1,
            maxQuantity: -1,
        },
        keyLevels: { zones: [] },
        fixedShares: [500, 1000, 2000],
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
        corePlan: `buyers trapped below 18.35, gap down too push, wait for a pop and short bid breakdown`,
        short: {
            enabled: true,
            firstTargetToAdd: "-1",
            finalTargets: [
                { text: "17", partialCount: 1, atr: 0, rrr: 0, level: 17 },
                { text: "16.5", partialCount: 1, atr: 0, rrr: 0, level: 16.5 },
            ],
            gapDownAndGoDownPlan: {
                buyersTrappedBelowThisLevel: dkngtrappedlevel,
                coreCount: 0,
                coreTarget: 17,
                runnerCount: 0,
                runnerTriggerCondition: "below pm low",
                planConfigs: stock1Configs,
                resistance: { high: dkngtrappedlevel, low: 18 },
            },
            levelMomentumPlan: createDefaultLevelMomentumPlan(stock1Configs),
        },
        long: {
            enabled: false,
            firstTargetToAdd: "-1",
            finalTargets: [
                { text: "352", partialCount: 1, atr: 0, rrr: 0, level: 352 },
                { text: "360", partialCount: 1, atr: 0, rrr: 0, level: 360 },
            ],
            /*
            gapAndGoPlan: {
                nearPreviousKeyEventLevel: "er low",
                coreCount: 0,
                coreTarget: 350,
                runnerCount: 0,
                runnerTriggerCondition: "pullback to vwap and hold",
                planConfigs: stock1Configs,
                support: { high: 335, low: dkngtrappedlevel },
            },*/
            levelMomentumPlan: createDefaultLevelMomentumPlan(stock1Configs),
        },

    },
];
