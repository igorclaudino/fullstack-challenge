import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 50px 20px;
`
export const InputContainer = styled.span`
  display: flex;
  align-items: center;
  height: 48px;
  width: 100%;
  background-color: #FDFCFC;
  box-shadow: 5px 5px 80px rgba(212, 173, 134, 0.122623);
  border-radius: 10px;
`
export const CircleIcon = styled.img`
  margin-left: 15px;
`
export const TextInput = styled.input`
  border: none;
  background-color: transparent;
  padding: 10px 10px;
  width: 100%;
  ::placeholder{
    color: #54565A;
;
  }
`
export const WelcomeTitle = styled.h1`
  margin-top: 30px;
  strong {
    color: #FF6978;
  }
`

export const BooksContainer = styled.section`
  margin-top: 36px;
  display: flex;
  flex-wrap: wrap;
  /* align-items: center; */
  justify-content: space-between;
`
export const BookCard = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
`
export const BookImg = styled.img`
  width: 105px;
  height: 153px;
  filter: drop-shadow(0px 2px 4px rgba(229, 229, 229, 0.5));
  border-radius: 5px;
`
export const BookName = styled.h3`
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 14px;
  color: rgba(49, 49, 49, 0.8);
  margin-top: 9px;
  margin-bottom: 5px;
  width: 100px;
`
export const BookAuthor = styled.h4`
  font-style: normal;
  font-weight: 900;
  font-size: 10px;
  line-height: 12px;
  margin-bottom: 12px;
  color: rgba(49, 49, 49, 0.8);
  width: 100px;
`

export const FloatMenu = styled.section`
  background-color: #fff;
  width: 100%;
  display: flex;
  height: 59px;
  align-items: center;
  justify-content: space-around;
  position:fixed;
  bottom:0;
  left:0px;
`
export const MenuItem = styled.div`
  cursor: pointer;
  font-style: normal;
  font-weight: normal;
  font-size: 10px;
  color: #313131;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  
  span {
    margin-top: 10px;
  }
`
export const MenuIcon = styled.img`
  height: 16px;
  width: 16px;
`


