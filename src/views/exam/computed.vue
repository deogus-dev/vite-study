<script setup>
import { reactive, computed } from "vue";

const map = reactive({
  key1: 1,
  key2: 2,
});

//test
const cEvent = (type) => {
  if (type === "plus") map.key1 += 1;
  else map.key1 -= 1;
};

// computed vs method
// computed : 가장 큰 특징은 종속된 값에 의존하며, 반환되는 결과를 캐싱
// method : 종속된 값이라는 개념 없이 렌더링이 일어날 때마다 계속 호출 됨.
// ex) 특정 값이 변경되었을 때 computed를 통해 자동 계산하여 뿌려줘야 할 때
//     method의 경우 그때마다 매번 호출해줘야 함.
const calKey = computed(() => {
  console.log("computed 123");
  return (type) => {
    if (type === "plus") return map.key1 + map.key2;
    else return map.key1 - map.key2;
  };
});

const method = () => {
  console.log("method 123");
  return 123;
};
</script>

<template>
  <div>
    <p>metho : {{ method() }}</p>
    <p>map : {{ map }}</p>
    <p>map.key1 : {{ map.key1 }} / map.key2 : {{ map.key2 }}</p>
    <p>computed calc(key1 + key2) = {{ calKey("plus") }}</p>
    <p>computed calc(key1 - key2) = {{ calKey("minus") }}</p>
    <button @click="cEvent('plus')">key1 plus</button>
    <button @click="cEvent('minus')">key1 minus</button>
  </div>
</template>
