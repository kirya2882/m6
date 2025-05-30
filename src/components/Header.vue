<script setup>

</script>

<template>
    <header>
        <router-link to="/">
            Главная
        </router-link>
        <router-link to="/faq">
            Вопросы
        </router-link>

    </header>
</template>

<style scoped>
    .router-link-active{
        color: aquamarine;
    }
    header{
        display: flex;
        gap:15px;
        padding: 10px;
    }
</style>
