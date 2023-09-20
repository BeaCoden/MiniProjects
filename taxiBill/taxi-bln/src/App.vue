<script setup>
	import navFoot from "./components/navFoot.vue";
	import moneyIncome from "./components/moneyIncome.vue";
	import moneySpend from "./components/moneySpend.vue";
	import otherReceipts from "./components/otherReceipts.vue";
	import btnCalc from "./components/btnCalc.vue";
	import entireResult from "./components/entireResult.vue";
	import cardMoney from "./components/cardMoney.vue";
</script>

<template>
	<navFoot />
	<cardMoney />
	<moneyIncome />
	<moneySpend />
	<otherReceipts />
	<btnCalc />
	<entireResult />
</template>

<style scoped></style>
