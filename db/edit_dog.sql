update dogs set name = ${name}, price = ${price}, image ${image} where id = $1
returning *;