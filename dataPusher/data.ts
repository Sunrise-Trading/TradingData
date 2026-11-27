import * as TradingPlans from './models';
import * as Constants from './constants';

// futures, momentumSimple, tradeStationEquity, schwab
export const activeProfileName: string = "schwab";
export const tradingSettings: TradingPlans.TradingSettings = {
    snapMode: false,
    useSingleOrderForEntry: true,
};

const defaultCorePlan = {
    midpointCheck: 0,
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
    'ANT', 'NVDA', 'XP'
];

const nvdakeysupport = 150;

const antlevel = 83;
const amdswingsupport = 475;
const amdyhigh = 594;
const amd200ma = 430;
const amdfinaltarget = 400;
const amdpmlow = 451;
const amznshort = 300;
const xplevel = 16.64;

export const stocksTradingPlans: TradingPlans.TradingPlans[] = [
    {
        symbol: 'NVDA',
        strongHold: true,
        bookmapPatternsToMonitor: [],
        analysis: {
            gap: { pdc: 149.3 },
            usePremarketKeyLevel: 0,
            watchAreas: [],
            noTradeZones: [],
            singleMomentumKeyLevel: [{ high: nvdakeysupport, low: nvdakeysupport }],
            zoneNearEdge: { zoneIsFar: true, high: 0, low: 0 },
            dualMomentumKeyLevels: [],
            defaultRiskLevels: [],
            waitForBidRetest: "no",
            waitForOfferRetest: "no",
        },
        vwapCorrection: { open: 0, volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: Constants.marketCaps.NVDA,
        atr: {
            average: 8.7,
            mutiplier: 1,
            minimumMultipler: 1,
            maxQuantity: -1,
        },
        keyLevels: { zones: [] },
        fixedShares: [50, 100, 200, 300, 400],
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
        corePlan: `buy the dip to 150.
        1. clear 150 bids and reclaim
        2. 150 bids lift the price
        3. 2 bids reclaim above 150`,
        short: {
            enabled: false,
            firstTargetToAdd: TradingPlans.PriceIndicator.PremarketLow,
            finalTargets: [
                { text: "143.73", partialCount: 1, atr: 0, rrr: 0, level: 143.73 },
                { text: "130", partialCount: 1, atr: 0, rrr: 0, level: 130 },
            ],
            /*
            gapDownAndGoDownPlan: {
                midpointCheck: 146.86,
                buyersTrappedBelowThisLevel: 150,
                coreTarget: 143.73,
                coreCount: 0,
                runnerCount: 0,
                runnerTriggerCondition: "below pm low",
                planConfigs: stock1Configs,
                resistance: { high: 150, low: 146.86 },
            },*/
            levelMomentumPlan: createDefaultLevelMomentumPlan(stock1Configs),
        },
        long: {
            enabled: true,
            firstTargetToAdd: "-1",
            finalTargets: [
                { text: "160", partialCount: 1, atr: 0, rrr: 0, level: 160 },
                { text: "155", partialCount: 1, atr: 0, rrr: 0, level: 155 },
            ],
            gapAndGoPlan: {
                midpointCheck: 152,
                nearPreviousKeyEventLevel: "150",
                coreCount: 0,
                coreTarget: 160,
                runnerCount: 0,
                runnerTriggerCondition: "hold above pm high",
                planConfigs: stock1Configs,
                support: { high: 152, low: nvdakeysupport },
            },
            levelMomentumPlan: createDefaultLevelMomentumPlan(stock1Configs),
        },
    },
    {
        symbol: 'AMD',
        strongHold: false,
        bookmapPatternsToMonitor: [],
        analysis: {
            gap: { pdc: 585 },
            usePremarketKeyLevel: 0,
            watchAreas: [],
            noTradeZones: [],
            singleMomentumKeyLevel: [{ high: amdswingsupport, low: amdswingsupport }],
            zoneNearEdge: { zoneIsFar: true, high: 0, low: 0 },
            dualMomentumKeyLevels: [],
            defaultRiskLevels: [],
            waitForBidRetest: "no",
            waitForOfferRetest: "no",
        },
        vwapCorrection: { open: 0, volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: Constants.marketCaps.AMD,
        atr: {
            average: 43,
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
        corePlan: `468 is the level AMD gap up on NVDA CEO news. now we lost it. 
        buyers will be trapped. short bids breakdown as long as AMD is below 468.
        if AMD reclaim 468, go long when bids below to form. flip short if those bids lose `,
        short: {
            enabled: true,
            firstTargetToAdd: TradingPlans.PriceIndicator.PremarketLow,
            finalTargets: [
                { text: "pm low", partialCount: 1, atr: 0, rrr: 0, level: amdpmlow },
                { text: "final", partialCount: 1, atr: 0, rrr: 0, level: amdfinaltarget },
            ],
            gapDownAndGoDownPlan: {
                buyersTrappedBelowThisLevel: amdswingsupport,
                midpointCheck: 430,
                coreCount: 0,
                coreTarget: 188,
                runnerCount: 0,
                runnerTriggerCondition: "below vwap",
                planConfigs: stock1Configs,
                resistance: { high: amdswingsupport, low: 456.2 },
            },
            levelMomentumPlan: createDefaultLevelMomentumPlan(stock1Configs),
        },
        long: {
            enabled: false,
            firstTargetToAdd: "-1",
            finalTargets: [
                { text: "yesterday high", partialCount: 1, atr: 0, rrr: 0, level: amdyhigh },
                { text: "500", partialCount: 1, atr: 0, rrr: 0, level: 500 },
            ],
            gapDownAndGoUpPlan: {
                midpointCheck: 585,
                nearAboveSupport: { high: 470, low: amdswingsupport },
                coreCount: 0,
                coreTarget: amdyhigh,
                runnerCount: 0,
                runnerTriggerCondition: "hold above pm high",
                planConfigs: stock1Configs,
                support: { high: 470, low: amdswingsupport },
            },
            levelMomentumPlan: createDefaultLevelMomentumPlan(stock1Configs),
        },
    },
    {
        symbol: 'ANT',
        strongHold: false,
        bookmapPatternsToMonitor: [],
        analysis: {
            gap: { pdc: 82.7 },
            usePremarketKeyLevel: 0,
            watchAreas: [],
            noTradeZones: [],
            singleMomentumKeyLevel: [{ high: antlevel, low: antlevel }],
            zoneNearEdge: { zoneIsFar: true, high: 0, low: 0 },
            dualMomentumKeyLevels: [],
            defaultRiskLevels: [],
            waitForBidRetest: "no",
            waitForOfferRetest: "no",
        },
        vwapCorrection: { open: 0, volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: Constants.marketCaps.ANT,
        atr: {
            average: 10,
            mutiplier: 1,
            minimumMultipler: 1,
            maxQuantity: -1,
        },
        keyLevels: { zones: [], otherLevels: [] },
        fixedShares: [100, 200, 300, 400, 500],
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
        corePlan: `buy the dip to 83.
        1. 83 bid hold retest
        2. reclaim 2 bids above 83
        3. 83 bid lift the price`,
        short: {
            enabled: false,
            firstTargetToAdd: "-1",
            finalTargets: [
                { text: "pm low", partialCount: 1, atr: 0, rrr: 0, level: 81.5 },
                { text: "75", partialCount: 1, atr: 0, rrr: 0, level: 75 },
            ],
            /*
            gapDownAndGoDownPlan: {
                nearBelowConsolidationRange: { high: antlevel, low: 80 },
                midpointCheck: 80,
                coreCount: 0,
                coreTarget: 75,
                runnerCount: 0,
                runnerTriggerCondition: "below vwap",
                planConfigs: stock1Configs,
                resistance: { high: antlevel, low: 80 },
            },*/
            levelMomentumPlan: createDefaultLevelMomentumPlan(stock1Configs),
        },
        long: {
            enabled: true,
            firstTargetToAdd: "-1",
            finalTargets: [
                { text: "90", partialCount: 1, atr: 0, rrr: 0, level: 90 },
                { text: "86", partialCount: 1, atr: 0, rrr: 0, level: 86 },
            ],
            gapAndGoPlan: {
                midpointCheck: 84.5,
                nearPreviousKeyEventLevel: "ipo 83",
                coreCount: 0,
                coreTarget: 86,
                runnerCount: 0,
                runnerTriggerCondition: "hold 83",
                planConfigs: stock1Configs,
                support: { high: 84.5, low: antlevel },
            },
            levelMomentumPlan: createDefaultLevelMomentumPlan(stock1Configs),
        },

    },
    {
        symbol: 'XP',
        strongHold: false,
        bookmapPatternsToMonitor: [],
        analysis: {
            gap: { pdc: 14.39 },
            usePremarketKeyLevel: 0,
            watchAreas: [],
            noTradeZones: [],
            singleMomentumKeyLevel: [{ high: xplevel, low: xplevel }],
            zoneNearEdge: { zoneIsFar: true, high: 0, low: 0 },
            dualMomentumKeyLevels: [],
            defaultRiskLevels: [],
            waitForBidRetest: "no",
            waitForOfferRetest: "no",
        },
        vwapCorrection: { open: 0, volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: 10000,
        atr: {
            average: 1.11,
            mutiplier: 1,
            minimumMultipler: 1,
            maxQuantity: -1,
        },
        keyLevels: { zones: [], otherLevels: [] },
        fixedShares: [500, 1000, 1500, 2000, 3000, 4000],
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
        corePlan: `use gap level 16.64 as key level. 
        short a bid breakdown below 16.64.
        long if a bid near 16.64 hold: retest and hold, lift the price. ideally a bid below 16.64
        large gap up, wait for a pullback first`,
        short: {
            enabled: true,
            firstTargetToAdd: TradingPlans.PriceIndicator.Vwap,
            finalTargets: [
                { text: "16", partialCount: 1, atr: 0, rrr: 0, level: 16 },
                { text: "15.8", partialCount: 1, atr: 0, rrr: 0, level: 15.8 },
            ],
            gapAndCrapPlan: {
                extendedGapUpInAtr: 3,
                midpointCheck: 15.5,
                coreCount: 0,
                coreTarget: 15.7,
                runnerCount: 0,
                runnerTriggerCondition: "below vwap",
                planConfigs: stock1Configs,
                resistance: { high: xplevel, low: 16 },
            },
            levelMomentumPlan: createDefaultLevelMomentumPlan(stock1Configs),
        },
        long: {
            enabled: true,
            firstTargetToAdd: "-1",
            finalTargets: [
                { text: "18", partialCount: 1, atr: 0, rrr: 0, level: 18 },
                { text: "18.78", partialCount: 1, atr: 0, rrr: 0, level: 18.78 },
            ],
            gapAndGoPlan: {
                midpointCheck: 18,
                nearAboveConsolidationRange: "gap level",
                coreCount: 0,
                coreTarget: 18,
                runnerCount: 0,
                runnerTriggerCondition: "hold above pm high",
                planConfigs: stock1Configs,
                support: { high: 17, low: xplevel },
            },
            levelMomentumPlan: createDefaultLevelMomentumPlan(stock1Configs),
        },
    },
];
