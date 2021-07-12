import { useState, useEffect, useCallback } from 'react'
import {
  Container,
  BookContent,
  BackButton,
  BookImage,
  BookName,
  BookHeader,
  BookAuthor,
  BookDescription,
  FloatMenu,
  MenuItem,
  MenuIcon,
  FloatMenuContainer
} from './styles'

import backIcon from '../../assets/back.svg'
import bookImg from '../../assets/book-img.png'
import bookOpen from '../../assets/book-open.svg'
import headphones from '../../assets/headphones.svg'
import share from '../../assets/share.svg'
import api from '../../services/api'
import Book from '../../types/Book'
import { useHistory, useParams } from 'react-router-dom'

interface IRequest {
  id: string
}

const BookDetail: React.FC = () => {

  const {id} = useParams<IRequest>();
  const [book, setBook] = useState<Book>()
  const history = useHistory()

  const loadBook = useCallback(async () => {
    const {data} = await api.get<Book>(`books/${id}`)
    setBook(data)
  }, [id])

  useEffect(() => {
    loadBook()
  }, [loadBook])


  return (
    <Container>
        <BackButton src={backIcon} alt='Back button' onClick={() => history.goBack()}/>
        <BookHeader>
          <BookImage src={bookImg}/>
          <BookContent>
          <BookName>{book?.name}</BookName>
          <BookAuthor>{book?.author}</BookAuthor>
          <BookDescription>
          {book?.description}
          </BookDescription>
        </BookContent>
        </BookHeader> 
        <FloatMenuContainer>
          <FloatMenu>
            <MenuItem>
              <MenuIcon src={bookOpen} alt='Home Icon' />
              <span>Read</span>
            </MenuItem>
            <MenuItem>
              <MenuIcon src={headphones} alt='Add Book Icon'/>
              <span>Listen</span>
            </MenuItem>
            <MenuItem>
            <MenuIcon src={share}  alt='Profile Icon'/>
            <span>Share</span>
            </MenuItem>
          </FloatMenu>
      </FloatMenuContainer>
    </Container>
  )
}

export default BookDetail