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


const Home: React.FC = () => {

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
      <InputContainer>
        <CircleIcon src={searchIcon} alt="Search Icon" />
        <TextInput placeholder="Search book" onChange={handleSearch} />
      </InputContainer>
      <WelcomeTitle>Hi, <strong>Mehmed Al Faith</strong> 👋</WelcomeTitle>
      <BooksContainer>
        {books.map((book) => (
          <BookCard onClick={() => history.push(`/detail/${book.id}`)} key={book.id}>
            <BookImg src={bookImg} alt="Book image" />
            <BookName>{book.name}</BookName>
            <BookAuthor>by {book.author}</BookAuthor>
          </BookCard>))}
      </BooksContainer>
      <FloatMenu>
        <MenuItem onClick={() => history.push(`/`)}>
          <MenuIcon src={location.pathname === '/' ? homeIcon : homeIconDisabled} alt='Home Icon' />
          <span>Home</span>
        </MenuItem>
        <MenuItem onClick={() => history.push(`/new-book`)}>
          <MenuIcon src={location.pathname === '/new-book' ? plusIcon : plusIconDisabled} alt='Add Book Icon' />
          <span>Add Book</span>
        </MenuItem>
        <MenuItem>
          <MenuIcon src={profileIcon} alt='Profile Icon' />
          <span>Profile</span>
        </MenuItem>
      </FloatMenu>
    </Container>
  )
}

export default Home