<script setup>
import { reactive, computed } from 'vue'

const list = reactive({
    valList : [{
        idx: 0,
        key1: 'value1',
        key2: 'value2'
    },{
        idx: 1,
        key1: 'value3',
        key2: 'value4'
    },{
        idx: 2,
        key1: 'value5',
        key2: 'value6'
    }]
})

const filter = computed(() => {
    return (value) => {
        if(value%2 === 0)
            return false
        else
            return true
    }
})
</script>

<template>
    <div>
        <p>default</p>
        <ul>
            <li v-for="item in list.valList" :key="item.val">list[{{item.idx}}] { key1 : {{item.key1}} , key2 : {{item.key2}} }</li>
        </ul>
        <p>using index</p>
        <ul>
            <li v-for="(item,index) in list.valList" :key="index">list[{{index}}] { key1 : {{item.key1}} , key2 : {{item.key2}} }</li>
        </ul>
        <p>with v-if (idx%2 === 0)</p>
        <ul>
            <template v-for="item in list.valList">
                <li v-if="filter(item.idx)" :key="item.idx">list[{{item.idx}}] { key1 : {{item.key1}} , key2 : {{item.key2}} }</li>
            </template>
        </ul>
    </div>
</template>