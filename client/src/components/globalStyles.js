import styled from 'styled-components';
import theme from '../theme';

export const Link = styled.a`
    text-decoration: none;
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.body};
    cursor: pointer;
    &:hover{
        color: ${theme.colors.neutral.grey};
        transition: .5s ease;
    }
`;

export const Button = styled.div`
    padding: 7px 20px;
    border-radius: 30px;
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