DROP TABLE products_table;

DROP TABLE size_table;

DROP TABLE colour_table;
 
DROP TABLE brands_table;



create table brands_table(
  id serial not null primary key,
  brand text not null
);

create table size_table(
  id serial not null primary key,
  size int not null
);

create table colour_table(
  id serial not null primary key,
  colour text not null
);

create table products_table(
  id serial not null primary key,
  -- productName text not null,
  price decimal(10,2),
  in_stock int not null,
 brand_id int not null,
colour_id int not null,
 size_id int not null,

 foreign key (brand_id) references brands_table (id),
 foreign key (colour_id) references colour_table (id),
foreign key (size_id) references size_table (id)
  
  
);

Insert into
  brands_table(brand)
values
  ('Nike');

Insert into
  brands_table(brand)
values
  ('Puma');

  Insert into
  brands_table(brand)
values
  ('Adidas');

Insert into
  colour_table(colour)
values
  ('white');

Insert into
  colour_table(colour)
values
  ('blue');

Insert into
  colour_table(colour)
values
  ('red');

Insert into
  colour_table(colour)
values
  ('black');

  Insert into
  size_table(size)
values
  ('6');

Insert into
  size_table(size)
values
  ('7');

 Insert into
  size_table(size)
values
  ('8');

Insert into
  size_table(size)
values
  ('9');



Insert into
  products_table(price,in_stock, brand_id,colour_id, size_id)
values
  ('450', '5' ,'1' ,'1' , '1');


Insert into
  products_table(price, in_stock, brand_id, colour_id, size_id )
values
  ('450', '5', '1', '1', '2');

Insert into
  products_table(price, in_stock, brand_id, colour_id, size_id )
values
  ('450', '5', '1', '1', '3');


Insert into
  products_table(price, in_stock, brand_id, colour_id, size_id )
values
  ('450', '5', '1', '1', '4');


Insert into
  products_table(price, in_stock, brand_id, colour_id, size_id )
values
  ('450', '5', '1', '2', '1');

Insert into
  products_table(price, in_stock, brand_id, colour_id, size_id )
values
  ('450', '5', '1', '2', '2');


Insert into
  products_table(price, in_stock, brand_id, colour_id, size_id )
values
  ('450', '5', '1', '2', '3');


Insert into
  products_table(price, in_stock, brand_id, colour_id, size_id )
values
  ('450', '5', '1', '2', '4');


Insert into
  products_table(price, in_stock, brand_id, colour_id, size_id )
values
  ('450', '5', '1', '3', '1');

Insert into
  products_table(price, in_stock, brand_id, colour_id, size_id )
values
  ('450', '5', '1', '3', '2');


Insert into
  products_table(price, in_stock, brand_id, colour_id, size_id )
values
  ('450', '5', '1', '3', '3');


Insert into
  products_table(price, in_stock, brand_id, colour_id, size_id )
values
  ('450', '5', '1', '3', '4');


 Insert into
  products_table(price, in_stock, brand_id, colour_id, size_id )
values
  ('450', '5', '1', '4', '1');

Insert into
  products_table(price, in_stock, brand_id, colour_id, size_id )
values
  ('450', '5', '1', '4', '2');


Insert into
  products_table(price, in_stock, brand_id, colour_id, size_id )
values
  ('450', '5', '1', '4', '3');


Insert into
  products_table(price, in_stock, brand_id, colour_id, size_id )
values
  ('450', '5', '1', '4', '4'); 






Insert into
  products_table(price, in_stock, brand_id, colour_id, size_id)
values
  ('675', '5' ,'2' ,'1' , '1');


Insert into
  products_table(price, in_stock, brand_id, colour_id, size_id )
values
  ('675', '5', '2', '1', '2');

Insert into
  products_table(price, in_stock, brand_id, colour_id, size_id )
values
  ('675', '5', '2', '1', '3');


Insert into
  products_table(price, in_stock, brand_id, colour_id, size_id )
values
  ('675', '5', '2', '1', '4');


Insert into
  products_table(price, in_stock, brand_id, colour_id, size_id )
values
  ('675', '5', '2', '2', '1');

Insert into
  products_table(price, in_stock, brand_id, colour_id, size_id )
values
  ('675', '5', '2', '2', '2');


Insert into
  products_table(price, in_stock, brand_id, colour_id, size_id )
values
  ('675', '5', '2', '2', '3');


Insert into
  products_table(price, in_stock, brand_id, colour_id, size_id )
values
  ('675', '5', '2', '2', '4');


Insert into
  products_table(price, in_stock, brand_id, colour_id, size_id )
values
  ('675', '5', '2', '3', '1');

Insert into
  products_table(price, in_stock, brand_id, colour_id, size_id )
values
  ('675', '5', '2', '3', '2');


Insert into
  products_table(price, in_stock, brand_id, colour_id, size_id )
values
  ('675', '5', '2', '3', '3');


Insert into
  products_table(price, in_stock, brand_id, colour_id, size_id )
values
  ('675', '5', '2', '3', '4');


 Insert into
  products_table(price, in_stock, brand_id, colour_id, size_id )
values
  ('675', '5', '2', '4', '1');

Insert into
  products_table(price, in_stock, brand_id, colour_id, size_id )
values
  ('675', '5', '2', '4', '2');


Insert into
  products_table(price, in_stock, brand_id, colour_id, size_id )
values
  ('675', '5', '2', '4', '3');


Insert into
  products_table(price, in_stock, brand_id, colour_id, size_id )
values
  ('675', '5', '2', '4', '4'); 




Insert into
  products_table(price, in_stock, brand_id, colour_id, size_id)
values
  ('300', '5' ,'3' ,'1' , '1');


Insert into
  products_table(price, in_stock, brand_id, colour_id, size_id )
values
  ('300', '5', '3', '1', '2');

Insert into
  products_table(price, in_stock, brand_id, colour_id, size_id )
values
  ('300', '5', '3', '1', '3');


Insert into
  products_table(price, in_stock, brand_id, colour_id, size_id )
values
  ('300', '5', '3', '1', '4');


Insert into
  products_table(price, in_stock, brand_id, colour_id, size_id )
values
  ('300', '5', '3', '2', '1');

Insert into
  products_table(price, in_stock, brand_id, colour_id, size_id )
values
  ('300', '5', '3', '2', '2');


Insert into
  products_table(price, in_stock, brand_id, colour_id, size_id )
values
  ('300', '5', '3', '2', '3');


Insert into
  products_table(price, in_stock, brand_id, colour_id, size_id )
values
  ('300', '5', '3', '2', '4');


Insert into
  products_table(price, in_stock, brand_id, colour_id, size_id )
values
  ('300', '5', '3', '3', '1');

Insert into
  products_table(price, in_stock, brand_id, colour_id, size_id )
values
  ('300', '5', '3', '3', '2');


Insert into
  products_table(price, in_stock, brand_id, colour_id, size_id )
values
  ('300', '5', '3', '3', '3');


Insert into
  products_table(price, in_stock, brand_id, colour_id, size_id )
values
  ('300', '5', '3', '3', '4');



 Insert into
  products_table(price, in_stock, brand_id, colour_id, size_id )
values
  ('300', '5', '3', '4', '1');

Insert into
  products_table(price, in_stock, brand_id, colour_id, size_id )
values
  ('300', '5', '3', '4', '2');


Insert into
  products_table(price, in_stock, brand_id, colour_id, size_id )
values
  ('300', '5', '3', '4', '3');


Insert into
  products_table(price, in_stock, brand_id, colour_id, size_id )
values
  ('300', '5', '3', '4', '4'); 




-- select * from products_table
--     join brands_table   
--         on products_table.brand_id = brands_table.id join colour_table on products_table.colour_id = colour_table.id  join size_table on products_table.size_id  = size_table.id;



-- select  brand, size,colour, price, in_stock from products_table join brands_table on products_table.brand_id = brands_table.id join colour_table on products_table.colour_id = colour_table.id  join size_table on products_table.size_id  = size_table.id where (size, brand) = (6, 'Nike');
