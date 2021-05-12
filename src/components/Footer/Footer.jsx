import React from 'react';
import { FaInstagram, FaLinkedin, FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const FooterContainer = styled.footer`
background-color:#010522;
`

const FooterWrapper = styled.div`
    padding:48px 24px;
    display:flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    max-width:1100px;
    margin:0 auto;
`

const FooterLinksContainer = styled.div`
    display:flex;
    justify-content:center;
    @media screen and (max-width:820px){
        padding-top:32px;
    }
`

const FooterLinksWrapper = styled.div`
    display:flex;
    @media screen and (max-width:820px){
        flex-direction:column;
    }
`

const FooterLinkItems = styled.div`
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    margin:16px;
    text-align:left;
    width:160px;
    box-sizing:border-box;
    color:#fff;

    @media screen and (max-width:420px) {
        margin:0;
        padding:10px;
        width:100%;
    }
`

const FooterLinkTitle = styled.h1`
    font-size:14px;
    margin-bottom:16px;
`

const FooterLink = styled(Link)`
/* React-router-dom destructured in here(Link) */
color: #fff;
text-decoration:none;
margin-bottom:0.5rem;
font-size:14px;

&:hover{
    color: #01bf71;
    transition:0.3s ease-in-out;
}
`

const SocialMedia = styled.section`
max-width: 1000px;
width:100%;
`

const SocialMediaWrap = styled.div`
display:flex;
justify-content:space-between;
align-items:center;
max-width: 1100px;
margin:40px auto 0 auto;
@media screen and (max-width:820px) {
    flex-direction:column;
}
`

const SocialLogo = styled(Link)`
color:#fff;
justify-self: start;
cursor: pointer;
text-decoration: none;
font-size: 1.5rem;
display:flex;
align-items:center;
margin-bottom: 16px;
font-weight: bold;
`

const Copyright = styled.small`
color:#fff;
margin-bottom:16px;
`

const SocialIcons = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 240px;
`

const SocialIconLink = styled.a`
color: #fff;
font-size:24px;
`

function Footer(props) {
    return (
        <FooterContainer>
            <FooterWrapper>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            {/* REMEMBER, YOU USE REACT ROUTER TO TAKE YOU TO COMPONENTS IN SITE */}
                            <FooterLinkTitle>About us</FooterLinkTitle>
                            <FooterLink to='/'>How it works</FooterLink>
                            <FooterLink to='/'>Testimonials</FooterLink>
                            <FooterLink to='/'>Careers</FooterLink>
                            <FooterLink to='/'>Investors</FooterLink>
                            <FooterLink to='/'>Terms of Service</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            {/* REMEMBER, YOU USE REACT ROUTER TO TAKE YOU TO COMPONENTS IN SITE */}
                            <FooterLinkTitle>Contact Us</FooterLinkTitle>
                            <FooterLink to='/'>Contact</FooterLink>
                            <FooterLink to='/'>Support</FooterLink>
                            <FooterLink to='/'>Destinations</FooterLink>
                            <FooterLink to='/'>Sponsorships</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    {/* The wrapper is gonna make this easier to move child elements around; in this case it's 2 */}
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            {/* REMEMBER, YOU USE REACT ROUTER TO TAKE YOU TO COMPONENTS IN SITE */}
                            <FooterLinkTitle>Videos</FooterLinkTitle>
                            <FooterLink to='/'>Submit Videos</FooterLink>
                            <FooterLink to='/'>Ambassadors</FooterLink>
                            <FooterLink to='/'>Agency</FooterLink>
                            <FooterLink to='/'>Influencer</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            {/* REMEMBER, YOU USE REACT ROUTER TO TAKE YOU TO COMPONENTS IN SITE */}
                            <FooterLinkTitle>Social Media</FooterLinkTitle>
                            <FooterLink to='/'>Instagram</FooterLink>
                            <FooterLink to='/'>Facebook</FooterLink>
                            <FooterLink to='/'>YouTube</FooterLink>
                            <FooterLink to='/'>Twitter</FooterLink>
                            <FooterLink to='/'>LinkedIn</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/'>
                            e-Commerce
                    </SocialLogo>
                        <Copyright>e-Commerce © {new Date().getFullYear()} All rights reserved.</Copyright>
                        <SocialIcons>
                            <SocialIconLink href="/" target='_blank' aria-label='Facebook'>
                                <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink href="/" target='_blank' aria-label='Instagram'>
                                <FaInstagram />
                            </SocialIconLink>
                            <SocialIconLink href="/" target='_blank' aria-label='YouTube'>
                                <FaYoutube />
                            </SocialIconLink>
                            <SocialIconLink href="/" target='_blank' aria-label='Twitter'>
                                <FaTwitter />
                            </SocialIconLink>
                            <SocialIconLink href="//www.linkedin.com/in/cacano" target='_blank' aria-label='LinkedIn'>
                                <FaLinkedin />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrapper>
        </FooterContainer >
    );
}

export default Footer;