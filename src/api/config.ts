import axios from 'axios'

export const baseUrl = 'https://api.openweathermap.org/data/2.5'

export const fetcher = (url: string) => axios.get(url).then((res) => res.data)
