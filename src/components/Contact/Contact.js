import { useState } from "react";

import * as S from "./ContactStyles";

const Contact = () => {
  const [form, setForm] = useState({
    text: "",
    email: "",
  });
  const [data, setData] = useState({
    text: "",
    email: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    setForm({
      text: "",
      email: "",
    });
  };

  const updateValue = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const passData = () => {
    setData({ ...data, text: form.text, email: form.email });
  };

  return (
    <S.ContactPage>
      <h4>Insert your contact details below</h4>
      <S.ContactInputContainer onSubmit={onSubmit}>
        <S.InputBox>
          <S.Input
            value={form.text}
            name="text"
            maxLength="30"
            onChange={updateValue}
          />
          <S.InputLabel for="text-input">Text</S.InputLabel>
        </S.InputBox>
        <S.InputBox>
          <S.Input
            value={form.email}
            name="email"
            type="email"
            maxLength="40"
            onChange={updateValue}
          />
          <S.InputLabel for="email-input">E-mail</S.InputLabel>
        </S.InputBox>

        <S.DisplayButton
          onClick={passData}
          className="display-button"
          // disabled={form.text.length === 0 || form.email.length === 0}
          disabled={!form.email || !form.text || !form.email.includes("@")}
        >
          Display
        </S.DisplayButton>
      </S.ContactInputContainer>
      <div>
        <div>Text: {data.text}</div>
        <div>Email: {data.email}</div>
      </div>
    </S.ContactPage>
  );
};

export default Contact;
