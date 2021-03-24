import axios from 'axios'

const API_KEY = "099148be22804e849a0c6fe022b7cf5e"

export const getHeadlines = ({ commit }) => {
    axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`)
        .then(response => {
            commit('SET_HEADLINES', response.data)
            console.log("Get headlines : ", response.data)
        })
}

export const searchHeadlines = ({ commit }, payload) => {
    console.log(payload.text)
    axios.get(`https://newsapi.org/v2/top-headlines?q=${payload.text}&apiKey=${API_KEY}`)
        .then(response => {
            commit('SET_HEADLINES', response.data)
            console.log("Search headlines : ", response.data)

        })
}
