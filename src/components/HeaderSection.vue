<template>
    <div class="header">
        <div class="container">
                <div class="header__title">
                    <img src="../assets/Logo.svg" alt="Logo" class="logo">
                    <h1 class="h1">Список альбомов</h1>
                </div>     
            </div>
    </div>
</template>

<script>

    export default {
        name: 'HeaderSection',
        components: {},
        props: {},
        data() {
            return{}
        },
        computed: {}
    }
</script>

<style>
.header__title {
    display: flex;
    height: 120px;
    padding: 14px 160px;
    justify-content: center;
    align-items: center;
}
.logo {
    margin-right: 16px;
    width: 32px;
    height: 32px;
}
.h1 {
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: 32px;
}
.line {
    margin-bottom: 150px;
    width: auto;
    border: none;
    background-color: rgb(233, 233, 233);
    height: 1px;
}
</style>