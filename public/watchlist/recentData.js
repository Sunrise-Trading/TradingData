window.TradingData = {
    'Settings': {
        'currentDayStr': '', //'2022-11-18 6:30'
        'activeProfileName': "choppyMarket", //choppyMarket"; //"momentumEquities";
    },
    'StockSelection': {
        'index': ['QQQ', 'SPY'],
        'futures': ['MESZ22'],
        '11/28/2022': {
            'stocks': [
                'AAPL',
                'TSLA',
                'PDD',
                'BIIB',
                //'SPY',
                //'QQQ',
            ],
            'StockCandidates': {
                'PDD': {
                    highQualityNews: 'earnings gap up', volumeSum: 2367087, tradingSum: 174408242, premktHigh: 0, premktLow: 99999999,
                    deferTradingInSeconds: 0,
                    initialBias: 0,
                    boxup: 20.75, boxdown: 20,
                    longTargets: [],
                    shortTargets: [{ price: 19, percentage: 0.1 }]
                },
                'AAPL': {
                    highQualityNews: 'more produciton issue in Foxconn', volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
                    deferTradingInSeconds: 0,
                    initialBias: 0,
                    boxup: 145.75, boxdown: 144.5,
                    longTargets: [],
                    shortTargets: [{ price: 146.7, percentage: 0.1 }]
                },
                'BIIB': {
                    highQualityNews: 'drug related death', volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
                    deferTradingInSeconds: 80,
                    initialBias: 0,
                    boxup: 296, boxdown: 288,
                    longTargets: [],
                    shortTargets: [{ price: 74.76, percentage: 0.1 }]
                },
                'TSLA': {
                    highQualityNews: 'china lock down', volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
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