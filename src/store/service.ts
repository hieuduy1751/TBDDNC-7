import { Book } from "./StoreReducer"

const apiPath = 'https://635155423e9fa1244e5bf555.mockapi.io'

const getBooks = async (): Promise<Book[]> => {
  const res = await fetch(`${apiPath}/books`)
  return await res.json()
}

const createBook = async (book: Book) => {
  const res = await fetch(`${apiPath}/books`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(book)
  })
  return await res.json()
}

const updateBook = async (book: Book) => {
  const res = await fetch(`${apiPath}/books/${book.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(book)
  })
  return await res.json()
}

const deleteBook = async (bookId: number) => {
  const res = await fetch(`${apiPath}/books/${bookId}`, {
    method: 'DELETE'
  })
  return await res.json()
}

export { getBooks, createBook, updateBook, deleteBook }

