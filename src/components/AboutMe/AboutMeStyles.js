import styled from "styled-components";

const AboutMePage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const AboutMeContainer = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30%;
`;

const AboutMeImage = styled.img`
  width: 50%;
`;

const UpdateLogo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const UpdateLogoForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
`;

const UpdateLogoInput = styled.input`
  box-sizing: border-box;
  width: 200px;
  height: 30px;
  border: 2px solid orange;
`;

const UpdateLogoButton = styled.button`
  width: 200px;
  height: 30px;
  background-color: turquoise;
  border: 2px solid orange;
  cursor: pointer;
`;

export {
  AboutMePage,
  AboutMeContainer,
  AboutMeImage,
  UpdateLogo,
  UpdateLogoForm,
  UpdateLogoInput,
  UpdateLogoButton,
};
