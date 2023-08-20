import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import ProfilPage from './pages/Profil';
import Header from './pages/header';
import SideBar from "./pages/SideBar";

function AppRouter() {
    return(
        <Router>
            <Header/>
            <div className="content-profil-page">
                <SideBar />
                <Routes>
                    <Route path="/" element={<ProfilPage/>} />
                </Routes>
            </div>
        </Router>
    )
}

export default AppRouter