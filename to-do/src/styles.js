import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(90deg, #383838 0%, #000000 81.25%);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Board = styled.div`
  background: white;
  padding: 30px;
  border-radius: 5px;
`;

export const Input = styled.input`
  border: 2px solid rgba(209, 211, 212, 0.4);
  border-radius: 5px;
  height: 40px;
  font-weight: 400;
  font-size: 15px;
  outline: none;
  padding-left: 10px;
`;

export const Button = styled.button`
  background: #8052ec;
  border-radius: 5px;
  height: 40px;
  border: none;
  color: #ffffff;
  margin-left: 20px;
  cursor: pointer;

  &:hover{
    opacity: 0.9;
  }
  &:active{
    opacity: 0.5;
  }
`;
export const List = styled.ul`

padding: 0;
margin-top: 30px;
  
`;

export const Item = styled.li`
  color: black;
  font-size: 25px;
  background: #E4E4E4;
  box-shadow: 1px 4px 10px rgba(0, 0 0, 0.2);
  border-radius: 5px;
  margin-bottom: 20px;
  list-style-type: none;
  font-size: 15px;
  color: #000000;
  font-weight: 400;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center; 

`;
