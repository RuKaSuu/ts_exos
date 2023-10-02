import axios from 'axios';

export async function getUserSummary(id: number) {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`).then(response => response.data);
    if(response === undefined) {
        return 'User not found'
    }
    let name:string = response.name
    let username:string = response.username
    let email:string = response.email
    return(name + ' (' + username + ') ' +  '- ' + email)
}

