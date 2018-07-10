update dogs set name = ${name}, price = ${price}, image ${image} where id = ${id}
returning *;