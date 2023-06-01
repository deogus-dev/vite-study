import MainLayout from "~/layout/MainLayout.vue";

const routes = [
    {
        path: "/exam",
        component: MainLayout,
        children: [
            {
                path: "",
                component: () => import("~/views/exam/index.vue"),
            },
            {
                path: "ref",
                component: () => import("~/views/exam/ref.vue"),
            },
            {
                path: "reactive",
                component: () => import("~/views/exam/reactive.vue"),
            },
            {
                path: "computed",
                component: () => import("~/views/exam/computed.vue"),
            },
            {
                path: "list",
                component: () => import("~/views/exam/list.vue"),
            },
            {
                path: "optionalChaning",
                component: () => import("~/views/exam/optionalChaning.vue"),
            },
            {
                path: "watchEffect",
                component: () => import("~/views/exam/watchEffect.vue"),
            },
            {
                path: "props",
                component: () => import("~/views/exam/props.vue"),
            },
        ],
    },
];

export default routes;
