import styled from "styled-components";

export const StyledDiv = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    margin: 10px;

    width: 500px;
`

export const StyledButton = styled.button `
    background-color: var(--color-color-primary);

    min-height: 38px;

   border-radius: 4px;

    color: var(--color-grey-0);

    font-size: 0.75rem;
    font-weight: 500;
    font-family: var(--font-family);

    width: 60px;
`