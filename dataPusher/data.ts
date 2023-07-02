import * as TradingPlans from './models';
import * as Constants from './constants';

export const activeProfileName: string = "momentumSimple";  // futures, momentumSimple;
export const stockSelections: string[] = ['TSLA'];

const tslaLongTarget: TradingPlans.ExitTargets = {
    priceLevels: [245.46],
    rrr: [0.5, 0.85, 1],
    dailyRanges: [5],
    pinnedPrices: [],
}
const tslaShortTarget: TradingPlans.ExitTargets = {
    priceLevels: [240.89, 240.3],
    rrr: [0.85, 1],
    dailyRanges: [5],
    pinnedPrices: [],
};
const nvdaLongTarget: TradingPlans.ExitTargets = {
    priceLevels: [422],
    rrr: [0.9, 1.5, 1.75],
    dailyRanges: [7],
    pinnedPrices: [422],
};
const nvdaShortTarget: TradingPlans.ExitTargets = {
    priceLevels: [400, 397.55],
    rrr: [0.5, 0.85, 1,],
    dailyRanges: [4, 5],
    pinnedPrices: [],
};
const jobyTarget: TradingPlans.ExitTargets = {
    priceLevels: [9.74],
    rrr: [0.5, 0.85, 1,],
    dailyRanges: [1],
    pinnedPrices: [9.74],
};
export const stocksTradingPlans: TradingPlans.TradingPlans[] = [
    {
        symbol: 'TSLA',
        vwapCorrection: { volumeSum: 1185005, tradingSum: 297369972 },
        dailyRange: 10,
        deferTradingInSeconds: 301,
        fixQuantity: 50,
        alwaysUseFixQuantity: false,
        keyLevels: { otherLevels: [250.39] },
        short: {
            momentum: {
                planType: TradingPlans.PlanType.Momentum,
                targets: tslaShortTarget,
                planConfigs: Constants.scalpConfig,
            },
        },
        long: {
            momentum: {
                planType: TradingPlans.PlanType.Momentum,
                targets: tslaLongTarget,
                planConfigs: Constants.scalpConfig,
            },
        }
    }
];