<script setup>
import { ref, reactive, computed } from "vue";
import examRouter from "~/router/exam";

const menuList = reactive([]);
const recursiveRoute = (routes) => {
    for (const route of routes) {
        const menu = {};
        menu.path = route.path;

        if (route?.children) {
            menu.children = [];
            route.children.forEach((item) => {
                if (item.path !== "") {
                    const subMenu = {};
                    subMenu.path = menu.path + "/" + item.path;
                    subMenu.name = item.path;
                    menu.children.push(subMenu);
                }
            });
        }
        menuList.push(menu);
    }
};
recursiveRoute(examRouter);
</script>
<template>
    <div>
        <p><strong>Examples</strong></p>
        <!-- <pre>{{ menuList }}</pre> -->

        <ul v-for="(item, index1) in menuList" :key="index1">
            <p>
                <strong>{{ item.path }}</strong>
            </p>
            <li v-for="(subItem, index2) in item.children" :key="index2">
                <router-link :to="subItem.path">{{ subItem.name }}</router-link>
            </li>
        </ul>
    </div>
</template>

<style>
div {
    text-align: left;
}
</style>
