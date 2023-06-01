<script setup>
import { ref } from "vue";
import { useCmnStore } from "~/store";
const cmnStore = useCmnStore();
const textVal = ref("");

const updCmnVal1 = () => {
  cmnStore.changeCmnVal(textVal.value);
};

const updCmnVal2 = () => {
  cmnStore.cmnVal = "1243125211521";
};
</script>

<template>
  <p>test</p>
  <p>get val from state : {{ cmnStore.cmnVal }}</p>
  <p>get val from getters : {{ cmnStore.getCmnVal }}</p>
  <input type="text" v-model="textVal" />
  <button @click="updCmnVal1">set val for [state]</button>
  <button @click="updCmnVal2">set val for [actions]</button>
</template>
