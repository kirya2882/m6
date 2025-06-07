<script setup>
import { ref } from "vue";

let name = ref("");
let src = ref("");
let price = ref("");
let desc = ref("")
function sendItem(){
    let data = {
        name: name.value,
        img: src.value,
        price: price.value,
        desc: desc.value
    };
    fetch("https://3708b522464b7037.mokky.dev/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    });
}
</script>



<template>
  <form @submit.prevent="sendItem">
    <label>
        <p>Введите название</p>
        <input v-model="name" required />
        {{ name }}
    </label>
    <label>
      <p>Введите картинку:</p>
      <input v-model="src" required />
      <img :src="src" v-if="src"/>
    </label>
    <label>
        <p>Введите цену</p>
        <input v-model="price" type="number" required>
    </label>
    <label>
        <p>Введите описание</p>
        <input v-model="desc" required>
    </label>
    <button type="submit">Отправить</button>
  </form>
</template>

<style scoped>
    form{
        margin: 10% 20%;
        width: 60%;
        padding: 2%;
        border-radius: 25px;
        background-color: rgba(35, 31, 35, 0.533);
    }
    input{
        width:100%;
    }
    label{
        margin: 2% 0;
        display: block;
    }
    p{
        color: white;
        font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    }
</style>
