import styled from 'styled-components';

export const Nav = styled.nav`
    max-width: 1100px;
    margin: 0 auto;
    width: 80%;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .links {
        margin-left: 50px;
        width: 250px;
        display: flex;
        justify-content: space-between;
    }
    .left, .right{
        display: flex;
        align-items: center;
    }
`;