import styled, { css } from 'styled-components';

export const GlobalStyles = styled.div`

    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');

    font-family: 'Inter', sans-serif;;

    //?  Variables CSS
    --main-Red: ${ defaultColors.mainRed };
    --sub-title-h4: ${ defaultColors.COR_SUB_TITULO };
    --main-color:   ${ defaultColors.COR_TEMA_PADRAO };
    --main-color-dark:  ${ defaultColors.COR_TEMA_PADRAO_ESCURO };
    --p-color: ${ defaultColors.TEXT_COR };

`;