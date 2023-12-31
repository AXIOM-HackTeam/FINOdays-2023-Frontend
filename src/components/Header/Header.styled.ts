import styled, {css} from "styled-components";

const HeaderStyled = styled.div`
  top: 0;
  left: 0;
  z-index: 50;
  height: 4em;
  position: fixed;
  width: 100%;
  background-color: #c1c5fc;
  border-bottom: 1px solid #01001e;
  color: #01001e;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  @media (max-width: 767px) {
    justify-content: end;
    padding-right: 1em;
  }
`

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1em;
  position: relative;
  height: 100%;

  .link {
    padding: 1em;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #01001e;
    user-select: none;

    &:active {
      color: white;
    }

    @media (hover: hover) {
      &:hover {
        background-color: white;
        cursor: pointer;
      }
    }

    @media (max-width: 767px) {
      display: none;
    }
  }

  svg.menu-icon {
    color: #01001e;
    height: 100%;
    width: auto;
    z-index: 15;
    border-radius: 1em;
    
    @media(hover: hover) {
      &:hover {
        cursor: pointer;
        color: white;
      }
    }
    
    &:active {
      box-shadow: white 0 0 50px;
    }
    
    display: none;

    @media (max-width: 767px) {
      display: initial;
    }
  }
`

const DropDown = styled.div`
  position: absolute;
  //height: calc(100vh - 4em);
  top: 4em;
  left: 0;
  height: 0;
  width: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  display: none;
  background-color: #c1c5fc;

  .link {
    padding: 1em;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    
    &:active {
      color: white;
      background-color: black;
    }

    &:focus {
      color: white;
      background-color: black;
    }

    @media (hover: hover) {
      &:hover {
        cursor: pointer;
        background-color: white;
      }
    }
  }
`

export {HeaderStyled, Container, DropDown}