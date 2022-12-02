window.TradingData = {
    'Settings': {
        'currentDayStr': '', //'2022-11-18 6:30'
        'activeProfileName': "futures", //choppyMarket"; //"momentumEquities";
    },
    'StockSelection': {
        'index': ['QQQ', 'SPY'],
        'futures': ['MESZ22'],
        '12/2/2022': {
            'stocks': [
                'SNOW',
                'CRM',
                'BABA',
                'TSLA',
                //'QQQ',
            ],
            'StockCandidates': {
                'PDD': {
                    highQualityNews: 'china news, raise price targets', volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
                    deferTradingInSeconds: 0,
                    initialBias: 0,
                    //boxup: 78.6, boxdown: 77.5,
                    longTargets: [],
                    shortTargets: [{ price: 79.95, percentage: 0.1 }]
                },
                'SNOW': {
                    highQualityNews: 'earnings', volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
                    deferTradingInSeconds: 0,
                    initialBias: 0,
                    boxup: 146, boxdown: 140,
                    longTargets: [{ price: 147.2, percentage: 0.1 }],
                    shortTargets: []
                },
                'CRM': {
                    highQualityNews: 'earnings miss', volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
                    deferTradingInSeconds: 0,
                    initialBias: 0,
                    boxup: 150, boxdown: 148,
                    longTargets: [{ price: 153, percentage: 0.1 }],
                    shortTargets: [{ price: 145, percentage: 0.1 }]
                },
                'BABA': {
                    highQualityNews: 'china ease lockdown', volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
                    deferTradingInSeconds: 0,
                    initialBias: 0,
                    //boxup: 80.75, boxdown: 79.5,
                    longTargets: [],
                    shortTargets: [{ price: 79.1, percentage: 0.1 }]
                },
                'TSLA': {
                    highQualityNews: 'china ev delivery numbers', volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
                    deferTradingInSeconds: 0,
                    initialBias: 0,
                    boxup: 199, boxdown: 196,
                    longTargets: [{ price: 200, percentage: 0.1 }],
                    shortTargets: []
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
    }
};