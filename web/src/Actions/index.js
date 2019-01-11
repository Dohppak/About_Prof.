import server from './api';

export const fetchQuery = async (query, keyword) => {
    const url = `search?mode=${keyword?'keyword':'prof'}&query=${query}`
    return await server.get(url)
    .then(res => {
        console.log(res)
    })
    .catch({
        
    })
}