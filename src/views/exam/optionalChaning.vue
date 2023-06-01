<script setup>
import { reactive, computed } from 'vue'

const data = reactive({
    list:[
        {
            key1 : null,
            key2 : 'isValue',
        },{
            key1 : 'isValue',
        },{
            key2 : 'isValue',
        },{
            key1 : { keyAlpah: 'test'}
        }
    ]
})

const key1Computed = computed(()=>{
    return(value) => {
        if(value?.key1?.keyAlpah)
            return 'keyAlpha exist'
        else
            return 'null!!'
    }
})

// 옵셔널체이닝을 사용하지 않은 경우 > 오류 발생함
// const notUseOp = computed(()=>{
//     return(value) => {
//         if(value.key1.keyAlpah)
//             return 'isValue'
//         else
//             return 'null!!'
//     }
// })

</script>

<template>
    <div>
        <p><pre>{{data}}</pre></p>
        <p>[Result computed]</p>
        <p v-for="(item,index) in data.list" :key="index">list[{{index}}] : {{key1Computed(item)}}</p>
        <!-- <p v-for="(item,index) in data.list" :key="index">list[{{index}}] : {{notUseOp(item)}}</p> -->
    </div>
</template>