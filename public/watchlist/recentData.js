window.TradingData = {
    'Settings': {
        'currentDayStr': '', //'2022-12-2 6:30'
        'activeProfileName': "momentumEquities", //choppyMarket"; //"momentumEquities";
    },
    'StockSelection': {
        'index': ['QQQ', 'SPY'],
        'futures': ['MESZ22'],
        'stocks': [
            'BABA',
            'PDD',
            'TSLA',
            'SPY',
        ],
        'StockCandidates': {
            'PDD': {
                highQualityNews: 'china reopen rumor continues', volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
                deferTradingInSeconds: 0,
                initialBias: 0,
                boxup: 90, boxdown: 88,
                longTargets: [],
                shortTargets: [{ price: 89, percentage: 0.1 }]
            },
            'FUTU': {
                highQualityNews: 'chine reopen', volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
                deferTradingInSeconds: 0,
                initialBias: 0,
                boxup: 70.5, boxdown: 69.5,
                longTargets: [{ price: 147.2, percentage: 0.1 }],
                shortTargets: [{ price: 68.35, percentage: 0.1 }]
            },
            'BX': {
                highQualityNews: 'price cuts', volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
                deferTradingInSeconds: 0,
                initialBias: 0,
                boxup: 54.5, boxdown: 53,
                longTargets: [{ price: 153, percentage: 0.1 }],
                shortTargets: [{ price: 145, percentage: 0.1 }]
            },
            'BABA': {
                highQualityNews: 'china ease lockdown', volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
                deferTradingInSeconds: 0,
                initialBias: 0,
                boxup: 94.5, boxdown: 92.5,
                longTargets: [],
                shortTargets: [{ price: 92, percentage: 0.1 }],
            },
            'TSLA': {
                highQualityNews: 'cut product due to slow demand', volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
                deferTradingInSeconds: 0,
                initialBias: 0,
                boxup: 192, boxdown: 186,
                longTargets: [],
                shortTargets: [{ price: 186, percentage: 0.1 }]
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