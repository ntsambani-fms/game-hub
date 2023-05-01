import axios from "axios";

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key:'29bd27dd92084e4b860cb5f8ed714e10'
    }
})