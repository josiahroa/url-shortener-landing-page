import styled from 'styled-components';
import theme from '../../theme';
import bgImage from '../../assets/bg-shorten-desktop.svg';

export const UrlShortener = styled.div`
    max-width: 1100px;
    width: 80%;
    margin: 0 auto;
    border-radius: 10px;
    position: absolute;
    top: -60px;
    height: 120px;
    background-image: url(${bgImage});
    background-color: ${theme.colors.primary.dark_violet};
    display: flex;
    flex-direction: column;
    .input-wrapper {
        margin: 0 auto;
        margin-top: 39px;
        width: 90%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .error-wrapper {
        width: 90%;
        margin: 0 auto;
        margin-top: 2px;
    }
`;

export const Shortened = styled.div`
    margin: 20px auto;
    background-color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 5px;
    padding: 10px 20px;
    .right { 
        display: flex;
        align-items: center;
    }
`;