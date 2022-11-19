window.TradingData = {
    'Settings': {
        'currentDayStr': '2022-11-18 6:30', //'2022-11-18 6:30'
        'activeProfileName': "momentumEquities", //choppyMarket"; //"momentumEquities";
    },
    'StockSelection': {
        'index': ['QQQ', 'SPY'],
        'futures': ['MESZ22'],
        '11/18/2022': {
            'stocks': [
                'ROST',
                'FL',
                'COIN',
                'SPY',
            ],
            'StockCandidates': {
                'FL': {
                    highQualityNews: 'earnings', volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
                    deferTrading: false,
                    boxup: 39.5, boxdown: 36.75,
                    longTargets: [],
                    shortTargets: [{ price: 35.1, percentage: 0.1 }]
                },
                'COIN': {
                    highQualityNews: 'BoA downgrade', volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
                    deferTrading: false,
                    boxup: 49.5, boxdown: 48,
                    longTargets: [],
                    shortTargets: [{ price: 46.2, percentage: 0.2 }]
                },
                'ROST': {
                    highQualityNews: 'earnings and upgrade', volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
                    deferTrading: false,
                    boxup: 114.5, boxdown: 112.5,
                    longTargets: [{ price: 116.97, percentage: 0.1 }],
                    shortTargets: [{ price: 110, percentage: 0.2 }]
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