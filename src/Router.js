import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import ProfilPage from '../src/pages/profil';
import Header from './pages/Header';
import SideBar from '../src/pages/SideBar';

function appRouter() {
    return(
        <Router>
            <Header/>
            <SideBar/>
            <Routes>
                <Route path="/" element={<ProfilPage/>} />
            </Routes>
        </Router>
    )
}

export default appRouter