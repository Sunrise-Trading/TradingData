window.TradingData = {
    'Settings': {
        'currentDayStr': '', //'2022-12-2 6:30'
        'activeProfileName': "momentumEquities", //choppyMarket"; //"momentumEquities", momentumScalp, fomc;
    },
    'StockSelection': {
        'index': ['QQQ', 'SPY'],
        'futures': ['MESH23'],
        'stocks': [
            'TSLA',
            'AAPL',
            'QQQ',
            'SPY',
        ],
        'StockCandidates': {
            'AAPL': {
                highQualityNews: 'price cuts JP morgan', volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
                deferTradingInSeconds: 0,
                initialBias: 0,
                //boxup: 119, boxdown: 181,
                longTargets: [],
                shortTargets: [{ price: 116.83, percentage: 0.1 }]
            },
            'AMZN': {
                highQualityNews: 'EU approval', volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
                deferTradingInSeconds: 0,
                initialBias: 0,
                //boxup: 119, boxdown: 181,
                longTargets: [],
                shortTargets: [{ price: 116.83, percentage: 0.1 }]
            },
            'TSLA': {
                highQualityNews: 'downgrade and price cuts', volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
                deferTradingInSeconds: 0,
                initialBias: 0,
                boxup: 148, boxdown: 145.5,
                longTargets: [{ price: 157, percentage: 0.1 }],
                shortTargets: []
            },
            'QQQ': {
                highQualityNews: 'post fomc', volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
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