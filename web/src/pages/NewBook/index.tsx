import { useState } from 'react'
import {
  Container,
  PageTitle,
  Label,
  TextInput,
  TextArea,
  FloatMenu,
  MenuItem,
  MenuIcon,
  Form,
  Button
} from './styles'

import homeIconDisabled from '../../assets/home-disabled.svg'
import homeIcon from '../../assets/home.svg'
import profileIcon from '../../assets/user-disabled.svg'
import plusIconDisabled from '../../assets/plus-disabled.svg'
import plusIcon from '../../assets/plus.svg'
import api from '../../services/api'
import Book from '../../types/Book'
import { useHistory, useLocation } from 'react-router-dom'
import { toast } from 'react-toastify'


const NewBook: React.FC = () => {

  const [name, setName] = useState<string>("");
  const [author, setAuthor] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const location = useLocation();
  const history = useHistory();

  const handleCreateBook = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if(!name || !author || !description)
      toast.error("All fields are required!")
    try{
      const {data} = await api.post<Book>("books", {name, author, description})
      toast.success(`${data.name} added!`)
      history.push("/")
    }catch(err){
      toast.error("An error ocurred when app try to create a book")
    }
  }

  const handleNameChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value)
  }

  const handleAuthorChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    setAuthor(event.target.value)
  }

  const handleDescriptionChange = async (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(event.target.value)
  }



  return (
    <Container>
      <PageTitle>Add a new book</PageTitle>
      <Form onSubmit={handleCreateBook}>
        <Label>Name</Label>
        <TextInput onChange={handleNameChange} value={name} required/>
        <Label>Author</Label>
        <TextInput onChange={handleAuthorChange} value={author} required/>
        <Label>Description</Label>
        <TextArea rows={10} onChange={handleDescriptionChange} value={description} required/>
        <Button type="submit">Add new book</Button>
      </Form>
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

export default NewBook