import axios from 'axios';

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key: 'f634b426748a4ff7bd3a6beeadca1ee2'
    }
})
