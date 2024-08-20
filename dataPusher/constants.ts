import * as TradingPlans from './models';

let futures = [
    {
        symbol: 'MES',
        isFutures: true,
        vwapCorrection: { volumeSum: 0, tradingSum: 0 },
        dailyRange: 40,
        deferTradingInSeconds: 0,
        fixQuantity: 6,
        alwaysUseFixQuantity: true,
        keyLevels: {
            otherLevels: [4000],
        },
        long: {
            newsBreakout: {
                planType: TradingPlans.PlanType.NewsBreakout,
                //planConfigs: Constants.scalpConfig,
                //targets: futuresTarget,
            }
        },
        short: {
            newsBreakout: {
                planType: TradingPlans.PlanType.NewsBreakout,
                //planConfigs: Constants.scalpConfig,
                //targets: futuresTarget,
            }
        },
    },
    {
        symbol: 'MNQ',
        isFutures: true,
        vwapCorrection: { volumeSum: 0, tradingSum: 0 },
        dailyRange: 40,
        deferTradingInSeconds: 0,
        fixQuantity: 4,
        alwaysUseFixQuantity: true,
        keyLevels: {
            otherLevels: [4000],
        },
        long: {
            newsBreakout: {
                planType: TradingPlans.PlanType.NewsBreakout,
                //planConfigs: Constants.scalpConfig,
                //targets: futuresTarget,
            }
        },
        short: {
            newsBreakout: {
                planType: TradingPlans.PlanType.NewsBreakout,
                //planConfigs: Constants.scalpConfig,
                //targets: futuresTarget,
            }
        },
    },
    {
        symbol: 'US',
        isFutures: true,
        vwapCorrection: { volumeSum: 0, tradingSum: 0 },
        dailyRange: 2,
        deferTradingInSeconds: 0,
        fixQuantity: 2,
        alwaysUseFixQuantity: true,
        keyLevels: {
            otherLevels: [4000],
        },
        long: {
            newsBreakout: {
                planType: TradingPlans.PlanType.NewsBreakout,
            }
        },
        short: {
            newsBreakout: {
                planType: TradingPlans.PlanType.NewsBreakout,
            }
        },
    }
];

export const marketCaps = {
    ABT: 182000,
    ACN: 180000,
    ALNY: 21000,
    AMD: 223000,
    AMAT: 175000,
    ARM: 151000,
    AVGO: 693000,
    ADBE: 205000,
    BABA: 170000,
    C: 125000,
    CHWY: 12000,
    CVNA: 14000,
    CRWD: 83000,
    DAL: 30000,
    DELL: 105000,
    DJT: 5000,
    DXCM: 40000,
    ENVX: 2000,
    EW: 52000,
    F: 54000,
    FDX: 63000,
    FIVE: 5000,
    GTLB: 8000,
    GOOGL: 2246000,
    HE: 1700,
    INTC: 136000,
    LLY: 869000,
    LQDA: 1000,
    M: 5000,
    META: 1205000,
    MU: 157000,
    MRNA: 45000,
    MSFT: 3272000,
    NEE: 180000,
    NKE: 142000,
    NVO: 485000,
    NVDA: 3153000,
    NU: 60000,
    PARA: 7000,
    PANW: 111000,
    PLTR: 61000,
    PYPL: 61000,
    QCOM: 248000,
    QS: 2700,
    RIVN: 12000,
    RILY: 500,
    SBUX: 87000,
    SRPT: 11000,
    SOUN: 1670,
    SCHW: 133000,
    SHOP: 82000,
    SEDG: 2000,
    SNOW: 46000,
    SPOT: 57000,
    SYM: 18000,
    SIGA: 854,
    TSLA: 565000,
    TSM: 900000,
    WBA: 13000,
    WBD: 20000,
    WHR: 5000,
    WFC: 209000,
    WMT: 552000,
    UPS: 124000,
}