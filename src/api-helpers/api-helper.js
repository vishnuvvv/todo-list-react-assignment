import axios from "axios"

export const fetchTodos = async() => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos')
    return response.data
}

export const fetchUser = async(userId) =>{
    const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`)
    console.log(response.data);
    return response.data
}