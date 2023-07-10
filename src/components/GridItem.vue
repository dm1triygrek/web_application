<template>
    <div class="grid-item">
        <img :src="photo_data.url" alt="" class="grid-item__img">
        <h2 class="grid-item__title">{{ photo_data.title }}</h2>
        <p class="grid-item__info">Номер альбома {{photo_data.albumId}}</p>
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
    .grid-item__title {
        margin-bottom: 6px;
        padding: 10px 10px;
        font-size: 18px;
        font-weight: 500;
        line-height: 28px;
        color: #0D1421;
    }
    .grid-item__info {
        padding: 10px 10px;
        font-size: 14px;
        font-weight: 500;
        line-height: 20px;
        color: #667085;
    }
    .grid-item {
        border: 1px solid #dfe2e7;
        border-radius: 15px;
        width: auto;
        transition: 0.3s linear;
    }
    .grid-item:hover {
        background-color: #f1f1f1;
    }
    .grid-item__img {
        margin-top: 10px;
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 200px;
        height: 200px;
    }
</style>