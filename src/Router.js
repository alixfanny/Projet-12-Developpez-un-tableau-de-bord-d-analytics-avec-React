import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import ProfilPage from './pages/Profil';
import Header from './pages/header';
import SideBar from "./pages/SideBar";

function AppRouter() {
    return(
        <Router>
            <Header/>
            <Routes>
                <Route path="/" element={<SideBar/>} />
                <Route path="/" element={<ProfilPage/>} />
            </Routes>
        </Router>
    )
}

export default AppRouter