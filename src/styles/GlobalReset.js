import {
    createGlobalStyle
} from "styled-components";

export const GlobalReset = createGlobalStyle `
    *{
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

    button{
        cursor: pointer;
        background: transparent;
        border: none;
    }
`