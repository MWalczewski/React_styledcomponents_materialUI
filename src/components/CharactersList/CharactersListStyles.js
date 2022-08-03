import styled from "styled-components";

const CharPage = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  gap: 15px;
  box-sizing: border-box;
  padding: 15px;
`;

const CharCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  padding: 15px;
  border: 2px solid orange;
  border-radius: 5px;
`;

const CharName = styled.div`
  font-weight: 700;
`;

export { CharPage, CharCard, CharName };
