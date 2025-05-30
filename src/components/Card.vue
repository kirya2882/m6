<script setup>
defineProps({item:Object})
</script>

<template>
    <router-link :to ="{name:'details',params:{id:item.id}}"> 
        <img :src="item.img">
        <h1>{{item.name}}</h1>
        <p>{{item.price}}</p>
        <i class="fas fa-stream" :class="item.like ? 'red' : 'black'"></i>
    </router-link>
</template>

<style scoped>
    img{
        margin: 5% 0;
        object-fit: cover;
        aspect-ratio: 1/1;
    }
    h1{
        margin-bottom: 5px;
    }
    p{
        margin-bottom: 10px;
    }
    a{
        width: 500px;
        padding: 20px;
        background: rgba(35, 31, 35, 0.533);
        color: white;
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    }
    .red{
        color: red;
    }
    .black{
        color: white;
    }
</style>
