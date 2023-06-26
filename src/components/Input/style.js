import styled from "styled-components";

export const StyledInput = styled.input `
    width: 100%;
    padding: 0.315rem;

    border-radius: 5px;
    border: 1px solid transparent;

    background-color: var(--color-grey-2);

    outline: none;

    margin-top: 5px;
    margin-bottom: 5px;

    height: 2.5rem;
    &::placeholder {
        color: var(--color-grey-1); 
        font-size: 0.75;
        font-weight: 400;
        font-family: var(--font-family);
    }

    &:hover {
        border-color: var(--color-grey-0);
        transition: 665ms;
    }

    &:focus {
        border-color: var(--color-grey-0);
  }
`

export const StyledLabel = styled.label `
    font-size: 0.75rem;
    font-weight: 400;
    font-family: var(--font-family);
    
    color: var(--color-grey-0);
`

export const StyledDiv = styled.div `
    gap: 30px;

    height: 4rem;
    width: 100%;

    margin-top: 4px;
    margin-bottom: 4px;
`

export const StyledP = styled.p `
    color: var(--color-grey-0);

    font-size: 0.75rem;
    font-weight: 400;
    font-family: var(--font-family);
`