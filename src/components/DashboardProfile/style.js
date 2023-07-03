import styled from "styled-components";

export const StyledHeaderDiv = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    margin: 10px;

    max-width: 1200px;
    width: 100%;
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

export const StyledUserSection = styled.section `
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    color: var(--color-grey-0);

    margin: 10px;

    max-width: 1200px;
    width: 100%;
`

export const StyledTechSection = styled.section `
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    margin: 10px;

    max-width: 1200px;
    width: 100%;
`

export const StyledTechSectionContainer = styled.section `
    display: flex;
    flex-direction: column;
    margin: 10px;

    color: var(--color-grey-0);

    max-width: 1200px;
    width: 100%;
`

export const StyledWorkSection = styled.section `
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    margin: 10px;

    max-width: 1200px;
    width: 100%;
`

export const StyledWorkSectionContainer = styled.section `
    display: flex;
    flex-direction: column;
    margin: 10px;

    color: var(--color-grey-0);

    max-width: 1200px;
    width: 100%;
`

export const StyledUl = styled.ul `
    display: flex;
    flex-direction: column;
    margin: 10px;

    gap: 30px;
    padding: 20px;

    background-color: var(--color-grey-3);
    color: var(--color-grey-0);

    border-radius: 5px;
   

    max-width: 1200px;
    width: 100%;

    list-style: none;
`

export const StyledLi = styled.li `
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    margin: 10px;

    gap: 30px;
    padding: 20px;

    background-color: var(--color-grey-4);
    color: var(--color-grey-0);

    border-radius: 5px;

    max-width: 1200px;
    width: 100%;

    list-style: none;
`

export const StyledModal = styled.div `
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9999;

  .modal-content {
    background-color: #fff;
    padding: 20px;
    border-radius: 4px;
    max-width: 400px;
    width: 100%;
    max-height: 80vh;
    overflow-y: auto;
  }
`;