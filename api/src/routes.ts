import { Router } from 'express'
import { BooksController } from './controllers/BooksController'

const routes = Router()
const booksController = new BooksController()

routes.get('/books', booksController.index)
routes.get('/books/:id', booksController.get)
routes.post('/books', booksController.store)

export { routes }
