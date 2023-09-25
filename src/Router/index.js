import { createRouter, createWebHistory } from "vue-router";
import Form from "../components/Form.vue";
import Table from "../components/Tabel.vue";

const routes = [
  { path: '/', name: 'Form', component: Form } ,
  { path: '/table', name: 'Table', component: Table } ,
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
