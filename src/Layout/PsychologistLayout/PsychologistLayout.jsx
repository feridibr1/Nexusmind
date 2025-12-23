import { Outlet } from "react-router-dom";
import Container from "../../Components/Container/Container";
import PsychologistNavbar from "../../Components/PsychologistNavbar/PsychologistNavbar";


export default function PsychologistLayout() {
    return (
        <div>
            <header>
                <PsychologistNavbar/>
            </header>
            <main>
                <Container>
                    <Outlet/>
                </Container>
            </main>
        </div>
    )
}