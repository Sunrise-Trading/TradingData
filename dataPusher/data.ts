import * as TradingPlans from './models';
import * as Constants from './constants';

export const activeProfileName: string = "momentumSimple";  // futures, momentumSimple;
export const tradingSettigns: TradingPlans.TradingSettings = {
    equalWeightDivider: 6,
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
const smallTargets: TradingPlans.ExitTargets = {
    initialTargets: {
        priceLevels: [],
        rrr: [0.9, 0.95, 1.6, 1.8, 1.9, 2, 2, 3, 3, 5],
        dailyRanges: [0.8, 0.8, 0.8, 0.8, 0.8, 0.9, 0.9, 1, 1, 1],
    },
    minimumTargets: {
        priceLevels: [],
        rrr: [0.9, 0.95, 1.5, 1.6, 1.8, 1.8, 1.8, 2.5, 3, 5],
        dailyRanges: [0.45, 0.45, 0.5, 0.5, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
    }
};
export const stockSelections: string[] = [
    //'LI',
    'CLDX',
    //'TSLA',
    //'AAPL',
    // 

];

export const stocksTradingPlans: TradingPlans.TradingPlans[] = [
    {
        symbol: 'AAPL',
        autoFlip: false,
        vwapCorrection: { volumeSum: 299373, tradingSum: 52817836 },
        dailyRange: 3.3,
        deferTradingInSeconds: 0,
        keyLevels: {
            momentumStartForLong: 0,
            momentumStartForShort: 0,
        },
        short: {
            openingDrive: { targets: smallTargets },
            momentum: { targets: smallTargets },
        },
        long: {

        }
    },
    {
        symbol: 'TSLA',
        autoFlip: false,
        vwapCorrection: { volumeSum: 1312024, tradingSum: 294577232 },
        dailyRange: 9,
        deferTradingInSeconds: 0,
        keyLevels: {
            momentumStartForLong: 0,
            momentumStartForShort: 0,
        },
        short: {
            momentum: { targets: smallTargets },
        },
        long: {
            momentum: { targets: smallTargets },
        }
    },
    {
        symbol: 'CLDX',
        autoFlip: false,
        vwapCorrection: { volumeSum: 111777, tradingSum: 3938338 },
        dailyRange: 2.8,
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
        }
    },
    {
        symbol: 'LI',
        autoFlip: false,
        vwapCorrection: { volumeSum: 416614, tradingSum: 16400873 },
        dailyRange: 1.8,
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
        }
    }
];