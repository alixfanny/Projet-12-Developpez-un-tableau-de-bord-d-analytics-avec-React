import BarChart from "../components/BarChart";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../css/pages/profil.css'

function ProfilPage() {
    const [firstName, setFirstName] = useState('');
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/user/18`);
                setFirstName(response.data.data.userInfos.firstName);
            } catch (error) {
                console.error('Erreur lors de la récupération des données :', error);
            }
        };

        fetchData();
    })
    return (
        <div className="profil-page">
            <div className="profil-title">
                <h1 className="title">Bonjour <span style={{ color: '#E60000' }}>{firstName}</span></h1>
                <p className="subtitle">Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
            </div>
            <div className="content-page">
                <div className="content-charts">
                    <BarChart />
                    <div className="content-other-chart">
                        <div className="content-linechart"></div>
                        <div className="content-radarchart"></div>
                        <div className="content-radialbarchart"></div>
                    </div>
                </div>
                <div className="content-macronutrient">
                   
                </div>
            </div>
        </div>
    ); 
}

export default ProfilPage