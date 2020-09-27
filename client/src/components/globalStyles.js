import styled from 'styled-components';
import theme from '../theme';

export const Link = styled.a`
    text-decoration: none;
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.body};
    color: ${theme.colors.neutral.grey};
    ${props => props.color && `
        color: ${props.color};
    `}
    ${props => props.color === 'primary' && `
        color: ${theme.colors.primary.cyan};
    `}
    cursor: pointer;
    &:hover{
        color: black;
        ${props => props.color && `
            color: ${theme.colors.neutral.grey};
        `}
        transition: .5s ease;
    }
    ${theme.breakpoints.phone} {
        font-size: 15px;
    }
`;

export const Button = styled.div`
    padding: 7px 20px;
    ${props => props.width && props.height && `
        padding: 0;
        width: ${props.width};
        height: ${props.height};
        display: flex;
        align-items: center;
        justify-content: center;
        ${theme.breakpoints.tablet} {
            width: 100%;
        }
    `};
    border-radius: ${props => !props.round ? '30px' : '5px'};
    background-color: ${theme.colors.primary.cyan};
    border: 1px solid ${theme.colors.primary.cyan};
    ${props => props.selected && `
        background-color: ${theme.colors.primary.dark_violet};
        border: 1px solid ${theme.colors.primary.dark_violet};
    `}
    color: white;
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.body};
    font-weight: 500;
    text-align: center;
    &:hover{
        ${props => props.selected ? `
            user-select: none;
        ` : `
            cursor: pointer;
            background-color: transparent;
            color: ${theme.colors.primary.cyan};
            border: 1px solid ${theme.colors.primary.cyan};
            transition: .5s ease;
        `};
    }
    ${props => props.fullWidth && !props.width && `
        ${theme.breakpoints.tablet} {
            width: calc(100% - 40px);
        }
    `}
    ${theme.breakpoints.phone} {
        font-size: 15px;
    }
`;

export const H1 = styled.h1`
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.h1};
    ${theme.breakpoints.phone} {
        font-size: 35px;
    }
`;

export const H2 = styled.h2`
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.h2};
    margin: 20px 0;
    ${props => props.color && `
        color: ${props.color};
    `};
    ${theme.breakpoints.phone} {
        font-size: 30px;
    }
`;

export const H3 = styled.h3`
    font-family: ${theme.font.family};
    font-size: 25px;
    margin: 20px 0;
    ${theme.breakpoints.phone} {
        font-size: 20px;
    }
`;

export const H6 = styled.h6`
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.body};
    margin: 20px 0;
    ${props => props.color && `
        color: ${props.color};
    `}
`;

export const Text = styled.p`
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.body};
    color: ${props => props.color === 'grey-violet' ? theme.colors.neutral.grey_violet : theme.colors.neutral.grey};
    ${theme.breakpoints.phone} {
        font-size: 15px;
    }
`;

export const Input = styled.input`
    height: 40px;
    outline: none;
    border-radius: 5px;
    width: calc(100% - 24px);
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