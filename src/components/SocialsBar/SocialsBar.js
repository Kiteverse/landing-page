import React, { useEffect, useState } from 'react';
import './SocialsBar.css';

import IconTwitter from '../../assets/images/socials/twitter.png';
import IconFb from '../../assets/images/socials/fb.png';
import IconInsta from '../../assets/images/socials/insta.png';
import IconLinkedIn from '../../assets/images/socials/linkedin.png';

function SocialsBar() {
    const instagramLink = 'https://instagram.com/guestreadyksa?igshid=MzRlODBiNWFlZA==';
    const linkedInLink = 'https://www.linkedin.com/showcase/guestready-saudi-arabia/';

    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        let isScrolling;

        const socialBarElement = document.querySelector('.social-bar');

        const initialTimeout = setTimeout(() => {
            socialBarElement.style.transform = "translateX(-80%) translateY(-50%)";
        }, 10000);

        const handleScroll = () => {
            if (isHovering) {
                socialBarElement.style.transform = "translateX(0%) translateY(-50%)";
                return;
            }

            socialBarElement.style.transform = "translateX(0%) translateY(-50%)";

            window.clearTimeout(isScrolling);
            isScrolling = setTimeout(() => {
                if (isHovering) return;
                socialBarElement.style.transform = "translateX(-80%) translateY(-50%)";
            }, 2000);
        };


        window.addEventListener('scroll', handleScroll);
        socialBarElement.addEventListener('mouseover', handleScroll)
        socialBarElement.addEventListener('mouseover', () => setIsHovering(true));
        socialBarElement.addEventListener('mouseout', () => setIsHovering(false));

        return () => {
            // Cleanup listener on component unmount
            window.removeEventListener('scroll', handleScroll);
            socialBarElement.removeEventListener('mouseover', () => setIsHovering(true));
            socialBarElement.removeEventListener('mouseout', () => setIsHovering(false));
            window.clearTimeout(initialTimeout);
        };
    }, [isHovering]);

    return (
        <div className="social-bar">
            <a onMouseOver={() => setIsHovering(true)} onMouseOut={() => setIsHovering(false)} href="https://twitter.com/GuestReady" className="social-button" target="_blank" rel="noreferrer">
                <img className='social-image' src={IconTwitter}></img>
            </a>
            <a onMouseOver={() => setIsHovering(true)} onMouseOut={() => setIsHovering(false)} href="https://www.facebook.com/GuestReadyNow" className="social-button" target="_blank" rel="noreferrer">
                <img className='social-image' src={IconFb}></img>

            </a>
            <a onMouseOver={() => setIsHovering(true)} onMouseOut={() => setIsHovering(false)} href={instagramLink} className="social-button" target="_blank" rel="noreferrer">
                <img className='social-image' src={IconInsta}></img>

            </a>
            <a onMouseOver={() => setIsHovering(true)} onMouseOut={() => setIsHovering(false)} href={linkedInLink} className="social-button" target="_blank" rel="noreferrer">
                <img className='social-image' src={IconLinkedIn}></img>

            </a>
            {/* Add more social buttons as needed */}
        </div>
    );
}

export default SocialsBar;
