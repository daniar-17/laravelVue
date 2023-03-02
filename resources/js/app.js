require("./bootstrap");

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

import { createApp } from "vue";
import { createWebHistory, createRouter } from "vue-router";

// import the root component App from a single-file component.
import App from "./components/App.vue";
import Read from "./components/Read.vue";
import Create from "./components/Create.vue";
import Update from "./components/Update.vue";

const routes = [
    {
        path: "/",
        name: "read",
        component: Read,
    },
    {
        name: "create",
        path: "/create",
        component: Create,
    },
    {
        name: "update",
        path: "/detail/:id",
        component: Update,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

createApp(App).use(router).mount("#app");
