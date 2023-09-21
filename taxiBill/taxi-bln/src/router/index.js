import { createRouter, createWebHistory } from "vue-router";
import OverView from "../components/overView.vue";
import BtnCalc from "../components/btnCalc.vue";
import MoneyCosts from "../components/moneyCosts.vue";
import CardMoney from "../components/cardMoney.vue";
import LoginPage from "../components/loginPage.vue";
import LandingPage from "../components/landingPage.vue";

const routes = [
	{ path: "/overView", component: OverView },
	{ path: "/btnCalc", component: BtnCalc },
	{ path: "/moneyCosts", component: MoneyCosts },
	{ path: "/cardMoney", component: CardMoney },
	{ path: "/loginPage", component: LoginPage },
	{ path: "/", component: LandingPage },
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
