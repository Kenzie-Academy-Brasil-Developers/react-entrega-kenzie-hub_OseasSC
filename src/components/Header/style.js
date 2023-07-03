import styled from "styled-components";
import {
    ButtonBlankText
} from "./../Button/index";

export const StyledDiv = styled.div `
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    margin-bottom: 8px;
`

export const StyledButton = styled(ButtonBlankText)
`
    width: 60px;
    height: 35px;
    min-width: 60px;

    padding: 5px;
 
    border: none;
    border-radius: 4px;

    background-color: var(--color-grey-2);

    display: flex;
    align-items: center;
    justify-content: center;

    color:var(--color-grey-0)

`