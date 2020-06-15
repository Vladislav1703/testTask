import Vue from 'vue';
import Vuex from 'vuex';

import commonActions from './actions/actions';
import apiRequests from '@/vuex/actions/api-requests';
import mutations from '@/vuex/mutations/mutations';
import getters from '@/vuex/getters/getters';

const actions = {...commonActions,...apiRequests};


Vue.use(Vuex);

let store = new Vuex.Store({
    state: {
        products: [],
        cart: [],
        repos: []
    },
    mutations, 
    actions,
    getters

});

export default store;