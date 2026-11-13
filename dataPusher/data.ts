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
    'TSLA', 'AMD'
];
const nvdatrapped = 164.27;
const nvdasessionlow = 156.2;
const nvdamidpoint = 153.88;
const nvdasupport = 100;

const tslayhigh = 401.22;
const crwvgapfill = 60;
const crwvsupport = 53;
const amdswingsupport = 555;
const amdyhigh = 594;

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
            average: 8.7,
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
        corePlan: `already made huge move down. now it's long only.
        reclaim 2 bids
        bid steup up and lift price.
        bid step up and retest and hold.`,
        short: {
            enabled: true,
            firstTargetToAdd: TradingPlans.PriceIndicator.PremarketLow,
            finalTargets: [
                { text: "session low", partialCount: 1, atr: 0, rrr: 0, level: nvdasessionlow },
                { text: "mid point", partialCount: 1, atr: 0, rrr: 0, level: nvdamidpoint },
            ],
            gapDownAndGoDownPlan: {
                midpointCheck: nvdamidpoint,
                buyersTrappedBelowThisLevel: nvdatrapped,
                coreTarget: nvdasessionlow,
                coreCount: 0,
                runnerCount: 0,
                runnerTriggerCondition: "below pm low",
                planConfigs: stock1Configs,
                resistance: { high: nvdatrapped, low: nvdamidpoint },
            },
            levelMomentumPlan: createDefaultLevelMomentumPlan(stock1Configs),
        },
        long: {
            enabled: true,
            firstTargetToAdd: "-1",
            finalTargets: [
                { text: "200", partialCount: 1, atr: 0, rrr: 0, level: 200 },
                { text: "160", partialCount: 1, atr: 0, rrr: 0, level: 160 },
            ],

            gapDownAndGoUpPlan: {
                midpointCheck: nvdamidpoint,
                nearAboveKeyEventLevel: nvdasupport,
                coreCount: 0,
                coreTarget: 170,
                runnerCount: 0,
                runnerTriggerCondition: "hold above pm high",
                planConfigs: stock1Configs,
                support: { high: nvdamidpoint, low: nvdasupport },
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
            average: 39,
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
        corePlan: `swing long continuation. so strictly wait for a pullback to lose some levels, and bounce and then bids step up
        if bid lift price, small size
        if bid retest hold, medium size `,
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
                { text: "yesterday high", partialCount: 1, atr: 0, rrr: 0, level: amdyhigh },
                { text: "600", partialCount: 1, atr: 0, rrr: 0, level: 600 },
            ],
            gapDownAndGoUpPlan: {
                midpointCheck: 585,
                nearAboveSupport: { high: 566, low: amdswingsupport },
                coreCount: 0,
                coreTarget: amdyhigh,
                runnerCount: 0,
                runnerTriggerCondition: "hold above pm high",
                planConfigs: stock1Configs,
                support: { high: 566, low: amdswingsupport },
            },
            levelMomentumPlan: createDefaultLevelMomentumPlan(stock1Configs),
        },
    },
    {
        symbol: 'TSLA',
        strongHold: false,
        bookmapPatternsToMonitor: [],
        analysis: {
            gap: { pdc: 397 },
            usePremarketKeyLevel: 0,
            watchAreas: [],
            noTradeZones: [],
            singleMomentumKeyLevel: [{ high: tslayhigh, low: tslayhigh }],
            zoneNearEdge: { zoneIsFar: true, high: 0, low: 0 },
            dualMomentumKeyLevels: [],
            defaultRiskLevels: [],
            waitForBidRetest: "no",
            waitForOfferRetest: "no",
        },
        vwapCorrection: { open: 0, volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: Constants.marketCaps.TSLA,
        atr: {
            average: 16.5,
            mutiplier: 1,
            minimumMultipler: 1,
            maxQuantity: -1,
        },
        keyLevels: { zones: [] },
        fixedShares: [50, 100, 150, 200, 300],
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
        corePlan: `long only above y-high. due to gap up, wait for a pullback and see bids holding.
        target is 414.`,
        short: {
            enabled: false,
            firstTargetToAdd: "-1",
            finalTargets: [
                { text: "support", partialCount: 1, atr: 0, rrr: 0, level: crwvsupport },
                { text: "53.5", partialCount: 1, atr: 0, rrr: 0, level: 53.5 },
            ],
            /*
            gapAndCrapPlan: {
                midpointCheck: 55,
                extendedGapUpInAtr: 1.3,
                coreCount: 0,
                coreTarget: 53,
                runnerCount: 0,
                runnerTriggerCondition: "below vwap",
                planConfigs: stock1Configs,
                resistance: { high: tslayhigh, low: 55 },
            },*/
            levelMomentumPlan: createDefaultLevelMomentumPlan(stock1Configs),
        },
        long: {
            enabled: true,
            firstTargetToAdd: "-1",
            finalTargets: [
                { text: "414", partialCount: 1, atr: 0, rrr: 0, level: 414 },
                { text: "430", partialCount: 1, atr: 0, rrr: 0, level: 430 },
            ],
            gapAndGoPlan: {
                midpointCheck: 407.61,
                nearAboveConsolidationRange: "yesterday news high",
                coreCount: 0,
                coreTarget: 414,
                runnerCount: 0,
                runnerTriggerCondition: "hold above premarket high",
                planConfigs: stock1Configs,
                support: { high: 407.61, low: tslayhigh },
            },
            levelMomentumPlan: createDefaultLevelMomentumPlan(stock1Configs),
        },

    },
];
