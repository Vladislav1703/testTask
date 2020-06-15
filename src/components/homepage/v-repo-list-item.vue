<template>
    <div class="v-repo-list-item">
        <div class="v-repo-list-item-name">{{repo.name}}</div>
        <div class="v-repo-list-stars-count">{{repo.stargazers_count}}</div>
        <div class="v-repo-list-date-last-commit">{{  dateLastCommit }}</div>
        <div class="v-repo-list-item-link">{{repo.html_url}}</div>
    </div>
</template>

<script>    
    import {mapActions, mapGetters} from 'vuex';
    import axios from 'axios';


    export default {
        name: 'list-item',
        data () {
            return {
                dateLastCommit: '',
            }
        },
        props: {
            repo: {
                type: Object,
                default () {
                    return {};
                }
            },
            commits: {
                type: String,
                default () {
                    return '';
                }
            }
        },
        methods: {
            ...mapActions([
                'GET_LAST_COMMIT'
            ]),
        },
        computed: {},
        mounted () {
            fetch(this.commits.slice(0, -6)) 
                .then(response => response.json())
                .then(commits => commits[0].commit.author.date)
                .then(date => this.dateLastCommit = new Date( Date.parse(date)))
        },

    }

</script>

<style lang='scss'>

</style>