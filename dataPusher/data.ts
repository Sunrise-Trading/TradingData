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
    'PAYC',
    //'AMD',
    //'EL',
];

export const stocksTradingPlans: TradingPlans.TradingPlans[] = [
    {
        symbol: 'PAYC',
        autoFlip: false,
        vwapCorrection: { volumeSum: 365415, tradingSum: 55628585 },
        dailyRange: 12,
        deferTradingInSeconds: 0,
        keyLevels: {
            momentumStartForLong: 0,
            momentumStartForShort: 0,
        },
        short: {
            openingDrive: { targets: paycTarget, },
            momentum: { targets: paycTarget },
        },
        long: {
            momentum: { targets: paycTarget },
            openingDrive: { targets: paycTarget, },
        }
    },
    {
        symbol: 'EL',
        autoFlip: false,
        vwapCorrection: { volumeSum: 265173, tradingSum: 29154248 },
        dailyRange: 8,
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
        symbol: 'AMD',
        autoFlip: false,
        vwapCorrection: { volumeSum: 1179101, tradingSum: 115366481 },
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