window.TradingData = {
    'Settings': {
        'currentDayStr': '', //'2022-11-18 6:30'
        'activeProfileName': "momentumEquities", //choppyMarket"; //"momentumEquities";
    },
    'StockSelection': {
        'index': ['QQQ', 'SPY'],
        'futures': ['MESZ22'],
        '11/30/2022': {
            'stocks': [
                'CRWD',
                'PDD',
                'BABA',
                //'AMZN',
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
                'AAPL': {
                    highQualityNews: 'more produciton issue in Foxconn', volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
                    deferTradingInSeconds: 0,
                    initialBias: 0,
                    boxup: 145.75, boxdown: 144.5,
                    longTargets: [],
                    shortTargets: [{ price: 146.7, percentage: 0.1 }]
                },
                'CRWD': {
                    highQualityNews: 'earnings miss', volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
                    deferTradingInSeconds: 80,
                    initialBias: 0,
                    boxup: 116, boxdown: 112,
                    longTargets: [{ price: 119.85, percentage: 0.1 }],
                    shortTargets: [{ price: 110, percentage: 0.1 }]
                },
                'BABA': {
                    highQualityNews: 'china ease lockdown', volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
                    deferTradingInSeconds: 80,
                    initialBias: 0,
                    //boxup: 80.75, boxdown: 79.5,
                    longTargets: [],
                    shortTargets: [{ price: 79.1, percentage: 0.1 }]
                },
                'AMZN': {
                    highQualityNews: 'announce best black friday', volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
                    deferTradingInSeconds: 0,
                    initialBias: 0,
                    //boxup: 186, boxdown: 184,
                    longTargets: [{ price: 93.95, percentage: 0.1 }],
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