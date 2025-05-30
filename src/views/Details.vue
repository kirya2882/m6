<script setup>
import {useRoute} from 'vue-router';
import {onMounted, ref} from "vue";
let route = useRoute()

let data = ref([])
let detail = ref([])
async function getData(){
    let res = await fetch('https://3708b522464b7037.mokky.dev/products')
    data.value = await res.json()
}
function getDataId(){
    for (let i of data.value) {
        if (i.id == route.params.id) {
            detail.value = i
        }
    }
}
onMounted(async ()=>{
    await getData()
    await getDataId()
})
</script>


<template>
    <section v-if="detail">
        
        <img :src="detail.img">
        <h1>{{detail.name}}</h1>
        <h2>{{detail.price}}</h2>
        <p>{{detail.desc}}</p>
    </section>
</template>

<style scoped>
    img{
        width: 30%;
        margin-left: 35%;
        margin-right: 35%;
        margin-bottom: 5%;
    }
    section{
        color: rgb(0, 0, 0);
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    }
    h1{
        font-size: 20px;
        margin: 0 5%;
        margin-bottom: 5px;
    }
    h2{
        margin: 0 5%;
        margin-bottom: 10px;
    }
    p{
        margin: 0 5%;
    }
</style>
