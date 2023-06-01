<script setup>
const props = defineProps({
    propA: {
        type: Number,
    },
});
</script>

<template>
    <p>props : {{ propA }}</p>
</template>
