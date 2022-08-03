import { useState } from "react";

import * as S from "./ToDoStyles";

let toDoArray = [];

const ToDo = ({ logo, setLogo }) => {
  const [inputText, setInputText] = useState("");
  const [list, setList] = useState(toDoArray);

  const newToDoItem = (event) => {
    setInputText(event.target.value);
  };

  const addInputToToDo = () => {
    setList((list) => [...list, inputText]);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setInputText("");
  };

  const changeLogo = () => {
    if (logo === "LOGO") {
      setLogo("New Logo");
    } else {
      setLogo("LOGO");
    }
  };

  return (
    <S.ToDoPage>
      <h4>To Do List</h4>
      <S.InputContainer onSubmit={onSubmit}>
        <S.Input
          value={inputText}
          maxLength="20"
          onChange={newToDoItem}
        ></S.Input>
        <S.Button onClick={addInputToToDo} disabled={!inputText}>
          Add to the To Do List
        </S.Button>
      </S.InputContainer>
      <ul>
        {list.map((word, index) => (
          <li key={index} name={word}>
            {word}
          </li>
        ))}
      </ul>

      <S.Button onClick={changeLogo}>Change Logo</S.Button>
    </S.ToDoPage>
  );
};

export default ToDo;
