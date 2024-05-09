Buy (cover same thing) x shares at limit Ask+.10
```
ROUTE=SMRTL;Price=Ask+0.10;TIF=DAY+;BUY=Send
```
Sell (short same thing) x shares at limit Bid-.10
```
ROUTE=SMRTL;Price=Bid-.10;TIF=DAY+;SELL=Send
```
buy x shares then place 1 to 2 risk reward stop range on it
```
ROUTE=SMRTL;Price=Ask+0.10;TIF=DAY+;BUY=Send;TriggerOrder=RT:STOP STOPTYPE:RANGE LowPrice:AvgCost2-.10 HighPrice:AvgCost2+.20 ACT:SELL QTY:POS TIF:DAY+
```
buy x shares place 10 cent trailing on it (market hours only)
```
ROUTE=SMRTL;Price=Ask+0.10;TIF=DAY+;BUY=Send;TriggerOrder=RT:STOP STOPTYPE:TRAILING STOPPRICE:0.10 ACT:SELL QTY:POS TIF:DAY+
```
short x shares then place 1 to 3 risk reward stop range on it
```
ROUTE=SMRTL;Price=Bid-.10;TIF=DAY+;SELL=Send;TriggerOrder=RT:STOP STOPTYPE:RANGE LowPrice:AvgCost2-.30 HighPrice:AvgCost2+.10 ACT:BUY QTY:POS TIF:DAY+
```