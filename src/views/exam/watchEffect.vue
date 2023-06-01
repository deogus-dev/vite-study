<script setup>
import { reactive, watch, watchEffect } from "vue";

const a = reactive({ key: 1 });
const b = reactive({ key: 2 });

// a 변수에 대한 변경만 감지하여 동작, b는 감지하지 않음
// 초기 변경은 감지하지 않음
watch(a, () => {
    console.log("[watch]");
    console.log("%ca value is : " + a.key, "color:green");
    console.log("%cb value is : " + b.key, "color:purple");
    console.log(" ");
});

// 함수 내부의 의존성이 있는 변수는 모두 감지하여 동작
// 초기 변경부터 감지함
watchEffect(() => {
    console.log("[watchEffect]");
    console.log("%ca value is : " + a.key, "color:red");
    console.log("%cb value is : " + b.key, "color:blue");
    console.log(" ");
});

const cEventA = () => {
    a.key += 1;
};
const cEventB = () => {
    b.key += 1;
};
</script>

<template>
    <p>const a = {{ a }}</p>
    <p>const b = {{ b }}</p>
    <button @click="cEventA()">click Event A</button>
    <button @click="cEventB()">click Event B</button>
</template>
