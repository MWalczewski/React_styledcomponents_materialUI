import { useState } from "react";

import * as S from "./AboutMeStyles";

const AboutMe = ({ aboutMeData, picture, logo, setLogo }) => {
  const { firstName, lastName, description } = aboutMeData;
  const [inputText, setInputText] = useState("");

  const textToAddToLogo = (e) => {
    setInputText(e.target.value);
  };

  const addTextToLogo = () => {
    setLogo(`${logo}${inputText}`);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setInputText("");
  };

  return (
    <S.AboutMePage>
      <S.AboutMeContainer>
        <S.AboutMeImage src={picture} alt="randomPicture" />
        <h4>
          Nazywam się {firstName} {lastName}.
        </h4>
        <p>{description}</p>
      </S.AboutMeContainer>
      <S.UpdateLogo>
        <h4>Update Logo with text from input below</h4>
        <S.UpdateLogoForm onSubmit={onSubmit}>
          <S.UpdateLogoInput
            value={inputText}
            maxLength="20"
            onChange={textToAddToLogo}
            placeholder="write text to add to input"
          ></S.UpdateLogoInput>
          <S.UpdateLogoButton
            className="update-logo-button"
            onClick={addTextToLogo}
          >
            Update!
          </S.UpdateLogoButton>
        </S.UpdateLogoForm>
      </S.UpdateLogo>
    </S.AboutMePage>
  );
};

export default AboutMe;
