window.TradingData = {
    'Settings': {
        'currentDayStr': '', // 2023-2-23 6:30
        'activeProfileName': "momentumSimple",  // momentumSimple, momentumEquities, momentumScalp, fomc;
        'systemProfileName': 'dt', // testTDA
    },
    'StockSelection': {
        'index': ['QQQ', 'SPY'],
        'futures': ['MESM23', 'MNQM23'],
        'checklistKeys': ["Read news carefully", "Review 1 minute chart", "Review hourly chart", "Review daily chart", "Review weekly chart ", "Draw nearest price levels", "Check whether it gap up/down above/below support/resistance"],
        'StockCandidates': {
            'TSLA': {
                longTargets: [],
                shortTargets: [],
            },
            'FRC': {
                longTargets: [],
                shortTargets: [],
            },
            'META': {
                longTargets: [],
                shortTargets: [],
            },
            'SPOT': {
                longTargets: [],
                shortTargets: [],
            },
            'SPY': {
                longTargets: [],
                shortTargets: [],
            },
        }
    }
};