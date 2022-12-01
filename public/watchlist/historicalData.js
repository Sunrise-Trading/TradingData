export const TradingData = {
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
        },
        '11/29/2022': {
            'stocks': [
                //'ROKU',
                'PDD',
                'BABA',
                //'SPY',
                //'QQQ',
            ],
            'StockCandidates': {
                'PDD': {
                    highQualityNews: 'upgrade', volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
                    deferTradingInSeconds: 0,
                    initialBias: 0,
                    boxup: 78.6, boxdown: 77.5,
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
                'ROKU': {
                    highQualityNews: 'downgrade', volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
                    deferTradingInSeconds: 80,
                    initialBias: 0,
                    boxup: 52.2, boxdown: 51.25,
                    longTargets: [],
                    shortTargets: [{ price: 50.25, percentage: 0.1 }]
                },
                'BABA': {
                    highQualityNews: 'china ease lockdown', volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
                    deferTradingInSeconds: 80,
                    initialBias: 0,
                    boxup: 80.75, boxdown: 79.5,
                    longTargets: [],
                    shortTargets: [{ price: 79.1, percentage: 0.1 }]
                },
                'TSLA': {
                    highQualityNews: 'china lock down', volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
                    deferTradingInSeconds: 0,
                    initialBias: 0,
                    boxup: 186, boxdown: 184,
                    longTargets: [{ price: 188, percentage: 0.1 }],
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
        },
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
                    boxup: 76.5, boxdown: 72,
                    longTargets: [],
                    shortTargets: [{ price: 71.2, percentage: 0.1 }]
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
                    boxup: 180.5, boxdown: 178,
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
        },
        '11/25/2022': {
            'stocks': [
                'TSLA', 'JWN',
                'AAPL',
                'SPY',
                //'QQQ',
            ],
            'StockCandidates': {
                'JWN': {
                    highQualityNews: 'earnings, lower guidance', volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
                    deferTradingInSeconds: 0,
                    initialBias: 0,
                    boxup: 21.35, boxdown: 20.6,
                    longTargets: [],
                    shortTargets: [{ price: 20.45, percentage: 0.1 }]
                },
                'AAPL': {
                    highQualityNews: 'ihone shortage', volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
                    deferTradingInSeconds: 0,
                    initialBias: 0,
                    boxup: 75.5, boxdown: 73,
                    longTargets: [{ price: 116.97, percentage: 0.1 }],
                    shortTargets: [{ price: 77.5, percentage: 0.1 }]
                },
                'TSLA': {
                    highQualityNews: 'cybertruck preorder, citi group upgrade', volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
                    deferTradingInSeconds: 0,
                    initialBias: 0,
                    boxup: 174.5, boxdown: 172,
                    longTargets: [{ price: 174.8, percentage: 0.1 }],
                    shortTargets: [{ price: 171.9, percentage: 0.1 }]
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
        },
        '11/23/2022': {
            'stocks': [
                'TSLA', 'JWN',
                'AAPL',
                'SPY',
                //'QQQ',
            ],
            'StockCandidates': {
                'JWN': {
                    highQualityNews: 'earnings, lower guidance', volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
                    deferTrading: false,
                    boxup: 21.35, boxdown: 20.6,
                    longTargets: [],
                    shortTargets: [{ price: 20.45, percentage: 0.1 }]
                },
                'ADSK': {
                    highQualityNews: 'earnings, price cut', volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
                    deferTrading: false,
                    boxup: 193, boxdown: 189,
                    longTargets: [],
                    shortTargets: [{ price: 188, percentage: 0.1 }]
                },
                'AAPL': {
                    highQualityNews: 'ihone shortage', volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
                    deferTrading: false,
                    boxup: 75.5, boxdown: 73,
                    longTargets: [{ price: 116.97, percentage: 0.1 }],
                    shortTargets: [{ price: 77.5, percentage: 0.1 }]
                },
                'TSLA': {
                    highQualityNews: 'cybertruck preorder, citi group upgrade', volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
                    deferTrading: false,
                    boxup: 174.5, boxdown: 172,
                    longTargets: [{ price: 174.8, percentage: 0.1 }],
                    shortTargets: [{ price: 171.9, percentage: 0.1 }]
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
        },
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
        },
        '11/21/2022': {
            'stocks': [
                'TSLA', 'DIS',
                'BABA',
                'SPY',
                //'QQQ',
            ],
            'StockCandidates': {
                'DIS': {
                    highQualityNews: 'CEO returns', volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
                    deferTrading: false,
                    boxup: 39.5, boxdown: 36.75,
                    longTargets: [],
                    shortTargets: [{ price: 35.1, percentage: 0.1 }]
                },
                'TSLA': {
                    highQualityNews: 'recall', volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
                    deferTrading: false,
                    boxup: 49.5, boxdown: 48,
                    longTargets: [],
                    shortTargets: [{ price: 46.2, percentage: 0.2 }]
                },
                'BABA': {
                    highQualityNews: 'china covid increase', volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
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
        },
        '11/18/2022': {
            'stocks': [
                'ROST',
                'FL',
                'COIN',
                //'QQQ',
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
        },
        '11/17/2022': {
            'stocks': [
                'NVDA',
                'BABA',
                //'PDD',
                'QQQ',
                'SPY',
            ],
            'StockCandidates': {
                'NVDA': {
                    highQualityNews: 'earnings', volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
                    deferTrading: false,
                    boxup: 158.5, boxdown: 155.5,
                    longTargets: [],
                    shortTargets: [{ price: 155, percentage: 0.1 }]
                },
                'BABA': {
                    highQualityNews: 'earnings', volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
                    deferTrading: false,
                    boxup: 80, boxdown: 78.5,
                    longTargets: [],
                    shortTargets: [{ price: 76.55, percentage: 0.2 }]
                },
                'PDD': {
                    highQualityNews: 'us china meeting', volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
                    deferTrading: false,
                    //boxup: 108, boxdown: 105.5,
                    longTargets: [{ price: 67.97, percentage: 0.1 }],
                    shortTargets: [{ price: 66, percentage: 0.2 }]
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
        },
        '11/16/2022': {
            'stocks': [
                'TGT',
                'NVDA',
                'BABA',
                //'PDD',
                'QQQ',
                //'SPY',
            ],
            'StockCandidates': {
                'NVDA': {
                    highQualityNews: 'earnings after bell, team up with MSFT', volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
                    deferTrading: false,
                    boxup: 163.5, boxdown: 161.5,
                    longTargets: [],
                    shortTargets: [{ price: 160.1, percentage: 0.1 }]
                },
                'BABA': {
                    highQualityNews: 'us china meeting', volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
                    deferTrading: false,
                    boxup: 80, boxdown: 78.5,
                    longTargets: [],
                    shortTargets: [{ price: 76.55, percentage: 0.2 }]
                },
                'PDD': {
                    highQualityNews: 'us china meeting', volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
                    deferTrading: false,
                    //boxup: 108, boxdown: 105.5,
                    longTargets: [{ price: 67.97, percentage: 0.1 }],
                    shortTargets: [{ price: 66, percentage: 0.2 }]
                },
                'AAP': {
                    highQualityNews: 'earnings', volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
                    deferTrading: false,
                    boxup: 148, boxdown: 145,
                    longTargets: [],
                    shortTargets: [{ price: 144, percentage: 0.2 }]
                },
                'TGT': {
                    highQualityNews: 'earnings', volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
                    deferTrading: false,
                    boxup: 155, boxdown: 149,
                    longTargets: [],
                    shortTargets: [{ price: 146.1, percentage: 0.2 }]
                },
                'QQQ': {
                    highQualityNews: 'retails data', volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
                    deferTrading: true,
                    longTargets: [{ price: 384.8, percentage: 0.2 }],
                    shortTargets: []
                },
                'SPY': {
                    highQualityNews: 'consumer sentiment', volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
                    deferTrading: true,
                    longTargets: [{ price: 384.8, percentage: 0.2 }],
                    shortTargets: []
                },
            }
        },
        '11/15/2022': {
            'stocks': [
                //'AMD',
                'BABA',
                //'PDD',
                'WMT',
                'QQQ',
                'SPY',
            ],
            'StockCandidates': {
                'AMZN': {
                    highQualityNews: 'list removal', volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
                    deferTrading: false,
                    //boxup: 108, boxdown: 105.5,
                    longTargets: [{ price: 94, percentage: 0.2 }],
                    shortTargets: [{ price: 88, percentage: 0.2 }]
                },
                'BABA': {
                    highQualityNews: 'us china meeting', volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
                    deferTrading: false,
                    boxup: 80, boxdown: 78.5,
                    longTargets: [],
                    shortTargets: [{ price: 76.55, percentage: 0.2 }]
                },
                'PDD': {
                    highQualityNews: 'us china meeting', volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
                    deferTrading: false,
                    //boxup: 108, boxdown: 105.5,
                    longTargets: [{ price: 67.97, percentage: 0.1 }],
                    shortTargets: [{ price: 66, percentage: 0.2 }]
                },
                'WMT': {
                    highQualityNews: 'earnings', volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
                    deferTrading: false,
                    boxup: 148, boxdown: 145,
                    longTargets: [],
                    shortTargets: [{ price: 144, percentage: 0.2 }]
                },
                'AMD': {
                    highQualityNews: 'upgrade', volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
                    deferTrading: false,
                    //boxup: 108, boxdown: 105.5,
                    longTargets: [{ price: 77.7, percentage: 0.2 }],
                    shortTargets: [{ price: 73.4, percentage: 0.2 }]
                },
                'QQQ': {
                    highQualityNews: 'consumer sentiment', volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
                    deferTrading: true,
                    longTargets: [{ price: 384.8, percentage: 0.2 }],
                    shortTargets: []
                },
                'SPY': {
                    highQualityNews: 'consumer sentiment', volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
                    deferTrading: true,
                    longTargets: [{ price: 384.8, percentage: 0.2 }],
                    shortTargets: []
                },
            }
        },
        '11/14/2022': {
            'stocks': [
                //'AMD',
                'BIIB',
                'HAS',
                'BABA',
                'PDD',
                //'HAS',

            ],
            'StockCandidates': {
                'RBLX': {
                    highQualityNews: 'price cuts', volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
                    deferTrading: false,
                    //boxup: 190, boxdown: 188,
                    longTargets: [{ price: 196, percentage: 0.2 }],
                    shortTargets: [{ price: 187, percentage: 0.2 }]
                },
                'AMZN': {
                    highQualityNews: 'list removal', volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
                    deferTrading: false,
                    //boxup: 108, boxdown: 105.5,
                    longTargets: [{ price: 94, percentage: 0.2 }],
                    shortTargets: [{ price: 88, percentage: 0.2 }]
                },
                'BABA': {
                    highQualityNews: 'us china meeting', volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
                    deferTrading: false,
                    boxup: 74, boxdown: 73,
                    longTargets: [{ price: 76.3, percentage: 0.2 }],
                    shortTargets: [{ price: 71.55, percentage: 0.2 }]
                },
                'PDD': {
                    highQualityNews: 'us china meeting', volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
                    deferTrading: false,
                    //boxup: 108, boxdown: 105.5,
                    longTargets: [{ price: 67.97, percentage: 0.1 }],
                    shortTargets: [{ price: 66, percentage: 0.2 }]
                },
                'BIIB': {
                    highQualityNews: 'raise price targets', volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
                    deferTrading: false,
                    boxup: 305, boxdown: 298,
                    longTargets: [{ price: 310, percentage: 0.2 }],
                    shortTargets: [{ price: 294, percentage: 0.2 }]
                },
                'AMD': {
                    highQualityNews: 'update', volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
                    deferTrading: false,
                    //boxup: 108, boxdown: 105.5,
                    longTargets: [{ price: 77.7, percentage: 0.2 }],
                    shortTargets: [{ price: 73.4, percentage: 0.2 }]
                },
                'HAS': {
                    highQualityNews: 'earnings', volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
                    deferTrading: false,
                    boxup: 60.5, boxdown: 59,
                    longTargets: [],
                    shortTargets: [{ price: 58, percentage: 0.2 }]
                },
                'QQQ': {
                    highQualityNews: 'consumer sentiment', volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
                    deferTrading: true,
                    longTargets: [{ price: 384.8, percentage: 0.2 }],
                    shortTargets: []
                },
                'SPY': {
                    highQualityNews: 'consumer sentiment', volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
                    deferTrading: true,
                    longTargets: [{ price: 384.8, percentage: 0.2 }],
                    shortTargets: []
                },
            }
        },
        '11/11/2022': {
            'stocks': [
                //'META',
                //'TSLA',
                'BABA',
                //'PDD',
                //'INTC',
            ],
            'StockCandidates': {
                'TSLA': {
                    highQualityNews: 'Elon sold', volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
                    deferTrading: false,
                    //boxup: 190, boxdown: 188,
                    longTargets: [{ price: 196, percentage: 0.2 }],
                    shortTargets: [{ price: 187, percentage: 0.2 }]
                },
                'META': {
                    highQualityNews: 'layoff', volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
                    deferTrading: false,
                    //boxup: 108, boxdown: 105.5,
                    longTargets: [{ price: 94, percentage: 0.2 }],
                    shortTargets: [{ price: 88, percentage: 0.2 }]
                },
                'BABA': {
                    highQualityNews: 'china reopen', volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
                    deferTrading: false,
                    //boxup: 190, boxdown: 188,
                    longTargets: [{ price: 76.3, percentage: 0.2 }],
                    shortTargets: [{ price: 72.2, percentage: 0.2 }]
                },
                'PDD': {
                    highQualityNews: 'china reopen', volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
                    deferTrading: false,
                    //boxup: 108, boxdown: 105.5,
                    longTargets: [{ price: 68, percentage: 0.1 }],
                    shortTargets: [{ price: 66, percentage: 0.2 }]
                },
                'INTC': {
                    highQualityNews: 'double downgrade', volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
                    deferTrading: false,
                    //boxup: 108, boxdown: 105.5,
                    longTargets: [],
                    shortTargets: [{ price: 28.06, percentage: 0.2 }]
                },
                'QQQ': {
                    highQualityNews: 'consumer sentiment', volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
                    deferTrading: true,
                    longTargets: [{ price: 384.8, percentage: 0.2 }],
                    shortTargets: []
                },
                'SPY': {
                    highQualityNews: 'consumer sentiment', volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
                    deferTrading: true,
                    longTargets: [{ price: 384.8, percentage: 0.2 }],
                    shortTargets: []
                },
            }
        },
        '11/10/2022': {
            'stocks': [
                'META',
                'TSLA',
                'QQQ',
                'SPY',
            ],
            'StockCandidates': {
                'TSLA': {
                    highQualityNews: 'Elon sold', volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
                    deferTrading: false,
                    boxup: 190, boxdown: 188,
                    longTargets: [{ price: 196, percentage: 0.2 }],
                    shortTargets: [{ price: 187, percentage: 0.2 }]
                },
                'META': {
                    highQualityNews: 'layoff', volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
                    deferTrading: false,
                    boxup: 108, boxdown: 105.5,
                    longTargets: [{ price: 94, percentage: 0.2 }],
                    shortTargets: [{ price: 88, percentage: 0.2 }]
                },
                'QQQ': {
                    highQualityNews: 'election', volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
                    deferTrading: true,
                    longTargets: [{ price: 384.8, percentage: 0.2 }],
                    shortTargets: []
                },
                'SPY': {
                    highQualityNews: 'election', volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
                    deferTrading: true,
                    longTargets: [{ price: 384.8, percentage: 0.2 }],
                    shortTargets: []
                },
            }
        },
        '11/9/2022': {
            'stocks': [
                'META', 'RBLX',
                'TSLA',
                'DIS',
                //'SPY',
            ],
            'StockCandidates': {
                'META': {
                    highQualityNews: 'layoff announced', volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
                    deferTrading: false,
                    boxup: 102.5, boxdown: 100,
                    longTargets: [],
                    shortTargets: [{ price: 100.2, percentage: 0.2 }]
                },
                'RBLX': {
                    highQualityNews: 'earnings', volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
                    deferTrading: false,
                    boxup: 12, boxdown: 11.25,
                    longTargets: [{ price: 35.95, percentage: 0.2 }],
                    shortTargets: []
                },
                'TSLA': {
                    highQualityNews: 'Elon sold', volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
                    deferTrading: false,
                    boxup: 193, boxdown: 190,
                    longTargets: [{ price: 196, percentage: 0.2 }],
                    shortTargets: [{ price: 187, percentage: 0.2 }]
                },
                'DIS': {
                    highQualityNews: 'earnings', volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
                    deferTrading: false,
                    boxup: 92, boxdown: 90.5,
                    longTargets: [{ price: 94, percentage: 0.2 }],
                    shortTargets: [{ price: 88, percentage: 0.2 }]
                },
                'QQQ': {
                    highQualityNews: 'election', volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
                    deferTrading: true,
                    longTargets: [{ price: 384.8, percentage: 0.2 }],
                    shortTargets: []
                },
                'SPY': {
                    highQualityNews: 'election', volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
                    deferTrading: true,
                    longTargets: [{ price: 384.8, percentage: 0.2 }],
                    shortTargets: []
                },
            }
        },
        '11/8/2022': {
            'stocks': [
                'NVDA', 'LYFT',
                'TTWO',
                'QQQ',
                //'SPY',
            ],
            'StockCandidates': {
                'NVDA': {
                    highQualityNews: 'new chips for china', volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
                    deferTrading: false,
                    //boxup: 94.5, boxdown: 93,
                    longTargets: [{ price: 149.4, percentage: 0.3 }],
                    shortTargets: []
                },
                'LYFT': {
                    highQualityNews: 'earnings', volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
                    deferTrading: false,
                    boxup: 12, boxdown: 11.25,
                    longTargets: [],
                    shortTargets: [{ price: 11.5, percentage: 0.1 }]
                },
                'TTWO': {
                    highQualityNews: 'earnings', volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
                    deferTrading: false,
                    boxup: 91, boxdown: 88,
                    longTargets: [{ price: 95, percentage: 0.2 }],
                    shortTargets: [{ price: 85, percentage: 0.2 }]
                },
                'QQQ': {
                    highQualityNews: 'index', volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
                    deferTrading: true,
                    longTargets: [{ price: 384.8, percentage: 0.2 }],
                    shortTargets: []
                },
                'SPY': {
                    highQualityNews: 'index', volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
                    deferTrading: true,
                    longTargets: [{ price: 384.8, percentage: 0.2 }],
                    shortTargets: []
                },
            }
        },
        '11/7/2022': {
            'stocks': [
                'META', 'AAPL',
                'BABA',
                'PDD',
                //'SPY',
            ],
            'StockCandidates': {
                'META': {
                    highQualityNews: 'layoff', volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
                    deferTrading: false,
                    boxup: 94.5, boxdown: 93,
                    longTargets: [{ price: 95.1, percentage: 0.3 }],
                    shortTargets: []
                },
                'AAPL': {
                    highQualityNews: 'china production issues', volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
                    deferTrading: false,
                    boxup: 137.5, boxdown: 135.5,
                    longTargets: [],
                    shortTargets: [{ price: 132.5, percentage: 0.2 }]
                },
                'BABA': {
                    highQualityNews: 'china reopen', volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
                    deferTrading: false,
                    boxup: 71.75, boxdown: 70.75,
                    longTargets: [{ price: 73.5, percentage: 0.2 }],
                    shortTargets: []
                },
                'PDD': {
                    highQualityNews: 'china reopen', volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
                    deferTrading: false,
                    boxup: 64, boxdown: 63,
                    longTargets: [{ price: 65, percentage: 0.1 }],
                    shortTargets: []
                },
                'QQQ': {
                    highQualityNews: 'index', volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
                    deferTrading: true,
                    longTargets: [{ price: 384.8, percentage: 0.2 }],
                    shortTargets: []
                },
                'SPY': {
                    highQualityNews: 'index', volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
                    deferTrading: true,
                    longTargets: [{ price: 384.8, percentage: 0.2 }],
                    shortTargets: []
                },
            }
        },
        '11/4/2022': {
            //'SPYRange': { 'high': 387.5, 'low': 378 },
            'stocks': [
                'TEAM',
                'DASH',
                'TWLO',
                //'BNTX',
                //'QQQ',
                'SPY',
            ],
            'StockCandidates': {
                'DASH': {
                    highQualityNews: 'earnings', volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
                    deferTrading: false,
                    longTargets: [{ price: 55, percentage: 0.2 }],
                    shortTargets: [{ price: 52, percentage: 0.2 }, { price: 51.2, percentage: 0.2 }]
                },
                'TEAM': {
                    highQualityNews: 'earnings', volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
                    boxup: 138, boxdown: 130,
                    deferTrading: false,
                    longTargets: [{ price: 55, percentage: 0.2 }],
                    shortTargets: [{ price: 52, percentage: 0.2 }, { price: 51.2, percentage: 0.2 }]
                },
                'TWLO': {
                    highQualityNews: 'earnings', volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
                    deferTrading: false,
                    boxup: 51.5, boxdown: 48,
                    longTargets: [],
                    shortTargets: [{ price: 52, percentage: 0.2 }, { price: 51.2, percentage: 0.2 }]
                },
                'SBUX': {
                    highQualityNews: 'earnings', volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
                    deferTrading: false,
                    longTargets: [],
                    shortTargets: [{ price: 52, percentage: 0.2 }, { price: 51.2, percentage: 0.2 }]
                },
                'BNTX': {
                    highQualityNews: 'china approval', volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
                    deferTrading: false,
                    longTargets: [{ price: 159, percentage: 0.2 }],
                    shortTargets: []
                },
                'TSLA': {
                    highQualityNews: 'delivery numbers twitter layoff', volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
                    deferTrading: false,
                    longTargets: [{ price: 55, percentage: 0.2 }],
                    shortTargets: [{ price: 52, percentage: 0.2 }, { price: 51.2, percentage: 0.2 }]
                },
                'SQ': {
                    highQualityNews: 'earnings', volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
                    deferTrading: false,
                    longTargets: [{ price: 55, percentage: 0.2 }],
                    shortTargets: [{ price: 52, percentage: 0.2 }, { price: 51.2, percentage: 0.2 }]
                },
                'QQQ': {
                    highQualityNews: 'earnings', volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
                    boxup: 61, boxdown: 59,
                    deferTrading: true,
                    longTargets: [{ price: 55, percentage: 0.2 }],
                    shortTargets: [{ price: 52, percentage: 0.2 }, { price: 51.2, percentage: 0.2 }]
                },
                'SPY': {
                    highQualityNews: 'gdp numbers', volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
                    deferTrading: true,
                    longTargets: [{ price: 384.8, percentage: 0.2 }],
                    shortTargets: []
                },
            }
        },
        '11/1/2022': {
            'SPYRange': { 'high': 387.5, 'low': 378 },
            'stocks': [
                'SPY',
            ],
            'StockCandidates': {
                'SPY': {
                    highQualityNews: 'gdp numbers', volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
                    deferTrading: false,
                    longTargets: [{ price: 384.8, percentage: 0.2 }],
                    shortTargets: []
                },
            }
        },
        '10/28/2022': {
            'SPYRange': { 'high': 387.5, 'low': 378 },
            'stocks': [
                'PINS',
                'AMZN',
                'AAPL',
                'SPY',
            ],
            'StockCandidates': {
                'PINS': {
                    highQualityNews: 'earnings', volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
                    boxup: 24.5, boxdown: 23.4,
                    deferTrading: false,
                    longTargets: [{ price: 24.97, percentage: 0.2 }],
                    shortTargets: []
                },
                'SPY': {
                    highQualityNews: 'gdp numbers', volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
                    deferTrading: false,
                    longTargets: [{ price: 384.8, percentage: 0.2 }],
                    shortTargets: []
                },
                'QQQ': {
                    volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
                    deferTrading: false,
                },
                'AAPL': {
                    highQualityNews: 'earnings', volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
                    //boxup: 211, boxdown: 204,
                    deferTrading: false,
                    longTargets: [{ price: 146.6, percentage: 0.2 }],
                    shortTargets: []
                },
                'AMZN': {
                    highQualityNews: 'earnings', volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
                    boxup: 98, boxdown: 95,
                    deferTrading: false,
                    longTargets: [{ price: 100.1, percentage: 0.1 }],
                    shortTargets: []
                },
            }
        },
        '10/27/2022': {
            'SPYRange': { 'high': 387.5, 'low': 381.5 },
            'stocks': [
                {
                    symbol: 'META', highQualityNews: 'earnings',
                    longTargets: [{ price: 101.5, percentage: 0.2 }],
                    shortTargets: [{ price: 98.1, percentage: 0.1 }]
                },
                {
                    symbol: 'NVDA', highQualityNews: 'META focus on AI',
                    longTargets: [{ price: 136.9, percentage: 0.2 }],
                    shortTargets: []
                },
                {
                    symbol: 'QQQ', highQualityNews: 'gdp numbers',
                    longTargets: [],
                    shortTargets: [{ price: 276.5, percentage: 0.2 }]
                },
                {
                    symbol: 'SPY', highQualityNews: 'gdp numbers',
                    longTargets: [{ price: 384.8, percentage: 0.2 }],
                    shortTargets: []
                }
            ],
            'StockCandidates': {
                'SAMPLE': {
                    volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
                    bias: 'short',
                    deferTrading: false,
                    //boxup: 32.5, boxdown: 31,
                    //longTargets: [{ price: 80.5, percentage: 0.1 }, { price: 80.9, percentage: 0.25 }],
                    //shortTargets: [{ price: 26.55, percentage: 0.20 }, { price: 25.55, percentage: 0.50 }]
                },
                'MSFT': {
                    volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
                    boxup: 235, boxdown: 233,
                    deferTrading: false,
                },
                'SPY': {
                    volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
                    deferTrading: false,
                },
                'QQQ': {
                    volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
                    deferTrading: false,
                },
                'NVDA': {
                    volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
                    //boxup: 211, boxdown: 204,
                    deferTrading: false,
                },
                'META': {
                    volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
                    boxup: 102, boxdown: 98,
                    deferTrading: false,
                },
            }
        },
        '10/26/2022': {
            'SPYRange': { 'high': 385.5, 'low': 378.2 },
            'stocks': [
                {
                    symbol: 'MSFT', highQualityNews: 'earnings',
                    longTargets: [{ price: 239.5, percentage: 0.3 }],
                    shortTargets: [{ price: 230.5, percentage: 0.3 }]
                },
                {
                    symbol: 'META', highQualityNews: 'earnings after bell',
                    longTargets: [],
                    shortTargets: [{ price: 128.1, percentage: 0.2 }]
                },
                {
                    symbol: 'QQQ', highQualityNews: 'big tech earnings',
                    longTargets: [],
                    shortTargets: [{ price: 278.05, percentage: 0.2 }]
                },
                {
                    symbol: 'SPY', highQualityNews: 'big tech earnings',
                    longTargets: [{ price: 382.93, percentage: 0.2 }],
                    shortTargets: []
                }
            ],
            'StockCandidates': {
                'SAMPLE': {
                    volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
                    bias: 'short',
                    deferTrading: false,
                    //boxup: 32.5, boxdown: 31,
                    //longTargets: [{ price: 80.5, percentage: 0.1 }, { price: 80.9, percentage: 0.25 }],
                    //shortTargets: [{ price: 26.55, percentage: 0.20 }, { price: 25.55, percentage: 0.50 }]
                },
                'MSFT': {
                    volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
                    boxup: 235, boxdown: 233,
                    deferTrading: false,
                },
                'SPY': {
                    volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
                    deferTrading: false,
                },
                'QQQ': {
                    volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
                    deferTrading: false,
                },
                'TSLA': {
                    volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
                    boxup: 211, boxdown: 204,
                    deferTrading: false,
                },
                'META': {
                    volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
                    boxup: 132.5, boxdown: 131.25,
                    deferTrading: false,
                },
                'BABA': {
                    volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
                    boxup: 64.5, boxdown: 62.5,
                    deferTrading: false,
                },
            }
        },
        '10/24/2022': {
            'SPYRange': { 'high': 378, 'low': 369.4 },
            'stocks': [
                {
                    symbol: 'FUTU', highQualityNews: 'china GDP',
                    longTargets: [],
                    shortTargets: [{ price: 28.05, percentage: 0.1 }]
                },
                {
                    symbol: 'TSLA', highQualityNews: 'china gdp',
                    longTargets: [],
                    shortTargets: [{ price: 200.3, percentage: 0.2 }]
                },
                {
                    symbol: 'PDD', highQualityNews: 'china gdp',
                    longTargets: [],
                    shortTargets: [{ price: 48.6, percentage: 0.2 }]
                },
                {
                    symbol: 'BABA', highQualityNews: 'china gdp',
                    longTargets: [{ price: 67, percentage: 0.2 }],
                    shortTargets: [{ price: 60.1, percentage: 0.2 }]
                },
                /*
                {
                    symbol: 'SPY', highQualityNews: 'pmi numbers',
                    longTargets: [{ price: 378.03, percentage: 0.3 }],
                    shortTargets: []
                }*/
            ],
            'StockCandidates': {
                'SAMPLE': {
                    volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
                    bias: 'short',
                    deferTrading: false,
                    //boxup: 32.5, boxdown: 31,
                    //longTargets: [{ price: 80.5, percentage: 0.1 }, { price: 80.9, percentage: 0.25 }],
                    //shortTargets: [{ price: 26.55, percentage: 0.20 }, { price: 25.55, percentage: 0.50 }]
                },
                'FUTU': {
                    volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
                    boxup: 30, boxdown: 28.5,
                    deferTrading: false,
                },
                'SPY': {
                    volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
                    deferTrading: false,
                },
                'QQQ': {
                    volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
                    deferTrading: false,
                },
                'TSLA': {
                    volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
                    boxup: 211, boxdown: 204,
                    deferTrading: false,
                },
                'PDD': {
                    volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
                    boxup: 50, boxdown: 48,
                    deferTrading: false,
                },
                'BABA': {
                    volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
                    boxup: 64.5, boxdown: 62.5,
                    deferTrading: false,
                },
            }
        },
        '10/20/2022': {
            'SPYRange': { 'high': 371.4, 'low': 365.93 },
            'stocks': [
                {
                    symbol: 'IBM', highQualityNews: 'earnings',
                    longTargets: [{ price: 129.9, percentage: 0.3 }],
                    shortTargets: []
                },
                {
                    symbol: 'TSLA', highQualityNews: 'earnings',
                    longTargets: [{ price: 214, percentage: 0.3 }],
                    shortTargets: [{ price: 200.5, percentage: 0.3 }]
                },
                {
                    symbol: 'QQQ', highQualityNews: 'job numbers',
                    longTargets: [],
                    shortTargets: [{ price: 35.625, percentage: 0.2 }]
                },
                {
                    symbol: 'SPY', highQualityNews: 'job numbers',
                    longTargets: [],
                    shortTargets: [{ price: 35.625, percentage: 0.2 }]
                }
            ],
            'StockCandidates': {
                'SAMPLE': {
                    volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
                    bias: 'short',
                    deferTrading: false,
                    //boxup: 32.5, boxdown: 31,
                    //longTargets: [{ price: 80.5, percentage: 0.1 }, { price: 80.9, percentage: 0.25 }],
                    //shortTargets: [{ price: 26.55, percentage: 0.20 }, { price: 25.55, percentage: 0.50 }]
                },
                'IBM': {
                    volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
                    boxup: 128.5, boxdown: 126.5,
                    deferTrading: false,
                },
                'SPY': {
                    volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
                    deferTrading: false,
                },
                'QQQ': {
                    volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
                    deferTrading: false,
                },
                'TSLA': {
                    volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
                    boxup: 210.5, boxdown: 206,
                    deferTrading: false,
                },
            }
        },
        '10/18/2022': {
            'SPYRange': { 'high': 369.7, 'low': 363.14 },
            'stocks': [
                {
                    symbol: 'FUBO', highQualityNews: 'raise guidance',
                    longTargets: [{ price: 4.98, percentage: 0.2 }],
                    shortTargets: []
                },
                {
                    symbol: 'TSLA', highQualityNews: 'earnings tomorrow',
                    longTargets: [{ price: 234, percentage: 0.2 }],
                    shortTargets: []
                },
                /*
                {
                    symbol: 'CRM', highQualityNews: 'investor take stake',
                    longTargets: [],
                    shortTargets: [{ price: 152.1, percentage: 0.3 }]
                },*/
                {
                    symbol: 'QQQ', highQualityNews: 'europe news',
                    longTargets: [],
                    shortTargets: [{ price: 35.625, percentage: 0.2 }]
                },
                {
                    symbol: 'SPY', highQualityNews: 'europe news',
                    longTargets: [],
                    shortTargets: [{ price: 35.625, percentage: 0.2 }]
                }
            ],
            'StockCandidates': {
                'SAMPLE': {
                    volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
                    bias: 'short',
                    deferTrading: false,
                    //boxup: 32.5, boxdown: 31,
                    //longTargets: [{ price: 80.5, percentage: 0.1 }, { price: 80.9, percentage: 0.25 }],
                    //shortTargets: [{ price: 26.55, percentage: 0.20 }, { price: 25.55, percentage: 0.50 }]
                },
                'FUBO': {
                    volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
                    deferTrading: false,
                },
                'MSFT': {
                    volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
                    deferTrading: false,
                },
                'SPY': {
                    volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
                    deferTrading: false,
                },
                'QQQ': {
                    volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
                    deferTrading: false,
                },
                'TSLA': {
                    volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
                    boxup: 230, boxdown: 227,
                    deferTrading: false,
                },
                'CRM': {
                    volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
                    deferTrading: false,
                },
            }
        },
        '10/12/2022': {
            'SPYRange': { 'high': 361.46, 'low': 355.56 },
            'stocks': [
                {
                    symbol: 'MRNA', highQualityNews: 'partner with merck for cancer vaccine',
                    longTargets: [{ price: 139.8, percentage: 0.2 }, { price: 141.98, percentage: 0.2 }],
                    shortTargets: [{ price: 68.05, percentage: 0.2 }]
                },
                {
                    symbol: 'TSLA', highQualityNews: 'analyst short',
                    longTargets: [],
                    shortTargets: [{ price: 215.45, percentage: 0.1 }, { price: 215.06, percentage: 0.1 }]
                },
                {
                    symbol: 'BA', highQualityNews: 'downgrade',
                    longTargets: [],
                    shortTargets: [{ price: 127.2, percentage: 0.1 }, { price: 125.5, percentage: 0.3 }]
                },
                {
                    symbol: 'SPY', highQualityNews: 'PPI numbers',
                    longTargets: [],
                    shortTargets: [{ price: 35.625, percentage: 0.2 }]
                }
            ],
            'StockCandidates': {
                'SAMPLE': {
                    volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
                    bias: 'short',
                    deferTrading: false,
                    //boxup: 32.5, boxdown: 31,
                    //longTargets: [{ price: 80.5, percentage: 0.1 }, { price: 80.9, percentage: 0.25 }],
                    //shortTargets: [{ price: 26.55, percentage: 0.20 }, { price: 25.55, percentage: 0.50 }]
                },
                'MRNA': {
                    volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
                    bias: 'short',
                    deferTrading: false,
                },
                'BA': {
                    volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
                    bias: 'short',
                    deferTrading: false,
                },
                'SPY': {
                    volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
                    bias: 'short',
                    deferTrading: false,
                },
                'TSLA': {
                    volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
                    bias: 'short',
                    deferTrading: false,
                },
            }
        },
        '10/11/2022': {
            'SPYRange': { 'high': 366.56, 'low': 358.72 },
            'stocks': [
                {
                    symbol: 'COIN', highQualityNews: 'partner with google',
                    longTargets: [],
                    shortTargets: [{ price: 68.05, percentage: 0.2 }]
                },
                {
                    symbol: 'RBLX', highQualityNews: 'downgrade',
                    longTargets: [],
                    shortTargets: [{ price: 32.05, percentage: 0.1 }, { price: 31.6, percentage: 0.1 }]
                },
                {
                    symbol: 'META', highQualityNews: 'downgrade',
                    longTargets: [],
                    shortTargets: [{ price: 130.1, percentage: 0.3 }]
                },
                {
                    symbol: 'DASH', highQualityNews: 'contractor laws',
                    longTargets: [],
                    shortTargets: [{ price: 41.2, percentage: 0.2 }, { price: 40.5, percentage: 0.2 }]
                }
            ],
        },
        '10/10/2022': {
            'SPYRange': { 'high': 366.5, 'low': 358.7 },
            'stocks': [
                {
                    symbol: 'TSLA', highQualityNews: 'delivery',
                    longTargets: [{ price: 228.5, percentage: 0.3 }],
                    shortTargets: [{ price: 220.1, percentage: 0.2 }]
                },
                {
                    symbol: 'AMD', highQualityNews: 'us china lows',
                    longTargets: [{ price: 57.9, percentage: 0.3 }],
                    shortTargets: [{ price: 57.2, percentage: 0.3 }]
                },
                {
                    symbol: 'RIVN', highQualityNews: 'recall',
                    longTargets: [{ price: 32.9, percentage: 0.5 }],
                    shortTargets: [{ price: 30.1, percentage: 0.3 }, { price: 29.8, percentage: 0.2 }]
                },
                {
                    symbol: 'PYPL', highQualityNews: 'retract announcement',
                    longTargets: [{ price: 89.5, percentage: 0.3 }],
                    shortTargets: [{ price: 83.2, percentage: 0.3 }]
                }
            ],
        },
        '10/7/2022': {
            'SPYRange': { 'high': 375.5, 'low': 367.94 },
            'stocks': [
                {
                    symbol: 'TSLA', highQualityNews: 'semi truck production',
                    longTargets: [{ price: 238.5, percentage: 0.1 }, { price: 239.5, percentage: 0.1 }],
                    shortTargets: [{ price: 234.1, percentage: 0.3 }]
                },
                {
                    symbol: 'AMD', highQualityNews: 'cuts outlook',
                    longTargets: [{ price: 65.5, percentage: 0.1 }, { price: 65.97, percentage: 0.2 }],
                    shortTargets: [{ price: 233.35, percentage: 0.1 }, { price: 228.1, percentage: 0.3 }]
                },
                {
                    symbol: 'QQQ', highQualityNews: 'non farm payroll',
                    longTargets: [{ price: 277.62, percentage: 0.3 }],
                    shortTargets: [{ price: 273.72, percentage: 0.1 }, { price: 272.52, percentage: 0.1 }]
                },
                {
                    symbol: 'SPY', highQualityNews: 'non farm payrolls',
                    longTargets: [{ price: 370.7, percentage: 0.3 }],
                    shortTargets: [{ price: 367.7, percentage: 0.2 }]
                }
            ],
        },
        '10/6/2022': {
            'SPYRange': { 'high': 383.12, 'low': 372.56 },
            'stocks': [
                {
                    symbol: 'TSLA', highQualityNews: 'price cuts',
                    longTargets: [{ price: 244.1, percentage: 0.1 }, { price: 245, percentage: 0.3 }],
                    shortTargets: [{ price: 234.1, percentage: 0.3 }]
                },
                {
                    symbol: 'PINS', highQualityNews: 'upgrade',
                    longTargets: [{ price: 25.88, percentage: 0.2 }, { price: 26.7, percentage: 0.2 }],
                    shortTargets: []
                },
                {
                    symbol: 'QQQ', highQualityNews: 'jobless numbers',
                    longTargets: [{ price: 282.72, percentage: 0.3 }],
                    shortTargets: [{ price: 280.27, percentage: 0.3 }]
                },
                {
                    symbol: 'SPY', highQualityNews: 'jobless numbers',
                    longTargets: [{ price: 376.93, percentage: 0.3 }],
                    shortTargets: [{ price: 375.58, percentage: 0.1 }]
                }
            ],
        },
        '10/5/2022': {
            'SPYRange': { 'high': 379.65, 'low': 373.94 },
            'stocks': [
                {
                    symbol: 'TSLA', highQualityNews: 'elon buy twitter', longTargets: [],
                    shortTargets: [{ price: 244.1, percentage: 0.1 }, { price: 241.5, percentage: 0.1 }, { price: 242.5, percentage: 0.1 }, { price: 238.5, percentage: 0.3 }]
                },
                {
                    symbol: 'AMD', highQualityNews: 'price cut', longTargets: [],
                    shortTargets: [{ price: 66.3, percentage: 0.1 }, { price: 65.97, percentage: 0.1 }, { price: 65.5, percentage: 0.1 }, { price: 64.92, percentage: 0.1 }]
                },
                {
                    symbol: 'QQQ', highQualityNews: 'oil production cut',
                    longTargets: [{ price: 279.41, percentage: 0.1 }, { price: 279.9, percentage: 0.1 }, { price: 280.22, percentage: 0.3 }],
                    shortTargets: [{ price: 276.8, percentage: 0.3 }, { price: 275.8, percentage: 0.3 }]
                },
                {
                    symbol: 'SPY', highQualityNews: 'oil production cut',
                    longTargets: [{ price: 375.2, percentage: 0.3 }],
                    shortTargets: [{ price: 373.42, percentage: 0.1 }, { price: 372.95, percentage: 0.3 }]
                }
            ],
        },
        '10/4/2022': {
            'SPYRange': { 'high': 368.38, 'low': 363.11 },
            'stocks': [
                { symbol: 'RIVN', highQualityNews: 'delivery numbers good', longTargets: [{ price: 157.5, percentage: 0.3 }], shortTargets: [{ price: 170.3, percentage: 0.3 }] },
                { symbol: 'TSLA', highQualityNews: 'RIVN news', longTargets: [{ price: 157.5, percentage: 0.3 }], shortTargets: [{ price: 170.3, percentage: 0.3 }] },
                { symbol: 'QQQ', highQualityNews: '7am job numbers', longTargets: [{ price: 157.5, percentage: 0.3 }], shortTargets: [{ price: 170.3, percentage: 0.3 }] },
                { symbol: 'SPY', highQualityNews: '7am job numbers', longTargets: [{ price: 157.5, percentage: 0.3 }], shortTargets: [{ price: 170.3, percentage: 0.3 }] }
            ],
        },
        '10/3/2022': {
            'SPYRange': { 'high': 361.47, 'low': 356.83 },
            'stocks': [
                {
                    symbol: 'TSLA', highQualityNews: 'delivery numbers miss',
                    longTargets: [{ price: 157.5, percentage: 0.3 }], shortTargets: [{ price: 170.3, percentage: 0.3 }]
                },
                { symbol: 'NIO', highQualityNews: 'delivery', targets: [] },
                { symbol: 'QQQ', highQualityNews: 'europe give up tax cuts', targets: [] },
                { symbol: 'SPY', highQualityNews: 'europe give up tax cuts', targets: [] }
            ],
        },
        '9/30/2022': {
            'SPYRange': { 'high': 368, 'low': 360.7 },
            'stocks': [
                { symbol: 'NKE', highQualityNews: 'earnings' },
                { symbol: 'TSLA', highQualityNews: 'AI day' },
                //{ symbol: 'META', highQualityNews: 'hiring freez' },
                { symbol: 'MU', highQualityNews: 'earnings' },
                // { symbol: 'QQQ', highQualityNews: 'GDP, job numbers' },
                { symbol: 'SPY', highQualityNews: 'GDP, job numbers' }
            ],
        },
        '9/29/2022': {
            'SPYRange': { 'high': 371.32, 'low': 365.97 },
            'stocks': [
                { symbol: 'AAPL', highQualityNews: 'BoA downgrade' },
                { symbol: 'TSLA', highQualityNews: 'small firm price cut' },
                //{ symbol: 'KMX', highQualityNews: 'earnings, below at time low' },
                { symbol: 'BIIB', highQualityNews: 'second day drug news' },
                // { symbol: 'QQQ', highQualityNews: 'GDP, job numbers' },
                { symbol: 'SPY', highQualityNews: 'GDP, job numbers' }
            ],
        },
        '9/28/2022': {
            'SPYRange': { 'high': 366.5, 'low': 362.2 },
            'stocks': [
                { symbol: 'AAPL', highQualityNews: 'production news' }, { symbol: 'BIIB', highQualityNews: 'phase 3' },
                { symbol: 'LLY', highQualityNews: 'BIIB news' }, { symbol: 'PRTA', highQualityNews: 'BIIB news' },
                //{ symbol: 'QQQ', highQualityNews: 'market' },{ symbol: 'SPY', highQualityNews: 'market' }
            ],
        },
        '6/10/2022': ['DOCU', 'NFLX', 'TSLA', 'SPY'],
        '6/13/2022': ['AMD', 'TSLA', 'QQQ', 'SPY'],
        '6/14/2022': ['ORCL', 'COIN', 'QQQ', 'SPY'],
        '6/15/2022': ['QQQ', 'SPY', 'SNOW', 'NIO'],
        '6/16/2022': ['QQQ', 'SPY', 'TSLA', 'BA'],
        '6/17/2022': ['QQQ', 'SPY', 'BABA', 'ROKU'],
        '6/21/2022': ['TSLA', 'NIO', 'QQQ', 'SPY'],
        '6/22/2022': ['AAPL', 'AMD', 'QQQ', 'TSLA'],
        '6/23/2022': ['TSLA', 'SNOW', 'PEV', 'SPY'],
        '6/24/2022': ['TSLA', 'ZEN', 'QQQ', 'SPY'],
        '6/27/2022': [
            { symbol: 'CHWY', news: 'upgrade' }, { symbol: 'COIN', news: 'downgrade' },
            { symbol: 'QQQ', news: '' }, { symbol: 'SPY', news: '' }],
        '6/28/2022': [
            { symbol: 'LI', news: 'offering' }, { symbol: 'TCOM', news: 'earnings gap up' },
            { symbol: 'DIS', news: 'earnings gap up' }, { symbol: 'NKE', news: 'earnings gap down' }],
        '6/29/2022': [
            { symbol: 'UPST', news: 'downgrade' }, { symbol: 'NIO', news: 'short seller report' },
            { symbol: 'QQQ', news: '' }, { symbol: 'SPY', news: '' }],
        '6/30/2022': [
            { symbol: 'TSLA', news: 'relative strong' }, { symbol: 'RH', news: 'earnings miss, price cut' },
            { symbol: 'QQQ', news: 'PCE data' }, { symbol: 'SPY', news: 'PCE data' }],
        '7/1/2022': [
            { symbol: 'KSS', news: 'aquisition talk failed' }, { symbol: 'AMD', news: 'earnings miss' },
            { symbol: 'TSLA', news: 'expecting good deliveries' }, { symbol: 'SPY', news: '' }],
        '7/5/2022': [
            { symbol: 'TSLA', news: 'delivery not good' }, { symbol: 'BNTX', news: 'patent lawsuit' },
            { symbol: 'AMD', news: 'very weak' },
            { symbol: 'QQQ', news: 'russia cut pipeline drags down market' }, { symbol: 'SPY', news: 'russia cut pipeline drags down market' }],
        '7/6/2022': [
            { symbol: 'DASH', news: 'amazon with grubhub' }, { symbol: 'UBER', news: 'amazon with grubhub' },
            { symbol: 'TDOC', news: 'tier 1 upgrade' }, { symbol: 'AMD', news: 'continue strength' },
            { symbol: 'QQQ', news: '' }, { symbol: 'SPY', news: '' }],
        '7/7/2022': [
            { symbol: 'GME', news: 'stock split approval' }, { symbol: 'USEA', news: 'new stock' },
            { symbol: 'NVDA', news: 'samsung good news' }, { symbol: 'AMD', news: 'samsung good news' },
            { symbol: 'QQQ', news: 'gap up' }, { symbol: 'SPY', news: 'gap up' }],
        '7/8/2022': [
            { symbol: 'UPST', news: 'bad preliminary Q2' }, { symbol: 'TWTR', news: 'elon not buying' },
            { symbol: 'GME', news: 'CFO and layoff' },
            { symbol: 'QQQ', news: 'econ data release' }, { symbol: 'SPY', news: 'econ data release' }],
        '7/11/2022': [
            { symbol: 'META', news: 'small firm downgrade' }, { symbol: 'TSLA', news: 'elon not buy twitter, not need to sell TSLA to raise cash' },
            { symbol: 'BABA', news: 'china news' }, { symbol: 'DWAC', news: 'elon not buying twitter' },
            { symbol: 'QQQ', news: 'big gap' }, { symbol: 'SPY', news: 'big gap' }],
        '7/12/2022': [
            { symbol: 'XLE', news: 'oil crash premarket' }, { symbol: 'TSLA', news: 'twitter news/lawsuit continues' },
            { symbol: 'QQQ', news: 'stronger than SPY' }, { symbol: 'SPY', news: 'gap below y-low' }],
        '7/13/2022': [
            { symbol: 'U', news: 'buy IS for too much money' }, { symbol: 'SPY', news: 'CPI data high' },
            { symbol: 'QQQ', news: 'CPI data high' }],
        '7/14/2022': [
            { symbol: 'JPM', news: 'earnings miss' }, { symbol: 'TSM', news: 'earnings beat' },
            { symbol: 'AMD', news: 'upgrade & TSM up' }, { symbol: 'NVDA', news: 'TSM up' },
            { symbol: 'QQQ', news: 'PPI data' }, { symbol: 'SPY', news: 'PPI data' }],
        '7/15/2022': [
            { symbol: 'AMD', news: 'chips strong' }, { symbol: 'NVDA', news: 'chips strong' },
            { symbol: 'QQQ', news: 'retail data' }, { symbol: 'SPY', news: 'retail data' }],
        '7/18/2022': [
            { symbol: 'BA', news: 'big order' }, { symbol: 'GS', news: 'earnings beat' },
            { symbol: 'AMD', news: 'semi' }, { symbol: 'NVDA', news: 'semi' },
            { symbol: 'QQQ', news: 'big gap up' }, { symbol: 'SPY', news: 'big gap up' }],
        '7/19/2022': [
            { symbol: 'IBM', news: 'earnings, big gap down' }, { symbol: 'APLS', news: 'FDA granted priority review' },
            { symbol: 'AAPL', news: 'slow hiring' }, { symbol: 'NVDA', news: 'ASML earnings coming' },
            { symbol: 'QQQ', news: 'big gap up' }, { symbol: 'SPY', news: 'big gap up' }],
        '7/20/2022': [
            { symbol: 'NFLX', news: 'earnings, big gap up' }, { symbol: 'TSLA', news: 'TWTR wins fast trail agains Musk' },
            { symbol: 'AMD', news: 'ASML earnings' }, { symbol: 'NVDA', news: 'ASML earnings' },
            { symbol: 'QQQ', news: 'europ river dry' }, { symbol: 'SPY', news: 'europ river dry' }],
        '7/21/2022': [
            { symbol: 'MSFT', news: 'slow hiring' }, { symbol: 'DOCU', news: 'downgrade' },
            { symbol: 'AMD', news: 'chips law' }, { symbol: 'TSLA', news: 'earnings' },
            { symbol: 'UAL', news: 'earnings' }, { symbol: 'SMCI', news: 'earnings' },
            { symbol: 'QQQ', news: 'job numbers' }, { symbol: 'SPY', news: 'job numbers' }],
        '7/22/2022': [
            { symbol: 'META', news: 'snap earnings' }, { symbol: 'TTD', news: 'snap earnings' },
            { symbol: 'AXP', news: 'earnings beat' }, { symbol: 'TSLA', news: 'upgrade' }],
        '7/25/2022': [
            { symbol: 'NVDA', news: 'chips price cut' }, { symbol: 'AMD', news: 'chips price cut' },
            { symbol: 'META', news: 'price cut' }, { symbol: 'TSLA', news: 'upgrade' }],
        '7/26/2022': [
            { symbol: 'WMT', news: 'cut outlook' }, { symbol: 'SHOP', news: 'layoff' },
            { symbol: 'COST', news: 'WMT down' }, { symbol: 'COIN', news: 'SEC investigation' },
            { symbol: 'CHWY', news: 'downgrade' }, { symbol: 'BABA', news: 'listing' }],
        '7/27/2022': [
            { symbol: 'BA', news: 'earnings' }, { symbol: 'SAVA', news: 'criminal investigation' },
            { symbol: 'SPOT', news: 'earnings' }, { symbol: 'SHOP', news: 'earnings' },
            { symbol: 'QQQ', news: 'consumer condifident at 10am' }, { symbol: 'SPY', news: 'consumer condifident at 10am' }],
        '7/28/2022': [
            { symbol: 'TSLA', news: 'energy bill' }, { symbol: 'META', news: 'earnings' },
            { symbol: 'QQQ', news: 'gdp numbers' }, { symbol: 'SPY', news: 'gdp numbers' }],
        '7/29/2022': [
            { symbol: 'ROKU', news: 'earnings' }, { symbol: 'BABA', news: 'Jack Ma give up ant control' },
            { symbol: 'AAPL', news: 'earnings' }, { symbol: 'AMZN', news: 'earnings' },
            { symbol: 'INTC', news: 'earnings' }, { symbol: 'TSLA', news: 'market move' },
            { symbol: 'QQQ', news: 'PCE numbers' }, { symbol: 'SPY', news: 'PCE numbers' }],
        '8/1/2022': [
            { symbol: 'BA', news: 'clear delivery' }, { symbol: 'TSLA', news: 'chinese EV delivery numbers' },
            { symbol: 'QQQ', news: 'US china news' }, { symbol: 'SPY', news: 'US china news' }],
        '8/2/2022': [
            { symbol: 'PINS', news: 'earnings' }, { symbol: 'SNOW', news: 'downgrade' },
            { symbol: 'QQQ', news: 'US china news' }, { symbol: 'SPY', news: 'US china news' }],
        '8/3/2022': [
            { symbol: 'PYPL', news: 'earnings' }, { symbol: 'MTCH', news: 'earnings' },
            { symbol: 'AMD', news: 'earnings' }, { symbol: 'NVDA', news: 'AMD earnings' },
            { symbol: 'QQQ', news: 'FED says soft landing' }, { symbol: 'SPY', news: 'FED says soft landing' }],
        '8/5/2022': [
            { symbol: 'TWLO', news: 'earnings' }, { symbol: 'NET', news: 'AMD earnings' },
            { symbol: 'SQ', news: 'earnings' }, { symbol: 'DASH', news: 'earnings' },
            { symbol: 'QQQ', news: 'nonfarm payroll' }, { symbol: 'SPY', news: 'nonfarm payroll' }],
        '8/9/2022': [
            { symbol: 'NVAX', news: 'guidance down' }, { symbol: 'UPST', news: 'earnings' },
            { symbol: 'TSLA', news: 'delivery numbers' }, { symbol: 'U', news: 'Chatter' },
            { symbol: 'QQQ', news: 'small gap down' }, { symbol: 'SPY', news: 'small gap down' }],
        '8/10/2022': [
            { symbol: 'TSLA', news: 'elon done selling' }, { symbol: 'RBLX', news: 'earnings' },
            { symbol: 'TTD', news: 'earnings' }, { symbol: 'NVAX', news: 'price cuts' },
            { symbol: 'QQQ', news: 'CPI good' }, { symbol: 'SPY', news: 'CPI good' }],
        '8/12/2022': [
            { symbol: 'BABA', news: 'china news' }, { symbol: 'ILMN', news: 'earnings' },
            { symbol: 'QQQ', news: 'consumer sentiment' }, { symbol: 'SPY', news: 'consumer sentiment' }],
        '8/31/2022': [
            { symbol: 'SNAP', news: 'layoff news' }, { symbol: 'BABA', news: 'china news' },
            { symbol: 'QQQ', news: 'gap up' }, { symbol: 'SPY', news: 'gap up' }],
        '9/1/2022': [
            { symbol: 'OKTA', news: 'earnings' }, { symbol: 'MDB', news: 'earnings' },
            { symbol: 'NVDA', news: 'china license' }, { symbol: 'AMD', news: 'NVDA news' },
            { symbol: 'QQQ', news: 'gap up' }, { symbol: 'SPY', news: 'gap up' }],
        '9/2/2022': [
            { symbol: 'TSLA', news: 'new month sales' }, { symbol: 'LULU', news: 'earnings' },
            { symbol: 'AAPL', news: 'xiao lang pick' },
            { symbol: 'BABA', news: 'china lockdown' },
            { symbol: 'NVDA', news: 'downgrade' },
            { symbol: 'QQQ', news: 'non farm payroll' }, { symbol: 'SPY', news: 'non farm payroll' }],
        '9/6/2022': [
            { symbol: 'TSLA', news: 'upgrade' }, { symbol: 'AAPL', news: 'new product conference' },
            { symbol: 'QQQ', news: 'gap up' }, { symbol: 'SPY', news: 'gap up' }],
        '9/8/2022': [
            { symbol: 'ASAN', news: 'earnings' }, { symbol: 'FSLR', news: 'upgrade' },
            { symbol: 'QQQ', news: 'gap down' }, { symbol: 'SPY', news: 'gap down' }],
        '9/9/2022': [
            { symbol: 'DOCU', news: 'earnings' }, { symbol: 'ZS', news: 'earnings' },
            { symbol: 'QQQ', news: 'gap down' }, { symbol: 'SPY', news: 'gap down' }],
        '9/12/2022': [
            { symbol: 'RBLX', news: 'down rating' }, { symbol: 'AAPL', news: 'stronger' },
            { symbol: 'QQQ', news: 'gap up' }, { symbol: 'SPY', news: 'gap up' }],
        '9/13/2022': [
            { symbol: 'CVNA', news: 'gap down' }, { symbol: 'TSLA', news: 'every day' },
            { symbol: 'COIN', news: 'weaker' }, { symbol: 'AAPL', news: 'stronger' },
            { symbol: 'QQQ', news: 'CPI' }, { symbol: 'SPY', news: 'CPI' }],
        '9/14/2022': [
            { symbol: 'SQ', news: 'downgrade' }, { symbol: 'TSLA', news: 'every day' },
            { symbol: 'META', news: 'weaker' }, { symbol: 'AAPL', news: 'in play' },
            { symbol: 'QQQ', news: 'range day' }, { symbol: 'SPY', news: 'range day' }],
        '9/15/2022': [
            { symbol: 'ADBE', news: 'acquisition' }, { symbol: 'NFLX', news: 'upgrade' },
            { symbol: 'META', news: 'weaker' }, { symbol: 'TSLA', news: 'stronger' },
            { symbol: 'QQQ', news: 'retail sales' }, { symbol: 'SPY', news: 'retail sales' }],
        '9/16/2022': [
            { symbol: 'FDX', news: 'earnings' }, { symbol: 'AMZN', news: 'FDX drag' },
            { symbol: 'QQQ', news: 'gap down, big trend' }, { symbol: 'SPY', news: 'gap down, big trend' }],
        '9/20/2022': [
            { symbol: 'F', news: 'production stuck' }, { symbol: 'PYPL', news: 'downgrade' },
            { symbol: 'BNTX', news: 'covid over' }, { symbol: 'MRNA', news: 'covid over' },
            { symbol: 'TSLA', news: 'momemutum' }, { symbol: 'BA', news: 'supply deal' },
            { symbol: 'QQQ', news: 'gap down range day' }, { symbol: 'SPY', news: 'gap down range day' }],
        '9/21/2022': [
            { symbol: 'TSLA', news: 'relative strength' }, { symbol: 'AAPL', news: 'heavy weight' },
            { symbol: 'LMT', news: 'war escalate' }, { symbol: 'SPY', news: 'FOMC day' }],
        '9/22/2022': [
            { symbol: 'TSLA', news: 'recall' }, { symbol: 'LI', news: 'launch new SUV' },
            { symbol: 'CRM', news: 'raise guidance' }, { symbol: 'SQ', news: 'downgrade' }],
        '9/23/2022': {
            'SPYRange': { 'high': 123, 'low': 567 },
            'stocks': [
                { symbol: 'COIN', highQualityNews: 'downgrade' }, { symbol: 'FDX', highQualityNews: 'earnings' },
                { symbol: 'QQQ', highQualityNews: 'big gap down' }, { symbol: 'SPY', highQualityNews: 'big gap down' }],
        },
        '9/26/2022': {
            'SPYRange': { 'high': 369.72, 'low': 363 },
            'stocks': [
                { symbol: 'TSLA', highQualityNews: 'fire in berlin factory' }, { symbol: 'WYNN', highQualityNews: 'upgrade' },
                { symbol: 'QQQ', highQualityNews: 'big gap down' }, { symbol: 'SPY', highQualityNews: 'big gap down' }],
        },
        '9/27/2022': {
            'SPYRange': { 'high': 369.72, 'low': 363.11 },
            'stocks': [
                { symbol: 'TSLA', highQualityNews: 'twiter case delayed' }, { symbol: 'NVDA', highQualityNews: 'upgrade' },
                { symbol: 'COIN', highQualityNews: 'fed talk crypto' }, { symbol: 'SPY', highQualityNews: 'durable goods data' }],
        },
    }
};