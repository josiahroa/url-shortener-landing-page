import styled from 'styled-components';
import theme from '../theme';

export const Link = styled.a`
    text-decoration: none;
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.body};
    color: ${theme.colors.neutral.grey};
    cursor: pointer;
    &:hover{
        color: black;
        transition: .5s ease;
    }
`;

export const Button = styled.div`
    padding: 7px 20px;
    border-radius: ${props => !props.round ? '30px' : '5px'};
    background-color: ${theme.colors.primary.cyan};
    border: 1px solid ${theme.colors.primary.cyan};
    color: white;
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.body};
    font-weight: 500;
    text-align: center;
    cursor: pointer;
    &:hover{
        background-color: transparent;
        color: ${theme.colors.primary.cyan};
        border: 1px solid ${theme.colors.primary.cyan};
        transition: .5s ease;
    }
`;

export const H1 = styled.h1`
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.h1};
`;

export const Text = styled.p`
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.body};
    color: ${theme.colors.neutral.grey};
`;

export const Input = styled.input`
    height: 40px;
    // border: 0;
    outline: none;
    border-radius: 5px;
    width: 80%;
    padding-left: 20px;
    border: 1px solid ${props => props.error ? theme.colors.secondary.red : 'white'};
    ::placeholder{
        color: ${props => props.error ? theme.colors.secondary.red : '0'};
    }
`;

export const Error = styled.p`
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.body};
    color: ${theme.colors.secondary.red};
`;