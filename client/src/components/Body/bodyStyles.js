import styled from 'styled-components';
import theme from '../../theme';

export const Body = styled.section`
    width: 100%;
    height: 700px;
    background-color: ${theme.colors.neutral.grey_violet};
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    
`;

export const BodyWrapper = styled.div`
    max-width: 1100px;
    width: 80%;
    margin: 0 auto;
    .shortened-container {
        margin-top: 80px;
        width: 100%;
    }
`;