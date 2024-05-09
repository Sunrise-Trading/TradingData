https://www.youtube.com/watch?v=0hw59cB60os&t=9s


Long with $20 risk per trade WITH Stop sent to the market:
```
StopPrice=Price-0;DefShare=BP*0.925;Price=Ask-Price+0.00;SShare=20/Price;Share=DefShare-SShare;DefShare=DefShare+SShare;SShare=Share;Sshare=DefShare-SShare;Share=0.5*SShare;TogSShare;ROUTE=SMRTL;Price= Ask+0.05;TIF=DAY+;BUY=Send;DefShare=200;TriggerOrder=RT:STOP STOPTYPE:MARKET PX:StopPrice-0.05 ACT:SELL STOPPRICE:StopPrice QTY:Pos TIF:DAY+;
```

Short with $20 risk per trade WITH Stop sent to the market:
```
StopPrice=Price+0;DefShare=BP*0.925;Price=Price-Bid+0.00;SShare=20/Price;Share=DefShare-SShare;DefShare=DefShare+SShare;SShare=Share;Sshare=DefShare-SShare;Share=0.5*SShare;TogSShare;ROUTE=SMRTL;Price=Bid-0.05;TIF=DAY+;SELL=Send;DefShare=200;TriggerOrder=RT:STOP STOPTYPE:MARKET PX:StopPrice+0.05 ACT:BUY STOPPRICE:StopPrice QTY:Pos TIF:DAY+;
```

Long with $20 risk per trade WITHOUT Stop Order:
```
StopPrice=Price-0;DefShare=BP*0.925;Price=Ask-Price+0.00;SShare=20/Price;Share=DefShare-SShare;DefShare=DefShare+SShare;SShare=Share;Sshare=DefShare-SShare;Share=0.5*SShare;TogSShare;ROUTE=SMRTL;Price= Ask+0.05;TIF=DAY+;BUY=Send;DefShare=200;
```

Short with $20 risk per trade WITHOUT Stop Order:
```
StopPrice=Price+0;DefShare=BP*0.925;Price=Price-Bid+0.00;SShare=20/Price;Share=DefShare-SShare;DefShare=DefShare+SShare;SShare=Share;Sshare=DefShare-SShare;Share=0.5*SShare;TogSShare;ROUTE=SMRTL;Price=Bid-0.05;TIF=DAY+;SELL=Send;DefShare=200;
```
