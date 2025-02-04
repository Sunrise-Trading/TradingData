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
    ASML: 250000,
    AXP: 229000,
    AKRO: 1830,
    AAL: 12000,
    AAPL: 3358000,
    AI: 2900,
    ABNB: 95000,
    AMGN: 158000,
    AMBA: 2000,
    AAP: 3000,
    APP: 56000,
    ABT: 182000,
    ACN: 180000,
    ALNY: 21000,
    AMD: 223000,
    AMAT: 175000,
    ARM: 151000,
    AVGO: 693000,
    ADBE: 205000,
    AZN: 265000,
    AFRM: 21000,
    AMZN: 1956000,
    BA: 107000,
    BABA: 170000,
    C: 125000,
    CEG: 79000,
    CAVA: 11000,
    COST: 7000,
    COIN: 82000,
    CHWY: 12000,
    CVNA: 14000,
    CVS: 80000,
    CRWD: 83000,
    CRM: 316000,
    DAL: 30000,
    DELL: 105000,
    DLTR: 17000,
    DJT: 5000,
    DXCM: 40000,
    DOCS: 8000,
    DKNG: 35000,
    DIS: 186000,
    DG: 27000,
    EA: 37000,
    ENVX: 2000,
    ENPH: 12000,
    EW: 52000,
    ESTC: 9000,
    F: 54000,
    FDX: 63000,
    FIVE: 5000,
    FL: 2000,
    FLUT: 40000,
    FTAI: 11000,
    GAP: 8000,
    GEV: 115000,
    GTLB: 8000,
    GME: 11000,
    GOOGL: 2246000,
    GE: 210000,
    GM: 55000,
    HE: 1200,
    HOOD: 35000,
    HUT: 2500,
    INTC: 136000,
    IONQ: 10000,
    JD: 38000,
    KMX: 11000,
    KWEB: 10000,
    KSS: 2000,
    LLY: 869000,
    LQDA: 1000,
    LYFT: 6000,
    LUMN: 6850,
    LUNR: 1500,
    M: 5000,
    MCD: 255000,
    MMM: 74000,
    META: 1205000,
    MU: 157000,
    MBLY: 10000,
    MRNA: 16000,
    MRVL: 83000,
    MRK: 12000,
    MSFT: 3272000,
    MS: 181000,
    MSTR: 39000,
    MARA: 6000,
    NBIX: 15000,
    NEE: 180000,
    NKE: 142000,
    NVO: 227000,
    NFLX: 295000,
    NIO: 12000,
    NVDA: 3153000,
    NU: 60000,
    ORCL: 385000,
    OKTA: 13000,
    PARA: 7000,
    PATH: 7000,
    PANW: 111000,
    PDD: 185000,
    PLTR: 61000,
    PYPL: 61000,
    PFE: 161000,
    PCVX: 9000,
    QCOM: 248000,
    QS: 2700,
    QBTS: 2660,
    QUBT: 2000,
    RIVN: 10000,
    RILY: 500,
    RGTI: 2850,
    RUM: 2770,
    RCL: 63000,
    RH: 7000,
    RBLX: 28000,
    RDDT: 13000,
    RKLB: 7000,
    SBUX: 87000,
    SE: 52000,
    SNAP: 12000,
    SMR: 1300,
    SRPT: 11000,
    SOUN: 1670,
    SCHW: 133000,
    SHOP: 82000,
    SEDG: 2000,
    SMCI: 32000,
    SNOW: 46000,
    SPOT: 57000,
    SOFI: 9600,
    SYM: 18000,
    SIGA: 854,
    T: 168000,
    TEAM: 70000,
    TWLO: 17000,
    TCOM: 27000,
    TEVA: 18000,
    TSLA: 565000,
    TGT: 66000,
    TSM: 900000,
    TEM: 5000,
    WBA: 7000,
    WDAY: 61000,
    WBD: 20000,
    WHR: 5000,
    WFC: 209000,
    WMT: 552000,
    U: 9000,
    UAL: 36000,
    UPS: 124000,
    UPST: 5000,
    UBER: 163000,
    VST: 64000,
    X: 7000,
    ZS: 29000,
}