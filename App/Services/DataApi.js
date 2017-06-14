import { create } from 'apisauce'

const api = create({
    //baseURL: 'https://jsonplaceholder.typicode.com',    
    baseURL: 'http://172.19.11.105:10001',
    headers: {'Accept': 'application/json'}
})

//const getData = api.get('/todos')
const getData = api.get('data.json')

export default { getData }