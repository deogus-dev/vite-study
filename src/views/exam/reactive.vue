<script setup>
// reactive는 Object, Array, Map, Set과 같은 타입에서만 사용 가능
// 반응형 변수를 많이 선언할 때 간단하게 사용 가능
import { reactive } from 'vue'

const map = reactive({
    key1:1,
    key2:2
})

const cEvent = (type) => {
    if(type === 'plus')
        map.key1 += 1
    else
        map.key1 -= 1
}
</script>

<template>
    <div>
        <p>map : {{map}}</p>
        <p>map.key1 : {{map.key1}}</p>
        <p>map.key2 : {{map.key2}}</p>
        <p>key1 + key2 = {{map.key1 + map.key2}}</p>
        <p>key1 - key2 = {{map.key1 - map.key2}}</p>
        <button @click="cEvent('plus')">key1 plus</button><button @click="cEvent('minus')">key1 minus</button>
    </div>    
</template>