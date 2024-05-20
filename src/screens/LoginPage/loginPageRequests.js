import axios from 'axios';

export async function createUser(user) {
    const url = "http://3.14.84.3:8000/user/"; // Substitua pela sua URL de criação de usuário

    try {
        const response = await axios.post(url, user, {
            headers: {
                "Content-Type": "application/json"
            }
        });

        if (response.status === 200) {
            console.log("Usuário criado com sucesso!");
        } else {
            console.log("Erro na requisição:", response.status);
        }
    } catch (error) {
        console.error("Erro:", error);
    }
}

    
    export async function loginUser(user){
        const url = "http://3.14.84.3 :8000/user/" + user;
    
        await axios.get(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(response => {
            if (response.ok) {
                console.log(response)
                return response.json()
            } else {
                console.log("Erro na requisição:", response.status);
            }
        })
        .then(data => {
            console.log(data); // Aqui estamos imprimindo os dados recebidos
        })
        .catch(error => {
            console.error("Erro:", error);
        });
    
    }
    