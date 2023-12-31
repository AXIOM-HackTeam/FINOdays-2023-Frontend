import styled, {css} from "styled-components";

interface IWrap {
    $width?: string,
    $textColor?: string,
}

interface IInput {
    $borderColor?: string,
    $borderFocusedColor?: string
}

const Wrap = styled.div<IWrap>`
  display: flex;
  flex-direction: column;
  align-items: start;
  position: relative;
  gap: .1em;
  color: #01001e;
  padding-bottom: 1em;

  ${props => props.$width && css`
    width: ${props.$width};
  `}

  ${props => props.$textColor && css`
    color: ${props.$textColor}
  `}
`

const Label = styled.p`
  font-size: 1.1em;
`

const InputStyled = styled.input<IInput>`
  padding: .7em;
  border-radius: .7em;
  border: 1px solid black;
  width: 100%;

  ${props => props.$borderColor && css`
    border-color: ${props.$borderColor};
  `}
  &:focus {
    outline: none;
    border-color: #c1c5fc;

    ${props => props.$borderFocusedColor && css`
      border-color: ${props.$borderFocusedColor};
    `}
  }

`

const Alert = styled.p`
  color: red;
  font-size: .8em;
  position: absolute;
  bottom: 0;
`

const TextAreaStyled = styled.textarea<IInput>`
  padding: .7em;
  border-radius: .7em;
  border: 1px solid black;
  width: 100%;
  resize: vertical;

  ${props => props.$borderColor && css`
    border-color: ${props.$borderColor};
  `}
  &:focus {
    outline: none;
    border-color: #c1c5fc;

    ${props => props.$borderFocusedColor && css`
      border-color: ${props.$borderFocusedColor};
    `}
  }
`

export {InputStyled, Wrap, Label, Alert, TextAreaStyled}