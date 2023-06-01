<script setup>
import { reactive, computed } from 'vue'
import examRouter from '~/router/exam'

const menu = reactive([])
// const getMenu = (routes) => {
//     for(const route of routes){
//         if(route?.children){
//             route.children.forEach((item)=>{
//                 menu.push(item)
//             })
//         }
//     }
//     // routes.children.forEach(element => {
//     //     console.log(element)
//     // });
// }
// getMenu(exam)

const menuList = computed(()=>{
    const menu = reactive([])
    for(const route of examRouter){
        if(route?.children){
            route.children.forEach((item)=>{
                menu.push(item.path)
            })
        }
    }
    return menu
})
</script>

<template>
    <div>
        <ul>
            <li v-for="(item,index) in menuList" :key="index">{{item}}</li>
        </ul>
    </div>
</template>