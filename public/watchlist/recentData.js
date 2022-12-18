window.TradingData = {
    'Settings': {
        'currentDayStr': '2022-12-16 6:30', //'2022-12-2 6:30'
        'activeProfileName': "futures", //choppyMarket"; //"momentumEquities", momentumScalp, fomc;
    },
    'StockSelection': {
        'index': ['QQQ', 'SPY'],
        'futures': ['MESZ22'],
        'stocks': [
            'META',
            'TSLA',
            'SPY',
            'QQQ',
        ],
        'StockCandidates': {
            'META': {
                highQualityNews: 'upgrade', volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
                deferTradingInSeconds: 0,
                initialBias: 0,
                boxup: 119, //boxdown: 181,
                longTargets: [{ price: 122, percentage: 0.2 }],
                shortTargets: []
            },
            'TSLA': {
                highQualityNews: 'elon done selling', volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
                deferTradingInSeconds: 0,
                initialBias: 0,
                boxup: 160, boxdown: 158,
                longTargets: [{ price: 163, percentage: 0.1 }],
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