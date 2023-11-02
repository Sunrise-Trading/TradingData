import * as TradingPlans from './models';
import * as Constants from './constants';

export const activeProfileName: string = "momentumSimple";  // futures, momentumSimple;
export const tradingSettigns: TradingPlans.TradingSettings = {
    equalWeightDivider: 3,
};
const bigTarget: TradingPlans.ExitTargets = {
    initialTargets: {
        priceLevels: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        rrr: [0.9, 0.95, 1, 1.9, 2, 3, 3.5, 4, 5, 10],
        dailyRanges: [0.5, 0.6, 0.75, 0.8, 0.85, 0.9, 0.95, 1, 1, 1.1],
    },
    minimumTargets: {
        rrr: [0.9, 0.95, 1, 1.5, 1.8, 1.9, 2, 2, 2, 4],
        priceLevels: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        dailyRanges: [0.4, 0.45, 0.5, 0.5, 0.6, 0.7, 0.8, 0.9, 1, 1],
    }
}
const paycTarget: TradingPlans.ExitTargets = {
    initialTargets: {
        priceLevels: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        rrr: [0.9, 0.95, 1.5, 1.8, 2, 2.3, 2.5, 2.8, 3, 10],
        dailyRanges: [0.5, 0.6, 0.7, 0.75, 0.8, 0.85, 0.9, 0.95, 1, 1.1],
    },
    minimumTargets: {
        rrr: [0.9, 0.95, 1.4, 1.5, 1.8, 1.9, 2, 2.5, 3, 4],
        priceLevels: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        dailyRanges: [0.5, 0.6, 0.7, 0.75, 0.8, 0.85, 0.9, 0.95, 1, 1],
    }
}
export const stockSelections: string[] = [
    'PLTR',
    //'SHOP',
    //'ROKU',
];

export const stocksTradingPlans: TradingPlans.TradingPlans[] = [
    {
        symbol: 'PLTR',
        autoFlip: false,
        vwapCorrection: { volumeSum: 9038692, tradingSum: 153800480 },
        dailyRange: 1,
        deferTradingInSeconds: 0,
        keyLevels: {
            momentumStartForLong: 0,
            momentumStartForShort: 0,
        },
        short: {
            openingDrive: { targets: bigTarget, },
            momentum: { targets: bigTarget },
        },
        long: {
            momentum: { targets: Constants.baseHitFrequentStockTargets },
            openingDrive: { targets: Constants.baseHitFrequentStockTargets, },
        }
    },
    {
        symbol: 'ROKU',
        autoFlip: false,
        vwapCorrection: { volumeSum: 312330, tradingSum: 22162809 },
        dailyRange: 5,
        deferTradingInSeconds: 0,
        keyLevels: {
            momentumStartForLong: 0,
            momentumStartForShort: 0,
        },
        short: {
            openingDrive: { targets: bigTarget, },
            momentum: { targets: bigTarget },
        },
        long: {
            momentum: { targets: bigTarget },
            openingDrive: { targets: bigTarget, },
        }
    },
    {
        symbol: 'SHOP',
        autoFlip: false,
        vwapCorrection: { volumeSum: 1526551, tradingSum: 85928154 },
        dailyRange: 5,
        deferTradingInSeconds: 0,
        keyLevels: {
            momentumStartForLong: 0,
            momentumStartForShort: 0,
        },
        short: {
            openingDrive: { targets: bigTarget, },
            momentum: { targets: bigTarget },
        },
        long: {
            momentum: { targets: bigTarget },
            openingDrive: { targets: bigTarget, },
        }
    },
];