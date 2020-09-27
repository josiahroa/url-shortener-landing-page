import React from 'react';
import { 
    Base, 
    LinkContainer, 
    SocialContainer, 
    FooterLink,
    FacebookIcon,
    TwitterIcon,
    PinterestIcon,
    InstagramIcon
} from './footerStyles';
import { H6 } from '../globalStyles';
import logo from '../../assets/white-logo.svg';

export default () => {
    return (
        <Base>
            <div className='base-wrapper'>
                <img src={logo} alt='Shortly'/>
                <LinkContainer>
                    <div className='link-wrapper'>
                        <H6 color='white'>Features</H6>
                        <FooterLink>Link Shortening</FooterLink>
                        <FooterLink>Branded Links</FooterLink>
                        <FooterLink>Analytics</FooterLink>
                    </div>
                    <div className='link-wrapper'>
                        <H6 color='white'>Resources</H6>
                        <FooterLink>Blog</FooterLink>
                        <FooterLink>Developers</FooterLink>
                        <FooterLink>Support</FooterLink>
                    </div>
                    <div className='link-wrapper'>
                        <H6 color='white'>Company</H6>
                        <FooterLink>About</FooterLink>
                        <FooterLink>Our Team</FooterLink>
                        <FooterLink>Careers</FooterLink>
                        <FooterLink>Contact</FooterLink>
                    </div>
                </LinkContainer>
                <SocialContainer>
                    <FacebookIcon/>
                    <TwitterIcon/>
                    <PinterestIcon/>
                    <InstagramIcon/>
                </SocialContainer>
            </div>
        </Base>
    );
}