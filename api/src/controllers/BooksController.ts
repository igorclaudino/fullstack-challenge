import { Request, Response } from 'express'
import { client } from '../prisma/client'

class BooksController {
  async store (request: Request, response: Response) {
    const { name, author, description } = request.body

    if (!name || !author || !description) {
      return response.status(400).json({
        status: 'error',
        message: 'Name, author and description are required'
      })
    }

    const book = await client.book.create({
      data: {
        name,
        author,
        description
      }
    })

    return response.status(201).json(book)
  }

  async index (request: Request, response: Response) {
    const { search } = request.query
    let books = []
    if (!search) {
      books = await client.book.findMany()
    } else {
      books = await client.book.findMany({
        where: {
          name: {
            contains: search.toString()
          }
        }
      })
    }
    return response.json(books)
  }
}

export { BooksController }
