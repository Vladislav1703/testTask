<template>
    <div class="v-catalog">
        <router-link :to="{name: 'cart', params:{cart__data: CART}}">
            <div class="v-catalog__link_to_cart">Cart: {{CART.length}}</div>
        </router-link>
        <v-catalog-item v-for="product in PRODUCTS" 
        :key="product.article" 
        :product__data="product" 
        @addToCart="addToCart"
        />
    </div>
</template>

<script>
    import vCatalogItem from './v-catalog-item';
    import {mapActions, mapGetters} from 'vuex';


    export default {
        name: 'v-catalog',
        components: {
            vCatalogItem,  
        },
        props: {},
        data() {
            return {

            }
        },
        computed: {
            ...mapGetters([
                'PRODUCTS',
                'CART'
            ]),
        },
        methods: {
            ...mapActions([
                'GET_PRODUCT_FROM_API',
                'ADD_TO_CART'
            ]),
            addToCart(data) {
                this.ADD_TO_CART(data)
            }
        },
        mounted() {
            this.GET_PRODUCT_FROM_API()
        },
    }
</script>

<styles lang="scss">
    .v-catalog{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
    }
    .v-catalog__link_to_cart {
        position: absolute;
        top: 10px;
        right: 10px;
        padding: $padding*2;
        border: 1px solid black;
    }
</styles>