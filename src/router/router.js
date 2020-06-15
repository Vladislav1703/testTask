import Vue from 'vue';
import Router from 'vue-router';

import vCatalog from '../components/catalog/v-catalog';
import vCart from '../components/cart/v-cart';
import vRepoHomepage from '../components/homepage/v-repo-homepage';

Vue.use(Router);

let router = new Router({
    routes: [
        {
            path: '/',
            name: 'homepage',
            component: vRepoHomepage,
        },
        {
            path: '/cart',
            name: 'cart',
            component: vCart,
            props: true,
        }
    ]
}) 

export default router;