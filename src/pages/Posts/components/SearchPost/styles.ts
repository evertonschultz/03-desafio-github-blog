import styled from "styled-components";

export const SearchFormContainer = styled.form`
  display: flex;

  > input {
    box-sizing: border-box;

    display: flex;
    width: 100%;
    flex-direction: row;
    align-items: center;
    padding: 0.75rem 1rem;
    gap: 0.5rem;

    color: ${(props) => props.theme["label-400"]};
    background: ${(props) => props.theme["input-900"]};

    border: 1px solid ${(props) => props.theme["border-500"]};
    border-radius: 6px;

    font-family: 'Nunito';
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    line-height: 160%;

    &::placeholder {
      color: ${(props) => props.theme["label-400"]};
    }
  }
`