<template>
    <div class="v-cart">
        <router-link :to="{name: 'catalog'}">
            <div class="v-catalog__link_to_cart">bact to catalog</div>
        </router-link>
        <h1>Cart</h1>
        <p v-if="(!cart__data.length)">There are no products in cart...Yet...</p>
        <v-cart-item
            v-for="(item, index) in cart__data"
            :key="item.article"
            :cart__item__data="item"
            @deleteFromCart="deleteFromCart(index)"
            @increment="increment(index)" 
            @decrement="decrement(index)"
        > </v-cart-item> 
        <div class="v-cart__total">
            <p class="v-cart__total__name">Total:</p>
            <p>{{cartTotalCost}}</p>
        </div>
    </div>
</template>

<script>
    import vCartItem from './v-cart-item'
    import {mapActions} from 'vuex'

    export default {
        name: 'v-cart',
        components: {
            vCartItem,
        },
        props: {
            cart__data: {
                type: Array,
                default() {
                    return []
                }
            }
        },
        data() {
            return {

            }
        },
        computed: {
            cartTotalCost() {
                let result = [];

                if (this.cart__data.length) { // если в корзине есть товары
                    for (let item of this.cart__data) {

                        result.push(item.price * item.quantity); // перемножаем цены товаров на количество
                    }
                    result = result.reduce(function(sum, el) {
                        return sum + el; //всё складываем
                    })
                    return result; // получаем результат
                } else {
                    return 0; // если нет товаров то нуль
                }

            }
        },
        methods: {
            ...mapActions([
                'DELETE_FROM_CART',
                'INCREMENT_CART_ITEM',
                'DECREMENT_CART_ITEM',
            ]),
            increment(index) {
                this.INCREMENT_CART_ITEM(index);// отлавливаем эти методы с индексом и передаём их в action
            },
            decrement(index) {
                this.DECREMENT_CART_ITEM(index);
            },
            deleteFromCart(index) {
                this.DELETE_FROM_CART(index)
            }
        },
        watch: {},
    }
</script>

<styles lang="scss">
    .v-cart{
        margin-bottom: 100px;
        &__total{
            position:fixed;
            bottom: 0;
            right:0;
            left:0;
            padding: $padding * 3;
            display:flex;
            justify-content:center;
            background: #26AE68;
            color: #fff;
            font-size:20px;
            &__name{
                font-size:20px;
            }
            &:nth-child{
                margin: $margin * 2;
            }
        }
    }
</styles>