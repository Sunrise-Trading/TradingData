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
    'SHOP'
];
const pltrer = 164.52;

const orcltrap = 128.38;
const shopgaphigh = 142;
const shopgaplow = 123.5;
export const stocksTradingPlans: TradingPlans.TradingPlans[] = [
    {
        symbol: 'PLTR',
        strongHold: true,
        bookmapPatternsToMonitor: [],
        analysis: {
            gap: { pdc: 178 },
            usePremarketKeyLevel: 0,
            watchAreas: [],
            noTradeZones: [],
            singleMomentumKeyLevel: [{ high: pltrer, low: pltrer }],
            zoneNearEdge: { zoneIsFar: true, high: 0, low: 0 },
            dualMomentumKeyLevels: [],
            defaultRiskLevels: [],
            waitForBidRetest: "no",
            waitForOfferRetest: "no",
        },
        vwapCorrection: { open: 0, volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: Constants.marketCaps.PLTR,
        atr: {
            average: 8.36,
            mutiplier: 1,
            minimumMultipler: 1,
            maxQuantity: -1,
        },
        keyLevels: { zones: [] },
        fixedShares: [60, 100, 200, 300],
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
        corePlan: `below 164.52, it's buyers trapped, short bid breakdown. 
        above 143,there's always buy the dip. 
        long reclaim 2 bids, bid hold retest. very small size on bid lift. 
        the best setup is let it retest some bids near 165`,
        short: {
            enabled: true,
            firstTargetToAdd: "-1",
            finalTargets: [
                { text: "162", partialCount: 1, atr: 0, rrr: 0, level: 162 },
                { text: "160", partialCount: 1, atr: 0, rrr: 0, level: 160 },
            ],
            gapDownAndGoDownPlan: {
                buyersTrappedBelowThisLevel: pltrer,
                coreCount: 0,
                coreTarget: 160,
                runnerCount: 0,
                runnerTriggerCondition: "below pm low",
                planConfigs: stock1Configs,
                resistance: { high: pltrer, low: 164 },
            },
            levelMomentumPlan: createDefaultLevelMomentumPlan(stock1Configs),
        },
        long: {
            enabled: true,
            firstTargetToAdd: "-1",
            finalTargets: [
                { text: "172", partialCount: 1, atr: 0, rrr: 0, level: 172 },
                { text: "177", partialCount: 1, atr: 0, rrr: 0, level: 177 },
            ],
            gapDownAndGoUpPlan: {
                nearAboveSupport: { high: 145, low: 143 },
                coreCount: 0,
                coreTarget: 177,
                runnerCount: 0,
                runnerTriggerCondition: "hold above vwap",
                planConfigs: stock1Configs,
                support: { high: 145, low: 143 },
            },
            levelMomentumPlan: createDefaultLevelMomentumPlan(stock1Configs),
        },
    },
    {
        symbol: 'SHOP',
        strongHold: false,
        bookmapPatternsToMonitor: [],
        analysis: {
            gap: { pdc: 156 },
            usePremarketKeyLevel: 0,
            watchAreas: [],
            noTradeZones: [],
            singleMomentumKeyLevel: [{ high: shopgaphigh, low: shopgaphigh }],
            zoneNearEdge: { zoneIsFar: true, high: 0, low: 0 },
            dualMomentumKeyLevels: [],
            defaultRiskLevels: [],
            waitForBidRetest: "no",
            waitForOfferRetest: "no",
        },
        vwapCorrection: { open: 0, volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: Constants.marketCaps.SHOP,
        atr: {
            average: 7.4,
            mutiplier: 1,
            minimumMultipler: 1,
            maxQuantity: -1,
        },
        keyLevels: { zones: [] },
        fixedShares: [50, 100, 20],
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
        corePlan: "in the middle of gap range, let it retest both large bid and offer. reversal style.",
        rangeBoundReversalPlan: {
            previousConsolidationArea: { high: shopgaphigh, low: shopgaplow },
            coreCount: 0,
            coreTarget: 140,
            runnerCount: 0,
            runnerTriggerCondition: "below vwap",
            planConfigs: stock1Configs,
            resistance: { high: shopgaphigh, low: 140 },
            support: { low: shopgaplow, high: 125 }
        },
        short: {
            enabled: true,
            firstTargetToAdd: "-1",
            finalTargets: [
                { text: "125", partialCount: 1, atr: 0, rrr: 0, level: 125 },
                { text: "130", partialCount: 1, atr: 0, rrr: 0, level: 130 },
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
                { text: "140", partialCount: 1, atr: 0, rrr: 0, level: 140 },
                { text: "142", partialCount: 1, atr: 0, rrr: 0, level: 142 },
            ],
            /*
            gapAndGoPlan: {
                nearPreviousKeyEventLevel: "previous sell off",
                coreCount: 0,
                coreTarget: 555,
                runnerCount: 0,
                runnerTriggerCondition: "hold above all time high",
                planConfigs: stock1Configs,
                support: { high: 545, low: shopgaphigh },
            },*/
            levelMomentumPlan: createDefaultLevelMomentumPlan(stock1Configs),
        },

    },
    {
        symbol: 'ORCL',
        strongHold: false,
        bookmapPatternsToMonitor: [],
        analysis: {
            gap: { pdc: 130 },
            usePremarketKeyLevel: 0,
            watchAreas: [],
            noTradeZones: [],
            singleMomentumKeyLevel: [{ high: orcltrap, low: orcltrap }],
            zoneNearEdge: { zoneIsFar: true, high: 0, low: 0 },
            dualMomentumKeyLevels: [],
            defaultRiskLevels: [],
            waitForBidRetest: "no",
            waitForOfferRetest: "no",
        },
        vwapCorrection: { open: 0, volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: Constants.marketCaps.ORCL,
        atr: {
            average: 7.6,
            mutiplier: 1,
            minimumMultipler: 1,
            maxQuantity: -1,
        },
        keyLevels: { zones: [] },
        fixedShares: [100, 200, 300, 400],
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
        corePlan: "below 128.38, short bid breakdown. above 128.38, long after seeing bids formed strong and hold the price to stay above it. it's a bit bearish, long needs more time to develop",
        short: {
            enabled: true,
            firstTargetToAdd: TradingPlans.PriceIndicator.PremarketLow,
            finalTargets: [
                { text: "123", partialCount: 1, atr: 0, rrr: 0, level: 123 },
                { text: "115", partialCount: 1, atr: 0, rrr: 0, level: 115 },
            ],
            gapDownAndGoDownPlan: {
                buyersTrappedBelowThisLevel: orcltrap,
                coreCount: 0,
                coreTarget: 123,
                runnerCount: 0,
                runnerTriggerCondition: "below pm low",
                planConfigs: stock1Configs,
                resistance: { high: orcltrap, low: 128 },
            },
            levelMomentumPlan: createDefaultLevelMomentumPlan(stock1Configs),
        },
        long: {
            enabled: true,
            firstTargetToAdd: "-1",
            finalTargets: [
                { text: "130", partialCount: 1, atr: 0, rrr: 0, level: 130 },
                { text: "133", partialCount: 1, atr: 0, rrr: 0, level: 133 },
            ],
            gapDownAndGoUpPlan: {
                nearAboveKeyEventLevel: orcltrap,
                coreCount: 0,
                coreTarget: 133,
                runnerCount: 0,
                runnerTriggerCondition: "pullback to vwap and hold",
                planConfigs: stock1Configs,
                support: { high: 129, low: orcltrap },
            },
            levelMomentumPlan: createDefaultLevelMomentumPlan(stock1Configs),
        },

    },
];
