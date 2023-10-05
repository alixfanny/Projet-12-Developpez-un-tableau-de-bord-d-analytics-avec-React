// Service permettant de récupérer les données
import axios from 'axios';
import { userAverageSessions, userData, userActivity, userPerformance } from './MockData';
import { MappingData } from './DataTransformer';

const baseUrl = "http://localhost:3000/user";
const mock = true;

function showError(error) {
    console.error("Erreur lors de la récupération des données:", error)
}

const getUserActivity = async function(userId) {
    if(mock){
        return userActivity[userId]
    }
    
    try {
        const response = await axios.get(`${baseUrl}/${userId}/activity`);
        return response.data.data.sessions;
    } catch (error) {
        showError(error);
    }
}

const getUserAverageSessions = async function (userId) {
    if(mock){
        return userAverageSessions[userId]
    }

    try {
        const response = await axios.get(`${baseUrl}/${userId}/average-sessions`);
   
        return response.data.data.sessions;
    
    } catch (error) {
        showError(error);
    }
}

const getUserPerformance = async function(userId) {
    if(mock){
        return userPerformance[userId].data.map(item => ({
            kind: userPerformance[userId].kind[item.kind],
            value: item.value
        }))
    }

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
    if(mock){
        return MappingData(userData[userId])
    }

    try {
        const response = await axios.get(`${baseUrl}/${userId}`);
        return MappingData(response.data.data)
        
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