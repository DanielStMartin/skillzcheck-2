drop table if exists products;

create table products (
  id serial primary key
  , name varchar(25)
  , price integer
  , img text
);

insert into products ( name, price, img )
values 
( 'PS4', 400, 'https://images.unsplash.com/photo-1517439270744-8d9287c2f8f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1292&q=80') 
, ( 'Half a Hotdog', 100, 'https://images.unsplash.com/photo-1542729716-6d1890d980ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80' )
, ( 'Beats Headphones', 150, 'https://images.unsplash.com/photo-1543413305-ea22e5cc007b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80' );

select * from products;
