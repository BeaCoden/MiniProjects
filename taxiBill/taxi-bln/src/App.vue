<script setup>
	import navFoot from "./components/navFoot.vue";
	import moneyIncome from "./components/moneyIncome.vue";
	import moneySpend from "./components/moneySpend.vue";
	import otherReceipts from "./components/otherReceipts.vue";
	import btnCalc from "./components/btnCalc.vue";
	import entireResult from "./components/entireResult.vue";
</script>

<template>
	<navFoot />
	<moneyIncome />
	<moneySpend />
	<otherReceipts />
	<btnCalc />
	<entireResult />
</template>

<style scoped>
	.logo {
		height: 6em;
		padding: 1.5em;
		will-change: filter;
		transition: filter 300ms;
	}
	.logo:hover {
		filter: drop-shadow(0 0 2em #646cffaa);
	}
	.logo.vue:hover {
		filter: drop-shadow(0 0 2em #42b883aa);
	}
</style>
