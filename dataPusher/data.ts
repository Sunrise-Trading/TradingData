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
    'GOOGL',
    'MSFT'
];
const googleerlow = 287.33;

const nclhtop = 18.31;
const msftmomo = 543.82;

export const stocksTradingPlans: TradingPlans.TradingPlans[] = [
    {
        symbol: 'GOOGL',
        bookmapPatternsToMonitor: [],
        analysis: {
            gap: { pdc: 324 },
            usePremarketKeyLevel: 0,
            watchAreas: [],
            noTradeZones: [],
            singleMomentumKeyLevel: [{ high: googleerlow, low: googleerlow }],
            zoneNearEdge: { zoneIsFar: true, high: 0, low: 0 },
            dualMomentumKeyLevels: [],
            defaultRiskLevels: [],
            waitForBidRetest: "no",
            waitForOfferRetest: "no",
        },
        vwapCorrection: { open: 0, volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: Constants.marketCaps.GOOGL,
        atr: {
            average: 8,
            mutiplier: 1,
            minimumMultipler: 1,
            maxQuantity: -1,
        },
        keyLevels: { zones: [] },
        fixedShares: [100, 200, 300],
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
        corePlan: `below 314 is buyers trapped, but we are at the target. so must wait for a big pop to short continuation. or we lost er low and short momentum. 
        above er low: short after offer breakout. 
        below er low: short bid breakout directly
        long is above previous war bounce level, also the er low. long wait for bids to hold above that.
        do not long offer breakout, wait for bids to hold. if bid break, flip short`,
        short: {
            enabled: true,
            firstTargetToAdd: "-1",
            finalTargets: [
                { text: "278", partialCount: 1, atr: 0, rrr: 0, level: 278 },
                { text: "280", partialCount: 1, atr: 0, rrr: 0, level: 280 },
            ],
            gapDownAndGoDownPlan: {
                buyersTrappedBelowThisLevel: 315,
                coreCount: 0,
                coreTarget: 278,
                runnerCount: 0,
                runnerTriggerCondition: "below pm low",
                planConfigs: stock1Configs,
                resistance: { high: googleerlow, low: 300 },
            },
            levelMomentumPlan: createDefaultLevelMomentumPlan(stock1Configs),
        },
        long: {
            enabled: true,
            firstTargetToAdd: "-1",
            finalTargets: [
                { text: "296", partialCount: 1, atr: 0, rrr: 0, level: 296 },
                { text: "300", partialCount: 1, atr: 0, rrr: 0, level: 300 },
            ],
            gapDownAndGoUpPlan: {
                nearAboveKeyEventLevel: googleerlow,
                coreCount: 0,
                coreTarget: 300,
                runnerCount: 0,
                runnerTriggerCondition: "hold above vwap",
                planConfigs: stock1Configs,
                support: { high: 290, low: googleerlow },
            },
            levelMomentumPlan: createDefaultLevelMomentumPlan(stock1Configs),
        },
    },
    {
        symbol: 'MSFT',
        bookmapPatternsToMonitor: [],
        analysis: {
            gap: { pdc: 531 },
            usePremarketKeyLevel: 0,
            watchAreas: [],
            noTradeZones: [],
            singleMomentumKeyLevel: [{ high: msftmomo, low: msftmomo }],
            zoneNearEdge: { zoneIsFar: true, high: 0, low: 0 },
            dualMomentumKeyLevels: [],
            defaultRiskLevels: [],
            waitForBidRetest: "no",
            waitForOfferRetest: "no",
        },
        vwapCorrection: { open: 0, volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: Constants.marketCaps.MSFT,
        atr: {
            average: 10.7,
            mutiplier: 1,
            minimumMultipler: 1,
            maxQuantity: -1,
        },
        keyLevels: { zones: [] },
        fixedShares: [50, 100, 150],
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
        corePlan: "long above momo if bid holds. no short yet. it's stronger than googl and positive earnings, do not short it. due to decent gap, must wait to see pullback on bid hold",
        short: {
            enabled: false,
            firstTargetToAdd: "-1",
            finalTargets: [
                { text: "150", partialCount: 1, atr: 0, rrr: 0, level: 150 },
                { text: "148", partialCount: 1, atr: 0, rrr: 0, level: 148 },
            ],
            /*
            gapAndCrapPlan: {
                extendedGapUpInAtr: 2,
                coreCount: 0,
                coreTarget: 15.3,
                runnerCount: 0,
                runnerTriggerCondition: "below vwap",
                planConfigs: stock1Configs,
                resistance: { high: nclhtop, low: 154.6 },
            },*/
            levelMomentumPlan: createDefaultLevelMomentumPlan(stock1Configs),
        },
        long: {
            enabled: true,
            firstTargetToAdd: "-1",
            finalTargets: [
                { text: "ath", partialCount: 1, atr: 0, rrr: 0, level: 555 },
                { text: "ah high", partialCount: 1, atr: 0, rrr: 0, level: 568 },
            ],
            gapAndGoPlan: {
                nearPreviousKeyEventLevel: "previous sell off",
                coreCount: 0,
                coreTarget: 555,
                runnerCount: 0,
                runnerTriggerCondition: "hold above all time high",
                planConfigs: stock1Configs,
                support: { high: 545, low: msftmomo },
            },
            levelMomentumPlan: createDefaultLevelMomentumPlan(stock1Configs),
        },

    },
    {
        symbol: 'NCLH',
        bookmapPatternsToMonitor: [],
        analysis: {
            gap: { pdc: 16 },
            usePremarketKeyLevel: 0,
            watchAreas: [],
            noTradeZones: [],
            singleMomentumKeyLevel: [{ high: nclhtop, low: nclhtop }],
            zoneNearEdge: { zoneIsFar: true, high: 0, low: 0 },
            dualMomentumKeyLevels: [],
            defaultRiskLevels: [],
            waitForBidRetest: "no",
            waitForOfferRetest: "no",
        },
        vwapCorrection: { open: 0, volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: Constants.marketCaps.NCLH,
        atr: {
            average: 0.63,
            mutiplier: 1,
            minimumMultipler: 1,
            maxQuantity: -1,
        },
        keyLevels: { zones: [] },
        fixedShares: [2000, 3000, 4000],
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
        corePlan: "gap and crap until 157.5, small size until below pm low to go heavy",
        short: {
            enabled: true,
            firstTargetToAdd: "-1",
            finalTargets: [
                { text: "150", partialCount: 1, atr: 0, rrr: 0, level: 150 },
                { text: "148", partialCount: 1, atr: 0, rrr: 0, level: 148 },
            ],
            gapAndCrapPlan: {
                extendedGapUpInAtr: 2,
                coreCount: 0,
                coreTarget: 15.3,
                runnerCount: 0,
                runnerTriggerCondition: "below vwap",
                planConfigs: stock1Configs,
                resistance: { high: nclhtop, low: 154.6 },
            },
            levelMomentumPlan: createDefaultLevelMomentumPlan(stock1Configs),
        },
        long: {
            enabled: false,
            firstTargetToAdd: "-1",
            finalTargets: [
                { text: "pm high", partialCount: 1, atr: 0, rrr: 0, level: 16.41 },
                { text: "ma50", partialCount: 1, atr: 0, rrr: 0, level: 16.66 },
            ],
            /*
            gapAndGoPlan: {
                nearPreviousKeyEventLevel: "previous er",
                coreCount: 0,
                coreTarget: 17,
                runnerCount: 0,
                runnerTriggerCondition: "hold above pm high",
                planConfigs: stock1Configs,
                support: { high: 16, low: skhygaptop },
            },*/
            levelMomentumPlan: createDefaultLevelMomentumPlan(stock1Configs),
        },

    },
];
