import { createRouter, createWebHistory } from "vue-router";
import LandingPage from "../components/landingPage.vue";
import CardMoney from "../components/cardMoney.vue";
import MoneyCosts from "../components/moneyCosts.vue";
import BtnCalc from "../components/btnCalc.vue";

const routes = [
	{ path: "/", component: LandingPage },
	{ path: "/cardMoney", component: CardMoney },
	{ path: "/moneyCosts", component: MoneyCosts },
	{ path: "/btnCalc", component: BtnCalc },
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
