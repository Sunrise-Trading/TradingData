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
                boxup: 130, boxdown: 126.5,
                longTargets: [],
                shortTargets: [{ price: 79.95, percentage: 0.1 }]
            },
            'PATH': {
                highQualityNews: 'earnings', volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
                deferTradingInSeconds: 0,
                initialBias: 0,
                boxup: 146, boxdown: 140,
                longTargets: [{ price: 147.2, percentage: 0.1 }],
                shortTargets: []
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
                //boxup: 80.75, boxdown: 79.5,
                longTargets: [],
                shortTargets: [{ price: 79.1, percentage: 0.1 }],
                activeProfileName: "choppyMarket",
            },
            'TSLA': {
                highQualityNews: 'cut product due to slow demand', volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
                deferTradingInSeconds: 0,
                initialBias: 0,
                boxup: 192.5, boxdown: 189,
                longTargets: [{ price: 200, percentage: 0.1 }],
                shortTargets: [{ price: 190, percentage: 0.1 }]
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