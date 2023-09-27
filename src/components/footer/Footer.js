import React from 'react';
import './Footer.css';

import Image1 from '../../assets/images/LogoVariant2.png'

function Footer({ bgColor, centerText, centerText2, centerText3, extraTexts, language, t }) {
    const flexDirection = language === 'AR' ? 'row-reverse' : 'row';
    return (
        <div className="footer" style={{ backgroundColor: bgColor, fontFamily: 'Cadiz' }}>
            <div className='footer-container'>
                <div className='footer-container-left'>
                    <img src={Image1} alt='Download 1' className='footer-image'></img>
                    <span className='footer-text'>{t('footerText1')}</span>
                    <span className='footer-text'>{t('footerText2')}</span>
                    <span className='footer-text2'>{t('footerText3')}</span>
                </div>
                <div className='footer-container-right' >
                    <a href="https://book.guestready.com/search?country=194" style={{ textDecoration: 'none' }}>
                        <div className='footer-book-button' style={{ flexDirection: flexDirection }}>
                            {t('footerButtonText')}
                            <span className='arrow-right'></span>
                        </div>
                    </a>


                </div>
            </div>

        </div>
    );
}

export default Footer;