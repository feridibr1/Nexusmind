import './Partners-section.scss'
import tebiblogo from '../../assets/images/ChatGPT Image Nov 27, 2025, 12_51_05 AM.png'
import Container from '../Container/Container'

function Partners() {
    return(
        <section>
            <Container>
                <div className="header">
                    <p className='first'>Partnyorlarımızı</p>
                    <p>tanıyın</p> 
                </div>
            <div className='partners-logo'>
                <div className='slider'>
                    <img src={tebiblogo} alt='sehiyye-nazirliyi-logo' className='sehiyye-logo'/>
                    <img src={tebiblogo} alt='tebib-logo' className='tebib-logo'/>
                    <img src={tebiblogo} alt='sehiyye-nazirliyi-logo' className='sehiyye-logo'/>
                    <img src={tebiblogo} alt='tebib-logo' className='tebib-logo'/>
                    <img src={tebiblogo} alt='sehiyye-nazirliyi-logo' className='sehiyye-logo'/>
                    <img src={tebiblogo} alt='tebib-logo' className='tebib-logo'/>
                    <img src={tebiblogo} alt='sehiyye-nazirliyi-logo' className='sehiyye-logo'/>
                    <img src={tebiblogo} alt='tebib-logo' className='tebib-logo'/>

                    <img src={tebiblogo} alt='sehiyye-nazirliyi-logo' className='sehiyye-logo'/>
                    <img src={tebiblogo} alt='tebib-logo' className='tebib-logo'/>
                    <img src={tebiblogo} alt='sehiyye-nazirliyi-logo' className='sehiyye-logo'/>
                    <img src={tebiblogo} alt='tebib-logo' className='tebib-logo'/>
                    <img src={tebiblogo} alt='sehiyye-nazirliyi-logo' className='sehiyye-logo'/>
                    <img src={tebiblogo} alt='tebib-logo' className='tebib-logo'/>
                    <img src={tebiblogo} alt='sehiyye-nazirliyi-logo' className='sehiyye-logo'/>
                    <img src={tebiblogo} alt='tebib-logo' className='tebib-logo'/>

                </div>
            </div>
            </Container>
        </section>
    )
}

export default Partners;