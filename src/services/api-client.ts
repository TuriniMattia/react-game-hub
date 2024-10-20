import axios from "axios";
export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params: {
        
        key: 'ddbfbcab483346078d30ca6e78d25eb8'
    }
})