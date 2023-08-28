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

const getUserScore = async function(userId) {
    try {
        const response = await axios.get(`${baseUrl}/${userId}`);
        const scoreData = response.data.data.score * 100;
        return scoreData;
    } catch (error) {
        showError(error);
        
    }
}

export {
    getUserActivity,
    getUserAverageSessions,
    getUserPerformance,
    getUserScore
}