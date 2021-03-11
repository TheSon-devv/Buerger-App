import axios from "axios";

const instance = axios.create({
    baseURL:'https://burger-builder-7604f-default-rtdb.firebaseio.com/'
})

export default instance;