import styled from "styled-components";

const ContactPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContactInputContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
`;

const InputBox = styled.div`
  position: relative;
`;

const Input = styled.input`
  box-sizing: border-box;
  width: 200px;
  height: 30px;
  background-color: turquoise;
  border: 2px solid orange;
`;

const InputLabel = styled.label`
  position: absolute;
  left: 10px;
  top: -7px;
  background-color: turquoise;
  font-size: 10px;
  padding: 0 10px;
`;

const DisplayButton = styled.button`
  width: 200px;
  height: 30px;
  background-color: turquoise;
  border: 2px solid orange;
  cursor: pointer;
`;

export {
  ContactPage,
  ContactInputContainer,
  InputBox,
  Input,
  InputLabel,
  DisplayButton,
};
