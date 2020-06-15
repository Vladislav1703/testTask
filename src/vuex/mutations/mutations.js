export default {
    SET_PRODUCTS_TO_STATE: (state, products) => {
        state.products = products;
    },
    SET_REPOS_TO_STATE: (state, repos, count) => {
        state.repos = repos.items.slice(0, 2);
    },
    SET_CART: (state, product) => {
        if (state.cart.length) {
            let isProductExist = false;
            state.cart.map(function (item) {
                if (item.article === product.article) {
                    isProductExist = true;
                    item.quantity++;
                }
            })
            if (!isProductExist) {
                state.cart.push(product);
            }
        } else {
            state.cart.push(product);
        }
    },
    REMOVE_FROM_CART: (state, index) => {
        state.cart.splice(index, 1)
    },
    DECREMENT_CART_ITEM: (state, index) => {
        if (state.cart[index].quantity > 1) {
            state.cart[index].quantity--;
        }
    },
    INCREMENT_CART_ITEM: (state, index) => {
        state.cart[index].quantity++;
    },
}