# Simple Bookstore REST API (Express.js)

A tiny REST API for managing a collection of books using **Express.js** with an **in-memory array**.

## Quickstart

```bash
# 1) Initialize a project and install express
npm init -y
npm i express

# 2) Save the server file
#    (use the "server.js" from this folder)

# 3) Run the API
node server.js
# -> Bookstore API listening on http://localhost:3000
```

## Endpoints

- `GET /books` — Fetch all books  
- `GET /books/:id` — Fetch a single book by ID  
- `POST /books` — Add a new book (requires `title`, `author`, `year`, `available`)  
- `PUT /books/:id` — Replace **all** fields of an existing book  
- `PATCH /books/:id` — Update **specific** fields of a book  
- `DELETE /books/:id` — Remove a book  

### Example Requests (cURL)

```bash
# Get all books
curl http://localhost:3000/books

# Get one book
curl http://localhost:3000/books/3

# Create a book
curl -X POST http://localhost:3000/books \
  -H "Content-Type: application/json" \
  -d '{"title":"Zero to One","author":"Peter Thiel","year":2014,"available":true}'

# Replace a book
curl -X PUT http://localhost:3000/books/2 \
  -H "Content-Type: application/json" \
  -d '{"title":"Clean Code (Updated)","author":"Robert C. Martin","year":2008,"available":false}'

# Partially update a book
curl -X PATCH http://localhost:3000/books/1 \
  -H "Content-Type: application/json" \
  -d '{"available":false}'

# Delete a book
curl -X DELETE http://localhost:3000/books/12 -i
```

---

## ✅ Initial Sample Data (In-Memory)

Below is the **list of book elements** preloaded in the API. You can modify this list in `server.js`.

### As a table

| id | title                      | author                                                    | year | available |
|---:|----------------------------|-----------------------------------------------------------|-----:|:---------:|
| 1  | The Pragmatic Programmer   | Andrew Hunt, David Thomas                                 | 1999 |   true    |
| 2  | Clean Code                 | Robert C. Martin                                          | 2008 |   true    |
| 3  | Introduction to Algorithms | Thomas H. Cormen, Charles E. Leiserson, Ronald L. Rivest, Clifford Stein | 2009 |  false    |
| 4  | The Hobbit                 | J. R. R. Tolkien                                          | 1937 |   true    |
| 5  | 1984                       | George Orwell                                             | 1949 |  false    |
| 6  | The Alchemist              | Paulo Coelho                                              | 1988 |   true    |
| 7  | Sapiens                    | Yuval Noah Harari                                         | 2011 |   true    |
| 8  | Atomic Habits              | James Clear                                               | 2018 |  false    |
| 9  | Deep Work                  | Cal Newport                                               | 2016 |   true    |
| 10 | Dune                       | Frank Herbert                                             | 1965 |   true    |
| 11 | The Midnight Library       | Matt Haig                                                 | 2020 |   true    |
| 12 | The Kite Runner            | Khaled Hosseini                                           | 2003 |  false    |

### As JSON

```json
[
  { "id": 1,  "title": "The Pragmatic Programmer", "author": "Andrew Hunt, David Thomas", "year": 1999, "available": true },
  { "id": 2,  "title": "Clean Code", "author": "Robert C. Martin", "year": 2008, "available": true },
  { "id": 3,  "title": "Introduction to Algorithms", "author": "Thomas H. Cormen, Charles E. Leiserson, Ronald L. Rivest, Clifford Stein", "year": 2009, "available": false },
  { "id": 4,  "title": "The Hobbit", "author": "J. R. R. Tolkien", "year": 1937, "available": true },
  { "id": 5,  "title": "1984", "author": "George Orwell", "year": 1949, "available": false },
  { "id": 6,  "title": "The Alchemist", "author": "Paulo Coelho", "year": 1988, "available": true },
  { "id": 7,  "title": "Sapiens", "author": "Yuval Noah Harari", "year": 2011, "available": true },
  { "id": 8,  "title": "Atomic Habits", "author": "James Clear", "year": 2018, "available": false },
  { "id": 9,  "title": "Deep Work", "author": "Cal Newport", "year": 2016, "available": true },
  { "id": 10, "title": "Dune", "author": "Frank Herbert", "year": 1965, "available": true },
  { "id": 11, "title": "The Midnight Library", "author": "Matt Haig", "year": 2020, "available": true },
  { "id": 12, "title": "The Kite Runner", "author": "Khaled Hosseini", "year": 2003, "available": false }
]
```



## Testing with Postman

1. Start the server: `node server.js`  
2. Open Postman and create a new collection, **Bookstore API**.
3. Add requests for each endpoint above. For `POST`, `PUT`, and `PATCH`, use `raw` Body → `JSON`.
4. Send requests and inspect the responses.

Happy building! 🚀
