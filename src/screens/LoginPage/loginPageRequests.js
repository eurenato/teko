import axios from 'axios';
import { useContext, useState } from 'react';
import { UserContext } from '../../contexts/authenticatedContext';
export async function CreateUser(user) {
    const url = "http://13.59.94.236:8000/user/"; // Substitua pela sua URL de criação de usuário
    return await axios.post(url, user,{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(response => {
        return response.status === 201 ? true : false
    })
    .catch(error => {
        console.log(error)
    });
}

    
export async function LoginUser(user){
    const url = `http://13.59.94.236:8000/user?email=${encodeURIComponent(user.email)}`

    return await axios.get(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(response => {
        if (response.data[0] && response.data[0].email === user.email && response.data[0].password === user.password){
            // vai retornar true ou false dependendo do resultado da condicional
            return response.data[0]
        }
        return false
    })
    .catch(error => {
        console.error("Erro:", error);
    });
}

    