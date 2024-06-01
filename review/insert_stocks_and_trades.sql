insert into [dbo].[daily_stocks] (datestr, symbol,id) 
values ('2024-05-29','aal','aal-2024-05-29');
insert into [dbo].[daily_stocks] (datestr, symbol,id) 
values ('2024-05-29','chwy','chwy-2024-05-29');
insert into [dbo].[daily_stocks] (datestr, symbol,id) 
values ('2024-05-29','crm','crm-2024-05-29');


insert into [dbo].[daily_trades] (datestr, symbol,daily_stock, playbook, side, max_r, traded) 
values ('2024-05-29','aal','aal-2024-05-29', 'premkt 2nd breakout', 'short',7, 0);

insert into [dbo].[daily_trades] (datestr, symbol,daily_stock, playbook, side, max_r, traded) 
values ('2024-05-29','crm','crm-2024-05-29', 'green to red > 60', 'short',3,0);