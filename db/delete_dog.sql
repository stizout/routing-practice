delete from dogs where id = $1
returning *;