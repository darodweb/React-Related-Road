import './Header.scss';
import { ReactComponent as Logo } from '../../assets/img/logo-desktop.svg';


export const Header = () => {

    return (

        <header class="header">
            <div class="logo__container">
                <Logo className="logo__desktop" />
            </div>
            <nav>
                <ul class="menu" id="menu" style={{ marginRight: '6rem' }}>
                    <li class="dark-mode"><a href="#">MODO NOCTURNO</a></li>
                </ul>

            </nav>

        </header>


    )
}

