window.TradingData = {
    'Settings': {
        'currentDayStr': '', //'2022-11-18 6:30'
        'activeProfileName': "momentumEquities", //choppyMarket"; //"momentumEquities";
    },
    'StockSelection': {
        'index': ['QQQ', 'SPY'],
        'futures': ['MESZ22'],
        '11/22/2022': {
            'stocks': [
                'TSLA', 'ZM',
                'ANF',
                'BBY',
                //'QQQ',
            ],
            'StockCandidates': {
                'ANF': {
                    highQualityNews: 'earnings', volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
                    deferTrading: false,
                    boxup: 39.5, boxdown: 36.75,
                    longTargets: [],
                    shortTargets: [{ price: 35.1, percentage: 0.1 }]
                },
                'BBY': {
                    highQualityNews: 'earnings', volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
                    deferTrading: false,
                    boxup: 78.5, boxdown: 76,
                    longTargets: [],
                    shortTargets: [{ price: 75, percentage: 0.2 }]
                },
                'ZM': {
                    highQualityNews: 'earnings, price cut', volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
                    deferTrading: false,
                    boxup: 75.5, boxdown: 73,
                    longTargets: [{ price: 116.97, percentage: 0.1 }],
                    shortTargets: [{ price: 77.5, percentage: 0.1 }]
                },
                'TSLA': {
                    highQualityNews: 'china demand low', volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
                    deferTrading: false,
                    boxup: 171, boxdown: 167,
                    longTargets: [],
                    shortTargets: [{ price: 167.6, percentage: 0.1 }]
                },
                'QQQ': {
                    highQualityNews: 'retails data', volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
                    deferTrading: false,
                    longTargets: [{ price: 384.8, percentage: 0.2 }],
                    shortTargets: []
                },
                'SPY': {
                    highQualityNews: 'consumer sentiment', volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
                    deferTrading: false,
                    longTargets: [{ price: 384.8, percentage: 0.2 }],
                    shortTargets: []
                },
            }
        }
    }
};