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
    .shortened-container {
        max-width: 1100px;
        width: 90%;
        position: absolute;
        top: 60px;
    }
`;

export const Wrapper = styled.div`
    width: 80%;
    margin: 0 auto;
`;