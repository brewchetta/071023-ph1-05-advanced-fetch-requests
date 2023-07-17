# Advanced Fetch Requests

## Learning Goals

- POST method
- PATCH method
- DELETE method
- RESTful routing
- Headers in the fetch request
- Body in the fetch request

## Starting the Server

```bash
json-server --watch db.json
```

## RESTful Routes

Assuming you have a database and endpoint named `dogs`

1. Index - `GET /dogs`
2. Show - `GET /dogs/:id` (for example `/dogs/2`)
3. CREATE - `POST /dogs`
4. UPDATE - `PATCH /dogs/:id` (for example `/dogs/2`)
5. DESTROY - `DELETE /dogs/:id` (for example `/dogs/2`)

You may come across additional routes that we won't be using in this course (these are older routes that aren't important for the APIs we're building).
