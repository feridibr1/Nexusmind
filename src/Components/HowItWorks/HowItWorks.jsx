import Container from "../Container/Container";
import './_HowItWorks.scss'

function HowWorks() {
    return (
        <section className="how_work_sect"> 
            <h2 className="how_works_h2"><span>Sağlamlığa Doğru Yolunuz</span> 3 Sadə Addımda</h2>
            <Container>
                <div className="how_work_sect_wrapper">
                    <div className="card">
                        <h1>1</h1>
                        <h3>Mütəxəssis Tapın</h3>
                        <p>Sizə uyğun olan lisenziyalı mütəxəssisi tapmaq üçün şəbəkəmizi nəzərdən keçirin.</p>
                    </div>
                    <div className="card">
                        <h1>2</h1>
                        <h3>Seans Rezerv edin</h3>
                        <p>Cədvəlinizə uyğun vaxtda təhlükəsiz video seansı planlaşdırın.</p>
                    </div>
                    <div className="card">
                        <h1>3</h1>
                        <h3>Səfərinizə Başlayın</h3>
                        <p>Məxfi terapiya seanslarınıza başlayın və məqsədlərinizə doğru irəliləyin.</p>
                    </div>
                </div>
            </Container>
        </section>


    )
}

export default HowWorks;