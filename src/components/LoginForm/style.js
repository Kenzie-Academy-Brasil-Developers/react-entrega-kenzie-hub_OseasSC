import styled from "styled-components";
import {
    Link
} from "react-router-dom";


export const StyledForm = styled.form `
    background-color: var(--color-grey-3);

    border-radius: 3px;

    max-width: 369px;
    width: 100%;

    display: flex;
    flex-direction: column;

    padding: 1.4rem;

    gap: 1.5rem;

    display: flex;
    flex-direction: column;
    align-items: center;
`

export const StyledDiv = styled.div `
    max-width: 369px;

    display: flex;
    flex-direction: column;
`

export const StyledButtonLogin = styled.button `
    background-color: var(--color-color-primary);

    min-height: 38px;

    border-radius: 4px;

    color: var(--color-grey-0);

    font-size: 0.75rem;
    font-weight: 500;
    font-family: var(--font-family);

    width: 100%;
`

export const StyledButtonSignUp = styled.button `
    background-color: var(--color-grey-1);

    min-height: 38px;

    border-radius: 4px;

    color: var(--color-grey-0);

    font-size: 0.75rem;
    font-weight: 500;
    font-family: var(--font-family);

    width: 100%;
`

export const StyledP = styled.p `
    color: var(--color-grey-1);
`

export const StyledH2 = styled.h2 `
    color: var(--color-grey-0);

    font-size: 1rem;
    font-weight: 700;
    font-family: var(--font-family);
`

export const StyledLink = styled(Link)
`
  width: 100%;
`;