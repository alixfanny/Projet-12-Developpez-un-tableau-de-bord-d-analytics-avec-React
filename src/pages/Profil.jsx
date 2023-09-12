import BarChart from "../components/BarChart";
import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import '../css/pages/profil.css'
import LineChartComponent from "../components/LineChart";
import RadarChartComponent from "../components/RadarChart";
import RadialBarChartComponent from "../components/RadialBarChart";
import Cards from "../components/Cards";
import { getUserData } from "../services/UserService";
import calorieIcone from '../icone/energy.svg';
import glucideIcon from '../icone/apple.svg';
import lipideIcon from '../icone/cheeseburger.svg';
import proteineIcon from '../icone/chicken.svg';

function ProfilPage() {
    const [firstName, setFirstName] = useState('');
    const [proteines, setProteine] = useState(0);
    const [calories, setCalorie] = useState(0);
    const [glucides, setGlucide] = useState(0);
    const [lipides, setLipide] = useState(0);
    const { userId } = useParams()

    useEffect(() => {
        async function fetchData () {
            const userData = await getUserData(userId);
            setFirstName(userData.firstName);
            setCalorie(userData.calories);
            setProteine(userData.proteines);
            setGlucide(userData.glucides);
            setLipide(userData.lipides);
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
                   <Cards className="calories" color={"#fbeaea"} icon={calorieIcone} title={`${calories}kCal`} subtitle={"Calories"} />
                   <Cards className="proteines" color={"#e9f4fb"} icon={proteineIcon} title={`${proteines}g`} subtitle={"Proteines"} />
                   <Cards className="glucides" color={"#fbf6e5"} icon={glucideIcon} title={`${glucides}g`} subtitle={"Glucides"} />
                   <Cards className="lipides" color={"#fbeaef"} icon={lipideIcon} title={`${lipides}g`} subtitle={"Lipides"} />
                </div>
            </div>
        </div>
    ); 
}

export default ProfilPage