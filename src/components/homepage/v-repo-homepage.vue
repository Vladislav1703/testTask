<template>
    <div class="v-repo-homepage">
        <vRepoSearch />
        <div class="v-repo-list">
            <vRepoListItem v-for="repo in REPOS"
            :repo="repo"
            :commits="repo.commits_url"
            :key="repo.id"
            />
        </div>
    </div>
</template>

<script>
    import vRepoSearch from './v-repo-search';
    import vRepoListItem from './v-repo-list-item';

    import {mapActions, mapGetters} from 'vuex';

    export default {
        name: 'v-repo-homepage',
        components: {
            vRepoSearch,
            vRepoListItem,
        },
        computed:{
            ...mapGetters([
                'REPOS',
            ]),
        },
        methods: {
            ...mapActions([
                'GET_REPOS',
            ]),
        },
        mounted () {
            this.GET_REPOS()
        }
    }

</script>

<style lang='scss'>

</style>