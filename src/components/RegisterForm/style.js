import styled from "styled-components";

export const StyledButton = styled.button `
    background-color: var(--color-color-primary);

    min-height: 38px;

    border-radius: 4px;

    color: var(--color-grey-0);

    font-size: 0.75rem;
    font-weight: 500;
    font-family: var(--font-family);

    width: 100%;
`

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