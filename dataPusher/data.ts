import * as TradingPlans from './models';
import * as Constants from './constants';

export const activeProfileName: string = "momentumSimple";  // futures, momentumSimple;
export const stockSelections: string[] = ['RIVN', 'COIN'];

const tslaLongTarget: TradingPlans.ExitTargets = {
    priceLevels: [],
    rrr: [0.5, 0.85, 1],
    dailyRanges: [5],
    pinnedPrices: [],
}
const tslaShortTarget: TradingPlans.ExitTargets = {
    priceLevels: [270, 267],
    rrr: [0.5, 1, 1.5],
    dailyRanges: [10],
    pinnedPrices: [],
};
const rivnLongTarget: TradingPlans.ExitTargets = {
    priceLevels: [21],
    rrr: [0.5, 0.85, 1],
    dailyRanges: [0.5],
    pinnedPrices: [],
}
const rivnShortTarget: TradingPlans.ExitTargets = {
    priceLevels: [19.72],
    rrr: [0.5, 1, 1.5],
    dailyRanges: [0.75],
    pinnedPrices: [],
};
const coinTarget: TradingPlans.ExitTargets = {
    priceLevels: [75.14, 75.01],
    rrr: [0.8, 1.2],
    dailyRanges: [2.5, 3],
    pinnedPrices: [],
};

export const stocksTradingPlans: TradingPlans.TradingPlans[] = [
    {
        symbol: 'TSLA',
        vwapCorrection: { volumeSum: 3117056, tradingSum: 866445943 },
        dailyRange: 10,
        deferTradingInSeconds: 0,
        fixQuantity: 50,
        maxQuantity: 100,
        alwaysUseFixQuantity: false,
        keyLevels: { otherLevels: [277, 280] },
        short: {
            openingDrive: {
                planType: TradingPlans.PlanType.OpeningDrive,
                planConfigs: Constants.holdToDayCloseConfig,
                targets: tslaLongTarget,
                lastDefense: 278,
                stopForAgainstVwapLimitOrMarketEntry: 278.5,
            },
            momentum: {
                planType: TradingPlans.PlanType.Momentum,
                targets: tslaShortTarget,
                planConfigs: Constants.holdToDayCloseConfig,
            },
        },
        long: {
            momentum: {
                planType: TradingPlans.PlanType.Momentum,
                targets: tslaLongTarget,
                planConfigs: Constants.scalpConfig,
            },
        }
    },
    {
        symbol: 'RIVN',
        vwapCorrection: { volumeSum: 4826734, tradingSum: 99770434 },
        dailyRange: 1,
        deferTradingInSeconds: 0,
        fixQuantity: 500,
        maxQuantity: 800,
        alwaysUseFixQuantity: false,
        keyLevels: { otherLevels: [19.7] },
        short: {
            openingDrive: {
                planType: TradingPlans.PlanType.OpeningDrive,
                planConfigs: Constants.scalpConfig,
                targets: rivnShortTarget,
                lastDefense: 20.75,
                stopForAgainstVwapLimitOrMarketEntry: 20.87,
            },
            momentum: {
                planType: TradingPlans.PlanType.Momentum,
                targets: rivnShortTarget,
                planConfigs: Constants.dayTradeConfig,
            },
        },
        long: {
            momentum: {
                planType: TradingPlans.PlanType.Momentum,
                targets: rivnLongTarget,
                planConfigs: Constants.dayTradeConfig,
            },
            openingDrive: {
                planType: TradingPlans.PlanType.OpeningDrive,
                planConfigs: Constants.dayTradeConfig,
                targets: rivnLongTarget,
                lastDefense: 20.44,
                stopForAgainstVwapLimitOrMarketEntry: 20.4,
            },
        }
    },
    {
        symbol: 'COIN',
        vwapCorrection: { volumeSum: 310335, tradingSum: 24159397 },
        dailyRange: 5,
        deferTradingInSeconds: 0,
        fixQuantity: 100,
        maxQuantity: 200,
        alwaysUseFixQuantity: false,
        keyLevels: { otherLevels: [75] },
        short: {
            openingDrive: {
                planType: TradingPlans.PlanType.OpeningDrive,
                planConfigs: Constants.dayTradeConfig,
                targets: coinTarget,
                lastDefense: 78,
                stopForAgainstVwapLimitOrMarketEntry: 78.4,
            },
            momentum: {
                planType: TradingPlans.PlanType.Momentum,
                targets: coinTarget,
                planConfigs: Constants.dayTradeConfig,
            },
        },
        long: {
        }
    }
];