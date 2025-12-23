import AboutHero from "../../Components/AboutUs/AboutHero/AboutHero";
import CallToAction from "../../Components/AboutUs/CallToAction/CallToAction";
import GuidingPrinciples from "../../Components/AboutUs/GuidingPrinciples/GuidingPrinciples";
import TeamSection from "../../Components/AboutUs/TeamSection/TeamSection";
import Container from "../../Components/Container/Container";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";


export default function AboutUs() {
    return(
        <div>
            <Header/>
            <Container>
                <AboutHero/>
                <GuidingPrinciples/>
                <TeamSection/>
                <CallToAction/>
            </Container>
            <Footer/>
        </div>
    )
}