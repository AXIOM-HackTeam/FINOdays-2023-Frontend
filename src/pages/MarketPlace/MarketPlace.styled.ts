import styled from "styled-components";

const MarketPlaceStyled = styled.div`
  min-height: calc(100vh - 4em);
`

const Filters = styled.div`
  position: relative;
  min-height: 3em;
  padding: 1em;
  left: 0;
  width: 100%;
  background-color: #01001e;
  color: #c1c5fc;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 2em;
  border-bottom: 2px solid #c1c5fc;

  @media (max-width: 1150px) {
    .select {
      width: 400px;
    }
  }

  @media (max-width: 890px) {
    .select {
      width: 300px;
    }
  }

`

const Products = styled.div`
  margin: 4em 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1em;

  .dfa {
    width: 95%;
    margin: 0 auto;
    max-width: 1200px;
  }
`

const Up = styled.div`
  width: 80%;
  height: 50px;
  background-color: #01001e;
  border: 1px solid black;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    cursor: pointer;
    border-color: white;
  }
`

const Border = styled.div`
  opacity: 0;
  width: 100%;
  height: 50px;
`

export {MarketPlaceStyled, Filters, Products, Up, Border}