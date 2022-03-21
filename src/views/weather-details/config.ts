type APIconfigType = {
    method: 'get' | 'post' | 'put' | 'patch' | 'delete',
    url: string,
    [key: string]: string
}


export const getWeatherDetails: APIconfigType = {
    set addCity(city: string) {
        this.city = city
    },
    city: '',
    get url() {
        return `data/2.5/forecast?q=${this.city}&APPID=${process.env.REACT_APP_APPID}&units=metric`
    },
    method: 'get',
}