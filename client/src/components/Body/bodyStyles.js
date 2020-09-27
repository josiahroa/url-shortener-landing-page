import styled from 'styled-components';
import theme from '../../theme';

export const Body = styled.section`
    width: 100%;
    // height: 700px;
    background-color: ${theme.colors.neutral.grey_blue};
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 100px;
`;

export const BodyWrapper = styled.div`
    max-width: 1100px;
    width: 80%;
    margin: 0 auto;
    .shortened-container {
        margin-top: 80px;
        width: 100%;
    }
    .flex-wrapper {
        margin: 80px auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        algin-items: center;
        text-align: center;
        width: 460px;
        line-height: 30px;
    }
`;

export const Info = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    position: relative;
    ${theme.breakpoints.lg_desktop} {
        flex-direction: column;
        align-items: center;
    }
`;

export const Card = styled.div`
    width: 300px;
    height: 200px;
    padding: 20px;
    background-color: white;
    border-radius: 5px;
    position: relative;
    ${props => props.marginTop && `
        margin-top: ${props.marginTop};
        ${theme.breakpoints.lg_desktop} { 
            margin-top: 60px;
        }
    `}
    .img-wrapper {
        width: 70px;
        height: 70px;
        border-radius: 50%;
        background-color: ${theme.colors.primary.dark_violet};
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: -40px;
    }
    .content-wrapper {
        margin-top: 40px;
        line-height: 25px;
    }
`;

export const Bar = styled.div`
    width: 100%;
    height: 10px;
    background-color: ${theme.colors.primary.cyan};
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    ${theme.breakpoints.lg_desktop} {
        height: 100%;
        width: 10px;
    }
`;
