<template>
    <div class="v-cart-item">
        <img class="v-cart-item__image" :src=" require('../../assets/images/' + cart__item__data.image) " alt="img">
        <div class="v-cart-item__info">
            <p>{{cart__item__data.name}}</p>
            <p>{{cart__item__data.price}}</p>
            <p>{{cart__item__data.article}}</p>
        </div>
        <div class="v-cart-item__quantity">
            <p>Qty:</p>
            <span>
            <span class="quantity__btn btn" @click="decrementItem">-</span>
            {{cart__item__data.quantity}}
            <span class="quantity__btn btn" @click="incrementItem">+</span>
            </span>
        </div>
        <button @click="deleteFromCart">Delete</button>
    </div>
</template>

<script>
    export default {
        name: 'v-cart-item',
        components: {
        },
        props: {
            cart__item__data: {
                type: Object,
                default() {
                    return {}
                }
            }
        },
        data() {
            return {

            }
        },
        computed: {},
        methods: {
            deleteFromCart() {
                this.$emit('deleteFromCart');
            },
            decrementItem() {
                this.$emit('decrement'); //передаём методы по добавлению и удалению из корзины родителям
            },
            incrementItem() {
                this.$emit('increment');
            },
        }
    }
</script>

<styles lang="scss">
    .v-cart-item {
        display: flex;
        flex-wrap: nowrap;
        justify-content: space-between;
        align-item: center;
        flex-basis: 25%;
        box-shadow: 0 0 8px 0 #e0e0e0;
        padding: $padding * 2;
        margin-bottom: $margin * 2;
        &__image {
            max-width: 90px;
        }
    }
</styles>