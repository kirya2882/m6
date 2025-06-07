<script setup>

import Card from "../components/Card.vue"
import {onMounted, ref} from "vue";
let data = ref([])
async function getData(){
    let res = await fetch('https://3708b522464b7037.mokky.dev/products')
    data.value = await res.json()
}
onMounted(async ()=>{
    await getData()
})
let sort = ref('up')
function sortData(){
  if (sort.value == "up"){
      data.value.sort((a,b)=>{
    return a.price - b.price;
    });
  }
  else if (sort.value == 'down'){
  data.value.sort((a,b)=>{
    return b.price - a.price;
    });
  }
  
}
let search = ref("")
function searchData(){
  search.value = search.value.trim().toLowerCase()
  data.value = data.value.filter((item)=>{
    return item.name.toLowerCase().includes(search.value) || item.desc.toLowerCase().includes(search.value)
  });
}

// let data = [
//     {
//         img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQroncSo8XhvWyQgIG8v4Tn0q6doB0oD3qqDXFz-jgmSLmhgKiC_J7rIHrIR7go9qh_tyA&usqp=CAU',
//         name:'s',
//         desc:'sxws',
//         like:true
//     },
//     {
//         img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQroncSo8XhvWyQgIG8v4Tn0q6doB0oD3qqDXFz-jgmSLmhgKiC_J7rIHrIR7go9qh_tyA&usqp=CAU',
//         name:'shjghjghjgghj',
//         desc:'3',
//         like:true
//     },
//     {
//         img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQroncSo8XhvWyQgIG8v4Tn0q6doB0oD3qqDXFz-jgmSLmhgKiC_J7rIHrIR7go9qh_tyA&usqp=CAU',
//         name:'2',
//         desc:'5',
//         like:true
//     },
//     {
//         img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQroncSo8XhvWyQgIG8v4Tn0q6doB0oD3qqDXFz-jgmSLmhgKiC_J7rIHrIR7go9qh_tyA&usqp=CAU',
//         name:'52',
//         desc:'2',
//         like:false
//     },
// ]



</script>
<template>
  <section>
    <nav>
      <label>
        <p>соортировка</p>
        <select v-model="sort" @change="sortData">
          <option value="up">По возрастанию</option>
          <option value="down">По убыванию</option>
        </select>
      </label>
      <label>
        <p>Поиск:</p>
        <input v-model="search">
        <button @click="searchData">Поиск</button>
      </label>
    </nav>
    <div>
      <Card v-for="(item,index) in data" :key="index" :item="item"/>
    </div>
  </section>
</template>
<style scoped>
    div{
        background-color: rgb(55, 55, 55);
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;

    }
</style>
