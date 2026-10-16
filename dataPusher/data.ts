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
    'TSLA',
    //'AAPL'
];
const aaplsupport = 347;
const rklbpmlow = 52;
const tslasupply = 386;
const tslahigh = 386.83;


export const stocksTradingPlans: TradingPlans.TradingPlans[] = [
    {
        symbol: 'AAPL',
        bookmapPatternsToMonitor: [],
        analysis: {
            gap: { pdc: 342 },
            usePremarketKeyLevel: 0,
            watchAreas: [],
            noTradeZones: [],
            singleMomentumKeyLevel: [{ high: aaplsupport, low: aaplsupport }],
            zoneNearEdge: { zoneIsFar: true, high: 0, low: 0 },
            dualMomentumKeyLevels: [],
            defaultRiskLevels: [],
            waitForBidRetest: "no",
            waitForOfferRetest: "no",
        },
        vwapCorrection: { open: 0, volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: Constants.marketCaps.AAPL,
        atr: {
            average: 6.6,
            mutiplier: 1,
            minimumMultipler: 1,
            maxQuantity: -1,
        },
        keyLevels: { zones: [] },
        fixedShares: [200, 400],
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
        corePlan: "long when bid holds. either test a large bid or clear a large offer and then bids step up to hold",
        short: {
            enabled: false,
            firstTargetToAdd: "-1",
            finalTargets: [
                { text: "pm low", partialCount: 1, atr: 0, rrr: 0, level: rklbpmlow },
                { text: "47", partialCount: 1, atr: 0, rrr: 0, level: 47 },
            ],/*
            gapDownAndGoDownPlan: {
                buyersTrappedBelowThisLevel: aaplsupport,
                coreCount: 0,
                coreTarget: rklbpmlow,
                runnerCount: 0,
                runnerTriggerCondition: "below pm low",
                planConfigs: stock1Configs,
                resistance: { high: aaplsupport, low: 56 },
            },*/
            levelMomentumPlan: createDefaultLevelMomentumPlan(stock1Configs),
        },
        long: {
            enabled: true,
            firstTargetToAdd: TradingPlans.PriceIndicator.PremarketHigh,
            finalTargets: [
                { text: "350", partialCount: 1, atr: 0, rrr: 0, level: 350 },
                { text: "355", partialCount: 1, atr: 0, rrr: 0, level: 355 },
            ],
            gapAndGoPlan: {
                nearAboveConsolidationRange: "342-347",
                coreCount: 0,
                coreTarget: 355,
                runnerCount: 0,
                runnerTriggerCondition: "hold above premarket high",
                planConfigs: stock1Configs,
                support: { high: 348, low: aaplsupport },
            },
            levelMomentumPlan: createDefaultLevelMomentumPlan(stock1Configs),
        },
    },
    {
        symbol: 'TSLA',
        bookmapPatternsToMonitor: [],
        analysis: {
            gap: { pdc: 362 },
            usePremarketKeyLevel: 0,
            watchAreas: [],
            noTradeZones: [],
            singleMomentumKeyLevel: [{ high: tslasupply, low: tslasupply }],
            zoneNearEdge: { zoneIsFar: true, high: 0, low: 0 },
            dualMomentumKeyLevels: [],
            defaultRiskLevels: [],
            waitForBidRetest: "no",
            waitForOfferRetest: "warning",
        },
        vwapCorrection: { open: 0, volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: Constants.marketCaps.TSLA,
        atr: {
            average: 11,
            mutiplier: 1,
            minimumMultipler: 1,
            maxQuantity: -1,
        },
        keyLevels: {
            zones: [], otherLevels: [
                { price: tslahigh, label: "range high" }
            ]
        },
        fixedShares: [75, 125, 200],
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
        corePlan: "wait for a 10K order signal first. then short bid breakdown directly and keep stop tight of mini bounce high. If breakout offers, watch offer sell signal and short small bids breakdown",
        short: {
            enabled: true,
            firstTargetToAdd: "-1",
            finalTargets: [
                { text: "gap fill", partialCount: 1, atr: 0, rrr: 0, level: 365 },
                { text: "360", partialCount: 1, atr: 0, rrr: 0, level: 360 },
            ],
            gapAndCrapPlan: {
                planConfigs: stock2Configs,
                coreCount: 0,
                coreTarget: 365,
                runnerCount: 0,
                runnerTriggerCondition: "stay below vwap",
                extendedGapUpInAtr: 1.2,
                resistance: { high: tslasupply, low: 382 },
            },
            levelMomentumPlan: createDefaultLevelMomentumPlan(stock2Configs),
        },
        long: {
            enabled: true,
            firstTargetToAdd: TradingPlans.PriceIndicator.PremarketHigh,
            finalTargets: [
                { text: "390", partialCount: 1, atr: 0, rrr: 0, level: 390 },
                { text: "400", partialCount: 1, atr: 1, rrr: 0, level: 400 },
            ],
            gapAndGoPlan: {
                planConfigs: stock2Configs,
                coreCount: 0,
                coreTarget: tslahigh,
                runnerCount: 0,
                runnerTriggerCondition: "hold above premarket high",
                support: {
                    low: 364, high: 365,
                },
                nearAboveConsolidationRange: "340-375",
            },
            levelMomentumPlan: createDefaultLevelMomentumPlan(stock2Configs),
        },
    },
];
