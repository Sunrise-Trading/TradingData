insert into [dbo].[daily_stocks] (datestr, symbol,id) 
values ('2024-05-29','aal','aal-2024-05-29');
insert into [dbo].[daily_stocks] (datestr, symbol,id) 
values ('2024-05-29','chwy','chwy-2024-05-29');
insert into [dbo].[daily_stocks] (datestr, symbol,id) 
values ('2024-05-29','crm','crm-2024-05-29');


insert into [dbo].[daily_trades] (datestr, symbol,daily_stock, playbook, side, max_r, traded) 
values ('2024-05-29','aal','aal-2024-05-29', 'premkt 2nd breakout', 'short',7, 0);

insert into [dbo].[daily_trades] (datestr, symbol,daily_stock, playbook, side, max_r, traded) 
values ('2024-05-29','chwy','chwy-2024-05-29', 'first new high', 'long',3,0);
insert into [dbo].[daily_trades] (datestr, symbol,daily_stock, playbook, side, max_r, traded) 
values ('2024-05-29','chwy','chwy-2024-05-29', 'profit taking exhaust < 60', 'short',-1,1);

insert into [dbo].[daily_trades] (datestr, symbol,daily_stock, playbook, side, max_r, traded) 
values ('2024-05-30','path','path-2024-05-30', 'first pullback', 'short',1.9,0);