import axios from "axios";


//запрос не требующий авторизации
const $host = axios.create({
baseURL:process.env.REACT_APP_API_URL
})
//в случае инстанса ниже - необходимо подставлять 
//автоматический токен к каждому запросу
const $authHost = axios.create({
baseURL:process.env.REACT_APP_API_URL
})

const authInterceptor = config => {
    config.headers.authorization = `Bearer ${localStorage.getItem('token')}`
    return config
}
$authHost.interceptors.request.use(authInterceptor)

export {
    $host,
    $authHost
}