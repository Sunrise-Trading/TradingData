import * as TradingPlans from './models';
import * as Constants from './constants';

export const activeProfileName: string = "momentumSimple";  // futures, momentumSimple;
export const tradingSettigns: TradingPlans.TradingSettings = {
    equalWeightDivider: 3,
};
const bestConfigs: TradingPlans.PlanConfigs = {
    equalWeightDivider: 4,
};
const scalpConfigs: TradingPlans.PlanConfigs = {
    equalWeightDivider: 8,
};
const bigTarget: TradingPlans.ExitTargets = {
    initialTargets: {
        priceLevels: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        rrr: [0.9, 0.95, 1.5, 1.9, 2, 3, 3.5, 4, 5, 10],
        dailyRanges: [0.5, 0.6, 0.75, 0.8, 0.85, 0.9, 0.95, 1, 1, 1.1],
    },
    minimumTargets: {
        rrr: [0.9, 0.95, 1.3, 1.5, 1.8, 1.9, 2, 2, 2, 4],
        priceLevels: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        dailyRanges: [0.4, 0.45, 0.5, 0.5, 0.6, 0.7, 0.8, 0.9, 1, 1],
    }
};
const indexTarget: TradingPlans.ExitTargets = {
    initialTargets: {
        priceLevels: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        rrr: [0.9, 0.95, 1.5, 1.9, 2, 3, 3.5, 4, 5, 10],
        dailyRanges: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    },
    minimumTargets: {
        rrr: [0.9, 0.95, 1, 1, 1, 1, 1, 1, 1, 1],
        priceLevels: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        dailyRanges: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    }
}
const smallTargets: TradingPlans.ExitTargets = {
    initialTargets: {
        priceLevels: [],
        rrr: [0.9, 0.95, 1, 1.8, 1.9, 2, 2, 3, 3, 5],
        dailyRanges: [0.8, 0.8, 0.8, 0.8, 0.8, 0.9, 0.9, 1, 1, 1],
    },
    minimumTargets: {
        priceLevels: [],
        rrr: [0.9, 0.95, 1, 1, 1, 1, 1, 1, 1, 1],
        dailyRanges: [0.45, 0.45, 0.45, 0.45, 0.45, 0.45, 0.45, 0.5, 0.5, 0.5],
    }
};
export const stockSelections: string[] = [
    'ONON',
    'TSLA',
    'SPY', 'QQQ'
];

export const stocksTradingPlans: TradingPlans.TradingPlans[] = [
    {
        symbol: 'TSLA',
        autoFlip: false,
        vwapCorrection: { volumeSum: 3419111, tradingSum: 792545030 },
        dailyRange: 10,
        deferTradingInSeconds: 0,
        keyLevels: {
            momentumStartForLong: 0,
            momentumStartForShort: 0,
        },
        short: {
            //openingDrive: { targets: bigTarget, planConfigs: scalpConfigs },
            momentum: { targets: bigTarget, planConfigs: scalpConfigs },
        },
        long: {
            openingDrive: { targets: smallTargets, planConfigs: scalpConfigs },
            momentum: { targets: smallTargets, planConfigs: scalpConfigs },
        },
    },
    {
        symbol: 'SPY',
        autoFlip: false,
        vwapCorrection: { volumeSum: 3164576, tradingSum: 1407140256 },
        dailyRange: 2.5,
        deferTradingInSeconds: 0,
        keyLevels: {
            momentumStartForLong: 0,
            momentumStartForShort: 0,
        },
        short: {
            momentum: { targets: indexTarget, planConfigs: scalpConfigs },
        },
        long: {
            openingDrive: { targets: indexTarget, planConfigs: scalpConfigs },
            momentum: { targets: indexTarget, planConfigs: scalpConfigs },
        }
    },
    {
        symbol: 'QQQ',
        autoFlip: false,
        vwapCorrection: { volumeSum: 4420806, tradingSum: 1690681704 },
        dailyRange: 2.5,
        deferTradingInSeconds: 0,
        keyLevels: {
            momentumStartForLong: 0,
            momentumStartForShort: 0,
        },
        short: {
            momentum: { targets: indexTarget, planConfigs: scalpConfigs },
        },
        long: {
            openingDrive: { targets: indexTarget, planConfigs: scalpConfigs },
            momentum: { targets: indexTarget, planConfigs: scalpConfigs },
        }
    },
    {
        symbol: 'SE',
        autoFlip: false,
        vwapCorrection: { volumeSum: 1165355, tradingSum: 47691596 },
        dailyRange: 4,
        deferTradingInSeconds: 0,
        keyLevels: {
            momentumStartForLong: 0,
            momentumStartForShort: 0,
        },
        short: {
            momentum: { targets: bigTarget, planConfigs: scalpConfigs },
        },
        long: {
        }
    },
    {
        symbol: 'ONON',
        autoFlip: false,
        vwapCorrection: { volumeSum: 1525627, tradingSum: 38143082 },
        dailyRange: 2,
        deferTradingInSeconds: 0,
        keyLevels: {
            momentumStartForLong: 0,
            momentumStartForShort: 0,
        },
        short: {
            momentum: { targets: bigTarget, planConfigs: scalpConfigs },
        },
        long: {
        }
    }
];