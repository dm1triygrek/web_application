<template>
    <div class="main">
       <GridItem
            v-for="photo in PHOTOS"
            :key="photo.id"
            v-bind:photo_data="photo"
       />
    </div>
</template>

<script>
    import GridItem from './GridItem.vue';
    import {mapActions, mapGetters} from 'vuex'

    export default {
        name: "MainSection",
        components: {
            GridItem
        },
        props: {},
        data() {
            return {
            }
        },
        computed: {
            ...mapGetters([
                'PHOTOS'
            ]),
        },
        methods: {
            ...mapActions([
            'GET_PHOTOS_FROM_API'
            ]),
            
        },
        mounted() {
            this.GET_PHOTOS_FROM_API()
            .then((response) => {
                if (response.data) {
                    console.log('Data arrived')
                }
            })
            
        }
    }
</script>

<style>
    .main {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
    }
</style>