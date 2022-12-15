import axios from 'axios';

const api = axios.create({
        baseURL: 'http://localhost:3000',
        timeout: 1000,
        headers: {'Content-Type': 'application/json'}
    }
);

export default api;

// export function setupApiClient(ctx = undefined){

//     const api = axios.create({
//         baseURL: 'http://localhost:3333',
//         headers: {'Content-Type': 'application/json'}
//     })
    

//     return api;

// }

// export const api = setupApiClient();