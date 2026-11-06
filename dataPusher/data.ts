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
    'IREN', 'ABNB',
    'DKNG'
];
const irenkeylevel = 20.98;

const dkngtrappedlevel = 18.35;
const abnbath = 193.45;

export const stocksTradingPlans: TradingPlans.TradingPlans[] = [
    {
        symbol: 'IREN',
        strongHold: true,
        bookmapPatternsToMonitor: [],
        analysis: {
            gap: { pdc: 18 },
            usePremarketKeyLevel: 0,
            watchAreas: [],
            noTradeZones: [],
            singleMomentumKeyLevel: [{ high: irenkeylevel, low: irenkeylevel }],
            zoneNearEdge: { zoneIsFar: true, high: 0, low: 0 },
            dualMomentumKeyLevels: [],
            defaultRiskLevels: [],
            waitForBidRetest: "no",
            waitForOfferRetest: "no",
        },
        vwapCorrection: { open: 0, volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: Constants.marketCaps.IREN,
        atr: {
            average: 2.8,
            mutiplier: 1,
            minimumMultipler: 1,
            maxQuantity: -1,
        },
        keyLevels: { zones: [] },
        fixedShares: [500, 1000, 1500, 2000],
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
        corePlan: `use selloff high as key level. 
        long above 20.98, long on bid holds.
        short bid breakdown below 20.98`,
        short: {
            enabled: true,
            firstTargetToAdd: "-1",
            finalTargets: [
                { text: "20.18", partialCount: 1, atr: 0, rrr: 0, level: 20.18 },
                { text: "19", partialCount: 1, atr: 0, rrr: 0, level: 19 },
            ],
            gapAndCrapPlan: {
                nearBelowPreviousEventKeyLevel: "irenkeylevel",
                coreTarget: 20,
                coreCount: 0,
                runnerCount: 0,
                runnerTriggerCondition: "below vwap",
                planConfigs: stock1Configs,
                resistance: { high: irenkeylevel, low: 20 },
            },
            levelMomentumPlan: createDefaultLevelMomentumPlan(stock1Configs),
        },
        long: {
            enabled: true,
            firstTargetToAdd: "-1",
            finalTargets: [
                { text: "24", partialCount: 1, atr: 0, rrr: 0, level: 24 },
                { text: "pm high", partialCount: 1, atr: 0, rrr: 0, level: 21.64 },
            ],
            gapAndGoPlan: {
                nearPreviousKeyEventLevel: "selloff day high",
                coreCount: 0,
                coreTarget: 24,
                runnerCount: 0,
                runnerTriggerCondition: "hold above pm high",
                planConfigs: stock1Configs,
                support: { high: 21.64, low: irenkeylevel },
            },
            levelMomentumPlan: createDefaultLevelMomentumPlan(stock1Configs),
        },
    },
    {
        symbol: 'ABNB',
        strongHold: false,
        bookmapPatternsToMonitor: [],
        analysis: {
            gap: { pdc: 170 },
            usePremarketKeyLevel: 0,
            watchAreas: [],
            noTradeZones: [],
            singleMomentumKeyLevel: [{ high: abnbath, low: abnbath }],
            zoneNearEdge: { zoneIsFar: true, high: 0, low: 0 },
            dualMomentumKeyLevels: [],
            defaultRiskLevels: [],
            waitForBidRetest: "no",
            waitForOfferRetest: "no",
        },
        vwapCorrection: { open: 0, volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: Constants.marketCaps.ABNB,
        atr: {
            average: 5.6,
            mutiplier: 1,
            minimumMultipler: 1,
            maxQuantity: -1,
        },
        keyLevels: { zones: [], otherLevels: [] },
        fixedShares: [25, 50, 75],
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
        corePlan: `long above ath, short below it.
        wait for a pullback to hit bids. large gap up, do not chase long`,
        short: {
            enabled: true,
            firstTargetToAdd: "-1",
            finalTargets: [
                { text: "pm low", partialCount: 1, atr: 0, rrr: 0, level: 188 },
                { text: "180", partialCount: 1, atr: 0, rrr: 0, level: 180 },
            ],
            gapAndCrapPlan: {
                extendedGapUpInAtr: 3.6,
                coreCount: 0,
                coreTarget: 188,
                runnerCount: 0,
                runnerTriggerCondition: "below vwap",
                planConfigs: stock1Configs,
                resistance: { high: abnbath, low: 188 },
            },
            levelMomentumPlan: createDefaultLevelMomentumPlan(stock1Configs),
        },
        long: {
            enabled: true,
            firstTargetToAdd: "-1",
            finalTargets: [
                { text: "pm high", partialCount: 1, atr: 0, rrr: 0, level: 195.9 },
                { text: "200", partialCount: 1, atr: 0, rrr: 0, level: 200 },
            ],
            gapAndGoPlan: {
                nearAboveConsolidationRange: "ath",
                coreCount: 0,
                coreTarget: 195.9,
                runnerCount: 0,
                runnerTriggerCondition: "hold above pm high",
                planConfigs: stock1Configs,
                support: { high: 195.9, low: abnbath },
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
