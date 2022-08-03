import AboutMe from "../AboutMe/AboutMe";
import aboutMeDetails from "../AboutMe/AboutMeData";
import image from "../AboutMe/image.png";
import ToDo from "../ToDo/ToDo";
import Contact from "../Contact/Contact";
import CharList from "../CharactersList/CharactersList";
import Home from "../Home/Home";
import * as S from "./PageStyles";
import Dialog from "../Dialog/Dialog";
import Components from "../Components/Components";

const Page = ({ clickedButton, logo, setLogo }) => {
  switch (clickedButton) {
    case "O mnie":
      return (
        <S.Page>
          <AboutMe
            aboutMeData={aboutMeDetails}
            picture={image}
            logo={logo}
            setLogo={setLogo}
          />
        </S.Page>
      );
    case "Lista postaci":
      return (
        <S.Page>
          <CharList />
        </S.Page>
      );
    case "To Do":
      return (
        <S.Page>
          <ToDo logo={logo} setLogo={setLogo} />
        </S.Page>
      );
    case "Contact":
      return (
        <S.Page>
          <Contact />
        </S.Page>
      );
    case "Dialog":
      return (
        <S.Page>
          <Dialog />
        </S.Page>
      );
    case "Components":
      return (
        <S.Page>
          <Components />
        </S.Page>
      );
    default:
      return (
        <S.Page>
          <Home />
        </S.Page>
      );
  }
};

export default Page;
