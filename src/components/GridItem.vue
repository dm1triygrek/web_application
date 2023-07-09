<template>
    <div class="grid__item">
        <h2 class="h2__title">{{ photo_data.title }}</h2>
        <p class="p__info">Номер альбома {{photo_data.albumId}}</p>
        
    </div>
</template>

<script>
    export default {
        name: "GridItem",
        components: {},
        props: {
            photo_data: {
                type: Object,
                default() {
                    return {}
                }
            }
        },
        data() {
            return {}
        },
        methods: {
        },
        computed: {
            
        }
    }
    
</script>

<style>
    .h2__title {
        margin-bottom: 16px;
        font-family: Inter;
        font-style: normal;
        font-size: 18px;
        font-weight: 500;
        line-height: 28px;
        color: #0D1421;
    }
    .p__info {
        font-family: Inter;
        font-style: normal;
        font-size: 14px;
        font-weight: 500;
        line-height: 20px;
        color: #667085;
    }
    .grid__item {
        width: 485px;
        margin-left: 125px;
        margin-bottom: 52px;
    }
</style>