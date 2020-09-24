import styled from 'styled-components';

export const Header = styled.header`
    max-width: 1100px;
    margin: 0 auto;
    margin-top: 70px;
    margin-bottom: 200px;
    width: 80%;
    position: relative;
    display: flex;
    flex-direction: column;
    .top {
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
    }
    
`;