import styled from 'styled-components';
import theme from '../../theme';

export const Header = styled.header`
    max-width: 1100px;
    margin: 0 auto;
    margin-top: 70px;
    margin-bottom: 200px;
    width: 80%;
    position: relative;
    .left {
        width: 50%;
        ${theme.breakpoints.tablet} {
            width: 100%;
            padding-top: 400px;
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
        }
    }
    .right {
        position: absolute;
        right: -200px;
        top: -50px;
        img {
            width: 550px;
        }
    }    
`;