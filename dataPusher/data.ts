import * as TradingPlans from './models';
import * as Constants from './constants';

export const activeProfileName: string = "momentumSimple";  // futures, momentumSimple;
export const stockSelections: string[] = ['RIVN'];

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

export const stocksTradingPlans: TradingPlans.TradingPlans[] = [
    {
        symbol: 'TSLA',
        vwapCorrection: { volumeSum: 3117056, tradingSum: 866445943 },
        dailyRange: 10,
        deferTradingInSeconds: 0,
        fixQuantity: 50,
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
    }
];