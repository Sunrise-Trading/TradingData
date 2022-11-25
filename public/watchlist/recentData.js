window.TradingData = {
    'Settings': {
        'currentDayStr': '', //'2022-11-18 6:30'
        'activeProfileName': "choppyMarket", //choppyMarket"; //"momentumEquities";
    },
    'StockSelection': {
        'index': ['QQQ', 'SPY'],
        'futures': ['MESZ22'],
        '11/25/2022': {
            'stocks': [
                'AAPL',
                'MANU',
                'TSLA',
                'BABA',
                //'SPY',
                //'QQQ',
            ],
            'StockCandidates': {
                'MANU': {
                    highQualityNews: 'team changes', volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
                    deferTradingInSeconds: 0,
                    initialBias: 0,
                    boxup: 20.75, boxdown: 20,
                    longTargets: [],
                    shortTargets: [{ price: 19, percentage: 0.1 }]
                },
                'AAPL': {
                    highQualityNews: 'Foxconn worker unrest', volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
                    deferTradingInSeconds: 0,
                    initialBias: 0,
                    boxup: 149.5, boxdown: 148.25,
                    longTargets: [],
                    shortTargets: [{ price: 146.7, percentage: 0.1 }]
                },
                'BABA': {
                    highQualityNews: 'china lock down', volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
                    deferTradingInSeconds: 80,
                    initialBias: 0,
                    boxup: 76.5, boxdown: 75.25,
                    longTargets: [],
                    shortTargets: [{ price: 74.76, percentage: 0.1 }]
                },
                'TSLA': {
                    highQualityNews: 'recall', volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
                    deferTradingInSeconds: 0,
                    initialBias: 0,
                    boxup: 186.5, boxdown: 184,
                    longTargets: [{ price: 189.5, percentage: 0.1 }],
                    shortTargets: []
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