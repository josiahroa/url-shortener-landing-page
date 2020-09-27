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
        .btn-wrapper {
            margin-left: 20px;
            ${theme.breakpoints.tablet} {
                margin: 0;
                width: 100%;
            }
        }
        ${theme.breakpoints.tablet} {
            flex-direction: column;
            margin-top: 0;
            height: 88px;
            justify-content: space-between;
        }
    }
    .error-wrapper {
        width: 90%;
        margin: 0 auto;
        margin-bottom: 2px;
    }
    ${theme.breakpoints.tablet} {
        justify-content: center;
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
        .new-link {
            margin-right: 10px;
            ${theme.breakpoints.tablet} {
                margin: 10px 0;
            }
        }
        ${theme.breakpoints.tablet} {
            flex-direction: column;
            align-items: flex-start;
            justify-content: space-between;
            width: 100%;
        }
    }
    ${theme.breakpoints.tablet} {
        flex-direction: column;
        align-items: flex-start;
    }
`;