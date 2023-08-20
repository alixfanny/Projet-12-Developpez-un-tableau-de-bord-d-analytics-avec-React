import BarChart from "../components/BarChart";
import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import axios from 'axios';
import '../css/pages/profil.css'
import LineChartComponent from "../components/LineChart";
import RadarChartComponent from "../components/RadarChart";
import RadialBarChartComponent from "../components/RadialBarChart";

function ProfilPage() {
    const [firstName, setFirstName] = useState('');
    const { userId } = useParams()

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/user/${userId}`);
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
                    <BarChart userId={userId} />
                    <div className="content-other-chart">
                        <LineChartComponent userId={userId}/>
                        <RadarChartComponent userId={userId}/>
                        <RadialBarChartComponent userId={userId}/>
                    </div>
                </div>
                <div className="content-macronutrient">
                   
                </div>
            </div>
        </div>
    ); 
}

export default ProfilPage