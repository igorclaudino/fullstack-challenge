import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 50px 20px;
`
export const PageTitle = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
  color: #FF6978;
  margin-top: 53px;
`;

export const Form = styled.form`
  margin-top: 50px;
`;

export const Label = styled.label`
  font-size: 16px;
  line-height: 18px;

  text-align: center;

  color: #000000;

  font-weight: bold;

`;
export const TextInput = styled.input`
  height: 48px;
  width: 100%;
  background: #FDFCFC;
  box-shadow: 5px 5px 80px rgba(212, 173, 134, 0.4926);
  border-radius: 10px;
  margin-bottom: 38px;
  margin-top: 10px;
  padding: 10px 10px;
  border: none;
  ::placeholder{
    color: #54565A;

  }
`

export const TextArea = styled.textarea`
  width: 100%;
  background: #FDFCFC;
  box-shadow: 5px 5px 80px rgba(212, 173, 134, 0.4926);
  border-radius: 10px;
  margin-bottom: 38px;
  margin-top: 10px;
  padding: 10px 10px;
  border: none;
  ::placeholder{
    color: #54565A;
;
  }
`

export const Button = styled.button`
  background: #FF6978;
  box-shadow: 5px 5px 80px rgba(212, 173, 134, 0.4926);
  border-radius: 10px;
  border: none;
  width: 100%;
  height: 48px;
  margin-bottom: 60px;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
  color: #FFFFFF;
`;

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
  margin-bottom: 4px;
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


