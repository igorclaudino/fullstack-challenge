import { useState, useEffect, useCallback } from 'react'
import {
  Container,
  InputContainer,
  CircleIcon,
  TextInput,
  WelcomeTitle,
  BooksContainer,
  BookCard,
  BookImg,
  BookName,
  BookAuthor,
  FloatMenu,
  MenuItem,
  MenuIcon
} from './styles'

import searchIcon from '../../assets/search.svg'
import homeIconDisabled from '../../assets/home-disabled.svg'
import homeIcon from '../../assets/home.svg'
import profileIcon from '../../assets/user-disabled.svg'
import plusIconDisabled from '../../assets/plus-disabled.svg'
import plusIcon from '../../assets/plus.svg'
import bookImg from '../../assets/book-img.png'
import api from '../../services/api'
import Book from '../../types/Book'
import { useHistory, useLocation } from 'react-router-dom'


const NewBook: React.FC = () => {

  const [books, setBooks] = useState<Book[]>([]);
  const location = useLocation();
  const history = useHistory();

  const loadAllBooks = useCallback(
    async () => {
      const { data } = await api.get<Book[]>('books')
      setBooks(data)
    },
    [],
  )

  const handleSearch = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const { data } = await api.get<Book[]>(`books?search=${event.target.value}`)
    setBooks(data)
  }

  useEffect(() => {
    loadAllBooks()
  }, [loadAllBooks])


  return (
    <Container>
      
    </Container>
  )
}

export default NewBook