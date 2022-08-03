import styled from "styled-components";

const ToDoPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const InputContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
`;

const Input = styled.input`
  box-sizing: border-box;
  width: 200px;
  height: 30px;
  background-color: turquoise;
  border: 2px solid orange;
`;

const Button = styled.button`
  width: 200px;
  height: 30px;
  background-color: turquoise;
  border: 2px solid orange;
  cursor: pointer;
`;

export { ToDoPage, InputContainer, Input, Button };
