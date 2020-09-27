import styled from 'styled-components';
import theme from '../../theme';

export const Nav = styled.nav`
    max-width: 1100px;
    margin: 0 auto;
    width: 80%;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    .links {
        margin-left: 50px;
        width: 250px;
        display: flex;
        justify-content: space-between;
        ${theme.breakpoints.tablet} {
            display: none;
        }
    }
    .left, .right{
        display: flex;
        align-items: center;
    }
    .right {
        .btn-container {
            width: 170px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            ${theme.breakpoints.tablet} {
                display: none;
            }
        }
        ${theme.breakpoints.tablet} {
            display: flex;
            align-items: center;
        }
    }
`;

export const Hamburger = styled.div`
    width: 40px;
    cursor: pointer;
    @media (min-width: 999px) {
        display: none;
    }
`;

export const Bar = styled.div`
    background-color: ${props => props.hover ? theme.colors.primary.cyan : theme.colors.neutral.grey};
    width: 100%;
    height: 3px;
    margin: 10px 0;
    transition: .5s ease;
`;