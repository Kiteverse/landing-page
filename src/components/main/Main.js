import React, { useState } from 'react';
import './main.css';

import { useSpring, animated } from '@react-spring/web';


import logo from '../../assets/images/logo.png';
import instaIcon from "../../assets/images/insta.svg";
import kiteLogo from "../../assets/images/kite.png";
import closeLogo from '../../assets/images/close.svg';
import emailLogo from '../../assets/images/email.svg';

import { Popup } from '../popup/popup';
import ContactForm from '../form/ContactForm';

function Main() {
    const [show, setShow] = useState(false);
    const [popupTextSelector, setPopupTextSelector] = useState('0');


    const props = useSpring({
        from: { y: -10 },
        to: { y: 10 },
        config: { duration: 1500 },
        reset: true,
        reverse: true,
        loop: { reverse: true }

    });

    const handleClickHighlight = (id) => {
        setPopupTextSelector(id);
        setShow(true);
    }

    const closePopup = () => {
        setShow(false)
    }

    return (
        <div className='main-background'>

            <Popup
                visibilityControl={[show, setShow]}
                textSelector={popupTextSelector}
            />

            <div className='page-header'>
                <div className='flex-box flex-row col-gap-3 flex-align-center flex-container-align-center'>
                    <span className='font-21 font-effra-regular'>WELCOME TO</span>
                    <img src={logo} className='main-logo'></img>
                </div>
                <div className='kite-section-container'>
                    <span onClick={() => handleClickHighlight('9')} className='font-mplus-medium font-pink font-size-20'>COME OUT AND PLAY</span>
                    <animated.div className="kite-anim-container" style={{ transform: props.y.interpolate(y => `translate3d(0,${y}px,0)`) }}>
                        <img src={kiteLogo} className='kite-logo'></img>
                    </animated.div>
                </div>
            </div>

            <div className='flex-box flex-col'>

                <div className='padding-top-5 font-align-left'>
                    <span className='font-32 font-effra-regular'>THIS IS OUR STORY IN THREE <span onClick={() => handleClickHighlight('1')} className='highlighted-word'>KITEVERSES:
                    </span>
                    </span>
                </div>

                <div className='padding-top-3 font-align-left font-size-45 font-effra-regular'>
                    <div style={{ margin: 0, padding: 0, marginBottom: '5px' }}>
                        <span onClick={() => handleClickHighlight('2')} className='highlighted-word'>WE
                        </span> BELIEVE THE WORLD NEEDS <span onClick={() => handleClickHighlight('3')} className='highlighted-word' style={{ cursor: 'pointer' }}>BETTER WRITING.
                        </span>
                    </div>
                    <div style={{ margin: 0, padding: 0 }}>
                        <span className='padding-top-1'>BECAUSE <span onClick={() => handleClickHighlight('change-begins-with')} className='highlighted-word'>CHANGE BEGINS WITH THE WORD.</span>
                        </span>
                    </div>

                </div>

                <div className='padding-top-5 font-align-left font-effra-regular'>
                    <span className='font-size-45'>SO WE CREATED A <span onClick={() => handleClickHighlight('5')} className='highlighted-word'>WRITING GAME</span> THAT <span
                        onClick={() => handleClickHighlight('6')}
                        className='highlighted-word'>PLAYS BETTER.
                    </span>
                    </span>
                </div>

                <div className='padding-top-5 font-effra-heavy font-align-left'>
                    <span className='text-bold font-size-32 '>OUR BETA VERSION COMES OUT IN NOVEMBER 2023.</span>
                </div>

                <div className='container-beta '>
                    <span className='text-bold font-size-32 font-effra-heavy font-align-left'>BE <span
                        onClick={() => handleClickHighlight('first-to-play')} className='underline text-bold font-size- font-effra-heavy'>THE FIRST TO PLAY IT.</span>
                    </span>
                    <span className='font-size-25 margin-left-5 font-effra-bold'>LEAVE YOUR EMAIL HERE: </span>
                    <ContactForm genericPopupControl={setShow} />
                </div>

                <div className='padding-top-5 flex-box flex-row-footer footer container font-effra-regular font-align-left'>
                    <span><span onClick={() => handleClickHighlight('4')} className='text-bold underline'>Kiteverse</span> Was Made Possible Thanks To The Support Of <span onClick={() => handleClickHighlight('three-grants')} className='text-bold underline'>Three Grants</span> And <span onClick={() => handleClickHighlight('army-of-friends')} className='text-bold underline'>An Army Of Friends.</span></span>
                    <a href='https://instagram.com/kiteverse.app?igshid=OGQ5ZDc2ODk2ZA=='>
                        <img style={{ cursor: 'pointer' }} src={instaIcon} className='margin-left-5 insta-icon'></img>
                    </a>

                </div>

            </div>
        </div >
    );
}

export default Main;