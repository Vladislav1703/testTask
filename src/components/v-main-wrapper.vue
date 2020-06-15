<template>
    <div class="v-main-wrapper">
        <p>{{title}}</p>
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
    </div>
</template>

<script>


export default {
    name: 'v-main-wrapper',
    props: {},
    data() {
        return {
            title: 'Main wrapper'
        }
    },
    computed: {},
    methods: {},
    watch: {},
    }
</script>

<styles scoped>
    .v-main-wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        max-width: 900px;
        margin: 0 auto;
    }
</styles>