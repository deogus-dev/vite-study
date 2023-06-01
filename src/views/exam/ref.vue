<script setup>
// ref는 String, Number, Object 등 어떠한 타입에서도 사용가능
// 템플릿에서 단일 변수로 사용할 수 있음
import { ref } from 'vue'

let normal = 'normal text'
const str = ref('default text')
const addTxt = ref()

const strAdd = () => {
    if(addTxt?.value){
        // ref의 경우 .value를 사용하지 않은 경우 오류 발생
        str.value += " " + addTxt.value;
        normal += " " + addTxt.value;
    } else {
        alert("please enter input text")
    }
}
</script>

<template>
    <div>
        <p>{{normal}}</p>
        <p>{{str}}</p>
        <p>{{addTxt}}</p>
        <input type="text" v-model="addTxt"/>
        <button @click="strAdd">add Text</button>
    </div>
</template>