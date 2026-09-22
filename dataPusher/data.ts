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
    'ONON',
];
const mstrsupport = 156;
const mstrresistance = 175;
const ononlevel = 30.11;
const ononnexter = 31.62;

export const stocksTradingPlans: TradingPlans.TradingPlans[] = [
    {
        symbol: 'MSTR',
        analysis: {
            gap: { pdc: 154 },
            usePremarketKeyLevel: 0,
            watchAreas: [],
            noTradeZones: [],
            singleMomentumKeyLevel: [{ high: mstrsupport, low: mstrsupport }],
            zoneNearEdge: { zoneIsFar: true, high: 0, low: 0 },
            dualMomentumKeyLevels: [],
            defaultRiskLevels: [],
            waitForBidRetest: "warning",
            waitForOfferRetest: "warning",
        },
        vwapCorrection: { open: 0, volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: Constants.marketCaps.MSTR,
        atr: {
            average: 9,
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
            support: { high: mstrsupport, low: 155 },
            coreCount: 1,
            coreTarget: 160,
            runnerCount: 1,
            runnerTriggerCondition: "lost vwap",
            planConfigs: stock1Configs,
            resistance: { high: 180, low: mstrresistance },
            previousConsolidationArea: { high: 145, low: 120 },
        },
        corePlan: "gap and middle. wait for 2 large orders to fill for both bid and offer. And then trade the either direction.",
        short: {
            enabled: true,
            firstTargetToAdd: "-1",
            finalTargets: [
                { text: "160", partialCount: 1, atr: 0, rrr: 0, level: 160 },
                { text: "158", partialCount: 1, atr: 0, rrr: 0, level: 158 },
            ],
            /*
            gapAndCrapPlan: {
                extendedGapUpInAtr: 1.6,
                coreCount: 1,
                coreTarget: 160,
                runnerCount: 1,
                runnerTriggerCondition: "lost vwap",
                planConfigs: stock1Configs,
                resistance: { high: 180, low: mstrresistance },
            },*/
            levelMomentumPlan: createDefaultLevelMomentumPlan(stock1Configs),
        },
        long: {
            enabled: true,
            firstTargetToAdd: "-1", // premarket high
            finalTargets: [
                { text: "175", partialCount: 1, atr: 0, rrr: 0, level: 175 },
                { text: "170", partialCount: 1, atr: 0, rrr: 0, level: 170 },
            ],
            /*
            gapAndGoPlan: {
                nearAboveConsolidationRange: "120-146",
                coreCount: 1,
                coreTarget: 160,
                runnerCount: 1,
                runnerTriggerCondition: "lost vwap",
                planConfigs: stock1Configs,
                support: { high: mstrsupport, low: 155 },
            },*/
            levelMomentumPlan: createDefaultLevelMomentumPlan(stock1Configs),
        },
    },
    {
        symbol: 'ONON',
        analysis: {
            gap: { pdc: 27.30 },
            usePremarketKeyLevel: 0,
            watchAreas: [],
            noTradeZones: [],
            singleMomentumKeyLevel: [{ high: ononlevel, low: ononlevel }],
            zoneNearEdge: { zoneIsFar: true, high: 0, low: 0 },
            dualMomentumKeyLevels: [],
            defaultRiskLevels: [],
            waitForBidRetest: "warning",
            waitForOfferRetest: "no",
        },
        vwapCorrection: { open: 0, volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: Constants.marketCaps.ONON,
        atr: {
            average: 1,
            mutiplier: 1.5,
            minimumMultipler: 1,
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
            firstTargetToAdd: "-1",
            finalTargets: [
                { text: "28.5", partialCount: 1, atr: 0, rrr: 0, level: 28.5 },
                { text: "29", partialCount: 1, atr: 0, rrr: 0, level: 29 },
            ],
            gapAndCrapPlan: {
                planConfigs: stock2Configs,
                coreCount: 0,
                coreTarget: 29,
                runnerCount: 0,
                runnerTriggerCondition: "stay below vwap",
                extendedGapUpInAtr: 5,
                resistance: { high: ononlevel, low: 30 },
            },
            levelMomentumPlan: createDefaultLevelMomentumPlan(stock2Configs),
        },
        long: {
            enabled: true,
            firstTargetToAdd: `${ononnexter}`,
            finalTargets: [
                { text: "next er", partialCount: 1, atr: 0, rrr: 0, level: ononnexter },
                { text: "31", partialCount: 1, atr: 0, rrr: 0, level: 31 },
            ],
            gapAndGoPlan: {
                planConfigs: stock2Configs,
                coreCount: 0,
                coreTarget: ononnexter,
                runnerCount: 0,
                runnerTriggerCondition: "hold above premarket high",
                support: {
                    low: ononlevel, high: 30.5,
                },
                nearPreviousKeyEventLevel: "er level 30.11"
            },
            levelMomentumPlan: createDefaultLevelMomentumPlan(stock2Configs),
        },
    },
];
