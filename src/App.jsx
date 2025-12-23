import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from './Pages/Login/Login'
import MainPage from './Pages/Main/MainPage'
import AboutUs from './Pages/AboutUs/AboutUs'
import TherapistsPage from './Pages/Therapists/TherapistsPage'
import ContactPage from './Pages/ContactPage/ContactPage'
import Services from './Pages/Services/Services'
import MainLayout from './Layout/MainLayout'
import ClientDashboardPage from './Pages/ClientDashboardPage/ClientDashboardPage'
import Chatbot from './Pages/Chatbot/Chatbot'
import ClientTherapists from './Pages/ClientTherapistsPage/ClientTherapistsPage'
import ClientContactPage from './Pages/ClientContactPage/ClientContactPage'
import TherapistSignup from './Pages/TherapistSignUp/TherapistSignUp'
import PsychologistLayout from './Layout/PsychologistLayout/PsychologistLayout'

function App() {
  return (
    <>
      <Routes>

        {/* loginsiz sehifeler */}

        <Route path='/' element={<MainPage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/about' element={<AboutUs/>}/>
        <Route path='/psychologists' element={<TherapistsPage/>}/>
        <Route path='/contact' element={<ContactPage/>}/>
        <Route path='/services' element={<Services/>}/> 
        <Route path='/therapist-sign-up' element={<TherapistSignup/>}/> 
        <Route path='/chatbot' element={<Chatbot/>}/>

        {/* login sonrasi sehifeler */}

        <Route path='/client' element={<MainLayout/>}>
          <Route path='dashboard' element={<ClientDashboardPage/>}/>
          <Route path='therapists' element={<ClientTherapists/>}/>
          <Route path='contact' element={<ClientContactPage/>}/>
          <Route path='chatbot' element={<Chatbot/>}/> 
        </Route>

        <Route path='/psychologist' element={<PsychologistLayout/>}>

        </Route>

      </Routes>
    </>)
}
export default App;