// Service permettant de récupérer les données
import axios from 'axios';

const baseUrl = "http://localhost:3000/user";

function showError(error) {
    console.error("Erreur lors de la récupération des données:", error)
}

const getUserActivity = async function(userId) {
    try {
        const response = await axios.get(`${baseUrl}/${userId}/activity`);
        return response.data.data.sessions;
    } catch (error) {
        showError(error);
    }
}

const getUserAverageSessions = async function (userId) {
    try {
        const response = await axios.get(`${baseUrl}/${userId}/average-sessions`);
        return response.data.data.sessions;
    } catch (error) {
        showError(error);
    }
}

const getUserPerformance = async function(userId) {
    try {
        const response = await axios.get(`${baseUrl}/${userId}/performance`);
        const mappedData = response.data.data.data.map(item => ({
            kind: response.data.data.kind[item.kind],
            value: item.value
        }));
        return mappedData;
    } catch (error) {
        showError(error);
    }
}

const getUserData = async function(userId) {
    try {
        const response = await axios.get(`${baseUrl}/${userId}`);
        const firstName = response.data.data.userInfos.firstName;
        const score = response.data.data.score ?? response.data.data.todayScore;
        const calories = response.data.data.keyData.calorieCount;
        const proteines = response.data.data.keyData.proteinCount;
        const glucides = response.data.data.keyData.carbohydrateCount;
        const lipides = response.data.data.keyData.lipidCount;
        return {
            firstName,
            score, 
            calories,
            proteines,
            glucides,
            lipides
        };
    } catch (error) {
        showError(error);
        
    }
}


export {
    getUserActivity,
    getUserAverageSessions,
    getUserPerformance,
    getUserData
}