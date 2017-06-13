import { create } from 'apisauce'

const api = create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers: {'Accept': 'application/json'}
})

const getData = api.get('/todos')

export default { getData }