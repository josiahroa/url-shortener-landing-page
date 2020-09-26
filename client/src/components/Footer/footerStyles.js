import styled from 'styled-components';
import theme from '../../theme';
import footerBg from '../../assets/bg-boost-desktop.svg';

export const CTABar = styled.section`
    background-color: ${theme.colors.primary.dark_violet};
    padding: 30px 0;
    background-image: url(${footerBg});
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Base = styled.section`
    background-color: ${theme.colors.neutral.very_dark_violet};
    width: 100%;
    height: 200px;
    .base-wrapper {
        max-width: 1100px;
        margin: 0 auto;
        width: 80%;
    }
`;