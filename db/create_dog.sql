insert into dogs (name, price, image)
values
(${name}, ${price}, ${image})
returning *;