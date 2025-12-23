import Container from "../../Components/Container/Container";
import Progress from "../../Components/MyProgress/MyProgress";
import MyTools from "../../Components/MyTools/MyTools";
import RecentMessages from "../../Components/RecentMessages/RecentMessages";
import RecommendedResources from "../../Components/RecommendedResources/RecommendedResources";
import UpcomingAppointments from "../../Components/UpcomingAppointments/UpcomingAppointments";
import './ClientDashboardPage.scss'

export default function ClientDashboardPage() {
    return(
        <main className="Dashboard-Page">
            <div className="Dashboard-header">
                <h3>Xoş gəlmisən, Sevinc</h3>
                <p>Bu günki fəaliyyətinə nəzər sal. Burada olduğuna görə məmnunuq.</p>
            </div>
            <div className="dashboard-components">
                <div className="left-components"> 
                    <UpcomingAppointments/>
                    <div className="comp-bottom"><Progress/></div>
                    <div className="comp-bottom"><RecentMessages/></div>
                </div>
                <div>
                    <MyTools/>
                    <div className="comp-bottom"><RecommendedResources/></div>
                </div>
            </div>
        </main>
    )
}