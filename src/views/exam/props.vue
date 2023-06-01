<script setup>
import { reactive } from "vue";
import common from "~/components/common.vue";

const test = reactive({
    propVal: 3,
});

const propChange = () => {
    test.propVal += 1;
};
</script>

<template>
    <common :propA="test.propVal" />
    <button @click="propChange">props value Change</button>
</template>
