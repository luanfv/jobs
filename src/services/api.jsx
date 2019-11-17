import axios from 'axios'

export const localApi = axios.create({baseURL: 'http://localhost:3000'}) 

export const localApi2 = axios.create({baseURL: 'http://localhost:3001'}) 

export const naveApi = axios.create({baseURL: 'https://nave.gitlab.io/guides/nave/challenges/frontend-challenge/files/db.json'})