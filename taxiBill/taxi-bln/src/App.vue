<script setup>
	import { ref } from "vue";
	import navFoot from "./components/navFoot.vue";
	import moneyIncome from "./components/moneyIncome.vue";
	import moneySpend from "./components/moneySpend.vue";
	import otherReceipts from "./components/otherReceipts.vue";
	import btnCalc from "./components/btnCalc.vue";
	import entireResult from "./components/entireResult.vue";
	import cardMoney from "./components/cardMoney.vue";

	const currentSection = ref("");

	function showSection(sectionName) {
		currentSection.value = sectionName;
	}
</script>

<template>
	<navFoot />
	<cardMoney :showSection="showSection" />
	<moneyIncome v-if="currentSection === 'moneyIncome'" />
	<moneySpend v-if="currentSection === 'moneySpend'" />
	<otherReceipts v-if="currentSection === 'otherReceipts'" />
	<btnCalc />
	<entireResult />
</template>

<style scoped></style>
