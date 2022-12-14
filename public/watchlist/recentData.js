window.TradingData = {
    'Settings': {
        'currentDayStr': '', //'2022-12-2 6:30'
        'activeProfileName': "fomc", //choppyMarket"; //"momentumEquities", momentumScalp;
    },
    'StockSelection': {
        'index': ['QQQ', 'SPY'],
        'futures': ['MESZ22'],
        'stocks': [
            'SPY',
            'QQQ',
        ],
        'StockCandidates': {
            'AAPL': {
                highQualityNews: 'aapl pay and supply news', volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
                deferTradingInSeconds: 0,
                initialBias: 0,
                boxup: 183.5, boxdown: 181,
                longTargets: [],
                shortTargets: [{ price: 173.5, percentage: 0.2 }]
            },
            'TSLA': {
                highQualityNews: 'rivn news', volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
                deferTradingInSeconds: 0,
                initialBias: 0,
                boxup: 160, boxdown: 157.5,
                longTargets: [],
                shortTargets: [{ price: 175.3, percentage: 0.1 }]
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