import { useState, useEffect } from "react";
import * as S from "./CharactersListStyles";

const BASE_URL = "https://rickandmortyapi.com/api/character?page=1";

const CharList = () => {
  const [chars, setChars] = useState([]);

  useEffect(() => {
    fetch(BASE_URL)
      .then((resp) => resp.json())
      .then((json) => setChars(json.results))
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  return (
    <S.CharPage>
      {chars.map((char) => {
        let { id, name, status, species, image } = char;
        return (
          <S.CharCard key={id}>
            <img src={image} alt="Character's avatar" />
            <S.CharName>Name: {name} </S.CharName>
            <div>Status: {status}</div>
            <div>Species: {species}</div>
          </S.CharCard>
        );
      })}
    </S.CharPage>
  );
};

export default CharList;
