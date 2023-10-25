import * as TradingPlans from './models';
import * as Constants from './constants';

export const activeProfileName: string = "momentumSimple";  // futures, momentumSimple;
export const tradingSettigns: TradingPlans.TradingSettings = {
    equalWeightDivider: 5,
};
const smallTarget: TradingPlans.ExitTargets = {
    initialTargets: {
        priceLevels: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        rrr: [0.9, 0.95, 1.8, 1.9, 2, 3, 3.5, 4, 5, 10],
        dailyRanges: [0.4, 0.45, 0.45, 0.5, 0.6, 0.7, 0.8, 0.9, 1, 1.1],
    },
    minimumTargets: {
        rrr: [0.9, 0.95, 1.3, 1.5, 1.8, 1.9, 2, 2, 2, 2],
        priceLevels: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        dailyRanges: [0.4, 0.45, 0.45, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5],
    }
}
const bigTarget: TradingPlans.ExitTargets = {
    initialTargets: {
        priceLevels: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        rrr: [0.9, 0.95, 1.8, 1.9, 2, 3, 3.5, 4, 5, 10],
        dailyRanges: [0.5, 0.6, 0.75, 0.8, 0.85, 0.9, 0.95, 1, 1, 1.1],
    },
    minimumTargets: {
        rrr: [0.9, 0.95, 1.3, 1.5, 1.8, 1.9, 2, 2, 2, 4],
        priceLevels: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        dailyRanges: [0.5, 0.6, 0.75, 0.8, 0.85, 0.9, 0.95, 1, 1, 1.1],
    }
}
export const stockSelections: string[] = [
    'MSFT',
    // 'TDOC'
];

export const stocksTradingPlans: TradingPlans.TradingPlans[] = [
    {
        symbol: 'TSLA',
        vwapCorrection: { volumeSum: 212225, tradingSum: 34487997 },
        dailyRange: 10,
        deferTradingInSeconds: 0,
        keyLevels: {
            momentumStartForLong: 0,
            momentumStartForShort: 0,
        },
        short: {
            openingDrive: { targets: Constants.tslaStockTargets, },
            momentum: { targets: Constants.tslaStockTargets },
        },
        long: {
            momentum: { targets: Constants.tslaStockTargets },
            openingDrive: { targets: Constants.tslaStockTargets, },
        }
    },
    {
        symbol: 'MSFT',
        vwapCorrection: { volumeSum: 672133, tradingSum: 231903337 },
        dailyRange: 9,
        deferTradingInSeconds: 0,
        keyLevels: {
            momentumStartForLong: 0,
            momentumStartForShort: 0,
        },
        short: {
            openingDrive: { targets: smallTarget, },
            momentum: { targets: smallTarget },
        },
        long: {
            openingDrive: { targets: smallTarget, },
            momentum: { targets: smallTarget },
        }
    },
    {
        symbol: 'TDOC',
        vwapCorrection: { volumeSum: 137042, tradingSum: 2335106 },
        dailyRange: 1.4,
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
            openingDrive: { targets: bigTarget, },
            momentum: { targets: bigTarget },
        }
    },
    {
        symbol: 'COIN',
        vwapCorrection: { volumeSum: 355795, tradingSum: 29633892 },
        dailyRange: 4.5,
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
            openingDrive: { targets: bigTarget, },
            momentum: { targets: bigTarget },
        }
    },
    {
        symbol: 'NVDA',
        vwapCorrection: { volumeSum: 256749, tradingSum: 111985870 },
        dailyRange: 14,
        deferTradingInSeconds: 0,
        keyLevels: {
            momentumStartForLong: 0,
            momentumStartForShort: 0,
        },
        short: {
            openingDrive: { targets: smallTarget, },
            momentum: { targets: smallTarget },
        },
        long: {
            openingDrive: { targets: smallTarget, },
            momentum: { targets: smallTarget },
        }
    },
];