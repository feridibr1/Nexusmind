import './Footer.scss'
import Container from '../Container/Container'
import logo from '../../assets/images/logo.png'
import { MdOutlineLocalPhone } from "react-icons/md";
import { CiMail } from "react-icons/ci";

export default function Footer() {
    return (
        <section className='footerContainer'>
            <Container>
                <hr />

                <div className='wrapper'>
                    <div className='logo-column'>
                        <a href="#" className="footer_logo">
                            <img src={logo} alt="Nexusmind Logo" />
                        </a>
                        <p className='subparagraph'>Yenilikçi psixoloji dəstək</p>
                        <p>platforması ilə balanslı həyat</p>
                    </div>

                    <div className='footerColumn'>
                        <h4>Keçidlər</h4>
                        <a href='#'>Ana səhifə</a>
                        <a href='#'>Haqqımızda</a>
                        <a href='#'>Psixoloqlar</a>
                    </div>

                    <div className='footerColumn'>
                        <h4>İnformasiya</h4>
                        <a href='#'>Xidmətlər</a>
                        <a href='#'>Əlaqə</a>
                    </div>
 
                    <div className='footerColumn'>
                        <h4>Resurslar</h4>
                        <a href='#'>Blog</a>
                        <a href='#'>Psixoloji testlər</a>
                        <a href='#'>FAQ</a>
                    </div>

                    <div className='footerColumn'>
                        <h4>Əlaqə</h4>
                        <a href='#'><MdOutlineLocalPhone className='icon' /> (+994) 55 555 55 55</a>
                        <a href='#'><CiMail className='icon' /> info@nexusmind.com</a>
                    </div>
                </div>

                <hr />

                <div className='privacy'>
                    <p>© 2025 NexusMind. All rights reserved.</p>

                    <div className='policy'>
                        <a href='#'>Privacy Policy</a>
                        <a href='#'>Terms of Service</a>
                    </div>
                </div>

            </Container>
        </section>
    )
}
