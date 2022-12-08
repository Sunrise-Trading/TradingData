window.TradingData = {
    'Settings': {
        'currentDayStr': '', //'2022-12-2 6:30'
        'activeProfileName': "momentumEquities", //choppyMarket"; //"momentumEquities";
    },
    'StockSelection': {
        'index': ['QQQ', 'SPY'],
        'futures': ['MESZ22'],
        'stocks': [
            'META',
            'AAPL',
            'BABA',
            'TSLA',
        ],
        'StockCandidates': {
            'AAPL': {
                highQualityNews: 'foxconn covid lift', volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
                deferTradingInSeconds: 0,
                initialBias: 0,
                boxup: 90, boxdown: 88,
                longTargets: [],
                shortTargets: [{ price: 89, percentage: 0.1 }]
            },
            'META': {
                highQualityNews: 'state restriction on tiktok', volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
                deferTradingInSeconds: 0,
                initialBias: 0,
                boxup: 183.5, boxdown: 181,
                longTargets: [],
                shortTargets: [{ price: 173.5, percentage: 0.2 }]
            },
            'BABA': {
                highQualityNews: 'china news', volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
                deferTradingInSeconds: 0,
                initialBias: 0,
                boxup: 94.5, boxdown: 92.5,
                longTargets: [],
                shortTargets: [{ price: 90.6, percentage: 0.1 }, { price: 90.02, percentage: 0.1 }],
            },
            'TSLA': {
                highQualityNews: 'shorten shanghai factory shifts', volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
                deferTradingInSeconds: 0,
                initialBias: 0,
                boxup: 173, boxdown: 169.5,
                longTargets: [],
                shortTargets: [{ price: 186, percentage: 0.1 }]
            },
            'PDD': {
                highQualityNews: 'china news', volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
                deferTradingInSeconds: 0,
                initialBias: 0,
                boxup: 88.75, boxdown: 87.75,
                longTargets: [],
                shortTargets: [{ price: 92, percentage: 0.1 }],
            },
            'QQQ': {
                highQualityNews: 'data', volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
                deferTradingInSeconds: 0,
                initialBias: 0,
                longTargets: [{ price: 384.8, percentage: 0.2 }],
                shortTargets: []
            },
            'SPY': {
                highQualityNews: 'data', volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
                deferTradingInSeconds: 0,
                initialBias: 0,
                longTargets: [{ price: 384.8, percentage: 0.2 }],
                shortTargets: []
            },
        }
    }
};