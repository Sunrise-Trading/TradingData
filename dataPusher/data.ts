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
    'IONQ',
];
const mstrsupport = 156;
const mstrresistance = 175;
const ionqinflection = 44.43;
const ionqpmhigh = 47.1;

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
        symbol: 'IONQ',
        analysis: {
            gap: { pdc: 27.30 },
            usePremarketKeyLevel: 0,
            watchAreas: [],
            noTradeZones: [],
            singleMomentumKeyLevel: [{ high: ionqinflection, low: ionqinflection }],
            zoneNearEdge: { zoneIsFar: true, high: 0, low: 0 },
            dualMomentumKeyLevels: [],
            defaultRiskLevels: [],
            waitForBidRetest: "warning",
            waitForOfferRetest: "no",
        },
        vwapCorrection: { open: 0, volumeSum: 0, tradingSum: 0 },
        marketCapInMillions: Constants.marketCaps.IONQ,
        atr: {
            average: 2.5,
            mutiplier: 1,
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
                { text: "42.4", partialCount: 1, atr: 0, rrr: 0, level: 42.4 },
                { text: "43", partialCount: 1, atr: 0, rrr: 0, level: 43 },
            ],
            gapAndCrapPlan: {
                planConfigs: stock2Configs,
                coreCount: 0,
                coreTarget: 42.4,
                runnerCount: 0,
                runnerTriggerCondition: "stay below vwap",
                extendedGapUpInAtr: 2,
                resistance: { high: ionqinflection, low: 44 },
            },
            levelMomentumPlan: createDefaultLevelMomentumPlan(stock2Configs),
        },
        long: {
            enabled: true,
            firstTargetToAdd: `${ionqpmhigh}`,
            finalTargets: [
                { text: "pm high", partialCount: 1, atr: 0, rrr: 0, level: ionqpmhigh },
                { text: "48", partialCount: 1, atr: 0, rrr: 0, level: 48 },
            ],
            gapAndGoPlan: {
                planConfigs: stock2Configs,
                coreCount: 0,
                coreTarget: ionqpmhigh,
                runnerCount: 0,
                runnerTriggerCondition: "hold above premarket high",
                support: {
                    low: ionqinflection, high: 45,
                },
                nearPreviousKeyEventLevel: "above 44.43"
            },
            levelMomentumPlan: createDefaultLevelMomentumPlan(stock2Configs),
        },
    },
];
