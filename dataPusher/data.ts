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
const srptTarget: TradingPlans.ExitTargets = {
    initialTargets: {
        priceLevels: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        rrr: [0.9, 0.95, 1, 1.5, 2, 3, 3.5, 4, 5, 10],
        dailyRanges: [0.5, 0.6, 0.7, 0.75, 0.8, 0.85, 0.9, 0.95, 1, 1.1],
    },
    minimumTargets: {
        rrr: [0.9, 0.95, 1, 1, 1.8, 1.9, 2, 2, 2, 4],
        priceLevels: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        dailyRanges: [0.5, 0.6, 0.7, 0.75, 0.8, 0.85, 0.9, 0.95, 1, 1],
    }
}
export const stockSelections: string[] = [
    'SRPT',
    //'PINS',
];

export const stocksTradingPlans: TradingPlans.TradingPlans[] = [
    {
        symbol: 'SRPT',
        autoFlip: false,
        vwapCorrection: { volumeSum: 2628498, tradingSum: 160884775 },
        dailyRange: 8,
        deferTradingInSeconds: 0,
        keyLevels: {
            momentumStartForLong: 0,
            momentumStartForShort: 0,
        },
        short: {
            openingDrive: { targets: srptTarget, },
            momentum: { targets: srptTarget },
        },
        long: {
            momentum: { targets: srptTarget },
            openingDrive: { targets: srptTarget, },
        }
    },
    {
        symbol: 'PINS',
        autoFlip: false,
        vwapCorrection: { volumeSum: 1107317, tradingSum: 32282655 },
        dailyRange: 1.5,
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