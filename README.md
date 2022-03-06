# Cluster API

This is a combination of *products* and *task* endpoints allowing the user to interact with the API by performing
- CRUD operations
- Filtering and Sorting
- Search and Paginate results

#  How to set up locally

1. Clone the project.
2. Change the file in config/example.db.js to config/db.js. [DB set-up: MongoDB].
3. Change the example.env file to .env .
4. Edit the mongodb connection accordingly.
5. Run 
```sh
$ npm install 
```
6. Run 
```sh
$ node seeders/product.js
```
6. Run 
```sh
$ node seeders/task.js
```

# How to interact with APIs Endpoints locally using Postman
### Task
`Prefix: http://localhost:3000/api/v1` against endpoint. Example: `http://localhost:3000/api/v1/tasks`

* **GET** `/api/v1/tasks` Get all tasks
* **GET** `/api/v1/tasks/:id` Get a single task
* **POST** `/api/v1/tasks` Create a new task
* **PUT** `/api/v1/tasks` Update a task  
* **DELETE** `/api/v1/tasks` Delete a task by id


### Products
`Prefix: http://localhost:3000/api/v1` against endpoint. Example: `http://localhost:3000/api/v1/products`

* **GET** `/api/v1/products` Get all products
* **POST** `/api/v1/products` Create a new product
* **GET** `/api/v1/products` Get products by search

# Locate *Cluster manager.postman_colltectio.json* for reference