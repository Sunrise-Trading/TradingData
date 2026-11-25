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
    'DELL', 'NVDA'
];
const nvdainflection = 125;
const nvdakeysupport = 150;

const antlevel = 83;
const amdswingsupport = 475;
const amdyhigh = 594;
const amd200ma = 430;
const amdfinaltarget = 400;
const amdpmlow = 451;
const amznshort = 300;
const delllevel = 274.35;

export const stocksTradingPlans: TradingPlans.TradingPlans[] = [
    {
        symbol: 'NVDA',
        strongHold: true,
        bookmapPatternsToMonitor: [],
        analysis: {
            gap: { pdc: 173 },
            usePremarketKeyLevel: 0,
            watchAreas: [],
            noTradeZones: [],
            singleMomentumKeyLevel: [{ high: nvdainflection, low: nvdainflection }],
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
        corePlan: `below 150, short bias.
        1. rally back to 150, cannot go to more than 151, short bid breakdown near below 150
        2. rally back to vwap, cannot go to 150, short bid breakdown near below vwap
        Above 143.73, long reversal. bid retest hold or bid lift price`,
        short: {
            enabled: true,
            firstTargetToAdd: TradingPlans.PriceIndicator.PremarketLow,
            finalTargets: [
                { text: "143.73", partialCount: 1, atr: 0, rrr: 0, level: 143.73 },
                { text: "130", partialCount: 1, atr: 0, rrr: 0, level: 130 },
            ],
            gapDownAndGoDownPlan: {
                midpointCheck: 146.86,
                buyersTrappedBelowThisLevel: 150,
                coreTarget: 143.73,
                coreCount: 0,
                runnerCount: 0,
                runnerTriggerCondition: "below pm low",
                planConfigs: stock1Configs,
                resistance: { high: 150, low: 146.86 },
            },
            levelMomentumPlan: createDefaultLevelMomentumPlan(stock1Configs),
        },
        long: {
            enabled: true,
            firstTargetToAdd: "-1",
            finalTargets: [
                { text: "150", partialCount: 1, atr: 0, rrr: 0, level: 150 },
                { text: "145", partialCount: 1, atr: 0, rrr: 0, level: 145 },
            ],
            gapDownAndGoUpPlan: {
                midpointCheck: 146.86,
                nearAboveKeyEventLevel: 143.73,
                coreCount: 0,
                coreTarget: 150,
                runnerCount: 0,
                runnerTriggerCondition: "hold above vwap",
                planConfigs: stock1Configs,
                support: { high: 145, low: 143.73 },
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
            gap: { pdc: 87 },
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
        corePlan: `wait for the dip to 83 ipo level and buy the dip with small risk
        add if bid step up and hold. short if 83 bid loss`,
        short: {
            enabled: true,
            firstTargetToAdd: "-1",
            finalTargets: [
                { text: "pm low", partialCount: 1, atr: 0, rrr: 0, level: 81.5 },
                { text: "75", partialCount: 1, atr: 0, rrr: 0, level: 75 },
            ],
            gapDownAndGoDownPlan: {
                nearBelowConsolidationRange: { high: antlevel, low: 80 },
                midpointCheck: 80,
                coreCount: 0,
                coreTarget: 75,
                runnerCount: 0,
                runnerTriggerCondition: "below vwap",
                planConfigs: stock1Configs,
                resistance: { high: antlevel, low: 80 },
            },
            levelMomentumPlan: createDefaultLevelMomentumPlan(stock1Configs),
        },
        long: {
            enabled: true,
            firstTargetToAdd: "-1",
            finalTargets: [
                { text: "90", partialCount: 1, atr: 0, rrr: 0, level: 90 },
                { text: "85", partialCount: 1, atr: 0, rrr: 0, level: 85 },
            ],
            gapDownAndGoUpPlan: {
                midpointCheck: 87.5,
                nearAboveKeyEventLevel: antlevel,
                coreCount: 0,
                coreTarget: 88,
                runnerCount: 0,
                runnerTriggerCondition: "scalp only",
                planConfigs: stock1Configs,
                support: { high: 85, low: antlevel },
            },
            levelMomentumPlan: createDefaultLevelMomentumPlan(stock1Configs),
        },

    },
    {
        symbol: 'DELL',
        strongHold: false,
        bookmapPatternsToMonitor: [],
        analysis: {
            gap: { pdc: 295 },
            usePremarketKeyLevel: 0,
            watchAreas: [],
            noTradeZones: [],
            singleMomentumKeyLevel: [{ high: delllevel, low: delllevel }],
            zoneNearEdge: { zoneIsFar: true, high: 0, low: 0 },
            dualMomentumKeyLevels: [],
            defaultRiskLevels: [],
            waitForBidRetest: "no",
            waitForOfferRetest: "no",
        },
        vwapCorrection: { open: 0, volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: Constants.marketCaps.DELL,
        atr: {
            average: 38,
            mutiplier: 1,
            minimumMultipler: 1,
            maxQuantity: -1,
        },
        keyLevels: { zones: [], otherLevels: [] },
        fixedShares: [25, 50, 100, 150],
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
        corePlan: `use 274 as key level. 
        short a bid breakdown below 274.
        long if a bid near 274 hold: retest and hold, lift the price. ideally a bid below 274`,
        short: {
            enabled: true,
            firstTargetToAdd: TradingPlans.PriceIndicator.PremarketLow,
            finalTargets: [
                { text: "250", partialCount: 1, atr: 0, rrr: 0, level: 250 },
                { text: "265", partialCount: 1, atr: 0, rrr: 0, level: 265 },
            ],
            gapDownAndGoDownPlan: {
                buyersTrappedBelowThisLevel: delllevel,
                midpointCheck: 270,
                coreCount: 0,
                coreTarget: 253,
                runnerCount: 0,
                runnerTriggerCondition: "below pm low",
                planConfigs: stock1Configs,
                resistance: { high: delllevel, low: 265 },
            },
            levelMomentumPlan: createDefaultLevelMomentumPlan(stock1Configs),
        },
        long: {
            enabled: true,
            firstTargetToAdd: "-1",
            finalTargets: [
                { text: "295", partialCount: 1, atr: 0, rrr: 0, level: 295 },
                { text: "281", partialCount: 1, atr: 0, rrr: 0, level: 281 },
            ],
            gapDownAndGoUpPlan: {
                midpointCheck: 281,
                nearAboveSupport: { high: 280, low: delllevel },
                coreCount: 0,
                coreTarget: 295,
                runnerCount: 0,
                runnerTriggerCondition: "hold above pm high",
                planConfigs: stock1Configs,
                support: { high: 280, low: delllevel },
            },
            levelMomentumPlan: createDefaultLevelMomentumPlan(stock1Configs),
        },
    },
];
