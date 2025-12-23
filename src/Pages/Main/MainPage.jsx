import FAQ from '../../Components/FAQ/Faq';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import Hero from '../../Components/Hero/Hero';
import HowWorks from '../../Components/HowItWorks/HowItWorks';
import HeartAnimation from '../../Components/LogoAnimation/HeartAnimation';
import Partners from '../../Components/Partners-Section/Partners-section';
import Psychologists from '../../Components/Psychologist-section/Psychologist';
import WhyChooseUs from '../../Components/WhyChooseUs/WhyChooseUs'

function MainPage() {
    return(
        <section>
            <Header/>
            <Hero/>
            <Partners/>
            <HowWorks />
            <WhyChooseUs/>
            <Psychologists/>
            <FAQ/>
            <Footer/>
        </section>
    )
}

export default MainPage;