import styled from "styled-components";
import bgImg from '../../assets/bg-detail.svg'
export const Container = styled.div`
  display: flex;
  flex: 1;
  height: 100vh;
  width: 100%;
  flex-direction: column;
  background-image: url(${bgImg}) ;
  background-repeat: no-repeat;
  background-size:100%;
  `

export const BackButton = styled.img`
  width: 24px;
  margin-left: 33px;
  margin-top: 55px;
`;

export const BookImage = styled.img`
  width: 151px;
  height: 234px;
  border-radius: 5px;
`

export const BookHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 15px;
`;

export const BookContent = styled.div`
  display: flex;
  /* align-items: center; */
  justify-content: center;
  flex-direction: column;
  margin-top: 15px;
  margin: 31px 20px;
`;


export const BooksContainer = styled.section`
  margin-top: 36px;
  display: flex;
  flex-wrap: wrap;
  /* align-items: center; */
  justify-content: space-between;
`

export const BookName = styled.h1`
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 29px;
  letter-spacing: 1.5px;

  color: #36383A; 
`
export const BookAuthor = styled.h2`
  font-size: 16px;
  line-height: 19px;
/* identical to box height */

  letter-spacing: 0.670588px;

  color: #FF6978;
  margin-top: 7px;
`

export const BookDescription = styled.p`
  font-size: 14px;
  line-height: 25px;

  letter-spacing: 0.2px;

  color: rgba(49, 49, 49, 0.6);
  margin-top: 10px;
`
export const FloatMenuContainer = styled.section`
  position:fixed;
  bottom:0;
  left:0px;
  width: 100%;
`;
export const FloatMenu = styled.section`
  background-color: #fff;
  display: flex;
  height: 59px;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 50px;
  margin-left: 20px;
  margin-right: 20px;
  background: #FFFFFF;
  box-shadow: 3px 3px 23px rgba(107, 103, 70, 0.125901);
  border-radius: 2px;
  white-space: nowrap;

`
export const MenuItem = styled.div`
  cursor: pointer;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 17px;

  letter-spacing: 1px;

  color: #3F4043;
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  span {
    margin-left: 10px;
  }
`
export const MenuIcon = styled.img`
  height: 16px;
  width: 16px;
`


