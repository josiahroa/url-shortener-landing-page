import styled from 'styled-components';
import theme from '../../theme';
import footerBg from '../../assets/bg-boost-desktop.svg';

import { FacebookSquare, Twitter, Pinterest, Instagram } from '@styled-icons/boxicons-logos';

export const CTABar = styled.section`
    background-color: ${theme.colors.primary.dark_violet};
    padding: 30px 0;
    background-image: url(${footerBg});
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
`;

export const Base = styled.section`
    background-color: ${theme.colors.neutral.very_dark_violet};
    width: 100%;
    padding: 30px 0;
    .base-wrapper {
        max-width: 1100px;
        margin: 0 auto;
        width: 80%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        img {
            margin-top: 20px;
        }
        ${theme.breakpoints.tablet} {
            flex-direction: column;
            align-items: center;
        }
    }
`;

export const LinkContainer = styled.div`
    display: flex;
    justify-content: center;
    .link-wrapper {
        display: flex;
        flex-direction: column;
        margin: 0 30px;
        ${theme.breakpoints.tablet} {
            align-items: center;
        }
    }
    ${theme.breakpoints.tablet} {
        flex-direction: column;
        align-items: center;
    }
`;

export const SocialContainer = styled.div`
    display: flex;
    margin-top: 20px;
`;

export const FooterLink = styled.a`
    color: ${theme.colors.neutral.grey};
    margin: 5px 0;
    cursor: pointer;
    &:hover {
        color: ${theme.colors.primary.cyan};
        transition: .5s ease;
    }
`;

export const FacebookIcon = styled(FacebookSquare)`
    color: white;
    width 30px;
    height: 30px;
    margin: 0 5px;
    cursor: pointer;
    &:hover {
        color: ${theme.colors.primary.cyan};
        transition: .5s ease;
    }
`;

export const TwitterIcon = styled(Twitter)`
    color: white;
    width 30px;
    height: 30px;
    margin: 0 5px;
    cursor: pointer;
    &:hover {
        color: ${theme.colors.primary.cyan};
        transition: .5s ease;
    }
`;

export const PinterestIcon = styled(Pinterest)`
    color: white;
    width 30px;
    height: 30px;
    margin: 0 5px;
    cursor: pointer;
    &:hover {
        color: ${theme.colors.primary.cyan};
        transition: .5s ease;
    }
`;

export const InstagramIcon = styled(Instagram)`
    color: white;
    width 30px;
    height: 30px;
    margin: 0 5px;
    cursor: pointer;
    &:hover {
        color: ${theme.colors.primary.cyan};
        transition: .5s ease;
    }
`;