import styled from 'styled-components';

export const Header = styled.header`
    max-width: 1200px;
    margin: 0 auto;
    margin-top: 70px;
    width: 80%;
    position: relative;
    .left {
        width: 50%;
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