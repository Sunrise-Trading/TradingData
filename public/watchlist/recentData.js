window.TradingData = {
    'Settings': {
        'currentDayStr': '2022-11-15 6:30', //'2022-11-18 6:30'
        'activeProfileName': "choppyMarket", //choppyMarket"; //"momentumEquities";
    },
    'StockSelection': {
        'index': ['QQQ', 'SPY'],
        'futures': ['MESZ22'],
        '11/25/2022': {
            'stocks': [
                'TSLA', 'JWN',
                'AAPL',
                'SPY',
                //'QQQ',
            ],
            'StockCandidates': {
                'JWN': {
                    highQualityNews: 'earnings, lower guidance', volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
                    deferTradingInSeconds: 0,
                    initialBias: 0,
                    boxup: 21.35, boxdown: 20.6,
                    longTargets: [],
                    shortTargets: [{ price: 20.45, percentage: 0.1 }]
                },
                'AAPL': {
                    highQualityNews: 'ihone shortage', volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
                    deferTradingInSeconds: 0,
                    initialBias: 0,
                    boxup: 75.5, boxdown: 73,
                    longTargets: [{ price: 116.97, percentage: 0.1 }],
                    shortTargets: [{ price: 77.5, percentage: 0.1 }]
                },
                'TSLA': {
                    highQualityNews: 'cybertruck preorder, citi group upgrade', volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
                    deferTradingInSeconds: 0,
                    initialBias: 0,
                    boxup: 174.5, boxdown: 172,
                    longTargets: [{ price: 174.8, percentage: 0.1 }],
                    shortTargets: [{ price: 171.9, percentage: 0.1 }]
                },
                'QQQ': {
                    highQualityNews: 'retails data', volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
                    deferTradingInSeconds: 0,
                    initialBias: 0,
                    longTargets: [{ price: 384.8, percentage: 0.2 }],
                    shortTargets: []
                },
                'SPY': {
                    highQualityNews: 'consumer sentiment', volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
                    deferTradingInSeconds: 0,
                    initialBias: 0,
                    longTargets: [{ price: 384.8, percentage: 0.2 }],
                    shortTargets: []
                },
            }
        }
    }
};