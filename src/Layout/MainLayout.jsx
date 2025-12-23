import { Outlet } from "react-router-dom";
import ClientNavbar from "../Components/ClientNavbar/ClientNavbar";
import Container from "../Components/Container/Container";
import './MainLayout.scss'

export default function MainLayout() {
    return(
        <div>
            <header>
                <ClientNavbar/>
            </header>
            <main>
                <Container>
                    <Outlet/>
                </Container>   
            </main>
        </div>
    )
}