import React from 'react';
import LocalStorage from './LocalStorage'

const usersData = []

const getAllUsers = () => {
    usersData = JSON.parse(getData(dataName)||'[]');
    return usersData   
}

const addUser = (user) => {
    usersData.push(user);
    setData(dataName, JSON.stringify(usersData));    
}

export default {getAllUsers, addUser}