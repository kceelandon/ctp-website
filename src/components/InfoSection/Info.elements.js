/* styled component file for assembling Info section component */
import styled from 'styled-components';

export const ParagraphWrapper = styled.div`
    max-width: 700px;
    padding-top: 0px;
    padding-bottom: 60px;

    @media screen and (max-width: 768px) {
        padding-bottom: 65px;
    }
`;

export const Information = styled.p`
    color: ${({ lightTextDesc }) => (lightTextDesc ? '#A9B3C1' : '#1C2237')};
    font-size: 20px;
    line-height: 28px;
    margin-bottom: 40px;
`;

export const ParagraphColumn = styled.div`

`;

/* may need to create a new InfoColumn or mess with the styling in Section.elements.js */