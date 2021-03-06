import React from 'react'
import {Routes, Route} from 'react-router-dom'
import {Home} from './Home/Home'
import {Landing} from './Landing/Landing'
import {Profile} from './Profile/Profile'
import {Appointment} from './Appointment/Appointment'
import {Agenda} from './Agenda/Agenda'
import {Team} from './Team/Team'
import Gallery from './Gallery/Gallery'
import Services from './Services/Services'
import {Schedule} from './Schedule/Schedule'
import Footer from './Footer/Footer'
import {Calendar} from './Calendar/Calendar'
// PrimeReact Imports
import 'primereact/resources/themes/lara-light-indigo/theme.css'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'

// PrimeReact Imports
import 'primereact/resources/themes/lara-light-indigo/theme.css'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="home" element={<Home />} />
        <Route path="/" element={<Landing />} />
        <Route path="register" element={<Landing />} />
        <Route path="profile" element={<Profile />} />
        <Route path="agendas" element={<Agenda />} />
        <Route path="appointment" element={<Appointment />} />
        <Route path="forgotpassword" element={<Landing />} />
        <Route path="resetpassword/:id/:token" element={<Landing />} />
        <Route path="team" element={<Team />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="services" element={<Services />} />
        <Route path="schedule" element={<Schedule />} />
        <Route path="footer" element={<Footer />} />
        <Route path="calendar" element={<Calendar />} />
      </Routes>
    </div>
  )
}

export {App}
