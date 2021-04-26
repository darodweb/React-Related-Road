import './Footer.scss';
// import { ReactComponent as FacebookIcon } from '../../assets/img/icon_facebook.svg';
import '../../Parts/Hero/Hero.scss';
import facebook_icon from '../../assets/img/icon_facebook.svg';
import twitter_icon from '../../assets/img/icon-twitter.png';
import instagram_icon from '../../assets/img/icon_instagram.png';

export const Footer = () => {


    return (
        <>

            <footer className="footer">
                <div className="footer">
                    <div className="footer-wrapper">
                        <p className="footer-title">Compartir en:</p>
                        <ul className="footer__social-icons">
                            <li><img src={facebook_icon} className="footer__social-icons--facebook" alt="facebook" style={{ height: '100%' }} /></li>
                            <li><img src={twitter_icon} className="footer__social-icons--twitter" alt="twitter" style={{ height: '100%' }} /></li>
                            <li><img src={instagram_icon} className="footer__social-icons--instagram" alt="instagram" style={{ height: '100%' }} /></li>
                        </ul>
                    </div>
                    <p classNameName="footer-copyright">&copy;GIFOS 2020 All Rights Reserved</p>
                </div>
            </footer>
            <div className="border-bottom"></div>
        </>


    )
}