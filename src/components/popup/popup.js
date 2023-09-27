import closeLogo from '../../assets/images/close.svg';
import content from '../../resources/content.json';

import kite1 from '../../assets/images/kite1.svg';
import kite2 from '../../assets/images/kite2.svg';
import kite3 from '../../assets/images/kite3.svg';
import kite4 from '../../assets/images/kite4.svg';
import kite5 from '../../assets/images/kite5.svg';
import kite6 from '../../assets/images/kite6.svg';
import kite7 from '../../assets/images/kite7.svg';

import sponsor1 from '../../assets/images/sponsors/sponsor1.svg';
import sponsor2 from '../../assets/images/sponsors/sponsor2.svg';
import sponsor3 from '../../assets/images/sponsors/sponsor3.svg';
import sponsor4 from '../../assets/images/sponsors/sponsor4.svg';
import sponsor5 from '../../assets/images/sponsors/sponsor5.svg';
import sponsor6 from '../../assets/images/sponsors/sponsor6.svg';
import sponsor7 from '../../assets/images/sponsors/sponsor7.svg';

import FormVerse from '../form-verse/FormVerse';

import './popup.css';

export function Popup({ visibilityControl, textSelector }) {
    const kiteSrc = [
        kite1,
        kite2,
        kite3,
        kite4,
        kite5,
        kite6,
        kite7
    ]

    const sponsorSrc = [
        sponsor1,
        sponsor2,
        sponsor3,
        sponsor4,
        sponsor5,
        sponsor6,
        sponsor7
    ]
    const [show, setShow] = visibilityControl;

    const handleClickHighlight = (id) => {
        console.log(`Clicking ${id}`)

        setShow(true);
    }

    const closePopup = () => {
        console.log(`Closing`);
        setShow(false)
    }

    return (
        <div>
            {show &&
                <div className={textSelector === 'army-of-friends' || textSelector === '3' || textSelector === 'three-grants' ? 'popup-wide flex-box-popup-container font-mplus-medium' : 'popup flex-box-popup-container font-mplus-medium'}>
                    <div className='close-popup'>
                        <img onClick={() => closePopup()} src={closeLogo}></img>
                    </div>

                    {
                        textSelector === '4' &&
                        <div className='flex-box-popup popup-custom-text-layout flex-align-items-center'>
                            {
                                content && content[textSelector].map((text, index) => (
                                    <div className='flex-box-kite-sentence-container-col'>
                                        {

                                            <span className='popup-text-margin-b text-align-center'>Our icon and visual identity were designed by <a className='hyperlink-text' href='https://www.moonistudio.com'><span className='underline'>MOONI Studio</span></a>.</span>
                                        }
                                    </div>

                                ))
                            }

                        </div>
                    }
                    {
                        textSelector === 'three-grants' &&
                        <div className='flex-box-popup popup-custom-text-layout flex-align-items-center'>
                            {
                                content && content[textSelector].map((text, index) => (
                                    <div className='flex-box-kite-sentence-container'>
                                        {
                                            <span className=' popup-text-margin-b'>{text}</span>
                                        }
                                    </div>

                                ))
                            }

                            <div className="image-container">
                                {
                                    sponsorSrc && sponsorSrc.map((img) => (
                                        <img className='sponsor-img' src={img} alt="Sponsor" />
                                    ))
                                }
                            </div>

                        </div>
                    }

                    {
                        textSelector === '2' &&
                        <div className='flex-box-popup popup-custom-text-layout flex-align-items-center'>
                            {
                                content && content[textSelector].map((text, index) => (
                                    <div className='flex-box-kite-sentence-container'>

                                        {
                                            index === 2 &&
                                            <a href='https://www.the-outpost.com'>
                                                <span className='bold-text underline popup-text-margin-b hyperlink-text'>{text}</span>

                                            </a>
                                        }
                                        {
                                            index !== 2 &&
                                            <span className=' popup-text-margin-b text-align-center'>{text}</span>
                                        }


                                    </div>

                                ))
                            }
                        </div>
                    }

                    {
                        textSelector === '3' &&
                        <div className='flex-box-popup popup-custom-text-layout flex-align-items-start'>
                            {
                                content && content[textSelector].map((text, index) => (
                                    <div className={textSelector === '3' ? 'flex-box-kite-sentence-container-overridden' : 'flex-box-kite-sentence-container'}>
                                        {
                                            textSelector === '3' && index !== 0 && <img src={kiteSrc[index - 1]}></img>
                                        }
                                        {
                                            index !== 8 && index !== 9 &&
                                            <span className={index === 0 && textSelector === '3' ? 'bold-text popup-text-margin-b' : ''}>{text}</span>

                                        }
                                        {
                                            (index === 8) &&
                                            <span className='bold-text popup-prompt1'>{text}</span>

                                        }
                                        {
                                            (index === 9) &&
                                            <span className='bold-text popup-prompt2'>{text}</span>

                                        }
                                        {
                                            (index === 9) &&
                                            <FormVerse genericPopupControl={setShow} />
                                        }
                                    </div>

                                ))
                            }
                        </div>
                    }

                    {
                        textSelector === 'army-of-friends' &&
                        <div className={'flex-box-popup-wide'}>
                            {
                                content && content[textSelector].map((text, index) => (
                                    <div className='flex-box-kite-sentence-container'>
                                        {
                                            textSelector === '3' && index !== 0 && <img src={kiteSrc[index - 1]}></img>
                                        }
                                        <span className={''}>{text}</span>
                                    </div>
                                ))
                            }
                        </div>
                    }

                    {
                        textSelector !== '4' && textSelector !== 'three-grants' && textSelector !== 'army-of-friends' && textSelector !== '3' && textSelector !== '2' &&
                        <div className={textSelector === '3' ? 'flex-box-popup popup-custom-text-layout flex-align-items-start' : 'flex-box-popup'}>
                            {
                                content && content[textSelector].map((text, index) => (
                                    <div className='flex-box-kite-sentence-container'>
                                        {
                                            textSelector === '3' && index !== 0 && <img src={kiteSrc[index - 1]}></img>
                                        }
                                        <span className={index === 0 && textSelector === '3' ? 'bold-text popup-text-margin-b' : ''}>{text}</span>
                                    </div>
                                ))
                            }
                        </div>


                    }


                </div>
            }
        </div >

    )
}