import axios from 'axios';

export default {
    GET_PRODUCT_FROM_API({commit}) {
        return axios('http://localhost:3000/products', {
            method: "GET"
        })
        .then((products) => {
            commit('SET_PRODUCTS_TO_STATE', products.data);
            return products;
        })
        .catch((error) => {
            console.log(error);
            return error;
        });
    },
    GET_REPOS({commit}, count = 9) {
        return axios('https://api.github.com/search/repositories?q=stars:%3E1&sort=stars', {
            method: "GET"
        })
        .then((repos) => {
            commit('SET_REPOS_TO_STATE', repos.data, count);
            return repos;
        })
        .catch((error) => {
            console.log(error);
            return error;
        })
    },
}